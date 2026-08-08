/**
 * Client-side form UX for pages with `[data-form]`.
 * Submissions are sent to the site inbox via FormSubmit (static-friendly).
 */
import { SITE } from '../../config/seo.js';
import { FORM_SUBJECTS } from '../config/forms.js';
import { delay } from '../utils/timing.js';
import { createIconEl, initIcons } from '../utils/icons.js';

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}`;

/** @type {WeakMap<HTMLButtonElement, DocumentFragment>} */
const defaultButtonContent = new WeakMap();

/**
 * @param {HTMLButtonElement} button
 */
function captureDefaultContent(button) {
  if (defaultButtonContent.has(button)) return;

  const snapshot = document.createDocumentFragment();
  for (const node of button.childNodes) {
    snapshot.append(node.cloneNode(true));
  }
  defaultButtonContent.set(button, snapshot);
}

/**
 * @param {HTMLButtonElement} button
 */
function restoreDefaultContent(button) {
  const snapshot = defaultButtonContent.get(button);
  if (!snapshot) return;
  button.replaceChildren(...[...snapshot.childNodes].map((node) => node.cloneNode(true)));
}

/**
 * @param {string} iconName
 * @param {string} [extraClass]
 */
function createIcon(iconName, extraClass = '') {
  return createIconEl(iconName, extraClass);
}

/**
 * @param {HTMLButtonElement} button
 * @param {'processing' | 'success' | 'error'} state
 */
function setButtonVisual(button, state) {
  if (state === 'processing') {
    button.replaceChildren(
      createIcon('loader-circle', 'animate-spin size-4'),
      document.createTextNode(' Processing...'),
    );
    initIcons(button);
    return;
  }

  if (state === 'success') {
    button.replaceChildren(
      createIcon('check', 'size-4'),
      document.createTextNode(' Request Sent Successfully'),
    );
    initIcons(button);
    return;
  }

  button.replaceChildren(document.createTextNode('Unable to send — please try again'));
}

/**
 * @param {HTMLFormElement} form
 */
function ensureFormStatus(form) {
  if (form.querySelector('[data-form-status]')) return;

  const status = document.createElement('div');
  status.dataset.formStatus = '';
  status.className = 'sr-only';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.setAttribute('aria-atomic', 'true');
  form.append(status);
}

/**
 * @param {HTMLFormElement} form
 * @param {string} message
 */
function announceFormStatus(form, message) {
  const status = form.querySelector('[data-form-status]');
  if (status instanceof HTMLElement) {
    status.textContent = message;
  }
}

/**
 * @param {HTMLFormElement} form
 */
function ensureHoneypot(form) {
  if (form.querySelector('[name="_honey"]')) return;

  const honeypot = document.createElement('input');
  honeypot.type = 'text';
  honeypot.name = '_honey';
  honeypot.tabIndex = -1;
  honeypot.autocomplete = 'off';
  honeypot.setAttribute('aria-hidden', 'true');
  honeypot.className = 'sr-only';
  honeypot.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;opacity:0;';
  form.append(honeypot);
}

/**
 * @param {HTMLFormElement} form
 */
function buildSubmissionPayload(form) {
  const formId = form.dataset.form ?? 'contact';
  const payload = new FormData(form);

  const honey = payload.get('_honey');
  if (typeof honey === 'string' && honey.trim()) {
    return null;
  }

  payload.set('_subject', FORM_SUBJECTS[formId] ?? `Website Form — ${formId}`);
  payload.set('_template', 'table');
  payload.set('form_name', formId);

  const replyEmail = payload.get('email');
  if (typeof replyEmail === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyEmail.trim())) {
    payload.set('_replyto', replyEmail.trim());
  }

  return payload;
}

/**
 * @param {FormData} payload
 */
async function sendForm(payload) {
  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: payload,
  });

  let result = null;
  try {
    result = await response.json();
  } catch {
    result = null;
  }

  if (!response.ok || result?.success === false) {
    throw new Error(result?.message ?? 'Form submission failed');
  }
}

/**
 * @param {HTMLFormElement} form
 * @param {HTMLButtonElement} button
 */
async function handleSubmit(form, button) {
  captureDefaultContent(button);

  button.dataset.state = 'processing';
  button.disabled = true;
  setButtonVisual(button, 'processing');
  announceFormStatus(form, 'Processing your request.');

  try {
    const payload = buildSubmissionPayload(form);
    if (!payload) {
      button.dataset.state = 'success';
      setButtonVisual(button, 'success');
      announceFormStatus(form, 'Request sent successfully.');
      form.reset();
      await delay(3000);
      return;
    }

    await sendForm(payload);

    button.dataset.state = 'success';
    setButtonVisual(button, 'success');
    announceFormStatus(form, 'Request sent successfully.');
    form.reset();

    await delay(3000);
  } catch {
    button.dataset.state = 'error';
    setButtonVisual(button, 'error');
    announceFormStatus(form, 'Unable to send your request. Please try again or email us directly.');

    await delay(4000);
  } finally {
    button.dataset.state = 'idle';
    button.disabled = false;
    restoreDefaultContent(button);
    initIcons(button);
  }
}

/** Bind delegated submit handler once per document. */
export function initFormHandler() {
  if (document.documentElement.dataset.formHandlerBound === 'true') return;
  document.documentElement.dataset.formHandlerBound = 'true';

  for (const form of document.querySelectorAll('[data-form]')) {
    if (form instanceof HTMLFormElement) {
      ensureHoneypot(form);
      ensureFormStatus(form);
    }
  }

  document.addEventListener('submit', (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches('[data-form]')) return;

    event.preventDefault();

    const button = form.querySelector('button[type="submit"]');
    if (!(button instanceof HTMLButtonElement) || button.disabled) return;

    void handleSubmit(form, button);
  });
}
