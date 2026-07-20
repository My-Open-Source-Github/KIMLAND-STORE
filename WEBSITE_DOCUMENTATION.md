# KIMLAND E-Commerce Store — Master Operations & Management Guide

Welcome to the **KIMLAND Store** Master Operations and Management Guide. This document provides complete, detailed instructions on how to run, edit, manage, and scale the entire full-stack e-commerce architecture.

---

## 📖 Table of Contents
1. [System Architecture Overview](#1-system-architecture-overview)
2. [Adding & Editing Products (`products.json`)](#2-adding--editing-products-productsjson)
3. [Managing Brands (`store.js`)](#3-managing-brands-storejs)
4. [Paystack Payment Dashboard Setup (14+ Brands)](#4-paystack-payment-dashboard-setup-14-brands)
5. [Cloudflare Deployment & Domain Management](#5-cloudflare-deployment--domain-management)
6. [Local Development, Building & Running](#6-local-development-building--running)
7. [GitHub Synchronization & `CNAME` Preservation](#7-github-synchronization--cname-preservation)

---

## 1. System Architecture Overview

The KIMLAND Store is built using a highly optimized, high-performance, and resilient hybrid architecture:
- **Frontend (Single-Screen & Multi-Page Hybrid)**: Powered by standard HTML5, clean CSS3 (with responsive modern media queries), and a vanilla JavaScript Routing & Data Engine (`/assets/js/store.js`). It reads products dynamically from JSON, stores user carts in `localStorage` securely, and manages seamless state transfers.
- **Backend (Express Proxy Server)**: A secure, server-side Node.js Express script (`/server.ts`) handles API transactions, proxies sensitive third-party connection requests, and serves static files. This design ensures that **your secret API keys are never exposed to client browsers**.
- **Data Layer (`/data/` JSON databases)**: All product details, specifications, prices, images, and brand-specific configurations reside in flat JSON files (`products.json` and `paystack_configs.json`). This eliminates heavy relational database costs while keeping updates simple and instantaneous.

---

## 2. Adding & Editing Products (`products.json`)

All products shown across the 14 brands on the website are dynamically loaded from `/data/products.json`.

### 📝 Step-by-Step: Adding a New Product
To add a new product or edit an existing one, open `/data/products.json` and add/modify a JSON object inside the array.

#### Standard Product Schema Template:
```json
  {
    "id": "creative-graphics-wallpapers-synthwave",
    "slug": "synthwave-sunset-wallpapers",
    "name": "Synthwave Sunset 8K Wallpaper Pack",
    "brand": "creative",
    "brand_name": "Creative",
    "niche": "wallpapers",
    "niche_name": "Wallpapers",
    "merchandise": "minimal-wallpapers",
    "merchandise_name": "Minimal Wallpapers",
    "price": 12000,
    "old_price": 15000,
    "currency": "NGN",
    "stock": 100,
    "featured": true,
    "images": [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=600&auto=format&fit=crop&q=80"
    ],
    "youtube": "https://www.youtube.com/embed/P80u3m_K9r8",
    "description": "<p>Experience high-contrast modern aesthetics with our hand-painted Synthwave sunset wallpaper pack.</p><ul><li>Includes 5 custom high-resolution illustrations</li><li>Aspect ratios tuned for mobile and wide-panel desktop monitors</li></ul>",
    "specs": {
      "Format": "PNG / JPEG",
      "Resolution": "7680 x 4320 (8K)",
      "Style": "Minimalist Synthwave",
      "License": "Personal Use"
    },
    "seo_title": "Buy Synthwave Sunset 8K Wallpapers - Creative",
    "seo_desc": "Premium hand-painted minimalist synthwave sunset backgrounds in 8K resolution."
  }
```

### 💡 Keys Explained:
1. **`id` (Unique Identifier)**: Always use a unique text string. It is recommended to follow the format: `[brand]-[niche]-[merchandise]-[slug]`.
2. **`slug` (URL Segment)**: The exact folder-friendly slug representing the product. Must be lowercase, using dashes instead of spaces.
3. **`brand`**: Must exactly match the brand identifier key defined in `/assets/js/store.js` (e.g., `creative`, `diy`, `coded`).
4. **`niche` & `merchandise`**: Internal category routing slugs.
5. **`price` & `old_price`**: Numeric values in Naira (do not include commas or currency symbols here).
6. **`featured`**: Set to `true` to display this product in the global bottom "In-Demand Assets" and "Trending Products" carousels. Set to `false` otherwise.
7. **`images`**: An array of image URLs (either absolute paths or relative paths in your repository).
8. **`youtube`**: To embed a product demonstration or review video, paste the YouTube embed URL (e.g. `https://www.youtube.com/embed/[video_id]`). If left blank, the system will gracefully hide the video player tab.
9. **`description`**: Supports full raw HTML markup (like `<p>`, `<ul>`, `<li>`, `<strong>`) so you can craft detailed, responsive descriptions.
10. **`specs`**: Key-value pairs rendered dynamically on the product specs page. Feel free to add as many specs as needed!

---

## 3. Managing Brands (`store.js`)

KIMLAND supports **14 specialized subsidiary brands**:
1. `creative` (Creative 2D Art, UI/UX Kits)
2. `creative3d` (3D Scenes, Plugins)
3. `creative2d` (2D Game Assets, Parallax Layouts)
4. `creative-design` (3D Models, Scans, CGI Animations)
5. `falcon-design` (Joinery Mappings, Laser Panels)
6. `eggcellent-design` (Residential blueprints, CAD blocks)
7. `upstudio` (Beats, DAW plugins, SFX packs)
8. `alpaca` (Mechanical Schematics, PCB IoT Gerber layouts)
9. `coded` (SaaS, Web themes, React and Next.js website templates)
10. `organic-flow` (Clothing and footwear tech packs, jewelry CADs)
11. `mindshot` (AI Prompts, Story graphs, Novel blueprints)
12. `lightwork` (摄影 Photography Stock, VFXsmoke panels, Lightroom LUTs)
13. `diy` (Ecological maker processes, marketing playbooks)
14. `enlightener` (Financial counsel models, executive startup consulting)

### 🚀 Adding More Brands Dynamically
If you want to introduce a **15th brand** (or more), simply:
1. Open `/assets/js/store.js`.
2. Locate the `BRANDS_INFO` constant at the top of the file (around line 7).
3. Insert a new entry using this template:
   ```js
     "my-new-brand": {
       "name": "My New Brand",
       "description": "Short branding sentence describing what this sub-brand provides.",
       "long_description": "Extremely detailed description of the sub-brand values.",
       "image": "https://images.unsplash.com/photo-[id]?w=600&auto=format&fit=crop&q=80",
       "niches": {
         "niche-slug": {
           "name": "Niche Name",
           "intro": "Short intro to this niche group",
           "merchandises": {
             "merch-slug": "Merchandise Name"
           }
         }
       }
     }
   ```
4. Update the Paystack configuration file to bind this new brand to its API keys (explained in the next section).

---

## 4. Paystack Payment Dashboard Setup (14+ Brands)

To support **14 separate Paystack accounts (14 different dashboards)**, the website implements a dynamic backend routing system.

### How the Multi-Brand Routing Works:
- When a customer checks out, the system automatically checks the brand identifier of the first item in the cart.
- The backend Express server then looks up the corresponding Paystack API keys inside `/data/paystack_configs.json`.
- If a valid key is found for that brand, it initiates the transaction using that specific brand's dashboard.
- If no key is set or is still a placeholder (begins with `"YOUR_"`), the backend automatically falls back to the default environment variable `PAYSTACK_SECRET_KEY` or displays a simulated checkout sandbox. This prevents the server from crashing or breaking during live operation.

### ⚙️ Configuring Paystack Keys Per Brand
To configure your live or test credentials for each brand:
1. Open `/data/paystack_configs.json`.
2. Find the brand identifier (e.g. `creative`, `alpaca`, `coded`).
3. Fill in your Paystack Secret and Public Keys:
   ```json
     "creative": {
       "test_secret_key": "sk_test_12345...",
       "test_public_key": "pk_test_12345...",
       "live_secret_key": "sk_live_67890...",
       "live_public_key": "pk_live_67890...",
       "mode": "test"
     }
   ```
4. **`mode`**: Set this to `"test"` for local payment simulations, or change it to `"live"` to collect real money through your live Paystack dashboard!

### ➕ Connecting New Brands to Paystack
Whenever you add a brand to `/assets/js/store.js`, add a matching key block at the bottom of `/data/paystack_configs.json`:
```json
  "my-new-brand": {
    "test_secret_key": "sk_test_...",
    "test_public_key": "pk_test_...",
    "live_secret_key": "sk_live_...",
    "live_public_key": "pk_live_...",
    "mode": "test"
  }
```

---

## 5. Cloudflare Deployment & Domain Management

KIMLAND is fully compatible with **Cloudflare**, providing ultra-fast content delivery, global DNS routing, DDoS protection, and SSL/TLS encryption.

### 🌐 Setting up Custom Domain (`shop.kimland.name.ng`)
1. Log into your **Cloudflare Dashboard**.
2. Select your domain (`name.ng`) or add it.
3. Go to **DNS Settings** -> **Records**.
4. Add a new **CNAME** Record:
   - **Type**: `CNAME`
   - **Name**: `shop`
   - **Target**: Your GitHub pages domain (e.g., `yourusername.github.io`) or your hosting endpoint (e.g., Cloud Run URL).
   - **Proxy Status**: **Proxied (Orange Cloud)** (Highly recommended for speed and security).
   - **TTL**: `Auto`
5. Save the record.

### 🛡️ Recommended Cloudflare SSL/TLS Settings
- Navigate to the **SSL/TLS** tab in Cloudflare.
- Set encryption mode to **Full** or **Full (Strict)**. This ensures that payment transactions to and from the Paystack API are encrypted in transit.

### 🚀 Deploying to Cloudflare Pages (Frontend Static Site)
If you deploy the static portion of your store to Cloudflare Pages:
1. Under **Workers & Pages**, click **Create application** -> **Pages**.
2. Connect your GitHub repository.
3. Configure your Build Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy! Cloudflare Pages will automatically respect the static files and compile them seamlessly.

---

## 6. Local Development, Building & Running

To run the application locally on your computer for editing and testing:

### 📥 Initial Setup
Ensure you have **Node.js** installed, then open your terminal in the repository root and run:
```bash
# Install all required packages
npm install
```

### 🖥️ Run Development Server
```bash
npm run dev
```
This spins up the dynamic Node server with the Vite development engine on `http://localhost:3000`. Any changes you make to the source files will reflect instantly!

### 🏗️ Build for Production
To bundle and compile all assets (minify CSS, pack JavaScript, compile the backend server to CommonJS CJS format):
```bash
npm run build
```
The compiled files are created inside the `/dist` directory.

### ▶️ Run Production Server
```bash
npm run start
```

---

## 7. GitHub Synchronization & `CNAME` Preservation

We have resolved the problem where GitHub deleted your custom domain file on every commit!

### What we implemented to fix this:
1. **Root `CNAME` File**: Added a `/CNAME` file to the root of the source repository containing `shop.kimland.name.ng`.
2. **Vite Public `CNAME` File**: Added a `/public/CNAME` file. Because Vite copies everything inside the `/public` folder into the final `/dist` output, this guarantees that when Vite builds the project, the `CNAME` file is automatically injected into `/dist/CNAME`.

Now, no matter if you deploy using root branch static folders or dynamic Vite action building, **your custom domain is preserved forever**!

---

*For further custom additions or questions, edit `/data/products.json` or `/data/paystack_configs.json` and push to your git repository. Enjoy running your premium KIMLAND multi-brand empire!*
