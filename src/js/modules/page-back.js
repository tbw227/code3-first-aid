/**
 * Previous-page navigation for `[data-page-back]` links.
 * Uses same-origin history when available; otherwise follows the link href.
 */
export function initPageBack() {
  if (document.documentElement.dataset.pageBackBound === 'true') return;
  document.documentElement.dataset.pageBackBound = 'true';

  document.addEventListener('click', (event) => {
    const trigger = event.target instanceof Element ? event.target.closest('[data-page-back]') : null;
    if (!(trigger instanceof HTMLAnchorElement) || event.defaultPrevented) return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const previousUrl = sameOriginReferrer();
    if (!previousUrl) return;

    event.preventDefault();

    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.assign(previousUrl);
  });
}

/** @returns {string | null} */
function sameOriginReferrer() {
  const referrer = document.referrer;
  if (!referrer) return null;

  try {
    const referrerUrl = new URL(referrer);
    if (referrerUrl.origin !== window.location.origin) return null;
    if (referrerUrl.pathname === window.location.pathname) return null;
    return referrerUrl.href;
  } catch {
    return null;
  }
}
