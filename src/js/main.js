import './seo-head.js';
import { initFormHandler } from './modules/form-handler.js';
import { initSiteNav } from './modules/site-nav.js';
import { initStickyHeader } from './modules/sticky-header.js';

import {
  initHomeAnimations,
  initProductAnimations,
  initCprTrainingAnimations,
} from './modules/scroll-animations.js';

initSiteNav();

const page = document.body.dataset.page ?? 'home';

switch (page) {
  case 'home':
    initStickyHeader();
    initHomeAnimations();
    break;
  case 'safety-supplies':
    initStickyHeader();
    initProductAnimations();
    break;
  case 'cpr-training':
    initStickyHeader();
    initCprTrainingAnimations();
    break;
  case 'fire-training':
  case 'ppe-training':
  case 'service-areas':
    initStickyHeader();
    break;
  case 'cpr-enrollment':
  case 'fire-enrollment':
  case 'procurement':
    initStickyHeader();
    initFormHandler();
    break;
  default:
    break;
}
