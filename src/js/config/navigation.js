/**
 * Central navigation config — single source of truth for header, mobile drawer, and footer links.
 * Consumed by src/js/modules/site-nav.js.
 */

/** @param {ReadonlyArray<object>} items */
function deepFreeze(items) {
  return Object.freeze(
    items.map((item) =>
      Object.freeze({
        ...item,
        ...(item.children ? { children: deepFreeze(item.children) } : {}),
      }),
    ),
  );
}

/** Top-level nav items; `children` renders as a desktop dropdown / mobile accordion. */
const NAV_LINKS_RAW = [
  { id: 'home', label: 'Home', href: '/index.html' },
  {
    id: 'training',
    label: 'Training',
    children: [
      { id: 'fire-training', label: 'Fire Training', href: '/pages/fire-training.html' },
      { id: 'cpr-training', label: 'CPR Training', href: '/pages/cpr-training.html' },
      { id: 'ppe-training', label: 'PPE Training', href: '/pages/ppe-training.html' },
    ],
  },
  { id: 'safety-supplies', label: 'Safety Supplies', href: '/pages/safety-supplies.html' },
  { id: 'service-areas', label: 'Service Areas', href: '/pages/service-areas.html' },
];

export const NAV_LINKS = deepFreeze(NAV_LINKS_RAW);

/** Flatten nav tree for footer (excludes Home). */
function deriveFooterLinks(links) {
  return links.flatMap((item) => {
    if (item.id === 'home') return [];
    if (item.children) {
      return item.children.map(({ label, href }) => ({ label, href }));
    }
    return [{ label: item.label, href: item.href }];
  });
}

export const FOOTER_SERVICE_LINKS = Object.freeze(deriveFooterLinks(NAV_LINKS));
