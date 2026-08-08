/**
 * JSON-LD verification — runs src/js/seo-head.js against a minimal DOM shim and
 * validates the injected schema graph for every page.
 * Usage: node scripts/verify-jsonld.mjs
 */
import { locationSeo, PAGE_SEO } from '../src/config/seo.js';

const EXPECTED_RADIUS = Math.round(75 * 1609.344);

let failures = 0;

/** @param {string} label @param {boolean} ok @param {string} [detail] */
function check(label, ok, detail = '') {
  if (!ok) {
    failures += 1;
    console.log(`  FAIL  ${label}${detail ? ` — ${detail}` : ''}`);
  }
}

/** Minimal element stand-in supporting the surface seo-head.js touches. */
class FakeElement {
  constructor(tag) {
    this.tagName = tag.toUpperCase();
    this.id = '';
    this.textContent = '';
    this.attributes = {};
  }

  setAttribute(name, value) {
    this.attributes[name] = value;
  }

  getAttribute(name) {
    return this.attributes[name] ?? null;
  }
}

/**
 * Install a fresh document/window pair for one page render.
 * @param {string} pathname
 * @param {string} dataPage
 * @param {boolean} hasStaticDescription Mirrors the build-time meta injection.
 */
function installDom(pathname, dataPage, hasStaticDescription) {
  const head = [];

  const document = {
    title: '',
    head: {
      appendChild(el) {
        head.push(el);
      },
    },
    body: { dataset: { page: dataPage } },
    createElement: (tag) => new FakeElement(tag),
    getElementById: (id) => head.find((el) => el.id === id) ?? null,
    querySelector(selector) {
      if (selector === 'meta[name="description"]') {
        if (hasStaticDescription) return new FakeElement('meta');
        return head.find((el) => el.getAttribute('name') === 'description') ?? null;
      }
      return null;
    },
  };

  globalThis.document = document;
  globalThis.window = { location: { pathname } };
  return { head, document };
}

/**
 * Render one page and return its injected schema graph plus head elements.
 * @param {string} pathname @param {string} dataPage @param {number} nonce
 */
async function render(pathname, dataPage, nonce) {
  const { head, document } = installDom(pathname, dataPage, true);
  await import(`../src/js/seo-head.js?v=${nonce}`);
  const script = head.find((el) => el.id === 'json-ld-seo');
  return { head, document, script };
}

/** @param {object[]} graph @param {string} type */
function byType(graph, type) {
  return graph.filter((node) => {
    const t = node['@type'];
    return Array.isArray(t) ? t.includes(type) : t === type;
  });
}

let nonce = 0;

console.log('Verifying JSON-LD for 15 location pages\n');

for (const slug of Object.keys(locationSeo)) {
  const loc = locationSeo[slug];
  console.log(`${slug}`);

  const { document, script } = await render(`/pages/locations/${slug}`, slug, nonce++);

  check('json-ld script injected', Boolean(script));
  if (!script) continue;

  check('document.title set', document.title === loc.title, document.title);

  let graph;
  try {
    graph = JSON.parse(script.textContent)['@graph'];
  } catch (error) {
    check('json-ld parses', false, error.message);
    continue;
  }

  const serialized = JSON.stringify(graph);

  // Required schema types
  check('Organization present', byType(graph, 'Organization').length === 1);
  check('WebSite present', byType(graph, 'WebSite').length === 1);

  // Explicit requirement: service-area business, no fake storefront
  check('no LocalBusiness', !/"@type":"LocalBusiness"/.test(serialized));
  check('no ProfessionalService', !/"@type":"ProfessionalService"/.test(serialized));
  check('no PostalAddress', !/PostalAddress/.test(serialized));

  // Service + GeoCircle
  const services = byType(graph, 'Service');
  check('exactly one Service', services.length === 1, `got ${services.length}`);
  if (services.length === 1) {
    const area = services[0].areaServed;
    check('areaServed is GeoCircle', area?.['@type'] === 'GeoCircle', area?.['@type']);
    check('geo lat matches', area?.geoMidpoint?.latitude === loc.lat);
    check('geo lng matches', area?.geoMidpoint?.longitude === loc.lng);
    check('geo radius is 75mi', area?.geoRadius === EXPECTED_RADIUS, String(area?.geoRadius));
    check('Service has provider', Boolean(services[0].provider?.['@id']));
  }

  // FAQPage
  const faqs = byType(graph, 'FAQPage');
  check('exactly one FAQPage', faqs.length === 1, `got ${faqs.length}`);
  if (faqs.length === 1) {
    const questions = faqs[0].mainEntity ?? [];
    check('FAQ count matches config', questions.length === loc.faqs.length);
    check(
      'every FAQ has an answer',
      questions.every((q) => q.acceptedAnswer?.text?.length > 0),
    );
  }

  // BreadcrumbList: Home > Service Areas > City
  const crumbs = byType(graph, 'BreadcrumbList');
  check('exactly one BreadcrumbList', crumbs.length === 1);
  if (crumbs.length === 1) {
    const items = crumbs[0].itemListElement ?? [];
    check('3 breadcrumb levels', items.length === 3, `got ${items.length}`);
    check('crumb 1 is Home', items[0]?.name === 'Home');
    check('crumb 2 is Service Areas', items[1]?.name === 'Service Areas');
    check('crumb 3 is city', items[2]?.name === `${loc.city}, ${loc.stateCode}`, items[2]?.name);
    check(
      'crumb positions ordered',
      items.every((item, i) => item.position === i + 1),
    );
  }
}

console.log('\nVerifying JSON-LD for standard pages\n');

for (const [pageId, page] of Object.entries(PAGE_SEO)) {
  console.log(`${pageId}`);
  const path = page.path === '/' ? '/' : page.path;
  const { script, document } = await render(path, pageId, nonce++);

  check('json-ld script injected', Boolean(script));
  if (!script) continue;

  check('document.title set', document.title === page.title, document.title);

  const graph = JSON.parse(script.textContent)['@graph'];
  check('Organization present', byType(graph, 'Organization').length === 1);
  check('BreadcrumbList present', byType(graph, 'BreadcrumbList').length === 1);
  check('no FAQPage leaked', byType(graph, 'FAQPage').length === 0);

  if (pageId === 'service-areas') {
    check('ItemList present', byType(graph, 'ItemList').length === 1);
    const items = byType(graph, 'ItemList')[0]?.itemListElement ?? [];
    check('ItemList has 15 cities', items.length === 15, `got ${items.length}`);
  }
}

console.log(`\n${failures} failures`);
process.exit(failures > 0 ? 1 : 0);
