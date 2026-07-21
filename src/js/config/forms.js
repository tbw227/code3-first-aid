/**
 * Canonical URLs for enrollment and procurement forms.
 * Reference from CTAs when linking to form pages.
 */
export const FORM_URLS = Object.freeze({
  cpr: '/pages/forms/cpr-enrollment.html',
  fire: '/pages/forms/fire-enrollment.html',
  procurement: '/pages/forms/procurement.html',
});

/** Email subject lines keyed by `[data-form]` value. */
export const FORM_SUBJECTS = Object.freeze({
  'cpr-enrollment': 'CPR Enrollment Request — Code 3 First Aid',
  'fire-enrollment': 'Fire Training Enrollment — Code 3 First Aid',
  procurement: 'Procurement Inquiry — Code 3 First Aid',
});
