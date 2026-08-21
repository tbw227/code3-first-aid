/**
 * Stitch product detail layouts (designs 44–63).
 */
import {
  renderBulkQuoteCta,
  renderCompatibilitySection,
  renderFleetQuoteSection,
  renderMarketingSection,
  renderProductFeatureCards,
  renderProductHero,
  renderProductHighlightCards,
  renderProductSpecGroups,
  renderProductSpecs,
  renderSpecColumns,
  renderComponentSpotlight,
  escapeHtml,
} from './components.js';

/** @param {number | undefined} value */
function formatPrice(value) {
  if (value == null) return '';
  return `$${value.toFixed(2)}`;
}

/**
 * @param {import('../../../config/catalog.js').CatalogProduct} product
 * @param {{ tall?: boolean }} [options]
 */
function renderGallery(product, options = {}) {
  const images = product.gallery?.length ? product.gallery : [product.image];
  const badges = [
    product.badge,
    ...(product.heroBadges ?? []),
    product.complianceBadge,
  ].filter(Boolean);

  const badgeHtml = badges
    .map(
      (label, index) =>
        `<span class="pd-gallery__badge${index === 0 ? ' pd-gallery__badge--primary' : ''}">${escapeHtml(label)}</span>`,
    )
    .join('');

  const thumbs = images
    .slice(1)
    .map(
      (src, index) => `
        <button type="button" class="pd-gallery__thumb${index === 0 ? ' is-active' : ''}" data-gallery-thumb="${escapeHtml(src)}">
          <img src="${escapeHtml(src)}" alt="">
        </button>`,
    )
    .join('');

  return `
    <div class="pd-gallery${options.tall ? ' pd-gallery--tall' : ''}" data-product-gallery>
      <div class="pd-gallery__main">
        ${badgeHtml ? `<div class="pd-gallery__badges">${badgeHtml}</div>` : ''}
        <img src="${escapeHtml(images[0])}" alt="${escapeHtml(product.name)}" data-gallery-main>
      </div>
      ${thumbs ? `<div class="pd-gallery__thumbs">${thumbs}</div>` : ''}
    </div>`;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderQuoteActions(product) {
  const primary = product.primaryCtaLabel ?? 'Add to Quote';
  const secondary = product.secondaryCtaLabel ?? 'Request Bulk Quote';

  return `
    <div class="pd-actions">
      <a href="/pages/forms/procurement.html" class="pd-actions__primary">${escapeHtml(primary)}</a>
      <a href="/pages/forms/procurement.html" class="pd-actions__secondary">${escapeHtml(secondary)}</a>
    </div>`;
}

/** @param {ReadonlyArray<{ label: string, value: string }> | undefined} specs */
function renderQuickSpecs(specs) {
  if (!specs?.length) return '';
  return `
    <div class="pd-quick-specs">
      ${specs.map((spec) => `
        <div class="pd-quick-specs__cell">
          <span class="pd-quick-specs__label">${escapeHtml(spec.label)}</span>
          <span class="pd-quick-specs__value">${escapeHtml(spec.value)}</span>
        </div>`).join('')}
    </div>`;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderExtinguisherPage(product, category) {
  const trust = product.trustBadges
    ?.map(
      (item) => `
        <div class="pd-trust">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <span>${escapeHtml(item.label)}</span>
        </div>`,
    )
    .join('');

  const plans = product.maintenancePlans
    ?.map(
      (plan) => `
        <div class="pd-plan${plan.selected ? ' pd-plan--selected' : ''}">
          <div>
            <strong>${escapeHtml(plan.title)}</strong>
            <span>${escapeHtml(plan.subtitle)}</span>
          </div>
          ${plan.selected ? '<i data-lucide="circle-check"></i>' : plan.addon ? `<span class="pd-plan__addon">${escapeHtml(plan.addon)}</span>` : ''}
        </div>`,
    )
    .join('');

  return `
    <section class="pd-hero section-y">
      <div class="page-container pd-hero__grid">
        ${renderGallery(product)}
        <div class="pd-hero__info">
          ${product.heroBadges?.[0] ? `<p class="pd-tagline pd-tagline--pill">${escapeHtml(product.heroBadges[0])}</p>` : ''}
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          <div class="pd-meta-row">
            ${product.price ? `<p class="product-hero__price">${formatPrice(product.price)}${product.compareAtPrice ? `<span class="product-hero__compare">${formatPrice(product.compareAtPrice)}</span>` : ''}${product.savePercent ? `<span class="pd-save-badge">Save ${product.savePercent}%</span>` : ''}</p>` : ''}
            <span class="product-hero__sku">SKU: ${escapeHtml(product.sku)}</span>
          </div>
          <p class="product-hero__desc">${escapeHtml(product.description)}</p>
          ${plans ? `
            <div class="pd-plans">
              <p class="pd-plans__label">Select Maintenance Plan</p>
              ${plans}
            </div>` : product.highlights ? `<ul class="pd-icon-list">${product.highlights.map((item) => `
            <li class="pd-icon-list__item">
              <i data-lucide="shield-check" class="pd-icon-list__icon"></i>
              <div><strong>${escapeHtml(item.title)}</strong> ${escapeHtml(item.text)}</div>
            </li>`).join('')}</ul>` : ''}
          <div class="pd-actions">
            <a href="/pages/forms/procurement.html" class="pd-actions__primary pd-actions__primary--wide">${escapeHtml(product.primaryCtaLabel ?? 'Request Quantity Quote')}</a>
            <a href="/pages/forms/procurement.html" class="pd-actions__secondary pd-actions__secondary--block">${escapeHtml(product.secondaryCtaLabel ?? 'Download Data Sheet (PDF)')}</a>
          </div>
          ${trust ? `<div class="pd-trust-row">${trust}</div>` : ''}
        </div>
      </div>
    </section>
    ${product.industrialSpecCards ? renderIndustrialSpecCards(product) : renderProductSpecGroups(product)}
    ${product.whatsInBox ? renderWhatsInBox(product.whatsInBox) : renderProductHighlightCards(product)}
    ${product.ecosystemSection ? renderEcosystemSection(product.ecosystemSection) : ''}
    ${product.inspectionCta ? renderInspectionCta(product.inspectionCta) : renderFleetQuoteSection(product)}
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderExtinguisherCompactPage(product, category) {
  return `
    <section class="pd-hero section-y">
      <div class="page-container pd-hero__grid">
        ${renderGallery(product)}
        <div class="pd-hero__info">
          <div class="pd-meta-tags">
            ${product.badge ? `<span class="pd-meta-tags__accent">${escapeHtml(product.badge)}</span>` : ''}
            <span class="pd-meta-tags__sku">SKU: ${escapeHtml(product.sku)}</span>
          </div>
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          ${product.price ? `<p class="pd-price-line">${formatPrice(product.price)} <span>${escapeHtml(product.priceNote ?? 'USD / Per Unit')}</span></p>` : ''}
          ${product.quoteDescription ? `<blockquote class="pd-quote-box">${escapeHtml(product.quoteDescription)}</blockquote>` : ''}
          ${renderQuickSpecs(product.quickSpecs)}
          ${renderQuoteActions(product)}
          <p class="pd-compliance-line"><i data-lucide="shield-check"></i> Certified compliant with OSHA &amp; NFPA standards</p>
        </div>
      </div>
    </section>
    ${product.reliabilitySection ? renderReliabilitySection(product.reliabilitySection) : ''}
    ${product.bulkFleetCta ? renderLightFleetCta(product.bulkFleetCta) : ''}
  `;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['reliabilitySection']>} section */
function renderReliabilitySection(section) {
  const items = section.items
    .map(
      (item) => `
        <div class="pd-reliability__item">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </div>`,
    )
    .join('');

  return `
    <section class="pd-reliability section-y">
      <div class="page-container pd-reliability__grid">
        <div>
          <p class="pd-reliability__eyebrow">${escapeHtml(section.eyebrow)}</p>
          <h2 class="pd-reliability__title">${escapeHtml(section.title)}</h2>
          <div class="pd-reliability__items">${items}</div>
        </div>
        <div class="pd-reliability__visual">
          <img src="${escapeHtml(section.image)}" alt="">
        </div>
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['bulkFleetCta']>} cta */
function renderLightFleetCta(cta) {
  return `
    <section class="pd-fleet-light section-y">
      <div class="page-container pd-fleet-light__inner">
        <h2>${escapeHtml(cta.title)}</h2>
        <p>${escapeHtml(cta.text)}</p>
        <div class="pd-fleet-light__actions">
          <a href="/pages/forms/procurement.html" class="pd-actions__primary">${escapeHtml(cta.primaryLabel)}</a>
          ${cta.secondaryLabel ? `<a href="/pages/forms/procurement.html" class="pd-actions__secondary">${escapeHtml(cta.secondaryLabel)}</a>` : ''}
        </div>
      </div>
    </section>`;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderFirstAidCabinetPage(product, category) {
  const checklist = product.checklist
    ?.map(
      (item) => `
        <li class="pd-checklist__item">
          <i data-lucide="circle-check"></i>
          <span>${escapeHtml(item)}</span>
        </li>`,
    )
    .join('');

  const trust = product.trustBadges
    ?.map(
      (item) => `
        <div class="pd-trust">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <span>${escapeHtml(item.label)}</span>
        </div>`,
    )
    .join('');

  return `
    <section class="pd-hero section-y">
      <div class="page-container pd-hero__grid pd-hero__grid--wide">
        ${renderGallery(product, { tall: true })}
        <div class="pd-hero__info">
          ${product.productEyebrow ? `<p class="pd-tagline">${escapeHtml(product.productEyebrow)}</p>` : ''}
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          <div class="pd-meta-row">
            <span class="product-hero__sku">SKU: ${escapeHtml(product.sku)}</span>
            ${product.reviewCount ? `<span class="pd-reviews">${escapeHtml(String(product.reviewCount))} Reviews</span>` : ''}
          </div>
          ${product.price ? `<div class="pd-price-box"><span class="pd-price-box__value">${formatPrice(product.price)}</span><span class="pd-price-box__note">${escapeHtml(product.priceNote ?? 'USD / Per Unit')}</span></div>` : ''}
          <p class="product-hero__desc">${escapeHtml(product.description)}</p>
          ${checklist ? `<ul class="pd-checklist">${checklist}</ul>` : ''}
          ${renderQuoteActions(product)}
          ${product.stockNote ? `<p class="pd-stock-banner"><i data-lucide="package"></i> ${escapeHtml(product.stockNote)}</p>` : ''}
          ${trust ? `<div class="pd-trust-row">${trust}</div>` : ''}
        </div>
      </div>
    </section>
    ${product.complianceSection ? renderComplianceStandards(product.complianceSection) : product.standardsBand ? renderStandardsBand(product.standardsBand) : ''}
    ${product.kitInventory ? renderKitInventory(product.kitInventory) : ''}
    ${product.bentoSpecs ? renderBentoSpecs(product.bentoSpecs) : ''}
    ${product.refillBanner ? renderRefillBanner(product.refillBanner) : ''}
  `;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['bentoSpecs']>} tiles */
function renderBentoSpecs(tiles) {
  return `
    <section class="pd-bento-specs section-y">
      <div class="page-container">
        <p class="pd-bento-specs__eyebrow">Technical Data</p>
        <h2 class="pd-bento-specs__title">System Specifications</h2>
        <div class="pd-bento-specs__grid">
          ${tiles.map((tile) => `
            <article class="pd-bento-specs__tile${tile.accent ? ' pd-bento-specs__tile--accent' : ''}${tile.image ? ' pd-bento-specs__tile--image' : ''}">
              ${tile.image ? `<img src="${escapeHtml(tile.image)}" alt="" class="pd-bento-specs__bg">` : ''}
              ${tile.icon ? `<i data-lucide="${escapeHtml(tile.icon)}"></i>` : ''}
              ${tile.stat ? `<p class="pd-bento-specs__stat">${escapeHtml(tile.stat)}</p>` : ''}
              <h3>${escapeHtml(tile.title)}</h3>
              <p>${escapeHtml(tile.text)}</p>
            </article>`).join('')}
        </div>
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['standardsBand']>} band */
function renderStandardsBand(band) {
  return `
    <section class="pd-standards section-y">
      <div class="page-container pd-standards__inner">
        <i data-lucide="shield-check" class="pd-standards__icon"></i>
        <div>
          <h2>${escapeHtml(band.title)}</h2>
          <p>${escapeHtml(band.text)}</p>
        </div>
        <div class="pd-standards__badges">
          ${band.badges.map((badge) => `<span>${escapeHtml(badge)}</span>`).join('')}
        </div>
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['kitInventory']>} columns */
function renderKitInventory(columns) {
  return `
    <section class="pd-inventory section-y">
      <div class="page-container">
        <div class="pd-inventory__header">
          <div>
            <p class="pd-inventory__eyebrow">What's Inside</p>
            <h2 class="pd-inventory__title">Kit Inventory</h2>
          </div>
          <a href="/pages/forms/procurement.html" class="pd-inventory__download">Download PDF Contents</a>
        </div>
        <div class="pd-inventory__grid">
          ${columns.map((col) => `
            <div>
              <h3>${escapeHtml(col.category)}</h3>
              <ul>${col.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderGasCagePage(product, category) {
  return `
    <section class="pd-hero section-y">
      <div class="page-container pd-hero__grid pd-hero__grid--wide">
        ${renderGallery(product, { tall: true })}
        <div class="pd-hero__info">
          ${product.productEyebrow ? `<p class="pd-tagline">${escapeHtml(product.productEyebrow)}</p>` : ''}
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          ${product.price ? `<p class="pd-price-line">${formatPrice(product.price)}${product.compareAtPrice ? `<span class="product-hero__compare">${formatPrice(product.compareAtPrice)}</span>` : ''} <span>${escapeHtml(product.priceNote ?? 'USD + Shipping')}</span></p>` : ''}
          <p class="product-hero__desc">${escapeHtml(product.quoteDescription ?? product.description)}</p>
          ${renderQuickSpecs(product.quickSpecs)}
          ${renderQuoteActions(product)}
          ${product.trustBadges ? `<div class="pd-trust-row pd-trust-row--inline">${product.trustBadges.map((item) => `<span><i data-lucide="${escapeHtml(item.icon)}"></i> ${escapeHtml(item.label)}</span>`).join('')}</div>` : ''}
        </div>
      </div>
    </section>
    ${product.reliabilityFeatures ? renderReliabilityFeatures(product.reliabilityFeatures) : product.coreFeatures ? renderCoreFeatures(product.coreFeatures) : ''}
    ${product.logisticsSection ? renderLogisticsSection(product.logisticsSection) : ''}
    ${product.fullSpecsTable ? renderFullSpecsTable(product.fullSpecsTable) : product.installSpecs ? renderDarkSpecPanel(product) : ''}
    ${product.commercialQuoteCta ? renderCommercialCta(product.commercialQuoteCta) : ''}
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderDarkSpecPanel(product) {
  const rows = product.installSpecs
    ?.map(
      (row) => `
        <div class="pd-dark-specs__row">
          <span>${escapeHtml(row.label)}</span>
          <span>${escapeHtml(row.value)}</span>
        </div>`,
    )
    .join('');

  const vigilance = product.vigilancePanel;

  return `
    <section class="pd-dark-specs section-y">
      <div class="page-container pd-dark-specs__grid">
        <div>
          <h2>Technical Specifications</h2>
          <div class="pd-dark-specs__rows">${rows}</div>
        </div>
        ${vigilance ? `
          <aside class="pd-vigilance">
            <i data-lucide="shield-check"></i>
            <h3>${escapeHtml(vigilance.title)}</h3>
            <p>${escapeHtml(vigilance.text)}</p>
            <ul>${vigilance.stats.map((stat) => `<li>${escapeHtml(stat)}</li>`).join('')}</ul>
          </aside>` : ''}
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['coreFeatures']>} features */
function renderCoreFeatures(features) {
  return `
    <section class="pd-core-features section-y">
      <div class="page-container">
        <p class="pd-core-features__eyebrow">Core Features</p>
        <h2 class="pd-core-features__title">Precision Engineered Safety</h2>
        <div class="pd-core-features__grid">
          ${features.map((feature) => `
            <article>
              <i data-lucide="${escapeHtml(feature.icon)}"></i>
              <h3>${escapeHtml(feature.title)}</h3>
              <p>${escapeHtml(feature.text)}</p>
            </article>`).join('')}
        </div>
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['commercialQuoteCta']>} cta */
function renderCommercialCta(cta) {
  return `
    <section class="pd-commercial-cta section-y">
      <div class="page-container pd-commercial-cta__inner">
        <div>
          <h2>${escapeHtml(cta.title)}</h2>
          <p>${escapeHtml(cta.text)}</p>
        </div>
        <a href="/pages/forms/procurement.html" class="pd-actions__primary">${escapeHtml(cta.buttonLabel)}</a>
      </div>
    </section>`;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderEyewashPage(product, category) {
  const checklist = product.checklist
    ?.map((item) => `<li><i data-lucide="circle-check"></i><span>${escapeHtml(item)}</span></li>`)
    .join('');

  const manifest = product.manifest
    ?.map(
      (item) => `
        <div class="pd-manifest__item">
          <div class="pd-manifest__icon"><i data-lucide="${escapeHtml(item.icon)}"></i></div>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </div>`,
    )
    .join('');

  const installRows = product.installSpecs
    ?.map(
      (row) => `
        <li><span>${escapeHtml(row.label)}</span><span>${escapeHtml(row.value)}</span></li>`,
    )
    .join('');

  const techCols = product.techData
    ?.map(
      (col) => `
        <div>
          <p class="pd-tech__label">${escapeHtml(col.title)}</p>
          <p>${escapeHtml(col.text)}</p>
        </div>`,
    )
    .join('');

  return `
    <section class="pd-hero section-y">
      <div class="page-container pd-hero__grid pd-hero__grid--wide">
        ${renderGallery(product, { tall: true })}
        <div class="pd-hero__info">
          ${product.tagline ? `<p class="pd-tagline">${escapeHtml(product.tagline)}</p>` : ''}
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          ${product.price ? `<p class="product-hero__price">${formatPrice(product.price)}${product.compareAtPrice ? `<span class="product-hero__compare">${formatPrice(product.compareAtPrice)}</span>` : ''}</p>` : ''}
          <div class="pd-quote-box pd-quote-box--plain">
            <p>${escapeHtml(product.description)}</p>
            ${checklist ? `<ul class="pd-checklist pd-checklist--compact">${checklist}</ul>` : ''}
          </div>
          <div class="pd-actions pd-actions--cart">
            <div class="pd-qty" aria-label="Quantity"><span>1</span></div>
            <a href="/pages/forms/procurement.html" class="pd-actions__primary pd-actions__primary--wide">Add to Quote</a>
          </div>
          <a href="/pages/forms/procurement.html" class="pd-actions__secondary pd-actions__secondary--block">Bulk Order Pricing</a>
          ${renderQuickSpecs(product.quickSpecs)}
        </div>
      </div>
    </section>
    <section class="pd-manifest-section section-y">
      <div class="page-container pd-manifest-section__grid">
        <div>
          <h2 class="pd-manifest-section__title">Product Manifest</h2>
          <div class="pd-manifest">${manifest}</div>
        </div>
        <aside class="pd-install">
          <h2>Installation Specs</h2>
          <ul>${installRows}</ul>
          ${product.installNote ? `<p class="pd-install__note">${escapeHtml(product.installNote)}</p>` : ''}
        </aside>
      </div>
    </section>
    ${techCols ? `
      <section class="pd-tech section-y">
        <div class="page-container">
          <h2 class="pd-tech__title">Technical Data</h2>
          <div class="pd-tech__grid">${techCols}</div>
        </div>
      </section>` : ''}
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderPathogenPage(product, category) {
  const manifest = product.specManifest
    ?.map(
      (row) => `
        <li><span>${escapeHtml(row.label)}</span><strong>${escapeHtml(row.value)}</strong></li>`,
    )
    .join('');

  const specs = product.pathogenSpecs
    ?.map(
      (item) => `
        <article class="pd-pathogen-spec">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>`,
    )
    .join('');

  const heroClass = product.darkHero ? ' pd-hero--dark' : '';

  return `
    <section class="pd-hero section-y${heroClass}">
      <div class="page-container pd-hero__grid pd-hero__grid--wide">
        ${renderGallery(product, { tall: true })}
        <div class="pd-hero__info">
          ${product.complianceBadge ? `<p class="pd-tagline">${escapeHtml(product.complianceBadge)}</p>` : ''}
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          <div class="pd-meta-row">
            <span class="product-hero__sku">SKU: ${escapeHtml(product.sku)}</span>
            ${product.reviewCount ? `<span class="pd-reviews">${escapeHtml(String(product.reviewCount))} Reviews</span>` : ''}
          </div>
          ${product.price ? `<p class="product-hero__price">${formatPrice(product.price)}${product.compareAtPrice ? `<span class="product-hero__compare">${formatPrice(product.compareAtPrice)}</span>` : ''}${product.savePercent ? `<span class="pd-save-badge">Save ${product.savePercent}%</span>` : ''}</p>` : ''}
          <p class="pd-quote-box pd-quote-box--border">${escapeHtml(product.description)}</p>
          ${renderQuoteActions(product)}
          ${manifest && !product.whatsInBoxDark ? `
            <div class="pd-kit-manifest">
              <h3>Kit Manifest</h3>
              <ul>${manifest}</ul>
              <p class="pd-kit-manifest__note"><i data-lucide="circle-check"></i> Meets ANSI/ISEA Z308.1-2015 standards</p>
            </div>` : ''}
          ${product.trustBadges ? `<div class="pd-trust-row">${product.trustBadges.map((item) => `<div class="pd-trust"><i data-lucide="${escapeHtml(item.icon)}"></i><span>${escapeHtml(item.label)}</span></div>`).join('')}</div>` : ''}
        </div>
      </div>
    </section>
    ${specs ? `
      <section class="pd-pathogen-specs section-y">
        <div class="page-container">
          <h2>Technical Specifications</h2>
          <p class="pd-pathogen-specs__subtitle">Precision engineering for life-critical situations.</p>
          <div class="pd-pathogen-specs__grid">${specs}</div>
        </div>
      </section>` : ''}
    ${product.whatsInBoxDark ? renderWhatsInBoxDark(product.whatsInBoxDark) : ''}
    ${product.complianceAssembly ? renderComplianceAssembly(product.complianceAssembly) : ''}
    ${product.commercialQuoteCta ? renderPathogenCta(product.commercialQuoteCta) : ''}
  `;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['commercialQuoteCta']>} cta */
function renderPathogenCta(cta) {
  return `
    <section class="pd-pathogen-cta pd-pathogen-cta--red section-y">
      <div class="page-container pd-pathogen-cta__inner">
        <h2>${escapeHtml(cta.title)}</h2>
        <p>${escapeHtml(cta.text)}</p>
        <a href="/pages/forms/procurement.html" class="pd-actions__secondary">${escapeHtml(cta.buttonLabel)}</a>
      </div>
    </section>`;
}

/** @param {ReadonlyArray<{ title: string, text: string, icon: string, footer?: string }>} cards */
function renderIndustrialSpecCardsFromData(cards, header) {
  const items = cards
    .map(
      (card) => `
        <article class="pd-industrial-spec">
          <i data-lucide="${escapeHtml(card.icon)}"></i>
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.text)}</p>
          ${card.footer ? `<p class="pd-industrial-spec__footer">${escapeHtml(card.footer)}</p>` : ''}
        </article>`,
    )
    .join('');

  return `
    <section class="pd-industrial-specs section-y">
      <div class="page-container">
        ${header ? `
          <div class="pd-industrial-specs__header">
            <div>
              <p class="pd-industrial-specs__eyebrow">${escapeHtml(header.eyebrow)}</p>
              <h2>Industrial Specification</h2>
            </div>
            ${header.revision ? `<p class="pd-industrial-specs__revision">${escapeHtml(header.revision)}</p>` : ''}
          </div>` : ''}
        <div class="pd-industrial-specs__grid">${items}</div>
      </div>
    </section>`;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderIndustrialSpecCards(product) {
  if (!product.industrialSpecCards?.length) return '';
  return renderIndustrialSpecCardsFromData(product.industrialSpecCards, product.techDataHeader);
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['whatsInBox']>} section */
function renderWhatsInBox(section) {
  const items = section.items
    .map(
      (item) => `
        <div class="pd-whats-in-box__item">
          <div class="pd-whats-in-box__icon"><i data-lucide="${escapeHtml(item.icon)}"></i></div>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </div>`,
    )
    .join('');

  return `
    <section class="pd-whats-in-box section-y">
      <div class="page-container pd-whats-in-box__grid">
        <div>
          <h2>${escapeHtml(section.title)}</h2>
          <div class="pd-whats-in-box__items">${items}</div>
        </div>
        ${section.image ? `<div class="pd-whats-in-box__visual"><img src="${escapeHtml(section.image)}" alt=""></div>` : ''}
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['inspectionCta']>} cta */
function renderInspectionCta(cta) {
  return `
    <section class="pd-inspection-cta section-y">
      <div class="page-container pd-inspection-cta__inner">
        <h2>${escapeHtml(cta.title)}</h2>
        <p>${escapeHtml(cta.text)}</p>
        <div class="pd-inspection-cta__actions">
          <a href="/pages/forms/procurement.html" class="pd-actions__primary">${escapeHtml(cta.primaryLabel)}</a>
          <a href="/pages/cpr-training.html" class="pd-actions__secondary">${escapeHtml(cta.secondaryLabel)}</a>
        </div>
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['ecosystemSection']>} section */
function renderEcosystemSection(section) {
  const cards = section.cards
    .map(
      (card) => `
        <article class="pd-ecosystem__card">
          <i data-lucide="${escapeHtml(card.icon)}"></i>
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.text)}</p>
        </article>`,
    )
    .join('');

  return `
    <section class="pd-ecosystem section-y">
      <div class="page-container">
        <p class="pd-ecosystem__eyebrow">${escapeHtml(section.eyebrow)}</p>
        <h2 class="pd-ecosystem__title">${escapeHtml(section.title)}</h2>
        <div class="pd-ecosystem__grid">
          <article class="pd-ecosystem__featured">
            <span class="pd-ecosystem__badge">${escapeHtml(section.featured.badge)}</span>
            <h3>${escapeHtml(section.featured.title)}</h3>
            <p>${escapeHtml(section.featured.text)}</p>
            <a href="/pages/fire-training.html">${escapeHtml(section.featured.linkLabel)} →</a>
          </article>
          <div class="pd-ecosystem__stack">${cards}</div>
        </div>
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['complianceSection']>} section */
function renderComplianceStandards(section) {
  return `
    <section class="pd-compliance-standards section-y">
      <div class="page-container pd-compliance-standards__grid">
        <div>
          <h2>${escapeHtml(section.title)}</h2>
          <p>${escapeHtml(section.text)}</p>
        </div>
        <div class="pd-compliance-standards__badge">
          ${section.badge ? `<span class="pd-compliance-standards__year">${escapeHtml(section.badge)}</span>` : ''}
          <span>ANSI Certified</span>
        </div>
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['refillBanner']>} banner */
function renderRefillBanner(banner) {
  return `
    <section class="pd-refill-banner section-y">
      <div class="page-container pd-refill-banner__inner">
        <i data-lucide="refresh-cw"></i>
        <h2>${escapeHtml(banner.title)}</h2>
        <p>${escapeHtml(banner.text)}</p>
        <div class="pd-refill-banner__actions">
          <a href="/pages/forms/procurement.html" class="pd-actions__primary">${escapeHtml(banner.primaryLabel)}</a>
          <a href="/pages/safety-supplies.html" class="pd-actions__secondary">${escapeHtml(banner.secondaryLabel)}</a>
        </div>
      </div>
    </section>`;
}

/** @param {ReadonlyArray<{ title: string, text: string, icon: string }>} features */
function renderReliabilityFeatures(features) {
  const items = features
    .map(
      (feature) => `
        <article class="pd-reliability-grid__item">
          <i data-lucide="${escapeHtml(feature.icon)}"></i>
          <h3>${escapeHtml(feature.title)}</h3>
          <p>${escapeHtml(feature.text)}</p>
        </article>`,
    )
    .join('');

  return `
    <section class="pd-reliability-grid section-y">
      <div class="page-container">
        <p class="pd-reliability-grid__eyebrow">Engineering Excellence</p>
        <h2 class="pd-reliability-grid__title">Reliability &amp; Safety Standards</h2>
        <div class="pd-reliability-grid__items">${items}</div>
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['logisticsSection']>} section */
function renderLogisticsSection(section) {
  const items = section.items
    .map(
      (item) => `
        <div class="pd-logistics__item">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </div>`,
    )
    .join('');

  return `
    <section class="pd-logistics section-y">
      <div class="page-container pd-logistics__grid">
        <div>
          <h2>Logistics &amp; Installation</h2>
          <div class="pd-logistics__items">${items}</div>
        </div>
        <aside class="pd-logistics__cta">
          <h3>${escapeHtml(section.customCta.title)}</h3>
          <p>${escapeHtml(section.customCta.text)}</p>
          <a href="/pages/forms/procurement.html" class="pd-actions__secondary">${escapeHtml(section.customCta.buttonLabel)}</a>
        </aside>
      </div>
    </section>`;
}

/** @param {ReadonlyArray<{ label: string, value: string }>} rows */
function renderFullSpecsTable(rows) {
  const tableRows = rows
    .map(
      (row, index) => `
        <tr class="${index % 2 === 0 ? 'pd-spec-table__row--alt' : ''}">
          <th>${escapeHtml(row.label)}</th>
          <td>${escapeHtml(row.value)}</td>
        </tr>`,
    )
    .join('');

  return `
    <section class="pd-spec-table section-y">
      <div class="page-container">
        <h2 class="pd-spec-table__title">Full Specifications</h2>
        <table class="pd-spec-table__table">
          <tbody>${tableRows}</tbody>
        </table>
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['whatsInBoxDark']>} section */
function renderWhatsInBoxDark(section) {
  const items = section.items
    .map(
      (item) => `
        <article class="pd-box-dark__item">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </article>`,
    )
    .join('');

  return `
    <section class="pd-box-dark section-y">
      <div class="page-container pd-box-dark__grid">
        <div class="pd-box-dark__visual">
          <img src="${escapeHtml(section.image)}" alt="">
          <p>${escapeHtml(section.title)}</p>
        </div>
        <div class="pd-box-dark__items">${items}</div>
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['complianceAssembly']>} section */
function renderComplianceAssembly(section) {
  const checks = section.checks
    .map((check) => `<li><i data-lucide="circle-check"></i>${escapeHtml(check)}</li>`)
    .join('');

  return `
    <section class="pd-compliance-assembly section-y">
      <div class="page-container pd-compliance-assembly__grid">
        <div>
          <p class="pd-tagline">Strength &amp; Assembly</p>
          <h2>${escapeHtml(section.title)}</h2>
          <p>${escapeHtml(section.text)}</p>
          <ul class="pd-compliance-assembly__checks">${checks}</ul>
        </div>
        <div class="pd-compliance-assembly__card">
          <h3>Compliance Checklist</h3>
          <ul>${checks}</ul>
        </div>
      </div>
    </section>`;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderBleedingControlPage(product, category) {
  const trust = product.trustBadges
    ?.map(
      (item) => `
        <div class="pd-trust">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <span>${escapeHtml(item.label)}</span>
        </div>`,
    )
    .join('');

  const featureCards = product.packFeatureCards
    ?.map(
      (card) => `
        <article class="pd-pack-card">
          <i data-lucide="${escapeHtml(card.icon)}"></i>
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.text)}</p>
          ${card.footer ? `<p class="pd-pack-card__footer">${escapeHtml(card.footer)}</p>` : ''}
        </article>`,
    )
    .join('');

  const manifest = product.fullManifest
    ?.map((item) => `<li><span class="pd-pack-manifest__dot"></span>${escapeHtml(item)}</li>`)
    .join('');

  const dimRows = product.quickSpecs
    ?.map(
      (spec) => `
        <div class="pd-pack-dims__row">
          <span>${escapeHtml(spec.label)}</span>
          <span>${escapeHtml(spec.value)}</span>
        </div>`,
    )
    .join('');

  const trainingCards = product.trainingSection?.cards
    .map(
      (card) => `
        <article class="pd-training-card">
          <i data-lucide="${escapeHtml(card.icon)}"></i>
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.text)}</p>
        </article>`,
    )
    .join('');

  const related = product.relatedProducts
    ?.map(
      (item) => `
        <a href="/pages/catalog/products/${escapeHtml(item.slug)}.html" class="pd-related__card">
          <img src="${escapeHtml(item.image)}" alt="">
          <p class="pd-related__category">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.name)}</h3>
          <p class="pd-related__price">${formatPrice(item.price)}</p>
        </a>`,
    )
    .join('');

  return `
    <section class="pd-hero section-y">
      <div class="page-container pd-hero__grid pd-hero__grid--wide">
        ${renderGallery(product, { tall: true })}
        <div class="pd-hero__info">
          ${product.productSubtitle ? `<p class="pd-tagline">${escapeHtml(product.productSubtitle)}</p>` : ''}
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          <div class="pd-meta-row">
            <span class="product-hero__sku">SKU: ${escapeHtml(product.sku)}</span>
            ${product.inStock ? '<span class="pd-stock-pill">In Stock</span>' : ''}
          </div>
          ${product.price ? `<p class="product-hero__price">${formatPrice(product.price)}</p>` : ''}
          <p class="product-hero__desc">${escapeHtml(product.description)}</p>
          ${product.criticalCallout ? `
            <div class="pd-critical-callout">
              <i data-lucide="triangle-alert"></i>
              <div>
                <p class="pd-critical-callout__label">${escapeHtml(product.criticalCallout.label)}</p>
                <p>${escapeHtml(product.criticalCallout.text)}</p>
              </div>
            </div>` : ''}
          ${renderQuoteActions(product)}
          ${trust ? `<div class="pd-trust-row">${trust}</div>` : ''}
        </div>
      </div>
    </section>
    ${featureCards || manifest ? `
      <section class="pd-pack-contents section-y">
        <div class="page-container">
          <div class="pd-pack-contents__header">
            <div>
              <h2>Pack Contents &amp; Specs</h2>
              <span class="pd-pack-contents__line"></span>
            </div>
            <span class="pd-pack-contents__note">Reliability Guaranteed</span>
          </div>
          <div class="pd-pack-contents__grid">
            <div class="pd-pack-contents__main">
              ${featureCards ? `<div class="pd-pack-contents__cards">${featureCards}</div>` : ''}
              ${manifest ? `
                <article class="pd-pack-manifest">
                  <h3>Full Manifest</h3>
                  <ul>${manifest}</ul>
                </article>` : ''}
            </div>
            <aside class="pd-pack-contents__aside">
              ${product.statHighlight ? `
                <div class="pd-pack-stat">
                  <span class="pd-pack-stat__value">${escapeHtml(product.statHighlight.stat)}</span>
                  <p>${escapeHtml(product.statHighlight.label)}</p>
                  ${product.statHighlight.text ? `<small>${escapeHtml(product.statHighlight.text)}</small>` : ''}
                </div>` : ''}
              ${dimRows ? `<div class="pd-pack-dims"><h4>Dimensions</h4>${dimRows}</div>` : ''}
            </aside>
          </div>
        </div>
      </section>` : renderSpecColumns(product)}
    ${product.trainingSection ? `
      <section class="pd-training section-y">
        <div class="page-container pd-training__grid">
          <div>
            <p class="pd-tagline">${escapeHtml(product.trainingSection.eyebrow)}</p>
            <h2>${escapeHtml(product.trainingSection.title)}</h2>
            <p>${escapeHtml(product.trainingSection.text)}</p>
            <div class="pd-training__actions">
              <a href="/pages/cpr-training.html" class="pd-actions__primary">${escapeHtml(product.trainingSection.primaryLabel)}</a>
              <a href="/pages/forms/procurement.html" class="pd-actions__secondary">${escapeHtml(product.trainingSection.secondaryLabel)}</a>
            </div>
          </div>
          <div class="pd-training__cards">${trainingCards}</div>
        </div>
      </section>` : ''}
    ${product.brandBanner ? `
      <section class="pd-brand-banner section-y">
        <div class="page-container pd-brand-banner__inner">
          <h2>${escapeHtml(product.brandBanner.headline ?? 'Preparedness Is Not Optional.')}</h2>
          <div class="pd-brand-banner__stats">
            <span>${escapeHtml(product.brandBanner.rating)}</span>
            <span class="pd-brand-banner__divider"></span>
            <span>${escapeHtml(product.brandBanner.deployed)}</span>
          </div>
        </div>
      </section>` : renderBulkQuoteCta()}
    ${related ? `
      <section class="pd-related section-y">
        <div class="page-container">
          <div class="pd-related__header">
            <h2>Related Technical Gear</h2>
            <a href="/pages/catalog.html">View Catalog →</a>
          </div>
          <div class="pd-related__grid">${related}</div>
        </div>
      </section>` : ''}
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderAedPlusPage(product, category) {
  const featureCards = product.heroFeatureCards
    ?.map(
      (card) => `
        <div class="pd-aed-feature">
          <i data-lucide="${escapeHtml(card.icon)}"></i>
          <div>
            <strong>${escapeHtml(card.title)}</strong>
            <p>${escapeHtml(card.text)}</p>
          </div>
        </div>`,
    )
    .join('');

  const precision = product.precisionFeatures
    ?.map(
      (feature) => `
        <article class="pd-precision__item">
          <i data-lucide="${escapeHtml(feature.icon)}"></i>
          <h3>${escapeHtml(feature.title)}</h3>
          <p>${escapeHtml(feature.text)}</p>
        </article>`,
    )
    .join('');

  const boxItems = product.boxContents
    ?.map(
      (item) => `
        <div class="pd-box-list__row">
          <span><span class="pd-box-list__dot"></span>${escapeHtml(item.label)}</span>
          <span>${escapeHtml(item.qty)}</span>
        </div>`,
    )
    .join('');

  const parts = product.replacementParts
    ?.map(
      (part) => `
        <div class="pd-replacement">
          <img src="${escapeHtml(part.image)}" alt="">
          <div>
            <h4>${escapeHtml(part.name)}</h4>
            <p>SKU: ${escapeHtml(part.sku)}</p>
            <p class="pd-replacement__price">${formatPrice(part.price)}</p>
          </div>
          <a href="${part.slug ? `/pages/catalog/products/${escapeHtml(part.slug)}.html` : '/pages/forms/procurement.html'}">Add</a>
        </div>`,
    )
    .join('');

  return `
    <section class="pd-hero section-y">
      <div class="page-container pd-hero__grid pd-hero__grid--wide">
        ${renderGallery(product, { tall: true })}
        <div class="pd-hero__info">
          <span class="product-hero__sku">SKU: ${escapeHtml(product.sku)}</span>
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          ${product.price ? `<p class="product-hero__price">${formatPrice(product.price)}${product.compareAtPrice ? `<span class="product-hero__compare">${formatPrice(product.compareAtPrice)}</span>` : ''}</p>` : ''}
          <p class="product-hero__desc">${escapeHtml(product.description)}</p>
          ${featureCards ? `<div class="pd-aed-features">${featureCards}</div>` : ''}
          <div class="pd-actions pd-actions--cart">
            <div class="pd-qty" aria-label="Quantity"><span>1</span></div>
            <a href="/pages/forms/procurement.html" class="pd-actions__primary pd-actions__primary--wide"><i data-lucide="shopping-cart"></i> ${escapeHtml(product.primaryCtaLabel ?? 'Add to Fleet')}</a>
          </div>
          <a href="/pages/forms/procurement.html" class="pd-actions__secondary pd-actions__secondary--block">${escapeHtml(product.secondaryCtaLabel ?? 'Request Quantity Quote')}</a>
        </div>
      </div>
    </section>
    ${precision ? `
      <section class="pd-precision section-y">
        <div class="page-container">
          <h2 class="pd-precision__title">Precision in Crisis</h2>
          <div class="pd-precision__grid">${precision}</div>
        </div>
      </section>` : ''}
    ${boxItems || parts ? `
      <section class="pd-aed-box section-y">
        <div class="page-container pd-aed-box__grid">
          ${boxItems ? `<div><h2>What's In The Box</h2><div class="pd-box-list">${boxItems}</div></div>` : ''}
          ${parts ? `<aside class="pd-replacement-panel"><h2>Maintain Your Unit</h2><p>Ensure your emergency equipment is always ready with official replacement parts.</p>${parts}</aside>` : ''}
        </div>
      </section>` : ''}
    ${product.commercialQuoteCta ? renderPathogenCta({ ...product.commercialQuoteCta, buttonLabel: product.commercialQuoteCta.buttonLabel }) : renderBulkQuoteCta()}
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderAedCabinetPage(product, category) {
  const checklist = product.checklist
    ?.map(
      (item) => `
        <li>
          <i data-lucide="circle-check"></i>
          <span>${escapeHtml(item)}</span>
        </li>`,
    )
    .join('');

  const construction = product.constructionSpecs
    ?.map(
      (row) => `
        <div class="pd-cabinet-spec__row">
          <span>${escapeHtml(row.label)}</span>
          <strong>${escapeHtml(row.value)}</strong>
        </div>`,
    )
    .join('');

  const specs = product.cabinetSpecs;

  return `
    <section class="pd-hero section-y pd-hero--light">
      <div class="page-container pd-hero__grid pd-hero__grid--wide">
        ${renderGallery(product, { tall: true })}
        <div class="pd-hero__info">
          <span class="product-hero__sku">SKU: ${escapeHtml(product.sku)}</span>
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          ${product.price ? `<p class="product-hero__price">${formatPrice(product.price)}${product.compareAtPrice ? `<span class="product-hero__compare">${formatPrice(product.compareAtPrice)}</span>` : ''}</p>` : ''}
          <p class="product-hero__desc">${escapeHtml(product.description)}</p>
          ${checklist ? `<ul class="pd-cabinet-checklist">${checklist}</ul>` : ''}
          <div class="pd-actions">
            <a href="/pages/forms/procurement.html" class="pd-actions__primary">${escapeHtml(product.primaryCtaLabel ?? 'Add to Fleet')}</a>
            <a href="/pages/forms/procurement.html" class="pd-actions__secondary">${escapeHtml(product.secondaryCtaLabel ?? 'Request a Quote')}</a>
          </div>
          <a href="/pages/forms/procurement.html" class="pd-download-link"><i data-lucide="download"></i> Download Installation Manual</a>
          ${product.trustBadges ? `<div class="pd-trust-row pd-trust-row--cards">${product.trustBadges.map((item) => `<div class="pd-trust-card"><i data-lucide="${escapeHtml(item.icon)}"></i><span>${escapeHtml(item.label)}</span></div>`).join('')}</div>` : ''}
        </div>
      </div>
    </section>
    ${specs ? `
      <section class="pd-cabinet-specs section-y">
        <div class="page-container">
          <h2 class="pd-cabinet-specs__title"><span></span> Technical Specifications</h2>
          <div class="pd-cabinet-specs__grid">
            ${construction ? `<article class="pd-cabinet-spec pd-cabinet-spec--wide"><h3>Construction &amp; Material</h3>${construction}</article>` : ''}
            <article class="pd-cabinet-spec">
              <h3>Dimensions</h3>
              <p class="pd-cabinet-spec__stat">${escapeHtml(specs.dimensions)}</p>
              ${specs.dimensionsNote ? `<p>${escapeHtml(specs.dimensionsNote)}</p>` : ''}
            </article>
            <article class="pd-cabinet-spec pd-cabinet-spec--dark">
              <h3>Alarm Power</h3>
              <p class="pd-cabinet-spec__stat">${escapeHtml(specs.alarmPower)}</p>
              ${specs.alarmNote ? `<p>${escapeHtml(specs.alarmNote)}</p>` : ''}
            </article>
            <article class="pd-cabinet-spec">
              <h3>Audio Output</h3>
              <p class="pd-cabinet-spec__stat">${escapeHtml(specs.audioOutput)}</p>
              ${specs.audioNote ? `<p>${escapeHtml(specs.audioNote)}</p>` : ''}
            </article>
            <article class="pd-cabinet-spec pd-cabinet-spec--quote">
              <h3>Industrial Certification</h3>
              <p class="pd-cabinet-spec__quote">${escapeHtml(specs.certification.quote)}</p>
              <p>${escapeHtml(specs.certification.text)}</p>
            </article>
          </div>
        </div>
      </section>` : ''}
    ${product.bulkFleetCta ? renderLightFleetCta(product.bulkFleetCta) : ''}
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderLegacyLayouts(product, category) {
  const layout = product.detailLayout ?? 'standard';
  const sections = [renderProductHero(product, category)];

  if (layout === 'cpr-padz') {
    sections.push(
      renderMarketingSection(product),
      renderCompatibilitySection(product),
      renderProductSpecs(product),
      renderBulkQuoteCta(),
    );
  } else if (layout === 'bleeding-control') {
    sections.push(renderSpecColumns(product), renderComponentSpotlight(product), renderBulkQuoteCta());
  } else {
    sections.push(renderProductSpecs(product), renderProductFeatureCards(product), renderBulkQuoteCta());
  }

  return sections.join('');
}

/**
 * @param {import('../../../config/catalog.js').CatalogProduct} product
 * @param {import('../../../config/catalog.js').CatalogCategory} category
 */
export function renderProductDetailPage(product, category) {
  switch (product.detailLayout) {
    case 'extinguisher':
      return renderExtinguisherPage(product, category);
    case 'extinguisher-compact':
      return renderExtinguisherCompactPage(product, category);
    case 'first-aid-cabinet':
      return renderFirstAidCabinetPage(product, category);
    case 'gas-cage':
      return renderGasCagePage(product, category);
    case 'eyewash-station':
      return renderEyewashPage(product, category);
    case 'pathogen-pack':
      return renderPathogenPage(product, category);
    case 'bleeding-control':
      return renderBleedingControlPage(product, category);
    case 'aed-plus':
      return renderAedPlusPage(product, category);
    case 'aed-cabinet':
      return renderAedCabinetPage(product, category);
    default:
      return renderLegacyLayouts(product, category);
  }
}
