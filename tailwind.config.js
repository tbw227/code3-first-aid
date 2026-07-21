/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  // Scan all HTML and JS/CSS so utility classes are not purged in production
  content: [
    './*.html',
    './pages/**/*.html',
    './src/**/*.{js,css}',
  ],
  theme: {
    extend: {
      // Brand palette — primary red, obsidian header, light blue-gray surfaces
      colors: {
        surface: '#f6faff',
        'surface-dim': '#d2dbe4',
        'surface-bright': '#f6faff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#ecf5fe',
        'surface-container': '#e6eff8',
        'surface-container-high': '#e0e9f2',
        'surface-container-highest': '#dbe4ed',
        'surface-variant': '#dbe4ed',
        'on-surface': '#141d23',
        'on-surface-variant': '#5b403f',
        'inverse-surface': '#293138',
        'inverse-on-surface': '#e9f2fb',
        outline: '#8f6f6e',
        'outline-variant': '#e4bebc',
        'surface-tint': '#bb152c',
        primary: '#b7102a',
        'on-primary': '#ffffff',
        'primary-container': '#db313f',
        'on-primary-container': '#fffbff',
        'inverse-primary': '#ffb3b1',
        'accent-red': '#e63946',
        secondary: '#5f5e5e',
        'on-secondary': '#ffffff',
        'secondary-container': '#e2dfde',
        tertiary: '#5a5c5d',
        'tertiary-fixed-dim': '#c5c7c8',
        'tertiary-container': '#737576',
        background: '#f6faff',
        'on-background': '#141d23',
        obsidian: '#1a1a1a',
        error: '#ba1a1a',
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      // Section padding tokens used on marketing pages
      spacing: {
        'section-padding-sm': '64px',
        'section-padding-lg': '120px',
        unit: '8px',
        gutter: '32px',
      },
      maxWidth: {
        'container-max': '1280px',
      },
      // Montserrat (headlines), Inter (body), JetBrains Mono (labels/caps)
      fontFamily: {
        'label-caps': ['JetBrains Mono', 'monospace'],
        'body-lg': ['Inter', 'sans-serif'],
        'headline-lg': ['Montserrat', 'sans-serif'],
        'headline-md': ['Montserrat', 'sans-serif'],
        'headline-lg-mobile': ['Montserrat', 'sans-serif'],
        'display-lg': ['Montserrat', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'label-caps': ['14px', { lineHeight: '20px', letterSpacing: '0.1em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'headline-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'headline-lg-mobile': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'display-lg': ['72px', { lineHeight: '80px', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-hero': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
      },
      backdropBlur: {
        glass: '20px',
        overlay: '40px',
      },
    },
  },
  plugins: [],
  // Use .page-container / .max-w-container-max instead of Tailwind container
  corePlugins: {
    container: false,
  },
};
