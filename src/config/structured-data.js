/**
 * Schema.org JSON-LD builders.
 * Environment-agnostic (no DOM access) so the same graph is produced by the
 * build-time plugin in scripts/vite-plugin-seo.mjs and the runtime fallback in
 * src/js/seo-head.js.
 */
import {
  SITE,
  SERVICE_AREAS,
  locationSeo,
  getAllCityLabels,
  getBreadcrumbs,
  resolvePageSeo,
  isLocationPage,
} from './seo.js';

/** 75-mile service radius in meters for schema.org GeoCircle. */
const SERVICE_RADIUS_METERS = Math.round(75 * 1609.344);

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
 * @param {import('./seo.js').LocationSeoEntry} location
 * @param {string} canonicalUrl
 */
function buildLocationServiceSchema(location, canonicalUrl) {
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
 * @param {import('./seo.js').LocationSeoEntry} location
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

/**
 * Build the full JSON-LD `@graph` for a page.
 * @param {string} pageId
 * @returns {{ '@context': string, '@graph': object[] }}
 */
export function buildJsonLdGraph(pageId) {
  const page = resolvePageSeo(pageId);
  const canonicalUrl = `${SITE.url}${page.path}`;
  const cityKeywords = getAllCityLabels();

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
    areaServed: buildAreaServedSchema(),
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
  const graph = [organization, website, buildBreadcrumbSchema(pageId, canonicalUrl)];

  if (isLocationPage(pageId)) {
    const location = locationSeo[pageId];
    graph.push(buildLocationServiceSchema(location, canonicalUrl));
    graph.push(buildFaqSchema(location, canonicalUrl));
  } else {
    graph.push(buildPageSchema(pageId, page, canonicalUrl));

    if (pageId === 'service-areas') {
      graph.push({
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

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
