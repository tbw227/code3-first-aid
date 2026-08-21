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
 * @property {ReadonlyArray<{ label: string, value: string }>} [quickSpecs]
 * @property {ReadonlyArray<string>} [checklist]
 * @property {ReadonlyArray<{ icon: string, label: string }>} [trustBadges]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string }>} [manifest]
 * @property {ReadonlyArray<{ label: string, value: string }>} [installSpecs]
 * @property {string} [installNote]
 * @property {ReadonlyArray<{ title: string, text: string }>} [techData]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string, accent?: boolean, stat?: string, image?: string }>} [bentoSpecs]
 * @property {ReadonlyArray<{ category: string, items: string[] }>} [kitInventory]
 * @property {{ title: string, text: string, badges: string[] }} [standardsBand]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string }>} [coreFeatures]
 * @property {{ eyebrow: string, title: string, items: ReadonlyArray<{ title: string, text: string, icon: string }>, image: string }} [reliabilitySection]
 * @property {{ title: string, text: string, primaryLabel: string, secondaryLabel?: string }} [bulkFleetCta]
 * @property {{ title: string, text: string, buttonLabel: string }} [commercialQuoteCta]
 * @property {ReadonlyArray<{ label: string, value: string }>} [specManifest]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string }>} [pathogenSpecs]
 * @property {{ title: string, text: string, stats: string[] }} [vigilancePanel]
 * @property {string} [primaryCtaLabel]
 * @property {string} [secondaryCtaLabel]
 * @property {string} [stockNote]
 * @property {number} [reviewCount]
 * @property {number} [savePercent]
 * @property {string} [priceNote]
 * @property {string} [quoteDescription]
 * @property {boolean} [inStock]
 * @property {boolean} [hasDetailPage]
 * @property {'standard' | 'extinguisher' | 'extinguisher-compact' | 'first-aid-cabinet' | 'gas-cage' | 'eyewash-station' | 'pathogen-pack' | 'bleeding-control' | 'cpr-padz' | 'aed-plus' | 'aed-cabinet'} [detailLayout]
 * @property {string} [productSubtitle]
 * @property {string} [categoryLabel]
 * @property {{ label: string, text: string }} [criticalCallout]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string, footer?: string }>} [packFeatureCards]
 * @property {ReadonlyArray<string>} [fullManifest]
 * @property {{ stat: string, label: string, text?: string }} [statHighlight]
 * @property {ReadonlyArray<{ title: string, subtitle: string, selected?: boolean, addon?: string }>} [maintenancePlans]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string, footer?: string }>} [industrialSpecCards]
 * @property {{ eyebrow: string, revision?: string }} [techDataHeader]
 * @property {{ title: string, items: ReadonlyArray<{ title: string, text: string, icon: string }>, image?: string }} [whatsInBox]
 * @property {{ title: string, text: string, primaryLabel: string, secondaryLabel: string }} [inspectionCta]
 * @property {{ eyebrow: string, title: string, featured: { badge: string, title: string, text: string, linkLabel: string }, cards: ReadonlyArray<{ title: string, text: string, icon: string }> }} [ecosystemSection]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string }>} [precisionFeatures]
 * @property {ReadonlyArray<{ label: string, qty: string }>} [boxContents]
 * @property {ReadonlyArray<{ name: string, sku: string, price: number, image: string, slug?: string }>} [replacementParts]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string }>} [reliabilityFeatures]
 * @property {{ items: ReadonlyArray<{ title: string, text: string, icon: string }>, customCta: { title: string, text: string, buttonLabel: string } }} [logisticsSection]
 * @property {ReadonlyArray<{ label: string, value: string }>} [fullSpecsTable]
 * @property {{ title: string, text: string, image?: string, badge?: string, checks?: string[] }} [complianceSection]
 * @property {{ title: string, text: string, image: string, items: ReadonlyArray<{ title: string, text: string, icon: string }> }} [whatsInBoxDark]
 * @property {{ title: string, text: string, checks: string[] }} [complianceAssembly]
 * @property {{ title: string, text: string, primaryLabel: string, secondaryLabel: string }} [refillBanner]
 * @property {ReadonlyArray<{ label: string, value: string }>} [constructionSpecs]
 * @property {{ dimensions: string, dimensionsNote?: string, alarmPower: string, alarmNote?: string, audioOutput: string, audioNote?: string, certification: { quote: string, text: string, image?: string } }} [cabinetSpecs]
 * @property {boolean} [darkHero]
 * @property {ReadonlyArray<{ slug: string, name: string, price: number, image: string, category: string }>} [relatedProducts]
 * @property {{ eyebrow: string, title: string, text: string, primaryLabel: string, secondaryLabel: string, cards: ReadonlyArray<{ title: string, text: string, icon: string }> }} [trainingSection]
 * @property {{ rating: string, deployed: string, headline?: string }} [brandBanner]
 * @property {ReadonlyArray<{ title: string, text: string, icon: string }>} [heroFeatureCards]
 * @property {number} [price]
 * @property {number} [compareAtPrice]
 * @property {string} [rating]
 * @property {ReadonlyArray<{ title: string, text: string }>} [highlights]
 * @property {ReadonlyArray<{ label: string, value: string }>} [specs]
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
    price: 125.99,
    compareAtPrice: 149,
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
      'Specialized response kit for biohazard cleanup and protection. Engineered for high-risk environments requiring immediate, sterile containment of infectious materials.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ4-ZSY8V4LlZn8WfDjeCUe9BSM8yuHeUh_y6TB64x-k1IDQpDuwzzrd1a5MTHkQaS6GppKgBFrNeKwb60ExmNgypZZUnTsBKRNk4jYzlfnNlxst9h-F__U4BrXlK7PeDiyiSZOX1DIFFCBqN4gZ5c7b75LkE6SVrU_NeHsyQ3TeewI0G51Zqh21urFVItGRmWTrFMUZaXNAN2oLAoaE4eb9cgMdgZYAUzgk82mUhdFkb79FwoptI',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ4-ZSY8V4LlZn8WfDjeCUe9BSM8yuHeUh_y6TB64x-k1IDQpDuwzzrd1a5MTHkQaS6GppKgBFrNeKwb60ExmNgypZZUnTsBKRNk4jYzlfnNlxst9h-F__U4BrXlK7PeDiyiSZOX1DIFFCBqN4gZ5c7b75LkE6SVrU_NeHsyQ3TeewI0G51Zqh21urFVItGRmWTrFMUZaXNAN2oLAoaE4eb9cgMdgZYAUzgk82mUhdFkb79FwoptI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBeHkxrlC1T4El0HRBFHvizHaxl_VFY4tXTEph8UloWyh6mqXl_uS7vkA3ZciKw0Smcg_YqXQaCc4Reg42nPfOFPeqbr6CqYg_Q9-Cobu5IWM28gStJ-QIE6WAXqlsZlNB_cP3i0lXJ7xOdKUxYK_76W597M3oofwqwd8MhconrwSBFLwTxbdygJONY2fL1_wir6sSXYqF1-CbbM_DyRXadwWeWf3GJVkB-IZwptQ7gN-0u-kbm4Fk',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCFOXNhjLZ_Mscw3P8FQqBULyMXuZNxDjpM6u_Ej8pMTeYFk3Tj7Qz4A1sqezBx6xzwX9k3xpWzSH5gbrm5HkBlFSIBFfohIxM6fHbbkyMwVj7vCALttqbuzWQD35yj7R1OTeXsS1M4LbMJcliPj22uCYuw7tPQTLBdeR_KRYdLb3RiAYXDn0M14JdDsHSJ-xSxFBHWDiA28PMBW4MSLx5ZFngX73dczkX8GCAItd_xNKLDqVVt5Qg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDG1favIwOmDsU3XOjlVVfVukOMDebnD-jWQ_hCncrfvMTIVkArn-DEt2dl38T5-j9bkQ4xq3pVWR10SdV57p1iz9QV8hUZ8459Yeamb0y2Q4e1-zX37ezisBG286cWAeeMRgs3SyfYLgu7SPWLNccovtKdK2FyCvcc8kh5xXwiTtTO-yD8hviKaGkAwnSzIwaQNZPGX8LHhrMgLCGFwCsVgFv-ZRP_zTY4iTuJLjGiS-AEK8uxBjo',
    ],
    heroBadges: ['Critical Asset'],
    badge: 'Critical Asset',
    filterTag: 'treatment',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'pathogen-pack',
    darkHero: true,
    price: 61,
    compareAtPrice: 75,
    savePercent: 18,
    reviewCount: 46,
    complianceBadge: 'Biohazard & Medical Supply',
    primaryCtaLabel: 'Add to Quote',
    secondaryCtaLabel: 'Download SDS',
    trustBadges: [
      { icon: 'shield-check', label: 'OSHA Compliant' },
      { icon: 'badge-check', label: 'Made in USA' },
    ],
    specManifest: [
      { label: 'Fluid Control Solidifier (2oz)', value: '1 EA' },
      { label: 'Biohazard Bags with Ties', value: '2 EA' },
      { label: 'Disposable Protective Apron', value: '1 EA' },
      { label: 'Nitrile Medical Grade Gloves', value: '2 PRS' },
      { label: 'Antimicrobial Germicidal Wipes', value: '4 EA' },
      { label: 'Eye Shield with Ear Loop Mask', value: '1 EA' },
    ],
    pathogenSpecs: [
      {
        title: 'Regulatory Compliance',
        text: 'Meets OSHA 1910.1030 bloodborne pathogen standards for workplace exposure control and cleanup protocols.',
        icon: 'clipboard-check',
      },
      {
        title: 'Material Quality',
        text: 'Nitrile gloves and high-density polyethylene components selected for chemical resistance and sterile integrity.',
        icon: 'shield',
      },
      {
        title: 'Dimensions & Weight',
        text: 'Compact 10" x 7" x 3" profile at 2.4 lbs — ideal for wall cabinets, vehicles, and mobile response kits.',
        icon: 'scan',
      },
    ],
    whatsInBoxDark: {
      title: 'Complete Response Ensemble',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG1favIwOmDsU3XOjlVVfVukOMDebnD-jWQ_hCncrfvMTIVkArn-DEt2dl38T5-j9bkQ4xq3pVWR10SdV57p1iz9QV8hUZ8459Yeamb0y2Q4e1-zX37ezisBG286cWAeeMRgs3SyfYLgu7SPWLNccovtKdK2FyCvcc8kh5xXwiTtTO-yD8hviKaGkAwnSzIwaQNZPGX8LHhrMgLCGFwCsVgFv-ZRP_zTY4iTuJLjGiS-AEK8uxBjo',
      items: [
        { title: 'Nitrile Gloves', text: '3 pairs high visibility for safe handling.', icon: 'shield-check' },
        { title: 'Biohazard Bags', text: '2× marked polybags for secure disposal.', icon: 'package' },
        { title: 'Antiseptic Wipes', text: '10× saturated wipes for surface decontamination.', icon: 'scan' },
        { title: 'Micro-Shield', text: 'Integrated splash guard for facial protection.', icon: 'shield' },
      ],
    },
    complianceAssembly: {
      title: 'Zero-Failure Compliance',
      text: 'Assembled under emergency medical professional oversight with verified expiry tracking and sterile integrity guarantees.',
      checks: ['Verified Expiry Tracking', 'Sterile Integrity Guaranteed', 'PPE Requirements Met', 'Removal Labels Included'],
    },
    commercialQuoteCta: {
      title: 'Outfit Your Entire Facility',
      text: 'Volume pricing available for corporate safety programs and multi-site fleet management.',
      buttonLabel: 'Inquire About Bulk Orders',
    },
    seoTitle: 'Bloodborne Pathogen Treatment Pack | Code 3 First Aid',
    seoDescription: 'OSHA-compliant biohazard cleanup kit for workplace safety programs. Request bulk pricing.',
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
    price: 350.5,
    priceNote: 'USD / Per Unit',
    stockNote: 'In Stock: Ready for immediate dispatch to your facility.',
    reviewCount: 12,
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
    seoDescription: 'Industrial burn care pack for workplace first aid programs. Request bulk pricing.',
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
    seoDescription: 'Heavy-duty trauma kit for industrial job sites. Request bulk pricing and restock scheduling.',
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
    complianceBadge: 'STOP THE BLEED® Compliant',
    filterTag: 'treatment',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'bleeding-control',
    price: 153.9,
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
        price: 245,
        category: 'Cabinets',
        image: '/images/supplies/safety-supplies-trauma-kit.webp',
      },
      {
        slug: 'bleeding-control-pack',
        name: 'C.A.T. Gen 7 Tourniquet',
        price: 32.9,
        category: 'Medical',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXp4OlSIHdxCgHBp3HFFAquuEfqrjNrkMNc9s6LyeBbQL9feTt8GmfeMQMHOLpBa8D6s0iYgw2K0O0yU93UEIJ1yKwIIdUIKNGgxeNvIY3x0KaNtEXa7pMc2GUnSN1wnsFoo1xKfBjoTERt6fmMpe1gOEn87vzBzWY3u7CawuHYzcqhx_f_QiwSrzu3omHPJ_8Nf2N2RFzoeV7kRjXrzzdhMJ98NFfJqqOMAMfgkxX8S57IvdMwqY',
      },
    ],
    seoTitle: 'Bleeding Control Treatment Pack | Code 3 First Aid',
    seoDescription: 'ANSI-compliant bleeding control pack for workplace trauma response. Request volume pricing.',
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
    price: 100,
    priceNote: 'USD / Per Unit',
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
      text: 'We offer specialized bulk pricing for logistics firms and construction sites looking to standardize safety across all remote locations.',
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
    price: 150,
    compareAtPrice: 185,
    savePercent: 19,
    primaryCtaLabel: 'Request Quantity Quote',
    secondaryCtaLabel: 'Download Data Sheet (PDF)',
    maintenancePlans: [
      {
        title: 'Initial Purchase + Tagging',
        subtitle: 'Standard compliance certification included',
        selected: true,
      },
      {
        title: '6-Year Internal Maintenance',
        subtitle: 'Scheduled breakdown and hydro-test',
        addon: '+ $85.00',
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
    seoDescription: 'Professional-grade 10 lb ABC fire extinguisher with wall bracket. Request bulk fleet pricing.',
  },
  '2-5lb-abc-extinguisher-mount': {
    slug: '2-5lb-abc-extinguisher-mount',
    categorySlug: 'fire-protection',
    name: '2.5 lb ABC Fire Extinguisher w/ Mount',
    sku: 'C3-FE2.5M',
    description:
      'Compact suppression unit with vehicle-grade vibration-resistant mounting hardware included.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1skh_T28HOODU1xEUOyptKYTSuQoRxAUZLJ-pI5ko7SMgzsbV-oEFSWLyn-ndWxL_En6KwZ9axKhtF5ckJSEmcNRMKy6_PWKqb3zXm4mwLwGG1HbSIhsHJ6132AsOyu5JjIxAIFRcEsUKIbzRIsdEh8_pK5OgjzlnL1hJ4cDvY-1-_4L3W1G7gj5v5BhjPuWbV5MsHqtJMoO_FGDIlqpS2t7KLUrnKI3IP9m4XQA76lyYHFTK08Q',
    filterTag: 'extinguisher',
    inStock: true,
    cardName: '2.5 lb ABC w/mount',
    cardDescription:
      'Compact suppression unit with vehicle-grade vibration-resistant mounting hardware included.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1skh_T28HOODU1xEUOyptKYTSuQoRxAUZLJ-pI5ko7SMgzsbV-oEFSWLyn-ndWxL_En6KwZ9axKhtF5ckJSEmcNRMKy6_PWKqb3zXm4mwLwGG1HbSIhsHJ6132AsOyu5JjIxAIFRcEsUKIbzRIsdEh8_pK5OgjzlnL1hJ4cDvY-1-_4L3W1G7gj5v5BhjPuWbV5MsHqtJMoO_FGDIlqpS2t7KLUrnKI3IP9m4XQA76lyYHFTK08Q',
    cardBadge: 'Vehicle Ready',
    cardBadgeTone: 'primary',
    fireCardFeatured: true,
    seoTitle: '2.5 lb ABC Fire Extinguisher with Mount | Code 3 First Aid',
    seoDescription: 'Compact ABC fire extinguisher with vehicle mounting bracket. Request fleet pricing.',
  },
  '20lb-abc-extinguisher': {
    slug: '20lb-abc-extinguisher',
    categorySlug: 'fire-protection',
    name: '20 lb ABC Fire Extinguisher',
    sku: 'C3-FE20ABC',
    description:
      'Maximum capacity industrial unit designed for large-scale fire threats and rapid suppression in high-hazard areas.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGZEeTN570I5E9E3YJN1r_9MN8ggnejDHBNKyD4I3lNrmRm9oB9cY-0Fr-F7uZW0IlcjqrGrTW8f93xoq_fD2ubHqS7Ux-bJFaQhKzAzfw7u_a6JTDTuYBVbvEdmparXNnoBI-i2QEgG6HlDwDImLZFmr7NcV6_y27BRHNcc-ei7-lNs4wtT9yOcvcBTVFEaVYsd4OFfo1rjnUZ8_VorYihLaqefYfKxjGhdfuvp0kCnf_E-pxpKY',
    filterTag: 'extinguisher',
    inStock: true,
    cardName: '20 lb ABC FE',
    cardDescription:
      'Maximum capacity industrial unit designed for large-scale fire threats and rapid suppression in high-hazard areas.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGZEeTN570I5E9E3YJN1r_9MN8ggnejDHBNKyD4I3lNrmRm9oB9cY-0Fr-F7uZW0IlcjqrGrTW8f93xoq_fD2ubHqS7Ux-bJFaQhKzAzfw7u_a6JTDTuYBVbvEdmparXNnoBI-i2QEgG6HlDwDImLZFmr7NcV6_y27BRHNcc-ei7-lNs4wtT9yOcvcBTVFEaVYsd4OFfo1rjnUZ8_VorYihLaqefYfKxjGhdfuvp0kCnf_E-pxpKY',
    cardBadge: 'Max Capacity',
    cardBadgeTone: 'dark',
    seoTitle: '20 lb ABC Fire Extinguisher | Code 3 First Aid',
    seoDescription: 'High-capacity 20 lb ABC fire extinguisher for industrial facilities. Request a quote.',
  },
  '5lb-halotron-extinguisher': {
    slug: '5lb-halotron-extinguisher',
    categorySlug: 'fire-protection',
    name: '5 lb Halotron Fire Extinguisher',
    sku: 'C3-FE5HAL',
    description:
      'Clean agent suppression for electronics and data centers. Leaves no residue and is non-conductive.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxIynSUDSbWstRf8y6zmX8fYB3bIYzLios6UnwuTZj9jpavAPs4tOKorQmu8ynFkBzhMvI5tpXgoip70DW2etIYLoEKSz_oahwRXT77-L8o4DJ8gyn090KiauV5_ONWuOP_64hbtH-YnSSTiDWbiaa65qMhXZTgpM9uD_l6Hmi9fZgxQkacrQjawofzCw-RAuxygJRTDn4S9v0VkYxmnNNYm8OfbukQQrjpPmzMvaIPlxhjsSiHU4',
    filterTag: 'extinguisher',
    inStock: true,
    cardName: '5 lb Halotron',
    cardDescription:
      'Clean agent suppression for electronics and data centers. Leaves no residue and is non-conductive.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxIynSUDSbWstRf8y6zmX8fYB3bIYzLios6UnwuTZj9jpavAPs4tOKorQmu8ynFkBzhMvI5tpXgoip70DW2etIYLoEKSz_oahwRXT77-L8o4DJ8gyn090KiauV5_ONWuOP_64hbtH-YnSSTiDWbiaa65qMhXZTgpM9uD_l6Hmi9fZgxQkacrQjawofzCw-RAuxygJRTDn4S9v0VkYxmnNNYm8OfbukQQrjpPmzMvaIPlxhjsSiHU4',
    cardBadge: 'Clean Agent',
    cardBadgeTone: 'dark',
    seoTitle: '5 lb Halotron Fire Extinguisher | Code 3 First Aid',
    seoDescription: 'Clean agent Halotron fire extinguisher for electronics and data centers. Request a quote.',
  },
  'fire-extinguisher-mounting-brackets': {
    slug: 'fire-extinguisher-mounting-brackets',
    categorySlug: 'fire-protection',
    name: 'Fire Extinguisher Mounting Brackets',
    sku: 'C3-FEMB',
    description:
      'Heavy-duty steel wall and vehicle brackets. Powder-coated for corrosion resistance and long-term durability.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBerK9lr7TTkfqR7lxb9m-Jr5vl4baPoSCgA8Esji6Gd-3WDnkZ757btKapbTFDYQsv1enxzEqCXAkq8jZ1zedfg4bdqgqk2Dt0o6HXJzpGZelDwEb0gwIZnycGV_W5KTFrUgV7VGsVx2ZlDjIBn3SzaI9eT4ij1akXH2N3Lk_ulgQ4ZLDVGMIaw7q-nE0CLA5HIwS3-3RywAD1137hgwy8-1UsoaELNpVeA6x7wJBCHIOueHtzHaA',
    filterTag: 'extinguisher',
    inStock: true,
    cardName: 'Fire Extinguisher Mounting Brackets',
    cardDescription:
      'Heavy-duty steel wall and vehicle brackets. Powder-coated for corrosion resistance and long-term durability.',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBerK9lr7TTkfqR7lxb9m-Jr5vl4baPoSCgA8Esji6Gd-3WDnkZ757btKapbTFDYQsv1enxzEqCXAkq8jZ1zedfg4bdqgqk2Dt0o6HXJzpGZelDwEb0gwIZnycGV_W5KTFrUgV7VGsVx2ZlDjIBn3SzaI9eT4ij1akXH2N3Lk_ulgQ4ZLDVGMIaw7q-nE0CLA5HIwS3-3RywAD1137hgwy8-1UsoaELNpVeA6x7wJBCHIOueHtzHaA',
    seoTitle: 'Fire Extinguisher Mounting Brackets | Code 3 First Aid',
    seoDescription: 'Heavy-duty fire extinguisher mounting brackets for wall and vehicle use. Request a quote.',
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
    seoDescription: 'OSHA-compliant fire extinguisher identification signs. Request bulk pricing.',
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
    price: 250,
    compareAtPrice: 295,
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
    price: 2299,
    compareAtPrice: 2549,
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
        price: 235.99,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa5X8zKgqpWGVdIjL9QSXmM2AEA1yOCQohvt51qjpdXucRp9oMnB9kloFGak9H81GxVD8QqJOo0UrMB4nV9LkE5t3iuOqdkDiYquat07xoSDMr6jeHy4ZozD4a-hQ-qA8YN-BKJFF1VMH9puQjcG2rjyzHb3XgkBE8X1HJVEP9BwsV9Yc40A2sMfsVuw_hdms5vKZZ9wc_VRof4O9yOt9MRrJvqhH1dMDmqJxDXa4kgheQHc57cNc',
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
    price: 1050,
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
    seoDescription: 'Mobile gravity-fed eyewash station for industrial jobsites. Request pricing and facility audit.',
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
    seoDescription: 'Portable 16oz eyewash bottles for industrial eye safety programs. Request bulk pricing.',
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
    seoDescription: 'Compact 4oz eyewash for vehicle and mobile kits. Request bulk pricing.',
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
    seoDescription: 'Sterile eye pads and lubricating drops for post-irrigation care. Request bulk pricing.',
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa5X8zKgqpWGVdIjL9QSXmM2AEA1yOCQohvt51qjpdXucRp9oMnB9kloFGak9H81GxVD8QqJOo0UrMB4nV9LkE5t3iuOqdkDiYquat07xoSDMr6jeHy4ZozD4a-hQ-qA8YN-BKJFF1VMH9puQjcG2rjyzHb3XgkBE8X1HJVEP9BwsV9Yc40A2sMfsVuw_hdms5vKZZ9wc_VRof4O9yOt9MRrJvqhH1dMDmqJxDXa4kgheQHc57cNc',
    badge: 'Premium Supply',
    filterTag: 'cabinet',
    inStock: true,
    hasDetailPage: true,
    detailLayout: 'cpr-padz',
    price: 235.99,
    compareAtPrice: 268,
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
    seoDescription: 'Zoll CPR-D Padz with Real CPR Help. Request bulk AED consumables pricing.',
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
    price: 1899,
    compareAtPrice: 2145,
    priceNote: 'USD / EA',
    quoteDescription:
      'Engineered for high-risk industrial environments. Reinforced steel construction with manual-close safety locks and open mesh ventilation for LP-gas cylinder storage.',
    quickSpecs: [
      { label: 'Capacity', value: '6 Cylinders (375 Lbs Per Unit)' },
      { label: 'Dimensions', value: '36" x 36" x 60"' },
    ],
    primaryCtaLabel: 'Add to Quote',
    secondaryCtaLabel: 'View Data Sheet',
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
      text: 'Outfit multiple sites with standardized cylinder containment. Volume pricing and delivery coordination available.',
      buttonLabel: 'Inquire Now',
    },
    seoTitle: 'Steel Gas Cylinder Cages | Code 3 First Aid',
    seoDescription: 'Industrial steel cylinder cage for secure storage. Request a bulk equipment quote.',
  },
  'cowhide-leather-gloves': {
    slug: 'cowhide-leather-gloves',
    categorySlug: 'industrial-ppe',
    name: 'Cowhide Leather Gloves',
    sku: 'C3-HND-L88',
    description:
      'Premium heavy-duty split cowhide for superior abrasion resistance and thermal protection in rugged environments.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDERniXCFSjkSSkMGhZHvY11Ro3pkK-ff5W0yhvfMfO_L-BdgHyt70b3xVaO8NEhXkBYKBQ5mbgGRTDyDXaME4ndcHWZjKmekMYQtujhkm-w_N_MRSSFN4mLyQbTHzdXzwg8bAmEhuTvNl_yB9grV_CxR12eIqo-uiffQD5eYItGMWHw4AYXRCNHB5yKXcUlXaTDAk21W6Wy5YjqcgHTIvyhk-wnAiXN_7wGSQZXsu-JXuxsoqE7XA',
    filterTag: 'hand',
    ppeSection: 'hand',
    ppeCardStyle: 'glass',
    inStock: true,
    seoTitle: 'Cowhide Leather Gloves | Code 3 First Aid',
    seoDescription: 'Heavy-duty cowhide leather gloves for industrial hand protection. Request bulk pricing.',
  },
  'honey-grip-gloves': {
    slug: 'honey-grip-gloves',
    categorySlug: 'industrial-ppe',
    name: 'Honey Grip Gloves',
    sku: 'C3-HND-G22',
    description:
      'Crinkle-finish latex coating provides exceptional wet/dry grip. Breathable knit shell for all-day comfort and dexterity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARrWQh03ZA_Tt0xCRYcGfsgpNb7S2rVxb_FOmW2pw1TQiDIQJPyMY_MFcIuxCU5ii-5zqG9bwVddnHCX11NJ1_G0aSUOaSIpQgRTDYsWzsDha8iI-cQZm69CX_A4WWAUayiCSopXi64u4fWyoeju5byTYkgiOSQJ8K3JfiNZP_JaJeiASMRp5HELQpDqzPCL8ENJaj0qJpH_bcXBleN5T9H76WACIOQVTspSG4ap-Ma_g2SqZy9LQ',
    filterTag: 'hand',
    ppeSection: 'hand',
    ppeCardStyle: 'glass',
    inStock: true,
    seoTitle: 'Honey Grip Gloves | Code 3 First Aid',
    seoDescription: 'High-visibility honey grip gloves with latex palm coating. Request a quote.',
  },
  'nitrile-gloves-lg-xl': {
    slug: 'nitrile-gloves-lg-xl',
    categorySlug: 'industrial-ppe',
    name: 'Nitrile Gloves (LG/XL)',
    sku: 'C3-HND-N44',
    description:
      'Industrial strength chemical resistant nitrile. Powder-free and latex-free for sensitive skin. Available in bulk cases.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH9foDFr_bsbO-9lUjKhRV6WVikELqKmG0eJ17S83N359z5jsvxb5Hf-D0-cHLXNIOPEJcU9EfUsLB6tY5zryQUYKEMJ6WfDK5E3ZBSA4BBeOxIBsJATCh3SnHO0Gh9hUB9ADG0JzQ7Mel2IAUCjfsLZN9vCka-dKnTTxYGWap1WLOQNNT0-LEys-G3VoQbPA8s72pWaY7-4lHqnLwAjUKOxND7haG3-4cpJObQSzjM6bfX_R7Vc8',
    filterTag: 'hand',
    ppeSection: 'hand',
    ppeCardStyle: 'glass',
    sizeTags: ['LG', 'XL'],
    inStock: true,
    seoTitle: 'Nitrile Gloves LG/XL | Code 3 First Aid',
    seoDescription: 'Industrial nitrile gloves in large and extra-large sizes. Request bulk case pricing.',
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
    seoDescription: 'Clear anti-fog safety glasses for indoor industrial work. Request bulk pricing.',
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
    seoDescription: 'Anti-static lens cleaning towelettes for safety eyewear maintenance. Request bulk pricing.',
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
    seoDescription: 'Metal-detectable 1×3 bandages for industrial first aid programs. Request bulk pricing.',
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
