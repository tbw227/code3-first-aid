/**
 * Application entry point.
 * Reads `data-page` on <body> and dynamically loads page-specific modules.
 */
import './seo-head.js';
import { initBackToTop } from './modules/back-to-top.js';
import { initSiteNav } from './modules/site-nav.js';
import { initStickyHeader } from './modules/sticky-header.js';
import { initIcons } from './utils/icons.js';

async function bootstrap() {
  initSiteNav();
  initStickyHeader();
  initBackToTop();
  initIcons();

  const page = document.body.dataset.page ?? 'home';

  switch (page) {
    case 'home': {
      const { initHomeAnimations } = await import('./modules/scroll-animations.js');
      const { initProcessSection } = await import('./modules/process.js');
      initProcessSection();
      initHomeAnimations();
      break;
    }
    case 'safety-supplies': {
      const { initProductAnimations } = await import('./modules/scroll-animations.js');
      initProductAnimations();
      break;
    }
    case 'cpr-training': {
      const { initCprTrainingAnimations } = await import('./modules/scroll-animations.js');
      initCprTrainingAnimations();
      break;
    }
    case 'cpr-enrollment':
    case 'fire-enrollment':
    case 'procurement': {
      const { initFormHandler } = await import('./modules/form-handler.js');
      initFormHandler();
      break;
    }
    default:
      break;
  }
}

void bootstrap();
