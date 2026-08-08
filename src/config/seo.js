/**
 * SEO configuration — site identity, service areas, and per-page meta.
 * Consumed by src/js/seo-head.js at runtime and scripts/generate-sitemap.mjs at build.
 */
import { LOCATION_CONTENT } from './location-content.js';

/** Global site constants used in meta tags and JSON-LD. */
/** @type {const} */
export const SITE = {
  name: 'Code 3 First Aid',
  legalName: 'Code 3 First Aid',
  url: 'https://code3firstaid.com',
  email: 'Byoung@code3firstaid.com',
  phone: '+19133131125',
  phoneDisplay: '913-313-1125',
  description:
    'OSHA-aligned CPR, fire extinguisher, and PPE training plus industrial safety supplies for workplaces across Missouri, Nebraska, Kansas, and Oklahoma.',
  locale: 'en_US',
  logo: '/images/brand/code_3_first_aid_logo_1.png',
  /** Default Open Graph / Twitter Card image (absolute path on site). */
  ogImage: '/images/brand/code_3_first_aid_logo_1.png',
  address: {
    addressLocality: 'Fort Scott',
    addressRegion: 'KS',
    postalCode: '66701',
    addressCountry: 'US',
  },
  /** Social profile URLs for schema.org sameAs — add when available. */
  sameAs: [],
};

/**
 * Primary service regions — Missouri, Nebraska, and Kansas (+ Oklahoma).
 * @type {ReadonlyArray<{ state: string, stateCode: string, cities: ReadonlyArray<{ name: string, slug: string }> }>}
 */
export const SERVICE_AREAS = [
  {
    state: 'Missouri',
    stateCode: 'MO',
    cities: [
      { name: 'Maryville', slug: 'maryville-mo' },
      { name: 'St. Joseph', slug: 'st-joseph-mo' },
      { name: 'Kansas City', slug: 'kansas-city-mo' },
      { name: 'Sedalia', slug: 'sedalia-mo' },
      { name: 'Warrensburg', slug: 'warrensburg-mo' },
      { name: 'Springfield', slug: 'springfield-mo' },
      { name: 'Joplin', slug: 'joplin-mo' },
    ],
  },
  {
    state: 'Nebraska',
    stateCode: 'NE',
    cities: [
      { name: 'Omaha', slug: 'omaha-ne' },
      { name: 'Lincoln', slug: 'lincoln-ne' },
    ],
  },
  {
    state: 'Kansas',
    stateCode: 'KS',
    cities: [
      { name: 'Wichita', slug: 'wichita-ks' },
      { name: 'Salina', slug: 'salina-ks' },
      { name: 'Fort Scott', slug: 'fort-scott-ks' },
      { name: 'Topeka', slug: 'topeka-ks' },
    ],
  },
  {
    state: 'Oklahoma',
    stateCode: 'OK',
    cities: [
      { name: 'Tulsa', slug: 'tulsa-ok' },
      { name: 'Oklahoma City', slug: 'oklahoma-city-ok' },
    ],
  },
];

/**
 * Per-city SEO — titles, descriptions, geo data, FAQs, and schema inputs.
 * @typedef {{
 *   slug: string,
 *   city: string,
 *   state: string,
 *   stateCode: string,
 *   county: string,
 *   lat: number,
 *   lng: number,
 *   primaryService: string,
 *   title: string,
 *   description: string,
 *   keywords: string[],
 *   industries: string[],
 *   intro: string,
 *   services: { firstAid: string, fire: string, ppe: string, training: string },
 *   whyOnsite: string,
 *   faqs: ReadonlyArray<{ q: string, a: string }>,
 *   nearby: string[],
 * }} LocationSeoEntry
 */

/** @type {Record<string, LocationSeoEntry>} */
export const locationSeo = LOCATION_CONTENT;

/** @returns {string} */
export function getLocationPath(slug) {
  return `/pages/locations/${slug}`;
}

/** @param {string} slug @returns {LocationSeoEntry | undefined} */
export function getLocationBySlug(slug) {
  return locationSeo[slug];
}

/** @returns {string[]} */
export function getLocationSlugs() {
  return Object.keys(locationSeo);
}

/** @returns {string[]} */
export function getAllCityLabels() {
  return SERVICE_AREAS.flatMap(({ stateCode, cities }) =>
    cities.map((city) => `${city.name}, ${stateCode}`),
  );
}

/** @returns {string} */
export function getServiceAreaSummary(maxCities = 6) {
  const labels = getAllCityLabels();
  if (labels.length <= maxCities) {
    return labels.join(', ');
  }
  const shown = labels.slice(0, maxCities).join(', ');
  return `${shown}, and more`;
}

/**
 * Per-page SEO — titles ~50–60 chars, descriptions ~150–160 chars.
 * @type {Record<string, {
 *   path: string,
 *   title: string,
 *   description: string,
 *   keywords: string[],
 *   breadcrumb: string,
 *   schemaType: string,
 *   priority: number,
 *   changefreq: 'weekly' | 'monthly',
 * }>}
 */
export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'Code 3 First Aid | CPR, Fire & PPE Training | MO, NE & KS',
    description:
      'On-site CPR, fire extinguisher, and PPE training plus safety supplies for Kansas City, Omaha, Wichita, Springfield, and workplaces across MO, NE, KS, and OK.',
    keywords: [
      'first aid training',
      'CPR certification',
      'fire extinguisher training',
      'PPE training',
      'safety supplies',
      'OSHA compliance',
      'on-site safety training',
    ],
    breadcrumb: 'Home',
    schemaType: 'WebPage',
    priority: 1.0,
    changefreq: 'weekly',
  },
  'fire-training': {
    path: '/pages/fire-training',
    title: 'Fire Extinguisher Training | OSHA | Code 3 First Aid',
    description:
      'OSHA fire extinguisher training for Kansas City, Omaha, Tulsa, Wichita, and Midwest workplaces. Live-fire and digital PASS-method options.',
    keywords: [
      'fire extinguisher training',
      'fire safety training',
      'PASS method training',
      'OSHA fire training',
      'workplace fire safety',
    ],
    breadcrumb: 'Fire Extinguisher Training',
    schemaType: 'Service',
    priority: 0.9,
    changefreq: 'monthly',
  },
  'cpr-training': {
    path: '/pages/cpr-training',
    title: 'CPR & First Aid Training | AHA-Aligned | Code 3 First Aid',
    description:
      'Hands-on CPR, AED, and first aid certification for teams in Lincoln, Springfield, Joplin, Topeka, Oklahoma City, and the Midwest.',
    keywords: [
      'CPR training',
      'first aid certification',
      'BLS training',
      'Heartsaver CPR',
      'workplace CPR class',
      'on-site CPR training',
    ],
    breadcrumb: 'CPR & First Aid Training',
    schemaType: 'Service',
    priority: 0.9,
    changefreq: 'monthly',
  },
  'ppe-training': {
    path: '/pages/ppe-training',
    title: 'PPE Training & Compliance | OSHA | Code 3 First Aid',
    description:
      'Professional PPE compliance training for industrial and healthcare teams in Sedalia, Warrensburg, Salina, Fort Scott, Maryville, and across the Midwest region.',
    keywords: [
      'PPE training',
      'personal protective equipment training',
      'OSHA PPE compliance',
      'workplace safety training',
    ],
    breadcrumb: 'PPE Training',
    schemaType: 'Service',
    priority: 0.9,
    changefreq: 'monthly',
  },
  'safety-supplies': {
    path: '/pages/safety-supplies',
    title: 'Safety Supplies & First Aid Equipment | Code 3 First Aid',
    description:
      'Industrial trauma kits, fire safety gear, and ANSI/OSHA-compliant first aid supplies for Omaha, Kansas City, Wichita, Tulsa, and Midwest facilities.',
    keywords: [
      'safety supplies',
      'first aid kits',
      'trauma kits',
      'fire safety equipment',
      'industrial safety gear',
    ],
    breadcrumb: 'Safety Supplies',
    schemaType: 'CollectionPage',
    priority: 0.9,
    changefreq: 'monthly',
  },
  'service-areas': {
    path: '/pages/service-areas',
    title: 'Workplace Safety Supplies & Training Service Areas | Code 3 First Aid',
    description:
      'Code 3 First Aid delivers first aid supplies, fire extinguishers, PPE, and on-site safety training across Missouri, Nebraska, Kansas, and Oklahoma.',
    keywords: [
      'safety training Missouri',
      'CPR training Nebraska',
      'fire training Kansas',
      'first aid Oklahoma',
      'on-site safety training Midwest',
    ],
    breadcrumb: 'Service Areas',
    schemaType: 'WebPage',
    priority: 0.95,
    changefreq: 'monthly',
  },
  'cpr-enrollment': {
    path: '/pages/forms/cpr-enrollment',
    title: 'CPR & First Aid Enrollment | Code 3 First Aid',
    description:
      'Register your team for AHA-aligned CPR, AED, and first aid certification. On-site and regional training available across the Midwest.',
    keywords: ['CPR enrollment', 'first aid registration', 'BLS certification signup'],
    breadcrumb: 'CPR Enrollment',
    schemaType: 'WebPage',
    priority: 0.85,
    changefreq: 'monthly',
  },
  'fire-enrollment': {
    path: '/pages/forms/fire-enrollment',
    title: 'Fire Extinguisher Training Enrollment | Code 3 First Aid',
    description:
      'Schedule OSHA-certified fire extinguisher training for your workplace. Live-fire and digital simulation options available across the Midwest.',
    keywords: ['fire training enrollment', 'extinguisher training signup', 'OSHA fire safety class'],
    breadcrumb: 'Fire Training Enrollment',
    schemaType: 'WebPage',
    priority: 0.85,
    changefreq: 'monthly',
  },
  procurement: {
    path: '/pages/forms/procurement',
    title: 'PPE & Safety Supplies Procurement | Code 3 First Aid',
    description:
      'Request a quote for industrial PPE, trauma kits, and ANSI/OSHA-compliant safety equipment with volume pricing for Midwest workplaces.',
    keywords: ['safety supplies quote', 'PPE procurement', 'bulk first aid kits'],
    breadcrumb: 'Procurement',
    schemaType: 'WebPage',
    priority: 0.85,
    changefreq: 'monthly',
  },
};

/** Dedicated city landing page URLs for sitemap. */
export const LOCATION_SITEMAP_ENTRIES = getLocationSlugs().map((slug) => ({
  path: getLocationPath(slug),
  priority: 0.8,
  changefreq: 'monthly',
}));

/**
 * Maps normalized URL paths to PAGE_SEO keys for runtime head injection.
 * @type {Record<string, string>}
 */
export const PATH_TO_PAGE = {
  '/': 'home',
  '/pages/fire-training': 'fire-training',
  '/pages/cpr-training': 'cpr-training',
  '/pages/ppe-training': 'ppe-training',
  '/pages/safety-supplies': 'safety-supplies',
  '/pages/service-areas': 'service-areas',
  '/pages/forms/cpr-enrollment': 'cpr-enrollment',
  '/pages/forms/fire-enrollment': 'fire-enrollment',
  '/pages/forms/procurement': 'procurement',
  ...Object.fromEntries(getLocationSlugs().map((slug) => [getLocationPath(slug), slug])),
};

/**
 * Normalize a URL pathname to a PATH_TO_PAGE key.
 * @param {string} pathname
 * @returns {string}
 */
export function normalizePagePath(pathname) {
  let path = pathname.replace(/\.html$/, '');
  if (path.endsWith('/index')) {
    path = path.slice(0, -'/index'.length);
  }
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return path || '/';
}

/**
 * Build breadcrumb trail for a page.
 * @param {string} pageId
 * @returns {ReadonlyArray<{ name: string, path: string }>}
 */
export function getBreadcrumbs(pageId) {
  const location = locationSeo[pageId];
  if (location) {
    return [
      { name: 'Home', path: '/' },
      { name: 'Service Areas', path: '/pages/service-areas' },
      { name: `${location.city}, ${location.stateCode}`, path: getLocationPath(location.slug) },
    ];
  }

  const page = PAGE_SEO[pageId];
  if (!page || pageId === 'home') {
    return [{ name: 'Home', path: '/' }];
  }
  return [
    { name: 'Home', path: '/' },
    { name: page.breadcrumb, path: page.path },
  ];
}

/**
 * Resolve page SEO config for runtime head injection.
 * @param {string} pageId
 * @returns {{ path: string, title: string, description: string, keywords: string[], schemaType: string }}
 */
export function resolvePageSeo(pageId) {
  const location = locationSeo[pageId];
  if (location) {
    return {
      path: getLocationPath(location.slug),
      title: location.title,
      description: location.description,
      keywords: [...location.keywords],
      schemaType: 'Service',
    };
  }
  const page = PAGE_SEO[pageId] ?? PAGE_SEO.home;
  return {
    path: page.path,
    title: page.title,
    description: page.description,
    keywords: [...page.keywords],
    schemaType: page.schemaType,
  };
}

/** @param {string} pageId @returns {boolean} */
export function isLocationPage(pageId) {
  return Boolean(locationSeo[pageId]);
}

Object.freeze(SITE);
Object.freeze(SERVICE_AREAS);
SERVICE_AREAS.forEach((area) => {
  Object.freeze(area);
  Object.freeze(area.cities);
  area.cities.forEach((city) => Object.freeze(city));
});
Object.freeze(PAGE_SEO);
Object.keys(PAGE_SEO).forEach((key) => {
  Object.freeze(PAGE_SEO[key]);
  Object.freeze(PAGE_SEO[key].keywords);
});
Object.freeze(PATH_TO_PAGE);
Object.freeze(locationSeo);
Object.freeze(LOCATION_SITEMAP_ENTRIES);
