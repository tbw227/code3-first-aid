const SCROLL_THRESHOLD = 50;

export function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    const scrolled = window.scrollY > SCROLL_THRESHOLD;
    header.classList.toggle('border-white/10', scrolled);
    header.classList.toggle('border-transparent', !scrolled);
    header.classList.toggle('shadow-xl', scrolled);
    header.classList.toggle('shadow-lg', !scrolled);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
