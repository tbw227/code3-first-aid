/**
 * Product catalog — categories, products, and page content props.
 * Consumed by catalog render modules and scripts/generate-catalog-pages.mjs.
 */

/** @typedef {'link' | 'solid' | 'outline'} ProductCardButtonVariant */

/**
 * @typedef {Object} CatalogFilter
 * @property {string} id
 * @property {string} label
 */

/**
 * @typedef {Object} CatalogFeature
 * @property {string} title
 * @property {string} text
 */

/**
 * @typedef {Object} CatalogFaq
 * @property {string} q
 * @property {string} a
 */

/**
 * @typedef {Object} CatalogTreatmentPack
 * @property {string} title
 * @property {string} description
 * @property {string} icon
 * @property {string} [productSlug]
 */

/**
 * @typedef {Object} CatalogStat
 * @property {string} value
 * @property {string} label
 * @property {boolean} [accent]
 */

/**
 * @typedef {Object} CatalogInfoItem
 * @property {string} title
 * @property {string} text
 * @property {string} [icon]
 */

/**
 * @typedef {Object} CatalogCategory
 * @property {string} slug
 * @property {string} title
 * @property {string} [navLabel]
 * @property {string} eyebrow
 * @property {string} headline
 * @property {string} headlineAccent
 * @property {string} description
 * @property {string} [heroImage]
 * @property {boolean} [isHub]
 * @property {'solid' | 'outline'} [cardVariant]
 * @property {CatalogFilter[]} [filters]
 * @property {{ title: string, items: CatalogFeature[] }} [features]
 * @property {CatalogStat[]} [stats]
 * @property {CatalogTreatmentPack[]} [treatmentPacks]
 * @property {{ title: string, left: { title: string, items: (string | CatalogInfoItem)[] }, right: { title: string, text: string, bullets: string[] } }} [info]
 * @property {string[]} [hubProductOrder]
 * @property {number} [hubPageSize]
 * @property {string[]} [categoryProductOrder]
 * @property {'default' | 'eye-care' | 'industrial-ppe' | 'fire-protection'} [layout]
 * @property {string} [headlineSuffix]
 * @property {ReadonlyArray<{ icon: string, label: string }>} [heroBadges]
 * @property {string} [productGridSubtitle]
 * @property {{ title: string, text: string, linkLabel: string }} [procurementCard]
 * @property {{ title: string, subtitle: string, tiles: ReadonlyArray<{ variant: 'glass-image' | 'dark' | 'primary', colspan?: number, icon: string, title: string, text: string, image?: string }> }} [solutionsSection]
 * @property {string} [heroBackgroundImage]
 * @property {string} [heroBadge]
 * @property {string} [productGridTitle]
 * @property {{ eyebrow: string, title: string, items: ReadonlyArray<{ title: string, text: string, icon: string }>, diagramImage: string, stat: { value: string, label: string } }} [complianceSection]
 * @property {{ audit: { title: string, text: string, image: string, ctaLabel: string }, refill: { title: string, text: string, icon: string }, stats: ReadonlyArray<{ value: string, label: string, accent?: boolean }> }} [bentoGrid]
 * @property {{ text: string, buttonLabel: string }} [ctaBanner]
 * @property {{ title: string, text: string, primaryLabel: string, secondaryLabel: string }} [ctaSection]
 * @property {CatalogFaq[]} [faqs]
 * @property {string} seoTitle
 * @property {string} seoDescription
 * @property {string[]} keywords
 */

/**
 * @typedef {Object} CatalogProduct
 * @property {string} slug
 * @property {string} categorySlug
 * @property {string} name
 * @property {string} sku
 * @property {string} description
 * @property {string} image
 * @property {string} [tagline]
 * @property {string} [badge]
 * @property {string} [complianceBadge]
 * @property {string} [filterTag]
 * @property {'storage' | 'hand' | 'eye'} [ppeSection]
 * @property {'glass' | 'compact' | 'featured'} [ppeCardStyle]
 * @property {string[]} [sizeTags]
 * @property {string} [productEyebrow]
 * @property {string} [ctaLabel]
 * @property {string} [cardName]
 * @property {string} [cardBadge]
 * @property {'dark' | 'primary'} [cardBadgeTone]
 * @property {boolean} [fireCardFeatured]
 * @property {string} [cardDescription]
 * @property {string} [cardImage]
 * @property {string[]} [gallery]
 * @property {string[]} [heroBadges]
 * @property {ReadonlyArray<{ label: string, value: string, icon?: string, note?: string }>} [quickSpecs]
 * @property {ReadonlyArray<string>} [checklist]
 * @property {ReadonlyArray<{ icon: string, label: string }>} [trustBadges]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string }>} [manifest]
 * @property {ReadonlyArray<{ label: string, value: string }>} [installSpecs]
 * @property {string} [installNote]
 * @property {ReadonlyArray<{ title: string, text: string }>} [techData]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string, accent?: boolean, stat?: string, image?: string }>} [bentoSpecs]
 * @property {ReadonlyArray<{ category: string, items: string[] }>} [kitInventory]
 * @property {{ title: string, text: string, badges: string[] }} [standardsBand]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string, eyebrow?: string }>} [coreFeatures]
 * @property {string} [unitPrice]
 * @property {string} [unitPriceSuffix]
 * @property {{ label: string, subtitle: string, price?: string }} [bulkPricing]
 * @property {ReadonlyArray<{ eyebrow: string, title: string, text: string, rows: ReadonlyArray<{ label: string, value: string }> }>} [techSpecCards]
 * @property {{ eyebrow: string, title: string, text: string, image: string, badges: ReadonlyArray<{ icon: string, label: string }>, advisory: { title: string, text: string, buttonLabel: string } }} [missionBanner]
 * @property {{ eyebrow: string, title: string, items: ReadonlyArray<{ title: string, text: string, icon: string }>, image: string }} [reliabilitySection]
 * @property {{ title: string, text: string, primaryLabel: string, secondaryLabel?: string }} [bulkFleetCta]
 * @property {{ title: string, text: string, buttonLabel: string }} [commercialQuoteCta]
 * @property {ReadonlyArray<{ label: string, value: string }>} [specManifest]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string, footer?: string, accent?: boolean }>} [pathogenSpecs]
 * @property {{ title: string, text: string, stats: string[] }} [vigilancePanel]
 * @property {string} [primaryCtaLabel]
 * @property {string} [secondaryCtaLabel]
 * @property {string} [stockNote]
 * @property {number} [reviewCount]
 * @property {number} [savePercent]
 * @property {string} [quoteDescription]
 * @property {boolean} [inStock]
 * @property {boolean} [hasDetailPage]
 * @property {'standard' | 'extinguisher' | 'extinguisher-compact' | 'extinguisher-industrial' | 'extinguisher-vehicle' | 'extinguisher-halotron' | 'mounting-bracket' | 'leather-gloves' | 'nitrile-gloves' | 'first-aid-cabinet' | 'gas-cage' | 'eyewash-station' | 'pathogen-pack' | 'bleeding-control' | 'cpr-padz' | 'aed-plus' | 'aed-cabinet'} [detailLayout]
 * @property {string} [productSubtitle]
 * @property {string} [categoryLabel]
 * @property {{ label: string, text: string }} [criticalCallout]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string, footer?: string }>} [packFeatureCards]
 * @property {ReadonlyArray<string>} [fullManifest]
 * @property {{ stat: string, label: string, text?: string }} [statHighlight]
 * @property {ReadonlyArray<{ title: string, subtitle: string, selected?: boolean, addon?: string }>} [maintenancePlans]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string, footer?: string }>} [industrialSpecCards]
 * @property {{ eyebrow: string, revision?: string }} [techDataHeader]
 * @property {{ title: string, items: ReadonlyArray<{ title: string, text: string, icon: string }>, image?: string, badgeStat?: string, badgeLabel?: string }} [whatsInBox]
 * @property {{ title: string, text: string, primaryLabel: string, secondaryLabel: string }} [inspectionCta]
 * @property {{ eyebrow: string, title: string, featured: { badge: string, title: string, text: string, linkLabel: string }, cards: ReadonlyArray<{ title: string, text: string, icon: string }> }} [ecosystemSection]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string }>} [precisionFeatures]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string }>} [techSpecsList]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string }>} [deploymentCards]
 * @property {{ title: string, eyebrow: string, text: string, image: string }} [engineeringSection]
 * @property {string[]} [availableSizes]
 * @property {string} [defaultSize]
 * @property {ReadonlyArray<{ id: string, label: string, swatch: string }>} [availableColors]
 * @property {string} [defaultColor]
 * @property {string} [packUnit]
 * @property {ReadonlyArray<{ title: string, badge: string, text: string, icon: string }>} [safetyComplianceCards]
 * @property {ReadonlyArray<{ label: string, value: string, accent?: boolean }>} [safetyRatings]
 * @property {string} [safetyRatingsNote]
 * @property {string} [itemNumber]
 * @property {{ title: string, text: string }} [useCaseSection]
 * @property {ReadonlyArray<{ title: string, text: string, image: string }>} [useCaseCards]
 * @property {{ title: string, text: string, buttonLabel: string, tiers: ReadonlyArray<{ qty: string, savings: string, accent?: boolean }> }} [bulkProcurement]
 * @property {ReadonlyArray<{ label: string, qty: string }>} [boxContents]
 * @property {ReadonlyArray<{ name: string, sku: string, image: string, slug?: string }>} [replacementParts]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string }>} [reliabilityFeatures]
 * @property {{ items: ReadonlyArray<{ title: string, text: string, icon: string }>, customCta: { title: string, text: string, buttonLabel: string } }} [logisticsSection]
 * @property {ReadonlyArray<{ label: string, value: string }>} [fullSpecsTable]
 * @property {{ title: string, text: string, image?: string, badge?: string, checks?: string[] }} [complianceSection]
 * @property {{ heading?: string, title: string, text?: string, image: string, items: ReadonlyArray<{ title: string, text: string, icon: string }> }} [whatsInBoxDark]
 * @property {{ eyebrow?: string, title: string, text: string, checks: ReadonlyArray<string | { title: string, text?: string }>, checklist?: ReadonlyArray<{ label: string, status: string }> }} [complianceAssembly]
 * @property {{ title: string, text: string, primaryLabel: string, secondaryLabel: string }} [refillBanner]
 * @property {ReadonlyArray<{ label: string, value: string }>} [constructionSpecs]
 * @property {{ dimensions: string, dimensionsNote?: string, alarmPower: string, alarmNote?: string, audioOutput: string, audioNote?: string, certification: { quote: string, text: string, image?: string } }} [cabinetSpecs]
 * @property {boolean} [darkHero]
 * @property {ReadonlyArray<{ slug: string, name: string, image: string, category: string }>} [relatedProducts]
 * @property {{ eyebrow: string, title: string, text: string, primaryLabel: string, secondaryLabel: string, cards: ReadonlyArray<{ title: string, text: string, icon: string }> }} [trainingSection]
 * @property {{ rating: string, deployed: string, headline?: string }} [brandBanner]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string }>} [heroFeatureCards]
 * @property {number} [price]
 * @property {number} [compareAtPrice]
 * @property {string} [rating]
 * @property {ReadonlyArray<{ title: string, text: string }>} [highlights]
 * @property {ReadonlyArray<{ label: string, value: string, accent?: boolean }>} [specs]
 * @property {ReadonlyArray<{ title: string, rows: ReadonlyArray<{ label: string, value: string }> }>} [specGroups]
 * @property {ReadonlyArray<{ title: string, text: string }>} [featureCards]
 * @property {ReadonlyArray<{ title: string, text: string, image: string }>} [highlightCards]
 * @property {{ title: string, description: string, items: ReadonlyArray<{ title: string, text: string }> }} [marketingSection]
 * @property {{ models: string[], notes: string[] }} [compatibility]
 * @property {{ eyebrow: string, title: string, description: string, image: string, features: ReadonlyArray<{ title: string, text: string }> }} [spotlight]
 * @property {{ title: string, left: ReadonlyArray<{ label: string, value: string }>, middle: ReadonlyArray<string>, right: ReadonlyArray<{ label: string, value: string }> }} [specColumns]
 * @property {ReadonlyArray<string>} [gallery]
 * @property {string} seoTitle
 * @property {string} seoDescription
 */

/** @type {Record<string, CatalogCategory>} */
export const CATALOG_CATEGORIES = {
  'bulk-medical-supplies': {
    slug: 'bulk-medical-supplies',
    title: 'Bulk Medical Supplies',
    eyebrow: 'Safety Supplies',
    headline: 'First Aid Supplies',
    headlineAccent: '',
    description:
      'Industrial-grade replenishment for first responders, facilities, and emergency kits. Precision-curated, OSHA-compliant essentials.',
    heroImage: '/images/backgrounds/safety-supplies-hero-background.webp',
    isHub: true,
    navLabel: 'All Products',
    hubProductOrder: [
      '32oz-eyewash-station-double',
      '4-shelf-class-b-kit',
      '5lb-abc-extinguisher',
      '10lb-abc-extinguisher',
      'steel-gas-cylinder-cage',
      'aed-wall-cabinet',
      'zoll-aed-plus',
      'cpr-d-padz',
      'bleeding-control-pack',
      'pathogen-treatment-pack',
      'burn-care-pack',
      'mobile-eyewash-station',
      'blood-stopper-cabinet',
      'industrial-trauma-kit',
      'blue-detectable-bandage',
      'knuckle-bandage-lg',
      'slim-eyewash-station',
      '16oz-eyewash-bottles',
      '4oz-eyewash',
      'half-oz-eyewash-4ct',
      'eye-pads-lubricants',
      'cowhide-leather-gloves',
      'honey-grip-gloves',
      'nitrile-gloves-lg-xl',
      'nemesis-smoked-mirror',
      'nemesis-clear-lens',
      'lens-cleaning-towelettes',
    ],
    hubPageSize: 8,
    filters: [
      { id: 'all', label: 'All Products' },
      { id: 'first-aid-kits', label: 'First Aid Kits' },
      { id: 'fire-protection', label: 'Fire Safety' },
      { id: 'eye-care', label: 'Eye Care' },
      { id: 'industrial-ppe', label: 'PPE' },
    ],
    info: {
      title: 'Bulk First Aid Supplies',
      left: {
        title: 'Who Buys Bulk First Aid Supplies',
        items: [
          {
            title: 'Industrial & Job Sites',
            text: 'High-risk environments requiring OSHA-compliant stations and frequent replenishment of trauma supplies.',
            icon: 'building-2',
          },
          {
            title: 'Educational Institutions',
            text: 'Managing safety supplies across multiple locations, from classrooms to athletic facilities.',
            icon: 'graduation-cap',
          },
          {
            title: 'EMS & First Responders',
            text: 'Rapid restocking of essential field equipment and trauma care kits between active calls.',
            icon: 'siren',
          },
        ],
      },
      right: {
        title: 'Why Restock Regularly',
        text: "An empty first aid kit is more than just a convenience—it's a liability. Consumables like bandages, gauze, and gloves have expiration dates or get damaged over time.",
        bullets: [
          'Compliance Audit Readiness',
          'Life-Saving Readiness',
          'Bulk Cost Efficiency',
          'Liability Protection',
        ],
      },
    },
    faqs: [
      {
        q: 'Can I buy first aid supplies in bulk for a workplace?',
        a: 'Yes. Our collection is specifically designed for businesses and organizations that need to maintain consistent supply levels across multiple locations or high-traffic areas.',
      },
      {
        q: 'How do I know which supplies I need to restock?',
        a: 'We recommend a monthly physical inventory. Our digital tracking sheets can help you identify high-turnover items like bandages and prep pads that require frequent replenishment.',
      },
      {
        q: 'Are these wholesale prices or retail?',
        a: 'These are retail-priced bulk quantities. For very large quarterly orders or institutional procurement contracts, please contact our sales team directly for specialized pricing.',
      },
      {
        q: 'What is the difference between bulk and a kit?',
        a: 'A kit is a pre-assembled emergency solution. Bulk supplies are individual items sold in larger quantities for customizing or restocking existing units without buying entire new shells.',
      },
    ],
    seoTitle: 'Bulk Medical Supplies Catalog | Code 3 First Aid',
    seoDescription:
      'Browse industrial first aid kits, fire safety equipment, eyewash stations, AEDs, and PPE. Request quotes for bulk medical supplies across the Midwest.',
    keywords: ['bulk medical supplies', 'industrial first aid', 'safety equipment catalog', 'OSHA supplies'],
  },
  'first-aid-kits': {
    slug: 'first-aid-kits',
    title: 'First Aid Kits & Stations',
    eyebrow: 'Industrial Grade Equipment',
    headline: 'Vigilant',
    headlineAccent: 'Protection.',
    description:
      'OSHA-compliant first aid cabinets, trauma kits, and wall stations engineered for manufacturing, warehousing, and high-traffic commercial facilities.',
    heroImage: '/images/supplies/home-services-first-aid-cabinet.webp',
    cardVariant: 'outline',
    treatmentPacks: [
      {
        title: 'Bleeding Control',
        description: 'Tourniquets, gauze, and pressure dressings for severe hemorrhage response.',
        icon: 'droplet',
        productSlug: 'bleeding-control-pack',
      },
      {
        title: 'Burn Care',
        description: 'Sterile dressings and gel pads for thermal and chemical burn treatment.',
        icon: 'flame',
        productSlug: 'burn-care-pack',
      },
      {
        title: 'Eye Care',
        description: 'Eyewash bottles, pads, and irrigation supplies for chemical splash events.',
        icon: 'eye',
        productSlug: 'slim-eyewash-station',
      },
      {
        title: 'Wound Care',
        description: 'Bandages, antiseptic wipes, and closure supplies for lacerations.',
        icon: 'bandage',
        productSlug: 'blue-detectable-bandage',
      },
    ],
    features: {
      title: 'Industrial Compliance Redefined',
      items: [
        { title: 'Automatic Restocking', text: 'Scheduled visits keep cabinets filled and audit-ready.' },
        { title: 'Climate-Controlled Cabinets', text: 'Storage options suited to plant floors and clean rooms.' },
        { title: 'Tamper-Evident Seals', text: 'Track usage and maintain compliance documentation.' },
      ],
    },
    stats: [
      { value: '40%', label: 'Faster Response' },
      { value: '1500+', label: 'Facilities Protected' },
      { value: 'Zero', label: 'OSHA Penalties' },
      { value: '24/7', label: 'Expert Support', accent: true },
    ],
    seoTitle: 'First Aid Kits & Stations | Code 3 First Aid',
    seoDescription:
      'Class B first aid cabinets, trauma kits, and bleeding control packs for industrial workplaces. Request a quote for kits and wall stations.',
    keywords: ['first aid kits', 'first aid cabinets', 'Class B kit', 'trauma kit'],
  },
  'fire-protection': {
    slug: 'fire-protection',
    title: 'Fire Protection Systems',
    eyebrow: 'Equipment Catalog',
    headline: 'Critical Fire',
    headlineAccent: 'Protection',
    headlineSuffix: 'Systems',
    description:
      'Industrial-grade fire suppression and life safety equipment engineered for high-risk environments. Precision manufacturing meets uncompromising safety standards.',
    heroImage: '/images/supplies/home-services-fire-extinguisher.webp',
    layout: 'fire-protection',
    productGridTitle: 'Fire Suppression Inventory',
    productGridSubtitle: 'Showing all available commercial-grade suppression units',
    heroBadges: [
      { icon: 'badge-check', label: 'OSHA Compliant' },
      { icon: 'shield', label: 'NFPA Certified' },
    ],
    categoryProductOrder: [
      '5lb-abc-extinguisher',
      '10lb-abc-extinguisher',
      '2-5lb-abc-extinguisher-mount',
      '20lb-abc-extinguisher',
      '5lb-halotron-extinguisher',
      'fire-extinguisher-mounting-brackets',
      'fire-extinguisher-signs',
    ],
    procurementCard: {
      title: 'Bulk Procurement?',
      text: 'Contact our industrial specialists for facility-wide suppression planning and volume pricing.',
      linkLabel: 'Speak with an Expert',
    },
    solutionsSection: {
      title: 'Comprehensive Fire Solutions',
      subtitle:
        'Beyond equipment sales, we provide the engineering and inspection services required to keep your facility within full compliance.',
      tiles: [
        {
          variant: 'glass-image',
          colspan: 2,
          icon: 'clipboard-list',
          title: 'Annual Inspections',
          text: 'Certified technicians providing NFPA 10 compliant inspections and electronic documentation for your records.',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCCZczJ92XbI7itGFRIOR6Txvgjdv4RENl41vTivJUOwtYZn1iZuWNMICZEQQp5E9E0V9i7ZRoGD7X8e5KleqnoM40cjWK6b33H30dpQM-TUm9zSbauKbnDfkIfSgr8Bap58pwGWo9QFQ5X-A48Yf5pcsrWtJjMNS2cIWPRahyedAbbuP4xNlL2SGAks20qVNjQNJGZxwlAJnVlI2P3F6Wndb0xAkidylmTWGCa4DXpIrQjXjeASEw',
        },
        {
          variant: 'dark',
          icon: 'flame',
          title: 'Hydrostatic Testing',
          text: 'In-house testing facility for high-pressure cylinders ensuring structural integrity and safety.',
        },
        {
          variant: 'primary',
          icon: 'graduation-cap',
          title: 'Staff Training',
          text: 'Hands-on fire extinguisher training using state-of-the-art digital simulators or live-fire scenarios.',
        },
        {
          variant: 'glass-image',
          colspan: 2,
          icon: 'pen-tool',
          title: 'System Design',
          text: 'Custom-engineered suppression systems for kitchens, spray booths, and specialized hazard zones.',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCoz2l3ULsqcx6TKgmuvF1mDgyVS7sZO-mmCR23X-SAP-VDlkT6B-9ZVGI83RRcVmA7qxWw5463-Iqp2F4wz1OwVs-WJ05VKqUvfVOSZFOL2sdPGEA6SwLVPS911dXvKot5TIuMJTOYYZYjuTtLsICB92rlUbRr7mlhPy6gPuJ5tT6Yyjy82l-_tL4Nc_IqLmoRz1S2i3KY4humaUcXblESSntl9vs3SOe0RDMc9PaYNhJXM1u3qW8',
        },
      ],
    },
    filters: [
      { id: 'all', label: 'All Units' },
      { id: 'extinguisher', label: 'Extinguishers' },
      { id: 'cabinet', label: 'Cabinets' },
    ],
    seoTitle: 'Fire Protection Equipment | Code 3 First Aid',
    seoDescription:
      'ABC fire extinguishers, AED wall cabinets, and commercial suppression equipment. Request quotes for fire protection inventory.',
    keywords: ['fire extinguishers', 'fire protection', 'ABC extinguisher', 'NFPA equipment'],
  },
  'eye-care': {
    slug: 'eye-care',
    title: 'Eye Care & Safety Stations',
    eyebrow: 'Industrial Grade Protection',
    headline: 'Eye Care &',
    headlineAccent: 'Safety Stations',
    description:
      'Precision-engineered emergency response equipment. Ensure OSHA and ANSI compliance with high-visibility eyewash stations and medical-grade solutions.',
    heroBackgroundImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4svI5BRFtOlvzkuz1YbDX5IQfa6G08XOrRqStXMX9iRj2L_nNbRLBZjuCN7vLK1BwwAzW7j2jHCPalQjy_eFuPmcS9MC4URFBUZvVXO_D8Z1PhECHkNRXFGSKgVh94K0sW4tq-uvmEyjKWxRI4T7ieeKRaidk_JiGxqwNmpmCKNn2idZe04cwpVMYMldsxEuT-oBtWxoYOPCXKzMmRZrxpxuT_NR8NdMM19caP4quMyQGllYq7no',
    layout: 'eye-care',
    productGridTitle: 'Compliance Equipment',
    categoryProductOrder: [
      '32oz-eyewash-station-double',
      '16oz-eyewash-bottles',
      'mobile-eyewash-station',
      '4oz-eyewash',
      'half-oz-eyewash-4ct',
      'eye-pads-lubricants',
    ],
    complianceSection: {
      eyebrow: 'Safety Standards',
      title: 'Eye Safety Compliance',
      items: [
        {
          title: 'ANSI Z358.1 Compliance',
          text: 'Our stations meet all requirements for flushing time, water temperature, and flow rate for workplace safety.',
          icon: 'badge-check',
        },
        {
          title: 'OSHA Requirements',
          text: 'We provide the documentation and equipment necessary to keep your facility within legal safety guidelines.',
          icon: 'clipboard-list',
        },
        {
          title: 'Medical Grade Quality',
          text: 'All solutions are pH balanced and sterile to ensure maximum comfort during emergency treatment.',
          icon: 'briefcase-medical',
        },
      ],
      diagramImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAWykzEWmrLpl14Dv2ipq6VDNvkd7ifLIlBzAefWkgoPlapG66t5MGbFWI3bYYfmBWFFEl0PYmTFpFMfPhU2RIfBw7lvGWo1-vFj0g7yM-LNZS9ScXMdrvT-erRuf-HWbuB7ePB_RnnvecfEBEHVK4D0tQcOdGf3FlUwCuAhYPpiWFnkA-bRiHFUPUTv6aoci9zgIi7-W1c3LOn-jYNa7oJTQZb0ZHqkOtwLiPlcYWg3XJFh0DJDto',
      stat: { value: '15', label: 'Min Continuous Flow' },
    },
    bentoGrid: {
      audit: {
        title: 'Request Facility Audit',
        text: 'Unsure about your compliance status? Our experts provide on-site safety audits and station placement strategy.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBdZe1hk-XOvBrQWPt14UggliJ2ZQpgPzefDvseVsJMEI8MkC7Pgxlatl_bwLsz-4HsJeDZyTvr0POpz15gthXkCsmjuwZvOaZFe6verTKOONmyctn2HcUEo0wBQWy5b9F9XzPcHJQfFVBOJ5PU45vUG-TLFvZAqjNdox93ZGyX0BvTWgbtIKygonBQ7k3kepbI8UYpEBpq0NKF4OK2ErVMNoC9D7Q60oHTqlhcoPWbVH7lZNKNkGA',
        ctaLabel: 'Schedule Now',
      },
      refill: {
        title: 'Automated Refill Service',
        text: 'Never worry about expired solution again. Enroll in our recurring delivery program tailored to your station usage.',
        icon: 'package',
      },
      stats: [
        { value: '98%', label: 'Compliance Rate', accent: true },
        { value: '24h', label: 'Expert Support' },
      ],
    },
    ctaBanner: {
      text: 'Ready to secure your workspace with industrial-grade eye protection?',
      buttonLabel: 'Request Full Catalog Quote',
    },
    seoTitle: 'Eye Care & Safety Stations | Code 3 First Aid',
    seoDescription:
      'Mobile eyewash stations, wall-mounted units, and refill bottles for industrial eye safety compliance. Request a catalog quote.',
    keywords: ['eyewash station', 'eye safety', 'ANSI Z358.1', 'emergency eyewash'],
  },
  'industrial-ppe': {
    slug: 'industrial-ppe',
    title: 'Industrial Safety & PPE',
    eyebrow: 'Authorized Distributor',
    headline: 'Industrial Safety',
    headlineAccent: '& PPE Solutions',
    description:
      'Precision-engineered protection for high-stakes environments. Equip your team with the industry standard in safety and reliability.',
    heroBackgroundImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjc1RBVP0P-J9o5UfFs4PCxqLwFqkFe4GUhneAFYjhotRWDlmshHdeoxreYwq_S0oTZ7lSPCkejwfMudNO8p3IaB3bukaYeOnbT47qyIaFVz8pBXC-a1hNkGpeCMuphPwtVKPT7NcFcKjkCUp-2paHhtMXRxw9sZQukDYCsYjdPovuIdAqIaL9Kn9buyccBC9KyuY6mjstbmpZ-1KjBZRA6JP0VvX7u7GXGSTimQd9aO2u80uq_qc',
    heroBadge: 'Authorized Distributor',
    layout: 'industrial-ppe',
    categoryProductOrder: [
      'steel-gas-cylinder-cage',
      'cowhide-leather-gloves',
      'honey-grip-gloves',
      'nitrile-gloves-lg-xl',
      'nemesis-smoked-mirror',
      'nemesis-clear-lens',
      'lens-cleaning-towelettes',
    ],
    filters: [
      { id: 'all', label: 'All Equipment' },
      { id: 'gas', label: 'Gas Safety' },
      { id: 'hand', label: 'Hand Protection' },
      { id: 'eye', label: 'Eye Protection' },
    ],
    ctaSection: {
      title: 'Need a Customized Safety Solution?',
      text: 'Code 3 First Aid provides procurement consulting for government, medical, and industrial sectors. Get tiered pricing and logistics support.',
      primaryLabel: 'Speak with an Expert',
      secondaryLabel: 'Download Full PDF Catalog',
    },
    seoTitle: 'Industrial Safety & PPE | Code 3 First Aid',
    seoDescription:
      'Gloves, eye protection, respirators, and safety storage for Midwest industrial facilities. Browse PPE and request bulk quotes.',
    keywords: ['industrial PPE', 'safety gloves', 'eye protection', 'respirators'],
  },
  'bandages-dressings': {
    slug: 'bandages-dressings',
    title: 'Bandages & Dressings',
    eyebrow: 'Industrial Grade First Aid',
    headline: 'Bandages &',
    headlineAccent: 'Dressings',
    description:
      'Metal-detectable and heavy-duty adhesive bandages engineered for food processing, fabrication, and high-wear environments.',
    heroImage: '/images/supplies/safety-supplies-first-aid-kit.webp',
    features: {
      title: 'Engineered for the Modern Workforce',
      items: [
        { title: 'Superior Adhesion', text: 'Medical-grade adhesive stays secure through moisture and movement.' },
        { title: 'Impact Resistance', text: 'Multi-layered padding protects knuckles and high-flex zones.' },
        { title: 'Safety Blue Standards', text: 'Visual compliance for food-grade and clean-room operations.' },
      ],
    },
    seoTitle: 'Bandages & Dressings | Code 3 First Aid',
    seoDescription:
      'Industrial bandages, knuckle strips, and metal-detectable dressings for workplace first aid programs. Request a quote.',
    keywords: ['industrial bandages', 'metal detectable bandages', 'workplace dressings'],
  },
};

/** @type {Record<string, CatalogProduct>} */
export const CATALOG_PRODUCTS = {
  '32oz-eyewash-station-double': {
    slug: '32oz-eyewash-station-double',
    categorySlug: 'eye-care',
    name: '32oz Eyewash Station',
    cardName: '32oz Double Eyewash Station',
    cardDescription:
      'Complete wall-mounted solution featuring twin high-capacity bottles for simultaneous dual-eye rinsing.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKVSRLr0LgozySfNFuMnvoD0M1v9zY3XTkDxFGpBNJgBXEIwmeeQKwvz-ML28FqSgR0NSxKvjPXVZPjgF409xpmnRp4DblHrtdxLeVJNqq_1nLo_GyA1fxbvo6EauEyD1tWTQGvkuUHMCvzirGegang3tO1CN3NXn9zdBJNkHXC2x67J5p2lff2HOPAg9Iy339bdxpa0UEoJLEeK-wFpopC4jwF4LS9zYiBQAXapdj26Ss3ROMVGs',
    sku: 'EW-32-STN',
    tagline: 'Medical-Grade Equipment',
    description:
      'Engineered for rapid response in high-risk environments. This dual-bottle station provides immediate decontamination for eyes exposed to dust, debris, or hazardous chemicals.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaYlq_UTteABetFqn-Ll4dvagJ5qh_xwme57TyRpukfIJXzzYWhaM8W48uw6fH3kuoNa1kTKojeEG5CeYtMAL5u3N1bkqKjUQLxh65fG3U9CTHSdmX35kBJQxUE5GsLRPEVUa9nUhUENn86wa6v29lYpbtvdViGxwosfRQ0yjgPra3mtfblOv6EzG1gUNk38p9DKh3sj3BYH1b5PlEeG4Ftf6TuXDeKAYmISZWhMSewWGn8mm8Djc',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaYlq_UTteABetFqn-Ll4dvagJ5qh_xwme57TyRpukfIJXzzYWhaM8W48uw6fH3kuoNa1kTKojeEG5CeYtMAL5u3N1bkqKjUQLxh65fG3U9CTHSdmX35kBJQxUE5GsLRPEVUa9nUhUENn86wa6v29lYpbtvdViGxwosfRQ0yjgPra3mtfblOv6EzG1gUNk38p9DKh3sj3BYH1b5PlEeG4Ftf6TuXDeKAYmISZWhMSewWGn8mm8Djc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKVd1fwL3EWZNT0y2ugqZhvXpGwdai-5iicN9XUDbkX9zQdpPR_gNqQB3XE-OYxl-DyWZHpJXcfWid3gBbZdJ0kRI15zCVJTtGFjv3tgg6l5ul9VkOJCB1wAqs7bc4pTaoY_VusmHPVClnJDNhmfC5SbuWWogoswJXB2pblnTmC-vjZVKS67-wcFXK96_K3j0efJ70BcPDaj0Izq0rDxDWdKrV9z2CLtf0DVgeuiFCk1k5ywlqZAk',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAi9StV4zGKlY-Om8-UMez3mhj8qKFVNLHjKoTGNBURQPyem0NCuRiNEYUL5vs5egLM2gPz7UnchZCv2O9ZFMDKADg90FJSC_cJBKZL7nz1bQesIxYl-SYQtzdXIzDYFW1Kbo6pxziWnooUhkzkRji-WGIXQbdRa8Uu9BIFbhiRzZvH2JkHG1vcPvRpjNeLGLlzLmitnErN2yBzJhTpdakWkPToAyslGr2g6vrLbBlhxJDyuS1lGOU',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUTtwzAgFs8c45BH2_kR0KMjCSaAw3b0Z6NrOIBgHtuGrvOrAGQG51LTU6qy5Vp9QvHzDrDpd-79ASDzBEukHEm0h3wea-ALNV_utzM7NQUp0yhfYhtOlD0UBcSvrMEIos_H6cB75xW7iGRhZF0bzVf1-x27DTsb_63-naAAGEGOc_T3L40EVSnIHc8HMhEfcihkyn6ZUSKDL6mBKuxfhUqoBKqyuPlwO8QMaDzpESog0EfSRVRd8',
    ],
    heroBadges: ['ANSI Z358.1 Compliant'],
    badge: 'Best Seller',
    filterTag: 'station',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'eyewash-station',
    checklist: [
      'ANSI Z358.1 Compliant (Bottled Wash)',
      'Dual 32oz Sterile Saline Solution',
      'High-Visibility Industrial Rack',
    ],
    quickSpecs: [
      { label: 'Capacity', value: '64oz Total (2x32)' },
      { label: 'Mount', value: 'Wall Station' },
      { label: 'Lifespan', value: '36 Month Expiry' },
      { label: 'Certified', value: 'FDA & OSHA' },
    ],
    manifest: [
      {
        title: '2x 32oz Flush Bottles',
        text: 'Pre-filled with buffered, pH-balanced sterile saline solution designed to neutralize contaminants instantly.',
        icon: 'scan',
      },
      {
        title: 'Wall-Mount Station',
        text: 'High-impact polystyrene rack with built-in dust cover and mirrored surface for emergency self-inspection.',
        icon: 'package',
      },
      {
        title: 'Instructional Graphics',
        text: 'Bilingual (English/Spanish) step-by-step emergency visual guides printed directly on the station face.',
        icon: 'file-text',
      },
    ],
    installSpecs: [
      { label: 'Optimal Height', value: '33" - 45" from floor' },
      { label: 'Travel Time Limit', value: 'Max 10 Seconds' },
      { label: 'Mounting Hardware', value: '4x Stainless Screws' },
      { label: 'Visibility Req.', value: 'Signage Included' },
    ],
    installNote:
      'URGENT: Per ANSI Z358.1, supplemental eyewash units do not replace primary 15-minute plumbed units in areas of high chemical risk.',
    techData: [
      {
        title: 'Chemical Profile',
        text: '99.1% Purified Water with Sodium Phosphate Buffer. Preserved with 0.05% Disodium Edetate to prevent bacterial growth.',
      },
      {
        title: 'Dimensions',
        text: 'Station: 19"W x 14.5"H x 4"D. Bottle Weight: 2.4 lbs each when filled.',
      },
      {
        title: 'Temperature Tolerance',
        text: 'Storage between 59°F and 86°F recommended for optimal shelf life and patient comfort.',
      },
    ],
    seoTitle: '32oz Eyewash Station | Code 3 First Aid',
    seoDescription: 'Wall-mounted 32oz eyewash station for industrial eye safety. Request a catalog quote.',
  },
  'pathogen-treatment-pack': {
    slug: 'pathogen-treatment-pack',
    categorySlug: 'first-aid-kits',
    name: 'Bloodborne Pathogen Treatment Pack',
    sku: '91169',
    description:
      'A critical response kit designed for the safe handling and disposal of potentially infectious blood and body fluids. Engineered to meet the highest safety standards for workplace environments.',
    image: '/images/supplies/bloodborne_pathogen_treatment_pack_img.png',
    gallery: [
      '/images/supplies/bloodborne_pathogen_treatment_pack_img.png',
      '/images/supplies/bbp_product_contents_1.jpg',
      '/images/supplies/bbp_product_contents_2.jpg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgn_Mgy5rtV1EZB_rr30_dRkne-iaffMDh78o2XCmpfu0sU7ZaW2jaQjyqipyZmeYAa9WoSB_4SsdzlKYJ_nW0oLBAAjRyyjn_fBGmQnC3HhqUALKS_4Nw_a88FH-byHo6Alum6DI3UlfE4o8ZRg29tRUbVaHyE_4DXCKtkFAaBxiMWHarunH3_SoB-IRN6mk3MJ7Ls8qyVLJwJr2SYzfiye95hPCHBIwMKbh8bk9Va4gYcndbhQw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACCzLGu2fm3QXhVhTjBUHv_OzjROvlRLw1QJTxfCf3xRlhRNNqBj5rdKbkbNzj3M1gF5roFAgaKDuI3njUhGY7Z16H_jQQNMvfZ_4-N3Td6GylpSGOW5bJm7Tu5UtHLuix8T6hRTL1Xoq2jbW3PYp7H5YEquUDfTWbE4tSWUdxuA5Zl8CLawn7wvWnhvePcR-G_Ok7Xtk_hE78w94D6lOYIRz40NgsoU6ysrgP5jqlSl3XkWRjkhI',
    ],
    badge: 'Urgent Response',
    filterTag: 'treatment',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'pathogen-pack',
    darkHero: false,
    reviewCount: 48,
    productSubtitle: 'Emergency Medical Supply',
    primaryCtaLabel: 'Add to Quote',
    secondaryCtaLabel: 'Download SDS',
    trustBadges: [
      { icon: 'badge-check', label: 'OSHA Compliant' },
      { icon: 'truck', label: 'Ships in 24h' },
    ],
    pathogenSpecs: [
      {
        title: 'Regulatory Compliance',
        text: 'Strictly adheres to OSHA 1910.1030 Bloodborne Pathogens Standard requirements for PPE and waste disposal.',
        icon: 'clipboard-list',
        footer: 'Certified Validated',
        accent: true,
      },
      {
        title: 'Material Quality',
        text: 'Nitrile medical-grade gloves (latex-free), high-density polyethylene biohazard liners, and premium antimicrobial formula.',
        icon: 'package',
        footer: 'Heavy Duty',
      },
      {
        title: 'Dimensions & Weight',
        text: 'Compact 10" x 7" x 3" form factor. Optimized for wall-mounting or vehicle placement with quick-release velcro straps.',
        icon: 'scan',
        footer: 'Unit Wt: 1.4 lbs',
        accent: true,
      },
    ],
    whatsInBoxDark: {
      heading: "What's in the Box",
      title: 'Complete Response Ensemble',
      text: 'Every component is selected for its reliability in high-stress biohazard scenarios.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuACCzLGu2fm3QXhVhTjBUHv_OzjROvlRLw1QJTxfCf3xRlhRNNqBj5rdKbkbNzj3M1gF5roFAgaKDuI3njUhGY7Z16H_jQQNMvfZ_4-N3Td6GylpSGOW5bJm7Tu5UtHLuix8T6hRTL1Xoq2jbW3PYp7H5YEquUDfTWbE4tSWUdxuA5Zl8CLawn7wvWnhvePcR-G_Ok7Xtk_hE78w94D6lOYIRz40NgsoU6ysrgP5jqlSl3XkWRjkhI',
      items: [
        { title: 'Nitrile Gloves', text: '2 Pairs High-Dexterity', icon: 'hand' },
        { title: 'Biohazard Bags', text: '2x Marked Polybags', icon: 'trash-2' },
        { title: 'Antimicrobial', text: '10x Saturated Wipes', icon: 'spray-can' },
        { title: 'Face Shield', text: 'Integrated Splash Guard', icon: 'shield' },
      ],
    },
    complianceAssembly: {
      eyebrow: 'Security & Assurance',
      title: 'Zero-Failure Compliance',
      text: 'Our treatment packs are designed with the strict oversight of emergency medical professionals. We guarantee that every kit shipped from our facility meets or exceeds OSHA 1910.1030 standards for the workplace.',
      checks: [
        {
          title: 'Verified Expiry Tracking',
          text: 'We provide automated alerts when your kit components are nearing their expiration dates.',
        },
        {
          title: 'Sterile Integrity Guaranteed',
          text: 'Triple-sealed packaging ensures zero contamination before first use.',
        },
      ],
      checklist: [
        { label: 'PPE Requirements', status: 'Pass' },
        { label: 'Disposal Labels', status: 'Pass' },
        { label: 'Fluid Control', status: 'Pass' },
        { label: 'Antiseptic Conc.', status: 'Pass' },
        { label: 'Sterile Gloves', status: 'Pass' },
      ],
    },
    commercialQuoteCta: {
      title: 'Outfit Your Entire Facility',
      text: 'Need multi-location corporate safety coverage? Contact our enterprise team for a custom quote today.',
      buttonLabel: 'Inquire About Bulk Orders',
    },
    seoTitle: 'Bloodborne Pathogen Treatment Pack | Code 3 First Aid',
    seoDescription: 'OSHA-compliant biohazard cleanup kit for workplace safety programs. Request a quote.',
  },
  '4-shelf-class-b-kit': {
    slug: '4-shelf-class-b-kit',
    categorySlug: 'first-aid-kits',
    name: '4 Shelf Class B First Aid Kit',
    sku: 'SF150BMTF',
    description:
      'Surefill 4 shelf food metal cabinet Class B. Professional-grade first aid station for high-occupancy facilities. Includes industrial-strength steel cabinet, color-coded treatment packs, and ANSI/OSHA compliant supplies.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgjv5ZJMJMkEjKoz6ajoXh2EOQF8JMLThhA1GPpJ2FHR7qqbln2WmSUw0WIjjas6tjM9Ol9za6g6lzTeQAwnBvo-jB2kRVxFvoiaBeFoeFEl-F8RHJk7HpDcj4lSkHYPBlPbehZpTFIXm8dnWKHp47_TA_mdjdal--7SRcnR2ibE3ggtJdAbm3eOuJ3p7topFwaVVMMNKy89q4LRB437sJgbfNr5NuYsiM17GxkuUq7brRLFbikU0',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgjv5ZJMJMkEjKoz6ajoXh2EOQF8JMLThhA1GPpJ2FHR7qqbln2WmSUw0WIjjas6tjM9Ol9za6g6lzTeQAwnBvo-jB2kRVxFvoiaBeFoeFEl-F8RHJk7HpDcj4lSkHYPBlPbehZpTFIXm8dnWKHp47_TA_mdjdal--7SRcnR2ibE3ggtJdAbm3eOuJ3p7topFwaVVMMNKy89q4LRB437sJgbfNr5NuYsiM17GxkuUq7brRLFbikU0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBaLEQADQNad6m-bg4L7xZf_0MEwQ5aLRgQSFP04sE8Ih0K6nTq8ioh-o7RocVrF2pep0ubiWzUUlXQzqH17CzaVXUfCrOXu4SRnGDNbgr0mCiZpDEiBnFQpEKLlaHGF-iwMp3NyAMS_F9CAJSbxBSM3VA3SwFcx3zOlYb4VrBtKZni2jFlBI-QcduQiFakCHir0mAv61C7MEYVcwTt0YvleaQShbnJ21jjTipRI5Z8XEhX3dnv1iU',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIMty4MvUcu214yTFzY0gvwGiYkPu_VEDERV38Xs2zvn3pI1eYe6Q1ar0Yhg1tUzDeas9fC7izHdF4bToYMiKpYnoott_-8jPkljK6OSerqwbhdjlo15RQDG8kYOBe2gmtzdlIksHHIjV4xhK43GJ6L7tIQxx93frNh7o7SLx8ST6RrbmBnpiIU5t0LGKOyThhUAsYz5jeczfzDhN_dA-klSVGuoWuJgedWnF0WDoRhwgy3G--SOo',
    ],
    badge: 'Class B Compliant',
    filterTag: 'cabinet',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'first-aid-cabinet',
    productEyebrow: 'Industrial Grade Solutions',
    stockNote: 'In Stock: Ready for immediate dispatch to your facility.',
    reviewCount: 0,
    primaryCtaLabel: 'Add to Fleet',
    secondaryCtaLabel: 'View Specs',
    trustBadges: [
      { icon: 'shield-check', label: 'OSHA Approved' },
      { icon: 'package', label: 'Fast Shipping' },
    ],
    complianceSection: {
      title: 'Compliance Standards',
      text: 'Exceeds ANSI/ISEA Z308.1-2021 Class B requirements for workplaces with up to 75 employees across multi-shift operations.',
      badge: '2021',
    },
    checklist: [
      'Heavy-duty metal construction',
      '4-shelf organization system',
      'Wall-mountable for easy access',
    ],
    bentoSpecs: [
      {
        title: 'Complete Refill System',
        text: 'Pre-sorted and color-coded packs for immediate response. The Surefill system ensures you never run low on critical life-saving items.',
        icon: 'package',
      },
      {
        title: 'Dimensions',
        text: 'Compact wall footprint with 22.5" height and 15.2" width for standard industrial mounting locations.',
        icon: 'scan',
        stat: '22.5" H',
      },
      {
        title: 'Compliance',
        text: 'Meets ANSI / ISEA Z308.1-2021 standards for Class B workplace first aid cabinets.',
        icon: 'shield-check',
        accent: true,
      },
      {
        title: 'Capacity',
        text: 'Recommended for facilities serving 150+ personnel with multi-shift coverage.',
        icon: 'users',
        stat: '150+',
      },
    ],
    standardsBand: {
      title: 'Exceeds Workplace Standards',
      text: 'Built for construction sites, manufacturing plants, and high-traffic industrial facilities requiring Class B coverage.',
      badges: ['OSHA Compliant', 'ANSI Class B'],
    },
    kitInventory: [
      {
        category: 'Bandages',
        items: ['Adhesive Bandages (1x3") 100ct', 'Knuckle Bandages 40ct', 'Fingertip Bandages 20ct', 'Butterfly Closures 12ct'],
      },
      {
        category: 'Gauze & Dressings',
        items: ['Gauze Pads (3x3") 25ct', 'Trauma Pad (5x9") 2ct', 'Conforming Gauze Roll 2ct', 'Adhesive Tape Roll 1ct'],
      },
      {
        category: 'Medication',
        items: ['Aspirin Tablets 50ct', 'Antiseptic Wipes 50ct', 'Burn Cream Packets 25ct', 'Eye Wash (1ct)'],
      },
    ],
    refillBanner: {
      title: 'Never Run Out of Life-Saving Supplies',
      text: 'Activate automatic inventory tracking and scheduled restock service to keep your Class B cabinet audit-ready year-round.',
      primaryLabel: 'Activate Refill Service',
      secondaryLabel: 'Learn More',
    },
    seoTitle: '4 Shelf Class B First Aid Kit | Code 3 First Aid',
    seoDescription: 'ANSI Class B first aid cabinet for industrial workplaces. Request a quote for installation and restocking.',
  },
  'blood-stopper-cabinet': {
    slug: 'blood-stopper-cabinet',
    categorySlug: 'first-aid-kits',
    name: 'Blood Stopper Cabinet',
    sku: 'BS-CAB-01',
    description: 'Wall-mounted trauma station with bleeding control supplies for high-risk fabrication and assembly areas.',
    image: '/images/supplies/safety-supplies-trauma-kit.webp',
    filterTag: 'cabinet',
    inStock: true,
    seoTitle: 'Blood Stopper Cabinet | Code 3 First Aid',
    seoDescription: 'Wall-mounted bleeding control cabinet for industrial workplaces. Request a quote.',
  },
  'burn-care-pack': {
    slug: 'burn-care-pack',
    categorySlug: 'first-aid-kits',
    name: 'Burn Care Treatment Pack',
    sku: 'BC-100',
    description: 'Relieves pain and helps prevent infection from burns. Includes gel dressings and cooling agents.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbsq1A8nTQP2u-hItfgvXoXDiYFLXoH3HYwt_QqtJodpuORHI6jimO6cQhRGkLeHt9n4epXEvG92ZdRmbi548KsUwgkdFSk33QKpddqbaAF2h1LZ70T8XsxmdTdesLLQ6Wi-tu2-KNQT4P04-LP7Zf9UC_P6tM4cgBnKqj6UE5HNG_l-o28FzZVGCK5cIVNR_sS9Jq4RWnjFCEHrEwVPTFhahYD4QhoLuQr4qbx3uWhYxsNEwRah8',
    filterTag: 'treatment',
    inStock: true,
    seoTitle: 'Burn Care Treatment Pack | Code 3 First Aid',
    seoDescription: 'Industrial burn care pack for workplace first aid programs. Request a quote.',
  },
  'industrial-trauma-kit': {
    slug: 'industrial-trauma-kit',
    categorySlug: 'first-aid-kits',
    name: 'Industrial Trauma Kit',
    sku: 'TK-400-X',
    description: 'OSHA and ANSI compliant trauma bag engineered for high-risk industrial environments and fabrication workshops.',
    image: '/images/supplies/safety-supplies-trauma-kit.webp',
    badge: 'Top Rated',
    filterTag: 'trauma',
    inStock: true,
    seoTitle: 'Industrial Trauma Kit | Code 3 First Aid',
    seoDescription: 'Heavy-duty trauma kit for industrial job sites. Request a quote and restock scheduling.',
  },
  'bleeding-control-pack': {
    slug: 'bleeding-control-pack',
    categorySlug: 'first-aid-kits',
    name: 'Bleeding Control Treatment Pack',
    sku: '91166',
    productSubtitle: 'Professional Trauma Solution',
    description:
      'Engineered for high-intensity trauma scenarios, this treatment pack provides critical components required to control catastrophic hemorrhaging. Designed for professional first responders, law enforcement, and high-risk facility managers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC1wO81_yiQOtl5w37NI8K2eUMh82uLXMzYNUDxje1GZjy-ht650-aFXFpYpDbHlbhr_cww-aW8Tikqdnj9oGYJ1oWdP_82UJCocpEamGmCEZKrglVqcW-GpoCNnH-dVnv_3QPRt9CAHvgiVnVAQBeSBRZHdq6UnfKC1rIoB8Rwt8KPmr4QYpMEKMernHZtqGN3pLms0ikEtzyrbDDo91Kec4aM46xdeH9dmNIGhXCP7XWWjjK0ww',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAC1wO81_yiQOtl5w37NI8K2eUMh82uLXMzYNUDxje1GZjy-ht650-aFXFpYpDbHlbhr_cww-aW8Tikqdnj9oGYJ1oWdP_82UJCocpEamGmCEZKrglVqcW-GpoCNnH-dVnv_3QPRt9CAHvgiVnVAQBeSBRZHdq6UnfKC1rIoB8Rwt8KPmr4QYpMEKMernHZtqGN3pLms0ikEtzyrbDDo91Kec4aM46xdeH9dmNIGhXCP7XWWjjK0ww',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXp4OlSIHdxCgHBp3HFFAquuEfqrjNrkMNc9s6LyeBbQL9feTt8GmfeMQMHOLpBa8D6s0iYgw2K0O0yU93UEIJ1yKwIIdUIKNGgxeNvIY3x0KaNtEXa7pMc2GUnSN1wnsFoo1xKfBjoTERt6fmMpe1gOEn87vzBzWY3u7CawuHYzcqhx_f_QiwSrzu3omHPJ_8Nf2N2RFzoeV7kRjXrzzdhMJ98NFfJqqOMAMfgkxX8S57IvdMwqY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-qhUTj230ref1Q-Zvn6eurKjciFwqBV1byIjpw0fS5NZXb-74voEGKpI0J79w3nrmxonopy8BwcSEfbn-wBlmLO7c_CsGU8MIq2a0nQTbGpQM2K2fQBvzEc_STBFZZwvn1yMXhwsdVbYYyZF6b3yf3s-hkOEXUfbILdSAFr1eB-XRPkMB0S9RbsA3j7gueu4mt4tIKLa78FaIqD67QJslg45PAXTNt-ULOAEVJ4y0lJgTfDAs7fA',
    ],
    badge: 'Certified Equipment',
    heroBadges: ['STOP THE BLEED® Compliant'],
    complianceBadge: 'STOP THE BLEED® Compliant',
    filterTag: 'treatment',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'bleeding-control',
    primaryCtaLabel: 'Add to Mission Pack',
    secondaryCtaLabel: 'Request Quote for Bulk',
    criticalCallout: {
      label: 'Critical Utility',
      text: 'Perfect for High-Risk Environments',
    },
    trustBadges: [
      { icon: 'badge-check', label: 'FDA Approved' },
      { icon: 'package', label: 'Priority Dispatch' },
    ],
    packFeatureCards: [
      {
        title: 'Catastrophic Bleeding',
        text: 'Includes (1) Tactical Tourniquet with windlass for rapid occlusive application. Tested in extreme field conditions.',
        icon: 'briefcase-medical',
        footer: 'Vital Component',
      },
      {
        title: 'Hemostatic Dressing',
        text: 'Advanced gauze impregnated with Kaolin to accelerate the body\'s natural clotting process without heat generation.',
        icon: 'shield',
        footer: 'Chemical Barrier',
      },
    ],
    fullManifest: [
      '1× CAT Gen-7 Tourniquet',
      '1× QuikClot Bleeding Control Gauze',
      '2× Nitrile Trauma Gloves (Large)',
      '1× Pressure Bandage (4")',
      '1× Trauma Shears (7.25")',
      '1× Permanent Marker',
    ],
    statHighlight: {
      stat: '0%',
      label: 'Failure Rate Recorded',
      text: 'Rigorous stress testing ensures component integrity under 400 lbs of tension.',
    },
    quickSpecs: [
      { label: 'Height', value: '7.5 IN' },
      { label: 'Width', value: '5.2 IN' },
      { label: 'Weight', value: '0.85 LBS' },
    ],
    trainingSection: {
      eyebrow: 'Equipment Without Knowledge Is Risk',
      title: 'Complementary Training',
      text: 'Purchasing this pack grants you early access to our Stop The Bleed advanced certification. Learn to apply these life-saving tools under pressure from former first responders.',
      primaryLabel: 'Explore Training',
      secondaryLabel: 'Download PDF Guide',
      cards: [
        {
          title: 'Law Enforcement',
          text: 'Specialized protocols for officer down and civilian active threat responses.',
          icon: 'shield-check',
        },
        {
          title: 'Industrial',
          text: 'OSHA compliant first aid strategies for heavy manufacturing environments.',
          icon: 'building-2',
        },
      ],
    },
    brandBanner: {
      headline: 'Preparedness Is Not Optional.',
      rating: '4.9/5 User Rating',
      deployed: '100K+ Kits Deployed',
    },
    relatedProducts: [
      {
        slug: 'blood-stopper-cabinet',
        name: 'Bleeding Control Station',
        category: 'Cabinets',
        image: '/images/supplies/safety-supplies-trauma-kit.webp',
      },
      {
        slug: 'bleeding-control-pack',
        name: 'C.A.T. Gen 7 Tourniquet',
        category: 'Medical',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXp4OlSIHdxCgHBp3HFFAquuEfqrjNrkMNc9s6LyeBbQL9feTt8GmfeMQMHOLpBa8D6s0iYgw2K0O0yU93UEIJ1yKwIIdUIKNGgxeNvIY3x0KaNtEXa7pMc2GUnSN1wnsFoo1xKfBjoTERt6fmMpe1gOEn87vzBzWY3u7CawuHYzcqhx_f_QiwSrzu3omHPJ_8Nf2N2RFzoeV7kRjXrzzdhMJ98NFfJqqOMAMfgkxX8S57IvdMwqY',
      },
    ],
    seoTitle: 'Bleeding Control Treatment Pack | Code 3 First Aid',
    seoDescription: 'ANSI-compliant bleeding control pack for workplace trauma response. Request a quote.',
  },
  '5lb-abc-extinguisher': {
    slug: '5lb-abc-extinguisher',
    categorySlug: 'fire-protection',
    name: '5 lb ABC Fire Extinguisher (New)',
    sku: 'C3-FE5ABC',
    description:
      'Essential protection for commercial fleets and high-traffic facilities. Multi-purpose dry chemical agent effective against ordinary combustibles, flammable liquids, and electrical equipment.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIhpHgoLqlXvDKzHHCTVKpOrW0sIi4gJyqShF5bhWdWpX_4P08RqAyihGxLojrWMBwrB8ZlGf-SofEmVIEAom2FOTHHzZzJObrMq92w5JCZxSIzBsSWaC004-10rzs_9-WsfaAW4IhgEXfAHwKP5FipA9SG1GRItpW88hkJoGcdDVjhA2HA3LXYontQmTZHGMxLTnpLDUKdrMWkbywhnS93f6FzrBljskTnjhBRpgzPLz5i0AUyxQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIhpHgoLqlXvDKzHHCTVKpOrW0sIi4gJyqShF5bhWdWpX_4P08RqAyihGxLojrWMBwrB8ZlGf-SofEmVIEAom2FOTHHzZzJObrMq92w5JCZxSIzBsSWaC004-10rzs_9-WsfaAW4IhgEXfAHwKP5FipA9SG1GRItpW88hkJoGcdDVjhA2HA3LXYontQmTZHGMxLTnpLDUKdrMWkbywhnS93f6FzrBljskTnjhBRpgzPLz5i0AUyxQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqHqNxIW6jlwR3H4gtTS6uXWNDTaSXRyiy8MgKD4MiAjF8_xZt3F2zr6cS3ocxEnF3ZYi0RIO-zIIvohay8FEsRIqkdVzMo_Vyn6G8ZBvIXkL8a2FIdLyEi0onCtNhP-A58bW_HejjnEccsHBe9ljoEd7xBuCAEtsV_pCbdU-VNR-cP6Ibn-6vlLDHcLJ2-FCDvi4sXURy8dwig1HnbdAzk-XyUeAxYTtYLxMScKzGt58fraOnrBQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPtRkBLiU_KajH7NmB__uXPoTougGzhmTkI5UMWNVvFJUWZ1alSFp34G2O5tiznJhuCP4ALldEdEBN4S826pnweC8xCcVZ8jqTLogn__NLFZNVND8SCzO-FuqoklUcA1dayX2WJ7ym_G2-Qzra6EuaPNpf8jZk9w6ZmQtXR5PaF9k-1vO0imXNFCWeFYNF2ATYhMP92R57DpuJ6bSvab3IXhEBDz0j2nXKV_oGGilT9nb8niw4HNo',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDhV5nfDEBRXoVLbFXXCmRKGoiraN8Kibq2B_ObQjtYYjKu5yQ91R1xgoRNvVRMP_74tTDwaQHE3EqbzvECJP6HVKfpdnVvc7L_nj4NvJ9TcLyfciBi_ZKtLyJJ_ocrt7Gj-bHzHOy-NnuYPelxpkJRp4RATu3xOeVJMtjIB8gJ1O7UmOwR2dxp6q5hnMNpLQ-T-EeO4ok0fxlXsZgkzsnvPVeUkkh5Jh9w350uxEfZWJt02Nsd0_k',
    ],
    badge: 'Critical Asset',
    filterTag: 'extinguisher',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'extinguisher-compact',
    cardName: '5 lb ABC Fire Extinguisher',
    cardDescription:
      'Multi-purpose dry chemical suppression for Class A, B, and C fires. Ideal for office and light industrial use.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSxxvFl8ZLomAD1C8Zms5-WkV6TWqiJlf8lXwjBZMQtjnNErd2tWVk89Mh1CI9RTihw-P00oiqOuMEA6BO11L9o8sT4r-9RDUh4eJ2XHWyCVBREWwgxj8p5Sp8SOUV3KRzas1e1CYF8QDCOXTiKOPWBR07z7v_678BL7erkt7cH3CM4kcjptCi35wIkW5WaxtKhpWpdGgiVypX5kJyBXmRuzmzSmicJ1GKbp4gIAsDcJtqqDhPyAc',
    cardBadge: 'In Stock',
    cardBadgeTone: 'dark',
    quoteDescription:
      'Essential protection for commercial fleets and high-traffic facilities. Multi-purpose dry chemical agent effective against fires involving ordinary combustibles, flammable liquids, and electrical equipment.',
    quickSpecs: [
      { label: 'Agent Type', value: 'Dry Chemical' },
      { label: 'UL Rating', value: '3-A:40-B:C' },
      { label: 'Weight', value: '5 lb (2.27 kg)' },
      { label: 'Hardware', value: 'Wall Bracket Incl.' },
    ],
    primaryCtaLabel: 'Add to Order',
    secondaryCtaLabel: 'Download Spec Sheet',
    reliabilitySection: {
      eyebrow: 'Rugged Construction',
      title: 'Engineered for Extreme Reliability',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhV5nfDEBRXoVLbFXXCmRKGoiraN8Kibq2B_ObQjtYYjKu5yQ91R1xgoRNvVRMP_74tTDwaQHE3EqbzvECJP6HVKfpdnVvc7L_nj4NvJ9TcLyfciBi_ZKtLyJJ_ocrt7Gj-bHzHOy-NnuYPelxpkJRp4RATu3xOeVJMtjIB8gJ1O7UmOwR2dxp6q5hnMNpLQ-T-EeO4ok0fxlXsZgkzsnvPVeUkkh5Jh9w350uxEfZWJt02Nsd0_k',
      items: [
        {
          title: 'Steel Cylinder Design',
          text: 'Constructed with high-strength steel cylinders and all-metal valve components for long-term durability in harsh industrial environments.',
          icon: 'wrench',
        },
        {
          title: 'Corrosion Resistant',
          text: 'Features a tough polyester epoxy powder coating that withstands salt spray, UV exposure, and heavy vibrations common in fleet vehicle mounting.',
          icon: 'shield-check',
        },
        {
          title: 'Precision Gauge',
          text: 'Vibration-resistant gauge provides instant visual status verification so the unit is pressurized and ready for immediate deployment.',
          icon: 'scan',
        },
      ],
    },
    bulkFleetCta: {
      title: 'Scaling Protection for Your Entire Fleet?',
      text: 'We support logistics firms and construction sites looking to standardize safety across all remote locations.',
      primaryLabel: 'Get Bulk Fleet Quote',
      secondaryLabel: 'Contact Specialist',
    },
    seoTitle: '5 lb ABC Fire Extinguisher | Code 3 First Aid',
    seoDescription: 'UL-rated 5 lb ABC fire extinguisher for commercial facilities. Request a quote.',
  },
  '10lb-abc-extinguisher': {
    slug: '10lb-abc-extinguisher',
    categorySlug: 'fire-protection',
    name: '10 lb ABC Fire Extinguisher',
    sku: '10LBABC',
    description:
      'Engineered for high-hazard industrial environments. This multi-purpose dry chemical unit is designed for Class A (trash, wood, paper), Class B (liquids, gases), and Class C (electrical equipment) fires.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmqrtwpgpSBvoUkTl6rvl_U6qeGBpMKfyyGJTxYQkJ9pDkrhYnyaOFZo7UaAya1XdX9Y3LxLZ2flYfY2kmBPAQFp6-_T0obBYlyYpnb4AgcAvQp_ob2mFHxUQ3Oe_Tr0fBbysUq6EJRls5HrhBIGW80L4Q900EvUw7NCjyypkUJwQFUEZtgkUSgKeBcK30XjsqhavLIYwCjoSsfm37cbKY8D5T1RPsAGPgsvAonlaCih3shOO89Z8',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmqrtwpgpSBvoUkTl6rvl_U6qeGBpMKfyyGJTxYQkJ9pDkrhYnyaOFZo7UaAya1XdX9Y3LxLZ2flYfY2kmBPAQFp6-_T0obBYlyYpnb4AgcAvQp_ob2mFHxUQ3Oe_Tr0fBbysUq6EJRls5HrhBIGW80L4Q900EvUw7NCjyypkUJwQFUEZtgkUSgKeBcK30XjsqhavLIYwCjoSsfm37cbKY8D5T1RPsAGPgsvAonlaCih3shOO89Z8',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsyvp_SO6TCOxk6nX3ICYeM6pgsHsv5wyWwHe_P_WEAg-FLDXe1xCZGT_ZoUsNTHTHJ0Wynm2FPmY8-tAXFz-mtwllb2T8KZENBwX2-vqbh7m59XHwjhphUS2ms33csuSF-tzDugBY8E2hvj6rHBlSVhfFSxN9kEUa8A3BBeqjsm37tYjzPssMl_FSYY4sb7M-YyoOo-equ3x78vGUJ2gPLFJVcc5Z7F_6GW9FwuRbgSTllGclnn0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCh1O8pD0poOVshOrjL0NCJtPtPZ_IiNRSUs9TqsSKmYr__1F1ib2oPlxJeQJObXli-EfWKD1BjTkDFRlrrEFa7fdA0Opr8b00yTeY67quYeGw_Pg8Fs3KvWKCj90BUMUgj21dghMkNQBAUpePzrKdAf125TuaKyjXOVTkgdXkpeGFnNUov-txUpK2m4jy63bohJOK3fq6x77KFkmcASC6TJIvCB1u0rXMmn0VF9tueBovBRyyPKQQ',
    ],
    heroBadges: ['Emergency Readiness Verified'],
    badge: 'Heavy Duty UL Rated',
    filterTag: 'extinguisher',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'extinguisher',
    cardName: '10 lb ABC Fire Extinguisher',
    cardDescription:
      'High-capacity suppression for warehouse and industrial facilities. Built for durability and rapid discharge.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAcJqfZ8i6SNIi8tTS_18odze6L2IiDxWxZWycFjuuacCQOrW2qDcgLp3U4ok-Bu7U9IrADuSW8Z8ZHjj45hMTryiLYg2WNkVuMaWv8zKlP6JTNti3z0PQBO6ynmAsXyzw25tXdNY0EgpadTzA96Kzh5cIKuvji8TV_dN4DKye5peicsatiT3boN0R6cTZEGcELr3xd3ZJ3WI3ogX_3tkoa1Eb2G4vJz_REs8yw6PAVCG3UFBro8HQ',
    cardBadge: 'Commercial Grade',
    cardBadgeTone: 'dark',
    primaryCtaLabel: 'Request Quantity Quote',
    maintenancePlans: [
      {
        title: 'Initial Purchase + Tagging',
        subtitle: 'Standard compliance certification included',
      },
      {
        title: 'Inspection & Maintenance',
        subtitle: 'Scheduled breakdown and hydro-test',
      },
    ],
    trustBadges: [
      { icon: 'package', label: 'Ships in 24h' },
      { icon: 'shield-check', label: 'UL Rated' },
      { icon: 'badge-check', label: 'NFPA Compliant' },
    ],
    techDataHeader: { eyebrow: 'Technical Data', revision: 'Q4 2023 Revision' },
    industrialSpecCards: [
      {
        title: 'Chemical Unit',
        text: 'Multi-purpose ABC dry chemical agent resists moisture and caking for reliable discharge in industrial environments.',
        icon: 'flame',
        footer: 'Agent Weight: 10 LBS / 4.54 KG',
      },
      {
        title: 'UL Rating',
        text: 'Tested and listed for Class A, B, and C fire types with professional-grade discharge performance.',
        icon: 'shield-check',
        footer: 'Discharge Time: 22 Seconds',
      },
      {
        title: 'Construction',
        text: 'Steel cylinder with all-metal valve construction and corrosion-resistant polyester powder coating.',
        icon: 'wrench',
        footer: 'Operating PSI: 195 PSI',
      },
    ],
    whatsInBox: {
      title: "What's In The Box",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdLM7Li1kXao8en0FXc9jlTDoCGAT-sFtvWBJ1loHrkNNgoqdINESC1kvWxD6WEcucqGXVo3kWVZ0Pr89UIEA81EpqhD6P0o7MoM7NK4CTDnNczB9ZBejw7mlqi3D-3TznsJ9IgnYRMKzAzhOVH95BJZDGZMbSt_fiaSTKdgFJnpcqAP-iHAasGvcuT02b_hvavXMQGouWO9aiUzsw6gKTiGC0alBTY5rvUi9rQsOdenicOL9vUuY',
      items: [
        { title: 'Pre-Charged Unit', text: 'Fully pressurized and ready for immediate deployment upon delivery.', icon: 'check' },
        { title: 'Heavy-Duty Wall Bracket', text: 'Custom-fit steel mounting bracket with secure retention strap.', icon: 'wrench' },
        { title: 'Compliance Documentation', text: 'Official certification records and localized safety inspection tag.', icon: 'file-text' },
      ],
    },
    ecosystemSection: {
      eyebrow: 'Beyond The Product',
      title: 'Total Readiness Ecosystem',
      featured: {
        badge: 'Featured Training',
        title: 'Live-Fire Suppression Training',
        text: 'Hands-on extinguisher training with certified instructors for your entire response team.',
        linkLabel: 'View Module Details',
      },
      cards: [
        { title: 'On-Site Recharge', text: 'Mobile recharge service keeps your fleet pressurized and inspection-ready.', icon: 'refresh-cw' },
        { title: '6-Year Hydro Test', text: 'Scheduled maintenance and hydrostatic testing for long-term compliance.', icon: 'clipboard-check' },
      ],
    },
    inspectionCta: {
      title: 'Ready for Inspection?',
      text: 'Our experts can help you determine the exact placement and quantity of safety equipment required for your facility to remain fully OSHA compliant.',
      primaryLabel: 'Get a Facility Quote',
      secondaryLabel: 'Book On-Site Training',
    },
    seoTitle: '10 lb ABC Fire Extinguisher | Code 3 First Aid',
    seoDescription: 'Professional-grade 10 lb ABC fire extinguisher with wall bracket. Request a fleet quote.',
  },
  '2-5lb-abc-extinguisher-mount': {
    slug: '2-5lb-abc-extinguisher-mount',
    categorySlug: 'fire-protection',
    name: '2.5 lb ABC Fire Extinguisher w/ Mount',
    sku: '2.5LBABCW/M',
    description:
      'Compact suppression unit with vehicle-grade vibration-resistant mounting hardware included. Engineered for mobile fleet vehicles, commercial service vans, tight industrial spaces, and emergency response kits.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqqsi0A2NfPc58OsKKSIdeXJZKCDQgAEFczWKIUjZmyzn6QHYMb99Ds3_RKABcUGXzOYRmxYSqI894bmCJPhRK9neocVtnLGUgqgJ3xxr69dUmnZk_Lue_Re3ptaVGHJpqrLlkSLCHPkLZaetuu53BqBpuj7-2iS3_RARuveUveQSb3R8a_l9nuN8z9IqjykpD1tMzIb9PK4JREtK5wUMuglzzNrpZjYYBmhlOADtpLaTBZDmMTEw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqqsi0A2NfPc58OsKKSIdeXJZKCDQgAEFczWKIUjZmyzn6QHYMb99Ds3_RKABcUGXzOYRmxYSqI894bmCJPhRK9neocVtnLGUgqgJ3xxr69dUmnZk_Lue_Re3ptaVGHJpqrLlkSLCHPkLZaetuu53BqBpuj7-2iS3_RARuveUveQSb3R8a_l9nuN8z9IqjykpD1tMzIb9PK4JREtK5wUMuglzzNrpZjYYBmhlOADtpLaTBZDmMTEw',
    ],
    filterTag: 'extinguisher',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'extinguisher-vehicle',
    badge: 'UL Rated 1-A:10-B:C',
    heroBadges: ['Vehicle Grade'],
    cardName: '2.5 lb ABC w/mount',
    cardDescription:
      'Compact suppression unit with vehicle-grade vibration-resistant mounting hardware included.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqqsi0A2NfPc58OsKKSIdeXJZKCDQgAEFczWKIUjZmyzn6QHYMb99Ds3_RKABcUGXzOYRmxYSqI894bmCJPhRK9neocVtnLGUgqgJ3xxr69dUmnZk_Lue_Re3ptaVGHJpqrLlkSLCHPkLZaetuu53BqBpuj7-2iS3_RARuveUveQSb3R8a_l9nuN8z9IqjykpD1tMzIb9PK4JREtK5wUMuglzzNrpZjYYBmhlOADtpLaTBZDmMTEw',
    cardBadge: 'Vehicle Ready',
    cardBadgeTone: 'primary',
    fireCardFeatured: true,
    stockNote: 'In Stock — Ready for Rapid Dispatch',
    bulkPricing: {
      label: 'Bulk Pricing Available',
      subtitle: 'Case of 6 Units',
    },
    primaryCtaLabel: 'Request Bulk Quote',
    secondaryCtaLabel: 'Add to Fleet Order',
    trustBadges: [
      { icon: 'badge-check', label: 'UL Certified' },
      { icon: 'truck', label: 'Fleet Direct' },
      { icon: 'shield', label: '12-Yr Warranty' },
    ],
    coreFeatures: [
      {
        title: 'Vehicle-Grade Mount',
        text: 'Heavy-duty red metal bracket with secure quick-release retention straps built for high-vibration mobile deployments.',
        icon: 'wrench',
      },
      {
        title: 'Compact Footprint',
        text: 'Optimized 2.5 lb dry chemical capacity tailored specifically for confined operational areas and tight vehicle cabins.',
        icon: 'package',
      },
      {
        title: 'Vibration Resistant',
        text: 'Engineered rigorously to withstand heavy mobile transport, rough terrain, and continuous heavy machinery vibration.',
        icon: 'vibrate',
      },
      {
        title: 'UL Rated',
        text: 'Certified 1-A:10-B:C multi-class firefighting capability capable of extinguishing trash, wood, liquids, and electrical hazards.',
        icon: 'badge-check',
      },
    ],
    techSpecCards: [
      {
        eyebrow: 'Agent Specification',
        title: 'Dry Chemical Agent',
        text: 'Monoammonium phosphate powder rated for Class A (trash, wood, paper), Class B (liquids, gases), and Class C (energized electrical equipment) fires.',
        rows: [
          { label: 'Capacity', value: '2.5 lbs' },
          { label: 'Discharge Time', value: '9-10 seconds' },
          { label: 'Range', value: '9-15 feet' },
        ],
      },
      {
        eyebrow: 'Hardware Build',
        title: 'Heavy-Duty Bracket',
        text: 'Robust stamped steel construction featuring an adjustable steel strap and pull-pin quick-release latch for instantaneous emergency deployment.',
        rows: [
          { label: 'Material', value: 'Stamped Steel' },
          { label: 'Finish', value: 'Corrosion-Resistant Red Powder Coat' },
          { label: 'Retention', value: 'Quick-Release Strap' },
        ],
      },
      {
        eyebrow: 'Deployment Environment',
        title: 'Fleet & Mobile Ready',
        text: 'Designed specifically for service trucks, commercial forklifts, emergency response vehicles, semi-truck cabs, and marine vessel cabins.',
        rows: [
          { label: 'Operating Temp', value: '-40°F to 120°F' },
          { label: 'Valve Type', value: 'Anodized Aluminum' },
          { label: 'Compliance', value: 'DOT & USCG Approved' },
        ],
      },
    ],
    missionBanner: {
      eyebrow: 'Mission-Critical Performance',
      title: 'Rapid-Deployment Fire Suppression in Mobile Environments',
      text: 'When seconds count in a mobile fleet or tight industrial workspace, equipment failure is never an option. The Code 3 First Aid 2.5 lb ABC unit is engineered from the valve up to provide uncompromising reliability. Its vibration-resistant bracket ensures the extinguisher remains firmly anchored through the roughest terrain, while permitting an instantaneous one-handed pull release when an emergency strikes.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBFyV6JGFYezLXh4aRJAeTR1sxHZTRQi99D8RQZPl4G5K9D6riqbHVKYjX2kJzfvfd7pePS9wVEKhDXzLIkJAv4AZLyojvU4KyylWqWL9pTAjAry6jIx0J6r_UFXm67xh-W1oXniaiuOZ9eDX_Lj2Msiptk_Sie8DktBYbQj0purNt_XmTH5hUu5803ugT7NOOb8Sq2agKjj8GAIhvbhotJzm15JRwUuZBL2OBzZTKHX5GL57F0p3k',
      badges: [
        { icon: 'zap', label: 'Instant Release Latch' },
        { icon: 'shield-check', label: 'ISO 9001 Quality Assured' },
      ],
      advisory: {
        title: 'Fleet Deployment Advisory',
        text: 'Equipping your commercial or municipal fleet with certified suppression hardware minimizes liability and ensures full compliance with OSHA and DOT safety mandates.',
        buttonLabel: 'Speak with a Fleet Specialist',
      },
    },
    seoTitle: '2.5 lb ABC Fire Extinguisher with Mount | Code 3 First Aid',
    seoDescription: 'Compact ABC fire extinguisher with vehicle mounting bracket. Request a fleet quote.',
  },
  '20lb-abc-extinguisher': {
    slug: '20lb-abc-extinguisher',
    categorySlug: 'fire-protection',
    name: '20 lb ABC Fire Extinguisher',
    sku: 'C3-20ABC-IND',
    description:
      "Our flagship industrial-grade fire protection solution. Engineered for high-risk environments where reliability isn't an option—it's a requirement. The 20 lb ABC dry chemical unit provides maximum coverage for Class A (trash, wood, paper), Class B (liquids), and Class C (electrical) fires.",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBNg3iks5lpVuOkHApyXFVkCGWTad_o9hklPcmG2BR1dSBkv7_h2asewURX0FRe2OkiTxvGNeOcX4Ze5A9x6Kohze0yQuBMItj2AJHvrEjKqO94EboDwPkQHi5SMes1Exkpr0xM6gnvlaQsb06fu3JQd0PdaBecl2xbe0OJjHvi27-gwBA_FEhmbcWKShmfAWcyQwON3odBW-R94zm7pM8xXAR__gviFd26BO9QypIBF7UxubPB1wM',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBNg3iks5lpVuOkHApyXFVkCGWTad_o9hklPcmG2BR1dSBkv7_h2asewURX0FRe2OkiTxvGNeOcX4Ze5A9x6Kohze0yQuBMItj2AJHvrEjKqO94EboDwPkQHi5SMes1Exkpr0xM6gnvlaQsb06fu3JQd0PdaBecl2xbe0OJjHvi27-gwBA_FEhmbcWKShmfAWcyQwON3odBW-R94zm7pM8xXAR__gviFd26BO9QypIBF7UxubPB1wM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpUy_em0szKTAQChG67rzSQkWggYwe_PUgYRWvp7--8dH0tMLB2u3dvk6OL-tZguwKiI1rEp9o8zEgcU0--NPp7gVSbjAkSWSP0keynyR33hJp_iGWBeH0DNqsy1rj3T3s9a4c3Lked5N6Fy6j_vKylnSm7eEj0-iEawweolcPm1sPqiQPCcA1JVPpU-dLOHvfbO8mKocpmUPK4Wzuo_mhw7u3UET1KD_WQz4Q32jGL0gfb9DMVJI',
      '/images/supplies/fire-extinguisher-mount.jpg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAenjPJmWcaqo-Tnl2CZMAqDFh0yicN5mT3fDoCCzQESn8Bo-EtslMOQFf_QPe1Ld7W2GudZiMQC46YUbeGF4TNGfcYSx1t5v3GP2Kvzef3Nl2QngkqDrdyEqe0yp3tBQAkt8MJ7YQeDdbzwbcht-AbKvn1eT1oTfQxcEstjo45eraFcJbQQ8T49nq6DxYCQoDMyyr89ZE_se0y98zcWFRkRwipWDo44e9n-EkEHdbTenqe0TRGQNk',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAEHwXv_Ej9HZxIg4dWCK-vIs1uq4IaRzQWxIxvuNp_Vjnj91IBR8r8NCnFVkf-qrSysVKm50cKzlpnFerAbF7QPItoPCHrKEjscdtEhX_e-NAHCctmzXwMFSrkSZE2zEh5XgLokn_gQwU1qSHJ4dlW7H94pwIm0MrFNArDDm-_chEpIVAQ1i4eeYcLJIklfhGqA1qx9k29cXMHi4PBz8yaBCDZlPL55v4DnQQj5bnFVekH8uFtwmA',
    ],
    filterTag: 'extinguisher',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'extinguisher-industrial',
    productEyebrow: 'Industrial Series',
    cardName: '20 lb ABC FE',
    cardDescription:
      'Maximum capacity industrial unit designed for large-scale fire threats and rapid suppression in high-hazard areas.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBNg3iks5lpVuOkHApyXFVkCGWTad_o9hklPcmG2BR1dSBkv7_h2asewURX0FRe2OkiTxvGNeOcX4Ze5A9x6Kohze0yQuBMItj2AJHvrEjKqO94EboDwPkQHi5SMes1Exkpr0xM6gnvlaQsb06fu3JQd0PdaBecl2xbe0OJjHvi27-gwBA_FEhmbcWKShmfAWcyQwON3odBW-R94zm7pM8xXAR__gviFd26BO9QypIBF7UxubPB1wM',
    cardBadge: 'Max Capacity',
    cardBadgeTone: 'dark',
    quickSpecs: [
      { label: 'Operating Temp', value: '-40°F to 120°F', icon: 'thermometer' },
      { label: 'UL Rating', value: '10-A:120-B:C', icon: 'badge-check' },
    ],
    primaryCtaLabel: 'Request a Quote',
    secondaryCtaLabel: 'Contact Specialist',
    trustBadges: [
      { icon: 'shield-check', label: 'OSHA Compliant' },
      { icon: 'badge-check', label: 'NFPA 10 Certified' },
      { icon: 'circle-check', label: 'UL Listed' },
    ],
    precisionFeatures: [
      {
        title: '20 lb Capacity',
        text: 'Heavy-duty agent load designed for larger commercial spaces, warehouses, and industrial workshops. Provides extended discharge time for maximum suppression.',
        icon: 'package',
      },
      {
        title: 'Steel Cylinder',
        text: 'Rugged steel construction with polyester powder coating for maximum corrosion resistance in harsh industrial environments. Built to last 12+ years with maintenance.',
        icon: 'wrench',
      },
      {
        title: '26-30s Discharge',
        text: 'Optimized nozzle flow rate provides a powerful 15-21 foot range, allowing for safe stand-off distances during emergency deployment.',
        icon: 'zap',
      },
    ],
    fullSpecsTable: [
      { label: 'Model Number', value: 'C3-20ABC-IND' },
      { label: 'Valve Material', value: 'Anodized Aluminum' },
      { label: 'Total Weight', value: '32.5 lbs (Charged)' },
      { label: 'Pressure Gauge', value: 'UL Validated Dial' },
    ],
    whatsInBox: {
      title: "What's in the Box",
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD-sKddbNRWD_Ii6OTNMH9lODz5NpNlpNPjZQXOfqqSSdLDXCDmoMRhd_2BFpCoEewpz-nsOLEFx5T_shhTWmpbQdDU_quQH-mG5-_x-nmd94ZsNo3SmebhOemnEHce5eGPkMeYp617ELhgeVfwSoo7sY8T08aSquPpZaSFpPn23Tk4qONGNm_mbKLqRMr2-JowvhB12vcQ_r03nufVj5Mm7xX6clqIdhkQq3sFTljpUyDyGLSAa-c',
      badgeStat: '100%',
      badgeLabel: 'Ready for Service',
      items: [
        {
          title: 'Heavy Duty Wall Bracket',
          text: 'Industrial-grade steel wall hanger included for secure mounting on structural walls or columns.',
          icon: 'wrench',
        },
        {
          title: 'Installation Documentation',
          text: 'Full NFPA 10 compliant placement guides, mounting instructions, and initial inspection tags.',
          icon: 'file-text',
        },
        {
          title: 'Pre-Charged Unit',
          text: 'Delivered pressurized and ready for service, sealed with safety pin and tamper indicator.',
          icon: 'check',
        },
      ],
    },
    bulkFleetCta: {
      title: 'Need a Bulk Solution for Your Facility?',
      text: 'We provide custom quotes for facility-wide outfitting, including professional installation and monthly compliance monitoring.',
      primaryLabel: 'Request a Volume Quote',
      secondaryLabel: 'Contact Specialist',
    },
    seoTitle: '20 lb ABC Fire Extinguisher | Code 3 First Aid',
    seoDescription: 'High-capacity 20 lb ABC fire extinguisher for industrial facilities. Request a quote.',
  },
  '5lb-halotron-extinguisher': {
    slug: '5lb-halotron-extinguisher',
    categorySlug: 'fire-protection',
    name: '5 lb Halotron Fire Extinguisher',
    sku: 'C3-FE5HAL',
    description:
      'Leaves no residue and is non-conductive. This extinguisher uses a clean, rapidly evaporating liquid that leaves no residue behind, making it the ideal choice for protecting sensitive electronic equipment, data centers, and server rooms. It discharges as a rapidly evaporating liquid that leaves no residue, minimizing secondary damage after a fire.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-fC83ZeuinyfZsnT_X2zYF699iypRyJfANcuDw-sLkgS_8Cc9nf7tLCR9OFaH0z4br6Z1qu9OPTNf2Ci_fejXO9sdkHcF8bMd1aQs3xlEF7HT7M1vKtGaCiDsLk2QWNwOt4t1VMUiN1OUkf14EB3bc5p3z4DB-FbySx5pmOPonjHiUdztVOMCRM-7P89NE-A2B8ukxeOxUs5RYR-B0cmDrZBVToXVuKiOdddWsH0692a9tjw6clA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-fC83ZeuinyfZsnT_X2zYF699iypRyJfANcuDw-sLkgS_8Cc9nf7tLCR9OFaH0z4br6Z1qu9OPTNf2Ci_fejXO9sdkHcF8bMd1aQs3xlEF7HT7M1vKtGaCiDsLk2QWNwOt4t1VMUiN1OUkf14EB3bc5p3z4DB-FbySx5pmOPonjHiUdztVOMCRM-7P89NE-A2B8ukxeOxUs5RYR-B0cmDrZBVToXVuKiOdddWsH0692a9tjw6clA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJnuvbdUzXuAV6Xj8C5hT0cyXp2D_TA65_3MR3YautacRQUnVbjMPxKWzMooGPvAiNz4dLySIh8uEK_GypwsyKqDxlC-wnEkZdpDOPbBq0XHNsEJdT_MsM-q8HPIBEr7ojE8zvL5vrsr513UfWZxLiuhIsJMfhA9uFpGsy4fgFY3pZN-x0WPLZzQfWZaD078ieZUwi9RvpFe-glDSX_d7J3R_Tp48Lo7T642_JquelAeryVJfnq3Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjAW01Kmikf5yNFwGYBCFu5lzAdONaeN3MhifAKE0xsIelGeP5od7mRtHb5ZyFaj51Z4v07cNLLx-h8uMF6f3KEpouaBHN1ZFrqIwyoh3Z-0KPRZgQrtn8dKgvfz1J6izXmOEoS5OI18UxdLCYkAbUherIhoVMRkbFcl21YRt58CDiWeUS82As4kOysYpEsS8G0T3vpEt59xKbgPv7lZG8GbrpwvadJK4DUJ5fsivwEvmJN8bdTtc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD03nbQCdwDlQkURXF0iF9ZlrJeBhAe4EpPDLD4lV4U7elZtUnDihZrlFUZ0A8208Csh7M6U32SwKkgJc9d0qQyHAtBLAdEFi1xipXeOr3RYPzydsGJvC7QJpQwcNGi7mSs8wxtvx6e6dcqcdrGlLmjyPbtS9nEJczeoitEfyvn8MbrBLROtNv1kAFFVbm2E9rqvpQOT5JPaQbY_3bdAijb6qM3gvs5ZPT7D2OkxNQoQuU3GvC7S94',
    ],
    filterTag: 'extinguisher',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'extinguisher-halotron',
    badge: 'Class B, C',
    productEyebrow: 'Clean Agent',
    productSubtitle: 'Clean agent suppression for electronics and data centers.',
    primaryCtaLabel: 'Contact Us',
    cardName: '5 lb Halotron',
    cardDescription:
      'Clean agent suppression for electronics and data centers. Leaves no residue and is non-conductive.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-fC83ZeuinyfZsnT_X2zYF699iypRyJfANcuDw-sLkgS_8Cc9nf7tLCR9OFaH0z4br6Z1qu9OPTNf2Ci_fejXO9sdkHcF8bMd1aQs3xlEF7HT7M1vKtGaCiDsLk2QWNwOt4t1VMUiN1OUkf14EB3bc5p3z4DB-FbySx5pmOPonjHiUdztVOMCRM-7P89NE-A2B8ukxeOxUs5RYR-B0cmDrZBVToXVuKiOdddWsH0692a9tjw6clA',
    cardBadge: 'Clean Agent',
    cardBadgeTone: 'dark',
    quickSpecs: [
      { label: 'Fire Rating', value: '5B:C', icon: 'flame' },
      { label: 'Capacity', value: '5 lbs', icon: 'package' },
      { label: 'Discharge Time', value: '9 Sec', icon: 'cloud' },
      { label: 'Mounting', value: 'Wall Bracket', icon: 'wrench', note: '(Included)' },
    ],
    coreFeatures: [
      {
        eyebrow: 'Zero Residue',
        title: 'Clean Discharge',
        text: 'Protects sensitive electronics, servers, and high-end machinery from secondary agent damage.',
        icon: 'zap',
      },
      {
        eyebrow: 'SNAP Approved',
        title: 'Environmentally Safe',
        text: 'Zero ozone depletion potential with rapid atmospheric evaporation for eco-conscious facilities.',
        icon: 'leaf',
      },
      {
        eyebrow: 'Non-Conductive',
        title: 'Class C Protection',
        text: 'Safely suppresses live electrical fires without risking operator shock or short circuits.',
        icon: 'shield',
      },
    ],
    seoTitle: '5 lb Halotron Fire Extinguisher | Code 3 First Aid',
    seoDescription: 'Clean agent Halotron fire extinguisher for electronics and data centers. Request a quote.',
  },
  'fire-extinguisher-mounting-brackets': {
    slug: 'fire-extinguisher-mounting-brackets',
    categorySlug: 'fire-protection',
    name: 'Universal Fire Extinguisher Mounting Bracket',
    sku: 'UVMB-110HD',
    description:
      'Engineered for absolute reliability in high-stress environments. This heavy-duty steel bracket, finished in a professional matte black powder coat, secures your critical fire suppression equipment firmly in place, ensuring immediate access when seconds matter. Designed for industrial, commercial, and fleet applications.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqQjlg2lReKEMCYMCOA_LJnJN7-Yyl27oCapFLaVIX3niIpc3qbMqf0apkEww4GsgpKi69vOiDzTPQFPpiSOeAQAUOiF6f7xx8BC5t_6O5VzlYpbVqBlmb7iVOGR3R1-SRIzHLInjsEUEcvgNmP_pUIRTv4oEOvxSsETSF15tQEWJpNDGHiWMcXRqS4N5jc9Vgxy83eOpS_v4w8hm_alQKy-Jn6iHMUdNctWyiybvYdefXhZKwhIM',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqQjlg2lReKEMCYMCOA_LJnJN7-Yyl27oCapFLaVIX3niIpc3qbMqf0apkEww4GsgpKi69vOiDzTPQFPpiSOeAQAUOiF6f7xx8BC5t_6O5VzlYpbVqBlmb7iVOGR3R1-SRIzHLInjsEUEcvgNmP_pUIRTv4oEOvxSsETSF15tQEWJpNDGHiWMcXRqS4N5jc9Vgxy83eOpS_v4w8hm_alQKy-Jn6iHMUdNctWyiybvYdefXhZKwhIM',
      '/images/supplies/fire-extinguisher-mount.jpg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7eHoXhxZsiqk_mzUA81TTl-q8YecWrEMNXcpYooydAmt2lcPDE9-Z06MzJVfkkF8MuFlEguujgy4jpSboW31CosODjlaa45LPN7BaWwXHWkKebcbSyy6qtSZOucheRqdmOx0YbCJ4CLWJglQ2ODMkZpwDJHHonXoOUJiKLiOlVR-M4LSkO0f9GklU8rYK6N_vS2X-1TTYweVkA1pmAdeiFuLLACiXjXbUg7WPpcne3PxBv___3Yg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBroEg_QS-gpwrhrPq1fXNxes5tFCV2ggBJh6njyC7k1WaqV3GXrVNadlYZwmwUH94q5U3-KoTJ4_nE-ey5Y0tSAs6mzzZu9777TPIl7i7w0YgzVYDpV-Z-bjhvlqNGVqRYS29jlSNAh0I-TfktixZyICZAIoFkCWlYrEclkVS72b3YyJFylhSNJM6OFr8UFhx4tBUL8wwHQu_q_2IiMgPRp1b7Ug97Zd_fIIJ0Vpxp9cbxkPrpLEM',
    ],
    badge: 'Heavy-Duty Equipment',
    filterTag: 'extinguisher',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'mounting-bracket',
    stockNote: 'In Stock & Ready to Deploy',
    primaryCtaLabel: 'Add to Deployment Kit',
    secondaryCtaLabel: 'Contact Specialist',
    cardName: 'Fire Extinguisher Mounting Brackets',
    cardDescription:
      'Heavy-duty steel wall and vehicle brackets. Powder-coated for corrosion resistance and long-term durability.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqQjlg2lReKEMCYMCOA_LJnJN7-Yyl27oCapFLaVIX3niIpc3qbMqf0apkEww4GsgpKi69vOiDzTPQFPpiSOeAQAUOiF6f7xx8BC5t_6O5VzlYpbVqBlmb7iVOGR3R1-SRIzHLInjsEUEcvgNmP_pUIRTv4oEOvxSsETSF15tQEWJpNDGHiWMcXRqS4N5jc9Vgxy83eOpS_v4w8hm_alQKy-Jn6iHMUdNctWyiybvYdefXhZKwhIM',
    techSpecsList: [
      {
        title: 'Material',
        text: 'Heavy-duty 11-gauge rolled steel construction.',
        icon: 'wrench',
      },
      {
        title: 'Finish',
        text: 'Weather-resistant, professional matte black powder coat.',
        icon: 'droplet',
      },
      {
        title: 'Retention',
        text: 'Quick-release industrial nylon strapping system.',
        icon: 'lock',
      },
      {
        title: 'Compatibility',
        text: 'Universal fit for standard 5 lb to 20 lb cylinders.',
        icon: 'scan',
      },
    ],
    deploymentCards: [
      {
        title: 'Industrial Warehouses',
        text: 'Secure mounting on steel beams and concrete pillars in high-traffic zones.',
        icon: 'warehouse',
      },
      {
        title: 'Commercial Fleets',
        text: 'Vibration-resistant retention for utility vehicles and transport trucks.',
        icon: 'truck',
      },
    ],
    engineeringSection: {
      title: 'Engineering & Installation Specifications',
      eyebrow: 'Precision Engineering Standards.',
      text: 'Our mounting systems are built to exact architectural specifications, ensuring compliant, high-fidelity installation across any facility. Every bracket is engineered for structural integrity and rapid deployment in critical environments.',
      image: '/images/supplies/fire-extinguisher-mount-blueprint.jpg',
    },
    commercialQuoteCta: {
      title: 'Facility Procurement',
      text: 'Equipping a large facility or managing a fleet? We offer dedicated account management for bulk orders of critical safety infrastructure.',
      buttonLabel: 'Request Bulk Quote',
    },
    seoTitle: 'Universal Fire Extinguisher Mounting Bracket | Code 3 First Aid',
    seoDescription:
      'Heavy-duty 11-gauge steel fire extinguisher mounting brackets for wall and vehicle use. Request a quote.',
  },
  'fire-extinguisher-signs': {
    slug: 'fire-extinguisher-signs',
    categorySlug: 'fire-protection',
    name: 'Fire Extinguisher Signs',
    sku: 'C3-FESIGN',
    description:
      'OSHA-compliant high-visibility signage. Available in flat, projecting, and glow-in-the-dark variants.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBECWYQZQCRO315C1ZjWYIpxppux-kE0_nKAO1N2I1rIAZW_1wX0fGv5n8zJonmPeud-Dlbq_3ZtxhIsYzJRId24-uiGLIxAnzXcxWWm2TRsionv66WTf6ecZOZ6nYsJlV4KaT0qplE6_oxdKXqmiv4q0uAhnHrGFKi2gzXJJQGLlOoYn4AbqjmQbb3wawCk86PvBKu88Pf96j81N6JnKqak5r6lfWCgi8Ros30xCqzI1T75vz2nTc',
    filterTag: 'extinguisher',
    inStock: true,
    cardName: 'Fire Extinguisher Signs',
    cardDescription:
      'OSHA-compliant high-visibility signage. Available in flat, projecting, and glow-in-the-dark variants.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBECWYQZQCRO315C1ZjWYIpxppux-kE0_nKAO1N2I1rIAZW_1wX0fGv5n8zJonmPeud-Dlbq_3ZtxhIsYzJRId24-uiGLIxAnzXcxWWm2TRsionv66WTf6ecZOZ6nYsJlV4KaT0qplE6_oxdKXqmiv4q0uAhnHrGFKi2gzXJJQGLlOoYn4AbqjmQbb3wawCk86PvBKu88Pf96j81N6JnKqak5r6lfWCgi8Ros30xCqzI1T75vz2nTc',
    seoTitle: 'Fire Extinguisher Signs | Code 3 First Aid',
    seoDescription: 'OSHA-compliant fire extinguisher identification signs. Request a quote.',
  },
  'aed-wall-cabinet': {
    slug: 'aed-wall-cabinet',
    categorySlug: 'fire-protection',
    name: 'AED Wall Cabinet with Alarm',
    sku: 'AMP16SQ-A',
    description:
      'Ensure your facility is heart-safe and compliant. Our industrial-grade steel AED cabinet provides a secure, highly visible storage solution for all major AED brands. Equipped with a powerful 120dB alarm to alert responders instantly upon opening.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGvSwe3RgumeHn7Qw_brlEy38QiQQjpMNohPDp5UZzIUWeXSM8sdULd3l6oryPBFUmYJIGDU9-T0o7NOYQgnDSPgrE-6P8VSBXeSE4slfRmayHXM34IIW34d_oZC1C6fGFGzM0X5a478MShAlz1it7Be-q9bwD14ttiGZ4LicUkGlL5Gl6s8-NNMJZUNvav5hVzyySAeYYrjJcE2ZXJrI7Y6my3R6JDanekBkiE3QQnXJXITL3L6g',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGvSwe3RgumeHn7Qw_brlEy38QiQQjpMNohPDp5UZzIUWeXSM8sdULd3l6oryPBFUmYJIGDU9-T0o7NOYQgnDSPgrE-6P8VSBXeSE4slfRmayHXM34IIW34d_oZC1C6fGFGzM0X5a478MShAlz1it7Be-q9bwD14ttiGZ4LicUkGlL5Gl6s8-NNMJZUNvav5hVzyySAeYYrjJcE2ZXJrI7Y6my3R6JDanekBkiE3QQnXJXITL3L6g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvb74k0aSOkdHvO3HfkXFUezMTRZkVaImvQiZqun4DyTAZfPmqQI3IKvpvwqqulN9bHXb2ITBn7J-vwXLddvdFbYm6zyKq5DDkTjLDjRBoSrCexdgsx37nTyv79vLtVPXGQ_ylPmdBPEC0SbuuPqOJ6fEwzZlASaHq0kuRcoaVvtSStjWYDw3_PaSWfKG0vA3UIDGBmfX0MU3VDVUjr9wWbhIYplyDPzPaBSkMCzMc2tBpYTVQ_1k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD1sTiUxHR2n9xcPNOgkJoLnd0ClaM0jys-mnjexdu_w1Rw1ltYHofy-_NRA-YDr_FBG0Fd646F-iFBvtMlDnGBOAGxu-UlTIgi6Ki7LF0JPL_K1RO4lueHVP1lm9kYxT3as4HnNcWBtdQYMzEmioqzYRE5A9cKBV9L1cQG9lUDrGKE-A_eNiaTPwrw_qjYxf1uAde2i2Wy-Hht06Sev3QgeWm58wvIBIRuR1IvtCfvo6SQX3w_TOQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpc3DYvGBqJ01YFu-EWnexxveiHjtPI-c0MIKcxD-2AZyWr5vMWyHY4u1MW4mQwN7M4WFQb3-wFJBHah9XPAMuBnEaT82KNUSEMrcGPKzOrU0lbUnEBz3sOh2CTLhAgiMFe6hjLSXduLY-0GIzC_jtrCc4aUMYeqd2ltSL9gwSbsowGnJNLj9db6hVWVjHcZMHvfdR9VLB3rBSmDyUwq2LHl_eDv2oAeSquF72aLqvjGXF3QLr9Pg',
    ],
    heroBadges: ['Certified Compliance'],
    filterTag: 'cabinet',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'aed-cabinet',
    primaryCtaLabel: 'Add to Fleet',
    secondaryCtaLabel: 'Request a Quote',
    checklist: [
      'Universal Fit: Compatible with Zoll, Cardiac Science, Philips, and more.',
      'High-Decibel Alarm: Integrated 120dB siren with key-switch bypass.',
      'Steel Construction: 20-gauge cold-rolled steel with powder-coat finish.',
    ],
    trustBadges: [
      { icon: 'badge-check', label: 'OSHA Compliant' },
      { icon: 'package', label: 'Priority Dispatch' },
    ],
    constructionSpecs: [
      { label: 'Housing', value: '20ga Cold Rolled Steel' },
      { label: 'Finish', value: 'Corrosion Resistant Powder Coat' },
      { label: 'Viewing Window', value: 'Impact-Resistant Acrylic' },
    ],
    cabinetSpecs: {
      dimensions: '17.5" x 17.5" x 7"',
      dimensionsNote: 'External measurement. Fits recessed or surface mount configurations.',
      alarmPower: '9V Alkaline',
      alarmNote: 'Ships with primary cell. Estimated 2-year standby life.',
      audioOutput: '120 Decibels',
      audioNote: 'Adjustable duration: 30s, 60s, or continuous until reset.',
      certification: {
        quote: 'The AMP-Series represents the gold standard in workplace emergency accessibility.',
        text: 'Certified for High-Traffic Public Access Environments (NFPA / OSHA).',
      },
    },
    bulkFleetCta: {
      title: 'Equip Your Entire Facility',
      text: 'Deploy standardized AED storage solutions across multiple locations with our dedicated fleet management program. Expert installation and compliance tracking included.',
      primaryLabel: 'Fleet Inquiries',
      secondaryLabel: 'Contact Support',
    },
    seoTitle: 'AED Wall Cabinet with Alarm | Code 3 First Aid',
    seoDescription: 'Wall-mounted AED cabinet with 120dB alarm. Request a quote for fleet deployment.',
  },
  'zoll-aed-plus': {
    slug: 'zoll-aed-plus',
    categorySlug: 'first-aid-kits',
    name: 'Zoll AED Plus Fully Automatic',
    sku: '8000-004007-01',
    description:
      'The first and only AED with Real CPR Help. This fully automatic defibrillator guides rescuers through the entire Chain of Survival with voice prompts and visual icons, ensuring high-quality CPR is delivered every time.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRxDUMpCoz4NfYt7SWHk6uHG-xtsMy6aFZYmtbVjhvXCwpcYAvrVlBDAEeNwsYoOSYuFg9gBm3dWneyURcAdRVigwILAxIzCU2zBmQom6_6g1fX9DtdhIOKSrmqjHjinqpCWHF-Np_dxxC001A8DCSUuZctOptoHmgy9jXuJ_YiOv582qGhQg-7p_5PHeaWsYJAPmwqifYVZts7JWvts7YqTVozRe9m3rBM2-Yg3FRKdPO-nCXzd0',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRxDUMpCoz4NfYt7SWHk6uHG-xtsMy6aFZYmtbVjhvXCwpcYAvrVlBDAEeNwsYoOSYuFg9gBm3dWneyURcAdRVigwILAxIzCU2zBmQom6_6g1fX9DtdhIOKSrmqjHjinqpCWHF-Np_dxxC001A8DCSUuZctOptoHmgy9jXuJ_YiOv582qGhQg-7p_5PHeaWsYJAPmwqifYVZts7JWvts7YqTVozRe9m3rBM2-Yg3FRKdPO-nCXzd0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAH9H5bTS3vJfuQQnJycszW0a7DuHhjlS2IMpZWWutcKOOrLtsJLrJFek-pSoq9Mys8JvRNh-kZ78DN1qKovCkIiEAaHpoekhl6Mf_tSH3sIEOvDTMpLPHN4r-4oGM7xushM42p4ctAqiml1g1htX2_UfJLtMZ8hVPz57m824SuoSqbD65kiNueRQAFUh6sQODjOhp-uJYwyVvF7n-JgbXGK4E_jl2qECeFI_NHjVVfpOAX6uIpMLk',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAhzlJIXDZbkVQs2avQxv0eO27jdVHdp_9LM7NgjWCNmxhr1BBCJenJNzeDNjbcBgFIIHcheEUIVWz8uobtdxkhVoSWqIEPW7TtR8VAThzuhSLbIKu0cAO_a-AHm3mdu14f7u43nozEMLsOSn26OGJoRxOUaVwJEAr8Sl4qoZPvFiN5h-021jjhK5cUYurycUiDAnBksDbXJs6yfDNWE6TW8-JY10jX_zu5pLZgn5yHR-QGqn1Qt2Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCt2GJ4bgBeEyRHiemlX6CjGPGkNmX5D4AF-ipQH_-o8_vj2HRTekKsIYgiO8JHLvnW7___oBfkTuyn1WaPn3TxNlC0INA33O5CsSESVMp_6DiPDp4-5EXXtu3R7iHxrxaez0PyRCD6P9QRGCUzLrB5GnrnX5Sf4l-YeiwtUxOBngOnUfILy1Ijq3V0-jCz-Oj38tTa1AisVwyzM1wB5_heHRdItUJS4Okvxj5_FBzv-JEWpi3PuI4',
    ],
    heroBadges: ['Critical Asset', 'Fully Automatic'],
    badge: 'Limited',
    filterTag: 'cabinet',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'aed-plus',
    primaryCtaLabel: 'Add to Fleet',
    secondaryCtaLabel: 'Request Quantity Quote',
    heroFeatureCards: [
      { title: 'Real-Time CPR Coaching', text: 'Measures depth and rate of compressions.', icon: 'activity' },
      { title: '5-Year Battery Life', text: 'Uses consumer 123A batteries for easy replacement.', icon: 'shield-check' },
      { title: 'Clear Voice Prompts', text: 'Step-by-step guidance for high-stress situations.', icon: 'siren' },
    ],
    precisionFeatures: [
      {
        title: 'One-Piece Electrode',
        text: 'The Zoll CPR-D padz feature a unique one-piece design with a built-in sensor, eliminating the risk of misplaced pads during a rescue.',
        icon: 'shield-check',
      },
      {
        title: 'Shock Advised',
        text: 'Analyzes heart rhythm in seconds. Fully automatic mode delivers the life-saving shock after a clear vocal warning.',
        icon: 'activity',
      },
      {
        title: 'IP55 Rated',
        text: 'Ruggedized construction for high resistance to dust and water, designed to perform in extreme environments.',
        icon: 'shield',
      },
    ],
    boxContents: [
      { label: 'Zoll AED Plus Fully Automatic Unit', qty: 'Qty: 1' },
      { label: 'One-piece CPR-D padz (Pre-connected)', qty: 'Qty: 1' },
      { label: 'Duracell Lithium Battery Set (10 Pack)', qty: 'Qty: 1' },
      { label: 'Rugged Soft Carrying Case', qty: 'Qty: 1' },
      { label: 'First Responder Rescue Accessory Kit', qty: 'Qty: 1' },
    ],
    replacementParts: [
      {
        name: 'CPR-D Padz',
        sku: '8900-0800-01',
        image: '/images/supplies/cpr-d-padz.png',
        slug: 'cpr-d-padz',
      },
    ],
    commercialQuoteCta: {
      title: 'Be Prepared. Save a Life.',
      text: 'Next-day shipping available on in-stock AED units. Consult our experts for fleet deployment and compliance planning.',
      buttonLabel: 'Order Now',
    },
    seoTitle: 'Zoll AED Plus Fully Automatic | Code 3 First Aid',
    seoDescription: 'Zoll AED Plus with Real CPR Help for Midwest workplaces. Request fleet management quotes.',
  },
  'mobile-eyewash-station': {
    slug: 'mobile-eyewash-station',
    categorySlug: 'eye-care',
    name: 'Mobile Eyewash Station',
    cardDescription:
      'Gravity-fed portable unit for remote sites without plumbing access. 15-minute continuous flow capacity.',
    sku: 'MF555432',
    description: 'Gravity-fed portable unit for remote sites without plumbing access. 15-minute continuous flow capacity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2y5kys8AuXo5IyrrHK1BWGP9DKb4t7D7PRlqiBlYQVfn2n4MR6_ECmG7_jpyj8AzKnyQZGryIrl7k2cJxuKABoePj2VVk8bpLPXrgExCwl-5IOh41_rWwXLiOqPFr-LzZ4cxQbeTxTWe91iMBxWwly8C_r1Mln4Hum_OLpsFbwjoENLAq5d5IxYDFYGmifbkVFi-a9U2qT2KOb7aRZrICYRAqDTDOBXAzKHHMurtgZFsfzIeKoEo',
    badge: 'Heavy Duty',
    filterTag: 'station',
    inStock: true,
    hasDetailPage: true,
    highlights: [
      { title: 'Instant Mobility', text: 'Locking casters move protection where hazards shift.' },
      { title: '15-Minute Flow', text: 'Meets OSHA and ANSI continuous-flow requirements.' },
      { title: 'Compliance Ready', text: 'Includes inspection tag and starter solution.' },
    ],
    specs: [
      { label: 'Capacity', value: '16 Gallons' },
      { label: 'Width', value: '38.5"' },
      { label: 'Height', value: '34.0"' },
      { label: 'Caster Size', value: '8"' },
    ],
    featureCards: [
      { title: 'Heavy-Duty Locking Casters', text: 'Stable placement on uneven plant floors.' },
      { title: 'One-Step Activation', text: 'Pull-handle design for fast emergency response.' },
    ],
    seoTitle: 'Mobile Eyewash Station | Code 3 First Aid',
    seoDescription: 'Mobile gravity-fed eyewash station for industrial jobsites. Request a quote and facility audit.',
  },
  '16oz-eyewash-bottles': {
    slug: '16oz-eyewash-bottles',
    categorySlug: 'eye-care',
    name: '16oz Eyewash Bottles',
    sku: 'EW-16OZ',
    description: 'Individual replacement bottles with ergonomic eye-cup designs for precision delivery of sterile solution.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApyQ7wt1eolr2PQbYCmw9PBkSctFOs8asexXBR2pK5rRUgSYjrkS1VgajBGkJ4sCevqazIQ-31O2xQ7UazKpsRbfajYvjbqcacbbnFh3qJDRG3YeUkOr9pWtVssSXv4mJ5OFj9-uz-hJmyF14EllUeXni90vySJAx7XHz0z_GEQYACWjwkmaMNnnKwkDp9lB1X00uN73OEpEvuKC1Xk5CYf-tbH7Ek9EqExRec5539W4HbB4cMLgU',
    filterTag: 'bottle',
    inStock: true,
    seoTitle: '16oz Eyewash Bottles | Code 3 First Aid',
    seoDescription: 'Portable 16oz eyewash bottles for industrial eye safety programs. Request a quote.',
  },
  '4oz-eyewash': {
    slug: '4oz-eyewash',
    categorySlug: 'eye-care',
    name: '4oz Eyewash',
    sku: 'EW-4OZ',
    description: 'Compact emergency rinsing solution ideal for vehicle kits and mobile first responder bags.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe7NkAHHDDZttLwnB5lpAZ3fQ-iNl8OE-gCJC9EoEF3-3XAqpsztyEqRr7RkFLVyCuKTcSl6izaeURlmWVfXBPJvmzvfsj_D11pY-aUHuZaklbQzmsQ0763hu-JbwGBQDzJ0aGxw1h-pOB2paoYVeBZ_9DGcpVKVOfU7VXbwwTjqynHymnSs8OrULwzWa8qiiv9C4yxMWEcwtJnsFJnUzUmVs0xYO2-baIwEx5AScRbtFULdNPoxM',
    filterTag: 'bottle',
    inStock: true,
    seoTitle: '4oz Eyewash | Code 3 First Aid',
    seoDescription: 'Compact 4oz eyewash for vehicle and mobile kits. Request a quote.',
  },
  'half-oz-eyewash-4ct': {
    slug: 'half-oz-eyewash-4ct',
    categorySlug: 'eye-care',
    name: '.5oz Eyewash 4ct',
    sku: 'EW-05-4',
    description: 'Single-use sterile saline ampoules for immediate debris removal and localized irrigation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPMYq551qQxWu1I8VZ6m0kD9nJt3VD4sttg167J9dAM4MIzCSGBohD6D7KUDYpSQEfKbMn872JT2zn-zmcuNQkmRad-fdLa9FJ8TSW4457ciWSeVizMa0lvssySbSnzK3I46aj_u7wNdLTpFUfvKbcqS-z8xSIh0elibOYxVI2lCLQZvDoEIH2AI8yIfDFXjm_0juadmdBRJylS8XARs13SYNfy3on8AjjO6lMz9yK9x50lWfWaTQ',
    filterTag: 'bottle',
    inStock: true,
    seoTitle: '.5oz Eyewash 4ct | Code 3 First Aid',
    seoDescription: 'Sterile saline ampoules for localized eye irrigation. Request a quote.',
  },
  'eye-pads-lubricants': {
    slug: 'eye-pads-lubricants',
    categorySlug: 'eye-care',
    name: 'Eye Pads & Lubricants',
    sku: 'EW-PAD-LUB',
    description: 'Post-irrigation care products including sterile oval eye pads and soothing lubricating drops.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMCyScCqBuin55Thu3FpbPyfge3Bbx7TCVT9rRnW9xCstDfR0Tc380MrABoalG6k_Ps0fwPTzPOtBiIzbL4S7OwqTssi0LnIyOm0w18FU1C9nC3Xk7q7m5zum-BHmmbs229Uh_4bcBIRTV0RqPUW1bO15yPxF9nMLlfG0f8ldwKGL4uwzmZy9Bd_hEygUkeaJyGq2Wqa2cjU7t9kcnvIL8zQsKH8wIPxe5IFn6NzClJZZztjjinGU',
    filterTag: 'ocular',
    inStock: true,
    seoTitle: 'Eye Pads & Lubricants | Code 3 First Aid',
    seoDescription: 'Sterile eye pads and lubricating drops for post-irrigation care. Request a quote.',
  },
  'slim-eyewash-station': {
    slug: 'slim-eyewash-station',
    categorySlug: 'eye-care',
    name: 'Slim Eyewash Station (Double)',
    sku: 'EW-SLIM-2',
    description: 'Space-saving dual-station unit for corridors, labs, and battery manufacturing lines.',
    image: '/images/supplies/home-services-mobile-eyewash-station.webp',
    badge: 'In Stock',
    filterTag: 'station',
    inStock: true,
    seoTitle: 'Slim Eyewash Station | Code 3 First Aid',
    seoDescription: 'Compact double eyewash station for tight industrial layouts. Request a quote.',
  },
  'cpr-d-padz': {
    slug: 'cpr-d-padz',
    categorySlug: 'first-aid-kits',
    name: 'CPR-D Padz (5-yr shelf life)',
    sku: 'CPRDPAD',
    tagline: 'Standardized one-piece defibrillation electrode with Real CPR Help® technology.',
    description: 'Replacement electrodes for Zoll AED Plus. One-piece design with Real CPR Help technology.',
    image: '/images/supplies/cpr-d-padz.png',
    badge: 'Premium Supply',
    filterTag: 'cabinet',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'cpr-padz',
    highlights: [
      { title: 'Real CPR Help®', text: 'Provides real-time feedback on compression depth and rate during resuscitation.' },
      { title: '5-Year Shelf Life', text: 'Industry-leading longevity for long-term fleet storage programs.' },
      { title: 'One-Piece Design', text: 'Ensures fast and accurate placement with pre-connected wiring.' },
    ],
    marketingSection: {
      title: 'Engineered for the Critical Moment',
      description: 'When seconds matter, CPR-D Padz deliver the feedback rescuers need to perform effective compressions.',
      items: [
        { title: 'Rapid Deployment', text: 'Pre-connected one-piece pad opens flat for fast placement on the chest.' },
        { title: 'Active Feedback', text: 'Real CPR Help audio and visual cues guide compression depth and rate.' },
        { title: '5-Year Readiness', text: 'Sealed packaging maintains electrode integrity through extended storage.' },
      ],
    },
    compatibility: {
      models: ['Zoll AED Plus', 'Zoll AED Pro', 'Zoll AED 3'],
      notes: [
        'Requires integrated green connector for Zoll AED Plus devices.',
        'Includes barrier mask, scissors, gloves, and prep wipes.',
        'Not compatible with Philips or Physio-Control electrode ports.',
      ],
    },
    specs: [
      { label: 'Connector Type', value: 'Integrated Green Connector' },
      { label: 'Cable Length', value: '48 in' },
      { label: 'Sensor Type', value: 'Accelerometer' },
      { label: 'Shelf Life', value: '5 years' },
      { label: 'Gel Type', value: 'Hydrogel' },
      { label: 'Manufactured In', value: 'USA' },
    ],
    seoTitle: 'CPR-D Padz | Code 3 First Aid',
    seoDescription: 'Zoll CPR-D Padz with Real CPR Help. Request a quote for AED consumables.',
  },
  'steel-gas-cylinder-cage': {
    slug: 'steel-gas-cylinder-cage',
    categorySlug: 'industrial-ppe',
    name: 'Heavy Duty Steel Gas Cylinder Cage',
    sku: 'C3-GAS-CAGE',
    description:
      'Engineered for extreme industrial safety. This heavy-duty steel cage stores up to six 33 lbs gas cylinders with a manual close door and white powder-coat finish for superior corrosion resistance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl8a7cw53Fmx6Lv1da0aivP2TNVcHkVblxkCQlYSUTimO_EpfBZkExX-1Mc6wUalEgyTF4COygt-_-fhOH_dv06kFLGezJmeWUgcIYjjp1VBYuco-x9SUGroNO9iIpl65GIBr0qOwTujOZNb83F-yk9UGtC66g5_7ZybXl55WOu4_OTQQJ8Q2B765XqATuEC9KlqiewsQVr2o1Hbri8MrWfXTMtKNl2Xjrdj5Qc1SLus8-GgsKB-A',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDl8a7cw53Fmx6Lv1da0aivP2TNVcHkVblxkCQlYSUTimO_EpfBZkExX-1Mc6wUalEgyTF4COygt-_-fhOH_dv06kFLGezJmeWUgcIYjjp1VBYuco-x9SUGroNO9iIpl65GIBr0qOwTujOZNb83F-yk9UGtC66g5_7ZybXl55WOu4_OTQQJ8Q2B765XqATuEC9KlqiewsQVr2o1Hbri8MrWfXTMtKNl2Xjrdj5Qc1SLus8-GgsKB-A',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZF2_A6R0P6eeNwhDprPQK1NnICTfaNZCD_mOiWPg1oishsKoVsJa4d4sKfh1Z_EOtPR9dDBvaeJkLHx95v1zBYlmSCvlv3f8kXX0yGno8UwBtGE_8KFMV2pAjGnjdTMsnjJI7uVkeZr7DyMbNPXUuAXU-q-vxe2Ph2CWOMw6nuwwkigsW7CJxM4hJMF7FAvYD3twplCIPAZfj1s_00tlXSKeicWQJ-acgT02rJerk6hmaanRg3lc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDlNWh8cq_C8LDY8ryJ9oWL7FAMR6amx8IIXkQWjYcjEs6r97iASaYnv-CfkEDiICipnLPY_cjOOpKuPWz9r7Bsuw8KbgCLoMBhUX68U9VsCmx3Rwptt3GJjAwO69dx8aCdTkqcMFcfGOH0b8tk90P1MRdLukiDKC11s9GkjijhLMF-_OZDBvA5aJppTGIjr_ibKNGbkkC2pOrIO1J1r7HU4YMV_cfoTefj4yoXtTMcLHoZo9GDV3w',
    ],
    badge: 'Industrial Grade',
    filterTag: 'gas',
    ppeSection: 'storage',
    ppeCardStyle: 'glass',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'gas-cage',
    productEyebrow: 'Industrial Safety Solutions',
    quoteDescription:
      'Engineered for high-risk industrial environments. Reinforced steel construction with manual-close safety locks and open mesh ventilation for LP-gas cylinder storage.',
    quickSpecs: [
      { label: 'Capacity', value: '6 Cylinders (375 Lbs Per Unit)' },
      { label: 'Dimensions', value: '36" x 36" x 60"' },
    ],
    primaryCtaLabel: 'Add to Quote',
    trustBadges: [
      { icon: 'shield-check', label: 'OSHA Compliant' },
      { icon: 'package', label: 'Freight Shipping' },
    ],
    reliabilityFeatures: [
      { title: 'Heavy-Duty Steel', text: '9-gauge galvanized steel mesh with welded angle-iron frame for maximum structural integrity.', icon: 'shield-check' },
      { title: 'Manual Close Mechanism', text: 'Slide-bolt door with padlock hasp for authorized access and secure cylinder containment.', icon: 'shield' },
      { title: 'Airflow', text: 'Open wire mesh design supports ventilation requirements for compressed gas storage.', icon: 'warehouse' },
      { title: 'Compliance', text: 'Adheres to OSHA 1910.110 and NFPA 58 regulations for LP-gas cylinder storage.', icon: 'badge-check' },
      { title: 'Safety Tags', text: 'Pre-drilled holes for grounding connections and hazard signage placement.', icon: 'siren' },
    ],
    logisticsSection: {
      items: [
        { title: 'Flat-Rate Delivery', text: 'Shipped disassembled to reduce freight costs and simplify site receiving.', icon: 'package' },
        { title: 'Lag-Down Ready', text: 'Pre-punched floor mounting holes for secure anchor installation.', icon: 'wrench' },
        { title: 'Lead Times', text: 'Standard obsidian finish ships in 3–5 business days.', icon: 'calendar-clock' },
      ],
      customCta: {
        title: 'Need a Custom Configuration?',
        text: 'Tailor-made solutions for non-standard cylinder sizes, finishes, and multi-unit deployments.',
        buttonLabel: 'Request Custom Quote',
      },
    },
    fullSpecsTable: [
      { label: 'Product SKU', value: 'HD-GC-6-36' },
      { label: 'Material', value: '9-Gauge Galvanized Steel' },
      { label: 'Frame Structure', value: '1.5" x 1.5" x 1/8" Angle Iron' },
      { label: 'Cylinder Type', value: 'LP-Gas (Vertical/Horizontal)' },
      { label: 'Weight', value: '265 lbs (Empty)' },
      { label: 'Floor Plate', value: 'Solid 14-Gauge Steel Sheet' },
    ],
    commercialQuoteCta: {
      title: 'Need a Custom Fleet Quote?',
      text: 'Outfit multiple sites with standardized cylinder containment. Delivery coordination available.',
      buttonLabel: 'Inquire Now',
    },
    seoTitle: 'Steel Gas Cylinder Cages | Code 3 First Aid',
    seoDescription: 'Industrial steel cylinder cage for secure storage. Request a bulk equipment quote.',
  },
  'cowhide-leather-gloves': {
    slug: 'cowhide-leather-gloves',
    categorySlug: 'industrial-ppe',
    name: 'Cowhide Leather Gloves',
    sku: 'IB1240P-L / IB2240P-M',
    description:
      'Premium grain cowhide provides excellent abrasion resistance and durability for heavy construction and material handling.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYW74Dd2CTYeYYZBuHxH4sg7wCx7D2oT_N3v-AZdZJvqtFoPBICwpt6A6pV1u3si7SpErCnCgRzhHnZgMgwefrUkCEkidUyZIeDlpyiKNR0TxFolmoXXBSoSs4WE5W0vfkBk3DDG6glUnGo-sx-5jVyAPbLJz1ph5dKhYrhqj5-GKbjhHeQMnXiQwb8I5oseUt6MmCDWLA-iZaGLPLJszltlG3MrIszs2Bf8ytdySVPmi1qIhQrjM',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYW74Dd2CTYeYYZBuHxH4sg7wCx7D2oT_N3v-AZdZJvqtFoPBICwpt6A6pV1u3si7SpErCnCgRzhHnZgMgwefrUkCEkidUyZIeDlpyiKNR0TxFolmoXXBSoSs4WE5W0vfkBk3DDG6glUnGo-sx-5jVyAPbLJz1ph5dKhYrhqj5-GKbjhHeQMnXiQwb8I5oseUt6MmCDWLA-iZaGLPLJszltlG3MrIszs2Bf8ytdySVPmi1qIhQrjM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtGJR3yks_vdQSiuo1xcazs2Jpv9RMr1AD7idBgD4OkTruX6eBlhI5mJGqibPjcFh3qEPTmcFKRbhLzW3RA_cg2F1NLvWkxpN_qQKkk95Gvq875J6kp1rJAuXgeszKjObH2pNWz3WDqxj1WAHUNrQOEynX96fjSTUYr6ivuJ3k2vfMnoG6l6xuu8Onol0ijgUkVkLz9dL7uPSgzZN2j_WcEaT78Ctqbj8-VMFlDk0qTUbztKKkmDo',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDnPafqfq_rS2fFA1jPJ7qfgk2cEhkG9lGuDPRnB_b0irUy3BqxlDz1mLmtPviyj_LpEWr2IFgwEak_QI4yal9-Q3WCz19h_0ffDF0cnwk7mfgyPBBDQpxy3c60DsekgvmOeJ_ta9i0fhd7LT7Biksi7iAPockctGOLK_nLKq35V1Nz-9uyUR87aFIVp1YcqN-d4HvrfrmURwHfIpJFaI5zQXPFD4U01gu4hbqDZ7_LJ0LFfE2U0MY',
    ],
    badge: 'ANSI/ISEA 105',
    filterTag: 'hand',
    ppeSection: 'hand',
    ppeCardStyle: 'glass',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'leather-gloves',
    availableSizes: ['M', 'L', 'XL'],
    defaultSize: 'L',
    primaryCtaLabel: 'Add to Quote',
    secondaryCtaLabel: 'Request Quote',
    specs: [
      { label: 'Material', value: 'Premium Grain Cowhide' },
      { label: 'Protection', value: 'Abrasion Resistant' },
      { label: 'Compliance', value: 'OSHA / ANSI Compliant' },
    ],
    safetyComplianceCards: [
      {
        title: 'ANSI Abrasion Level',
        badge: 'Level 4',
        text: 'High resistance to wear and tear during heavy material handling.',
        icon: 'shield',
      },
      {
        title: 'Puncture Resistance',
        badge: 'Level 3',
        text: 'Protects against sharp edges, wire, and jagged materials.',
        icon: 'circle-check',
      },
      {
        title: 'Heat Resistance',
        badge: 'Contact Temp',
        text: 'Safe for intermittent contact with hot materials up to 250°F.',
        icon: 'triangle-alert',
      },
    ],
    useCaseCards: [
      {
        title: 'Heavy Construction',
        text: 'Ideal for masonry, concrete work, and handling rough framing materials where abrasion resistance is paramount.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAuwVcuaQA5mEbuaVH-WjNdhl__Qrx3-PO6D5fLe9R2TLV5CWMnv8YpjsCaxz_BMMFTBWSr9sOXYJBB00xnnhKpLgjm-avpK30it6_ZyNjQTfTIsNvA_4PGKBmD_PPFz01TGdb7Bo6ExsDeTmjKy9vF0loaAtI7aqzjNk7dKqkqBOAhFqVy4RDvrAtu1eAHbSUHtb40F_2EB11Zcikq8fSEt0LO6llqRvmFCsBkl6Znis2bRxCDvt8',
      },
      {
        title: 'Metal Fabrication',
        text: 'Provides essential protection against sharp edges, metal burrs, and minor slag during grinding and cutting tasks.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDzDxDczFK5Omp7mwMSAXrE2nlo7KZe64_1aK4l0tYA2429-I5wjduZ3g9CD96pqRWSHHjib83RuAhYSum6c0ZmD3ne7Ijr7gmEGOUnxoJc98y1dGZDV-Ddq_r1Aoudc28Pn6eCCPXePwShOHbhYpkKzlkwHz0sMwwTJcNxTN1ikO7YRIhGxd4BZvq7oYlrBK4LHWSvyLCFsVWlaguclQDw53LeD5IQbUOnsBpo2ocii7z-otcMp5c',
      },
      {
        title: 'Industrial Rigging',
        text: 'Superior grip and durability for handling steel cables, chains, and heavy loads in harsh industrial environments.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCdyPQtkJv-aw4g4WlbVP8eTb7EqwQAWGu9na8cpLMmTwnkZROqTmvTR8e5ifWNK-zUuPnI25jjr-Nn84xVmuUqOQxI99L2Jrs1Ro0346TJs2ECU393HkdSZZ6YdP7astlvRjEHzNGVG_dld9mjGBWd1WymxVqoqxXh5YnlFJ2O0c5yIYSujGDk-8w__5Mn63XO8G4LxYMn8nYuiqganan9H_EJeL5kkbbSk1GP2HM8MI6gzKJlYpc',
      },
    ],
    bulkProcurement: {
      title: 'Bulk Procurement',
      text: 'Volume options for enterprise and professional teams.',
      buttonLabel: 'Request Enterprise Quote',
      tiers: [
        { qty: '1-10 Pairs', savings: 'Standard' },
        { qty: '11-50 Pairs', savings: '10% Off' },
        { qty: '50+ Pairs', savings: '20% Off' },
      ],
    },
    seoTitle: 'Cowhide Leather Gloves | Code 3 First Aid',
    seoDescription: 'Heavy-duty cowhide leather gloves for industrial hand protection. Request a quote.',
  },
  'honey-grip-gloves': {
    slug: 'honey-grip-gloves',
    categorySlug: 'industrial-ppe',
    name: 'Honey Grip Gloves',
    sku: 'HONEYG',
    itemNumber: '9001',
    description:
      'Premium high-visibility yellow gloves featuring a honeycomb crinkle latex coating for superior dry and wet grip. Built for durability and demanding material handling.',
    image: '/images/supplies/honey-grip-gloves.png',
    gallery: [
      '/images/supplies/honey-grip-gloves.png',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9-C9_orulBxvC9_PkgMXl9uBtReHfgU2AwAshf4s774eI095P9nfVjjJ8GofS2a1a9ZaQNPiEkiAJslSpghiQvxE-e3gZdFjwHIbZNNNnBovrrYntkC_25YfKrTIGcNHNBk5fAnYF4y93h-C8Km92VFcSowd_yEYk_oX9pY0qOTq202MuXNu2OJnVbMtqqRe6tzmiMK1BnXjrTVbhUc4-cO1XP_JtYjMOLnPoiVgCC9ezQH_SPtY',
    ],
    badge: 'ANSI/ISEA 105',
    filterTag: 'hand',
    ppeSection: 'hand',
    ppeCardStyle: 'glass',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'leather-gloves',
    availableSizes: ['M', 'L', 'XL'],
    defaultSize: 'L',
    primaryCtaLabel: 'Add to Quote',
    secondaryCtaLabel: 'Request Quote',
    specs: [
      { label: 'Material', value: 'Latex / Cotton' },
      { label: 'Coating', value: 'Honeycomb Crinkle' },
      { label: 'Compliance', value: 'OSHA / ANSI Compliant' },
    ],
    safetyRatings: [
      { label: 'Abrasion Resistance', value: 'Level 4', accent: true },
      { label: 'Puncture Resistance', value: 'Level 3', accent: true },
      { label: 'Cut Resistance', value: 'Level A2' },
    ],
    safetyRatingsNote:
      'Ratings are based on ANSI/ISEA 105-2016 standards. For detailed test reports, please contact our support team.',
    safetyRatingsNoteIcon: 'info',
    bulkProcurement: {
      title: 'Bulk Procurement',
      text: 'Volume pricing for enterprise and professional teams.',
      buttonLabel: 'Request Enterprise Quote',
      tiers: [
        { qty: '1-10 Pairs', savings: 'Standard' },
        { qty: '11-50 Pairs', savings: '10% Off' },
        { qty: '51+ Pairs', savings: '20% Off', featured: true },
      ],
    },
    useCaseSection: {
      title: 'Engineered for the Extremes',
      text: 'Professional-grade hand protection trusted across demanding industrial applications.',
    },
    useCaseCards: [
      {
        title: 'HVAC',
        text: 'Superior grip for handling smooth, sheet metal and ducting in tight spaces.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB01Dj8k3rQGnIRIpvOPjeTC1nQ6TrgIBeMugXlNZa6IAT20PEkqSLhddXZiIiAln82R-4pKywWbBFAuashfg4nP-VkOuNLJdCyqgTWhiLnupzEE2tfb1PlMYWLWADhnhxgtvKSgLaR_HuweSDy43OuscKn35TyD_Y_5lqwgQyGkK8pZKAmDzdPffLkYvniFE_GL1MH63DHjoVDMnBOYfcMbFANk7ejLvcGay-Yu4wmbm5NxPWgIJM',
      },
      {
        title: 'Glass Handling',
        text: 'Confident, non-slip secure grip critical for carrying fragile and sharp materials.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBQxHgX1WgkSYjwRM3rCPwo-ymIGdj-z9Xh1s-LNTVwH9C8LFIGnofA4Kl4ciPJn8zLrkf3dZdM4bUpUZ6rt7pvS-UyvGBCleOsSoOEvQSgpwUUmeFtjWYaCXTkcM2TYY_f9r0OF7l0TW-OCGvXnjjd8m5wjDmtVh6mHvUeIbTEWH8NEWbtSDztBkkcA8HIg1sOo_QtecFhl8Mrtaz-7x46q1uhqO3h9tMFnVZnyJiKR2eKZ9j0Rs8',
      },
      {
        title: 'General Assembly',
        text: 'Dexterity and protection balanced for continuous workflow in manufacturing.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBp2lhXtwUrgiqmQvBXHV1Tulo_PFUwU2_7FKSfzBJEHsK4ShelJZ3NMsRNSN6CQuQ-7zOl61lUqSQndRNq2o-OXmDTv8GiIJHLa4uFY51DN31pZLRm6PQz_aefc5vp72TMVmuIcOe6hdui82jj_uaXI-J9_3nqWXGjzBJCqHLNjeFCXPis049HvuLazw6gksLOH_odIN_SA5C5ltbgMWOOpr2XGVjNw3bENnjfW636TzX6aBNmIes',
      },
    ],
    seoTitle: 'Honey Grip Gloves | Code 3 First Aid',
    seoDescription: 'High-visibility honey grip gloves with latex palm coating. Request a quote.',
  },
  'nitrile-gloves-lg-xl': {
    slug: 'nitrile-gloves-lg-xl',
    categorySlug: 'industrial-ppe',
    name: 'Nitrile Gloves (LG/XL)',
    sku: 'C3-HND-N44',
    description:
      'Premium, powder-free nitrile gloves designed for maximum tactile sensitivity and critical barrier protection in demanding environments.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbWGS_sT08HdFsLrllj07A0hx-gA_lLX5NUg0h0zE8kWhGlHUsjfGO5wtvbYxzTk9aCswmT6_2t4fMNDa0Xez2uf8wl-0Q4EJDbQJpKbgbEO-qDeLy6NEpDyRoMcb5NPmgyqzQ9oQi6sTgYd70ZDgYzB3wbEbUyvJdEsr2mt-p7wGL5WUPmQvMym9umEyMiPDmsJRr79jVqGofvv5UnHULBPK61nE2wQly3OJ39XquNkOL-yyfgZs',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbWGS_sT08HdFsLrllj07A0hx-gA_lLX5NUg0h0zE8kWhGlHUsjfGO5wtvbYxzTk9aCswmT6_2t4fMNDa0Xez2uf8wl-0Q4EJDbQJpKbgbEO-qDeLy6NEpDyRoMcb5NPmgyqzQ9oQi6sTgYd70ZDgYzB3wbEbUyvJdEsr2mt-p7wGL5WUPmQvMym9umEyMiPDmsJRr79jVqGofvv5UnHULBPK61nE2wQly3OJ39XquNkOL-yyfgZs',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCq6lkKizlPvEaaIWu9ieznamLpmoNNfB_3qzEvBnWL4pJrnbmxZpy51a33EeaR7BHskZBYPn6fpHlug4ozkGfS-rkmYED2r0MTSVZgHBB99jsEvFZFwB8VKXQ4CrzIYlla5mUTAEkmuembO2XEWVe2UQHdLA16dEZlTecFaSiENyKt65TShLmC58GxgWdas6cC2xJItzGt7bNc29G3XlCqoL5YEN-6TDUSa1eEdlqQmKDA9AyKaR0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCS5hErqY5UyTnZxuV3PDwR4MVOoKyxwFwW9FBGoflZH01O02gJn_2_QDH8EG9WIMH1xEe9mPy99rrRxtFYPLEgSIZxVxL4rnPiAQgYR8NzQ-5LKE8rBTBU28bq8t_YIeCZbzG-ylP7RLN3ubsWc5EnEYIQxTPouuIl_4cyxKUIyfs5KKIlKguGhchKBJ6rxFlCnWENEVGpVQbzC5yeMhQTObO_Exme8Veefm42QGTpGy4DJHcy48w',
    ],
    filterTag: 'hand',
    ppeSection: 'hand',
    ppeCardStyle: 'glass',
    sizeTags: ['LG', 'XL'],
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'nitrile-gloves',
    badge: 'Medical Grade',
    cardDescription:
      'Industrial strength chemical resistant nitrile. Powder-free and latex-free for sensitive skin. Available in bulk cases.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbWGS_sT08HdFsLrllj07A0hx-gA_lLX5NUg0h0zE8kWhGlHUsjfGO5wtvbYxzTk9aCswmT6_2t4fMNDa0Xez2uf8wl-0Q4EJDbQJpKbgbEO-qDeLy6NEpDyRoMcb5NPmgyqzQ9oQi6sTgYd70ZDgYzB3wbEbUyvJdEsr2mt-p7wGL5WUPmQvMym9umEyMiPDmsJRr79jVqGofvv5UnHULBPK61nE2wQly3OJ39XquNkOL-yyfgZs',
    packUnit: '/ box (100 ct)',
    availableSizes: ['L', 'XL'],
    defaultSize: 'L',
    availableColors: [
      { id: 'blue', label: 'Blue', swatch: '#3b82f6' },
      { id: 'black', label: 'Black', swatch: '#141d23' },
    ],
    defaultColor: 'blue',
    primaryCtaLabel: 'Add to Quote',
    specs: [
      { label: 'Material', value: '100% Nitrile (Latex-Free)' },
      { label: 'Thickness', value: '5 mil (Industrial Grade)' },
      { label: 'Finish', value: 'Micro-Textured Fingertips' },
      { label: 'Grade', value: 'Medical / Examination', accent: true },
    ],
    trustBadges: [
      { icon: 'badge-check', label: 'Medical grade, 5mil thickness' },
      { icon: 'ban', label: 'Powder-free & Latex-free' },
      { icon: 'hand', label: 'Superior tactile sensitivity' },
    ],
    bulkProcurement: {
      title: 'Bulk Procurement',
      text: 'Volume pricing for enterprise and professional teams.',
      buttonLabel: 'Request Enterprise Quote',
      tiers: [
        { qty: '1-10 Boxes', savings: 'Available' },
        { qty: '11-50 Boxes', savings: 'Tier Inquiry Required', accent: true },
        { qty: '51+ Boxes', savings: 'Enterprise Quote Needed', accent: true },
      ],
    },
    safetyComplianceCards: [
      {
        title: 'FDA 510(k) Cleared',
        badge: '',
        text: 'Certified for medical use and patient examination.',
        icon: 'badge-check',
      },
      {
        title: 'Chemo Rated',
        badge: '',
        text: 'Tested for use with chemotherapy drugs (ASTM D6978).',
        icon: 'briefcase-medical',
      },
      {
        title: 'Barrier Protection',
        badge: '',
        text: 'Superior resistance to punctures and hazardous chemicals.',
        icon: 'shield',
      },
    ],
    seoTitle: 'Nitrile Gloves LG/XL | Code 3 First Aid',
    seoDescription: 'Industrial nitrile gloves in large and extra-large sizes. Request a case quote.',
  },
  'nemesis-smoked-mirror': {
    slug: 'nemesis-smoked-mirror',
    categorySlug: 'industrial-ppe',
    name: 'Nemesis Smoked Mirror',
    sku: 'C3-EYE-SMK',
    description:
      'Advanced UV protection with sleek, reflective smoked lenses for outdoor industrial use.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv3N7OiLpcqP2uO1DAbkORSe28qWuF85DlLYQoticZqkiXQMGNZJrFKcS0X-H-SudnXN7W59Sy-V7OeTLHYzmAtZteblDuAuREhjOzpTcb_yNWAZiJ7bRmIxD5HFzTCiyIhz1feE1b9w9TbZXhCXjMtjYZl0tnHDe3HZcVcDE9zHbK46s0YFbytmtREC0kSq-rsZyg3xE3IyQgFuiYPREaMLODTnIjoprPgxZkh61hMTxnfK7ifSs',
    filterTag: 'eye',
    ppeSection: 'eye',
    ppeCardStyle: 'compact',
    inStock: true,
    seoTitle: 'Nemesis Smoked Mirror Safety Glasses | Code 3 First Aid',
    seoDescription: 'Smoked mirror lens safety glasses for outdoor industrial eye protection. Request a quote.',
  },
  'nemesis-clear-lens': {
    slug: 'nemesis-clear-lens',
    categorySlug: 'industrial-ppe',
    name: 'Nemesis Clear Lens',
    sku: 'C3-EYE-CLR',
    description:
      'Crystal clear optics with anti-fog coating. Ideal for indoor precision work and maintenance environments.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjLpFMAamhck1Vcsv-GuTkqvm4Tvx0a2yN3-pXONrCrqtk8ZtZIDXnc6XRgC0SsqmwRYY1qvqf0M3rw6aIgPMgPa6qrcpH0yNyR7t_NLYGxKEgoKM6eiNQ9Dd5vGXH1k9F-KnymBSQhp7l0v9oJUTom23mUSmzR1EPYfO0bix4fz6ycbJiiGsBF2UFOud8b4nS-OBHmAboPosKg8LuIWoAsUfqp5HcyuMDqEkdUTaZZbKKbN5qiEI',
    filterTag: 'eye',
    ppeSection: 'eye',
    ppeCardStyle: 'compact',
    inStock: true,
    seoTitle: 'Nemesis Clear Lens Safety Glasses | Code 3 First Aid',
    seoDescription: 'Clear anti-fog safety glasses for indoor industrial work. Request a quote.',
  },
  'lens-cleaning-towelettes': {
    slug: 'lens-cleaning-towelettes',
    categorySlug: 'industrial-ppe',
    name: 'Lens Cleaning Towelettes',
    sku: 'C3-EYE-WIP',
    description:
      'Pre-moistened, individually wrapped anti-static and anti-fog wipes. Safe for all lens types, including polycarbonate. 100-count per dispenser box.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM5YAm5eOebdG1xoHF9zrXzdru4zeFpAa8fuTdGC9yEjpc8taws8HlxcpkE3XfJHXKLEg5XNR-61QmLOzbQjU5FTS55_ZkR1Ekb6Bks1qJf2BqrEYmwWiM8ZTK4vSOrbP5PGpDOOVa5gC-jb3jMy8HuPTH97fs1E6_fkyrVzFwoO4ssOqJnSV4OabWqpsinQhOMi0XprgnysMhh9BNnENi7KSXJWd5TobB7TjCQF9E3upMdlgQ0IM',
    filterTag: 'eye',
    ppeSection: 'eye',
    ppeCardStyle: 'featured',
    productEyebrow: 'Maintenance Essential',
    ctaLabel: 'Add to Bulk Quote',
    inStock: true,
    seoTitle: 'Lens Cleaning Towelettes | Code 3 First Aid',
    seoDescription: 'Anti-static lens cleaning towelettes for safety eyewear maintenance. Request a quote.',
  },
  'blue-detectable-bandage': {
    slug: 'blue-detectable-bandage',
    categorySlug: 'bandages-dressings',
    name: '1x3 Blue Detectable Bandages',
    sku: 'BD-1X3',
    description: 'Metal-detectable bandages for food processing environments. High visibility blue for safety compliance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC40IcQlGCnELySNymFiD95poEmgDnvUNlLLDilWvA-lIVvjc9_GkjxiA_j6QremqlA7cxowbCQbbO3ok90b-iT7GRTS4LUI56m1j8Jc-P13yFVejCACZtVckWKOlHkL96ky9CBzKOPdkxXXT-9GboHifwaS0eb3glF-trbc-WMjeDpxwctdfxt89mJlnAUvNNMjhunxNS0jrlSXn3EVpQedgqPSyfGCVwECsRZ4K-wLHKMbUH8GQs',
    badge: 'Metal Detectable',
    filterTag: 'detectable',
    inStock: true,
    seoTitle: 'Blue Detectable Bandage | Code 3 First Aid',
    seoDescription: 'Metal-detectable 1×3 bandages for industrial first aid programs. Request a quote.',
  },
  'knuckle-bandage-lg': {
    slug: 'knuckle-bandage-lg',
    categorySlug: 'bandages-dressings',
    name: 'Knuckle LG',
    sku: 'BD-KNU-LG',
    description: 'Heavy-duty knuckle bandage shaped for fingers and high-flex work zones.',
    image: '/images/supplies/safety-supplies-first-aid-kit.webp',
    badge: 'Heavy Duty',
    filterTag: 'heavy-duty',
    inStock: true,
    seoTitle: 'Knuckle Bandage LG | Code 3 First Aid',
    seoDescription: 'Large knuckle bandages for industrial hand injuries. Request a quote.',
  },
};

/** Category backing the catalog hub at /pages/catalog.html. */
export const HUB_CATEGORY_SLUG = 'bulk-medical-supplies';

/** Products per page on the hub grid when a category sets no `hubPageSize`. */
export const HUB_PAGE_SIZE_FALLBACK = 7;

/** @param {CatalogCategory} [category] @returns {number} */
export function getHubPageSize(category) {
  return category?.hubPageSize ?? HUB_PAGE_SIZE_FALLBACK;
}

/** Display order for catalog sidebar navigation (hub first). */
export const CATALOG_NAV_ORDER = [
  'bulk-medical-supplies',
  'first-aid-kits',
  'fire-protection',
  'eye-care',
  'industrial-ppe',
  'bandages-dressings',
];

/** @returns {CatalogCategory[]} */
export function getCatalogNavCategories() {
  return CATALOG_NAV_ORDER.map((slug) => CATALOG_CATEGORIES[slug]).filter(Boolean);
}

/** @returns {string[]} */
export function getCategorySlugs() {
  return Object.keys(CATALOG_CATEGORIES).filter((slug) => !CATALOG_CATEGORIES[slug].isHub);
}

/** @returns {string[]} */
export function getAllCategorySlugs() {
  return Object.keys(CATALOG_CATEGORIES);
}

/** @returns {string[]} */
export function getProductSlugs() {
  return Object.keys(CATALOG_PRODUCTS);
}

/** @param {string} slug @returns {CatalogCategory | undefined} */
export function getCategoryBySlug(slug) {
  return CATALOG_CATEGORIES[slug];
}

/** @param {string} slug @returns {CatalogProduct | undefined} */
export function getProductBySlug(slug) {
  return CATALOG_PRODUCTS[slug];
}

/** @param {string} categorySlug @returns {CatalogProduct[]} */
export function getProductsByCategory(categorySlug) {
  const category = CATALOG_CATEGORIES[categorySlug];
  const order = category?.categoryProductOrder ?? category?.hubProductOrder;
  if (order?.length) {
    return order.map((slug) => CATALOG_PRODUCTS[slug]).filter(Boolean);
  }
  if (categorySlug === 'bulk-medical-supplies') {
    return Object.values(CATALOG_PRODUCTS);
  }
  return Object.values(CATALOG_PRODUCTS).filter((product) => product.categorySlug === categorySlug);
}

/** @param {string} slug @returns {string} */
export function getCategoryPath(slug) {
  if (slug === 'bulk-medical-supplies') {
    return '/pages/catalog';
  }
  return `/pages/catalog/${slug}`;
}

/** @param {string} slug @returns {string} */
export function getProductPath(slug) {
  return `/pages/catalog/products/${slug}`;
}
