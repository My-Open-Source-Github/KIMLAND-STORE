/**
 * Cloudflare Worker Backend for Paystack Integration & Cloudflare D1/KV storage
 * Handles secure payment initialization, webhook validation, and persistent order tracking.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const method = request.method;

    // Set up standard CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, X-Paystack-Signature",
    };

    if (method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // 1. POST /api/paystack/initialize
    if (url.pathname === "/api/paystack/initialize" && method === "POST") {
      try {
        const body = await request.json();
        const { email, amount, items } = body;

        if (!email || !amount) {
          return new Response(JSON.stringify({ error: "Missing email or amount parameters" }), {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders }
          });
        }

        const secretKey = env.PAYSTACK_SECRET_KEY || "sk_test_mock_secret_key_from_env";

        // Paystack expects amount in Kobo (Naira multiplied by 100)
        const amountInKobo = Math.round(amount * 100);

        // Call Paystack Transaction Initialization API
        const response = await fetch("https://api.paystack.co/transaction/initialize", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${secretKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            amount: amountInKobo,
            callback_url: `${env.APP_URL || url.origin}/cart/index.html?payment=success`,
            metadata: {
              custom_fields: [
                {
                  display_name: "Cart Items",
                  variable_name: "cart_items",
                  value: JSON.stringify(items || [])
                }
              ]
            }
          })
        });

        const data = await response.json();
        
        if (!response.ok || !data.status) {
          throw new Error(data.message || "Failed to initialize Paystack transaction");
        }

        return new Response(JSON.stringify({
          authorization_url: data.data.authorization_url,
          reference: data.data.reference
        }), {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });

      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      }
    }

    // 2. POST /api/paystack/webhook
    if (url.pathname === "/api/paystack/webhook" && method === "POST") {
      try {
        const signature = request.headers.get("x-paystack-signature");
        if (!signature) {
          return new Response("Unauthorized: Missing Paystack signature header", { status: 401 });
        }

        const rawBody = await request.text();

        // Verify HMAC-SHA512 Signature securely
        const verified = await verifyPaystackSignature(
          rawBody,
          signature,
          env.PAYSTACK_SECRET_KEY || "sk_test_mock_secret_key_from_env"
        );

        if (!verified) {
          return new Response("Unauthorized: Invalid transaction signature", { status: 401 });
        }

        const payload = JSON.parse(rawBody);

        // Handle successful purchase transaction
        if (payload.event === "charge.success") {
          const transactionData = payload.data;
          const email = transactionData.customer.email;
          const reference = transactionData.reference;
          const amountPaid = transactionData.amount / 100; // Convert back from Kobo to Naira
          const metadata = transactionData.metadata;
          const cartItems = metadata && metadata.custom_fields 
            ? metadata.custom_fields.find(f => f.variable_name === "cart_items")?.value || "[]"
            : "[]";

          // Save transaction order securely in Cloudflare D1 SQL database table `orders`
          if (env.DB) {
            await env.DB.prepare(
              `INSERT INTO orders (reference, email, amount, items, status, created_at) 
               VALUES (?, ?, ?, ?, ?, ?)`
            )
            .bind(
              reference, 
              email, 
              amountPaid, 
              cartItems, 
              "paid", 
              new Date().toISOString()
            )
            .run();
          }

          // Optional: Cache transaction reference details in Cloudflare KV
          if (env.KV) {
            await env.KV.put(`order:${reference}`, JSON.stringify({
              email,
              amount: amountPaid,
              items: JSON.parse(cartItems),
              status: "paid",
              date: new Date().toISOString()
            }));
          }
        }

        return new Response("Webhook processed successfully", { status: 200 });

      } catch (error) {
        return new Response(`Webhook Error: ${error.message}`, { status: 500 });
      }
    }

    // Standard 404 handler for unknown routes
    return new Response("Endpoint Not Found", { status: 404 });
  }
};

/**
 * Web Cryptography API implementation of HMAC-SHA512 to verify Paystack signature
 */
async function verifyPaystackSignature(message, signature, secret) {
  const encoder = new TextEncoder();
  const secretKeyData = encoder.encode(secret);
  
  const key = await crypto.subtle.importKey(
    "raw",
    secretKeyData,
    { name: "HMAC", hash: "SHA-512" },
    false,
    ["verify", "sign"]
  );

  const messageData = encoder.encode(message);
  
  // Convert signature hex to Uint8Array
  const hexPattern = /^[0-9a-fA-F]+$/;
  if (!hexPattern.test(signature)) return false;
  
  const sigBytes = new Uint8Array(signature.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
  
  return await crypto.subtle.verify("HMAC", key, sigBytes, messageData);
}
