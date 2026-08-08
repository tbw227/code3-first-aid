/**
 * Site verification — fetches every page from a running server and checks
 * SEO meta, headings, and that internal links resolve to real files.
 * Usage: node scripts/verify-site.mjs [baseUrl] [--dist]
 * Pass --dist when checking a `vite preview` server so links resolve against dist/.
 */
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGE_SEO, locationSeo, resolvePageSeo, getBreadcrumbs } from '../src/config/seo.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const args = process.argv.slice(2);
const useDist = args.includes('--dist');
const base = args.find((a) => a.startsWith('http')) ?? 'http://localhost:5173';
const root = useDist ? resolve(projectRoot, 'dist') : projectRoot;

let failures = 0;
let warnings = 0;

/** @param {string} label @param {boolean} ok @param {string} [detail] */
function check(label, ok, detail = '') {
  if (!ok) {
    failures += 1;
    console.log(`  FAIL  ${label}${detail ? ` — ${detail}` : ''}`);
  }
}

/** @param {string} label @param {string} detail */
function warn(label, detail) {
  warnings += 1;
  console.log(`  WARN  ${label} — ${detail}`);
}

/** @param {string} value */
function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

/** @param {string} html @param {RegExp} re */
function first(html, re) {
  const m = html.match(re);
  return m ? decodeEntities(m[1]) : null;
}

/**
 * Map a site-root href to a file on disk. In dev, Vite serves /src/* from the
 * project root and /public contents at the site root; in dist everything is flat.
 */
function hrefToFile(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean.startsWith('/')) return null;
  if (useDist) return resolve(root, clean.slice(1));
  if (clean.startsWith('/src/')) return resolve(root, clean.slice(1));
  const publicPath = resolve(root, `public${clean}`);
  return existsSync(publicPath) ? publicPath : resolve(root, clean.slice(1));
}

const pages = [
  ...Object.values(PAGE_SEO).map((p) => ({
    id: 'page',
    url: p.path === '/' ? '/index.html' : `${p.path}.html`,
    title: p.title,
    description: p.description,
  })),
  ...Object.keys(locationSeo).map((slug) => ({
    id: slug,
    url: `/pages/locations/${slug}.html`,
    title: locationSeo[slug].title,
    description: locationSeo[slug].description,
  })),
];

console.log(`Verifying ${pages.length} pages against ${base}\n`);

for (const page of pages) {
  console.log(`${page.url}`);

  let res;
  try {
    res = await fetch(`${base}${page.url}`);
  } catch (error) {
    check('fetch', false, error.message);
    continue;
  }

  check('HTTP 200', res.status === 200, `got ${res.status}`);
  if (res.status !== 200) continue;

  const html = await res.text();

  const title = first(html, /<title>([^<]*)<\/title>/);
  const description = first(html, /<meta name="description" content="([^"]*)"/);
  const canonical = first(html, /<link rel="canonical" href="([^"]*)"/);
  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;

  check('has <title>', Boolean(title));
  check('has meta description', Boolean(description));
  check('has canonical', Boolean(canonical));
  check('exactly one <h1>', h1Count === 1, `found ${h1Count}`);
  check('body has data-page', /<body[^>]*data-page="/.test(html));

  if (title && title.length > 60) warn('title length', `${title.length} chars: "${title}"`);
  if (description && (description.length < 150 || description.length > 165)) {
    warn('description length', `${description.length} chars`);
  }

  // Internal links resolve to real files
  const hrefs = [...html.matchAll(/href="(\/[^"#][^"]*)"/g)].map((m) => m[1]);
  const broken = [...new Set(hrefs)].filter((href) => {
    const file = hrefToFile(href);
    return file && !existsSync(file);
  });
  check('internal links resolve', broken.length === 0, broken.join(', '));
}

console.log('\nSEO data layer');
for (const slug of Object.keys(locationSeo)) {
  const loc = locationSeo[slug];
  const seo = resolvePageSeo(slug);
  const crumbs = getBreadcrumbs(slug);

  check(`${slug}: resolvePageSeo path`, seo.path === `/pages/locations/${slug}`, seo.path);
  check(`${slug}: 3 breadcrumbs`, crumbs.length === 3, `got ${crumbs.length}`);
  check(`${slug}: has lat/lng`, Number.isFinite(loc.lat) && Number.isFinite(loc.lng));
  check(`${slug}: 3-5 FAQs`, loc.faqs.length >= 3 && loc.faqs.length <= 5, `got ${loc.faqs.length}`);
  check(
    `${slug}: FAQs answered`,
    loc.faqs.every((f) => f.q && f.a),
  );
  check(`${slug}: 2-4 nearby links`, loc.nearby.length >= 2 && loc.nearby.length <= 4);
  check(
    `${slug}: nearby slugs exist`,
    loc.nearby.every((n) => locationSeo[n]),
    loc.nearby.filter((n) => !locationSeo[n]).join(', '),
  );
  check(`${slug}: no self-reference`, !loc.nearby.includes(slug));
}

console.log(`\n${failures} failures, ${warnings} warnings`);
process.exit(failures > 0 ? 1 : 0);
