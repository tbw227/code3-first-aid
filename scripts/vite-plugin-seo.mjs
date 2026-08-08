/**
 * Vite plugin — injects static SEO meta tags into each HTML entry from src/config/seo.js.
 */
import { relative, normalize, basename } from 'node:path';
import { PAGE_SEO, SITE, locationSeo, resolvePageSeo } from '../src/config/seo.js';

/** @param {string} value */
function escapeAttr(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

/** @param {string} filename Absolute path to the HTML file being transformed. */
function resolvePageId(filename) {
  const rel = normalize(relative(process.cwd(), filename)).replace(/\\/g, '/');

  if (rel.startsWith('pages/locations/') && rel.endsWith('.html')) {
    const slug = basename(rel, '.html');
    if (locationSeo[slug]) {
      return slug;
    }
  }

  /** @type {Record<string, string>} */
  const fileToPage = {
    'index.html': 'home',
    'pages/fire-training.html': 'fire-training',
    'pages/cpr-training.html': 'cpr-training',
    'pages/ppe-training.html': 'ppe-training',
    'pages/safety-supplies.html': 'safety-supplies',
    'pages/service-areas.html': 'service-areas',
    'pages/forms/cpr-enrollment.html': 'cpr-enrollment',
    'pages/forms/fire-enrollment.html': 'fire-enrollment',
    'pages/forms/procurement.html': 'procurement',
  };
  return fileToPage[rel] ?? 'home';
}

/** @param {string} pageId */
function buildSeoBlock(pageId) {
  const page = resolvePageSeo(pageId);
  const canonical = `${SITE.url}${page.path}`;
  const image = `${SITE.url}${SITE.ogImage}`;

  return [
    `<meta name="description" content="${escapeAttr(page.description)}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<link rel="preconnect" href="https://fonts.googleapis.com">`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${escapeAttr(SITE.name)}">`,
    `<meta property="og:title" content="${escapeAttr(page.title)}">`,
    `<meta property="og:description" content="${escapeAttr(page.description)}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:locale" content="${SITE.locale}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeAttr(page.title)}">`,
    `<meta name="twitter:description" content="${escapeAttr(page.description)}">`,
    `<meta name="twitter:image" content="${image}">`,
  ]
    .map((line) => `    ${line}`)
    .join('\n');
}

/** @returns {import('vite').Plugin} */
export function injectSeoMetaPlugin() {
  return {
    name: 'inject-seo-meta',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const pageId = resolvePageId(ctx.filename);
        const page = resolvePageSeo(pageId);
        const seoBlock = buildSeoBlock(pageId);

        let output = html.replace(
          /<title>[^<]*<\/title>/,
          `<title>${escapeAttr(page.title)}</title>`,
        );

        if (!output.includes('name="description"')) {
          output = output.replace(
            /(<meta name="viewport"[^>]*>)/,
            `$1\n${seoBlock}`,
          );
        }

        return output;
      },
    },
  };
}
