/**
 * Keeps pages/catalog/** in sync with the catalog config during `vite dev`.
 *
 * Catalog pages ship with their markup baked in, so editing the config or a
 * render module has to regenerate them. Generation runs in a child process
 * because Node caches ES modules for the life of the dev server.
 */
import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const generator = resolve(__dirname, 'generate-catalog-pages.mjs');

/** Sources whose output is baked into the generated pages. */
const WATCHED = /[\\/]src[\\/](config[\\/]catalog\.js|js[\\/]modules[\\/]catalog[\\/][^\\/]+\.js)$/;

export function catalogPagesPlugin() {
  function regenerate() {
    try {
      execFileSync(process.execPath, [generator], { cwd: projectRoot, stdio: 'pipe' });
      return true;
    } catch (error) {
      const detail = error.stderr?.toString().trim() || error.message;
      console.error(`[catalog-pages] generation failed\n${detail}`);
      return false;
    }
  }

  return {
    name: 'catalog-pages',
    apply: 'serve',
    configureServer(server) {
      regenerate();

      server.watcher.on('change', (file) => {
        if (!WATCHED.test(file)) return;
        if (regenerate()) {
          server.ws.send({ type: 'full-reload' });
        }
      });
    },
  };
}
