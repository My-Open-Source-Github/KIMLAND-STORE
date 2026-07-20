# KIMLAND E-Commerce Store — Master Operations & Management Guide

Welcome to the **KIMLAND Store** Master Operations and Management Guide. This document provides complete, detailed instructions on how to run, edit, manage, and scale the entire full-stack e-commerce architecture.

---

## 📖 Table of Contents
1. [System Architecture Overview](#1-system-architecture-overview)
2. [Adding & Editing Products (`products.json`)](#2-adding--editing-products-productsjson)
3. [Managing Jumia & Konga Style Bottom Storefront (`bottom_store_data.json`)](#3-managing-jumia--konga-style-bottom-storefront-bottom_store_datajson)
4. [Managing Brands (`store.js`)](#4-managing-brands-storejs)
5. [Paystack Payment Dashboard Setup (14+ Brands)](#5-paystack-payment-dashboard-setup-14-brands)
6. [GitHub Pages & Cloudflare Deployment Guide (Full-Stack Setup)](#6-github-pages--cloudflare-deployment-guide-full-stack-setup)
7. [Local Development, Building & Running](#7-local-development-building--running)
8. [GitHub Synchronization & `CNAME` Preservation](#8-github-synchronization--cname-preservation)

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
6. **`featured`**: Set to `true` to prioritize this product in dynamic fallbacks for the Jumia & Konga-style bottom storefront pages if custom products are not explicitly set in `bottom_store_data.json`.
7. **`images`**: An array of image URLs (either absolute paths or relative paths in your repository).
8. **`youtube`**: To embed a product demonstration or review video, paste the YouTube embed URL (e.g. `https://www.youtube.com/embed/[video_id]`). If left blank, the system will gracefully hide the video player tab.
9. **`description`**: Supports full raw HTML markup (like `<p>`, `<ul>`, `<li>`, `<strong>`) so you can craft detailed, responsive descriptions.
10. **`specs`**: Key-value pairs rendered dynamically on the product specs page. Feel free to add as many specs as needed!

---

---

## 3. Managing Jumia & Konga Style Bottom Storefront (`bottom_store_data.json`)

To replace the old, bulky product carousels, KIMLAND now features a highly polished e-commerce catalog layout at the bottom of pages, styled directly after **Jumia** and **Konga**. Each section, image, title, and item is fully responsive (scaling perfectly on mobile view in three compact columns, and up to six columns on desktop with absolutely no vertical/horizontal cut-offs).

This bottom layout fetches its data from `/data/bottom_store_data.json`. This configuration allows you to completely edit, manage, and add custom products, countdown timers, category roundels, and flash banners independently for each page (e.g. your home page, cart, checkout, or brand specific views) from Cloudflare or direct file editing!

### 📂 Bottom Storefront Schema Structure:
The schema separates configurations by page key: `"home"`, `"cart"`, `"checkout"`, and individual brand slugs under `"brands"` (e.g. `"creative"`, `"alpaca"`, `"diy"`).

#### Configuration JSON Template:
```json
{
  "home": {
    "categories": [
      {
        "name": "Design Packs",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&auto=format&fit=crop&q=80"
      }
    ],
    "flash_sales": {
      "title": "Flash Sales",
      "subtitle": "Limited assets, huge discount, ticks down to zero!",
      "ends_at": "2026-12-31T23:59:59Z",
      "products": [
        {
          "id": "creative-graphics-wallpapers-synthwave",
          "name": "Synthwave Sunset 8K Wallpapers",
          "brand": "creative",
          "brand_name": "Creative",
          "price": 12000,
          "old_price": 15000,
          "discount": "-20%",
          "items_left": 14,
          "total_items": 50,
          "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop&q=80"
        }
      ]
    },
    "deals_of_the_day": {
      "title": "Deals of the Day",
      "products": [
        {
          "name": "CAD Blueprint",
          "price": "₦45,000",
          "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=200"
        }
      ]
    },
    "unbeatable_deals": {
      "title": "Today's Deals - Unbeatable Price",
      "products": [
        {
          "id": "alpaca-schematic-pcb-led",
          "name": "Custom PCB IoT Schematic",
          "brand": "alpaca",
          "brand_name": "Alpaca",
          "price": 32000,
          "old_price": 40000,
          "discount": "-20%",
          "items_left": 4,
          "total_items": 10,
          "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400"
        }
      ]
    }
  }
}
```

### 💡 Keys & Management Guide:
1. **`categories` (Pill roundels)**: Displays a horizontal scrolling ribbon of circular categories (like Jumia's top ribbon) with a custom image and a title. Excellent for brand navigation!
2. **`flash_sales` (Jumia Style Red Box)**: 
   - **`ends_at`**: Set any future date-time. The built-in Javascript countdown engine automatically calculates remaining time and displays a live ticking clock (e.g., `01h : 09m : 49s`). If left blank or past, it automatically defaults to midnight tonight so the site always looks extremely alive!
   - **`items_left` & `total_items`**: Automatically renders a premium graphical horizontal progress bar showing how much stock is left (e.g., `14 items left`, progress bar 28% full).
3. **`deals_of_the_day` (Bento layout with white roundel items)**: Renders elegant, custom circular items with high-contrast price badges underneath.
4. **`unbeatable_deals` (Konga Style Magenta Box)**: Displays high-density product items with percentage discounts, high-contrast badges, brand labels, titles, price pairings, and add-to-cart buttons.
5. **Dynamic Independent Fallbacks**: If you create a brand but do not define custom storefront items for it inside `bottom_store_data.json`, our intelligent, high-density engine **automatically generates** an independent, unique Jumia/Konga catalog using items belonging to that brand from `products.json`! This ensures 100% catalog coverage across every page on the store with zero maintenance!

---

### 🚀 Dynamic Layout Sections & Custom Category Creation

KIMLAND now supports a fully modular, array-based configuration using the **`sections`** attribute inside `bottom_store_data.json`. This empowers you to build infinite custom sections, custom write-ups, change the sorting order, and determine the exact position/location of sections on the fly!

#### 🛠️ Creating Custom Categories (Step-by-Step):

To configure a page's bottom area with custom categories and specify their exact display order, add a `"sections"` array to the page's JSON key:

```json
"home": {
  "sections": [
    {
      "type": "categories",
      "items": [
        { "name": "Hot Blueprints", "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=200" }
      ]
    },
    {
      "type": "custom_catalog",
      "title": "Mega Structural Deals",
      "subtitle": "Premium licenses at special discount rates",
      "icon": "💎",
      "banner_color": "linear-gradient(90deg, #4f46e5 0%, #06b6d4 100%)",
      "description": "Welcome to our customized Jumia/Konga category bento. This area supports rich descriptions, custom gradients, and direct add-to-cart flows synchronized automatically with our global secure checkout database.",
      "ends_at": "2026-11-30T12:00:00",
      "see_all_link": "#",
      "products": [
        { "id": "creative-design-models-sci-fi-drone" },
        { "id": "falcon-joinery-wardrobe-cabinet" }
      ]
    }
  ]
}
```

#### 📐 Advanced Section Configurations:

| Field Name | Description / Values |
| :--- | :--- |
| **`type`** | Set to `"categories"`, `"deals_of_the_day"`, `"flash_sales"`, `"unbeatable_deals"`, or `"custom_catalog"`. |
| **`title`** | Custom primary header string for your section banner. |
| **`subtitle`** | Brief scannable write-up/subtitle printed directly under the header. |
| **`description`** | Custom paragraph write-up block describing the category or offer details. Supports rich copy! |
| **`icon`** | Choose a custom illustration emoji (e.g. `⚡`, `🔴`, `💎`, `🔥`) to display next to your header. |
| **`banner_color`** | Any valid CSS color or gradient (e.g. `linear-gradient(90deg, #d21a00, #ff4b2b)`). |
| **`ends_at`** | Optional target timestamp. If supplied, the system automatically starts a live countdown specifically for this category! |
| **`products`** | Array of product descriptors. **Note:** You can simply provide the product `"id"`, and our smart engine will automatically merge all details (titles, images, real price, discounts) from the global database! |

#### 🔀 Adjusting Section Locations & Positions:

To move a section, simply rearrange its block in the `"sections"` list. The system loops through each block sequentially, allowing you to position your custom categories exactly where they belong in the bottom storefront area!

---

## 4. Managing Brands (`store.js`)

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

## 5. Paystack Payment Dashboard Setup (14+ Brands)

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

## 6. GitHub Pages & Cloudflare Deployment Guide (Full-Stack Setup)

KIMLAND's dual-architecture combines the speed of static delivery with secure, live payment routing. Deploying this hybrid setup requires hosting your **frontend client-side files on GitHub Pages** (serving static assets ultra-fast) and your **dynamic Express endpoints on a Cloud Run container (or other Node backend)**, connected securely via **Cloudflare DNS proxy routing**.

---

### 📦 Part 1: Files Partitioning (GitHub Pages vs. Cloudflare / Cloud Run)

To run a secure e-commerce application, your workspace files must be split correctly between the static host and the private dynamic server:

| Component / Layer | Hosting Location | Files Deployed / Residing There | Why This Partitioning Exists |
| :--- | :--- | :--- | :--- |
| **Static Frontend Web Client** | **GitHub Pages** (or Cloudflare Pages) | Everything compiled in `/dist/` after running `npm run build`: <br> • `index.html` <br> • CSS/JS static bundles <br> • Images, fonts, SVG icons <br> • Static storefront feeds (`/data/products.json`, `/data/bottom_store_data.json`) <br> • `/dist/CNAME` | Bypasses server latency entirely. Customers load the page layout, catalog feeds, and high-density Konga/Jumia bento cards directly from the nearest edge network node. |
| **Dynamic Backend Engine & Secrets** | **Cloud Run** / **Node Backend Server** | • Compiled server runner (`dist/server.cjs`) <br> • Backend configurations (`/data/paystack_configs.json`) <br> • Global `package.json` with startup parameters | Keeps sensitive API keys, webhook handlers, payment initialization logic, and bank account parameters completely hidden from web browsers and inspection tools. |

---

### 🌐 Part 2: Step-by-Step GitHub Pages Deployment & Cloudflare DNS Connection

#### Step 1: Deploy Frontend Static Files to GitHub Pages
1. Build your static files locally or via your CI/CD toolchain:
   ```bash
   npm run build
   ```
2. Configure GitHub Pages on your repository:
   - Go to your repository on GitHub.
   - Click **Settings** -> **Pages** in the left sidebar.
   - Under **Build and deployment**, select **Deploy from a branch** (choose `main` or a dedicated deployment branch like `gh-pages`).
   - If using a pre-compiled branch, select the folder containing your public assets (e.g., `/` or `/dist`). If using source repository directly, set up a GitHub Actions workflow to auto-build your Vite files using npm.

#### Step 2: Connect Custom Domain (`shop.kimland.name.ng`) in Cloudflare
To protect your site from DDoS, secure it with SSL, and configure seamless request routing, proxy it through Cloudflare:
1. Log into your **Cloudflare Dashboard**.
2. Select your domain (`name.ng`) or click "Add site" to import it.
3. Update your domain's nameservers at your domain registrar (e.g., DomainKing or Whogohost) to point to the Cloudflare nameservers provided.
4. Navigate to **DNS Settings** -> **Records** on Cloudflare:
   - Add a new **CNAME** Record:
     - **Type**: `CNAME`
     - **Name**: `shop` (This maps to `shop.kimland.name.ng`)
     - **Target**: Your GitHub Pages domain (e.g., `yourusername.github.io`).
     - **Proxy Status**: **Proxied (Orange Cloud)**. (This is *critical* so Cloudflare can handle backend proxy rules, mask server IPs, and cache resources).
     - **TTL**: `Auto`
   - Click **Save**.

#### Step 3: Enforce SSL Encryption on Cloudflare
1. Go to the **SSL/TLS** tab in Cloudflare.
2. Under "Overview", set the SSL/TLS encryption mode to **Full** or **Full (Strict)**. This enforces an encrypted HTTPS handshake between:
   - The user's browser and Cloudflare.
   - Cloudflare and GitHub Pages / your Cloud Run server.
3. Go to **SSL/TLS** -> **Edge Certificates**, and toggle on **Always Use HTTPS** to automatically redirect any `http://` traffic to `https://`.

---

### 🔑 Part 3: Securing All API Keys & Credentials

To protect your business from credential theft, fraudulent transactions, or compromised merchant accounts, you **must secure your Paystack Keys**:

1. **Zero Client-Side Exposure**:
   - The client-side scripts inside `store.js` must *never* reference secret keys. All API calls target local endpoint routes (like `/api/paystack/initialize`) instead of making direct browser-to-Paystack secret API calls.
2. **Environment Variables Over Config Files**:
   - For public GitHub repositories, **do not** commit your actual live Paystack keys inside `/data/paystack_configs.json`.
   - Instead, declare your sensitive keys inside your production hosting environment (e.g., Cloud Run console or Heroku config variables) using standard names like:
     - `PAYSTACK_SECRET_KEY`
     - `PAYSTACK_PUBLIC_KEY`
   - Our dynamic backend server is configured to prioritize these environment variables. When present, it automatically uses them to override any placeholder or JSON configurations, ensuring absolute code safety!
3. **Directory Access Isolation**:
   - Our Express server code in `server.ts` statically exposes *only* the compiled `/dist/` folder to the public:
     ```js
     app.use(express.static(path.join(process.cwd(), 'dist')));
     ```
   - This prevents web browsers from accessing raw server configuration files or directories like `/data/paystack_configs.json` or `/server.ts` through URL manipulation.

---

### ⚡ Part 4: Keeping Connection Live (GitHub Pages to Cloudflare Backend)

Since GitHub Pages acts purely as a static asset server, it has no native runtime container to execute the backend Express server endpoints. If you host the frontend on GitHub Pages and the backend on a different platform (like Cloud Run), standard relative requests to `/api/paystack/initialize` will result in `404 Not Found` errors unless configured correctly.

To keep the communication seamless and live, utilize one of these production-ready workflows:

#### Method A: Cloudflare Reverse Proxy Rules (Highly Recommended & Easiest)
This method keeps your frontend code 100% relative (using `/api/paystack/initialize`) and bypasses CORS (Cross-Origin Resource Sharing) browser restrictions automatically. Cloudflare intercepts traffic to your custom domain and routes static requests to GitHub Pages, while routing backend API requests directly to your Cloud Run URL!

1. Deploy your backend Express server (including `dist/server.cjs` and `package.json`) to Google Cloud Run or Render, which yields an HTTPS service URL (e.g. `https://kimland-api-781126605893.run.app`).
2. Log into **Cloudflare** and navigate to your domain dashboard.
3. Click on **Rules** -> **Origin Rules** (or **Workers**, or **Page Rules** depending on your account subscription):
   - **Create a Page Rule (or Transform Rule)**:
     - If the URL matches: `shop.kimland.name.ng/api/*`
     - Setting: **Forwarding URL** (or **Override Origin Address**)
     - Match Type: **301/302 Redirect** (or rewrite the request origin behind the scenes directly to `https://kimland-api-781126605893.run.app/api/*`).
   - *Alternative (Cloudflare Workers - Infinite Flexibility)*: Deploy a simple, ultra-fast 5-line Cloudflare Worker to act as an API Gateway proxy:
     ```js
     export default {
       async fetch(request, env) {
         const url = new URL(request.url);
         if (url.pathname.startsWith('/api/')) {
           // Rewrite request to dynamic Cloud Run backend
           const backendUrl = 'https://kimland-api-781126605893.run.app' + url.pathname + url.search;
           return fetch(new Request(backendUrl, request));
         }
         // Fallback directly to static GitHub Pages
         return fetch(request);
       }
     };
     ```
   - **Result**: Frontend relative requests continue working natively with no code changes, under full HTTPS proxy protection!

#### Method B: Split Subdomain Routing (CORS Method)
If you prefer to separate frontend and backend domains completely:
1. Map your frontend to `shop.kimland.name.ng` (pointing to GitHub Pages).
2. Map your backend to `api.kimland.name.ng` using a DNS **CNAME** pointing directly to your Cloud Run / VPS application endpoint.
3. Configure **CORS** in your Express server (`server.ts` / `server.cjs`) to allow requests originating from your frontend:
   ```ts
   import cors from 'cors';
   app.use(cors({
     origin: 'https://shop.kimland.name.ng',
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     credentials: true
   }));
   ```
4. Update the endpoint inside your client-side `/assets/js/store.js` file:
   - Change `await fetch('/api/paystack/initialize', ...)`
   - To: `await fetch('https://api.kimland.name.ng/api/paystack/initialize', ...)`

---

## 7. Local Development, Building & Running

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

## 8. GitHub Synchronization & `CNAME` Preservation

We have resolved the problem where GitHub deleted your custom domain file on every commit!

### What we implemented to fix this:
1. **Root `CNAME` File**: Added a `/CNAME` file to the root of the source repository containing `shop.kimland.name.ng`.
2. **Vite Public `CNAME` File**: Added a `/public/CNAME` file. Because Vite copies everything inside the `/public` folder into the final `/dist` output, this guarantees that when Vite builds the project, the `CNAME` file is automatically injected into `/dist/CNAME`.

Now, no matter if you deploy using root branch static folders or dynamic Vite action building, **your custom domain is preserved forever**!

---

*For further custom additions or questions, edit `/data/products.json` or `/data/paystack_configs.json` and push to your git repository. Enjoy running your premium KIMLAND multi-brand empire!*
