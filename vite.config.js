/**
 * Vite build configuration.
 * Multi-page app: each HTML file is a separate Rollup entry point.
 */
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { catalogPagesPlugin } from './scripts/vite-plugin-catalog.mjs';
import { injectSeoMetaPlugin } from './scripts/vite-plugin-seo.mjs';
import { getLocationSlugs } from './src/config/seo.js';
import { getCategorySlugs, getProductSlugs, CATALOG_PRODUCTS } from './src/config/catalog.js';

const locationInputs = Object.fromEntries(
  getLocationSlugs().map((slug) => [
    `location-${slug}`,
    resolve(__dirname, `pages/locations/${slug}.html`),
  ]),
);

const catalogCategoryInputs = Object.fromEntries(
  getCategorySlugs().map((slug) => [
    `catalog-${slug}`,
    resolve(__dirname, `pages/catalog/${slug}.html`),
  ]),
);

const catalogProductInputs = Object.fromEntries(
  getProductSlugs()
    .filter((slug) => CATALOG_PRODUCTS[slug].hasDetailPage)
    .map((slug) => [
      `catalog-product-${slug}`,
      resolve(__dirname, `pages/catalog/products/${slug}.html`),
    ]),
);

export default defineConfig({
  plugins: [catalogPagesPlugin(), injectSeoMetaPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fireTraining: resolve(__dirname, 'pages/fire-training.html'),
        cprTraining: resolve(__dirname, 'pages/cpr-training.html'),
        ppeTraining: resolve(__dirname, 'pages/ppe-training.html'),
        safetySupplies: resolve(__dirname, 'pages/safety-supplies.html'),
        catalog: resolve(__dirname, 'pages/catalog.html'),
        serviceAreas: resolve(__dirname, 'pages/service-areas.html'),
        cprEnrollment: resolve(__dirname, 'pages/forms/cpr-enrollment.html'),
        fireEnrollment: resolve(__dirname, 'pages/forms/fire-enrollment.html'),
        procurement: resolve(__dirname, 'pages/forms/procurement.html'),
        ...locationInputs,
        ...catalogCategoryInputs,
        ...catalogProductInputs,
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/gsap')) {
            return 'gsap';
          }
        },
      },
    },
  },
});
