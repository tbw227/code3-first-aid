# Code 3 First Aid

Marketing website for **Code 3 First Aid** — a Midwest safety partner offering first aid restocking, fire extinguisher service, and workplace training (fire extinguisher, CPR, and PPE).

Built as a multi-page static site with Vite, Tailwind CSS, and lightweight JavaScript modules.

## Features

- **Homepage** with diagonal hero, image collage, and overlapping “Our Mission” section
- **Training pages** — Fire, CPR, and PPE
- **Safety Supplies** product/service overview
- **Service Areas** coverage map and regional info
- **Enrollment & contact forms** — CPR enrollment, fire training enrollment, procurement/quote request
- **Shared navigation** with Training dropdown (desktop) and accordion (mobile)
- **Scroll animations** on select pages via GSAP
- **SEO helpers** — meta tags and sitemap in `public/`

## Tech stack

| Layer | Tools |
|-------|-------|
| Build | [Vite](https://vitejs.dev/) 6 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 3, custom CSS |
| Animation | [GSAP](https://greensock.com/gsap/) |
| Fonts | Montserrat, Inter, JetBrains Mono (Google Fonts) |
| Icons | Material Symbols Outlined |

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

### Production build

```bash
npm run build
```

Output goes to `dist/`.

### Preview production build

```bash
npm run preview
```

## Project structure

```
code3-first-aid/
├── index.html                 # Homepage
├── pages/
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
│   ├── images/                # Brand, training, supplies, backgrounds
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── js/
│   │   ├── main.js            # Page router / module bootstrap
│   │   ├── seo-head.js
│   │   ├── config/
│   │   │   ├── navigation.js  # Nav + footer link config
│   │   │   └── forms.js
│   │   └── modules/
│   │       ├── site-nav.js    # Nav rendering, dropdown, mobile drawer
│   │       ├── sticky-header.js
│   │       ├── scroll-animations.js
│   │       └── form-handler.js
│   ├── styles/
│   │   ├── main.css           # Tailwind entry
│   │   └── custom.css         # Hero, nav, page-specific layout
│   └── config/
│       └── seo.js
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## How pages work

Each HTML page sets a `data-page` attribute on `<body>`. `src/js/main.js` reads that value and loads the right modules (animations, forms, sticky header, etc.).

Example:

```html
<body data-page="home">
```

## Navigation

Links are defined once in `src/js/config/navigation.js`:

- Top-level: Home, Training (dropdown), Safety Supplies, Service Areas
- Training children: Fire, CPR, PPE

`src/js/modules/site-nav.js` injects nav markup into `[data-nav="main"]` and the mobile drawer. On the homepage, the Home link is hidden automatically.

To add or rename a link, update `navigation.js` and add the corresponding HTML page to `vite.config.js` `rollupOptions.input` if it is a new entry point.

## Styling

- **Tailwind** — layout utilities, typography tokens, and color palette in `tailwind.config.js`
- **Custom CSS** — hero split, collage panels, nav dropdown, mobile drawer, and page-specific layout in `src/styles/custom.css`
- **Design tokens** — primary red (`#b7102a`), accent red, obsidian header (`#1a1a1a`), light background (`#f6faff`)

## Forms

Form pages use `[data-form]` attributes and `form-handler.js` for client-side submit feedback (loading → success → reset). There is no backend wired up yet — submissions are simulated in the browser.

## Deployment

1. Run `npm run build`
2. Deploy the `dist/` folder to any static host (Netlify, Vercel, S3, etc.)

Ensure asset paths resolve correctly for your host. Vite builds all HTML entry points listed in `vite.config.js`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |

## License

Private project. All rights reserved © Code 3 First Aid.
