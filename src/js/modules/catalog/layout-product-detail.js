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
  isDataSheetCta,
} from './components.js';

/**
 * @param {import('../../../config/catalog.js').CatalogProduct} product
 * @param {{ tall?: boolean, className?: string, forceThumbs?: boolean }} [options]
 */
function renderGallery(product, options = {}) {
  const images = product.gallery?.length ? product.gallery : [product.image];
  const badges = [product.badge, ...(product.heroBadges ?? [])].filter(Boolean);

  const badgeHtml = badges
    .map(
      (label, index) =>
        `<span class="pd-gallery__badge${index === 0 ? ' pd-gallery__badge--primary' : ''}">${escapeHtml(label)}</span>`,
    )
    .join('');

  const thumbs = images
    .map((src, index) => {
      const imageNumber = index + 1;
      const label = `View image ${imageNumber} of ${images.length} for ${product.name}`;
      return `
        <button type="button" class="pd-gallery__thumb${index === 0 ? ' is-active' : ''}" data-gallery-thumb="${escapeHtml(src)}" aria-label="${escapeHtml(label)}">
          <img src="${escapeHtml(src)}" alt="" aria-hidden="true">
        </button>`;
    })
    .join('');

  return `
    <div class="pd-gallery${options.tall ? ' pd-gallery--tall' : ''}${options.className ? ` ${options.className}` : ''}" data-product-gallery>
      <div class="pd-gallery__main">
        ${badgeHtml ? `<div class="pd-gallery__badges">${badgeHtml}</div>` : ''}
        <img src="${escapeHtml(images[0])}" alt="${escapeHtml(product.name)}" data-gallery-main>
      </div>
      ${images.length > 1 || options.forceThumbs ? `<div class="pd-gallery__thumbs">${thumbs}</div>` : ''}
    </div>`;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderQuoteActions(product) {
  const primary = product.primaryCtaLabel ?? 'Add to Quote';
  const secondary = product.secondaryCtaLabel ?? 'Request Bulk Quote';
  const secondaryCta = !isDataSheetCta(secondary)
    ? `<a href="/pages/forms/procurement.html" class="pd-actions__secondary">${escapeHtml(secondary)}</a>`
    : '';

  return `
    <div class="pd-actions">
      <a href="/pages/forms/procurement.html" class="pd-actions__primary">${escapeHtml(primary)}</a>
      ${secondaryCta}
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
          <i data-lucide="circle-check"></i>
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
            ${!isDataSheetCta(product.secondaryCtaLabel) && product.secondaryCtaLabel ? `<a href="/pages/forms/procurement.html" class="pd-actions__secondary pd-actions__secondary--block">${escapeHtml(product.secondaryCtaLabel)}</a>` : ''}
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
          <div class="pd-quote-box pd-quote-box--plain">
            <p>${escapeHtml(product.description)}</p>
            ${checklist ? `<ul class="pd-checklist pd-checklist--compact">${checklist}</ul>` : ''}
          </div>
          <div class="pd-actions pd-actions--cart">
            <div class="pd-qty" aria-label="Quantity"><span>1</span></div>
            <a href="/pages/forms/procurement.html" class="pd-actions__primary pd-actions__primary--wide">Add to Quote</a>
          </div>
          <a href="/pages/forms/procurement.html" class="pd-actions__secondary pd-actions__secondary--block">Request Bulk Quote</a>
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
  const specs = product.pathogenSpecs
    ?.map(
      (item) => `
        <article class="pd-pathogen-spec${item.accent ? ' pd-pathogen-spec--accent' : ''}">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
          ${item.footer ? `<p class="pd-pathogen-spec__footer">${escapeHtml(item.footer)}</p>` : ''}
        </article>`,
    )
    .join('');

  const trust = product.trustBadges
    ?.map(
      (item) => `
        <div class="pd-trust pd-trust--inline">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <span>${escapeHtml(item.label)}</span>
        </div>`,
    )
    .join('');

  const rating =
    product.reviewCount != null
      ? `
        <div class="pd-rating" aria-label="5 out of 5 stars">
          <span class="pd-rating__stars" aria-hidden="true">
            <i data-lucide="star"></i>
            <i data-lucide="star"></i>
            <i data-lucide="star"></i>
            <i data-lucide="star"></i>
            <i data-lucide="star"></i>
          </span>
          <span class="pd-reviews">(${escapeHtml(String(product.reviewCount))} Reviews)</span>
        </div>`
      : '';

  const heroClass = product.darkHero ? ' pd-hero--dark' : '';
  const subtitle = product.productSubtitle ?? product.complianceBadge;

  return `
    <section class="pd-hero section-y${heroClass}">
      <div class="page-container pd-hero__grid pd-hero__grid--wide">
        ${renderGallery(product, { tall: true })}
        <div class="pd-hero__info">
          ${subtitle ? `<p class="pd-tagline">${escapeHtml(subtitle)}</p>` : ''}
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          <div class="pd-meta-row">
            <span class="product-hero__sku">SKU: ${escapeHtml(product.sku)}</span>
            ${rating}
          </div>
          <p class="product-hero__desc">${escapeHtml(product.description)}</p>
          ${renderQuoteActions(product)}
          ${trust ? `<div class="pd-trust-row pd-trust-row--hero">${trust}</div>` : ''}
        </div>
      </div>
    </section>
    ${specs ? `
      <section class="pd-pathogen-specs section-y">
        <div class="page-container">
          <div class="pd-pathogen-specs__header">
            <div>
              <h2>Technical Specifications</h2>
              <p class="pd-pathogen-specs__subtitle">Precision engineering for life-critical situations.</p>
            </div>
            <div class="pd-pathogen-specs__rule" aria-hidden="true"></div>
          </div>
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
        <a href="/pages/forms/procurement.html" class="pd-pathogen-cta__btn">${escapeHtml(cta.buttonLabel)}</a>
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
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>`,
    )
    .join('');

  const heading = section.heading ?? "What's in the Box";

  return `
    <section class="pd-box-dark section-y">
      <div class="page-container">
        <h2 class="pd-box-dark__heading">${escapeHtml(heading)}</h2>
        <div class="pd-box-dark__bento">
          <div class="pd-box-dark__featured">
            <img src="${escapeHtml(section.image)}" alt="" aria-hidden="true">
            <div class="pd-box-dark__featured-copy">
              <h3>${escapeHtml(section.title)}</h3>
              ${section.text ? `<p>${escapeHtml(section.text)}</p>` : ''}
            </div>
          </div>
          ${items}
        </div>
      </div>
    </section>`;
}

/** @param {NonNullable<import('../../../config/catalog.js').CatalogProduct['complianceAssembly']>} section */
function renderComplianceAssembly(section) {
  const checks = section.checks
    .map((check) => {
      if (typeof check === 'string') {
        return `
          <li class="pd-compliance-assembly__check">
            <i data-lucide="circle-check"></i>
            <span>${escapeHtml(check)}</span>
          </li>`;
      }
      return `
        <li class="pd-compliance-assembly__check">
          <i data-lucide="circle-check"></i>
          <div>
            <p class="pd-compliance-assembly__check-title">${escapeHtml(check.title)}</p>
            ${check.text ? `<p class="pd-compliance-assembly__check-text">${escapeHtml(check.text)}</p>` : ''}
          </div>
        </li>`;
    })
    .join('');

  const checklist =
    section.checklist
      ?.map(
        (row) => `
        <div class="pd-compliance-assembly__row">
          <span>${escapeHtml(row.label)}</span>
          <span class="pd-compliance-assembly__status">${escapeHtml(row.status)}</span>
        </div>`,
      )
      .join('') ?? '';

  return `
    <section class="pd-compliance-assembly section-y">
      <div class="page-container pd-compliance-assembly__grid">
        <div class="pd-compliance-assembly__copy">
          ${section.eyebrow ? `<p class="pd-compliance-assembly__eyebrow">${escapeHtml(section.eyebrow)}</p>` : ''}
          <h2>${escapeHtml(section.title)}</h2>
          <p>${escapeHtml(section.text)}</p>
          <ul class="pd-compliance-assembly__checks">${checks}</ul>
        </div>
        <div class="pd-compliance-assembly__panel">
          <div class="pd-compliance-assembly__card">
            <h3>Compliance Checklist</h3>
            ${checklist || `<ul class="pd-compliance-assembly__checks">${checks}</ul>`}
          </div>
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

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderExtinguisherIndustrialPage(product, category) {
  const quickSpecs = product.quickSpecs
    ?.map(
      (spec) => `
        <div class="pd-ind-spec">
          <div class="pd-ind-spec__label">
            ${spec.icon ? `<i data-lucide="${escapeHtml(spec.icon)}"></i>` : ''}
            <span>${escapeHtml(spec.label)}</span>
          </div>
          <span class="pd-ind-spec__value">${escapeHtml(spec.value)}</span>
        </div>`,
    )
    .join('');

  const trust = product.trustBadges
    ?.map((item) => `<span class="pd-ind-trust">${escapeHtml(item.label)}</span>`)
    .join('');

  const features = product.precisionFeatures
    ?.map(
      (item) => `
        <article class="pd-ind-feature">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>`,
    )
    .join('');

  const specs = product.fullSpecsTable ?? [];
  const specRows = [];
  for (let i = 0; i < specs.length; i += 2) {
    const left = specs[i];
    const right = specs[i + 1];
    specRows.push(`
      <div class="pd-ind-table__row">
        <div class="pd-ind-table__cell pd-ind-table__cell--label">${escapeHtml(left.label)}</div>
        <div class="pd-ind-table__cell">${escapeHtml(left.value)}</div>
        ${
          right
            ? `<div class="pd-ind-table__cell pd-ind-table__cell--label">${escapeHtml(right.label)}</div>
        <div class="pd-ind-table__cell">${escapeHtml(right.value)}</div>`
            : '<div class="pd-ind-table__cell pd-ind-table__cell--label"></div><div class="pd-ind-table__cell"></div>'
        }
      </div>`);
  }

  const boxItems = product.whatsInBox?.items
    .map(
      (item, index) => `
        <li class="pd-ind-box__item">
          <span class="pd-ind-box__num">${String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </li>`,
    )
    .join('');

  const box = product.whatsInBox;
  const cta = product.bulkFleetCta;

  return `
    <section class="pd-ind-hero pd-hero section-y">
      <div class="page-container">
        <div class="pd-hero__grid pd-hero__grid--wide pd-ind-hero__grid">
          ${renderGallery(product, { tall: true })}
          <div class="pd-hero__info">
            ${product.productEyebrow ? `<p class="pd-tagline pd-tagline--bar">${escapeHtml(product.productEyebrow)}</p>` : ''}
            <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
            <div class="pd-meta-row">
              ${product.inStock ? '<span class="pd-stock-pill">In Stock</span>' : ''}
              <span class="product-hero__sku">SKU: ${escapeHtml(product.sku)}</span>
            </div>
            <p class="product-hero__desc pd-ind-hero__desc">${escapeHtml(product.description)}</p>
            ${quickSpecs ? `<div class="pd-ind-specs">${quickSpecs}</div>` : ''}
            <div class="pd-actions pd-actions--stack">
              <a href="/pages/forms/procurement.html" class="pd-actions__primary pd-actions__primary--wide">
                ${escapeHtml(product.primaryCtaLabel ?? 'Request a Quote')}
                <i data-lucide="arrow-right"></i>
              </a>
              <a href="/pages/forms/procurement.html" class="pd-actions__secondary pd-actions__secondary--block">
                ${escapeHtml(product.secondaryCtaLabel ?? 'Contact Specialist')}
              </a>
            </div>
            ${trust ? `<div class="pd-ind-trust-row">${trust}</div>` : ''}
          </div>
        </div>
      </div>
    </section>
    ${
      features
        ? `
    <section class="pd-ind-engineering section-y">
      <div class="page-container">
        <div class="pd-ind-engineering__header">
          <h2>Precision Engineering</h2>
          <div class="pd-ind-engineering__rule" aria-hidden="true"></div>
        </div>
        <div class="pd-ind-engineering__grid">${features}</div>
        ${
          specRows.length
            ? `
        <div class="pd-ind-table" role="table" aria-label="Technical specifications">
          <div class="pd-ind-table__head" role="row">
            <div class="pd-ind-table__cell" role="columnheader">Specification</div>
            <div class="pd-ind-table__cell" role="columnheader">Value</div>
            <div class="pd-ind-table__cell" role="columnheader">Specification</div>
            <div class="pd-ind-table__cell" role="columnheader">Value</div>
          </div>
          ${specRows.join('')}
        </div>`
            : ''
        }
      </div>
    </section>`
        : ''
    }
    ${
      box
        ? `
    <section class="pd-ind-box section-y">
      <div class="page-container pd-ind-box__grid">
        <div>
          <h2>${escapeHtml(box.title)}</h2>
          <ul class="pd-ind-box__list">${boxItems}</ul>
        </div>
        <div class="pd-ind-box__visual">
          ${box.image ? `<img src="${escapeHtml(box.image)}" alt="">` : ''}
          ${
            box.badgeStat
              ? `<div class="pd-ind-box__badge">
            <span class="pd-ind-box__badge-stat">${escapeHtml(box.badgeStat)}</span>
            <span class="pd-ind-box__badge-label">${escapeHtml(box.badgeLabel ?? '')}</span>
          </div>`
              : ''
          }
        </div>
      </div>
    </section>`
        : ''
    }
    ${
      cta
        ? `
    <section class="pd-ind-cta section-y">
      <div class="page-container pd-ind-cta__inner">
        <h2>${escapeHtml(cta.title)}</h2>
        <p>${escapeHtml(cta.text)}</p>
        <div class="pd-ind-cta__actions">
          <a href="/pages/forms/procurement.html" class="pd-ind-cta__primary">${escapeHtml(cta.primaryLabel)}</a>
          ${cta.secondaryLabel ? `<a href="/pages/forms/procurement.html" class="pd-ind-cta__secondary">${escapeHtml(cta.secondaryLabel)}</a>` : ''}
        </div>
      </div>
    </section>`
        : ''
    }
  `;
}

/**
 * Split product detail markup so the hero stays in the sidebar layout and
 * everything below scrolls full-width.
 * @param {string} html
 */
export function splitProductDetailPage(html) {
  const match = html.match(
    /^(\s*<section class="[^"]*\b(?:pd-hero|product-hero)\b[^"]*"[\s\S]*?<\/section>)([\s\S]*)$/,
  );
  if (!match) {
    return { hero: html, rest: '' };
  }
  return { hero: match[1], rest: match[2] };
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderMountingBracketPage(product, category) {
  const specs = product.techSpecsList
    ?.map(
      (item) => `
        <li class="pd-bracket-spec">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <div>
            <p class="pd-bracket-spec__label">${escapeHtml(item.title)}</p>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </li>`,
    )
    .join('');

  const deployment = product.deploymentCards
    ?.map(
      (card) => `
        <article class="pd-bracket-deploy__card">
          <i data-lucide="${escapeHtml(card.icon)}"></i>
          <div>
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.text)}</p>
          </div>
        </article>`,
    )
    .join('');

  const engineering = product.engineeringSection;
  const cta = product.commercialQuoteCta;

  return `
    <section class="pd-bracket-hero pd-hero section-y">
      <div class="page-container pd-hero__grid pd-hero__grid--wide">
        ${renderGallery(product, { tall: true })}
        <div class="pd-hero__info">
          ${product.badge ? `<span class="pd-bracket-badge">${escapeHtml(product.badge)}</span>` : ''}
          <h1 class="product-hero__title pd-bracket-hero__title">${escapeHtml(product.name)}</h1>
          <p class="product-hero__sku">SKU: ${escapeHtml(product.sku)}</p>
          <p class="product-hero__desc">${escapeHtml(product.description)}</p>
          ${product.stockNote || product.inStock ? `
            <div class="pd-bracket-stock">
              <i data-lucide="badge-check"></i>
              <span>${escapeHtml(product.stockNote ?? 'In Stock')}</span>
            </div>` : ''}
          ${renderQuoteActions(product)}
        </div>
      </div>
    </section>
    <section class="pd-bracket-specs section-y">
      <div class="page-container pd-bracket-specs__grid">
        <div class="pd-bracket-specs__list">
          <h2>Technical Specifications</h2>
          ${specs ? `<ul>${specs}</ul>` : ''}
        </div>
        <div class="pd-bracket-deploy">
          <h2>Professional Deployment</h2>
          <div class="pd-bracket-deploy__cards">${deployment ?? ''}</div>
        </div>
      </div>
    </section>
    ${engineering ? `
      <section class="pd-bracket-engineering section-y">
        <div class="page-container">
          <h2>${escapeHtml(engineering.title)}</h2>
          <div class="pd-bracket-engineering__grid">
            <blockquote class="pd-bracket-engineering__quote">
              <p class="pd-bracket-engineering__eyebrow">${escapeHtml(engineering.eyebrow)}</p>
              <p>${escapeHtml(engineering.text)}</p>
            </blockquote>
            <div class="pd-bracket-engineering__visual">
              <img src="${escapeHtml(engineering.image)}" alt="Technical blueprint of ${escapeHtml(product.name)} installation">
            </div>
          </div>
        </div>
      </section>` : ''}
    ${cta ? `
      <section class="pd-bracket-cta section-y">
        <div class="page-container">
          <div class="pd-bracket-cta__card">
            <i data-lucide="clipboard-list"></i>
            <h2>${escapeHtml(cta.title)}</h2>
            <p>${escapeHtml(cta.text)}</p>
            <a href="/pages/forms/procurement.html" class="pd-bracket-cta__btn">${escapeHtml(cta.buttonLabel)}</a>
          </div>
        </div>
      </section>` : ''}
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderLeatherGlovesPage(product, category) {
  const defaultSize = product.defaultSize ?? product.availableSizes?.[0];
  const sizes = product.availableSizes
    ?.map(
      (size) => `
        <span class="pd-gloves-size${size === defaultSize ? ' is-active' : ''}" aria-current="${size === defaultSize ? 'true' : 'false'}">${escapeHtml(size)}</span>`,
    )
    .join('');

  const specs = product.specs
    ?.map(
      (row) => `
        <li class="pd-gloves-spec">
          <span>${escapeHtml(row.label)}</span>
          <strong${row.label.toLowerCase() === 'compliance' ? ' class="pd-gloves-spec__accent"' : ''}>${escapeHtml(row.value)}</strong>
        </li>`,
    )
    .join('');

  const compliance = product.safetyComplianceCards
    ?.map(
      (card) => `
        <article class="pd-gloves-compliance__card">
          <i data-lucide="${escapeHtml(card.icon)}"></i>
          <h3>${escapeHtml(card.title)}</h3>
          <span class="pd-gloves-compliance__badge">${escapeHtml(card.badge)}</span>
          <p>${escapeHtml(card.text)}</p>
        </article>`,
    )
    .join('');

  const ratings = product.safetyRatings
    ?.map(
      (row) => `
        <div class="pd-gloves-rating">
          <span>${escapeHtml(row.label)}</span>
          <strong class="${row.accent ? 'pd-gloves-rating__accent' : 'pd-gloves-rating__muted'}">${escapeHtml(row.value)}</strong>
        </div>`,
    )
    .join('');

  const useCaseSection = product.useCaseSection;
  const useCases = product.useCaseCards
    ?.map(
      (card, index) => `
        <article class="pd-gloves-usecase${useCaseSection ? ' pd-gloves-usecase--overlay' : ''}${useCaseSection && index === 1 ? ' pd-gloves-usecase--offset' : ''}">
          <div class="pd-gloves-usecase__media">
            <img src="${escapeHtml(card.image)}" alt="">
            ${useCaseSection ? `
            <div class="pd-gloves-usecase__caption">
              <h3>${escapeHtml(card.title)}</h3>
              <p>${escapeHtml(card.text)}</p>
            </div>` : `<h3>${escapeHtml(card.title)}</h3>`}
          </div>
          ${useCaseSection ? '' : `<p>${escapeHtml(card.text)}</p>`}
        </article>`,
    )
    .join('');

  const bulk = product.bulkProcurement;
  const tiers = bulk?.tiers
    .map(
      (tier) => `
        <tr${tier.featured ? ' class="pd-gloves-bulk__row--featured"' : ''}>
          <td>
            <span>${escapeHtml(tier.qty)}</span>
            ${tier.savings !== 'Standard' ? `<span class="pd-gloves-bulk__chip${tier.savings.includes('20') ? ' pd-gloves-bulk__chip--accent' : ''}">${escapeHtml(tier.savings)}</span>` : ''}
          </td>
          <td class="${tier.savings !== 'Standard' ? 'pd-gloves-bulk__savings' : ''}">${escapeHtml(tier.benefit ?? tier.savings)}</td>
        </tr>`,
    )
    .join('');

  const skuMeta = product.itemNumber
    ? `<div class="pd-gloves-meta"><span class="product-hero__sku">SKU: ${escapeHtml(product.sku)}</span><span class="pd-gloves-meta__dot" aria-hidden="true"></span><span>Item #${escapeHtml(product.itemNumber)}</span></div>`
    : `<p class="product-hero__sku">SKU: ${escapeHtml(product.sku)}</p>`;

  const honeySplit = Boolean(bulk && ratings);

  return `
    <section class="pd-gloves-hero pd-hero section-y">
      <div class="page-container pd-gloves-hero__grid">
        ${renderGallery(product, { tall: true })}
        <div class="pd-hero__info">
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          ${skuMeta}
          <p class="product-hero__desc pd-gloves-hero__desc">${escapeHtml(product.description)}</p>
          ${sizes ? `
            <div class="pd-gloves-sizes">
              <p class="pd-gloves-sizes__label">Size</p>
              <div class="pd-gloves-sizes__row" role="list">${sizes}</div>
            </div>` : ''}
          <div class="pd-actions pd-actions--stack">
            <a href="/pages/forms/procurement.html" class="pd-actions__primary pd-actions__primary--wide">
              <i data-lucide="shopping-cart"></i> ${escapeHtml(product.primaryCtaLabel ?? 'Add to Quote')}
            </a>
            <a href="/pages/forms/procurement.html" class="pd-actions__secondary pd-actions__secondary--block">${escapeHtml(product.secondaryCtaLabel ?? 'Request Quote')}</a>
          </div>
          ${specs ? `
            <div class="pd-gloves-specs">
              <h2>Technical Specs</h2>
              <ul>${specs}</ul>
            </div>` : ''}
        </div>
      </div>
    </section>
    ${honeySplit ? `
      <section class="pd-gloves-split section-y">
        <div class="page-container pd-gloves-split__grid">
          <div class="pd-gloves-bulk__panel">
            <h2>${escapeHtml(bulk.title)}</h2>
            <p>${escapeHtml(bulk.text)}</p>
            <div class="pd-gloves-bulk__table-wrap">
              <table class="pd-gloves-bulk__table">
                <thead>
                  <tr>
                    <th>Quantity</th>
                    <th>Volume Benefit</th>
                  </tr>
                </thead>
                <tbody>${tiers}</tbody>
              </table>
            </div>
          </div>
          <div class="pd-gloves-ratings">
            <div class="pd-gloves-ratings__header">
              <h2>Safety Ratings</h2>
              <a href="/pages/forms/procurement.html" class="pd-gloves-bulk__cta">${escapeHtml(bulk.buttonLabel)}</a>
            </div>
            <div class="pd-gloves-ratings__list">${ratings}</div>
            ${product.safetyRatingsNote ? `
              <p class="pd-gloves-ratings__note">
                <i data-lucide="${escapeHtml(product.safetyRatingsNoteIcon ?? 'circle-check')}"></i>
                <span>${escapeHtml(product.safetyRatingsNote)}</span>
              </p>` : ''}
          </div>
        </div>
      </section>` : ''}
    ${!honeySplit && bulk ? `
      <section class="pd-gloves-bulk section-y">
        <div class="page-container">
          <div class="pd-gloves-bulk__panel">
            <div class="pd-gloves-bulk__header">
              <div>
                <h2>${escapeHtml(bulk.title)}</h2>
                <p>${escapeHtml(bulk.text)}</p>
              </div>
              <a href="/pages/forms/procurement.html" class="pd-gloves-bulk__cta">${escapeHtml(bulk.buttonLabel)}</a>
            </div>
            <div class="pd-gloves-bulk__table-wrap">
              <table class="pd-gloves-bulk__table">
                <thead>
                  <tr>
                    <th>Quantity</th>
                    <th>Volume Benefit</th>
                  </tr>
                </thead>
                <tbody>${tiers}</tbody>
              </table>
            </div>
          </div>
        </div>
      </section>` : ''}
    ${!honeySplit && compliance ? `
      <section class="pd-gloves-compliance section-y">
        <div class="page-container">
          <div class="pd-gloves-compliance__intro">
            <h2>Safety &amp; Compliance</h2>
            <p>Engineered to meet and exceed industry safety standards for maximum protection in rigorous environments.</p>
          </div>
          <div class="pd-gloves-compliance__grid">${compliance}</div>
        </div>
      </section>` : ''}
    ${useCases ? `
      <section class="pd-gloves-usecases section-y${useCaseSection ? ' pd-gloves-usecases--dark' : ''}">
        <div class="page-container">
          ${useCaseSection ? `
            <div class="pd-gloves-usecases__intro">
              <h2>${escapeHtml(useCaseSection.title)}</h2>
              <p>${escapeHtml(useCaseSection.text)}</p>
            </div>` : '<h2>Professional Use Cases</h2>'}
          <div class="pd-gloves-usecases__grid">${useCases}</div>
        </div>
      </section>` : ''}
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderVehicleExtinguisherPage(product) {
  const features = product.coreFeatures
    ?.map(
      (item) => `
        <article class="pd-vehicle-feature">
          <div class="pd-vehicle-feature__icon">
            <i data-lucide="${escapeHtml(item.icon)}"></i>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>`,
    )
    .join('');

  const specCards = product.techSpecCards
    ?.map((card) => {
      const rows = card.rows
        .map(
          (row) => `
            <li>
              <span>${escapeHtml(row.label)}</span>
              <strong>${escapeHtml(row.value)}</strong>
            </li>`,
        )
        .join('');
      return `
        <article class="pd-vehicle-spec">
          <div>
            <p class="pd-vehicle-spec__eyebrow">${escapeHtml(card.eyebrow)}</p>
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.text)}</p>
          </div>
          <ul>${rows}</ul>
        </article>`;
    })
    .join('');

  const trust = product.trustBadges
    ?.map(
      (item) => `
        <div class="pd-vehicle-trust">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <span>${escapeHtml(item.label)}</span>
        </div>`,
    )
    .join('');

  const bulk = product.bulkPricing;
  const mission = product.missionBanner;
  const missionBadges = mission?.badges
    .map(
      (item) => `
        <span class="pd-vehicle-mission__chip">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          ${escapeHtml(item.label)}
        </span>`,
    )
    .join('');

  return `
    <section class="pd-vehicle-hero pd-hero section-y">
      <div class="page-container">
        <nav class="pd-vehicle-crumbs" aria-label="Breadcrumb">
          <a href="/pages/catalog/fire-protection.html">Fire Protection</a>
          <i data-lucide="chevron-right"></i>
          <span>${escapeHtml(product.sku)}</span>
        </nav>
        <div class="pd-vehicle-hero__grid">
          ${renderGallery(product, { className: 'pd-vehicle-gallery', forceThumbs: true })}
          <div class="pd-hero__info pd-vehicle-hero__info">
            <span class="pd-vehicle-sku">SKU: ${escapeHtml(product.sku)}</span>
            <h1 class="product-hero__title pd-vehicle-hero__title">${escapeHtml(product.name)}</h1>
            ${
              product.unitPrice
                ? `<p class="pd-vehicle-price">${escapeHtml(product.unitPrice)}${
                    product.unitPriceSuffix
                      ? ` <span>${escapeHtml(product.unitPriceSuffix)}</span>`
                      : ''
                  }</p>`
                : ''
            }
            <p class="product-hero__desc">${escapeHtml(product.description)}</p>
            <div class="pd-vehicle-panel">
              <div class="pd-vehicle-qty" data-qty-stepper>
                <label class="pd-vehicle-qty__label" for="pd-vehicle-qty">Quantity Selector</label>
                <div class="pd-vehicle-qty__row">
                  <div class="pd-vehicle-qty__control">
                    <button type="button" data-qty-dec aria-label="Decrease quantity">&minus;</button>
                    <input id="pd-vehicle-qty" type="number" min="1" value="1" data-qty-input>
                    <button type="button" data-qty-inc aria-label="Increase quantity">+</button>
                  </div>
                  ${product.stockNote ? `<span class="pd-vehicle-qty__note">${escapeHtml(product.stockNote)}</span>` : ''}
                </div>
              </div>
              ${
                bulk
                  ? `<div class="pd-vehicle-bulk">
                <div>
                  <span class="pd-vehicle-bulk__label">${escapeHtml(bulk.label)}</span>
                  <span class="pd-vehicle-bulk__sub">${escapeHtml(bulk.subtitle)}</span>
                </div>
                ${bulk.price ? `<span class="pd-vehicle-bulk__price">${escapeHtml(bulk.price)}</span>` : ''}
              </div>`
                  : ''
              }
              <div class="pd-actions pd-actions--stack">
                <a href="/pages/forms/procurement.html" class="pd-actions__primary pd-actions__primary--wide pd-vehicle-cta">
                  <i data-lucide="clipboard-list"></i>
                  ${escapeHtml(product.primaryCtaLabel ?? 'Request Bulk Quote')}
                </a>
                <a href="/pages/forms/procurement.html" class="pd-actions__secondary pd-actions__secondary--block pd-vehicle-cta-secondary">
                  <i data-lucide="shopping-cart"></i>
                  ${escapeHtml(product.secondaryCtaLabel ?? 'Add to Fleet Order')}
                </a>
              </div>
            </div>
            ${trust ? `<div class="pd-vehicle-trust-row">${trust}</div>` : ''}
          </div>
        </div>
      </div>
    </section>
    ${
      features
        ? `
    <section class="pd-vehicle-engineering section-y">
      <div class="page-container">
        <div class="pd-vehicle-engineering__intro">
          <p class="pd-vehicle-eyebrow">Engineered for Extremes</p>
          <h2>Core Engineering Specifications</h2>
        </div>
        <div class="pd-vehicle-engineering__grid">${features}</div>
      </div>
    </section>`
        : ''
    }
    ${
      specCards
        ? `
    <section class="pd-vehicle-tech section-y">
      <div class="page-container">
        <div class="pd-vehicle-tech__header">
          <div>
            <p class="pd-vehicle-eyebrow">Specs &amp; Build Data</p>
            <h2>Technical Specifications</h2>
          </div>
          <p>Manufactured to strict military and commercial first responder tolerances for maximum reliability under extreme environmental stress.</p>
        </div>
        <div class="pd-vehicle-tech__grid">${specCards}</div>
      </div>
    </section>`
        : ''
    }
    ${
      mission
        ? `
    <section class="pd-vehicle-mission section-y">
      <div class="pd-vehicle-mission__bg" style="background-image: url('${escapeHtml(mission.image)}')" aria-hidden="true"></div>
      <div class="page-container pd-vehicle-mission__grid">
        <div>
          <p class="pd-vehicle-eyebrow pd-vehicle-eyebrow--light">${escapeHtml(mission.eyebrow)}</p>
          <h2>${escapeHtml(mission.title)}</h2>
          <p class="pd-vehicle-mission__copy">${escapeHtml(mission.text)}</p>
          ${missionBadges ? `<div class="pd-vehicle-mission__chips">${missionBadges}</div>` : ''}
        </div>
        <aside class="pd-vehicle-advisory">
          <h3>${escapeHtml(mission.advisory.title)}</h3>
          <p>${escapeHtml(mission.advisory.text)}</p>
          <a href="/pages/forms/procurement.html">${escapeHtml(mission.advisory.buttonLabel)}</a>
        </aside>
      </div>
    </section>`
        : ''
    }
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderHalotronPage(product) {
  const specs = product.quickSpecs
    ?.map(
      (spec) => `
        <article class="pd-halotron-spec">
          ${spec.icon ? `<i data-lucide="${escapeHtml(spec.icon)}"></i>` : ''}
          <h3>${escapeHtml(spec.label)}</h3>
          <p>${escapeHtml(spec.value)}</p>
          ${spec.note ? `<span>${escapeHtml(spec.note)}</span>` : ''}
        </article>`,
    )
    .join('');

  const features = product.coreFeatures
    ?.map(
      (item) => `
        <article class="pd-halotron-feature">
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          ${item.eyebrow ? `<p class="pd-halotron-feature__eyebrow">${escapeHtml(item.eyebrow)}</p>` : ''}
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>`,
    )
    .join('');

  return `
    <section class="pd-halotron-hero pd-hero section-y">
      <div class="page-container pd-halotron-hero__grid">
        ${renderGallery(product, { className: 'pd-halotron-gallery' })}
        <div class="pd-hero__info pd-halotron-hero__info">
          ${product.productEyebrow ? `<span class="pd-halotron-badge">${escapeHtml(product.productEyebrow)}</span>` : ''}
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          ${product.productSubtitle ? `<p class="pd-halotron-tagline">${escapeHtml(product.productSubtitle)}</p>` : ''}
          <p class="product-hero__desc">${escapeHtml(product.description)}</p>
          <div class="pd-halotron-actions">
            <a href="/pages/forms/procurement.html" class="pd-halotron-cta">
              <i data-lucide="mail"></i>
              ${escapeHtml(product.primaryCtaLabel ?? 'Contact Us')}
            </a>
            <a href="/pages/forms/procurement.html" class="pd-halotron-wish" aria-label="Save this product to a quote request">
              <i data-lucide="heart"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    ${
      specs
        ? `
    <section class="pd-halotron-specs section-y">
      <div class="page-container">
        <h2>Technical Specifications</h2>
        <div class="pd-halotron-specs__grid">${specs}</div>
      </div>
    </section>`
        : ''
    }
    ${
      features
        ? `
    <section class="pd-halotron-safety section-y">
      <div class="page-container">
        <h2>Clean Agent Deployment &amp; Environmental Safety</h2>
        <div class="pd-halotron-safety__grid">${features}</div>
      </div>
    </section>`
        : ''
    }
  `;
}

/** @param {import('../../../config/catalog.js').CatalogProduct} product */
function renderNitrileGlovesPage(product) {
  const defaultSize = product.defaultSize ?? product.availableSizes?.[0];
  const sizes = product.availableSizes
    ?.map(
      (size) => `
        <button type="button" class="pd-nitrile-size${size === defaultSize ? ' is-active' : ''}" data-option-pick="size" data-option-value="${escapeHtml(size)}" aria-pressed="${size === defaultSize ? 'true' : 'false'}">${escapeHtml(size)}</button>`,
    )
    .join('');

  const defaultColor = product.defaultColor ?? product.availableColors?.[0]?.id;
  const colors = product.availableColors
    ?.map(
      (color) => `
        <button type="button" class="pd-nitrile-swatch${color.id === defaultColor ? ' is-active' : ''}" data-option-pick="color" data-option-value="${escapeHtml(color.id)}" aria-label="${escapeHtml(color.label)}" aria-pressed="${color.id === defaultColor ? 'true' : 'false'}" style="--swatch:${escapeHtml(color.swatch)}"></button>`,
    )
    .join('');

  const specs = product.specs
    ?.map(
      (spec) => `
        <li>
          <span>${escapeHtml(spec.label)}</span>
          <strong${spec.accent ? ' class="pd-nitrile-spec--accent"' : ''}>${escapeHtml(spec.value)}</strong>
        </li>`,
    )
    .join('');

  const highlights = product.trustBadges
    ?.map(
      (item) => `
        <li>
          <i data-lucide="${escapeHtml(item.icon)}"></i>
          <span>${escapeHtml(item.label)}</span>
        </li>`,
    )
    .join('');

  const bulk = product.bulkProcurement;
  const tiers = bulk?.tiers
    .map(
      (tier) => `
        <tr>
          <td>${escapeHtml(tier.qty)}</td>
          <td${tier.accent ? ' class="pd-nitrile-bulk__accent"' : ''}>${escapeHtml(tier.savings)}</td>
        </tr>`,
    )
    .join('');

  const compliance = product.safetyComplianceCards
    ?.map(
      (card) => `
        <article class="pd-nitrile-compliance__card">
          <i data-lucide="${escapeHtml(card.icon)}"></i>
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.text)}</p>
        </article>`,
    )
    .join('');

  return `
    <section class="pd-nitrile-hero pd-hero section-y">
      <div class="page-container pd-nitrile-hero__grid">
        ${renderGallery(product, { className: 'pd-nitrile-gallery' })}
        <div class="pd-hero__info pd-nitrile-hero__info">
          <div class="pd-nitrile-pills">
            ${product.badge ? `<span class="pd-nitrile-pill pd-nitrile-pill--solid">${escapeHtml(product.badge)}</span>` : ''}
            ${product.inStock ? '<span class="pd-nitrile-pill pd-nitrile-pill--outline">In Stock</span>' : ''}
          </div>
          <h1 class="product-hero__title">${escapeHtml(product.name)}</h1>
          <p class="product-hero__desc">${escapeHtml(product.description)}</p>
          ${product.packUnit ? `<p class="pd-nitrile-unit">${escapeHtml(product.packUnit)}</p>` : ''}
          ${
            specs
              ? `
            <div class="pd-nitrile-specs">
              <h2>Technical Specs</h2>
              <ul>${specs}</ul>
            </div>`
              : ''
          }
          ${
            sizes
              ? `
            <div class="pd-nitrile-options">
              <p class="pd-nitrile-options__label">Size</p>
              <div class="pd-nitrile-sizes" data-option-group="size">${sizes}</div>
            </div>`
              : ''
          }
          ${
            colors
              ? `
            <div class="pd-nitrile-options">
              <p class="pd-nitrile-options__label">Color</p>
              <div class="pd-nitrile-colors" data-option-group="color">${colors}</div>
            </div>`
              : ''
          }
          <div class="pd-nitrile-actions">
            <div class="pd-nitrile-qty" data-qty-stepper>
              <button type="button" data-qty-dec aria-label="Decrease quantity">&minus;</button>
              <input type="number" min="1" value="1" data-qty-input aria-label="Quantity">
              <button type="button" data-qty-inc aria-label="Increase quantity">+</button>
            </div>
            <a href="/pages/forms/procurement.html" class="pd-nitrile-cta">
              <i data-lucide="shopping-cart"></i>
              ${escapeHtml(product.primaryCtaLabel ?? 'Add to Quote')}
            </a>
          </div>
          ${highlights ? `<ul class="pd-nitrile-highlights">${highlights}</ul>` : ''}
        </div>
      </div>
    </section>
    ${
      bulk
        ? `
    <section class="pd-nitrile-bulk section-y">
      <div class="page-container">
        <div class="pd-nitrile-bulk__header">
          <div>
            <h2>${escapeHtml(bulk.title)}</h2>
            <p>${escapeHtml(bulk.text)}</p>
          </div>
          <a href="/pages/forms/procurement.html">${escapeHtml(bulk.buttonLabel)}</a>
        </div>
        <div class="pd-nitrile-bulk__table-wrap">
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>${tiers}</tbody>
          </table>
        </div>
      </div>
    </section>`
        : ''
    }
    ${
      compliance
        ? `
    <section class="pd-nitrile-compliance section-y">
      <div class="page-container">
        <div class="pd-nitrile-compliance__intro">
          <h2>Safety &amp; Compliance</h2>
          <p>Engineered to meet and exceed industry safety standards for maximum protection in rigorous environments.</p>
        </div>
        <div class="pd-nitrile-compliance__grid">${compliance}</div>
      </div>
    </section>`
        : ''
    }
  `;
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
    case 'extinguisher-industrial':
      return renderExtinguisherIndustrialPage(product, category);
    case 'extinguisher-vehicle':
      return renderVehicleExtinguisherPage(product);
    case 'extinguisher-halotron':
      return renderHalotronPage(product);
    case 'mounting-bracket':
      return renderMountingBracketPage(product, category);
    case 'leather-gloves':
      return renderLeatherGlovesPage(product, category);
    case 'nitrile-gloves':
      return renderNitrileGlovesPage(product);
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
