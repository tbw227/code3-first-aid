/**
 * Catalog UI components — template renderers driven by catalog config props.
 */
import { getCatalogNavCategories, getCategoryPath } from '../../../config/catalog.js';

/** @param {string} text */
export function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** @param {number | undefined} value */
function formatPrice(value) {
  if (value == null) return '';
  return `$${value.toFixed(2)}`;
}

/**
 * @param {import('../../../config/catalog.js').CatalogProduct} product
 * @param {{ variant?: 'solid' | 'outline' }} [options]
 */
export function renderProductCard(product, options = {}) {
  const variant = options.variant ?? 'solid';
  const glass = options.glass ?? false;
  const href = product.hasDetailPage
    ? `/pages/catalog/products/${product.slug}.html`
    : '/pages/forms/procurement.html';
  const badge = product.badge
    ? `<span class="catalog-card__badge${glass ? ' catalog-card__badge--corner' : ''}">${escapeHtml(product.badge)}</span>`
    : '';
  const stock = product.inStock && !product.badge
    ? '<span class="catalog-card__stock">In Stock</span>'
    : '';
  const cardClass = glass ? 'catalog-card catalog-card--glass product-card group' : 'catalog-card product-card group';
  const ctaClass = variant === 'outline'
    ? 'catalog-card__cta catalog-card__cta--outline'
    : 'catalog-card__cta';

  return `
    <article class="${cardClass}" data-filter-tag="${escapeHtml(product.filterTag ?? 'all')}" data-category="${escapeHtml(product.categorySlug)}">
      <a href="${href}" class="catalog-card__media">
        ${badge}
        <img
          src="${escapeHtml(product.image)}"
          alt="${escapeHtml(product.name)}"
          class="catalog-card__image${glass ? ' catalog-card__image--cover' : ''}"
          loading="lazy"
          decoding="async"
        >
      </a>
      <div class="catalog-card__body">
        <h3 class="catalog-card__title">
          <a href="${href}" class="hover:text-primary transition-colors">${escapeHtml(product.name)}</a>
        </h3>
        <p class="catalog-card__desc">${escapeHtml(product.description)}</p>
        ${glass ? '' : `<div class="catalog-card__meta"><span>SKU: ${escapeHtml(product.sku)}</span>${stock}</div>`}
        <a href="${href}" class="${ctaClass}">Request a Quote${variant === 'outline' ? ' →' : ''}</a>
      </div>
    </article>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogCategory} category
 */
export function renderCatalogHubHero(category) {
  const bgSrc = category.heroImage ?? category.heroBackgroundImage ?? '';
  const bg = bgSrc
    ? `<img src="${escapeHtml(bgSrc)}" alt="" class="catalog-hero__bg-image">`
    : '';

  return `
    <header class="catalog-hero catalog-hero--hub">
      <div class="catalog-hero__bg" aria-hidden="true">
        ${bg}
        <div class="catalog-hero__overlay"></div>
      </div>
      <div class="page-container catalog-hero__content catalog-hero__content--wide">
        <h1 class="catalog-hero__title catalog-hero__title--display">${escapeHtml(category.headline)}</h1>
        <p class="catalog-hero__desc catalog-hero__desc--wide">${escapeHtml(category.description)}</p>
      </div>
    </header>
  `;
}

/** @param {number} count */
export function renderStickyToolbar(count) {
  return `
    <section class="catalog-sticky-toolbar" data-catalog-toolbar>
      <div class="page-container catalog-sticky-toolbar__inner">
        <div class="catalog-sticky-toolbar__left">
          <button type="button" class="catalog-sticky-toolbar__filter">
            <i data-lucide="filter" class="catalog-sticky-toolbar__icon"></i>
            Filter
          </button>
          <p class="catalog-sticky-toolbar__count" data-catalog-count>
            <strong>${count}</strong> products found
          </p>
        </div>
        <label class="catalog-sticky-toolbar__sort">
          <span class="catalog-sticky-toolbar__sort-label">Sort by:</span>
          <select class="catalog-sticky-toolbar__select" aria-label="Sort products">
            <option>Best Selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrival</option>
          </select>
        </label>
      </div>
    </section>
  `;
}

/**
 * @param {import('../../config/catalog.js').CatalogCategory} category
 */
export function renderCategoryHero(category) {
  const accent = category.headlineAccent
    ? `<span class="text-primary-container">${escapeHtml(category.headlineAccent)}</span>`
    : '';
  const suffix = category.headlineSuffix
    ? ` ${escapeHtml(category.headlineSuffix)}`
    : '';
  const bgSrc = category.heroImage ?? category.heroBackgroundImage ?? '';
  const bg = bgSrc
    ? `<img src="${escapeHtml(bgSrc)}" alt="" class="catalog-hero__bg-image">`
    : '';

  return `
    <header class="catalog-hero">
      <div class="catalog-hero__bg" aria-hidden="true">
        ${bg}
        <div class="catalog-hero__overlay"></div>
      </div>
      <div class="page-container catalog-hero__content">
        <p class="catalog-hero__eyebrow">${escapeHtml(category.eyebrow)}</p>
        <h1 class="catalog-hero__title">${escapeHtml(category.headline)} ${accent}${suffix}</h1>
        <p class="catalog-hero__desc">${escapeHtml(category.description)}</p>
      </div>
    </header>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogFilter[]} filters
 * @param {number} count
 * @param {{ showSort?: boolean }} [options]
 */
export function renderFilterBar(filters, count, options = {}) {
  const pills = filters
    .map(
      (filter, index) => `
        <button
          type="button"
          class="catalog-filter__pill${index === 0 ? ' is-active' : ''}"
          data-filter="${escapeHtml(filter.id)}"
        >${escapeHtml(filter.label)}</button>`,
    )
    .join('');

  const sort = options.showSort
    ? `<label class="catalog-sort">
        <span class="sr-only">Sort products</span>
        <select class="catalog-sort__select" aria-label="Sort products">
          <option>Sort by: Best Selling</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Name: A–Z</option>
        </select>
      </label>`
    : '';

  return `
    <div class="catalog-toolbar">
      <div class="catalog-filter" data-catalog-filter>
        <span class="catalog-filter__label">Filter by:</span>
        <div class="catalog-filter__pills">${pills}</div>
      </div>
      <div class="catalog-toolbar__right">
        <p class="catalog-toolbar__count" data-catalog-count>${count} products found</p>
        ${sort}
      </div>
    </div>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogCategory} category
 */
export function renderFeatureSection(category) {
  if (!category.features) return '';

  const items = category.features.items
    .map(
      (item) => `
        <div class="catalog-feature">
          <span class="catalog-feature__check" aria-hidden="true">✓</span>
          <div>
            <h3 class="catalog-feature__title">${escapeHtml(item.title)}</h3>
            <p class="catalog-feature__text">${escapeHtml(item.text)}</p>
          </div>
        </div>`,
    )
    .join('');

  const stats = category.stats
    ?.map(
      (stat) => `
        <div class="catalog-stat${stat.accent ? ' catalog-stat--accent' : ''}">
          <p class="catalog-stat__value">${escapeHtml(stat.value)}</p>
          <p class="catalog-stat__label">${escapeHtml(stat.label)}</p>
        </div>`,
    )
    .join('') ?? '';

  const statsGrid = stats
    ? `<div class="catalog-stats">${stats}</div>`
    : `<div class="catalog-features__visual" aria-hidden="true">
        <img src="${escapeHtml(category.heroImage ?? '/images/supplies/safety-supplies-first-aid-kit.png')}" alt="">
      </div>`;

  return `
    <section class="catalog-features section-y">
      <div class="page-container catalog-features__grid">
        <div>
          <h2 class="catalog-features__heading">${escapeHtml(category.features.title)}</h2>
          <p class="catalog-features__intro">Systems engineered for audit-ready compliance and faster emergency response.</p>
          <div class="catalog-features__list">${items}</div>
          <a href="/pages/forms/procurement.html" class="catalog-features__cta">Schedule Safety Consultation</a>
        </div>
        ${statsGrid}
      </div>
    </section>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogTreatmentPack[]} packs
 */
export function renderTreatmentPacksSection(packs) {
  if (!packs?.length) return '';

  const cards = packs
    .map((pack) => {
      const href = pack.productSlug
        ? `/pages/catalog/products/${pack.productSlug}.html`
        : '/pages/forms/procurement.html';
      return `
        <a href="${href}" class="catalog-treatment-card">
          <span class="catalog-treatment-card__icon" data-icon="${escapeHtml(pack.icon)}" aria-hidden="true"></span>
          <h3 class="catalog-treatment-card__title">${escapeHtml(pack.title)}</h3>
          <p class="catalog-treatment-card__desc">${escapeHtml(pack.description)}</p>
          <span class="catalog-treatment-card__link">View Pack Details</span>
        </a>`;
    })
    .join('');

  return `
    <section class="catalog-treatment section-y">
      <div class="page-container">
        <h2 class="catalog-section-title">Specialized Treatment Packs</h2>
        <div class="catalog-treatment__grid">${cards}</div>
      </div>
    </section>
  `;
}

/**
 * @param {import('../../../config/catalog.js').CatalogCategory} category
 */
export function renderGridSectionHeader(category) {
  return `
    <div class="catalog-grid-header">
      <div>
        <h2 class="catalog-grid-header__title">${escapeHtml(category.title)}</h2>
        <p class="catalog-grid-header__desc">${escapeHtml(category.description)}</p>
      </div>
    </div>
  `;
}

/**
 * @param {import('../../config/catalog.js').CatalogCategory} category
 */
export function renderInfoSection(category, options = {}) {
  if (!category.info) return '';

  const hubStyle = options.hubStyle ?? false;

  const leftItems = category.info.left.items
    .map((item) => {
      if (typeof item === 'string') {
        return `<li>${escapeHtml(item)}</li>`;
      }
      const icon = item.icon
        ? `<span class="catalog-info__icon"><i data-lucide="${escapeHtml(item.icon)}"></i></span>`
        : '';
      return `
        <li class="catalog-info__item catalog-info__item--rich">
          ${icon}
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.text)}</span>
          </div>
        </li>`;
    })
    .join('');
  const rightBullets = category.info.right.bullets
    .map((item) => `<li><span class="catalog-info__bullet" aria-hidden="true"></span>${escapeHtml(item)}</li>`)
    .join('');

  const sectionClass = hubStyle ? 'catalog-info catalog-info--hub section-y' : 'catalog-info section-y';

  return `
    <section class="${sectionClass}">
      <div class="page-container catalog-info__grid">
        <div class="catalog-info__panel${hubStyle ? ' catalog-info__panel--plain' : ''}">
          <h2 class="catalog-info__title${hubStyle ? ' catalog-info__title--accent' : ''}">${escapeHtml(category.info.left.title)}</h2>
          <ul class="catalog-info__list catalog-info__list--rich">${leftItems}</ul>
        </div>
        <div class="catalog-info__panel catalog-info__panel--dark${hubStyle ? ' catalog-info__panel--cta' : ''}">
          ${hubStyle ? '<i data-lucide="triangle-alert" class="catalog-info__watermark" aria-hidden="true"></i>' : ''}
          <h2 class="catalog-info__title">${escapeHtml(category.info.right.title)}</h2>
          <p class="catalog-info__text">${escapeHtml(category.info.right.text)}</p>
          <ul class="catalog-info__bullets catalog-info__bullets--rich">${rightBullets}</ul>
        </div>
      </div>
    </section>
  `;
}

/**
 * @param {import('../../config/catalog.js').CatalogFaq[]} faqs
 */
export function renderFaqSection(faqs, options = {}) {
  if (!faqs?.length) return '';

  const hubStyle = options.hubStyle ?? false;

  const items = faqs
    .map(
      (faq) => `
        <article class="catalog-faq${hubStyle ? ' catalog-faq--bordered' : ''}">
          <h3 class="catalog-faq__q">${escapeHtml(faq.q)}</h3>
          <p class="catalog-faq__a">${escapeHtml(faq.a)}</p>
        </article>`,
    )
    .join('');

  return `
    <section class="catalog-faq-section section-y${hubStyle ? ' catalog-faq-section--hub' : ''}">
      <div class="page-container">
        <h2 class="catalog-faq-section__title">Bulk First Aid Supplies FAQs</h2>
        <div class="catalog-faq-section__grid">${items}</div>
      </div>
    </section>
  `;
}

/**
 * @param {ReadonlyArray<{ slug: string, title: string, description: string, heroImage?: string }>} categories
 */
/**
 * @param {string} [activeSlug] — highlights the current category in the nav
 */
export function renderCatalogSidebar(activeSlug) {
  const categories = getCatalogNavCategories();
  const links = categories
    .map((category) => {
      const href = `${getCategoryPath(category.slug)}.html`;
      const isActive = activeSlug === category.slug;
      const label = category.navLabel ?? category.title;
      return `
        <a
          href="${href}"
          class="catalog-sidebar__link${isActive ? ' is-active' : ''}"
          ${isActive ? 'aria-current="page"' : ''}
        >${escapeHtml(label)}</a>`;
    })
    .join('');

  return `
    <aside class="catalog-sidebar" aria-label="Catalog categories">
      <p class="catalog-sidebar__heading">Categories</p>
      <nav class="catalog-sidebar__nav">${links}</nav>
      <a href="/pages/forms/procurement.html" class="catalog-sidebar__quote">Request a Quote</a>
    </aside>`;
}

/**
 * @param {string | undefined} activeSlug
 * @param {string} content
 * @param {{ variant?: 'default' | 'product' }} [options]
 */
export function wrapWithCatalogSidebar(activeSlug, content, options = {}) {
  const layoutClass = options.variant === 'product' ? ' catalog-layout--product' : '';
  return `
    <div class="catalog-layout${layoutClass}">
      ${renderCatalogSidebar(activeSlug)}
      <div class="catalog-layout__main">${content}</div>
    </div>`;
}

export function renderCategoryCards(categories) {
  return categories
    .map(
      (category) => `
        <a href="/pages/catalog/${category.slug}.html" class="catalog-category-card">
          <div class="catalog-category-card__media">
            <img src="${escapeHtml(category.heroImage ?? '/images/supplies/safety-supplies-first-aid-kit.png')}" alt="">
          </div>
          <div class="catalog-category-card__body">
            <h3 class="catalog-category-card__title">${escapeHtml(category.title)}</h3>
            <p class="catalog-category-card__desc">${escapeHtml(category.description)}</p>
            <span class="catalog-category-card__link">Browse category →</span>
          </div>
        </a>`,
    )
    .join('');
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
export function renderProductSpecs(product) {
  if (!product.specs?.length || product.specGroups || product.specColumns) return '';

  const rows = product.specs
    .map(
      (spec) => `
        <div class="product-specs__row">
          <dt>${escapeHtml(spec.label)}</dt>
          <dd>${escapeHtml(spec.value)}</dd>
        </div>`,
    )
    .join('');

  return `
    <section class="product-specs section-y">
      <div class="page-container">
        <h2 class="product-specs__title">Technical Specifications</h2>
        <dl class="product-specs__grid">${rows}</dl>
      </div>
    </section>
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
export function renderProductFeatureCards(product) {
  if (!product.featureCards?.length || product.spotlight) return '';

  const cards = product.featureCards
    .map(
      (card) => `
        <article class="product-feature-card">
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.text)}</p>
        </article>`,
    )
    .join('');

  return `
    <section class="product-feature-cards section-y">
      <div class="page-container product-feature-cards__grid">${cards}</div>
    </section>
  `;
}

export function renderPagination(totalPages) {
  if (totalPages <= 1) return '';

  const pageLinks = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const active = page === 1;
    return `<a href="#" class="catalog-pagination__link${active ? ' is-active' : ''}" data-page="${page}"${active ? ' aria-current="page"' : ''}>${page}</a>`;
  }).join('');

  return `
    <nav class="catalog-pagination" data-catalog-pagination aria-label="Catalog pagination">
      <button type="button" class="catalog-pagination__link catalog-pagination__prev is-disabled" data-page="prev" aria-disabled="true" disabled>← Prev</button>
      ${pageLinks}
      <button type="button" class="catalog-pagination__link catalog-pagination__next" data-page="next"${totalPages === 1 ? ' aria-disabled="true" disabled' : ''}>Next →</button>
    </nav>
  `;
}

export function renderBulkQuoteCta() {
  return `
    <section class="catalog-bulk-cta">
      <div class="page-container catalog-bulk-cta__inner">
        <div>
          <h2>Need a Bulk Quote?</h2>
          <p>Tiered pricing for fleet orders, multi-site restocking, and annual supply contracts.</p>
        </div>
        <a href="/pages/forms/procurement.html" class="catalog-bulk-cta__button">Request Volume Pricing</a>
      </div>
    </section>
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
export function renderProductHero(product, category) {
  const priceBlock = product.price
    ? `<p class="product-hero__price">${formatPrice(product.price)}${product.compareAtPrice ? `<span class="product-hero__compare">${formatPrice(product.compareAtPrice)}</span>` : ''}${product.detailLayout === 'bleeding-control' ? '<span class="product-hero__price-note">Bulk pricing available for corporate accounts</span>' : ''}</p>`
    : '';
  const rating = product.rating
    ? `<p class="product-hero__rating">${escapeHtml(product.rating)}</p>`
    : '';
  const badge = product.badge
    ? `<span class="product-hero__badge">${escapeHtml(product.badge)}</span>`
    : '';
  const compliance = product.complianceBadge
    ? `<span class="product-hero__compliance">${escapeHtml(product.complianceBadge)}</span>`
    : '';
  const tagline = product.tagline
    ? `<p class="product-hero__tagline">${escapeHtml(product.tagline)}</p>`
    : '';
  const primaryCta = product.detailLayout === 'bleeding-control' ? 'Add to Quote' : 'Add to Quote';
  const secondaryCta = product.detailLayout === 'cpr-padz' ? 'Request Bulk Quote' : product.detailLayout === 'extinguisher' ? 'Download Data Sheet' : 'Request Bulk Quote';

  const highlights = product.highlights
    ?.map(
      (item) => `
        <li class="product-hero__highlight">
          <span class="product-hero__check" aria-hidden="true"></span>
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            ${escapeHtml(item.text)}
          </div>
        </li>`,
    )
    .join('') ?? '';

  const highlightChips = product.detailLayout === 'bleeding-control' && product.highlights
    ? `<div class="product-hero__chips">${product.highlights.map((item) => `<span class="product-hero__chip">${escapeHtml(item.title)}</span>`).join('')}</div>`
    : '';

  return `
    <section class="product-hero section-y">
      <div class="page-container product-hero__grid">
        <div class="product-hero__gallery">
          <div class="product-hero__main">
            ${badge}
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}">
          </div>
        </div>
        <div class="product-hero__info">
          <div class="product-hero__meta-row">
            <p class="product-hero__sku">SKU: ${escapeHtml(product.sku)}</p>
            ${compliance}
          </div>
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          ${tagline}
          ${rating}
          ${priceBlock}
          <p class="product-hero__desc">${escapeHtml(product.description)}</p>
          ${highlightChips}
          ${!highlightChips && highlights ? `<ul class="product-hero__highlights">${highlights}</ul>` : ''}
          <div class="product-hero__actions">
            <a href="/pages/forms/procurement.html" class="product-hero__cta product-hero__cta--primary">${primaryCta}</a>
            <a href="/pages/forms/procurement.html" class="product-hero__cta product-hero__cta--secondary">${secondaryCta}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
export function renderMarketingSection(product) {
  if (!product.marketingSection) return '';

  const cards = product.marketingSection.items
    .map(
      (item) => `
        <article class="product-marketing-card">
          <span class="product-marketing-card__accent" aria-hidden="true"></span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>`,
    )
    .join('');

  return `
    <section class="product-marketing section-y">
      <div class="page-container">
        <h2 class="product-marketing__title">${escapeHtml(product.marketingSection.title)}</h2>
        <p class="product-marketing__desc">${escapeHtml(product.marketingSection.description)}</p>
        <div class="product-marketing__grid">${cards}</div>
      </div>
    </section>
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
export function renderCompatibilitySection(product) {
  if (!product.compatibility) return '';

  const options = product.compatibility.models
    .map((model) => `<option>${escapeHtml(model)}</option>`)
    .join('');
  const notes = product.compatibility.notes
    .map((note) => `<li>${escapeHtml(note)}</li>`)
    .join('');

  return `
    <section class="product-compat section-y">
      <div class="page-container">
        <div class="product-compat__panel">
          <div class="product-compat__form">
            <h2 class="product-compat__title">Check Compatibility</h2>
            <p class="product-compat__text">Select your AED model to verify electrode fit before ordering.</p>
            <label class="product-compat__label" for="compat-model">Select your device model</label>
            <select id="compat-model" class="product-compat__select">${options}</select>
            <a href="/pages/forms/procurement.html" class="product-compat__button">Verify Fit</a>
          </div>
          <div class="product-compat__notes">
            <h3>Compatibility Notes</h3>
            <ul>${notes}</ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
export function renderProductSpecGroups(product) {
  if (!product.specGroups?.length) return '';

  const groups = product.specGroups
    .map(
      (group) => `
        <article class="product-spec-group">
          <h3 class="product-spec-group__title">${escapeHtml(group.title)}</h3>
          <dl class="product-spec-group__rows">
            ${group.rows.map((row) => `
              <div class="product-spec-group__row">
                <dt>${escapeHtml(row.label)}</dt>
                <dd>${escapeHtml(row.value)}</dd>
              </div>`).join('')}
          </dl>
        </article>`,
    )
    .join('');

  return `
    <section class="product-spec-groups section-y">
      <div class="page-container">
        <h2 class="product-spec-groups__title"><span aria-hidden="true">|</span> Technical Specifications</h2>
        <div class="product-spec-groups__grid">${groups}</div>
      </div>
    </section>
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
export function renderProductHighlightCards(product) {
  if (!product.highlightCards?.length) return '';

  const cards = product.highlightCards
    .map(
      (card) => `
        <article class="product-highlight-card" style="background-image: url('${escapeHtml(card.image)}')">
          <div class="product-highlight-card__overlay">
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.text)}</p>
          </div>
        </article>`,
    )
    .join('');

  return `
    <section class="product-highlight-cards section-y">
      <div class="page-container product-highlight-cards__grid">${cards}</div>
    </section>
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
export function renderFleetQuoteSection(product) {
  return `
    <section class="product-fleet-quote section-y">
      <div class="page-container">
        <div class="product-fleet-quote__panel">
          <div class="product-fleet-quote__copy">
            <p class="product-fleet-quote__eyebrow">Fleet Solutions</p>
            <h2>Get Bulk Fleet Quote</h2>
            <p>Outfit your entire facility or vehicle fleet with professional-grade safety equipment. We offer volume pricing and scheduled maintenance plans for enterprise clients.</p>
            <div class="product-fleet-quote__actions">
              <a href="/pages/forms/procurement.html" class="product-fleet-quote__cta product-fleet-quote__cta--primary">Request Pricing</a>
              <a href="/pages/forms/procurement.html" class="product-fleet-quote__cta product-fleet-quote__cta--ghost">Download Data Sheet</a>
            </div>
          </div>
          <form class="product-fleet-quote__form" action="/pages/forms/procurement.html">
            <label>
              <span>Company Name</span>
              <input type="text" name="company" placeholder="Organization LLC">
            </label>
            <label>
              <span>Estimated Quantity</span>
              <select name="quantity">
                <option>10 – 50 Units</option>
                <option>51 – 100 Units</option>
                <option>100+ Units</option>
              </select>
            </label>
            <label>
              <span>Contact Email</span>
              <input type="email" name="email" placeholder="you@company.com">
            </label>
            <button type="submit" class="product-fleet-quote__submit">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
export function renderSpecColumns(product) {
  if (!product.specColumns) return '';

  const left = product.specColumns.left
    .map((row) => `<li><strong>${escapeHtml(row.label)}</strong> ${escapeHtml(row.value)}</li>`)
    .join('');
  const middle = product.specColumns.middle
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');
  const right = product.specColumns.right
    .map((row) => `<li><strong>${escapeHtml(row.label)}</strong> ${escapeHtml(row.value)}</li>`)
    .join('');

  return `
    <section class="product-spec-columns section-y">
      <div class="page-container">
        <p class="product-spec-columns__eyebrow">Engineering Data</p>
        <h2 class="product-spec-columns__title">${escapeHtml(product.specColumns.title)}</h2>
        <div class="product-spec-columns__grid">
          <article>
            <h3>Regulatory Compliance</h3>
            <ul>${left}</ul>
          </article>
          <article>
            <h3>Pack Contents</h3>
            <ul>${middle}</ul>
          </article>
          <article>
            <h3>Physical Attributes</h3>
            <ul>${right}</ul>
          </article>
        </div>
      </div>
    </section>
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
export function renderComponentSpotlight(product) {
  if (!product.spotlight) return '';

  const features = product.spotlight.features
    .map(
      (feature) => `
        <div class="product-spotlight__feature">
          <h4>${escapeHtml(feature.title)}</h4>
          <p>${escapeHtml(feature.text)}</p>
        </div>`,
    )
    .join('');

  return `
    <section class="product-spotlight section-y">
      <div class="page-container product-spotlight__grid">
        <div class="product-spotlight__visual">
          <img src="${escapeHtml(product.spotlight.image)}" alt="${escapeHtml(product.spotlight.title)} diagram">
        </div>
        <div>
          <p class="product-spotlight__eyebrow">${escapeHtml(product.spotlight.eyebrow)}</p>
          <h2 class="product-spotlight__title">${escapeHtml(product.spotlight.title)}</h2>
          <p class="product-spotlight__desc">${escapeHtml(product.spotlight.description)}</p>
          <div class="product-spotlight__features">${features}</div>
        </div>
      </div>
    </section>
  `;
}
