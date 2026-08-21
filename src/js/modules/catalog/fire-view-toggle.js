/**
 * Grid/list toggle on the fire protection category page.
 *
 * Kept out of layout-fire-protection.js so category pages don't download that
 * module's markup builders just to wire up the toggle.
 */

/** @param {HTMLElement} root */
export function bindFireViewToggle(root) {
  const toggle = root.querySelector('[data-fire-view-toggle]');
  const grid = root.querySelector('[data-fire-grid]');
  if (!toggle || !grid) return;

  toggle.addEventListener('click', (event) => {
    const button = event.target instanceof HTMLButtonElement ? event.target : null;
    if (!button?.dataset.fireView) return;

    toggle.querySelectorAll('[data-fire-view]').forEach((control) => {
      control.classList.toggle('is-active', control === button);
    });

    grid.classList.toggle('catalog-fire-grid--list', button.dataset.fireView === 'list');
  });
}
