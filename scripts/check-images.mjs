/**
 * Scan every HTML page for /images/... references (both <img src> and inline
 * background-image url(...)) and report any that don't exist in public/.
 * Usage: node scripts/check-images.mjs
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const publicDir = resolve(root, 'public');

const htmlFiles = globSync('{index.html,pages/**/*.html}', { cwd: root });

const IMG_SRC = /\bsrc\s*=\s*["'](\/images\/[^"'?]+)/g;
const BG_URL = /background-image\s*:\s*url\(\s*['"]?(\/images\/[^'")]+)/g;

let failures = 0;
const brokenByFile = new Map();

for (const file of htmlFiles) {
  const html = readFileSync(resolve(root, file), 'utf8');
  const hits = new Set();

  for (const re of [IMG_SRC, BG_URL]) {
    re.lastIndex = 0;
    for (const match of html.matchAll(re)) {
      hits.add(match[1]);
    }
  }

  const broken = [...hits].filter((href) => !existsSync(resolve(publicDir, href.slice(1))));
  if (broken.length > 0) {
    brokenByFile.set(file, broken);
    failures += broken.length;
  }
}

if (failures === 0) {
  console.log(`OK — all image references in ${htmlFiles.length} HTML files resolve to files in public/`);
  process.exit(0);
}

console.log(`Found ${failures} broken image reference(s):\n`);
for (const [file, refs] of brokenByFile) {
  console.log(`  ${file}`);
  for (const ref of refs) console.log(`    - ${ref}`);
}
process.exit(1);
