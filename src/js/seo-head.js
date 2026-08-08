/**
 * Runtime SEO injection — title, meta, Open Graph, Twitter cards, and JSON-LD.
 * Runs as a side-effect import from main.js on every page.
 * Reads `data-page` on <body> when present, otherwise resolves from the URL path.
 */
import {
  SITE,
  SERVICE_AREAS,
  PAGE_SEO,
  locationSeo,
  PATH_TO_PAGE,
  normalizePagePath,
  getAllCityLabels,
  getBreadcrumbs,
  resolvePageSeo,
  isLocationPage,
} from '../config/seo.js';
import { setHeadTag } from './utils/dom.js';

/** 75-mile service radius in meters for schema.org GeoCircle. */
const SERVICE_RADIUS_METERS = Math.round(75 * 1609.344);

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

/** @returns {object[]} */
function buildAreaServedSchema() {
  return SERVICE_AREAS.flatMap(({ state, cities }) =>
    cities.map((city) => ({
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: state,
      },
    })),
  );
}

/**
 * @param {string} pageId
 * @param {{ path: string, title: string, description: string, schemaType: string }} page
 * @param {string} canonicalUrl
 */
function buildPageSchema(pageId, page, canonicalUrl) {
  const base = {
    '@context': 'https://schema.org',
    '@type': page.schemaType,
    '@id': `${canonicalUrl}#webpage`,
    name: page.title,
    description: page.description,
    url: canonicalUrl,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'en-US',
  };

  if (page.schemaType === 'Service' && !isLocationPage(pageId)) {
    return {
      ...base,
      '@type': 'Service',
      provider: { '@id': `${SITE.url}/#organization` },
      areaServed: buildAreaServedSchema(),
      serviceType: page.title,
    };
  }

  return base;
}

/**
 * @param {string} slug
 * @param {import('../config/seo.js').LocationSeoEntry} location
 * @param {string} canonicalUrl
 */
function buildLocationServiceSchema(slug, location, canonicalUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: `${location.primaryService} in ${location.city}, ${location.stateCode}`,
    description: location.description,
    url: canonicalUrl,
    provider: { '@id': `${SITE.url}/#organization` },
    serviceType: [
      'First Aid Kit Restocking',
      'Fire Extinguisher Sales and Service',
      'PPE Supplies',
      'Safety Training',
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: location.lat,
        longitude: location.lng,
      },
      geoRadius: SERVICE_RADIUS_METERS,
    },
  };
}

/**
 * @param {import('../config/seo.js').LocationSeoEntry} location
 * @param {string} canonicalUrl
 */
function buildFaqSchema(location, canonicalUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

/**
 * @param {string} pageId
 * @param {string} canonicalUrl
 */
function buildBreadcrumbSchema(pageId, canonicalUrl) {
  const crumbs = getBreadcrumbs(pageId);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE.url}${crumb.path}`,
    })),
  };
}

/** @param {string} pageId @param {{ path: string, title: string, description: string, schemaType: string }} page */
function injectJsonLd(pageId, page) {
  const areaServed = buildAreaServedSchema();
  const cityKeywords = getAllCityLabels();
  const canonicalUrl = `${SITE.url}${page.path}`;

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}${SITE.logo}`,
    },
    image: `${SITE.url}${SITE.ogImage}`,
    description: SITE.description,
    areaServed,
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
    knowsAbout: [
      'CPR training',
      'First aid certification',
      'Fire extinguisher training',
      'PPE compliance training',
      'Workplace safety supplies',
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'en-US',
  };

  /** @type {object[]} */
  const graphs = [organization, website, buildBreadcrumbSchema(pageId, canonicalUrl)];

  if (isLocationPage(pageId)) {
    const location = locationSeo[pageId];
    graphs.push(buildLocationServiceSchema(pageId, location, canonicalUrl));
    graphs.push(buildFaqSchema(location, canonicalUrl));
  } else {
    graphs.push(buildPageSchema(pageId, page, canonicalUrl));

    if (pageId === 'service-areas') {
      graphs.push({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Code 3 First Aid service areas',
        description: `On-site safety training and supplies in ${cityKeywords.join(', ')}.`,
        numberOfItems: cityKeywords.length,
        itemListElement: cityKeywords.map((label, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: label,
        })),
      });
    }
  }

  const script = setHeadTag({
    tag: 'script',
    id: 'json-ld-seo',
    attrs: { type: 'application/ld+json' },
  });

  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graphs,
  });
}

/** @returns {string} */
function resolvePageId() {
  const dataPage = document.body?.dataset?.page;
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

  injectJsonLd(pageId, page);
}

initSeoHead();
