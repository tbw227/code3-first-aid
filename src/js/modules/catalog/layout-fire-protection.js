/**
 * Fire Protection Systems — Stitch layout (design 38).
 */
import { escapeHtml } from './components.js';

/**
 * @param {import('../../../config/catalog.js').CatalogProduct} product
 */
export function renderFireProductCard(product) {
  const href = product.hasDetailPage
    ? `/pages/catalog/products/${product.slug}.html`
    : '/pages/forms/procurement.html';
  const displayName = product.cardName ?? product.name;
  const displayDescription = product.cardDescription ?? product.description;
  const displayImage = product.cardImage ?? product.image;
  const badgeLabel = product.cardBadge ?? product.badge;
  const badgeTone = product.cardBadgeTone ?? (badgeLabel === 'Vehicle Ready' ? 'primary' : 'dark');
  const featured = product.fireCardFeatured ? ' catalog-fire-card--featured' : '';
  const badge = badgeLabel
    ? `<span class="catalog-fire-card__badge catalog-fire-card__badge--${badgeTone}">${escapeHtml(badgeLabel)}</span>`
    : '';

  return `
    <article
      class="catalog-fire-card catalog-fire-glass catalog-card product-card group${featured}"
      data-filter-tag="${escapeHtml(product.filterTag ?? 'all')}"
      data-category="${escapeHtml(product.categorySlug)}"
    >
      <a href="${href}" class="catalog-fire-card__media">
        ${badge}
        <img
          src="${escapeHtml(displayImage)}"
          alt="${escapeHtml(displayName)}"
          class="catalog-fire-card__image"
          loading="lazy"
          decoding="async"
        >
      </a>
      <div class="catalog-fire-card__body">
        <h3 class="catalog-fire-card__title">${escapeHtml(displayName)}</h3>
        <p class="catalog-fire-card__desc">${escapeHtml(displayDescription)}</p>
      </div>
      <a href="${href}" class="catalog-fire-card__cta">Request Quote</a>
    </article>
  `;
}

/**
 * @param {NonNullable<import('../../../config/catalog.js').CatalogCategory['procurementCard']>} card
 */
export function renderFireProcurementCard(card) {
  return `
    <article class="catalog-fire-procurement catalog-fire-glass">
      <div class="catalog-fire-procurement__glow" aria-hidden="true"></div>
      <h3 class="catalog-fire-procurement__title">${escapeHtml(card.title)}</h3>
      <p class="catalog-fire-procurement__text">${escapeHtml(card.text)}</p>
      <a href="/pages/forms/procurement.html" class="catalog-fire-procurement__link">
        ${escapeHtml(card.linkLabel)}
        <i data-lucide="arrow-right" class="catalog-fire-procurement__link-icon"></i>
      </a>
    </article>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogCategory} category
 */
export function renderFireHero(category) {
  const accent = category.headlineAccent
    ? `<span class="catalog-fire-hero__accent">${escapeHtml(category.headlineAccent.toUpperCase())}</span>`
    : '';
  const suffix = category.headlineSuffix
    ? ` <span class="catalog-fire-hero__suffix">${escapeHtml(category.headlineSuffix.toUpperCase())}</span>`
    : '';
  const badges = (category.heroBadges ?? [])
    .map(
      (item) => `
        <div class="catalog-fire-hero__badge catalog-fire-glass">
          <i data-lucide="${escapeHtml(item.icon)}" class="catalog-fire-hero__badge-icon"></i>
          <span class="catalog-fire-hero__badge-label">${escapeHtml(item.label)}</span>
        </div>`,
    )
    .join('');

  return `
    <header class="catalog-fire-hero">
      <div class="catalog-fire-hero__watermark" aria-hidden="true">FIRE SAFETY</div>
      <div class="page-container catalog-fire-hero__inner">
        <div class="catalog-fire-hero__content">
          <div class="catalog-fire-hero__eyebrow">
            <span class="catalog-fire-hero__eyebrow-line" aria-hidden="true"></span>
            <span class="catalog-fire-hero__eyebrow-text">${escapeHtml(category.eyebrow)}</span>
          </div>
          <h1 class="catalog-fire-hero__title">
            ${escapeHtml(category.headline).toUpperCase()}<br>
            ${accent}${suffix}
          </h1>
          <p class="catalog-fire-hero__desc">${escapeHtml(category.description)}</p>
          ${badges ? `<div class="catalog-fire-hero__badges">${badges}</div>` : ''}
        </div>
      </div>
      <div class="catalog-fire-hero__diagonal" aria-hidden="true"></div>
    </header>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogCategory} category
 * @param {import('../../../config/catalog.js').CatalogProduct[]} products
 */
export function renderFireProductSection(category, products) {
  const gridTitle = category.productGridTitle ?? 'Fire Suppression Inventory';
  const gridSubtitle =
    category.productGridSubtitle ?? 'Showing all available commercial-grade suppression units';
  const procurementCard = category.procurementCard
    ? renderFireProcurementCard(category.procurementCard)
    : '';

  return `
    <section class="catalog-fire-catalog section-y" id="catalog">
      <div class="page-container">
        <div class="catalog-fire-catalog__header">
          <div>
            <h2 class="catalog-fire-catalog__title">${escapeHtml(gridTitle)}</h2>
            <p class="catalog-fire-catalog__subtitle">${escapeHtml(gridSubtitle)}</p>
          </div>
          <div class="catalog-fire-view-toggle" data-fire-view-toggle role="group" aria-label="Catalog view">
            <button type="button" class="catalog-fire-view-toggle__btn is-active" data-fire-view="grid">Grid View</button>
            <button type="button" class="catalog-fire-view-toggle__btn" data-fire-view="list">List View</button>
          </div>
        </div>
        <div class="catalog-fire-grid" data-catalog-grid data-fire-grid>
          ${products.map((product) => renderFireProductCard(product)).join('')}
          ${procurementCard}
        </div>
      </div>
    </section>
  `;
}

/**
 * @param {NonNullable<import('../../../config/catalog.js').CatalogCategory['solutionsSection']>} section
 */
export function renderFireSolutionsSection(section) {
  const tiles = section.tiles
    .map((tile) => {
      const wide = tile.colspan === 2 ? ' catalog-fire-solutions__tile--wide' : '';
      const imageBg = tile.image
        ? `<div class="catalog-fire-solutions__tile-bg" style="background-image:url('${escapeHtml(tile.image)}')"></div>`
        : '';

      return `
        <article class="catalog-fire-solutions__tile catalog-fire-solutions__tile--${escapeHtml(tile.variant)} catalog-fire-glass${wide}">
          ${imageBg}
          <div class="catalog-fire-solutions__tile-content">
            <i data-lucide="${escapeHtml(tile.icon)}" class="catalog-fire-solutions__tile-icon"></i>
            <h3 class="catalog-fire-solutions__tile-title">${escapeHtml(tile.title)}</h3>
            <p class="catalog-fire-solutions__tile-text">${escapeHtml(tile.text)}</p>
          </div>
        </article>`;
    })
    .join('');

  return `
    <section class="catalog-fire-solutions section-y">
      <div class="page-container">
        <div class="catalog-fire-solutions__header">
          <h2 class="catalog-fire-solutions__title">${escapeHtml(section.title)}</h2>
          <p class="catalog-fire-solutions__subtitle">${escapeHtml(section.subtitle)}</p>
        </div>
        <div class="catalog-fire-solutions__grid">${tiles}</div>
      </div>
    </section>
  `;
}

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

/** @param {HTMLElement} root */
export function bindFireScrollReveal(root) {
  const cards = root.querySelectorAll('.catalog-fire-glass');
  if (!cards.length || !('IntersectionObserver' in window)) return;

  cards.forEach((card) => {
    card.classList.add('catalog-fire-glass--hidden');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('catalog-fire-glass--hidden');
        entry.target.classList.add('catalog-fire-glass--visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 },
  );

  cards.forEach((card) => observer.observe(card));
}
