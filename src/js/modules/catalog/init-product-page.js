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
  bindQtySteppers(root);
  bindOptionGroups(root);
  initIcons(root);
}

/** @param {HTMLElement} root */
function bindQtySteppers(root) {
  root.querySelectorAll('[data-qty-stepper]').forEach((stepper) => {
    const input = stepper.querySelector('[data-qty-input]');
    if (!(input instanceof HTMLInputElement)) return;

    const min = Number(input.min || 1);
    const readValue = () => {
      const next = Number(input.value);
      return Number.isFinite(next) ? next : min;
    };

    stepper.querySelector('[data-qty-dec]')?.addEventListener('click', () => {
      input.value = String(Math.max(min, readValue() - 1));
    });
    stepper.querySelector('[data-qty-inc]')?.addEventListener('click', () => {
      input.value = String(readValue() + 1);
    });
    input.addEventListener('change', () => {
      input.value = String(Math.max(min, readValue()));
    });
  });
}

/** @param {HTMLElement} root */
function bindOptionGroups(root) {
  root.querySelectorAll('[data-option-group]').forEach((group) => {
    group.querySelectorAll('[data-option-pick]').forEach((button) => {
      button.addEventListener('click', () => {
        group.querySelectorAll('[data-option-pick]').forEach((el) => {
          el.classList.remove('is-active');
          el.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('is-active');
        button.setAttribute('aria-pressed', 'true');
      });
    });
  });
}
