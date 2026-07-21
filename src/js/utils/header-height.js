/** @type {ResizeObserver | null} */
let observer = null;

/** Sync --site-header-height from the live header box size. */
export function syncSiteHeaderHeight() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  document.documentElement.style.setProperty('--site-header-height', `${header.offsetHeight}px`);
}

/**
 * Observe header size changes (font load, breakpoint, content) without window resize.
 * @param {Element} header
 */
export function observeSiteHeaderHeight(header) {
  if (observer) {
    observer.disconnect();
  }

  syncSiteHeaderHeight();

  observer = new ResizeObserver(() => {
    syncSiteHeaderHeight();
  });

  observer.observe(header);
}
