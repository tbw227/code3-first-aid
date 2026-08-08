/**
 * Generates pages/locations/*.html from src/config/location-content.js
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOCATION_CONTENT } from '../src/config/location-content.js';
import { locationSeo } from '../src/config/seo.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, '../pages/locations');

/** @param {string} text */
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * @param {import('../src/config/location-content.js').LOCATION_CONTENT[string]} loc
 */
function buildPage(loc) {
  const nearbyLinks = loc.nearby
    .map((slug) => {
      const city = locationSeo[slug];
      if (!city) return '';
      return `<li><a class="text-primary hover:underline font-medium" href="/pages/locations/${slug}.html">${escapeHtml(city.city)}, ${escapeHtml(city.stateCode)}</a></li>`;
    })
    .join('\n                        ');

  const faqItems = loc.faqs
    .map(
      (faq) => `                    <details class="border border-outline-variant/30 bg-white p-6 group">
                        <summary class="font-headline-md font-bold cursor-pointer list-none flex justify-between items-center gap-4">
                            <span>${escapeHtml(faq.q)}</span>
                            <span class="text-primary text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <p class="text-secondary text-sm leading-relaxed mt-4">${escapeHtml(faq.a)}</p>
                    </details>`,
    )
    .join('\n');

  return `<!DOCTYPE html>
<!-- Code 3 First Aid - ${loc.city}, ${loc.stateCode} (data-page="${loc.slug}") -->
<html class="scroll-smooth" lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(loc.title)}</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@600&display=swap" rel="stylesheet">
    <style>.site-header { background-color: #1a1a1a; }</style>
    <script>document.documentElement.classList.add('js');</script>
    <link rel="stylesheet" href="/src/styles/main.css">
</head>
<body class="bg-[#f6faff] text-on-background font-body-md overflow-x-hidden" data-page="${loc.slug}">

    <a href="#main-content" class="skip-link">Skip to main content</a>

    <header class="site-header bg-obsidian sticky top-0 z-50 border-b border-white/10 shadow-lg">
        <div class="flex justify-between items-center w-full py-4 page-container gap-4">
            <a href="/index.html" class="flex items-center gap-3 shrink-0">
                <img src="/images/brand/code_3_first_aid_logo_1.png" alt="Code 3 First Aid" class="h-10 w-auto">
                <span class="font-headline-md text-base md:text-headline-md font-bold text-white tracking-tighter hidden sm:block">CODE 3 FIRST AID</span>
            </a>
            <nav class="hidden lg:flex gap-8 xl:gap-12 items-center" data-nav="main"></nav>
            <div class="flex items-center gap-3 shrink-0">
                <button type="button" class="lg:hidden text-white p-2" data-mobile-nav-toggle aria-expanded="false" aria-label="Open menu">
                    <i data-lucide="menu" class="text-2xl"></i>
                </button>
                <a href="/pages/forms/procurement.html" class="bg-primary hover:bg-primary-container text-on-primary px-5 py-2 font-label-caps text-label-caps transition-all active:scale-95">Contact Us</a>
            </div>
        </div>
        <div class="mobile-nav lg:hidden" data-mobile-nav aria-hidden="true"></div>
    </header>

    <main id="main-content">
        <nav class="page-container pt-6 text-sm text-secondary" aria-label="Breadcrumb">
            <ol class="flex flex-wrap items-center gap-2 list-none p-0 m-0">
                <li><a href="/index.html" class="hover:text-primary">Home</a></li>
                <li aria-hidden="true">/</li>
                <li><a href="/pages/service-areas.html" class="hover:text-primary">Service Areas</a></li>
                <li aria-hidden="true">/</li>
                <li class="text-on-background font-medium">${escapeHtml(loc.city)}, ${escapeHtml(loc.stateCode)}</li>
            </ol>
        </nav>

        <header class="bg-obsidian text-white section-y relative overflow-hidden">
            <div class="absolute inset-0 from-obsidian via-obsidian to-primary/20 pointer-events-none"></div>
            <div class="page-container relative z-10 max-w-4xl">
                <p class="font-label-caps text-primary text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                    <span class="w-12 h-[2px] bg-primary"></span>
                    ${escapeHtml(loc.county)} · ${escapeHtml(loc.stateCode)}
                </p>
                <h1 class="font-display-lg text-4xl md:text-5xl font-extrabold uppercase leading-[0.95] mb-8">
                    ${escapeHtml(loc.primaryService)} in ${escapeHtml(loc.city)}, ${escapeHtml(loc.stateCode)}
                </h1>
                <p class="font-body-lg text-white/70 text-lg leading-relaxed">
                    Mobile first aid supplies, fire safety equipment, PPE, and on-site training for ${escapeHtml(loc.industries.join(', '))} in ${escapeHtml(loc.city)} and ${escapeHtml(loc.county)}.
                </p>
            </div>
        </header>

        <section class="section-y bg-white">
            <div class="page-container max-w-4xl">
                <p class="text-secondary text-lg leading-relaxed">${escapeHtml(loc.intro)}</p>
                <p class="mt-6 font-label-caps text-sm uppercase tracking-widest text-primary">
                    We deliver and train within 75 miles of ${escapeHtml(loc.city)}
                </p>
            </div>
        </section>

        <section class="section-y bg-[#f6faff]">
            <div class="page-container max-w-4xl">
                <h2 class="font-display-lg text-3xl font-extrabold uppercase mb-10">Services in ${escapeHtml(loc.city)}</h2>
                <div class="grid gap-8">
                    <article class="bg-white border border-outline-variant/30 p-8">
                        <h3 class="font-headline-md text-xl font-bold uppercase mb-3 text-primary">First Aid Kit Restocking</h3>
                        <p class="text-secondary leading-relaxed">${escapeHtml(loc.services.firstAid)}</p>
                    </article>
                    <article class="bg-white border border-outline-variant/30 p-8">
                        <h3 class="font-headline-md text-xl font-bold uppercase mb-3 text-primary">Fire Extinguisher Sales &amp; Service</h3>
                        <p class="text-secondary leading-relaxed">${escapeHtml(loc.services.fire)}</p>
                    </article>
                    <article class="bg-white border border-outline-variant/30 p-8">
                        <h3 class="font-headline-md text-xl font-bold uppercase mb-3 text-primary">PPE Supplies</h3>
                        <p class="text-secondary leading-relaxed">${escapeHtml(loc.services.ppe)}</p>
                    </article>
                    <article class="bg-white border border-outline-variant/30 p-8">
                        <h3 class="font-headline-md text-xl font-bold uppercase mb-3 text-primary">Safety Training</h3>
                        <p class="text-secondary leading-relaxed">${escapeHtml(loc.services.training)}</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="section-y bg-white">
            <div class="page-container max-w-4xl">
                <h2 class="font-display-lg text-3xl font-extrabold uppercase mb-6">Why On-Site Matters in ${escapeHtml(loc.city)}</h2>
                <p class="text-secondary text-lg leading-relaxed">${escapeHtml(loc.whyOnsite)}</p>
            </div>
        </section>

        <section class="section-y bg-[#f6faff]" id="faq">
            <div class="page-container max-w-4xl">
                <h2 class="font-display-lg text-3xl font-extrabold uppercase mb-10">Frequently Asked Questions</h2>
                <div class="space-y-4">
${faqItems}
                </div>
            </div>
        </section>

        <section class="section-y bg-white">
            <div class="page-container max-w-4xl">
                <h2 class="font-display-lg text-2xl font-extrabold uppercase mb-6">Nearby Service Areas</h2>
                <ul class="grid sm:grid-cols-2 gap-3 list-none p-0 m-0 text-secondary">
                        ${nearbyLinks}
                </ul>
                <p class="mt-8">
                    <a href="/pages/service-areas.html" class="text-primary hover:underline font-medium">← View all service areas</a>
                </p>
            </div>
        </section>

        <section class="section-y bg-obsidian text-white text-center">
            <div class="page-container max-w-3xl">
                <h2 class="font-display-lg text-3xl md:text-4xl font-extrabold uppercase mb-6">Request a Quote for ${escapeHtml(loc.city)}</h2>
                <p class="text-white/60 mb-10">Tell us your location and team size — we will confirm on-site availability for supplies and training.</p>
                <a href="/pages/forms/procurement.html" class="inline-block bg-primary hover:bg-primary-container text-white px-10 py-4 font-label-caps text-sm uppercase tracking-widest transition-all">
                    Request a Quote for ${escapeHtml(loc.city)}
                </a>
            </div>
        </section>
    </main>

    <footer class="bg-[#111] text-white border-t-4 border-stone-800">
        <div class="page-container py-12 md:py-14">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 [&>*]:min-w-0">
                <div class="lg:col-span-3">
                    <a href="/index.html" class="inline-flex items-center gap-3 mb-4">
                        <img src="/images/brand/code_3_first_aid_logo_1.png" alt="" class="h-8 w-auto opacity-90">
                        <span class="font-headline-md text-sm font-bold tracking-tighter uppercase">Code 3 First Aid</span>
                    </a>
                    <p class="text-white/45 text-sm leading-relaxed max-w-[16rem]">
                        OSHA-aligned training and industrial safety supplies for Midwest workplaces.
                    </p>
                </div>
                <div class="lg:col-span-5 grid grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-label-caps text-[10px] uppercase tracking-[0.2em] text-accent-red mb-4">Services</h3>
                        <ul class="space-y-2.5 text-sm text-white/65" data-nav="footer-services"></ul>
                    </div>
                    <div>
                        <h3 class="font-label-caps text-[10px] uppercase tracking-[0.2em] text-accent-red mb-4">Explore</h3>
                        <ul class="space-y-2.5 text-sm text-white/65">
                            <li><a class="hover:text-white transition-colors" href="/index.html">Home</a></li>
                            <li><a class="hover:text-white transition-colors" href="/pages/service-areas.html">Service Areas</a></li>
                            <li><a class="hover:text-white transition-colors" href="/pages/forms/procurement.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-8">
                    <h3 class="font-label-caps text-[10px] uppercase tracking-[0.2em] text-accent-red mb-4">Get in touch</h3>
                    <dl class="space-y-4 text-sm">
                        <div>
                            <dt class="text-white/35 text-xs mb-1">Email</dt>
                            <dd class="min-w-0">
                                <a href="mailto:Byoung@code3firstaid.com" class="text-white/80 hover:text-accent-red transition-colors break-words">Byoung@code3firstaid.com</a>
                            </dd>
                        </div>
                        <div>
                            <dt class="text-white/35 text-xs mb-1">Phone</dt>
                            <dd>
                                <a href="tel:+19133131125" class="text-white/80 hover:text-accent-red transition-colors">913-313-1125</a>
                            </dd>
                        </div>
                    </dl>
                    <a href="/pages/forms/procurement.html" class="inline-flex mt-6 text-accent-red font-label-caps text-[11px] uppercase tracking-widest hover:text-white transition-colors items-center gap-2">
                        Request a Quote
                        <i data-lucide="arrow-right" class="text-sm"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="border-t border-white/10 bg-black/40">
            <div class="page-container py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] font-label-caps text-white/30 uppercase tracking-widest">
                <p>&copy; 2026 Code 3 First Aid</p>
                <p>MO · NE · KS · OK · OSHA Compliant</p>
            </div>
        </div>
    </footer>

    <script type="module" src="/src/js/main.js"></script>
</body>
</html>
`;
}

mkdirSync(outDir, { recursive: true });

for (const loc of Object.values(LOCATION_CONTENT)) {
  const filePath = resolve(outDir, `${loc.slug}.html`);
  writeFileSync(filePath, buildPage(loc), 'utf8');
  console.log(`Wrote ${filePath}`);
}

console.log(`Generated ${Object.keys(LOCATION_CONTENT).length} location pages.`);
