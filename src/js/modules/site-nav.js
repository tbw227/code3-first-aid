/**
 * Site navigation — builds header, mobile drawer, and footer service links from navigation.js.
 * Uses DOM APIs, event delegation, and ResizeObserver for header height sync.
 */
import { FOOTER_SERVICE_LINKS, NAV_LINKS } from '../config/navigation.js';
import { createLink } from '../utils/dom.js';
import { observeSiteHeaderHeight } from '../utils/header-height.js';
import { createIconEl, initIcons, setIcon } from '../utils/icons.js';

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

/** @type {HTMLElement | null} */
let mobilePanel = null;

/** @type {HTMLElement | null} */
let mobileToggle = null;

function isChildActive(item, page) {
  return Boolean(item.children?.some((child) => child.id === page));
}

function getNavLinksForPage(page) {
  return NAV_LINKS.filter((item) => !(page === 'home' && item.id === 'home'));
}

function getStyles(variant) {
  if (variant === 'hero') return HERO_NAV;
  if (variant === 'supplies') return SUPPLIES_NAV;
  return STICKY_NAV;
}

/**
 * @param {string} iconName
 * @param {string} [extraClass]
 */
function createIcon(iconName, extraClass = '') {
  return createIconEl(iconName, extraClass);
}

/**
 * @param {{ href: string, label: string, className?: string, active?: boolean }} options
 */
function buildNavLink({ href, label, className = '', active = false }) {
  const link = createLink(href, label, className);
  if (active) {
    link.classList.add('is-active');
  }
  return link;
}

/**
 * @param {object} item
 * @param {string} page
 * @param {{ default: string, active: string }} styles
 */
function buildDropdownElement(item, page, styles) {
  const parentActive = isChildActive(item, page);
  const triggerClass = parentActive ? styles.active : styles.default;

  const dropdown = document.createElement('div');
  dropdown.className = 'nav-dropdown';
  dropdown.dataset.navDropdown = '';

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = `nav-dropdown__trigger ${triggerClass}`;
  trigger.dataset.navDropdownTrigger = '';
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-haspopup', 'true');
  trigger.append(document.createTextNode(item.label), createIcon('chevron-down', 'nav-dropdown__chevron'));

  const panel = document.createElement('div');
  panel.className = 'nav-dropdown__panel';
  panel.dataset.navDropdownPanel = '';
  panel.setAttribute('role', 'menu');

  for (const child of item.children) {
    panel.append(
      buildNavLink({
        href: child.href,
        label: child.label,
        className: `nav-dropdown__link${child.id === page ? ' is-active' : ''}`,
        active: child.id === page,
      }),
    );
  }

  dropdown.append(trigger, panel);
  return dropdown;
}

/**
 * @param {string} page
 * @param {string} variant
 * @returns {DocumentFragment}
 */
function buildDesktopNavFragment(page, variant) {
  const styles = getStyles(variant);
  const fragment = document.createDocumentFragment();

  for (const item of getNavLinksForPage(page)) {
    if (item.children) {
      fragment.append(buildDropdownElement(item, page, styles));
      continue;
    }

    const className = item.id === page ? styles.active : styles.default;
    fragment.append(buildNavLink({ href: item.href, label: item.label, className, active: item.id === page }));
  }

  return fragment;
}

/**
 * @param {string} page
 * @returns {HTMLElement}
 */
function buildMobileNavElement(page) {
  const nav = document.createElement('nav');
  nav.className = 'mobile-nav__links';

  for (const item of getNavLinksForPage(page)) {
    if (item.children) {
      const parentActive = isChildActive(item, page);
      const group = document.createElement('div');
      group.className = `mobile-nav__group${parentActive ? ' is-active' : ''}`;
      group.dataset.mobileNavGroup = '';

      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = `mobile-nav__group-trigger${parentActive ? ' is-active' : ''}`;
      trigger.dataset.mobileNavGroupTrigger = '';
      trigger.setAttribute('aria-expanded', parentActive ? 'true' : 'false');
      trigger.append(document.createTextNode(item.label), createIcon('chevron-down', 'mobile-nav__group-chevron'));

      const groupPanel = document.createElement('div');
      groupPanel.className = `mobile-nav__group-panel${parentActive ? ' is-open' : ''}`;
      groupPanel.dataset.mobileNavGroupPanel = '';

      for (const child of item.children) {
        groupPanel.append(
          buildNavLink({
            href: child.href,
            label: child.label,
            className: child.id === page ? 'is-active' : '',
            active: child.id === page,
          }),
        );
      }

      group.append(trigger, groupPanel);
      nav.append(group);
      continue;
    }

    nav.append(
      buildNavLink({
        href: item.href,
        label: item.label,
        className: item.id === page ? 'is-active' : '',
        active: item.id === page,
      }),
    );
  }

  return nav;
}

/** @returns {DocumentFragment} */
function buildFooterFragment() {
  const fragment = document.createDocumentFragment();

  for (const { label, href } of FOOTER_SERVICE_LINKS) {
    const li = document.createElement('li');
    li.append(createLink(href, label, 'hover:text-white transition-colors'));
    fragment.append(li);
  }

  return fragment;
}

function closeMobileNav() {
  if (!mobilePanel || !mobileToggle) return;

  mobilePanel.classList.remove('is-open');
  mobileToggle.setAttribute('aria-expanded', 'false');
  mobilePanel.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  setIcon(mobileToggle, 'menu', 'text-2xl');
}

function openMobileNav() {
  if (!mobilePanel || !mobileToggle) return;

  mobilePanel.classList.add('is-open');
  mobileToggle.setAttribute('aria-expanded', 'true');
  mobilePanel.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  setIcon(mobileToggle, 'x', 'text-2xl');
}

function closeAllDropdowns(except = null) {
  document.querySelectorAll('[data-nav-dropdown]').forEach((dropdown) => {
    if (except && dropdown === except) return;
    dropdown.classList.remove('is-open');
    dropdown.querySelector('[data-nav-dropdown-trigger]')?.setAttribute('aria-expanded', 'false');
  });
}

function toggleDropdown(trigger) {
  const dropdown = trigger.closest('[data-nav-dropdown]');
  if (!dropdown) return;

  const willOpen = !dropdown.classList.contains('is-open');
  closeAllDropdowns(willOpen ? dropdown : null);

  dropdown.classList.toggle('is-open', willOpen);
  trigger.setAttribute('aria-expanded', String(willOpen));
}

function bindDropdownHover(nav) {
  nav.querySelectorAll('[data-nav-dropdown]').forEach((dropdown) => {
    const trigger = dropdown.querySelector('[data-nav-dropdown-trigger]');
    if (!trigger) return;

    dropdown.addEventListener('mouseenter', () => {
      closeAllDropdowns(dropdown);
      dropdown.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    });

    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    });
  });
}

function bindNavDelegation() {
  if (document.documentElement.dataset.navDelegationBound === 'true') return;
  document.documentElement.dataset.navDelegationBound = 'true';

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const mobileToggleBtn = target.closest('[data-mobile-nav-toggle]');
    if (mobileToggleBtn && mobilePanel) {
      event.preventDefault();
      if (mobilePanel.classList.contains('is-open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
      return;
    }

    if (target.closest('[data-mobile-nav] a')) {
      closeMobileNav();
      return;
    }

    const accordionTrigger = target.closest('[data-mobile-nav-group-trigger]');
    if (accordionTrigger) {
      const group = accordionTrigger.closest('[data-mobile-nav-group]');
      const groupPanel = group?.querySelector('[data-mobile-nav-group-panel]');
      if (group && groupPanel) {
        const open = groupPanel.classList.toggle('is-open');
        accordionTrigger.setAttribute('aria-expanded', String(open));
        group.classList.toggle('is-open', open);
      }
      return;
    }

    const dropdownTrigger = target.closest('[data-nav-dropdown-trigger]');
    if (dropdownTrigger) {
      event.stopPropagation();
      toggleDropdown(dropdownTrigger);
      return;
    }

    if (!target.closest('[data-nav="main"]')) {
      closeAllDropdowns();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobilePanel?.classList.contains('is-open')) {
      closeMobileNav();
    }
  });

  window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
    if (event.matches) {
      closeMobileNav();
    }
  });
}

/** Main entry: populate nav targets and bind interactions. */
export function initSiteNav() {
  const page = document.body.dataset.page ?? 'home';
  const variant = document.body.dataset.navVariant ?? 'sticky';

  const header = document.querySelector('.site-header');
  if (header) {
    observeSiteHeaderHeight(header);
  }

  document.querySelectorAll('[data-nav="main"]').forEach((nav) => {
    nav.replaceChildren(buildDesktopNavFragment(page, variant));
    bindDropdownHover(nav);
  });

  document.querySelectorAll('[data-nav="footer-services"]').forEach((list) => {
    list.replaceChildren(buildFooterFragment());
  });

  mobilePanel = document.querySelector('[data-mobile-nav]');
  mobileToggle = document.querySelector('[data-mobile-nav-toggle]');

  if (mobilePanel) {
    mobilePanel.replaceChildren(buildMobileNavElement(page));
  }

  bindNavDelegation();
  initIcons(document.querySelector('.site-header') ?? document);
}
