/**
 * Eye Care & Safety Stations — Stitch layout (design 39).
 */
import { escapeHtml } from './components.js';

/**
 * @param {import('../../../config/catalog.js').CatalogProduct} product
 */
export function renderEyeCareProductCard(product) {
  const href = product.hasDetailPage
    ? `/pages/catalog/products/${product.slug}.html`
    : '/pages/forms/procurement.html';
  const displayName = product.cardName ?? product.name;
  const displayDescription = product.cardDescription ?? product.description;
  const displayImage = product.cardImage ?? product.image;
  const badgeTone =
    product.badge === 'Best Seller' || product.badge === 'New' ? 'primary' : 'dark';
  const badge = product.badge
    ? `<span class="catalog-eye-card__badge catalog-eye-card__badge--${badgeTone}">${escapeHtml(product.badge)}</span>`
    : '';

  return `
    <article
      class="catalog-eye-card catalog-card product-card group"
      data-filter-tag="${escapeHtml(product.filterTag ?? 'all')}"
      data-category="${escapeHtml(product.categorySlug)}"
    >
      <a href="${href}" class="catalog-eye-card__media">
        ${badge}
        <img
          src="${escapeHtml(displayImage)}"
          alt="${escapeHtml(displayName)}"
          class="catalog-eye-card__image"
          loading="lazy"
          decoding="async"
        >
      </a>
      <div class="catalog-eye-card__body">
        <h3 class="catalog-eye-card__title">
          <a href="${href}" class="hover:text-primary transition-colors">${escapeHtml(displayName)}</a>
        </h3>
        <p class="catalog-eye-card__desc">${escapeHtml(displayDescription)}</p>
        <a href="${href}" class="catalog-eye-card__cta">
          <i data-lucide="send" class="catalog-eye-card__cta-icon"></i>
          Request Quote
        </a>
      </div>
    </article>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogCategory} category
 */
export function renderEyeCareHero(category) {
  const bg = category.heroBackgroundImage ?? category.heroImage ?? '';
  const accent = category.headlineAccent
    ? `<span class="catalog-eye-hero__accent">${escapeHtml(category.headlineAccent)}</span>`
    : '';

  return `
    <header class="catalog-eye-hero">
      <div class="catalog-eye-hero__bg" aria-hidden="true">
        ${bg ? `<img src="${escapeHtml(bg)}" alt="" class="catalog-eye-hero__bg-image">` : ''}
      </div>
      <div class="page-container catalog-eye-hero__content">
        <p class="catalog-eye-hero__eyebrow">${escapeHtml(category.eyebrow)}</p>
        <h1 class="catalog-eye-hero__title">${escapeHtml(category.headline)}<br>${accent}</h1>
        <p class="catalog-eye-hero__desc">${escapeHtml(category.description)}</p>
      </div>
    </header>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogCategory} category
 * @param {import('../../../config/catalog.js').CatalogProduct[]} products
 */
export function renderEyeCareProductSection(category, products) {
  const title = category.productGridTitle ?? category.title;

  return `
    <section class="catalog-eye-grid-section section-y" id="catalog">
      <div class="page-container">
        <div class="catalog-eye-grid-header">
          <div>
            <h2 class="catalog-eye-grid-header__title">${escapeHtml(title)}</h2>
            <div class="catalog-eye-grid-header__bar" aria-hidden="true"></div>
          </div>
        </div>
        <div class="catalog-eye-grid" data-catalog-grid>
          ${products.map((product) => renderEyeCareProductCard(product)).join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * @param {NonNullable<import('../../../config/catalog.js').CatalogCategory['complianceSection']>} section
 */
export function renderEyeCareComplianceSection(section) {
  const items = section.items
    .map(
      (item) => `
        <div class="catalog-eye-compliance__item">
          <div class="catalog-eye-compliance__icon">
            <i data-lucide="${escapeHtml(item.icon)}"></i>
          </div>
          <div>
            <h3 class="catalog-eye-compliance__item-title">${escapeHtml(item.title)}</h3>
            <p class="catalog-eye-compliance__item-text">${escapeHtml(item.text)}</p>
          </div>
        </div>`,
    )
    .join('');

  return `
    <section class="catalog-eye-compliance section-y">
      <div class="catalog-eye-compliance__glow" aria-hidden="true"></div>
      <div class="page-container catalog-eye-compliance__inner">
        <div class="catalog-eye-compliance__grid">
          <div>
            <p class="catalog-eye-compliance__eyebrow">${escapeHtml(section.eyebrow)}</p>
            <h2 class="catalog-eye-compliance__title">${escapeHtml(section.title)}</h2>
            <div class="catalog-eye-compliance__items">${items}</div>
          </div>
          <div class="catalog-eye-compliance__diagram">
            <div class="catalog-eye-compliance__diagram-frame catalog-eye-compliance__diagram-frame--glass">
              <img src="${escapeHtml(section.diagramImage)}" alt="Eyewash station technical diagram">
            </div>
            <div class="catalog-eye-compliance__stat">
              <p class="catalog-eye-compliance__stat-value">${escapeHtml(section.stat.value)}</p>
              <p class="catalog-eye-compliance__stat-label">${escapeHtml(section.stat.label)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * @param {NonNullable<import('../../../config/catalog.js').CatalogCategory['bentoGrid']>} bento
 */
export function renderEyeCareBentoGrid(bento) {
  const [primaryStat, secondaryStat] = bento.stats;

  return `
    <section class="catalog-eye-bento section-y">
      <div class="page-container">
        <div class="catalog-eye-bento__grid">
          <div class="catalog-eye-bento__audit">
            <img src="${escapeHtml(bento.audit.image)}" alt="" class="catalog-eye-bento__audit-bg">
            <div class="catalog-eye-bento__audit-overlay"></div>
            <div class="catalog-eye-bento__audit-content">
              <h3 class="catalog-eye-bento__audit-title">${escapeHtml(bento.audit.title)}</h3>
              <p class="catalog-eye-bento__audit-text">${escapeHtml(bento.audit.text)}</p>
              <a href="/pages/forms/procurement.html" class="catalog-eye-bento__audit-cta">${escapeHtml(bento.audit.ctaLabel)}</a>
            </div>
          </div>
          <div class="catalog-eye-bento__refill">
            <i data-lucide="${escapeHtml(bento.refill.icon)}" class="catalog-eye-bento__refill-icon"></i>
            <h3 class="catalog-eye-bento__refill-title">${escapeHtml(bento.refill.title)}</h3>
            <p class="catalog-eye-bento__refill-text">${escapeHtml(bento.refill.text)}</p>
          </div>
          ${
            primaryStat
              ? `<div class="catalog-eye-bento__stat${primaryStat.accent ? ' catalog-eye-bento__stat--accent' : ''}">
                  <p class="catalog-eye-bento__stat-value">${escapeHtml(primaryStat.value)}</p>
                  <p class="catalog-eye-bento__stat-label">${escapeHtml(primaryStat.label)}</p>
                </div>`
              : ''
          }
          ${
            secondaryStat
              ? `<div class="catalog-eye-bento__stat catalog-eye-bento__stat--muted">
                  <p class="catalog-eye-bento__stat-value">${escapeHtml(secondaryStat.value)}</p>
                  <p class="catalog-eye-bento__stat-label">${escapeHtml(secondaryStat.label)}</p>
                </div>`
              : ''
          }
        </div>
      </div>
    </section>
  `;
}

/**
 * @param {NonNullable<import('../../../config/catalog.js').CatalogCategory['ctaBanner']>} cta
 */
export function renderEyeCareCtaBanner(cta) {
  return `
    <section class="catalog-eye-cta section-y">
      <div class="page-container catalog-eye-cta__inner">
        <h2 class="catalog-eye-cta__title">${escapeHtml(cta.text)}</h2>
        <a href="/pages/forms/procurement.html" class="catalog-eye-cta__button">${escapeHtml(cta.buttonLabel)}</a>
      </div>
    </section>
  `;
}
