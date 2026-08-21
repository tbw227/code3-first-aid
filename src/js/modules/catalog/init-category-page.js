/**
 * Category and hub catalog pages — reads data-catalog-category and renders UI from config.
 */
import {
  CATALOG_CATEGORIES,
  getCategoryBySlug,
  getProductsByCategory,
} from '../../../config/catalog.js';
import { initIcons } from '../../utils/icons.js';
import {
  renderCatalogHubHero,
  renderCategoryHero,
  renderFaqSection,
  renderFeatureSection,
  renderFilterBar,
  renderGridSectionHeader,
  renderInfoSection,
  renderPagination,
  renderProductCard,
  renderTreatmentPacksSection,
  wrapWithCatalogSidebar,
} from './components.js';
import { initProductAnimations } from '../scroll-animations.js';
import {
  renderEyeCareBentoGrid,
  renderEyeCareComplianceSection,
  renderEyeCareCtaBanner,
  renderEyeCareProductSection,
} from './layout-eye-care.js';
import {
  renderPpeCtaSection,
  renderPpeProductSections,
} from './layout-industrial-ppe.js';
import {
  bindFireScrollReveal,
  bindFireViewToggle,
  renderFireProductSection,
  renderFireSolutionsSection,
} from './layout-fire-protection.js';

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

/**
 * @param {string} categorySlug
 * @param {HTMLElement} root
 */
function renderEyeCareCategoryPage(categorySlug, root) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return;

  const products = getProductsByCategory(categorySlug);
  const shellBreadcrumbs = document.querySelector('.catalog-breadcrumbs');
  if (shellBreadcrumbs) {
    shellBreadcrumbs.hidden = true;
  }

  root.innerHTML = `
    ${renderCategoryHero(category)}
    ${wrapWithCatalogSidebar(categorySlug, `
      ${renderEyeCareProductSection(category, products)}
    `)}
    ${category.complianceSection ? renderEyeCareComplianceSection(category.complianceSection) : ''}
    ${category.bentoGrid ? renderEyeCareBentoGrid(category.bentoGrid) : ''}
    ${category.ctaBanner ? renderEyeCareCtaBanner(category.ctaBanner) : ''}
  `;

  initProductAnimations();
  initIcons(root);
}

function renderIndustrialPpeCategoryPage(categorySlug, root) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return;

  const products = getProductsByCategory(categorySlug);
  const shellBreadcrumbs = document.querySelector('.catalog-breadcrumbs');
  if (shellBreadcrumbs) {
    shellBreadcrumbs.hidden = true;
  }

  root.innerHTML = `
    ${renderCategoryHero(category)}
    ${wrapWithCatalogSidebar(categorySlug, `
      <section class="catalog-ppe-catalog section-y" id="catalog">
        <div class="page-container">
          ${renderPpeProductSections(products)}
        </div>
      </section>
    `)}
    ${category.ctaSection ? renderPpeCtaSection(category.ctaSection) : ''}
  `;

  initProductAnimations();
  initIcons(root);
}

function renderFireProtectionCategoryPage(categorySlug, root) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return;

  const products = getProductsByCategory(categorySlug);
  const shellBreadcrumbs = document.querySelector('.catalog-breadcrumbs');
  if (shellBreadcrumbs) {
    shellBreadcrumbs.hidden = true;
  }

  root.innerHTML = `
    ${renderCategoryHero(category)}
    ${wrapWithCatalogSidebar(categorySlug, `
      ${renderFireProductSection(category, products)}
    `)}
    ${category.solutionsSection ? renderFireSolutionsSection(category.solutionsSection) : ''}
  `;

  bindFireViewToggle(root);
  bindFireScrollReveal(root);
  initProductAnimations();
  initIcons(root);
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

function renderCategoryPage(categorySlug, root) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return;

  if (category.layout === 'eye-care') {
    renderEyeCareCategoryPage(categorySlug, root);
    return;
  }

  if (category.layout === 'industrial-ppe') {
    renderIndustrialPpeCategoryPage(categorySlug, root);
    return;
  }

  if (category.layout === 'fire-protection') {
    renderFireProtectionCategoryPage(categorySlug, root);
    return;
  }

  const products = getProductsByCategory(categorySlug);
  const filters = category.filters;
  const cardVariant = category.cardVariant ?? 'solid';
  const shellBreadcrumbs = document.querySelector('.catalog-breadcrumbs');
  if (shellBreadcrumbs) {
    shellBreadcrumbs.hidden = true;
  }

  root.innerHTML = `
    ${renderCategoryHero(category)}
    ${wrapWithCatalogSidebar(categorySlug, `
      <section class="catalog-grid-section section-y" id="catalog">
        <div class="page-container">
          ${renderGridSectionHeader(category)}
          ${filters?.length ? renderFilterBar(filters, products.length) : ''}
          <div class="catalog-grid" data-catalog-grid>
            ${products.map((product) => renderProductCard(product, { variant: cardVariant })).join('')}
          </div>
        </div>
      </section>
    `)}
    ${renderTreatmentPacksSection(category.treatmentPacks ?? [])}
    ${renderFeatureSection(category)}
    ${renderInfoSection(category)}
    ${renderFaqSection(category.faqs ?? [])}
    <section class="catalog-footer-cta section-y">
      <div class="page-container text-center">
        <h2 class="font-headline-lg text-3xl uppercase mb-4">Ready to equip your facility?</h2>
        <p class="text-secondary mb-8 max-w-2xl mx-auto">Submit a procurement request for volume pricing, restocking schedules, and compliance documentation.</p>
        <a href="/pages/forms/procurement.html" class="inline-block bg-primary text-white px-12 py-4 font-label-caps text-sm tracking-widest uppercase hover:bg-obsidian transition-colors">Request a Quote</a>
      </div>
    </section>
  `;

  if (filters?.length) {
    bindFilters(root);
  }
  initProductAnimations();
  initIcons(root);
}

/** @param {HTMLElement} root */
function renderHubPage(root) {
  const category = getCategoryBySlug('bulk-medical-supplies');
  if (!category) return;

  const products = getProductsByCategory('bulk-medical-supplies');
  const pageSize = category.hubPageSize ?? 7;
  const totalPages = Math.ceil(products.length / pageSize);
  const shellBreadcrumbs = document.querySelector('.catalog-breadcrumbs');
  if (shellBreadcrumbs) {
    shellBreadcrumbs.hidden = true;
  }

  root.classList.add('catalog-page-root--hub');

  root.innerHTML = `
    ${renderCatalogHubHero(category)}
    ${wrapWithCatalogSidebar('bulk-medical-supplies', `
      <section class="catalog-grid-section catalog-grid-section--hub section-y" id="catalog">
        <div class="page-container">
          <div class="catalog-grid" data-catalog-grid>
            ${products.map((product) => renderProductCard(product, { glass: true })).join('')}
          </div>
          ${renderPagination(totalPages)}
        </div>
      </section>
    `)}
    ${renderInfoSection(category, { hubStyle: true })}
    ${renderFaqSection(category.faqs ?? [], { hubStyle: true })}
  `;

  bindCatalogPagination(root, pageSize);
  initProductAnimations();
  initIcons(root);
}

export function initCatalogPage() {
  const root = document.querySelector('[data-catalog-root]');
  if (!root) return;

  const categorySlug = document.body.dataset.catalogCategory;
  if (categorySlug) {
    renderCategoryPage(categorySlug, root);
    return;
  }

  renderHubPage(root);
}
