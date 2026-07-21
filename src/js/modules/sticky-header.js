/** Pixels scrolled before the sticky header switches to its "scrolled" visual state. */
const SCROLL_THRESHOLD = 50;

/**
 * Sets data-scrolled on `.site-header`; CSS owns border/shadow/background visuals.
 */
export function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header || header.dataset.stickyBound === 'true') return;

  header.dataset.stickyBound = 'true';

  const onScroll = () => {
    const scrolled = window.scrollY > SCROLL_THRESHOLD;
    header.dataset.scrolled = scrolled ? 'true' : 'false';
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
