import {
  SITE,
  SERVICE_AREAS,
  PAGE_SEO,
  PATH_TO_PAGE,
  getAllCityLabels,
} from '../config/seo.js';

/**
 * @param {string} name
 * @param {string} content
 */
function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * @param {string} property
 * @param {string} content
 */
function setOg(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * @param {string} rel
 * @param {string} href
 */
function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
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
 */
function injectJsonLd(pageId) {
  const areaServed = buildAreaServedSchema();
  const cityKeywords = getAllCityLabels();

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    logo: `${SITE.url}${SITE.image}`,
    areaServed,
    knowsAbout: [
      'CPR training',
      'First aid certification',
      'Fire extinguisher training',
      'PPE compliance training',
      'Workplace safety supplies',
    ],
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#local-business`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    image: `${SITE.url}${SITE.image}`,
    description: SITE.description,
    areaServed,
    serviceType: [
      'CPR Training',
      'First Aid Training',
      'Fire Extinguisher Training',
      'PPE Training',
      'Safety Equipment Supply',
    ],
  };

  /** @type {object[]} */
  const graphs = [organization, localBusiness];

  if (pageId === 'home' || pageId === 'service-areas') {
    graphs.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
      publisher: { '@id': `${SITE.url}/#organization` },
      inLanguage: 'en-US',
    });
  }

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

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graphs,
  });
  document.head.appendChild(script);
}

function initSeoHead() {
  const pageId = PATH_TO_PAGE[window.location.pathname] ?? 'home';
  const page = PAGE_SEO[pageId] ?? PAGE_SEO.home;
  const canonicalUrl = `${SITE.url}${page.path === '/index.html' ? '/' : page.path}`;
  const imageUrl = `${SITE.url}${SITE.image}`;
  const keywords = [...page.keywords, ...getAllCityLabels()].join(', ');

  document.title = page.title;

  setMeta('description', page.description);
  setMeta('keywords', keywords);
  setMeta('robots', 'index, follow');
  setMeta('author', SITE.name);
  setMeta('geo.region', 'US-MO');
  setMeta('geo.placename', getAllCityLabels().join('; '));

  setLink('canonical', canonicalUrl);

  setOg('og:type', 'website');
  setOg('og:site_name', SITE.name);
  setOg('og:title', page.title);
  setOg('og:description', page.description);
  setOg('og:url', canonicalUrl);
  setOg('og:image', imageUrl);
  setOg('og:locale', SITE.locale);

  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', page.title);
  setMeta('twitter:description', page.description);
  setMeta('twitter:image', imageUrl);

  injectJsonLd(pageId);
}

initSeoHead();
