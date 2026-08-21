/**
 * Re-encodes source images to web-ready WebP in public/images.
 *
 * Full-resolution originals live in assets/images-src/ (gitignored) so the repo
 * and every deploy carry only the optimized derivatives. This is a maintenance
 * task, not part of `npm run build` — run it after adding or replacing a source
 * image, then commit the generated file.
 *
 * Usage:
 *   node scripts/optimize-images.mjs           # only encode what is missing or stale
 *   node scripts/optimize-images.mjs --force   # re-encode everything
 */
import { mkdirSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = resolve(__dirname, '../assets/images-src');
const OUT_DIR = resolve(__dirname, '../public/images');
const FORCE = process.argv.includes('--force');

const SOURCE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp']);

/**
 * Longest-edge ceiling and WebP quality per top-level folder. Anything already
 * below its ceiling is re-encoded but not resized. Backgrounds sit behind dark
 * overlays, so they tolerate a lower quality than foreground photography.
 */
const PROFILES = {
  brand: { maxEdge: 640, quality: 85 },
  backgrounds: { maxEdge: 1920, quality: 68 },
  supplies: { maxEdge: 1600, quality: 80 },
  training: { maxEdge: 1600, quality: 80 },
  team: { maxEdge: 1200, quality: 80 },
  dashboard: { maxEdge: 1600, quality: 80 },
};
const DEFAULT_PROFILE = { maxEdge: 1600, quality: 80 };

/** @param {string} dir @returns {string[]} */
function walk(dir) {
  if (!existsSync(dir)) {
    return [];
  }
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

/** @param {number} bytes */
function mb(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

/** @param {string} relPath */
function profileFor(relPath) {
  const [folder] = relPath.split(/[\\/]/);
  return PROFILES[folder] ?? DEFAULT_PROFILE;
}

if (!existsSync(SRC_DIR)) {
  console.error(`No source directory at ${relative(process.cwd(), SRC_DIR)}.`);
  console.error('Put full-resolution originals there, mirroring public/images/.');
  process.exit(1);
}

/** Folders prefixed with `_` are parked originals that nothing references. */
function isParked(relPath) {
  return relPath.split(/[\\/]/).some((segment) => segment.startsWith('_'));
}

const sources = walk(SRC_DIR)
  .filter((file) => SOURCE_EXTENSIONS.has(extname(file).toLowerCase()))
  .filter((file) => !isParked(relative(SRC_DIR, file)));

let sourceBytes = 0;
let outputBytes = 0;
let written = 0;
let skipped = 0;

for (const source of sources) {
  const relPath = relative(SRC_DIR, source);
  const outPath = join(OUT_DIR, relPath).replace(/\.[^.]+$/, '.webp');
  const sourceStat = statSync(source);
  sourceBytes += sourceStat.size;

  if (!FORCE && existsSync(outPath) && statSync(outPath).mtimeMs >= sourceStat.mtimeMs) {
    outputBytes += statSync(outPath).size;
    skipped += 1;
    continue;
  }

  mkdirSync(dirname(outPath), { recursive: true });

  const image = sharp(source, { failOn: 'error' });
  const { width = 0, height = 0 } = await image.metadata();
  const { maxEdge, quality } = profileFor(relPath);
  const resize = Math.max(width, height) > maxEdge;

  await image
    .rotate()
    .resize({
      width: width >= height ? maxEdge : undefined,
      height: height > width ? maxEdge : undefined,
      withoutEnlargement: true,
      fit: 'inside',
    })
    .webp({ quality, effort: 6 })
    .toFile(outPath);

  const outStat = statSync(outPath);
  outputBytes += outStat.size;
  written += 1;

  const dims = resize ? `${width}x${height} -> max ${maxEdge}px` : `${width}x${height}`;
  console.log(
    `${relPath.replace(/\\/g, '/')}  ${mb(sourceStat.size)} -> ${mb(outStat.size)}  (${dims})`,
  );
}

console.log(
  `\n${written} encoded, ${skipped} up to date. Source ${mb(sourceBytes)} -> output ${mb(outputBytes)} ` +
    `(${Math.round((1 - outputBytes / sourceBytes) * 100)}% smaller).`,
);
