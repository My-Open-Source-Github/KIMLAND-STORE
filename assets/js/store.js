/**
 * Vanilla E-Commerce Store Engine - KIMLAND Store
 * Handles dynamic routing, data fetching, filtering, cart, and Paystack integration.
 */

// 14 Specialized Subsidiary Brands Information
const BRANDS_INFO = {
  "creative": {
    "name": "Creative",
    "description": "Premium 2D digital art, painting overlays, and animation vector elements. Elevate your visual content with our completely scalable design tools, themes, and customized icons.",
    "long_description": "Creative is KIMLAND's flagship brand for custom 2D artwork and digital designs. We focus on modern vector illustrations, pixel-perfect user interfaces, high-fidelity custom wallpapers, and complete web themes. Every asset is designed with meticulous attention to color harmony, resolution density, and visual aesthetics, ensuring it stands out in any product showcase.",
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "wallpapers": {
        "name": "Wallpapers",
        "intro": "Premium high-definition backgrounds and custom desktop screens.",
        "merchandises": {
          "nature-wallpapers": "Nature Wallpapers",
          "abstract-wallpapers": "Abstract Wallpapers",
          "minimal-wallpapers": "Minimal Wallpapers",
          "dark-mode-wallpapers": "Dark Mode Wallpapers",
          "branded-wallpapers": "Branded Wallpapers"
        }
      },
      "uiux-designs": {
        "name": "UI/UX Designs",
        "intro": "Pixel-perfect mobile application design components and interface kits.",
        "merchandises": {
          "mobile-app-ui-kits": "Mobile App UI Kits",
          "website-ui-kits": "Website UI Kits",
          "dashboard-ui-kits": "Dashboard UI Kits",
          "ecommerce-ui-kits": "E-commerce UI Kits",
          "landing-page-ui-kits": "Landing Page UI Kits"
        }
      },
      "logo-design": {
        "name": "Logo Design",
        "intro": "Custom branding vector artwork and minimalist visual identities.",
        "merchandises": {
          "minimalist-logos": "Minimalist Logos",
          "abstract-logos": "Abstract Logos",
          "corporate-logos": "Corporate Logos",
          "vintage-logos": "Vintage Logos",
          "gaming-logos": "Gaming Logos"
        }
      },
      "vector-icon-design": {
        "name": "Vector Icon Design",
        "intro": "Scalable professional icon sets for modern web and mobile apps.",
        "merchandises": {
          "flat-icons": "Flat Icons",
          "line-icons": "Line Icons",
          "3d-icons": "3D Icons",
          "isometric-icons": "Isometric Icons",
          "skeuomorphic-icons": "Skeuomorphic Icons"
        }
      },
      "themes": {
        "name": "Themes",
        "intro": "Beautiful static frameworks and content management templates.",
        "merchandises": {
          "wordpress-themes": "WordPress Themes",
          "shopify-themes": "Shopify Themes",
          "ghost-themes": "Ghost Themes",
          "bootstrap-themes": "Bootstrap Themes",
          "tailwind-themes": "Tailwind Themes"
        }
      }
    }
  },
  "creative3d": {
    "name": "Creative3D",
    "description": "Professional 3D game engines, fully functional project plugins, low-poly modular assets, and custom editor toolkits built for modern game developer environments.",
    "long_description": "Creative3D specializes in advanced 3D assets and plugins primarily tailored for the Godot Game Engine. Our packages range from fully lit modular dungeon crawling stages to ready-to-run GDScript behaviors and custom editor helpers. Save thousands of development hours with fully documented, production-ready interactive systems.",
    "image": "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "godot-scenes-3d": {
        "name": "3D Godot Scenes",
        "intro": "Pre-configured and fully light-baked 3D environment scenes built for Godot.",
        "merchandises": {
          "environment-scenes": "Environment Scenes",
          "interior-scenes": "Interior Scenes",
          "action-scenes": "Action Scenes",
          "puzzle-scenes": "Puzzle Scenes",
          "racing-scenes": "Racing Scenes"
        }
      },
      "godot-assets-3d": {
        "name": "3D Godot Assets",
        "intro": "High-quality, low-poly, and modular 3D game-ready objects and assets.",
        "merchandises": {
          "low-poly-assets": "Low Poly Assets",
          "high-poly-assets": "High Poly Assets",
          "modular-assets": "Modular Assets",
          "animated-character-assets": "Animated Character Assets",
          "vfx-assets": "VFX Assets"
        }
      },
      "godot-project-plugins-3d": {
        "name": "Godot Project Plugins",
        "intro": "Core system-level extensions and camera controllers to accelerate your Godot projects.",
        "merchandises": {
          "system-plugins": "System Plugins",
          "camera-plugins": "Camera Plugins",
          "audio-plugins": "Audio Plugins",
          "physics-plugins": "Physics Plugins",
          "networking-plugins": "Networking Plugins"
        }
      },
      "godot-editor-plugins-3d": {
        "name": "Godot Editor Plugins",
        "intro": "Custom workspace integrations, terrain editors, and UI toolkits for the Godot editor.",
        "merchandises": {
          "layout-editor-plugins": "Layout Editor Plugins",
          "asset-manager-plugins": "Asset Manager Plugins",
          "terrain-editor-plugins": "Terrain Editor Plugins",
          "shader-editor-plugins": "Shader Editor Plugins",
          "animation-helper-plugins": "Animation Helper Plugins"
        }
      },
      "gdscripts-3d": {
        "name": "Gdscripts",
        "intro": "Optimized and modular GDScript behavior sets for 3D physics and logic.",
        "merchandises": {
          "character-movement-scripts": "Character Movement Scripts",
          "enemy-ai-scripts": "Enemy AI Scripts",
          "save-load-scripts": "Save-Load Scripts",
          "inventory-scripts": "Inventory Scripts",
          "ui-controller-scripts": "UI Controller Scripts"
        }
      }
    }
  },
  "creative2d": {
    "name": "Creative2D",
    "description": "Optimized 2D game asset packs, modular character state systems, parallax backdrops, and interactive spritesheets calibrated for seamless implementation.",
    "long_description": "Creative2D supplies high-end pixel-perfect graphics and automated systems for classic 2D platformers, RPGs, and Metroidvania titles. We provide character sprite sheets with hundreds of frames of animation, parallax background layers, custom lighting shaders, and robust project plugins that integrate natively with modern 2D game pipelines.",
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "godot-scenes-2d": {
        "name": "2D Godot Scenes",
        "intro": "Pre-built template stages and visual maps for classic 2D genres.",
        "merchandises": {
          "platformer-scenes": "Platformer Scenes",
          "rpg-scenes": "RPG Scenes",
          "strategy-scenes": "Strategy Scenes",
          "puzzle-scenes": "Puzzle Scenes",
          "arcade-scenes": "Arcade Scenes"
        }
      },
      "godot-assets-2d": {
        "name": "2D Godot Assets",
        "intro": "Handcrafted pixel-perfect layers, sprites, tilemaps, and backdrops.",
        "merchandises": {
          "pixel-art-assets": "Pixel Art Assets",
          "vector-assets": "Vector Assets",
          "parallax-backgrounds": "Parallax Backgrounds",
          "tilemaps": "Tilemaps",
          "sprite-sheets": "Sprite Sheets"
        }
      },
      "godot-project-plugins-2d": {
        "name": "Godot Project Plugins",
        "intro": "Controller frameworks, camera configurations, and dialogue scripts for 2D.",
        "merchandises": {
          "controller-plugins": "Controller Plugins",
          "collision-plugins": "Collision Plugins",
          "screen-shake-plugins": "Screen Shake Plugins",
          "save-load-plugins": "Save-Load Plugins",
          "dialogue-plugins": "Dialogue Plugins"
        }
      },
      "godot-editor-plugins-2d": {
        "name": "Godot Editor Plugins",
        "intro": "Interactive layout helpers, atlas bundlers, and timeline managers.",
        "merchandises": {
          "tilemap-helper-plugins": "Tilemap Helper Plugins",
          "anim-helper-plugins": "Animation Helper Plugins",
          "atlas-generator-plugins": "Atlas Generator Plugins",
          "niche-editor-plugins": "Niche Editor Plugins",
          "ui-helper-plugins": "UI Helper Plugins"
        }
      },
      "gdscripts-2d": {
        "name": "Gdscripts",
        "intro": "Calibrated scripts handling 2D mechanics, combat grids, and UI states.",
        "merchandises": {
          "physics-movement-scripts": "Physics Movement Scripts",
          "pathfinding-scripts": "Pathfinding Scripts",
          "health-damage-scripts": "Health & Damage Scripts",
          "quest-system-scripts": "Quest System Scripts",
          "menu-navigation-scripts": "Menu Navigation Scripts"
        }
      }
    }
  },
  "creative-design": {
    "name": "Creative Design",
    "description": "Cinematic 3D modeling, quad-aligned high-resolution scans, PBR multi-channel texturing templates, and photorealistic CGI animations ready for media productions.",
    "long_description": "Creative Design bridges the gap between digital realism and active design. Our curated library offers complex quad-based subdivision models, volumetric rendering presets, and photorealistic animation sequences. Engineered to support high-end cinematic visualization, gaming environments, and VFX pipelines.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "scans-3d": {
        "name": "3D Scans",
        "intro": "Quad-aligned photogrammetric objects and volumetric environmental models.",
        "merchandises": {
          "nature-scans": "Nature Scans",
          "architecture-scans": "Architecture Scans",
          "object-scans": "Object Scans",
          "character-scans": "Character Scans",
          "interior-scans": "Interior Scans"
        }
      },
      "modeling-3d": {
        "name": "3D Modeling",
        "intro": "Hard-surface structural concepts and organic high-polygon geometries.",
        "merchandises": {
          "hard-surface-models": "Hard Surface Models",
          "organic-models": "Organic Models",
          "architectural-models": "Architectural Models",
          "vehicle-models": "Vehicle Models",
          "weapon-models": "Weapon Models"
        }
      },
      "texturing-3d": {
        "name": "3D Texturing",
        "intro": "Professional multi-channel PBR material layers and smart procedural presets.",
        "merchandises": {
          "pbr-textures": "PBR Textures",
          "stylized-textures": "Stylized Textures",
          "smart-materials": "Smart Materials",
          "substance-painter-presets": "Substance Painter Presets",
          "vector-patterns": "Vector Patterns"
        }
      },
      "animation-3d": {
        "name": "3D Animation",
        "intro": "High-fidelity motion capture rigs, keyframe mechanics, and cinematic sequences.",
        "merchandises": {
          "character-animations": "Character Animations",
          "vehicle-animations": "Vehicle Animations",
          "mechanical-animations": "Mechanical Animations",
          "vfx-animations": "VFX Animations",
          "camera-rig-animations": "Camera Rig Animations"
        }
      },
      "rendering-3d": {
        "name": "3D Rendering",
        "intro": "Photorealistic volumetric output layers, environmental templates, and light setups.",
        "merchandises": {
          "interior-renders": "Interior Renders",
          "exterior-renders": "Exterior Renders",
          "studio-product-renders": "Studio Product Renders",
          "isometric-renders": "Isometric Renders",
          "cinematic-renders": "Cinematic Renders"
        }
      }
    }
  },
  "falcon-design": {
    "name": "Falcon Design",
    "description": "Precision layout concepts, material parameters, and cutting layouts for physical non-engineering goods. Purely static product conceptualization ready for manufacturing.",
    "long_description": "Falcon Design focuses on structural and aesthetic design schemas for modern furniture, decorative items, landscape elements, and safety barriers. We create tested CNC path blueprints and material cutting patterns that require no mechanical or electrical engineering, allowing rapid, clean replication on wood, metal, glass, or composites.",
    "image": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "wood-designs": {
        "name": "Wood",
        "intro": "Woodworking CNC templates, minimal joints, and joinery masterplans.",
        "merchandises": {
          "furniture-designs": "Furniture Designs",
          "interior-panellings": "Interior Panellings",
          "outdoor-decks": "Outdoor Decks",
          "wooden-toys": "Wooden Toys",
          "decorative-carvings": "Decorative Carvings"
        }
      },
      "plastics-designs": {
        "name": "Plastics",
        "intro": "Precision designs calibrated for structural plastics and modern materials.",
        "merchandises": {
          "injection-molded-parts": "Injection Molded Parts",
          "extruded-profiles": "Extruded Profiles",
          "acrylic-displays": "Acrylic Displays",
          "plastic-containers": "Plastic Containers",
          "modular-shelving": "Modular Shelving"
        }
      },
      "metals-designs": {
        "name": "Metals",
        "intro": "Laser-cut profiles, panels, sheet fabrications, and structural elements.",
        "merchandises": {
          "structural-frames": "Structural Frames",
          "metal-stamping-layouts": "Metal Stamping Layouts",
          "laser-cut-panels": "Laser-Cut Panels",
          "forged-decorations": "Forged Decorations",
          "hardware-fasteners": "Hardware Fasteners"
        }
      },
      "clay-ceramics": {
        "name": "Clay/Ceramics",
        "intro": "Modern clay molds, pottery specifications, and tile layouts.",
        "merchandises": {
          "tableware-pottery": "Tableware Pottery",
          "artistic-sculptures": "Artistic Sculptures",
          "wall-tiles": "Wall Tiles",
          "garden-pots": "Garden Pots",
          "industrial-insulators": "Industrial Insulators"
        }
      },
      "stones-concrete": {
        "name": "Stones/Concrete",
        "intro": "Landscape designs, architectural claddings, and heavy paving molds.",
        "merchandises": {
          "granite-countertops": "Granite Countertops",
          "paving-blocks": "Paving Blocks",
          "concrete-planters": "Concrete Planters",
          "sculptured-fountains": "Sculptured Fountains",
          "decorative-claddings": "Decorative Claddings"
        }
      }
    }
  },
  "eggcellent-design": {
    "name": "Eggcellent Design",
    "description": "Architectural blueprints, spatial residential layouts, interior modeling plans, and complete CAD element block libraries for modern real-estate construction.",
    "long_description": "Eggcellent Design is a premier hub for modern and brutalist architectural planning. We provide high-precision floor plans, foundation elevations, electrical mappings, and plumbing blueprints. Our comprehensive CAD libraries integrate with industry-standard software to bring spatial structures to reality smoothly.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "building-design": {
        "name": "Building Design",
        "intro": "Professional building designs, structural frameworks, and floor plans.",
        "merchandises": {
          "residential-designs": "Residential Designs",
          "commercial-designs": "Commercial Designs",
          "industrial-designs": "Industrial Designs",
          "recreational-designs": "Recreational Designs",
          "sustainable-designs": "Sustainable Designs"
        }
      },
      "cad-library": {
        "name": "CAD Library",
        "intro": "Turnkey parametric vector block packages and element libraries.",
        "merchandises": {
          "furniture-blocks": "Furniture Blocks",
          "electrical-symbols": "Electrical Symbols",
          "plumbing-fixtures": "Plumbing Fixtures",
          "vegetation-templates": "Vegetation Templates",
          "structural-members": "Structural Members"
        }
      }
    }
  },
  "upstudio": {
    "name": "Upstudio",
    "description": "Exclusive audio beats, premium background scores, DAW plugin scripts, and fully-equipped sound effect collections designed for modern media synchronization.",
    "long_description": "Upstudio supplies sound design solutions to media creators, video producers, and game developers. From relaxing lofi background beats and synth-heavy themes to raw DAW synthesizer plugins and foley sound packs, our audio assets are fully cleared for worldwide commercial licensing.",
    "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "beats": {
        "name": "Beats",
        "intro": "Professionally produced multi-tempo backing tracks and instrumentals.",
        "merchandises": {
          "hip-hop-beats": "Hip-Hop Beats",
          "trap-beats": "Trap Beats",
          "lo-fi-beats": "Lo-Fi Beats",
          "pop-beats": "Pop Beats",
          "synthwave-beats": "Synthwave Beats"
        }
      },
      "background-music": {
        "name": "Background Music",
        "intro": "Cinematic ambient sweeps, scores, and atmospheric soundscapes.",
        "merchandises": {
          "cinematic-scores": "Cinematic Scores",
          "ambient-soundscapes": "Ambient Soundscapes",
          "corporate-music": "Corporate Music",
          "gaming-ost": "Gaming OST",
          "documentary-music": "Documentary Music"
        }
      },
      "instrument-samples": {
        "name": "Instruments Samples",
        "intro": "High-fidelity loops, acoustic captures, and audio samples.",
        "merchandises": {
          "drum-loops": "Drum Loops",
          "guitar-riffs": "Guitar Riffs",
          "piano-melodies": "Piano Melodies",
          "synth-presets": "Synth Presets",
          "basslines": "Basslines"
        }
      },
      "sound-packs": {
        "name": "Sound Packs",
        "intro": "Foley recordings, transition effects, and interface SFX bundles.",
        "merchandises": {
          "foley-effects": "Foley Effects",
          "sci-fi-sounds": "Sci-Fi Sounds",
          "industrial-noises": "Industrial Noises",
          "nature-sounds": "Nature Sounds",
          "ui-sfx": "UI SFX"
        }
      },
      "daw-plugins": {
        "name": "DAW Plugins",
        "intro": "Synthesizer scripts, spatial EQ units, and sound processor helpers.",
        "merchandises": {
          "eq-plugins": "EQ Plugins",
          "reverb-plugins": "Reverb Plugins",
          "distortion-effects": "Distortion Effects",
          "midi-utilities": "MIDI Utilities",
          "sampler-scripts": "Sampler Scripts"
        }
      }
    }
  },
  "alpaca": {
    "name": "Alpaca",
    "description": "Multidisciplinary manufacturing blueprint packages. Integrates mechanical CAD models, PCB electrical layouts, and complete material bills.",
    "long_description": "Alpaca is the engineering heart of KIMLAND. We develop complete blueprints for consumer electronics, IoT devices, and smart appliances. Each package contains multi-layered PCB Gerber schematics, verified electronic circuit flows, and SolidWorks mechanical casing models tested for seamless physical integration.",
    "image": "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "mechanical-designs": {
        "name": "Mechanical Designs",
        "intro": "High-precision CAD enclosures, machinery frames, and physical gears.",
        "merchandises": {
          "gearbox-mechanisms": "Gearbox Mechanisms",
          "chassis-structures": "Chassis Structures",
          "linkage-assemblies": "Linkage Assemblies",
          "sheet-metal-enclosures": "Sheet Metal Enclosures",
          "cnc-tooling-jigs": "CNC Tooling & Jigs"
        }
      },
      "electrical-designs": {
        "name": "Electrical Designs",
        "intro": "High-voltage distribution schematics and control mappings.",
        "merchandises": {
          "power-distribution-schematics": "Power Distribution Schematics",
          "motor-control-circuits": "Motor Control Circuits",
          "lighting-wiring-diagrams": "Lighting Wiring Diagrams",
          "generator-system-layouts": "Generator System Layouts",
          "industrial-control-panels": "Industrial Control Panels"
        }
      },
      "electronic-designs": {
        "name": "Electronic Designs",
        "intro": "Impedance-matched PCBs, microcontrollers, and IoT hardware layouts.",
        "merchandises": {
          "microcontroller-boards": "Microcontroller Boards",
          "iot-device-designs": "IoT Device Designs",
          "sensor-module-layouts": "Sensor Module Layouts",
          "led-driver-circuits": "LED Driver Circuits",
          "communication-pcbs": "Communication PCBs"
        }
      },
      "industrial-designs": {
        "name": "Industrial Designs",
        "intro": "Ergonomic external product skins, casings, and styling envelopes.",
        "merchandises": {
          "handheld-device-casings": "Handheld Device Casings",
          "medical-equipment-shells": "Medical Equipment Shells",
          "automotive-dashboards": "Automotive Dashboards",
          "kitchen-appliance-bodies": "Kitchen Appliance Bodies",
          "wearable-tech-brackets": "Wearable Tech Brackets"
        }
      },
      "whole-engineering": {
        "name": "Whole Engineering Product Design",
        "intro": "Consolidated end-to-end device specifications and comprehensive material bills.",
        "merchandises": {
          "smart-home-appliances": "Smart Home Appliances",
          "desktop-robotics": "Desktop Robotics",
          "medical-monitoring-devices": "Medical Monitoring Devices",
          "outdoor-drone-frames": "Outdoor Drone Frames",
          "automated-dispenser-machines": "Automated Dispenser Machines"
        }
      }
    }
  },
  "coded": {
    "name": "Coded",
    "description": "Sleek Next.js website templates, custom React applications, web plugin utilities, and optimized code snippets written by professional senior developers.",
    "long_description": "Coded produces highly efficient software structures, responsive website themes, and customized IDE tools. Our clean-code approach minimizes loading times and maximizes search engine index scores. Ideal for web developers and business owners seeking premium codebase backbones.",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "websites": {
        "name": "Websites",
        "intro": "Fully-tested, responsive Next.js and React website scaffolds.",
        "merchandises": {
          "portfolio-websites": "Portfolio Websites",
          "business-landing-pages": "Business Landing Pages",
          "agency-sites": "Agency Sites",
          "personal-blogs": "Personal Blogs",
          "educational-sites": "Educational Sites"
        }
      },
      "web-apps": {
        "name": "Web Apps",
        "intro": "Sleek frontend dashboards, databases adapters, and custom interactive portals.",
        "merchandises": {
          "saas-dashboards": "SaaS Dashboards",
          "crm-systems": "CRM Systems",
          "task-managers": "Task Managers",
          "chat-applications": "Chat Applications",
          "inventory-trackers": "Inventory Trackers"
        }
      },
      "website-themes": {
        "name": "Website Themes",
        "intro": "Light and dark layouts utilizing clean Tailwind grids.",
        "merchandises": {
          "tailwind-templates": "Tailwind Templates",
          "bootstrap-themes": "Bootstrap Themes",
          "material-design-ui": "Material Design UI",
          "dark-mode-templates": "Dark Mode Templates",
          "minimalist-themes": "Minimalist Themes"
        }
      },
      "website-plugins": {
        "name": "Website Plugins",
        "intro": "Optimized interactive scripts, chart wrappers, and form helpers.",
        "merchandises": {
          "form-validators": "Form Validators",
          "image-sliders": "Image Sliders",
          "chart-renderers": "Chart Renderers",
          "auth-middleware": "Auth Middleware",
          "payment-gateways": "Payment Gateways"
        }
      },
      "code-assets": {
        "name": "Code Assets",
        "intro": "Data structures, API integrations, and robust code helper utilities.",
        "merchandises": {
          "data-structures-utils": "Data Structures & Utils",
          "api-wrappers": "API Wrappers",
          "state-managers": "State Managers",
          "css-animation-libraries": "CSS Animation Libraries",
          "helper-scripts": "Helper Scripts"
        }
      }
    }
  },
  "organic-flow": {
    "name": "Organic Flow",
    "description": "Modern garment patterns, premium footwear blueprints, exquisite jewelry collections, and complete fashion branding packs ready for production.",
    "long_description": "Organic Flow redefines visual style in the modern apparel world. We create master patterns and manufacturing specifications (tech packs) for fashion designers, clothes makers, and accessories producers. Each pattern includes multi-size grading frameworks and fabric assembly guides.",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "clothing-designs": {
        "name": "Clothing Designs",
        "intro": "Apparel vector blueprints, size grading scales, and fabric guides.",
        "merchandises": {
          "womenswear-tech-packs": "Womenswear Tech Packs",
          "menswear-tech-packs": "Menswear Tech Packs",
          "activewear-patterns": "Activewear Patterns",
          "outerwear-grading": "Outerwear Grading",
          "kids-wear-templates": "Kids Wear Templates"
        }
      },
      "footwears-designs": {
        "name": "Footwears Designs",
        "intro": "Sneaker specifications, mold parameters, and sole configurations.",
        "merchandises": {
          "running-shoe-blueprints": "Running Shoe Blueprints",
          "casual-sneaker-techs": "Casual Sneaker Techs",
          "leather-boot-grades": "Leather Boot Grades",
          "sandal-cutting-molds": "Sandal Cutting Molds",
          "slippers-specifications": "Slippers Specifications"
        }
      },
      "jewellery-designs": {
        "name": "Jewellery Designs",
        "intro": "Exquisite CAD layout patterns and geometric accessory concepts.",
        "merchandises": {
          "minimalist-rings": "Minimalist Rings",
          "statement-necklaces": "Statement Necklaces",
          "geometric-earrings": "Geometric Earrings",
          "charm-bracelets": "Charm Bracelets",
          "luxury-watches-cad": "Luxury Watches CAD"
        }
      },
      "product-branding-designs": {
        "name": "Product Branding Designs",
        "intro": "Custom packaging boxes, shopping bags, and premium logo layouts.",
        "merchandises": {
          "apparel-hang-tags": "Apparel Hang Tags",
          "shoebox-layouts": "Shoebox Layouts",
          "wrapping-tissue-patterns": "Wrapping Tissue Patterns",
          "woven-label-artworks": "Woven Label Artworks",
          "shipping-bag-graphics": "Shipping Bag Graphics"
        }
      },
      "fashion-accessories": {
        "name": "Fashion Accessories",
        "intro": "Tested structural specifications for handbags, belts, and eyewear.",
        "merchandises": {
          "leather-handbags": "Leather Handbags",
          "minimal-wallets": "Minimal Wallets",
          "casual-belts": "Casual Belts",
          "scarf-patterns": "Scarf Patterns",
          "sunglasses-casings": "Sunglasses Casings"
        }
      }
    }
  },
  "mindshot": {
    "name": "Mindshot",
    "description": "Generative AI-assisted visuals, prompt chains, creative novel templates, and cinematic video prompt maps designed to unlock creative storytelling speed.",
    "long_description": "Mindshot focuses on maximizing creative workflows utilizing generative artificial intelligence. We engineer structured prompt frameworks, seed arrays, and high-fidelity concept visualizations. We remove creative block for authors, content creators, and corporate design teams.",
    "image": "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "ai-images": {
        "name": "AI Images",
        "intro": "High-definition prompt visuals, concept art seed configurations, and generative portraits.",
        "merchandises": {
          "product-images": "Product Images",
          "concept-artworks": "Concept Artworks",
          "digital-avatars": "Digital Avatars",
          "landscape-generations": "Landscape Generations",
          "architectural-visualizations": "Architectural Visualizations"
        }
      },
      "ai-video": {
        "name": "AI Video",
        "intro": "Structured video seed flows, keyframes, and motion-prompt profiles.",
        "merchandises": {
          "cinematic-trailers": "Cinematic Trailers",
          "social-media-reels": "Social Media Reels",
          "looping-gif-artworks": "Looping GIF Artworks",
          "music-video-clips": "Music Video Clips",
          "explainer-animations": "Explainer Animations"
        }
      },
      "ai-story": {
        "name": "AI Story",
        "intro": "Algorithmic fiction structures, screenplay guides, and creative writing prompts.",
        "merchandises": {
          "short-fiction-plots": "Short Fiction Plots",
          "screenplay-outlines": "Screenplay Outlines",
          "interactive-rpg-quests": "Interactive RPG Quests",
          "marketing-brand-narratives": "Marketing Brand Narratives",
          "childrens-tales": "Children's Tales"
        }
      },
      "ai-novel": {
        "name": "AI Novel",
        "intro": "Comprehensive worldbuilding parameters and character graph matrices.",
        "merchandises": {
          "sci-fi-world-building": "Sci-Fi World Building",
          "fantasy-magic-systems": "Fantasy Magic Systems",
          "mystery-plot-graphs": "Mystery Plot Graphs",
          "historical-setting-sheets": "Historical Setting Sheets",
          "character-arc-templates": "Character Arc Templates"
        }
      }
    }
  },
  "lightwork": {
    "name": "Lightwork",
    "description": "Elite high-resolution image packs, cinematic volumetric VFX overlays, photography filters, and professional color-grading LUT files.",
    "long_description": "Lightwork is a visual production brand providing high-end photo and video assets. We specialize in custom studio light setups, volumetric smoke/fog pre-keyed video assets, and highly optimized editing profiles. Our products streamline cinematic post-production and commercial design projects.",
    "image": "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "wallpapers": {
        "name": "Wallpapers",
        "intro": "Elegant high-contrast wallpapers, mobile splash screens, and desktop displays.",
        "merchandises": {
          "nature-wallpapers": "Nature Wallpapers",
          "abstract-wallpapers": "Abstract Wallpapers",
          "minimal-wallpapers": "Minimal Wallpapers",
          "dark-mode-wallpapers": "Dark Mode Wallpapers",
          "branded-wallpapers": "Branded Wallpapers"
        }
      },
      "image-shots": {
        "name": "Image Shots",
        "intro": "Uncompressed photography stock shots and natural elements.",
        "merchandises": {
          "street-photography": "Street Photography",
          "portrait-studios": "Portrait Studios",
          "macro-photography": "Macro Photography",
          "landscape-shots": "Landscape Shots",
          "architectural-frames": "Architectural Frames"
        }
      },
      "photo-editing": {
        "name": "Photo Editing",
        "intro": "Color grading presets, light profiles, and custom editing LUTs.",
        "merchandises": {
          "lightroom-presets": "Lightroom Presets",
          "photoshop-actions": "Photoshop Actions",
          "luts-color-grading": "LUTs Color Grading",
          "texture-overlays": "Texture Overlays",
          "grain-profiles": "Grain Profiles"
        }
      },
      "video-editing": {
        "name": "Video Editing",
        "intro": "Cinematic transitions, title styles, and multi-track audio synch systems.",
        "merchandises": {
          "fcut-transitions": "Final Cut Transitions",
          "premiere-templates": "Premiere Templates",
          "davinci-nodes": "DaVinci Nodes",
          "sound-effect-synced": "Sound Effect Synced",
          "motion-title-graphics": "Motion Title Graphics"
        }
      },
      "vfx": {
        "name": "VFX",
        "intro": "Volumetric overlays, transparent particle flows, and clean pre-keyed HUDs.",
        "merchandises": {
          "fire-explosions": "Fire & Explosions",
          "smoke-fog-grids": "Smoke & Fog Grids",
          "water-splashes": "Water Splashes",
          "energy-blasts": "Energy Blasts",
          "sci-fi-hud-elements": "Sci-Fi HUD Elements"
        }
      }
    }
  },
  "diy": {
    "name": "DIY",
    "description": "Tested methodologies, physical maker manuals, scientific experiments, and marketing frameworks formatted as turnkey licensing guides.",
    "long_description": "DIY specializes in advanced, actionable research and manufacturing methodologies. We take laboratory-tested chemical, ecological, and physical maker processes (such as home bioreactors, eco-packaging, or modular composting) and package them into step-by-step CAD models and detailed material specifications.",
    "image": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "research": {
        "name": "Research",
        "intro": "High-yield biological processes, composting guidelines, and ecological manuals.",
        "merchandises": {
          "energy-efficiency": "Energy Efficiency",
          "waste-recycling": "Waste Recycling",
          "water-purification": "Water Purification",
          "organic-agriculture": "Organic Agriculture",
          "material-research": "Material Research"
        }
      },
      "marketing": {
        "name": "Marketing",
        "intro": "Actionable customer acquisition plans, brand guides, and advertising structures.",
        "merchandises": {
          "seo-optimization": "SEO Optimization",
          "social-media-strategy": "Social Media Strategy",
          "email-campaigns": "Email Campaigns",
          "influencer-partnerships": "Influencer Partnerships",
          "brand-positioning": "Brand Positioning"
        }
      }
    }
  },
  "enlightener": {
    "name": "Enlightener",
    "description": "Fortune-500 level strategic coaching books, financial roadmaps, operational templates, and executive management workflows.",
    "long_description": "Enlightener is KIMLAND's flagship corporate consultancy and professional education brand. We author strategic guidelines, corporate leadership modules, Series-A fundraising structures, and human resource onboarding manuals. Designed to help founders, VPs, and corporate teams scale with precision.",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    "niches": {
      "business-counsel": {
        "name": "Business Counsel",
        "intro": "Elite executive consultancy outlines, restructuring checklists, and regulatory compliance steps.",
        "merchandises": {
          "startup-mentorship": "Startup Mentorship",
          "corporate-restructuring": "Corporate Restructuring",
          "mergers-acquisitions": "Mergers & Acquisitions",
          "risk-management": "Risk Management",
          "regulatory-compliance": "Regulatory Compliance"
        }
      },
      "financial-counsel": {
        "name": "Financial Counsel",
        "intro": "Turnkey tax projections, investment structures, and capital allocation frameworks.",
        "merchandises": {
          "investment-strategies": "Investment Strategies",
          "tax-planning": "Tax Planning",
          "retirement-funds": "Retirement Funds",
          "debt-restructuring": "Debt Restructuring",
          "wealth-management": "Wealth Management"
        }
      },
      "business-strategist": {
        "name": "Business Strategist",
        "intro": "Comprehensive market entry playbooks, SaaS projection models, and dynamic pricing metrics.",
        "merchandises": {
          "market-entry": "Market Entry",
          "product-strategy": "Product Strategy",
          "competitive-analysis": "Competitive Analysis",
          "pricing-models": "Pricing Models",
          "brand-scaling": "Brand Scaling"
        }
      },
      "business-management": {
        "name": "Business Management",
        "intro": "Tested operations excellence playbooks, supply chain charts, and agile corporate guides.",
        "merchandises": {
          "operations-excellence": "Operations Excellence",
          "supply-chain-optimization": "Supply Chain Optimization",
          "hr-development": "HR Development",
          "project-governance": "Project Governance",
          "change-management": "Change Management"
        }
      }
    }
  }
};

// Global State
let allProducts = [];
const cartKey = 'store_cart_items';

// Absolute base path calculation
function getBasePath() {
  const pathname = window.location.pathname;
  let base = '/';
  if (pathname.includes('/cart/')) {
    base = pathname.substring(0, pathname.indexOf('/cart/')) + '/';
  } else if (pathname.includes('/checkout/')) {
    base = pathname.substring(0, pathname.indexOf('/checkout/')) + '/';
  } else {
    const lastSlash = pathname.lastIndexOf('/');
    if (lastSlash >= 0) {
      base = pathname.substring(0, lastSlash + 1);
    }
  }
  return base;
}

const basePath = getBasePath();

// Format dynamic route links for SPA / static hosting compatibility
function getRouteLink(path) {
  if (!path) return '#';
  const bp = getBasePath();
  if (path.includes('/brands/')) {
    const brandsIndex = path.indexOf('/brands/');
    const subpath = path.substring(brandsIndex);
    return `${bp}index.html#${subpath}`;
  }
  if (path === '/cart/index.html' || path === 'cart/index.html') {
    return `${bp}cart/index.html`;
  }
  if (path === '/checkout/index.html' || path === 'checkout/index.html') {
    return `${bp}checkout/index.html`;
  }
  if (path === '/index.html' || path === 'index.html' || path === '/') {
    return `${bp}index.html`;
  }
  return path;
}

// Automatically rewrite any links to use the correct base path and hash routing
function fixAllNavigationLinks() {
  const bp = getBasePath();
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Skip external/mailto/tel or hash-only links
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http://') || href.startsWith('https://')) {
      return;
    }
    
    // Check if already rewritten to prevent duplicate manipulation
    if (href.includes('#/brands/')) {
      return;
    }
    
    if (href.includes('/brands/')) {
      const brandsIndex = href.indexOf('/brands/');
      const subpath = href.substring(brandsIndex);
      link.setAttribute('href', `${bp}index.html#${subpath}`);
    } else if (href === '/cart/index.html' || href === 'cart/index.html') {
      link.setAttribute('href', `${bp}cart/index.html`);
    } else if (href === '/checkout/index.html' || href === 'checkout/index.html') {
      link.setAttribute('href', `${bp}checkout/index.html`);
    } else if (href === '/index.html' || href === 'index.html' || href === '/') {
      link.setAttribute('href', `${bp}index.html`);
    }
  });
}

// Format currency in NGN Naira
function formatCurrency(amount, currency = 'NGN') {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0
  }).format(amount);
}

// Helper to resolve an image for a specific niche
function getNicheImage(brandSlug, nicheSlug) {
  const prod = allProducts.find(p => p.brand === brandSlug && p.niche === nicheSlug);
  return prod && prod.images && prod.images.length > 0 ? prod.images[0] : 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80';
}

// Helper to resolve an image for a specific merchandise
function getMerchandiseImage(brandSlug, nicheSlug, merchSlug) {
  const prod = allProducts.find(p => p.brand === brandSlug && p.niche === nicheSlug && p.merchandise === merchSlug);
  return prod && prod.images && prod.images.length > 0 ? prod.images[0] : 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80';
}

// 1. Fetch products from JSON and cache in sessionStorage
async function fetchProducts() {
  if (allProducts.length > 0) return allProducts;
  
  const cached = sessionStorage.getItem('store_products_cache');
  if (cached) {
    allProducts = JSON.parse(cached);
    return allProducts;
  }
  
  try {
    const url = `${basePath}data/products.json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products database');
    allProducts = await response.json();
    sessionStorage.setItem('store_products_cache', JSON.stringify(allProducts));
    return allProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Cart Utility Functions
function getCart() {
  const cart = localStorage.getItem(cartKey);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(badge => {
    if (totalQty > 0) {
      badge.textContent = totalQty;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  });
}

// Add to Cart
function addToCart(productId, qty = 1, showNotification = true) {
  const cart = getCart();
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;
  
  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.images[0],
      qty: qty,
      brand: product.brand,
      currency: product.currency
    });
  }
  
  saveCart(cart);
  
  if (showNotification) {
    showToast(`${product.name} added to cart!`);
  }
}

// Simple Toast Notification
function showToast(message) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.position = 'fixed';
    toastContainer.style.bottom = '20px';
    toastContainer.style.right = '20px';
    toastContainer.style.zIndex = '1000';
    toastContainer.style.display = 'flex';
    toastContainer.style.flexDirection = 'column';
    toastContainer.style.gap = '10px';
    document.body.appendChild(toastContainer);
  }
  
  const toast = document.createElement('div');
  toast.style.backgroundColor = '#111111';
  toast.style.color = '#FFFFFF';
  toast.style.padding = '0.75rem 1.5rem';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  toast.style.fontSize = '0.875rem';
  toast.style.fontWeight = '600';
  toast.style.borderLeft = '4px solid #00f0ff';
  toast.style.transition = 'all 0.3s ease';
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(20px)';
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  // Trigger transition
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 50);
  
  // Fade out and remove
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Render Cart Page
function renderCart() {
  const cartTableBody = document.getElementById('cart-table-body');
  const cartSummaryEl = document.getElementById('cart-summary-container');
  const emptyCartEl = document.getElementById('empty-cart');
  const cartContentEl = document.getElementById('cart-content');
  
  if (!cartTableBody) return; // Not on cart page
  
  const cart = getCart();
  
  if (cart.length === 0) {
    if (emptyCartEl) emptyCartEl.style.display = 'block';
    if (cartContentEl) cartContentEl.style.display = 'none';
    return;
  }
  
  if (emptyCartEl) emptyCartEl.style.display = 'none';
  if (cartContentEl) cartContentEl.style.display = 'grid';
  
  cartTableBody.innerHTML = '';
  let subtotal = 0;
  
  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    
    const product = allProducts.find(p => p.id === item.id);
    const productLink = product 
      ? `/brands/${product.brand}/${product.niche}/${product.merchandise}/${product.slug}/index.html` 
      : '#';
      
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <div class="cart-item-info">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy">
          <div>
            <h4 style="margin-bottom:0.25rem;"><a href="${productLink}">${item.name}</a></h4>
            <span class="text-muted" style="font-size:0.8125rem;text-transform:uppercase;">Brand: ${item.brand.toUpperCase()}</span>
          </div>
        </div>
      </td>
      <td>${formatCurrency(item.price, item.currency)}</td>
      <td>
        <div class="qty-selector">
          <button class="qty-btn" onclick="updateCartItemQty('${item.id}', -1)">-</button>
          <input type="text" class="qty-input" value="${item.qty}" readonly>
          <button class="qty-btn" onclick="updateCartItemQty('${item.id}', 1)">+</button>
        </div>
      </td>
      <td>${formatCurrency(itemTotal, item.currency)}</td>
      <td>
        <button class="icon-btn" onclick="removeCartItem('${item.id}')" style="color:var(--color-danger);" title="Remove Item">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        </button>
      </td>
    `;
    cartTableBody.appendChild(row);
  });
  
  if (cartSummaryEl) {
    const shipping = 5000; // Flat delivery fee in NGN
    const total = subtotal + shipping;
    
    cartSummaryEl.innerHTML = `
      <div class="cart-summary-row">
        <span>Subtotal</span>
        <span>${formatCurrency(subtotal)}</span>
      </div>
      <div class="cart-summary-row">
        <span>Delivery Fee</span>
        <span>${formatCurrency(shipping)}</span>
      </div>
      <div class="cart-summary-row cart-summary-total">
        <span>Total</span>
        <span>${formatCurrency(total)}</span>
      </div>
      <a href="/checkout/index.html" class="btn btn-primary w-full" style="display:flex;margin-top:1.5rem;">Proceed to Checkout</a>
    `;
  }
}

window.updateCartItemQty = function(id, delta) {
  const cart = getCart();
  const index = cart.findIndex(item => item.id === id);
  if (index > -1) {
    const item = cart[index];
    const product = allProducts.find(p => p.id === id);
    const maxStock = product ? product.stock : 99;
    
    const newQty = item.qty + delta;
    if (newQty > 0 && newQty <= maxStock) {
      item.qty = newQty;
      saveCart(cart);
      renderCart();
    } else if (newQty > maxStock) {
      showToast(`Only ${maxStock} items available in stock!`);
    }
  }
};

window.removeCartItem = function(id) {
  let cart = getCart();
  const product = allProducts.find(p => p.id === id);
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  renderCart();
  if (product) {
    showToast(`${product.name} removed from cart`);
  }
};

// Parse URL Slugs to dynamic context (routing helper)
function parseUrlSlugs() {
  let pathname = window.location.pathname;
  const hash = window.location.hash;
  
  if (hash) {
    if (hash.startsWith('#/')) {
      pathname = hash.substring(1);
    } else if (hash.startsWith('#')) {
      pathname = '/' + hash.substring(1);
    }
  }
  
  const context = {
    type: 'homepage', // homepage, brand, niche, merchandise, product, cart, checkout
    brand: null,
    niche: null,
    merchandise: null,
    product: null
  };
  
  if (pathname.includes('/cart/')) {
    context.type = 'cart';
    return context;
  }
  if (pathname.includes('/checkout/')) {
    context.type = 'checkout';
    return context;
  }
  
  if (pathname.includes('/brands/')) {
    const brandsIndex = pathname.indexOf('/brands/');
    const subpath = pathname.substring(brandsIndex + '/brands/'.length);
    const segments = subpath.split('/').filter(s => s && s !== 'index.html');
    
    if (segments.length === 1) {
      context.type = 'brand';
      context.brand = segments[0];
    } else if (segments.length === 2) {
      context.type = 'niche';
      context.brand = segments[0];
      context.niche = segments[1];
    } else if (segments.length === 3) {
      context.type = 'merchandise';
      context.brand = segments[0];
      context.niche = segments[1];
      context.merchandise = segments[2];
    } else if (segments.length >= 4) {
      context.type = 'product';
      context.brand = segments[0];
      context.niche = segments[1];
      context.merchandise = segments[2];
      context.product = segments[3];
    }
  }
  
  return context;
}

// Client-side Product Filtering & Sorting for Merchandise Page
function filterAndRenderProducts(filters = {}) {
  const grid = document.getElementById('merchandise-product-grid');
  if (!grid) return;
  
  const context = parseUrlSlugs();
  let filtered = allProducts.filter(p => 
    p.brand === context.brand && 
    p.niche === context.niche && 
    p.merchandise === context.merchandise
  );
  
  // Apply brand filters
  if (filters.priceMin !== undefined) {
    filtered = filtered.filter(p => p.price >= filters.priceMin);
  }
  if (filters.priceMax !== undefined) {
    filtered = filtered.filter(p => p.price <= filters.priceMax);
  }
  
  if (filters.specs && Object.keys(filters.specs).length > 0) {
    Object.entries(filters.specs).forEach(([key, val]) => {
      if (val && val.length > 0) {
        filtered = filtered.filter(p => {
          const specVal = p.specs[key];
          if (!specVal) return false;
          return val.some(v => specVal.toLowerCase().includes(v.toLowerCase()));
        });
      }
    });
  }
  
  // Sort
  const sortSelect = document.getElementById('sort-products');
  if (sortSelect) {
    const sortBy = sortSelect.value;
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }
  }
  
  // Dynamic count state
  const totalCountEl = document.getElementById('total-product-count');
  if (totalCountEl) totalCountEl.textContent = `${filtered.length} products found`;
  
  grid.innerHTML = '';
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0;" class="text-muted">
        <h3>No products found for this query.</h3>
        <p>Try clearing filters or explore another specialized merchandise category.</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(p => {
    const productLink = `${p.slug}/index.html`;
    
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrapper">
        <a href="${productLink}">
          <img src="${p.images[0]}" alt="${p.name}" class="product-img" loading="lazy">
        </a>
        ${p.featured ? '<span class="product-badge">Featured</span>' : ''}
      </div>
      <div class="product-info">
        <div>
          <div class="product-meta">${p.brand_name} • ${p.niche_name}</div>
          <h3 class="product-title"><a href="${productLink}">${p.name}</a></h3>
        </div>
        <div>
          <div class="product-price-wrapper">
            <span class="product-price">${formatCurrency(p.price, p.currency)}</span>
            ${p.old_price ? `<span class="product-old-price">${formatCurrency(p.old_price, p.currency)}</span>` : ''}
          </div>
          <button class="btn btn-dark w-full add-to-cart-btn" data-id="${p.id}">Add To Cart</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  
  // Bind add-to-cart click events
  grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      addToCart(id, 1);
    });
  });
}

// Paystack Checkout
async function paystackCheckout(email, amount, items) {
  try {
    const response = await fetch('/api/paystack/initialize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        amount: amount,
        items: items
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Checkout initialization failed: ${errorText}`);
    }
    
    const data = await response.json();
    if (data.authorization_url) {
      localStorage.removeItem(cartKey);
      window.location.href = data.authorization_url;
    } else {
      throw new Error('Invalid authorization URL returned from Paystack API');
    }
  } catch (error) {
    console.error('Checkout error:', error);
    alert(`Payment initialization failed: ${error.message}`);
  }
}

// Show a modal overlay for completed payments
function showCompletionModal(ref) {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '9999';
  modal.style.backdropFilter = 'blur(4px)';

  modal.innerHTML = `
    <div style="background:var(--color-bg-white); border: 1px solid var(--color-border); padding:3rem 2rem; border-radius:16px; width:100%; max-width:480px; text-align:center; box-shadow:var(--shadow-lg); font-family:var(--font-sans);">
      <div style="width:60px; height:60px; background:rgba(52, 211, 153, 0.15); color:var(--color-success); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; border: 1px solid rgba(52, 211, 153, 0.3);">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle-2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
      </div>
      <h2 style="font-size:1.75rem; margin-bottom:0.5rem; color:var(--color-text-dark); font-weight:700;">Payment Successful!</h2>
      <p style="margin-bottom:1.5rem; font-size:0.9375rem; color:var(--color-text-muted);">Your transaction has been securely processed by Paystack.</p>
      
      <div style="background:var(--color-bg-light); padding:1rem; border-radius:8px; margin-bottom:2rem; font-size:0.8125rem; color:var(--color-text-dark); text-align:left; border:1px solid var(--color-border);">
        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
          <span style="color:var(--color-text-muted);">Order Reference:</span>
          <span style="font-weight:700; color:var(--color-primary);">${ref}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--color-text-muted);">Payment Status:</span>
          <span style="color:var(--color-success); font-weight:700; letter-spacing: 0.5px;">APPROVED</span>
        </div>
      </div>
      
      <button class="btn btn-primary w-full" id="close-modal-btn">Continue Exploring</button>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('#close-modal-btn');
  closeBtn.addEventListener('click', () => {
    modal.remove();
    const cleanUrl = getRouteLink('/index.html');
    window.location.href = cleanUrl;
  });
}

// Initialize individual pages based on context
async function initPage() {
  fixAllNavigationLinks();
  await fetchProducts();
  updateCartBadge();

  // Detect Paystack sandbox redirect callback success parameter
  const params = new URLSearchParams(window.location.search);
  if (params.get('payment') === 'success') {
    localStorage.removeItem(cartKey);
    updateCartBadge();
    showCompletionModal(params.get('ref') || `PSTK_REF_${Math.floor(Math.random() * 100000000)}`);
  }
  
  const context = parseUrlSlugs();
  
  // Search inputs
  const searchInputs = document.querySelectorAll('.header-search-input');
  searchInputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = e.target.value.trim().toLowerCase();
        if (query) {
          showToast(`Searching for "${query}" across KIMLAND brands...`);
        }
      }
    });
  });

  const homepageView = document.getElementById('homepage-view');
  const dynamicView = document.getElementById('dynamic-view');
  const breadcrumbs = document.getElementById('app-breadcrumbs');
  
  if (context.type === 'homepage') {
    if (homepageView) homepageView.style.display = 'block';
    if (dynamicView) dynamicView.style.display = 'none';
    if (breadcrumbs) breadcrumbs.style.display = 'none';
    initHomepage();
  } else if (context.type === 'cart') {
    renderCart();
  } else if (context.type === 'checkout') {
    initCheckoutPage();
  } else {
    // Dynamic rendering of brand views inside index.html
    if (homepageView) homepageView.style.display = 'none';
    if (dynamicView) {
      dynamicView.style.display = 'block';
      renderDynamicPage(context, dynamicView, breadcrumbs);
    }
  }
  
  fixAllNavigationLinks();
  populateBottomStorefront();
}

// Render dynamic Breadcrumbs
function renderBreadcrumbs(breadcrumbsContainer, segments) {
  if (!breadcrumbsContainer) return;
  breadcrumbsContainer.style.display = 'block';
  
  let html = `<a href="${getRouteLink('/index.html')}">Home</a>`;
  let currentPath = '';
  
  segments.forEach((seg, idx) => {
    html += ` <span>&gt;</span> `;
    if (idx === segments.length - 1) {
      html += `<span class="text-accent" style="font-weight: 600;">${seg.name}</span>`;
    } else {
      if (idx === 0) currentPath = `/brands/${seg.slug}/index.html`;
      else if (idx === 1) currentPath = `/brands/${segments[0].slug}/${seg.slug}/index.html`;
      else if (idx === 2) currentPath = `/brands/${segments[0].slug}/${segments[1].slug}/${seg.slug}/index.html`;
      
      html += `<a href="${getRouteLink(currentPath)}">${seg.name}</a>`;
    }
  });
  
  breadcrumbsContainer.innerHTML = html;
}

// Dynamic Page Loader
function renderDynamicPage(context, container, breadcrumbsContainer) {
  const brandSlug = context.brand;
  const brandInfo = BRANDS_INFO[brandSlug];
  
  if (!brandInfo) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 0;">
        <h2>Brand Not Found</h2>
        <p class="text-muted">The requested brand "${brandSlug}" does not exist in the KIMLAND roster.</p>
        <a href="${getRouteLink('/index.html')}" class="btn btn-primary" style="margin-top:1.5rem;">Return Home</a>
      </div>
    `;
    return;
  }
  
  if (context.type === 'brand') {
    // 1. Render Brand View
    renderBreadcrumbs(breadcrumbsContainer, [
      { name: brandInfo.name, slug: brandSlug }
    ]);
    
    container.innerHTML = `
      <section class="hero" id="brand-hero" style="background-color: #0f172a; color: #ffffff; padding: 4rem 2rem; border-radius: var(--radius-card); margin-bottom: 3rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2rem;">
        <div style="flex: 1; min-width: 300px;">
          <span style="color:var(--color-accent); font-weight:700; text-transform:uppercase; letter-spacing:1.5px; font-size:0.875rem;">Specialized Partner Brand</span>
          <h1 style="font-size: 3rem; margin-top:0.5rem; margin-bottom:1rem; color:#fff;">${brandInfo.name}</h1>
          <p style="color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">${brandInfo.long_description}</p>
          <a href="#niches" class="btn btn-primary">Browse Niches</a>
        </div>
        <div style="flex: 1; min-width: 300px; display: flex; justify-content: center;">
          <img src="${brandInfo.image}" alt="${brandInfo.name}" style="width: 100%; max-width: 400px; border-radius: var(--radius-card); object-fit: cover; box-shadow: var(--shadow-md);">
        </div>
      </section>

      <section id="niches" style="margin-bottom: 4rem;">
        <h2 class="text-center" style="font-size: 2rem; margin-bottom: 0.5rem;">Available Niches</h2>
        <p class="text-center text-muted" style="margin-bottom: 2.5rem; max-width:600px; margin-left:auto; margin-right:auto;">Choose a category to browse specific digital merchandise and blueprints.</p>
        <div class="brand-grid">
          ${Object.entries(brandInfo.niches).map(([nicheSlug, nicheData]) => `
            <a href="${getRouteLink(`/brands/${brandSlug}/${nicheSlug}/index.html`)}" class="brand-card">
              <div class="brand-img-wrapper">
                <img src="${getNicheImage(brandSlug, nicheSlug)}" alt="${nicheData.name}" loading="lazy" referrerPolicy="no-referrer">
              </div>
              <div class="brand-info-content">
                <h3>${nicheData.name}</h3>
                <p class="text-muted" style="margin-top:0.5rem; font-size:0.875rem; line-height:1.5;">${nicheData.intro}</p>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <section id="brand-bestsellers" style="margin-bottom: 4rem;">
        <h2 style="font-size: 1.75rem; margin-bottom: 0.5rem;">Trending in ${brandInfo.name}</h2>
        <p class="text-muted" style="margin-bottom: 2rem;">Top licenses and blueprint sets available right now</p>
        <div class="carousel-wrapper" id="brand-bestsellers-carousel" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
          <!-- Injected dynamically -->
        </div>
      </section>
    `;
    
    // Inject bestsellers
    const carousel = document.getElementById('brand-bestsellers-carousel');
    if (carousel) {
      carousel.innerHTML = '';
      const brandProducts = allProducts.filter(p => p.brand === brandSlug);
      brandProducts.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const productLink = getRouteLink(`/brands/${p.brand}/${p.niche}/${p.merchandise}/${p.slug}/index.html`);
        
        card.innerHTML = `
          <div class="product-img-wrapper">
            <a href="${productLink}">
              <img src="${p.images[0]}" alt="${p.name}" class="product-img" loading="lazy">
            </a>
          </div>
          <div class="product-info">
            <div>
              <div class="product-meta">${p.niche_name} • ${p.merchandise_name}</div>
              <h3 class="product-title"><a href="${productLink}">${p.name}</a></h3>
            </div>
            <div>
              <div class="product-price-wrapper">
                <span class="product-price">${formatCurrency(p.price, p.currency)}</span>
              </div>
              <button class="btn btn-dark w-full add-to-cart-btn" data-id="${p.id}">Add To Cart</button>
            </div>
          </div>
        `;
        carousel.appendChild(card);
      });
      
      carousel.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.target.getAttribute('data-id');
          addToCart(id, 1);
        });
      });
    }
  } else {
    // Niche, Merchandise, and Product Details have deeper structures
    const nicheSlug = context.niche;
    const nicheInfo = brandInfo.niches[nicheSlug];
    
    if (!nicheInfo) {
      container.innerHTML = `
        <div style="text-align: center; padding: 4rem 0;">
          <h2>Category Not Found</h2>
          <p class="text-muted">The requested niche category does not exist under ${brandInfo.name}.</p>
          <a href="${getRouteLink(`/brands/${brandSlug}/index.html`)}" class="btn btn-primary" style="margin-top:1.5rem;">Back to ${brandInfo.name}</a>
        </div>
      `;
      return;
    }
    
    if (context.type === 'niche') {
      // 2. Render Niche View
      renderBreadcrumbs(breadcrumbsContainer, [
        { name: brandInfo.name, slug: brandSlug },
        { name: nicheInfo.name, slug: nicheSlug }
      ]);
      
      container.innerHTML = `
        <section style="background-color: var(--color-bg-white); border: 1px solid var(--color-border); border-radius: var(--radius-card); padding: 3rem 2rem; margin-bottom: 3rem; text-align: center; max-width: 800px; margin-left: auto; margin-right: auto;">
          <span style="color:var(--color-accent); font-weight:700; text-transform:uppercase; letter-spacing:1.5px; font-size:0.8125rem;">${brandInfo.name} Category</span>
          <h1 style="font-size: 2.5rem; margin-top: 0.5rem; margin-bottom: 1rem;">${nicheInfo.name}</h1>
          <p class="text-muted" style="font-size: 1.0625rem; line-height: 1.7; max-width: 650px; margin-left: auto; margin-right: auto;">${nicheInfo.intro}</p>
        </section>

        <section style="margin-bottom: 4rem;">
          <h2 class="text-center" style="font-size: 1.75rem; margin-bottom: 0.5rem;">Browse Digital Merchandise</h2>
          <p class="text-center text-muted" style="margin-bottom: 2.5rem; max-width:600px; margin-left:auto; margin-right:auto;">Select specific licensing sections to view products under this niche category.</p>
          <div class="brand-grid">
            ${Object.entries(nicheInfo.merchandises).map(([merchSlug, merchName]) => `
              <a href="${getRouteLink(`/brands/${brandSlug}/${nicheSlug}/${merchSlug}/index.html`)}" class="brand-card">
                <div class="brand-img-wrapper">
                  <img src="${getMerchandiseImage(brandSlug, nicheSlug, merchSlug)}" alt="${merchName}" loading="lazy" referrerPolicy="no-referrer">
                </div>
                <div class="brand-info-content">
                  <h3>${merchName}</h3>
                  <p class="text-muted" style="margin-top: 0.5rem;">Browse entire licensing & asset listings under ${merchName}.</p>
                </div>
              </a>
            `).join('')}
          </div>
        </section>

        <section id="niche-featured" style="margin-bottom: 4rem;">
          <h2 style="font-size: 1.75rem; margin-bottom: 0.5rem;">Featured in ${nicheInfo.name}</h2>
          <p class="text-muted" style="margin-bottom: 2rem;">Premium collections in this category</p>
          <div class="carousel-wrapper" id="niche-featured-carousel" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
            <!-- Injected dynamically -->
          </div>
        </section>
      `;
      
      const carousel = document.getElementById('niche-featured-carousel');
      if (carousel) {
        carousel.innerHTML = '';
        const nicheProducts = allProducts.filter(p => p.brand === brandSlug && p.niche === nicheSlug);
        nicheProducts.forEach(p => {
          const card = document.createElement('div');
          card.className = 'product-card';
          const productLink = getRouteLink(`/brands/${p.brand}/${p.niche}/${p.merchandise}/${p.slug}/index.html`);
          
          card.innerHTML = `
            <div class="product-img-wrapper">
              <a href="${productLink}">
                <img src="${p.images[0]}" alt="${p.name}" class="product-img" loading="lazy">
              </a>
            </div>
            <div class="product-info">
              <div>
                <div class="product-meta">${p.merchandise_name}</div>
                <h3 class="product-title"><a href="${productLink}">${p.name}</a></h3>
              </div>
              <div>
                <div class="product-price-wrapper">
                  <span class="product-price">${formatCurrency(p.price, p.currency)}</span>
                </div>
                <button class="btn btn-dark w-full add-to-cart-btn" data-id="${p.id}">Add To Cart</button>
              </div>
            </div>
          `;
          carousel.appendChild(card);
        });
        
        carousel.querySelectorAll('.add-to-cart-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            addToCart(id, 1);
          });
        });
      }
    } else {
      const merchandiseSlug = context.merchandise;
      const merchName = nicheInfo.merchandises[merchandiseSlug];
      
      if (!merchName) {
        container.innerHTML = `
          <div style="text-align: center; padding: 4rem 0;">
            <h2>Merchandise Class Not Found</h2>
            <p class="text-muted">The requested merchandise category does not exist under ${nicheInfo.name}.</p>
            <a href="${getRouteLink(`/brands/${brandSlug}/${nicheSlug}/index.html`)}" class="btn btn-primary" style="margin-top:1.5rem;">Back to ${nicheInfo.name}</a>
          </div>
        `;
        return;
      }
      
      if (context.type === 'merchandise') {
        // 3. Render Merchandise Category View with Filtering
        renderBreadcrumbs(breadcrumbsContainer, [
          { name: brandInfo.name, slug: brandSlug },
          { name: nicheInfo.name, slug: nicheSlug },
          { name: merchName, slug: merchandiseSlug }
        ]);
        
        container.innerHTML = `
          <section style="background-color: var(--color-bg-white); border-bottom: 1px solid var(--color-border); padding: 2rem; border-radius: var(--radius-card); margin-bottom: 2.5rem;">
            <span style="color:var(--color-accent); font-weight:700; text-transform:uppercase; letter-spacing:1px; font-size:0.75rem;">${brandInfo.name} • ${nicheInfo.name}</span>
            <h1 style="font-size: 2.25rem; margin-top: 0.25rem; margin-bottom: 0.5rem;">${merchName}</h1>
            <p class="text-muted" style="font-size: 0.9375rem;">Browse and filter elite ${merchName} products. Secured Paystack Checkout. Seamless licensing activation.</p>
          </section>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 2rem;" class="merch-columns-layout">
            <!-- Filters Form Sidebar -->
            <aside class="cart-summary" style="height: fit-content; background: var(--color-bg-white); padding: 1.5rem; border-radius: var(--radius-card); border: 1px solid var(--color-border); max-width: 280px; width:100%;">
              <h3 style="font-size: 1.125rem; margin-bottom: 1rem; border-bottom: 1px solid var(--color-border); padding-bottom: 0.5rem;">Filter Products</h3>
              <form id="filters-form">
                <!-- Injected dynamically by initMerchandisePage -->
              </form>
            </aside>

            <!-- Products Column -->
            <div style="flex: 1;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                <span id="total-product-count" style="font-weight: 600; font-size: 0.875rem;" class="text-muted">Loading products...</span>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <label for="sort-products" style="font-size: 0.8125rem; font-weight: 600;" class="text-muted">Sort By:</label>
                  <select id="sort-products" style="padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--color-border); font-size: 0.8125rem; font-weight: 600; outline: none; background: white;">
                    <option value="featured">Featured First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Alphabetical: A to Z</option>
                    <option value="name-desc">Alphabetical: Z to A</option>
                  </select>
                </div>
              </div>

              <div id="merchandise-product-grid" class="brand-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem;">
                <!-- Product cards injected dynamically -->
              </div>
            </div>
          </div>
        `;
        
        initMerchandisePage(brandSlug, nicheSlug, merchandiseSlug);
      } else {
        const productSlug = context.product;
        const product = allProducts.find(p => p.brand === brandSlug && p.slug === productSlug);
        
        if (!product) {
          container.innerHTML = `
            <div style="text-align: center; padding: 4rem 0;">
              <h2>Asset Not Found</h2>
              <p class="text-muted">The requested licensing asset does not exist or has been archived.</p>
              <a href="${getRouteLink(`/brands/${brandSlug}/${nicheSlug}/${merchandiseSlug}/index.html`)}" class="btn btn-primary" style="margin-top:1.5rem;">Return to ${merchName}</a>
            </div>
          `;
          return;
        }
        
        // 4. Render Product Detail View
        renderBreadcrumbs(breadcrumbsContainer, [
          { name: brandInfo.name, slug: brandSlug },
          { name: nicheInfo.name, slug: nicheSlug },
          { name: merchName, slug: merchandiseSlug },
          { name: product.name, slug: productSlug }
        ]);
        
        container.innerHTML = `
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem; margin-bottom: 4rem;">
            <!-- Left Column: Gallery -->
            <div>
              <div class="gallery" style="background-color: var(--color-bg-white); border: 1px solid var(--color-border); border-radius: var(--radius-card); padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                <div style="width: 100%; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 8px; background: #f8fafc;">
                  <img id="gallery-main-img" src="" alt="" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="thumbnail-grid" id="gallery-thumbnails" style="display: flex; gap: 0.75rem; overflow-x: auto; padding-bottom:0.5rem;">
                  <!-- Thumbnails injected dynamically -->
                </div>
              </div>
            </div>

            <!-- Right Column: Product Actions -->
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div>
                <div style="font-size:0.8125rem; font-weight:700; color:var(--color-accent); text-transform:uppercase; letter-spacing:1px; margin-bottom:0.25rem;">
                  ${brandInfo.name} • ${nicheInfo.name} • ${merchName}
                </div>
                <h1 id="product-title" style="font-size: 2.25rem; margin-bottom: 0.5rem; line-height: 1.2; font-weight:800; color:var(--color-primary);">${product.name}</h1>
                <div id="product-stock-container"></div>
              </div>

              <div id="product-price-container" style="display: flex; align-items: baseline; gap: 1rem;">
                <!-- Prices injected dynamically -->
              </div>

              <div style="border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); padding: 1.5rem 0; display: flex; flex-direction: column; gap: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <span style="font-weight: 700; font-size: 0.875rem;" class="text-muted">Quantity:</span>
                  <div class="qty-selector" style="background: white; border: 1px solid var(--color-border); border-radius: 8px;">
                    <button class="qty-btn" id="qty-minus">-</button>
                    <input type="text" class="qty-input" id="product-qty" value="1" readonly style="border: none; text-align:center; width:40px; font-weight:700;">
                    <button class="qty-btn" id="qty-plus">+</button>
                  </div>
                </div>

                <div style="display: flex; gap: 1rem; width: 100%; flex-wrap: wrap;">
                  <button class="btn btn-primary" id="add-to-cart-detail" style="flex: 1; padding: 1rem; display: flex; gap: 0.5rem; justify-content:center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    Add To Cart
                  </button>
                  <button class="btn btn-dark" id="buy-now-detail" style="flex: 1; padding: 1rem; display: flex; gap: 0.5rem; justify-content:center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    Buy Now
                  </button>
                </div>
              </div>

              <div>
                <h3 style="font-size: 1.125rem; margin-bottom: 0.5rem; font-weight:700;">Dynamic Digital Licensing</h3>
                <p class="text-muted" style="font-size: 0.8125rem; line-height: 1.5;">This product is licensed from KIMLAND's original corporate library. High speed download link is delivered securely via Paystack immediately upon order checkout clearance.</p>
              </div>
            </div>
          </div>

          <!-- Product Details Tabs -->
          <div style="background-color: var(--color-bg-white); border: 1px solid var(--color-border); border-radius: var(--radius-card); padding: 2rem; margin-bottom: 4rem;">
            <div class="tabs" style="display: flex; border-bottom: 1px solid var(--color-border); margin-bottom: 1.5rem; gap: 1.5rem;">
              <button class="tab-btn active" data-tab="description" style="padding-bottom: 0.75rem; font-weight: 700; background: none; border: none; cursor: pointer; border-bottom: 3px solid var(--color-accent); font-size: 0.875rem;">Description</button>
              <button class="tab-btn" data-tab="specs" style="padding-bottom: 0.75rem; font-weight: 700; background: none; border: none; cursor: pointer; font-size: 0.875rem; border-bottom:3px solid transparent;">Specifications</button>
              <button class="tab-btn" data-tab="video" style="padding-bottom: 0.75rem; font-weight: 700; background: none; border: none; cursor: pointer; font-size: 0.875rem; border-bottom:3px solid transparent;">Product Review</button>
            </div>
            
            <div class="tab-content">
              <div class="tab-pane active" id="tab-pane-description"></div>
              <div class="tab-pane" id="tab-pane-specs" style="display: none;"></div>
              <div class="tab-pane" id="tab-pane-video" style="display: none;"></div>
            </div>
          </div>

          <!-- Related Products Section -->
          <section id="related-section" style="margin-bottom: 4rem;">
            <h2 style="font-size: 1.75rem; margin-bottom: 0.5rem;">Related Assets</h2>
            <p class="text-muted" style="margin-bottom: 2rem;">Similar collections you might be interested in</p>
            <div class="brand-grid" id="related-products-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem;">
              <!-- Injected dynamically -->
            </div>
          </section>
        `;
        
        initProductPage(brandSlug, nicheSlug, merchandiseSlug, productSlug);
      }
    }
  }
}

// Homepage Engine
function initHomepage() {
  // Handled globally by populateBottomCarousels inside initPage()
}

// Brand Homepage Engine
function initBrandPage(brandSlug) {
  // handeled dynamically in renderDynamicPage
}

// Niche Page Engine
function initNichePage(brandSlug, nicheSlug) {
  // handeled dynamically in renderDynamicPage
}

// Merchandise Page Engine
function initMerchandisePage(brandSlug, nicheSlug, merchandiseSlug) {
  const merchProducts = allProducts.filter(p => 
    p.brand === brandSlug && 
    p.niche === nicheSlug && 
    p.merchandise === merchandiseSlug
  );
  
  if (merchProducts.length === 0) return;
  
  const specMap = {};
  merchProducts.forEach(p => {
    Object.entries(p.specs).forEach(([key, val]) => {
      if (!specMap[key]) specMap[key] = new Set();
      val.split(',').forEach(v => specMap[key].add(v.trim()));
    });
  });
  
  const filterForm = document.getElementById('filters-form');
  if (filterForm) {
    let specHtml = '';
    Object.entries(specMap).forEach(([key, values]) => {
      specHtml += `
        <div class="filter-group" style="margin-top: 1.5rem;">
          <h4 style="font-size:0.875rem; margin-bottom:0.5rem; font-weight:700;">${key}</h4>
          <div style="display:flex; flex-direction:column; gap:0.375rem;">
            ${Array.from(values).map(v => `
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.8125rem; cursor:pointer;" class="text-muted">
                <input type="checkbox" class="spec-filter" data-spec-key="${key}" value="${v}">
                <span>${v}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    });
    
    filterForm.innerHTML = `
      <div class="filter-group">
        <h4 style="font-size:0.875rem; margin-bottom:0.5rem; font-weight:700;">Price Range</h4>
        <div style="display:flex; flex-direction:column; gap:0.5rem;">
          <input type="range" id="price-slider" min="0" max="1000000" step="5000" value="1000000" style="width:100%;">
          <div style="display:flex; justify-content:space-between; font-size:0.75rem;" class="text-muted">
            <span>₦0</span>
            <span id="price-slider-val">Max: ₦1,000,000</span>
          </div>
        </div>
      </div>
      ${specHtml}
      <button type="button" id="clear-filters-btn" class="btn btn-outline w-full" style="padding:0.5rem; margin-top:1.5rem; font-size:0.75rem; border-radius:8px;">Clear Filters</button>
    `;
    
    const priceSlider = document.getElementById('price-slider');
    const priceSliderVal = document.getElementById('price-slider-val');
    priceSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      priceSliderVal.textContent = `Max: ${formatCurrency(val)}`;
      triggerFilterUpdate();
    });
    
    const clearBtn = document.getElementById('clear-filters-btn');
    clearBtn.addEventListener('click', () => {
      filterForm.reset();
      priceSlider.value = 1000000;
      priceSliderVal.textContent = `Max: ${formatCurrency(1000000)}`;
      triggerFilterUpdate();
    });
    
    filterForm.querySelectorAll('.spec-filter').forEach(chk => {
      chk.addEventListener('change', triggerFilterUpdate);
    });
    
    const sortSelect = document.getElementById('sort-products');
    if (sortSelect) {
      sortSelect.addEventListener('change', triggerFilterUpdate);
    }
  }
  
  filterAndRenderProducts();
}

function triggerFilterUpdate() {
  const priceSlider = document.getElementById('price-slider');
  const maxPrice = priceSlider ? parseInt(priceSlider.value) : 1000000;
  
  const specFilters = document.querySelectorAll('.spec-filter:checked');
  const specFiltersObj = {};
  specFilters.forEach(chk => {
    const key = chk.getAttribute('data-spec-key');
    const val = chk.value;
    if (!specFiltersObj[key]) specFiltersObj[key] = [];
    specFiltersObj[key].push(val);
  });
  
  filterAndRenderProducts({
    priceMin: 0,
    priceMax: maxPrice,
    specs: specFiltersObj
  });
}

// Product Detail Page Engine
function initProductPage(brandSlug, nicheSlug, merchandiseSlug, productSlug) {
  const product = allProducts.find(p => p.brand === brandSlug && p.slug === productSlug);
  if (!product) return;
  
  document.title = `${product.name} | KIMLAND Licensing`;
  injectProductSchema(product);
  
  // Gallery
  const mainImg = document.getElementById('gallery-main-img');
  const thumbGrid = document.getElementById('gallery-thumbnails');
  
  if (mainImg && thumbGrid) {
    mainImg.src = product.images[0];
    mainImg.alt = product.name;
    
    thumbGrid.innerHTML = '';
    product.images.forEach((imgUrl, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `thumbnail ${idx === 0 ? 'active' : ''}`;
      thumb.style.width = '70px';
      thumb.style.height = '50px';
      thumb.style.borderRadius = '6px';
      thumb.style.overflow = 'hidden';
      thumb.style.cursor = 'pointer';
      thumb.style.border = idx === 0 ? '2px solid var(--color-accent)' : '2px solid transparent';
      
      thumb.innerHTML = `<img src="${imgUrl}" alt="${product.name} Preview ${idx+1}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">`;
      thumb.addEventListener('click', () => {
        mainImg.src = imgUrl;
        thumbGrid.querySelectorAll('.thumbnail').forEach(t => {
          t.style.border = '2px solid transparent';
        });
        thumb.style.border = '2px solid var(--color-accent)';
      });
      thumbGrid.appendChild(thumb);
    });
  }
  
  // Pricing
  const priceContainer = document.getElementById('product-price-container');
  if (priceContainer) {
    priceContainer.innerHTML = `
      <div class="price-main" style="font-size:2rem; font-weight:800; color:var(--color-accent);">${formatCurrency(product.price, product.currency)}</div>
      ${product.old_price ? `<div class="price-old" style="font-size:1.25rem; color:var(--color-text-muted); text-decoration:line-through; margin-left:1rem;">${formatCurrency(product.old_price, product.currency)}</div>` : ''}
    `;
  }
  
  // Stock
  const stockContainer = document.getElementById('product-stock-container');
  if (stockContainer) {
    if (product.stock > 0) {
      stockContainer.className = 'stock-status in-stock';
      stockContainer.style.color = 'var(--color-success)';
      stockContainer.style.fontWeight = '600';
      stockContainer.style.fontSize = '0.875rem';
      stockContainer.style.display = 'flex';
      stockContainer.style.alignItems = 'center';
      stockContainer.style.gap = '0.375rem';
      stockContainer.style.marginTop = '0.5rem';
      stockContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Instant Delivery (Licensing Slot Available)`;
    } else {
      stockContainer.className = 'stock-status out-of-stock';
      stockContainer.style.color = 'var(--color-danger)';
      stockContainer.style.fontWeight = '600';
      stockContainer.style.fontSize = '0.875rem';
      stockContainer.style.display = 'flex';
      stockContainer.style.alignItems = 'center';
      stockContainer.style.gap = '0.375rem';
      stockContainer.style.marginTop = '0.5rem';
      stockContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg> Unavailable`;
    }
  }
  
  // Tabs Detail
  const tabDesc = document.getElementById('tab-pane-description');
  const tabSpecs = document.getElementById('tab-pane-specs');
  const tabVideo = document.getElementById('tab-pane-video');
  
  if (tabDesc) tabDesc.innerHTML = product.description;
  
  if (tabSpecs) {
    let specRows = '';
    Object.entries(product.specs).forEach(([key, val]) => {
      specRows += `
        <tr style="border-bottom:1px solid var(--color-border);">
          <th style="padding:0.75rem; text-align:left; font-size:0.875rem; color:var(--color-primary);">${key}</th>
          <td style="padding:0.75rem; font-size:0.875rem; color:var(--color-text-muted);">${val}</td>
        </tr>
      `;
    });
    tabSpecs.innerHTML = `<table style="width:100%; border-collapse:collapse;"><tbody>${specRows}</tbody></table>`;
  }
  
  if (tabVideo) {
    if (product.youtube) {
      tabVideo.innerHTML = `
        <h4 style="margin-bottom:1rem; font-size:1rem; font-weight:700;">Watch Product Demonstration</h4>
        <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:8px;">
          <iframe src="${product.youtube}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
        </div>
      `;
    } else {
      tabVideo.innerHTML = `<p class="text-muted" style="font-size:0.875rem;">No review or demonstration videos available for this product.</p>`;
    }
  }
  
  // Tab triggers
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.style.borderBottom = '3px solid transparent';
      });
      document.querySelectorAll('.tab-pane').forEach(p => p.style.display = 'none');
      
      btn.style.borderBottom = '3px solid var(--color-accent)';
      const pane = document.getElementById(`tab-pane-${targetId}`);
      if (pane) pane.style.display = 'block';
    });
  });
  
  // Related
  const relatedGrid = document.getElementById('related-products-grid');
  if (relatedGrid) {
    relatedGrid.innerHTML = '';
    const related = allProducts
      .filter(p => p.merchandise === product.merchandise && p.id !== product.id)
      .slice(0, 4);
      
    if (related.length === 0) {
      const relSec = document.getElementById('related-section');
      if (relSec) relSec.style.display = 'none';
    } else {
      related.forEach(p => {
        const productLink = getRouteLink(`/brands/${p.brand}/${p.niche}/${p.merchandise}/${p.slug}/index.html`);
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <div class="product-img-wrapper">
            <a href="${productLink}">
              <img src="${p.images[0]}" alt="${p.name}" class="product-img" loading="lazy">
            </a>
          </div>
          <div class="product-info">
            <div>
              <div class="product-meta">${p.brand_name}</div>
              <h3 class="product-title"><a href="${productLink}">${p.name}</a></h3>
            </div>
            <div>
              <div class="product-price-wrapper">
                <span class="product-price">${formatCurrency(p.price, p.currency)}</span>
              </div>
              <button class="btn btn-dark w-full add-to-cart-btn" data-id="${p.id}">Add To Cart</button>
            </div>
          </div>
        `;
        relatedGrid.appendChild(card);
      });
      
      relatedGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.target.getAttribute('data-id');
          addToCart(id, 1);
        });
      });
    }
  }
  
  // Quantity Selector
  const qtyInput = document.getElementById('product-qty');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  
  if (qtyInput && qtyMinus && qtyPlus) {
    qtyMinus.addEventListener('click', () => {
      const val = parseInt(qtyInput.value);
      if (val > 1) qtyInput.value = val - 1;
    });
    
    qtyPlus.addEventListener('click', () => {
      const val = parseInt(qtyInput.value);
      if (val < product.stock) {
        qtyInput.value = val + 1;
      } else {
        showToast(`Only ${product.stock} items remaining in stock!`);
      }
    });
  }
  
  // Add to Cart Detail Trigger
  const detailAddToCartBtn = document.getElementById('add-to-cart-detail');
  if (detailAddToCartBtn) {
    detailAddToCartBtn.addEventListener('click', () => {
      const qty = parseInt(qtyInput ? qtyInput.value : '1');
      addToCart(product.id, qty);
    });
  }
  
  // Buy Now Detail Trigger
  const detailBuyNowBtn = document.getElementById('buy-now-detail');
  if (detailBuyNowBtn) {
    detailBuyNowBtn.addEventListener('click', () => {
      const qty = parseInt(qtyInput ? qtyInput.value : '1');
      addToCart(product.id, qty, false);
      window.location.href = '/checkout/index.html';
    });
  }
}

// Checkout Page Engine
function initCheckoutPage() {
  const checkoutItemsEl = document.getElementById('checkout-items');
  const checkoutSummaryEl = document.getElementById('checkout-summary');
  const checkoutForm = document.getElementById('checkout-form');
  
  if (!checkoutItemsEl) return;
  
  const cart = getCart();
  
  if (cart.length === 0) {
    checkoutItemsEl.innerHTML = `
      <div style="text-align: center; padding: 2rem 0;">
        <p class="text-muted">Your cart is currently empty. Add products to continue.</p>
        <a href="/index.html" class="btn btn-primary" style="margin-top:1rem;display:inline-flex;">Start Shopping</a>
      </div>
    `;
    if (checkoutForm) {
      checkoutForm.querySelector('button[type="submit"]').disabled = true;
    }
    return;
  }
  
  checkoutItemsEl.innerHTML = '';
  let subtotal = 0;
  
  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    div.style.alignItems = 'center';
    div.style.marginBottom = '1rem';
    div.style.paddingBottom = '1rem';
    div.style.borderBottom = '1px solid var(--color-border)';
    
    div.innerHTML = `
      <div style="display:flex;align-items:center;gap:0.75rem;">
        <img src="${item.image}" alt="${item.name}" style="width:45px;height:45px;object-fit:cover;border-radius:4px;" loading="lazy">
        <div>
          <h5 style="margin-bottom:0.125rem;font-size:0.875rem;">${item.name}</h5>
          <span class="text-muted" style="font-size:0.75rem;">Qty: ${item.qty} × ${formatCurrency(item.price)}</span>
        </div>
      </div>
      <span style="font-weight:600;font-size:0.875rem;">${formatCurrency(itemTotal)}</span>
    `;
    checkoutItemsEl.appendChild(div);
  });
  
  const shipping = 5000;
  const total = subtotal + shipping;
  
  if (checkoutSummaryEl) {
    checkoutSummaryEl.innerHTML = `
      <div class="cart-summary-row">
        <span>Subtotal</span>
        <span>${formatCurrency(subtotal)}</span>
      </div>
      <div class="cart-summary-row">
        <span>Delivery Fee</span>
        <span>${formatCurrency(shipping)}</span>
      </div>
      <div class="cart-summary-row cart-summary-total">
        <span>Total Amount</span>
        <span>${formatCurrency(total)}</span>
      </div>
    `;
  }
  
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('checkout-email').value.trim();
      const name = document.getElementById('checkout-name').value.trim();
      const phone = document.getElementById('checkout-phone').value.trim();
      const address = document.getElementById('checkout-address').value.trim();
      
      if (!email || !name || !phone || !address) {
        showToast('Please fill out all required fields');
        return;
      }
      
      const submitBtn = checkoutForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing Payment...';
      
      const itemsList = cart.map(item => ({
        id: item.id,
        name: item.name,
        qty: item.qty,
        price: item.price,
        brand: item.brand
      }));
      
      await paystackCheckout(email, total, itemsList);
    });
  }
}

// Microdata SEO
function injectProductSchema(product) {
  const existingScript = document.getElementById('product-jsonld');
  if (existingScript) existingScript.remove();
  
  const script = document.createElement('script');
  script.id = 'product-jsonld';
  script.type = 'application/ld+json';
  
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images,
    "description": product.seo_desc,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": product.brand_name
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": product.currency,
      "price": product.price,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  };
  
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

// Dynamic Countdown Timer Engine for Jumia-style Flash Sales (Supports Multiple Timers)
function startFlashSaleCountdown() {
  const timerElements = document.querySelectorAll('.flash-sale-countdown');
  if (timerElements.length === 0) return;

  function updateTimers() {
    const now = new Date().getTime();

    timerElements.forEach(el => {
      const endsAtStr = el.getAttribute('data-ends');
      let targetDate;
      if (endsAtStr) {
        targetDate = new Date(endsAtStr).getTime();
      } else {
        // Default to midnight tonight
        const today = new Date();
        targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).getTime();
      }

      const distance = targetDate - now;
      if (distance < 0) {
        el.textContent = "Flash Sale Ended!";
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const pad = (num) => String(num).padStart(2, '0');
      el.textContent = `${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`;
    });
  }

  updateTimers();
  setInterval(updateTimers, 1000);
}

// Render standard high-density catalog card html (Automatically merges global product metadata)
function getCatalogProductCardHtml(p) {
  let matched = null;
  if (p.id && typeof allProducts !== 'undefined' && allProducts) {
    matched = allProducts.find(item => item.id === p.id);
  } else if (p.slug && typeof allProducts !== 'undefined' && allProducts) {
    matched = allProducts.find(item => item.slug === p.slug);
  }

  if (matched) {
    p = Object.assign({
      brand: matched.brand,
      brand_name: matched.brand_name || matched.brand,
      name: matched.name,
      price: matched.price,
      old_price: matched.old_price,
      discount: matched.old_price ? `-${Math.round((1 - matched.price / matched.old_price) * 100)}%` : '',
      image: matched.images ? matched.images[0] : '',
      slug: matched.slug,
      niche: matched.niche,
      merchandise: matched.merchandise
    }, p);
  }

  // Try to find the actual product link from global products or build a dynamic fallback route
  let productLink = '#';
  if (p.slug && p.brand && p.niche && p.merchandise) {
    productLink = getRouteLink(`/brands/${p.brand}/${p.niche}/${p.merchandise}/${p.slug}/index.html`);
  } else if (p.slug && p.brand) {
    productLink = getRouteLink(`/brands/${p.brand}/${p.slug}/index.html`);
  }

  const itemsLeft = p.items_left || 12;
  const totalItems = p.total_items || 100;
  const fillPercentage = Math.round((itemsLeft / totalItems) * 100);

  const priceFormatted = typeof p.price === 'number' ? formatCurrency(p.price, p.currency) : p.price;
  const oldPriceHtml = p.old_price ? `<span class="old-price">${typeof p.old_price === 'number' ? formatCurrency(p.old_price, p.currency) : p.old_price}</span>` : '';

  return `
    <div class="catalog-product-card">
      <div class="img-wrapper">
        <a href="${productLink}">
          <img src="${p.image || (p.images ? p.images[0] : '')}" alt="${p.name}" loading="lazy" referrerPolicy="no-referrer">
        </a>
        ${p.discount ? `<span class="discount-tag">${p.discount}</span>` : ''}
      </div>
      <div class="card-info">
        <div class="brand-label">${p.brand_name || p.brand || 'KIMLAND'}</div>
        <h4 class="title"><a href="${productLink}">${p.name}</a></h4>
        <div class="price-row">
          <span class="price">${priceFormatted}</span>
          ${oldPriceHtml}
        </div>
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${fillPercentage}%"></div>
          </div>
          <span class="progress-text">${itemsLeft} items left</span>
        </div>
        <button class="buy-button add-to-cart-btn" data-id="${p.id || p.slug}">Add To Cart</button>
      </div>
    </div>
  `;
}

// Render a single bottom storefront section dynamically
function renderBottomSection(section) {
  if (!section) return '';

  let html = '';

  if (section.type === 'categories') {
    const items = section.items || [];
    if (items.length > 0) {
      html += `
        <div class="category-pill-row">
          ${items.map(c => `
            <div class="category-pill-card" onclick="window.scrollTo({top: 400, behavior: 'smooth'})">
              <div class="img-container">
                <img src="${c.image}" alt="${c.name}" loading="lazy" referrerPolicy="no-referrer">
              </div>
              <span>${c.name}</span>
            </div>
          `).join('')}
        </div>
      `;
    }
  } 
  else if (section.type === 'deals_of_the_day') {
    const products = section.products || [];
    if (products.length > 0) {
      html += `
        <div class="deals-of-the-day-section">
          <div class="deals-banner-card">
            ${section.title || 'DEALS OF THE DAY'}
            <span>TOP VALUES</span>
          </div>
          <div class="deals-circles-container">
            ${products.map(p => `
              <div class="deal-circle-card" onclick="window.scrollTo({top: 600, behavior: 'smooth'})">
                <div class="circle-img-wrapper">
                  <img src="${p.image}" alt="${p.name}" loading="lazy" referrerPolicy="no-referrer">
                </div>
                <span class="circle-price">${p.price}</span>
                <span class="circle-name">${p.name}</span>
              </div>
            `).join('')}
          </div>
          <div class="deals-banner-card" style="background: var(--color-primary);">
            KIMLAND STORES
            <span>VERIFIED ONLY</span>
          </div>
        </div>
      `;
    }
  }
  else {
    // Default or custom catalog styles (including flash_sales, unbeatable_deals, custom sections)
    const products = section.products || [];
    if (products.length > 0) {
      // Determine default colors for standard sections if not overridden
      let bannerColor = section.banner_color;
      if (!bannerColor) {
        if (section.type === 'flash_sales') {
          bannerColor = 'linear-gradient(90deg, #d21a00 0%, #ff4b2b 100%)';
        } else if (section.type === 'unbeatable_deals') {
          bannerColor = 'linear-gradient(90deg, #ed017f 0%, #ff007f 100%)';
        } else {
          bannerColor = 'linear-gradient(90deg, #0f172a 0%, #334155 100%)'; // Sleek slate fallback
        }
      }

      const endsAtAttr = section.ends_at ? ` data-ends="${section.ends_at}"` : '';
      const timerHtml = (section.ends_at || section.type === 'flash_sales') ? `
        <div class="banner-timer">
          Time Left: <span class="flash-sale-countdown"${endsAtAttr}>Calculating...</span>
        </div>
      ` : '';

      const icon = section.icon || (section.type === 'flash_sales' ? '⚡' : section.type === 'unbeatable_deals' ? '🔴' : '✨');

      html += `
        <div class="bottom-section-banner" style="background: ${bannerColor}">
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <h3 style="margin: 0; display: flex; align-items: center; gap: 0.5rem; text-transform: uppercase;">
              ${icon} ${section.title || 'Today\'s Deals'}
            </h3>
            ${section.subtitle ? `<p style="margin: 0; font-size: 0.75rem; opacity: 0.9; font-weight: 500;">${section.subtitle}</p>` : ''}
          </div>
          ${timerHtml}
          <a href="${section.see_all_link || '#'}" class="see-all-link">See All &gt;</a>
        </div>
        ${section.description ? `
          <div class="section-custom-description" style="background: #f8fafc; border-left: 4px solid var(--color-primary); padding: 0.75rem 1rem; border-right: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); font-size: 0.8rem; color: var(--color-text-dark); line-height: 1.5; margin-bottom: 0.5rem; border-radius: 0 0 4px 4px;">
            ${section.description}
          </div>
        ` : ''}
        <div class="store-catalog-grid">
          ${products.map(p => getCatalogProductCardHtml(p)).join('')}
        </div>
      `;
    }
  }

  return html;
}

// Global Bottom storefront loader
async function populateBottomStorefront() {
  const container = document.getElementById('global-bottom-store-sections');
  if (!container) return;

  // Let's identify the current page context
  const context = parseUrlSlugs();
  let pageKey = 'home';
  if (context.type === 'cart') pageKey = 'cart';
  else if (context.type === 'checkout') pageKey = 'checkout';
  else if (context.brand) pageKey = context.brand;

  let pageData = null;

  try {
    const url = `${basePath}data/bottom_store_data.json`;
    const response = await fetch(url);
    if (response.ok) {
      const bottomStoreData = await response.json();
      if (bottomStoreData[pageKey]) {
        pageData = bottomStoreData[pageKey];
      } else if (bottomStoreData.brands && bottomStoreData.brands[pageKey]) {
        pageData = bottomStoreData.brands[pageKey];
      } else {
        pageData = bottomStoreData.home; // Fallback to home config
      }
    }
  } catch (err) {
    console.error("Error loading bottom store data:", err);
  }

  // Fallback generation if no config found or loaded
  if (!pageData) {
    // Generate pageData dynamically using allProducts to guarantee active, independent, continuous data!
    const filteredProducts = allProducts.filter(p => p.brand === (context.brand || p.brand));
    const flashList = filteredProducts.slice(0, 6).map(p => ({
      id: p.id,
      name: p.name,
      brand: p.brand,
      brand_name: p.brand_name,
      price: p.price,
      old_price: p.old_price || Math.round(p.price * 1.3),
      discount: p.old_price ? `-${Math.round((1 - p.price/p.old_price)*100)}%` : '-25%',
      items_left: Math.floor(Math.random() * 20) + 5,
      total_items: 50,
      image: p.images[0],
      slug: p.slug,
      niche: p.niche,
      merchandise: p.merchandise
    }));

    const circleList = filteredProducts.slice(6, 11).map(p => ({
      name: p.name,
      price: formatCurrency(p.price),
      image: p.images[0]
    }));

    const unbeatableList = filteredProducts.slice(11, 17).map(p => ({
      id: p.id,
      name: p.name,
      brand: p.brand,
      brand_name: p.brand_name,
      price: p.price,
      old_price: p.old_price || Math.round(p.price * 1.25),
      discount: p.old_price ? `-${Math.round((1 - p.price/p.old_price)*100)}%` : '-20%',
      items_left: Math.floor(Math.random() * 30) + 10,
      total_items: 100,
      image: p.images[0],
      slug: p.slug,
      niche: p.niche,
      merchandise: p.merchandise
    }));

    pageData = {
      categories: [
        { "name": "Hot Deals", "image": "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=200&auto=format&fit=crop&q=80" },
        { "name": "Best Sellers", "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&auto=format&fit=crop&q=80" },
        { "name": "Featured", "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=200&auto=format&fit=crop&q=80" }
      ],
      flash_sales: {
        title: "Flash Sales",
        subtitle: "Highly popular structural blueprints and items, limited stock",
        products: flashList
      },
      deals_of_the_day: {
        title: "Deals of the Day",
        products: circleList
      },
      unbeatable_deals: {
        title: "Today's Deals - Unbeatable Price",
        subtitle: "Premium assets with exclusive, time-restricted prices",
        products: unbeatableList
      }
    };
  }

  // Parse sections (with full backward compatibility for direct properties)
  let sections = pageData.sections;
  if (!sections) {
    sections = [];
    if (pageData.categories) {
      sections.push({ type: 'categories', items: pageData.categories });
    }
    if (pageData.flash_sales) {
      sections.push({ 
        type: 'flash_sales', 
        title: pageData.flash_sales.title, 
        subtitle: pageData.flash_sales.subtitle,
        ends_at: pageData.flash_sales.ends_at,
        products: pageData.flash_sales.products 
      });
    }
    if (pageData.deals_of_the_day) {
      sections.push({ 
        type: 'deals_of_the_day', 
        title: pageData.deals_of_the_day.title, 
        products: pageData.deals_of_the_day.products 
      });
    }
    if (pageData.unbeatable_deals) {
      sections.push({ 
        type: 'unbeatable_deals', 
        title: pageData.unbeatable_deals.title, 
        subtitle: pageData.unbeatable_deals.subtitle,
        products: pageData.unbeatable_deals.products 
      });
    }
  }

  // Build the complete layout continuously
  let html = '';
  sections.forEach(section => {
    html += renderBottomSection(section);
  });

  container.innerHTML = html;

  // Bind add-to-cart clicks for the dynamically rendered buttons
  container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = e.currentTarget.getAttribute('data-id');
      
      // If the ID is a slug, try to match to a real product ID
      let finalId = id;
      const match = allProducts.find(item => item.slug === id || item.id === id);
      if (match) finalId = match.id;

      addToCart(finalId, 1);
    });
  });

  // Start the countdown timer engine
  startFlashSaleCountdown();
}

// Run Engine on Load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}

// Add event listeners for dynamic SPA hash routing and click interception
window.addEventListener('hashchange', initPage);

document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;
  
  const href = link.getAttribute('href');
  if (!href) return;
  
  // Skip external, mailto, tel, and already hash-based links
  if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http://') || href.startsWith('https://')) {
    return;
  }
  
  // Intercept brand page links if we are on index.html
  if (href.includes('/brands/')) {
    const isIndexPage = window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('/') || (!window.location.pathname.includes('/cart/') && !window.location.pathname.includes('/checkout/'));
    
    if (isIndexPage) {
      e.preventDefault();
      const brandsIndex = href.indexOf('/brands/');
      const subpath = href.substring(brandsIndex);
      window.location.hash = subpath;
    }
  }
});
