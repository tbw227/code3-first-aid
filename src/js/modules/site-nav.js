import { FOOTER_SERVICE_LINKS, NAV_LINKS } from '../config/navigation.js';

const STICKY_NAV = {
  default:
    'text-tertiary-fixed-dim font-medium font-label-caps text-label-caps hover:text-primary-container transition-colors',
  active:
    'text-primary-container font-bold border-b-2 border-primary-container font-label-caps text-label-caps',
};

const HERO_NAV = {
  default:
    'text-white/80 font-medium font-label-caps text-label-caps hover:text-white transition-colors',
  active:
    'text-white font-semibold font-label-caps text-label-caps border-b-2 border-accent-red pb-0.5',
};

const SUPPLIES_NAV = {
  default:
    'text-on-secondary font-medium font-label-caps text-label-caps hover:text-primary-container transition-colors duration-300',
  active:
    'text-primary-container font-bold border-b-2 border-primary-container font-label-caps text-label-caps',
};

function buildNavLinks(page, variant) {
  const styles =
    variant === 'hero' ? HERO_NAV :
    variant === 'supplies' ? SUPPLIES_NAV :
    STICKY_NAV;

  return NAV_LINKS.map(({ id, label, href }) => {
    const className = id === page ? styles.active : styles.default;
    return `<a class="${className}" href="${href}">${label}</a>`;
  }).join('');
}

function buildMobileNavLinks(page) {
  return NAV_LINKS.map(({ id, label, href }) => {
    const activeClass = id === page ? ' is-active' : '';
    return `<a class="${activeClass}" href="${href}">${label}</a>`;
  }).join('');
}

function buildFooterLinks() {
  return FOOTER_SERVICE_LINKS.map(
    ({ label, href }) =>
      `<li><a class="text-tertiary-fixed-dim hover:text-white transition-colors duration-200 font-body-md" href="${href}">${label}</a></li>`,
  ).join('');
}

export function initSiteNav() {
  const page = document.body.dataset.page ?? 'home';
  const variant = document.body.dataset.navVariant ?? 'sticky';

  document.querySelectorAll('[data-nav="main"]').forEach((nav) => {
    nav.innerHTML = buildNavLinks(page, variant);
  });

  document.querySelectorAll('[data-nav="footer-services"]').forEach((list) => {
    list.innerHTML = buildFooterLinks();
  });

  initMobileNav();
}

export function initMobileNav() {
  const panel = document.querySelector('[data-mobile-nav]');
  const toggle = document.querySelector('[data-mobile-nav-toggle]');
  if (!panel || !toggle) return;

  const page = document.body.dataset.page ?? 'home';
  panel.innerHTML = `<nav class="mobile-nav__links">${buildMobileNavLinks(page)}</nav>`;

  const icon = toggle.querySelector('.material-symbols-outlined');

  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (icon) icon.textContent = open ? 'close' : 'menu';
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      panel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (icon) icon.textContent = 'menu';
    });
  });
}
