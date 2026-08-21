/**
 * Runtime SEO injection — title, meta, Open Graph, Twitter cards, and JSON-LD.
 * Runs as a side-effect import from main.js on every page.
 * Reads `data-page` on <body> when present, otherwise resolves from the URL path.
 *
 * Meta tags and JSON-LD are emitted statically by scripts/vite-plugin-seo.mjs;
 * this module fills in anything the build did not write and is the fallback for
 * pages served outside the Vite pipeline.
 */
import {
  SITE,
  PAGE_SEO,
  locationSeo,
  PATH_TO_PAGE,
  normalizePagePath,
  getAllCityLabels,
  resolvePageSeo,
} from '../config/seo.js';
import { buildJsonLdGraph } from '../config/structured-data.js';
import { setHeadTag } from './utils/dom.js';

/** @param {string} name @param {string} content */
function setMeta(name, content) {
  setHeadTag({ tag: 'meta', id: `meta-${name}`, attrs: { name, content } });
}

/** @param {string} property @param {string} content */
function setOg(property, content) {
  setHeadTag({ tag: 'meta', id: `og-${property}`, attrs: { property, content } });
}

/** @param {string} rel @param {string} href @param {Record<string, string>} [extra] */
function setLink(rel, href, extra = {}) {
  setHeadTag({ tag: 'link', id: `link-${rel}-${href}`, attrs: { rel, href, ...extra } });
}

function injectPerformanceHints() {
  setLink('preconnect', 'https://fonts.googleapis.com');
  setLink('preconnect', 'https://fonts.gstatic.com', { crossorigin: '' });
  setLink('dns-prefetch', 'https://fonts.googleapis.com');
}

/** @param {string} pageId */
function injectJsonLd(pageId) {
  if (document.querySelector('script[type="application/ld+json"]')) {
    return;
  }

  const script = setHeadTag({
    tag: 'script',
    id: 'json-ld-seo',
    attrs: { type: 'application/ld+json' },
  });

  script.textContent = JSON.stringify(buildJsonLdGraph(pageId));
}

/** @returns {string} */
function resolvePageId() {
  const dataPage = document.body?.dataset?.page;
  const catalogCategory = document.body?.dataset?.catalogCategory;
  const catalogProduct = document.body?.dataset?.catalogProduct;

  if (catalogProduct) {
    return `catalog-${catalogProduct}`;
  }
  if (catalogCategory) {
    return `catalog-${catalogCategory}`;
  }
  if (dataPage && (PAGE_SEO[dataPage] || locationSeo[dataPage])) {
    return dataPage;
  }
  return PATH_TO_PAGE[normalizePagePath(window.location.pathname)] ?? 'home';
}

function initSeoHead() {
  const pageId = resolvePageId();
  const page = resolvePageSeo(pageId);
  const canonicalUrl = `${SITE.url}${page.path}`;
  const imageUrl = `${SITE.url}${SITE.ogImage}`;

  injectPerformanceHints();

  document.title = page.title;

  if (!document.querySelector('meta[name="description"]')) {
    setMeta('description', page.description);
    setMeta('keywords', [...page.keywords, ...getAllCityLabels()].join(', '));
    setMeta('robots', 'index, follow');
    setMeta('author', SITE.name);
    setMeta('geo.region', 'US-MO');
    setMeta('geo.placename', getAllCityLabels().join('; '));
    setMeta('theme-color', '#1a1a1a');

    setLink('canonical', canonicalUrl);

    setOg('type', 'website');
    setOg('site_name', SITE.name);
    setOg('title', page.title);
    setOg('description', page.description);
    setOg('url', canonicalUrl);
    setOg('image', imageUrl);
    setOg('locale', SITE.locale);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', page.title);
    setMeta('twitter:description', page.description);
    setMeta('twitter:image', imageUrl);
  } else {
    setMeta('keywords', [...page.keywords, ...getAllCityLabels()].join(', '));
    setMeta('robots', 'index, follow');
    setMeta('author', SITE.name);
    setMeta('theme-color', '#1a1a1a');
  }

  injectJsonLd(pageId);
}

initSeoHead();
