/**
 * GSAP scroll and entrance animations with prefers-reduced-motion support.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Guarded gsap.from — skips if selector or scroll trigger target is missing. */
function animateFrom(selector, vars) {
  const targets = gsap.utils.toArray(selector);
  if (!targets.length) return;

  const trigger = vars.scrollTrigger?.trigger;
  if (typeof trigger === 'string' && !document.querySelector(trigger)) return;

  gsap.from(targets, vars);
}

/**
 * @param {() => void} runAnimations
 * @param {string | string[]} selectors
 */
function withMotionPreference(runAnimations, selectors) {
  const mm = gsap.matchMedia();
  const selectorList = Array.isArray(selectors) ? selectors : [selectors];

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    runAnimations();
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });

  mm.add('(prefers-reduced-motion: reduce)', () => {
    for (const selector of selectorList) {
      gsap.set(selector, { autoAlpha: 1, clearProps: 'transform' });
    }
    return () => {};
  });

  return mm;
}

/** Homepage: hero, collage, curriculum, mastery, certification, and process steps. */
export function initHomeAnimations() {
  withMotionPreference(() => {
    animateFrom('.hero-content', {
      y: 50,
      autoAlpha: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
    });

    gsap.fromTo(
      '.collage-panel',
      { y: 50, autoAlpha: 0, skewX: -15 },
      {
        y: 0,
        autoAlpha: 1,
        skewX: -15,
        duration: 1,
        stagger: 0.2,
        delay: 0.4,
        ease: 'power3.out',
        clearProps: 'transform',
      },
    );

    animateFrom('.curriculum-card', {
      scrollTrigger: {
        trigger: '.curriculum-grid',
        start: 'top 80%',
      },
      y: 60,
      autoAlpha: 0,
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
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out',
    });

    animateFrom('.cert-step', {
      scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%',
      },
      y: 40,
      autoAlpha: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
    });

    animateFrom('.process-header', {
      scrollTrigger: {
        trigger: '#process',
        start: 'top 80%',
      },
      y: 30,
      autoAlpha: 0,
      duration: 0.7,
      ease: 'power3.out',
    });

    animateFrom('.process-step', {
      scrollTrigger: {
        trigger: '#process',
        start: 'top 80%',
      },
      y: 40,
      autoAlpha: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
    });

    animateFrom('.process-media__frame', {
      scrollTrigger: {
        trigger: '#process',
        start: 'top 80%',
      },
      x: 40,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, [
    '.hero-content',
    '.collage-panel',
    '.curriculum-card',
    '.mastery-content',
    '.cert-step',
    '.process-header',
    '.process-step',
    '.process-media__frame',
  ]);
}

/** Safety supplies page: featured product cards. */
export function initProductAnimations() {
  withMotionPreference(() => {
    animateFrom('.product-card', {
      scrollTrigger: {
        trigger: '#featured',
        start: 'top 80%',
      },
      y: 60,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, '.product-card');
}

/** CPR training page: curriculum grid and certification path. */
export function initCprTrainingAnimations() {
  withMotionPreference(() => {
    animateFrom('.curriculum-card', {
      scrollTrigger: {
        trigger: '.curriculum-grid',
        start: 'top 80%',
      },
      y: 60,
      autoAlpha: 0,
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
      autoAlpha: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
    });
  }, ['.curriculum-card', '.cert-step']);
}
