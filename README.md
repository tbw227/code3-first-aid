# Code 3 First Aid

Marketing website for **Code 3 First Aid** — a Midwest safety partner offering first aid restocking, fire extinguisher service, and workplace training (fire extinguisher, CPR, and PPE).

Built as a multi-page static site with Vite, Tailwind CSS, and lightweight JavaScript modules. Catalog and location pages are generated from config at build time.

## Features

- **Homepage** with diagonal hero, image collage, and overlapping “Our Mission” section
- **Training pages** — Fire, CPR, and PPE
- **Safety Supplies** overview plus a full **product catalog** (hub, categories, product detail pages)
- **Service Areas** coverage map, regional info, and generated **location pages**
- **Enrollment & contact forms** — CPR enrollment, fire training enrollment, procurement/quote request
- **Shared navigation** with Training dropdown (desktop) and accordion (mobile)
- **Scroll animations** on select pages via GSAP
- **SEO helpers** — meta tags, JSON-LD, and sitemap generation

## Tech stack

| Layer | Tools |
|-------|-------|
| Build | [Vite](https://vitejs.dev/) 7 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 3, custom CSS |
| Animation | [GSAP](https://greensock.com/gsap/) |
| Fonts | Montserrat, Inter, JetBrains Mono (Google Fonts) |
| Icons | [Lucide](https://lucide.dev/) |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20+ recommended)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

After changing catalog or location data, regenerate pages (or rely on `npm run build`, which runs generators first):

```bash
npm run catalog
npm run locations
```

### Production build

```bash
npm run build
```

Runs location + catalog + sitemap generators, then builds to `dist/`.

### Preview production build

```bash
npm run preview
```

## Project structure

```
code3-first-aid/
├── index.html
├── pages/
│   ├── catalog.html              # Catalog hub (generated)
│   ├── catalog/                  # Category + product pages (generated)
│   │   ├── first-aid-kits.html
│   │   ├── fire-protection.html
│   │   ├── eye-care.html
│   │   ├── industrial-ppe.html
│   │   ├── bandages-dressings.html
│   │   └── products/             # Product detail pages
│   ├── locations/                # City pages (generated)
│   ├── fire-training.html
│   ├── cpr-training.html
│   ├── ppe-training.html
│   ├── safety-supplies.html
│   ├── service-areas.html
│   └── forms/
│       ├── cpr-enrollment.html
│       ├── fire-enrollment.html
│       └── procurement.html
├── public/
│   ├── images/                   # Brand, training, supplies, backgrounds
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   ├── generate-catalog-pages.mjs
│   ├── generate-location-pages.mjs
│   ├── generate-sitemap.mjs
│   ├── optimize-images.mjs
│   └── verify-*.mjs
├── src/
│   ├── config/
│   │   ├── catalog.js            # Categories + products (source of truth)
│   │   ├── location-content.js
│   │   ├── seo.js
│   │   └── structured-data.js
│   ├── js/
│   │   ├── main.js               # Page router / module bootstrap
│   │   ├── seo-head.js
│   │   ├── config/
│   │   │   ├── navigation.js
│   │   │   └── forms.js
│   │   ├── modules/
│   │   │   ├── catalog/          # Layouts, gallery, category/product init
│   │   │   ├── site-nav.js
│   │   │   ├── sticky-header.js
│   │   │   ├── scroll-animations.js
│   │   │   └── form-handler.js
│   │   └── utils/
│   │       └── icons.js          # Lucide icon registry
│   └── styles/
│       ├── main.css              # Tailwind entry
│       ├── custom.css
│       └── catalog/              # Catalog + product-detail CSS
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## How pages work

Each HTML page sets a `data-page` attribute on `<body>`. `src/js/main.js` reads that value and loads the right modules (animations, forms, sticky header, catalog gallery, etc.).

Example:

```html
<body data-page="home">
```

Catalog product pages also use `data-catalog-product` (and category pages use `data-catalog-category`) so the correct JS init runs.

## Product catalog

Catalog HTML is **generated** from `src/config/catalog.js` via `npm run catalog`.

| Piece | Role |
|-------|------|
| `src/config/catalog.js` | Categories, products, gallery images, detail layouts, copy |
| `src/js/modules/catalog/` | Markup builders + page init (gallery thumbs, filters) |
| `src/styles/catalog/` | Hub, sidebar, category grids, product detail (`.pd-*`) |
| `pages/catalog.html` + `pages/catalog/**` | Generated output — edit config, not these files by hand |

### Add or update a product

1. Edit (or add) the product in `src/config/catalog.js`
2. Put images under `public/images/supplies/` and reference them as `/images/supplies/...`
3. Set `hasDetailPage: true` and a `detailLayout` when you need a full product page
4. Run `npm run catalog`

Product pages do **not** show dollar prices; CTAs go to the procurement/quote form.

## Navigation

Links are defined once in `src/js/config/navigation.js`:

- Top-level: Home, Training (dropdown), Safety Supplies, Service Areas
- Training children: Fire, CPR, PPE

`src/js/modules/site-nav.js` injects nav markup into `[data-nav="main"]` and the mobile drawer. On the homepage, the Home link is hidden automatically.

To add or rename a link, update `navigation.js` and add the corresponding HTML page to `vite.config.js` `rollupOptions.input` if it is a new hand-authored entry point. Generated catalog/location pages are wired through the build scripts and Vite plugins.

## Styling

- **Tailwind** — layout utilities, typography tokens, and color palette in `tailwind.config.js`
- **Custom CSS** — hero, nav, and shared page layout in `src/styles/custom.css`
- **Catalog CSS** — product grids and detail layouts in `src/styles/catalog/`
- **Design tokens** — primary red (`#b7102a`), accent red, obsidian header (`#1a1a1a`), light background (`#f6faff`)

## Forms

Form pages use `[data-form]` attributes and `form-handler.js` for client-side submit feedback (loading → success → reset). There is no backend wired up yet — submissions are simulated in the browser.

## Deployment

1. Run `npm run build`
2. Deploy the `dist/` folder to any static host (Netlify, Vercel, S3, etc.)

Ensure asset paths resolve correctly for your host. Vite builds all HTML entry points listed in `vite.config.js`, including generated catalog and location pages.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Generate locations + catalog + sitemap, then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run catalog` | Regenerate catalog hub, category, and product HTML |
| `npm run locations` | Regenerate service-area location pages |
| `npm run sitemap` | Regenerate `public/sitemap.xml` |
| `npm run images` | Optimize images under `public/` |
| `npm run verify` | Site verification checks |
| `npm run verify:jsonld` | Validate JSON-LD structured data |
| `npm run check:images` | Check for missing/broken image references |

## License

Private project. All rights reserved © Code 3 First Aid.
