/** @type {const} */
export const SITE = {
  name: 'Code 3 First Aid',
  legalName: 'Code 3 First Aid',
  url: 'https://code3firstaid.com',
  email: 'info@code3firstaid.com',
  phone: '1-800-555-0199',
  description:
    'OSHA-aligned CPR, fire extinguisher, and PPE training plus industrial safety supplies for workplaces across Missouri, Nebraska, Kansas, and Oklahoma.',
  locale: 'en_US',
  image: '/images/brand/IMG_2594.png',
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

/** @type {Record<string, { path: string, title: string, description: string, keywords: string[] }>} */
export const PAGE_SEO = {
  home: {
    path: '/index.html',
    title: 'Code 3 First Aid | CPR, Fire & PPE Training | MO, NE & KS',
    description:
      'On-site CPR, fire extinguisher, and PPE training plus safety supplies for businesses in Kansas City, Omaha, Wichita, Springfield, and across Missouri, Nebraska, Kansas, and Oklahoma.',
    keywords: [
      'first aid training',
      'CPR certification',
      'fire extinguisher training',
      'PPE training',
      'safety supplies',
      'OSHA compliance',
      'on-site safety training',
    ],
  },
  'fire-training': {
    path: '/pages/fire-training.html',
    title: 'Fire Extinguisher Training | OSHA Certified | Code 3 First Aid',
    description:
      'Live-fire and digital fire extinguisher training for workplaces in Kansas City, St. Joseph, Omaha, Tulsa, Wichita, and surrounding Midwest communities.',
    keywords: [
      'fire extinguisher training',
      'fire safety training',
      'PASS method training',
      'OSHA fire training',
      'workplace fire safety',
    ],
  },
  'cpr-training': {
    path: '/pages/cpr-training.html',
    title: 'CPR & First Aid Training | AHA-Aligned | Code 3 First Aid',
    description:
      'Hands-on CPR, AED, and first aid certification for healthcare teams and employers in Lincoln, Springfield, Joplin, Topeka, Oklahoma City, and the greater Midwest.',
    keywords: [
      'CPR training',
      'first aid certification',
      'BLS training',
      'Heartsaver CPR',
      'workplace CPR class',
      'on-site CPR training',
    ],
  },
  'ppe-training': {
    path: '/pages/ppe-training.html',
    title: 'PPE Training & Compliance | Code 3 First Aid',
    description:
      'Professional PPE compliance training for industrial and healthcare teams in Sedalia, Warrensburg, Salina, Fort Scott, Maryville, and across the region.',
    keywords: [
      'PPE training',
      'personal protective equipment training',
      'OSHA PPE compliance',
      'workplace safety training',
    ],
  },
  'safety-supplies': {
    path: '/pages/safety-supplies.html',
    title: 'Safety Supplies & First Aid Equipment | Code 3 First Aid',
    description:
      'Industrial trauma kits, fire safety gear, and ANSI/OSHA-compliant first aid supplies shipped to Omaha, Kansas City, Wichita, Tulsa, and Midwest facilities.',
    keywords: [
      'safety supplies',
      'first aid kits',
      'trauma kits',
      'fire safety equipment',
      'industrial safety gear',
    ],
  },
  'service-areas': {
    path: '/pages/service-areas.html',
    title: 'Service Areas | CPR & Safety Training | Code 3 First Aid',
    description:
      'Code 3 First Aid provides on-site CPR, fire, and PPE training in Maryville, St. Joseph, Kansas City, Omaha, Lincoln, Wichita, Tulsa, Oklahoma City, and 15+ Midwest cities.',
    keywords: [
      'safety training Missouri',
      'CPR training Nebraska',
      'fire training Kansas',
      'first aid Oklahoma',
      'on-site safety training Midwest',
    ],
  },
  'cpr-enrollment': {
    path: '/pages/forms/cpr-enrollment.html',
    title: 'CPR & First Aid Enrollment | Code 3 First Aid',
    description:
      'Register your team for AHA-aligned CPR, AED, and first aid certification. On-site and regional training available across the Midwest.',
    keywords: ['CPR enrollment', 'first aid registration', 'BLS certification signup'],
  },
  'fire-enrollment': {
    path: '/pages/forms/fire-enrollment.html',
    title: 'Fire Extinguisher Training Enrollment | Code 3 First Aid',
    description:
      'Schedule OSHA-certified fire extinguisher training for your workplace. Live-fire and digital simulation options available.',
    keywords: ['fire training enrollment', 'extinguisher training signup', 'OSHA fire safety class'],
  },
  procurement: {
    path: '/pages/forms/procurement.html',
    title: 'PPE & Safety Supplies Procurement | Code 3 First Aid',
    description:
      'Request a quote for industrial PPE, trauma kits, and ANSI/OSHA-compliant safety equipment with volume pricing.',
    keywords: ['safety supplies quote', 'PPE procurement', 'bulk first aid kits'],
  },
};

/** @type {Record<string, string>} */
export const PATH_TO_PAGE = {
  '/': 'home',
  '/index.html': 'home',
  '/pages/fire-training.html': 'fire-training',
  '/pages/cpr-training.html': 'cpr-training',
  '/pages/ppe-training.html': 'ppe-training',
  '/pages/safety-supplies.html': 'safety-supplies',
  '/pages/service-areas.html': 'service-areas',
  '/pages/forms/cpr-enrollment.html': 'cpr-enrollment',
  '/pages/forms/fire-enrollment.html': 'fire-enrollment',
  '/pages/forms/procurement.html': 'procurement',
};
