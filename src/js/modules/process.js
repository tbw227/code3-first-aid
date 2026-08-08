/**
 * How It Works — renders numbered steps and dashboard feature tiles.
 */
import { initIcons } from '../utils/icons.js';

const STEPS = [
  {
    icon: 'calendar-days',
    title: 'Schedule Service',
    text: 'Choose a monthly or quarterly visit plan for your facility.',
  },
  {
    icon: 'clipboard-check',
    title: 'On-Site Inspection',
    text: 'We inspect kits, AEDs, extinguishers, and eyewash stations.',
  },
  {
    icon: 'package',
    title: 'Restock & Replace',
    text: 'Expired or damaged items are replaced on every visit.',
  },
  {
    icon: 'chart-line',
    title: 'Digital Inventory',
    text: 'Every item is tracked in our inventory platform.',
  },
  {
    icon: 'file-text',
    title: 'Compliance Reporting',
    text: 'Inspection reports and service history stay on file.',
  },
  {
    icon: 'shield-check',
    title: 'Stay Ready',
    text: 'Your facility stays stocked, compliant, and prepared.',
  },
];

const FEATURES = [
  {
    title: 'QR Asset Tracking',
    image: '/images/supplies/home-services-zoll-aed-plus.png',
    alt: 'AED and tracked safety assets',
  },
  {
    title: 'Inventory Reports',
    image: '/images/supplies/home-process-mobile-eyewash-station.jpg',
    alt: 'First aid inventory supplies',
  },
  {
    title: 'Inspection History',
    image: '/images/supplies/home-process-fire-extinguisher.jpg',
    alt: 'Fire extinguisher inspection',
  },
  {
    title: 'Compliance Status',
    image: '/images/training/cpr-training-manikin.jpg',
    alt: 'Workplace safety training',
  },
];

function step({ icon, title, text }, index, total) {
  const number = index + 1;
  const isLast = index === total - 1;
  return `
    <div class="process-step${isLast ? ' process-step--last' : ''}">
      <div class="process-step__icon" aria-hidden="true">
        <img src="/icons/${icon}.svg" alt="" class="process-step__svg">
      </div>
      <div class="process-step__body">
        <h3 class="process-step__heading font-headline-md font-bold text-on-surface">
          <span class="process-step__number">${number}</span>
          <span class="process-step__title">${title}</span>
        </h3>
        <p class="process-step__text font-body-md text-secondary">${text}</p>
      </div>
      ${isLast ? '' : `
      <div class="process-step__arrow" aria-hidden="true">
        <i data-lucide="arrow-right"></i>
      </div>`}
    </div>
  `;
}

function feature({ title, image, alt }) {
  return `
    <div class="process-feature">
      <img
        src="${image}"
        alt="${alt}"
        class="process-feature__image"
        loading="lazy"
        decoding="async"
      >
      <p class="font-label-caps text-sm text-on-surface font-semibold">${title}</p>
    </div>
  `;
}

export function initProcessSection() {
  const stepsRoot = document.querySelector('[data-process-steps]');
  const featuresRoot = document.querySelector('[data-process-features]');

  if (stepsRoot) {
    stepsRoot.innerHTML = STEPS.map((item, index) =>
      step(item, index, STEPS.length)
    ).join('');
    initIcons(stepsRoot);
  }

  if (featuresRoot) {
    featuresRoot.innerHTML = FEATURES.map(feature).join('');
  }
}
