---
name: Emergency Response System
colors:
  surface: '#f6faff'
  surface-dim: '#d2dbe4'
  surface-bright: '#f6faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ecf5fe'
  surface-container: '#e6eff8'
  surface-container-high: '#e0e9f2'
  surface-container-highest: '#dbe4ed'
  on-surface: '#141d23'
  on-surface-variant: '#5b403f'
  inverse-surface: '#293138'
  inverse-on-surface: '#e9f2fb'
  outline: '#8f6f6e'
  outline-variant: '#e4bebc'
  surface-tint: '#bb152c'
  primary: '#b7102a'
  on-primary: '#ffffff'
  primary-container: '#db313f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b1'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5a5c5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#737576'
  on-tertiary-container: '#fcfdfe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f6faff'
  on-background: '#141d23'
  surface-variant: '#dbe4ed'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  section-padding-lg: 120px
  section-padding-sm: 64px
---

## Brand & Style

This design system establishes a visual language of "Urgency with Precision." It bridges the gap between rugged first-responder utility and high-end modern SaaS aesthetics. The brand personality is authoritative, vigilant, and impeccably organized.

The design style utilizes **Modern Minimalism** with **Glassmorphism** accents. We prioritize high-contrast monochromatic layouts to mirror the clarity required in emergency situations, while utilizing frosted glass layers to signify depth and technical sophistication. This approach ensures the "first responder" aesthetic is interpreted through a premium, forward-thinking lens rather than a dated utilitarian one.

## Colors

The palette is anchored by a high-visibility **Signal Red** (#E63946), used strategically for critical actions and brand markers. The core of the interface is built on a stark interplay between **Deep Obsidian** (#1A1A1A) and **Pure White** (#FFFFFF).

- **Primary (Signal Red):** Reserved for CTAs, emergency alerts, and active states.
- **Secondary (Obsidian):** Used for typography, dark-mode surfaces, and primary navigation backgrounds.
- **Neutral/Background:** A range of cool grays provides the foundation for the glassmorphism effects and soft surface separation.

Color should be used sparingly but boldly. Red is never used for decorative purposes; it is a functional tool for directing the eye to the most vital information.

## Typography

Typography focuses on immediate legibility and impact. **Montserrat** provides a geometric, assertive presence for headlines, echoing the bold markings found on emergency vehicles.

**Inter** is the workhorse for body text, providing high readability at various sizes. To lean into the "technical/operational" aspect of first aid and safety, **JetBrains Mono** is introduced for labels, metadata, and secondary navigation elements, giving the UI a precise, data-driven feel. Use all-caps for labels to maximize the authoritative tone.

## Layout & Spacing

The layout follows a strict 12-column fluid grid for desktop, transitioning to 4 columns for mobile. We utilize **Generous Whitespace** (80px - 120px between sections) to ensure the high-contrast elements have room to breathe, preventing the "loud" typography from becoming overwhelming.

Content containers should have a maximum width of 1280px to maintain line-length readability. Spacing rhythm is strictly based on an 8px base unit. For section transitions, use asymmetrical padding or subtle geometric diagonal masks to echo the energy of the brand logo and the slanted imagery in the reference.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **High-Contrast Layering**. 

1.  **Level 0 (Base):** Solid white or obsidian backgrounds.
2.  **Level 1 (Cards):** Translucent white (20-40% opacity) with a 20px backdrop blur and a fine 1px semi-transparent border. This creates a "heads-up display" effect.
3.  **Level 2 (Popovers/Modals):** Increased blur (40px) with subtle ambient shadows (#000000 at 10% opacity) to separate functional overlays from the content.

Avoid heavy, dark drop shadows. Depth should feel like light passing through technical glass rather than objects casting shadows on paper.

## Shapes

The shape language is **Soft (0.25rem)** to maintain a disciplined, professional appearance. 

While the overall vibe is modern, we avoid excessive "bubbly" roundness. Buttons and input fields should feel precise and industrial. Use sharp 45-degree angles for specific decorative accents or image masks to mimic the "Code 3" movement and speed. Images should feature crisp borders and, where appropriate, the signature tilted mask seen in the reference brand identity.

## Components

### Buttons
- **Primary:** Solid Obsidian background with White text. On hover, transitions to Signal Red.
- **Secondary:** Transparent with a 2px Obsidian border. 
- **Ghost:** Clear background with Signal Red text and an arrow icon.

### Cards
- Cards utilize the glassmorphism effect: `backdrop-filter: blur(20px)` with a light border. They should have a hover state that slightly increases the border opacity to Signal Red.

### Inputs
- Clean, 1px Obsidian bottom-border only for a "form" feel, or a fully enclosed Soft-rounded box with a light gray stroke. Labels must be in JetBrains Mono.

### Chips & Badges
- Used for "Status" or "Service Category." These should be rectangular with very slight rounding, using the Signal Red for "Critical" or Obsidian for "Information."

### Section Transitions
- Use "Clean Cut" transitions—sharp diagonal breaks between a dark section and a light section to create a sense of dynamic movement as the user scrolls.