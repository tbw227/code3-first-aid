/**
 * How It Works — renders the feature rows beside the warehouse photo.
 */

const STEPS = [
  {
    icon: 'clipboard-check',
    title: 'Inventory Management',
    text: 'We track what you have, what you use, and what needs attention.',
  },
  {
    icon: 'shield-check',
    title: 'Compliance Ready',
    text: 'All inspections and services are documented and always accessible.',
  },
  {
    icon: 'chart-line',
    title: 'Total Visibility',
    text: 'Updates and reports from every location you manage.',
  },
];

const FEATURES = [
  {
    title: 'QR Asset Tracking',
    image: '/images/supplies/home-services-zoll-aed-plus.webp',
    alt: 'AED and tracked safety assets',
  },
  {
    title: 'Inventory Reports',
    image: '/images/supplies/home-process-mobile-eyewash-station.webp',
    alt: 'First aid inventory supplies',
  },
  {
    title: 'Inspection History',
    image: '/images/supplies/home-process-fire-extinguisher.webp',
    alt: 'Fire extinguisher inspection',
  },
  {
    title: 'Compliance Status',
    image: '/images/training/cpr-training-manikin.webp',
    alt: 'Workplace safety training',
  },
];

function step({ icon, title, text }) {
  return `
    <li class="hiw-feature">
      <span class="hiw-feature__icon" aria-hidden="true">
        <img src="/icons/${icon}.svg" alt="">
      </span>
      <div>
        <h3 class="hiw-feature__title">${title}</h3>
        <p class="hiw-feature__text">${text}</p>
      </div>
    </li>
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
    stepsRoot.innerHTML = STEPS.map((item) => step(item)).join('');
  }

  if (featuresRoot) {
    featuresRoot.innerHTML = FEATURES.map(feature).join('');
  }
}
