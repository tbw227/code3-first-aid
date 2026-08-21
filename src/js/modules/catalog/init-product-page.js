/**
 * Product detail catalog pages.
 *
 * Like the category pages, the markup is baked in at build time; this module
 * binds the gallery and swaps icon placeholders.
 */
import { initIcons } from '../../utils/icons.js';
import { bindProductGallery } from './product-gallery.js';

export async function initProductPage() {
  const root = document.querySelector('[data-product-root]');
  const slug = document.body.dataset.catalogProduct;
  if (!root || !slug) return;

  // Only reached if the page was served without its generated markup; the
  // builders stay in a chunk that production never downloads.
  if (!root.firstElementChild) {
    const { renderProductPageHtml } = await import('./render-page.js');
    root.innerHTML = renderProductPageHtml(slug);
  }

  bindProductGallery(root);
  initIcons(root);
}
