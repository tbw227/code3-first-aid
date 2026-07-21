/**
 * @param {{ tag: string, attrs?: Record<string, string>, id?: string }} options
 * @returns {HTMLElement}
 */
export function setHeadTag({ tag, attrs = {}, id }) {
  let el = id ? document.getElementById(id) : null;

  if (!el) {
    el = document.createElement(tag);
    if (id) {
      el.id = id;
    }
    document.head.appendChild(el);
  }

  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value);
  }

  return el;
}

/**
 * @param {string} href
 * @param {string} label
 * @param {string} [className]
 * @returns {HTMLAnchorElement}
 */
export function createLink(href, label, className = '') {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = label;
  if (className) {
    link.className = className;
  }
  return link;
}

/**
 * @param {Node[]} children
 * @returns {DocumentFragment}
 */
export function createFragment(children) {
  const fragment = document.createDocumentFragment();
  for (const child of children) {
    fragment.append(child);
  }
  return fragment;
}
