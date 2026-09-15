/**
 * Markup builders for catalog hub, category, and product pages.
 *
 * Nothing in this module (or the components it pulls in) touches the DOM, so
 * scripts/generate-catalog-pages.mjs runs it in Node and bakes the result into
 * pages/catalog/**. The browser modules only bind behaviour to that markup.
 */
import {
  HUB_CATEGORY_SLUG,
  getCategoryBySlug,
  getHubPageSize,
  getProductBySlug,
  getProductsByCategory,
} from '../../../config/catalog.js';
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
  renderFireProductSection,
  renderFireSolutionsSection,
} from './layout-fire-protection.js';
import { renderProductDetailPage, splitProductDetailPage } from './layout-product-detail.js';

const FOOTER_CTA = `
  <section class="catalog-footer-cta section-y">
    <div class="page-container text-center">
      <h2 class="font-headline-lg text-3xl uppercase mb-4">Ready to equip your facility?</h2>
      <p class="text-secondary mb-8 max-w-2xl mx-auto">Submit a procurement request for volume pricing, restocking schedules, and compliance documentation.</p>
      <a href="/pages/forms/procurement.html" class="inline-block bg-primary text-white px-12 py-4 font-label-caps text-sm tracking-widest uppercase hover:bg-obsidian transition-colors">Request a Quote</a>
    </div>
  </section>
`;

function renderEyeCareCategory(slug, category, products) {
  return `
    ${renderCategoryHero(category)}
    ${wrapWithCatalogSidebar(slug, renderEyeCareProductSection(category, products))}
    ${category.complianceSection ? renderEyeCareComplianceSection(category.complianceSection) : ''}
    ${category.bentoGrid ? renderEyeCareBentoGrid(category.bentoGrid) : ''}
    ${category.ctaBanner ? renderEyeCareCtaBanner(category.ctaBanner) : ''}
  `;
}

function renderIndustrialPpeCategory(slug, category, products) {
  return `
    ${renderCategoryHero(category)}
    ${wrapWithCatalogSidebar(slug, `
      <section class="catalog-ppe-catalog section-y" id="catalog">
        <div class="page-container">
          ${renderPpeProductSections(products)}
        </div>
      </section>
    `)}
    ${category.ctaSection ? renderPpeCtaSection(category.ctaSection) : ''}
  `;
}

function renderFireProtectionCategory(slug, category, products) {
  return `
    ${renderCategoryHero(category)}
    ${wrapWithCatalogSidebar(slug, renderFireProductSection(category, products))}
    ${category.solutionsSection ? renderFireSolutionsSection(category.solutionsSection) : ''}
  `;
}

function renderStandardCategory(slug, category, products) {
  const filters = category.filters;
  const cardVariant = category.cardVariant ?? 'solid';

  return `
    ${renderCategoryHero(category)}
    ${wrapWithCatalogSidebar(slug, `
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
    ${FOOTER_CTA}
  `;
}

/**
 * Inner markup for a category page's `[data-catalog-root]`.
 * @param {string} slug
 * @returns {string} empty string when the slug is unknown
 */
export function renderCategoryPageHtml(slug) {
  const category = getCategoryBySlug(slug);
  if (!category) return '';

  const products = getProductsByCategory(slug);

  switch (category.layout) {
    case 'eye-care':
      return renderEyeCareCategory(slug, category, products);
    case 'industrial-ppe':
      return renderIndustrialPpeCategory(slug, category, products);
    case 'fire-protection':
      return renderFireProtectionCategory(slug, category, products);
    default:
      return renderStandardCategory(slug, category, products);
  }
}

/**
 * Inner markup for the catalog hub's `[data-catalog-root]`.
 * @returns {string}
 */
export function renderHubPageHtml() {
  const category = getCategoryBySlug(HUB_CATEGORY_SLUG);
  if (!category) return '';

  const products = getProductsByCategory(HUB_CATEGORY_SLUG);
  const pageSize = getHubPageSize(category);
  const totalPages = Math.ceil(products.length / pageSize);

  return `
    ${renderCatalogHubHero(category)}
    ${wrapWithCatalogSidebar(HUB_CATEGORY_SLUG, `
      <section class="catalog-grid-section catalog-grid-section--hub section-y" id="catalog">
        <div class="page-container">
          <div class="catalog-grid" data-catalog-grid>
            ${products
              .map((product, index) =>
                renderProductCard(product, {
                  glass: true,
                  page: Math.floor(index / pageSize) + 1,
                }),
              )
              .join('')}
          </div>
          ${renderPagination(totalPages)}
        </div>
      </section>
    `)}
    ${renderInfoSection(category, { hubStyle: true })}
    ${renderFaqSection(category.faqs ?? [], { hubStyle: true })}
  `;
}

/**
 * Inner markup for a product detail page's `[data-product-root]`.
 * @param {string} slug
 * @returns {string} empty string when the product or its category is unknown
 */
export function renderProductPageHtml(slug) {
  const product = getProductBySlug(slug);
  if (!product) return '';

  const category = getCategoryBySlug(product.categorySlug);
  if (!category) return '';

  const html = renderProductDetailPage(product, category);

  // Keep the category sidebar sticky for the full nitrile page. Other layouts
  // split below-fold sections out so they can run full-width.
  if (product.detailLayout === 'nitrile-gloves') {
    return wrapWithCatalogSidebar(product.categorySlug, html, { variant: 'product' });
  }

  const { hero, rest } = splitProductDetailPage(html);

  return `
    ${wrapWithCatalogSidebar(product.categorySlug, hero, { variant: 'product' })}
    ${rest}
  `;
}
