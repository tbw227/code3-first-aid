/**
 * Thumbnail switching for the product detail gallery.
 *
 * Kept out of layout-product-detail.js so product pages don't download that
 * module's markup builders just to wire up a few click handlers.
 */

/** @param {HTMLElement} root */
export function bindProductGallery(root) {
  const gallery = root.querySelector('[data-product-gallery]');
  if (!gallery) return;

  const main = gallery.querySelector('[data-gallery-main]');
  gallery.querySelectorAll('[data-gallery-thumb]').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const src = thumb.getAttribute('data-gallery-thumb');
      if (!src || !(main instanceof HTMLImageElement)) return;
      main.src = src;
      gallery.querySelectorAll('[data-gallery-thumb]').forEach((el) => el.classList.remove('is-active'));
      thumb.classList.add('is-active');
    });
  });
}
