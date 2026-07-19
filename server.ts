import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Route: Check Health
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // API Route: Initialize Paystack payment transaction
  app.post("/api/paystack/initialize", async (req, res) => {
    try {
      const { email, amount, items } = req.body;

      if (!email || !amount) {
        return res.status(400).json({ error: "Missing required parameters: email, amount" });
      }

      const secretKey = process.env.PAYSTACK_SECRET_KEY;
      const appUrl = process.env.APP_URL || `http://localhost:${PORT}`;

      // If no secret key is configured, return a mock redirect URL that allows testing the full checkout cycle
      if (!secretKey || secretKey === "MY_PAYSTACK_SECRET_KEY" || secretKey === "") {
        console.log("No PAYSTACK_SECRET_KEY found. Simulating payment sandbox redirect...");
        const mockSuccessUrl = `${appUrl}/cart/index.html?payment=success&ref=MOCK_REF_${Date.now()}`;
        return res.json({ authorization_url: mockSuccessUrl });
      }

      // Convert amount to Kobo (Kobo = Naira * 100)
      const amountInKobo = Math.round(amount * 100);

      // Call Paystack API
      const response = await fetch("https://api.paystack.co/transaction/initialize", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${secretKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          amount: amountInKobo,
          callback_url: `${appUrl}/cart/index.html?payment=success`,
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

      const data = await response.json() as any;

      if (!response.ok || !data.status) {
        return res.status(response.status).json({
          error: data.message || "Failed to initialize Paystack transaction with official API"
        });
      }

      return res.json({
        authorization_url: data.data.authorization_url,
        reference: data.data.reference
      });

    } catch (error: any) {
      console.error("Paystack initialization error:", error);
      return res.status(500).json({ error: error.message || "Internal server error" });
    }
  });

  // API Route: Paystack Webhook handler
  app.post("/api/paystack/webhook", (req, res) => {
    // Webhook logging
    const signature = req.headers["x-paystack-signature"];
    console.log("Received Paystack webhook with signature:", signature);
    console.log("Webhook Body:", JSON.stringify(req.body));
    
    // In local development sandbox, always return 200 Success
    return res.status(200).send("Webhook Received & Processed");
  });

  // Mount Vite middleware in development (non-production)
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static compiled files in production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Development Server running on http://localhost:${PORT}`);
  });
}

startServer();
