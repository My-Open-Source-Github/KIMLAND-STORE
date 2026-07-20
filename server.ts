import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import fs from "fs";

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

      const appUrl = process.env.APP_URL || `http://localhost:${PORT}`;

      // 1. Try to load per-brand Paystack configuration
      let brandId = "";
      if (items && Array.isArray(items) && items.length > 0) {
        brandId = items[0].brand || "";
      }

      let secretKey = "";

      const configPath = path.join(process.cwd(), "data", "paystack_configs.json");
      if (brandId && fs.existsSync(configPath)) {
        try {
          const configContent = fs.readFileSync(configPath, "utf-8");
          const brandConfigs = JSON.parse(configContent);
          if (brandConfigs[brandId]) {
            const bConfig = brandConfigs[brandId];
            const mode = bConfig.mode || "test";
            const keyToUse = mode === "live" ? bConfig.live_secret_key : bConfig.test_secret_key;
            
            // If it's not a placeholder, use it!
            if (keyToUse && !keyToUse.startsWith("YOUR_") && keyToUse.trim() !== "") {
              secretKey = keyToUse;
              console.log(`Using Paystack configuration from JSON config for brand: ${brandId} (Mode: ${mode})`);
            }
          }
        } catch (err) {
          console.error("Error reading or parsing paystack_configs.json:", err);
        }
      }

      // 2. Fallback to general environment variable
      if (!secretKey) {
        secretKey = process.env.PAYSTACK_SECRET_KEY || "";
        if (secretKey && !secretKey.startsWith("YOUR_") && secretKey !== "MY_PAYSTACK_SECRET_KEY") {
          console.log("Using global default PAYSTACK_SECRET_KEY from environment variables");
        } else {
          secretKey = ""; // Ensure empty if it's a placeholder
        }
      }

      // If no valid secret key is configured, return a mock redirect URL that allows testing the full checkout cycle
      if (!secretKey || secretKey === "") {
        console.log(`No valid PAYSTACK_SECRET_KEY found for brand '${brandId || "unknown"}'. Simulating payment sandbox redirect...`);
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
