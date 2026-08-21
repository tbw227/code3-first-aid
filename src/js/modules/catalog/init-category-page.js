/**
 * Category and hub catalog pages.
 *
 * The markup is baked into the HTML by scripts/generate-catalog-pages.mjs, so
 * this module normally only binds behaviour. It falls back to rendering when the
 * root is empty, which keeps hand-written or stale shells working.
 */
import {
  HUB_CATEGORY_SLUG,
  getCategoryBySlug,
  getHubPageSize,
} from '../../../config/catalog.js';
import { initIcons } from '../../utils/icons.js';
import { bindFireViewToggle } from './fire-view-toggle.js';

/** @param {HTMLElement} root */
function bindFilters(root) {
  const filterRoot = root.querySelector('[data-catalog-filter]');
  const grid = root.querySelector('[data-catalog-grid]');
  const countEl = root.querySelector('[data-catalog-count]');
  if (!filterRoot || !grid) return;

  const cards = [...grid.querySelectorAll('.catalog-card')];

  filterRoot.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement) || !target.dataset.filter) return;

    filterRoot.querySelectorAll('.catalog-filter__pill').forEach((pill) => {
      pill.classList.toggle('is-active', pill === target);
    });

    const filter = target.dataset.filter;
    let visible = 0;

    for (const card of cards) {
      const tag = card.getAttribute('data-filter-tag') ?? 'all';
      const category = card.getAttribute('data-category') ?? '';
      const show =
        filter === 'all' ||
        tag === filter ||
        category === filter;
      card.hidden = !show;
      if (show) visible += 1;
    }

    if (countEl) {
      const countText = countEl.querySelector('strong');
      if (countText) {
        countText.textContent = String(visible);
      } else {
        countEl.textContent = `${visible} products found`;
      }
    }
  });
}

/** @param {HTMLElement} root @param {number} pageSize */
function bindCatalogPagination(root, pageSize) {
  const grid = root.querySelector('[data-catalog-grid]');
  const pagination = root.querySelector('[data-catalog-pagination]');
  if (!grid || !pagination) return;

  const cards = [...grid.querySelectorAll('.catalog-card')];
  const totalPages = Math.max(1, Math.ceil(cards.length / pageSize));

  if (totalPages <= 1) {
    pagination.hidden = true;
    return;
  }

  cards.forEach((card, index) => {
    card.dataset.catalogPage = String(Math.floor(index / pageSize) + 1);
  });

  let currentPage = 1;

  /** @param {Element} control @param {boolean} disabled */
  function setStepDisabled(control, disabled) {
    control.classList.toggle('is-disabled', disabled);
    control.setAttribute('aria-disabled', disabled ? 'true' : 'false');
    if (control instanceof HTMLButtonElement) {
      control.disabled = disabled;
    } else {
      control.setAttribute('tabindex', disabled ? '-1' : '0');
    }
  }

  /** @param {number} page @param {boolean} [scroll] */
  function showPage(page, scroll = true) {
    const nextPage = Math.max(1, Math.min(page, totalPages));
    currentPage = nextPage;

    cards.forEach((card) => {
      card.hidden = Number(card.dataset.catalogPage) !== nextPage;
    });

    pagination.querySelectorAll('[data-page]').forEach((control) => {
      const value = control.getAttribute('data-page');
      if (value === 'prev') {
        setStepDisabled(control, nextPage === 1);
        return;
      }
      if (value === 'next') {
        setStepDisabled(control, nextPage === totalPages);
        return;
      }
      const pageNumber = Number(value);
      const isActive = pageNumber === nextPage;
      control.classList.toggle('is-active', isActive);
      if (isActive) {
        control.setAttribute('aria-current', 'page');
      } else {
        control.removeAttribute('aria-current');
      }
    });

    if (scroll) {
      const toolbar = root.querySelector('[data-catalog-toolbar]');
      (toolbar ?? grid).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  pagination.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('[data-page]') : null;
    if (!target) return;

    event.preventDefault();

    if (
      (target instanceof HTMLButtonElement && target.disabled) ||
      target.classList.contains('is-disabled') ||
      target.getAttribute('aria-disabled') === 'true'
    ) {
      return;
    }

    const value = target.getAttribute('data-page');

    if (value === 'prev') {
      if (currentPage <= 1) return;
      showPage(currentPage - 1);
      return;
    }
    if (value === 'next') {
      if (currentPage >= totalPages) return;
      showPage(currentPage + 1);
      return;
    }

    const pageNumber = Number(value);
    if (Number.isFinite(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      showPage(pageNumber);
    }
  });

  showPage(1, false);
}

export async function initCatalogPage() {
  const root = document.querySelector('[data-catalog-root]');
  if (!root) return;

  const categorySlug = document.body.dataset.catalogCategory;
  const category = getCategoryBySlug(categorySlug ?? HUB_CATEGORY_SLUG);
  if (!category) return;

  // Only reached if the page was served without its generated markup; the
  // builders stay in a chunk that production never downloads.
  if (!root.firstElementChild) {
    const { renderCategoryPageHtml, renderHubPageHtml } = await import('./render-page.js');
    root.innerHTML = categorySlug ? renderCategoryPageHtml(categorySlug) : renderHubPageHtml();
    if (!categorySlug) {
      root.classList.add('catalog-page-root--hub');
    }
  }

  if (categorySlug) {
    if (category.filters?.length) {
      bindFilters(root);
    }
    if (category.layout === 'fire-protection') {
      bindFireViewToggle(root);
    }
  } else {
    bindCatalogPagination(root, getHubPageSize(category));
  }

  initIcons(root);
}
