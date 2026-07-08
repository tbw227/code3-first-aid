import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function animateFrom(selector, vars) {
  const targets = gsap.utils.toArray(selector);
  if (!targets.length) return;

  const trigger = vars.scrollTrigger?.trigger;
  if (typeof trigger === 'string') {
    if (!document.querySelector(trigger)) return;
  }

  gsap.from(targets, vars);
}

export function initHomeAnimations() {
  animateFrom('.hero-content', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
  });

  animateFrom('.collage-panel', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 0.4,
    ease: 'power3.out',
  });

  animateFrom('.curriculum-card', {
    scrollTrigger: {
      trigger: '.curriculum-grid',
      start: 'top 80%',
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  });

  animateFrom('.mastery-content', {
    scrollTrigger: {
      trigger: '.mastery',
      start: 'top 80%',
    },
    x: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });

  animateFrom('.cert-step', {
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 80%',
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power3.out',
  });
}

export function initProductAnimations() {
  animateFrom('.product-card', {
    scrollTrigger: {
      trigger: '#featured',
      start: 'top 80%',
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  });
}

export function initCprTrainingAnimations() {
  animateFrom('.curriculum-card', {
    scrollTrigger: {
      trigger: '.curriculum-grid',
      start: 'top 80%',
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  });

  animateFrom('.cert-step', {
    scrollTrigger: {
      trigger: '#certification',
      start: 'top 80%',
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power3.out',
  });
}
