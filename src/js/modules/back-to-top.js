/**
 * Fixed back-to-top control — injected on every page via main.js bootstrap.
 */
import { createIconEl, initIcons } from '../utils/icons.js';

const SHOW_AFTER_PX = 400;

/** @returns {boolean} */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function initBackToTop() {
  if (document.querySelector('[data-back-to-top]')) return;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'back-to-top';
  button.dataset.backToTop = '';
  button.setAttribute('aria-label', 'Back to top');
  button.hidden = true;
  button.append(createIconEl('chevron-up', 'back-to-top__icon'));
  document.body.append(button);
  initIcons(button);

  function updateVisibility() {
    const visible = window.scrollY > SHOW_AFTER_PX;
    button.hidden = !visible;
    button.classList.toggle('is-visible', visible);
  }

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  });
}
