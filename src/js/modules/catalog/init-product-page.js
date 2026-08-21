/**
 * Product detail catalog pages — renders layout sections from config props.
 */
import { getCategoryBySlug, getProductBySlug } from '../../../config/catalog.js';
import { initIcons } from '../../utils/icons.js';
import { wrapWithCatalogSidebar } from './components.js';
import { bindProductGallery, renderProductDetailPage } from './layout-product-detail.js';

export function initProductPage() {
  const root = document.querySelector('[data-product-root]');
  const slug = document.body.dataset.catalogProduct;
  if (!root || !slug) return;

  const product = getProductBySlug(slug);
  if (!product) return;

  const category = getCategoryBySlug(product.categorySlug);
  if (!category) return;

  const shellBreadcrumbs = document.querySelector('.catalog-breadcrumbs');
  if (shellBreadcrumbs) {
    shellBreadcrumbs.hidden = true;
  }

  root.innerHTML = wrapWithCatalogSidebar(
    product.categorySlug,
    renderProductDetailPage(product, category),
    { variant: 'product' },
  );
  bindProductGallery(root);
  initIcons(root);
}
