/**
 * Industrial Safety & PPE — Stitch layout (design 41).
 */
import { escapeHtml } from './components.js';

/** @type {ReadonlyArray<{ key: string, title: string, gridCols: number }>} */
const PPE_SECTIONS = [
  { key: 'storage', title: 'Storage & Containment', gridCols: 3 },
  { key: 'hand', title: 'Hand Protection', gridCols: 3 },
  { key: 'eye', title: 'Eye Protection & Maintenance', gridCols: 4 },
];

/**
 * @param {import('../../../config/catalog.js').CatalogProduct} product
 */
function renderPpeGlassCard(product) {
  const href = product.hasDetailPage
    ? `/pages/catalog/products/${product.slug}.html`
    : '/pages/forms/procurement.html';
  const displayDescription = product.cardDescription ?? product.description;
  const displayImage = product.cardImage ?? product.image;
  const badge = product.cardBadge ?? product.badge
    ? `<span class="catalog-ppe-card__badge">${escapeHtml(product.cardBadge ?? product.badge)}</span>`
    : '';
  const sizeTags = product.sizeTags?.length
    ? `<div class="catalog-ppe-card__sizes">${product.sizeTags.map((tag) => `<span class="catalog-ppe-card__size">${escapeHtml(tag)}</span>`).join('')}</div>`
    : '';

  return `
    <article
      class="catalog-ppe-card catalog-ppe-card--glass catalog-card product-card group"
      data-filter-tag="${escapeHtml(product.filterTag ?? 'all')}"
      data-search="${escapeHtml(`${product.name} ${displayDescription} ${product.sku}`.toLowerCase())}"
    >
      <a href="${href}" class="catalog-ppe-card__media catalog-ppe-card__media--tall">
        ${badge}
        <img src="${escapeHtml(displayImage)}" alt="${escapeHtml(product.name)}" class="catalog-ppe-card__image" loading="lazy" decoding="async">
      </a>
      <div class="catalog-ppe-card__body">
        ${sizeTags}
        <h3 class="catalog-ppe-card__title">${escapeHtml(product.name)}</h3>
        <p class="catalog-ppe-card__desc">${escapeHtml(displayDescription)}</p>
        <div class="catalog-ppe-card__footer">
          <span class="catalog-ppe-card__sku">ID: ${escapeHtml(product.sku)}</span>
          <a href="${href}" class="catalog-ppe-card__link">
            Request Quote
            <i data-lucide="arrow-right" class="catalog-ppe-card__link-icon"></i>
          </a>
        </div>
      </div>
    </article>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogProduct} product
 */
function renderPpeCompactCard(product) {
  const href = '/pages/forms/procurement.html';

  return `
    <article
      class="catalog-ppe-card catalog-ppe-card--compact catalog-card product-card group"
      data-filter-tag="${escapeHtml(product.filterTag ?? 'all')}"
      data-search="${escapeHtml(`${product.name} ${product.description}`.toLowerCase())}"
    >
      <a href="${href}" class="catalog-ppe-card__media catalog-ppe-card__media--short">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" class="catalog-ppe-card__image" loading="lazy" decoding="async">
      </a>
      <div class="catalog-ppe-card__body">
        <h3 class="catalog-ppe-card__title catalog-ppe-card__title--sm">${escapeHtml(product.name)}</h3>
        <p class="catalog-ppe-card__desc">${escapeHtml(product.description)}</p>
        <a href="${href}" class="catalog-ppe-card__button">Request Quote</a>
      </div>
    </article>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogProduct} product
 */
function renderPpeFeaturedCard(product) {
  const href = '/pages/forms/procurement.html';
  const ctaLabel = product.ctaLabel ?? 'Request Quote';
  const eyebrow = product.productEyebrow
    ? `<span class="catalog-ppe-card__eyebrow">${escapeHtml(product.productEyebrow)}</span>`
    : '';

  return `
    <article
      class="catalog-ppe-card catalog-ppe-card--featured catalog-card product-card group"
      data-filter-tag="${escapeHtml(product.filterTag ?? 'all')}"
      data-search="${escapeHtml(`${product.name} ${product.description}`.toLowerCase())}"
    >
      <div class="catalog-ppe-card__split">
        <a href="${href}" class="catalog-ppe-card__split-media">
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" class="catalog-ppe-card__image" loading="lazy" decoding="async">
        </a>
        <div class="catalog-ppe-card__split-body">
          ${eyebrow}
          <h3 class="catalog-ppe-card__title">${escapeHtml(product.name)}</h3>
          <p class="catalog-ppe-card__desc catalog-ppe-card__desc--lg">${escapeHtml(product.description)}</p>
          <a href="${href}" class="catalog-ppe-card__button catalog-ppe-card__button--outline">${escapeHtml(ctaLabel)}</a>
        </div>
      </div>
    </article>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogProduct} product
 */
export function renderPpeProductCard(product) {
  const style = product.ppeCardStyle ?? 'glass';
  if (style === 'compact') return renderPpeCompactCard(product);
  if (style === 'featured') return renderPpeFeaturedCard(product);
  return renderPpeGlassCard(product);
}

/**
 * @param {import('../../../config/catalog.js').CatalogCategory} category
 */
export function renderPpeHero(category) {
  const bg = category.heroBackgroundImage ?? category.heroImage ?? '';
  const badge = category.heroBadge
    ? `<span class="catalog-ppe-hero__badge">${escapeHtml(category.heroBadge)}</span>`
    : '';
  const accent = category.headlineAccent
    ? `<br><span class="catalog-ppe-hero__accent">${escapeHtml(category.headlineAccent)}</span>`
    : '';

  return `
    <header class="catalog-ppe-hero">
      <div class="catalog-ppe-hero__bg" aria-hidden="true">
        ${bg ? `<img src="${escapeHtml(bg)}" alt="" class="catalog-ppe-hero__bg-image">` : ''}
      </div>
      <div class="page-container catalog-ppe-hero__content">
        ${badge}
        <h1 class="catalog-ppe-hero__title">${escapeHtml(category.headline)}${accent}</h1>
        <p class="catalog-ppe-hero__desc">${escapeHtml(category.description)}</p>
      </div>
    </header>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogFilter[]} filters
 */
export function renderPpeToolbar(filters) {
  const tabs = filters
    .map(
      (filter, index) => `
        <button
          type="button"
          class="catalog-ppe-toolbar__tab${index === 0 ? ' is-active' : ''}"
          data-filter="${escapeHtml(filter.id)}"
        >${escapeHtml(filter.label)}</button>`,
    )
    .join('');

  return `
    <section class="catalog-ppe-toolbar" data-catalog-ppe-toolbar>
      <div class="page-container catalog-ppe-toolbar__inner">
        <div class="catalog-ppe-toolbar__tabs" data-catalog-filter>${tabs}</div>
        <label class="catalog-ppe-toolbar__search">
          <i data-lucide="search" class="catalog-ppe-toolbar__search-icon"></i>
          <input
            type="search"
            class="catalog-ppe-toolbar__search-input"
            placeholder="Search Catalog..."
            data-catalog-search
            aria-label="Search catalog"
          >
        </label>
      </div>
    </section>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogProduct[]} products
 */
export function renderPpeProductSections(products) {
  /** @type {Record<string, import('../../../config/catalog.js').CatalogProduct[]>} */
  const bySection = {};
  for (const product of products) {
    const key = product.ppeSection ?? 'storage';
    if (!bySection[key]) bySection[key] = [];
    bySection[key].push(product);
  }

  return PPE_SECTIONS.map((section) => {
    const sectionProducts = bySection[section.key];
    if (!sectionProducts?.length) return '';

    const cards = sectionProducts.map((product) => renderPpeProductCard(product)).join('');
    const gridClass =
      section.gridCols === 4
        ? 'catalog-ppe-section__grid catalog-ppe-section__grid--eye'
        : 'catalog-ppe-section__grid';

    return `
      <div class="catalog-ppe-section" data-ppe-section="${section.key}">
        <h2 class="catalog-ppe-section__title">
          <span class="catalog-ppe-section__bar" aria-hidden="true"></span>
          ${escapeHtml(section.title)}
        </h2>
        <div class="${gridClass}" data-catalog-grid>
          ${cards}
        </div>
      </div>`;
  }).join('');
}

/**
 * @param {NonNullable<import('../../../config/catalog.js').CatalogCategory['ctaSection']>} cta
 */
export function renderPpeCtaSection(cta) {
  return `
    <section class="catalog-ppe-cta section-y">
      <div class="catalog-ppe-cta__accent" aria-hidden="true"></div>
      <div class="page-container catalog-ppe-cta__inner">
        <h2 class="catalog-ppe-cta__title">${escapeHtml(cta.title)}</h2>
        <p class="catalog-ppe-cta__text">${escapeHtml(cta.text)}</p>
        <div class="catalog-ppe-cta__actions">
          <a href="/pages/forms/procurement.html" class="catalog-ppe-cta__primary">${escapeHtml(cta.primaryLabel)}</a>
          <a href="/pages/forms/procurement.html" class="catalog-ppe-cta__secondary">${escapeHtml(cta.secondaryLabel)}</a>
        </div>
      </div>
    </section>
  `;
}

/** @param {HTMLElement} root */
export function bindPpeFilters(root) {
  const toolbar = root.querySelector('[data-catalog-ppe-toolbar]');
  const filterRoot = root.querySelector('[data-catalog-filter]');
  const searchInput = root.querySelector('[data-catalog-search]');
  if (!toolbar) return;

  const cards = [...root.querySelectorAll('.catalog-card')];
  const sections = [...root.querySelectorAll('[data-ppe-section]')];
  let activeFilter = 'all';

  /** @param {string} query */
  function applyFilters(query = '') {
    const normalizedQuery = query.trim().toLowerCase();

    for (const card of cards) {
      const tag = card.getAttribute('data-filter-tag') ?? 'all';
      const searchText = card.getAttribute('data-search') ?? '';
      const matchesFilter = activeFilter === 'all' || tag === activeFilter;
      const matchesSearch = !normalizedQuery || searchText.includes(normalizedQuery);
      card.hidden = !(matchesFilter && matchesSearch);
    }

    for (const section of sections) {
      const visibleCards = section.querySelectorAll('.catalog-card:not([hidden])');
      section.hidden = visibleCards.length === 0;
    }
  }

  filterRoot?.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement) || !target.dataset.filter) return;

    filterRoot.querySelectorAll('.catalog-ppe-toolbar__tab').forEach((tab) => {
      tab.classList.toggle('is-active', tab === target);
    });

    activeFilter = target.dataset.filter;
    applyFilters(searchInput instanceof HTMLInputElement ? searchInput.value : '');
  });

  searchInput?.addEventListener('input', () => {
    applyFilters(searchInput instanceof HTMLInputElement ? searchInput.value : '');
  });
}
