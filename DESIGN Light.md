---
name: Warm Architectural Editorial
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#4d4540'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#7f756f'
  outline-variant: '#d1c4bd'
  surface-tint: '#685c54'
  primary: '#040200'
  on-primary: '#ffffff'
  primary-container: '#231b15'
  on-primary-container: '#8f827a'
  inverse-primary: '#d3c4ba'
  secondary: '#7a5908'
  on-secondary: '#ffffff'
  secondary-container: '#ffd079'
  on-secondary-container: '#795807'
  tertiary: '#030200'
  on-tertiary: '#ffffff'
  tertiary-container: '#281a00'
  on-tertiary-container: '#a47f32'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f0dfd5'
  primary-fixed-dim: '#d3c4ba'
  on-primary-fixed: '#221a14'
  on-primary-fixed-variant: '#4f453e'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#edc06a'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#ecc06c'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Manrope
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  margin-mobile: 1.25rem
  margin-desktop: 3rem
  container-max: 76rem
---

## Brand & Style

This design system embodies an understated luxury-editorial sensibility fused with structural engineering rigor. Designed for discerning practitioners, scholars, and technical architects who value deliberate restraint over ephemeral digital noise, the aesthetic replaces clinical digital conventions with organic warmth, permanence, and tactile sophistication.

The interface evokes the gravitas of bespoke print monographs, curated archival journals, and precision drafting tools. The foundational mood is calm, authoritative, and intellectually mature. Interactions avoid flashy kinetic flourishes, neon accents, or synthetic skeuomorphism. Instead, the interface emphasizes meticulous proportions, subtle surface shifts, razor-sharp hairline dividers, and deliberate typographic rhythm.

## Colors

The palette is rooted in warm natural pigments, anchored by deep espresso browns, aged vellum surfaces, and oxidized brass highlights. Digital starkness is eliminated: pitch black and cold slate grays are entirely absent.

### Role Tokens & Color Allocation

- **Canvas Background (Primary Ivory):** `#FBF8F3` provides a soft, non-glare reading environment. An alternate sunken background `#F7F3EB` is used for recessed utility frames or viewport margins.
- **Structural Core & Primary Elements:** `#231B15` serves as the primary solid interaction color, heavy rule strokes, and primary headline ink.
- **Secondary Surfaces (Beige/Linen):** `#F2ECE1` defines elevated card planes and sidebars, while `#EDE5D8` is reserved for structural sub-panels and active container states.
- **Typography Ink:**
  - Headings & Structural Titles: `#231B15` (deepest warm brown, high contrast).
  - Primary Body & Continuous Text: `#4A3E36` (rich walnut umber; achieves well over 5:1 contrast against both `#FBF8F3` and `#F2ECE1`).
  - Muted Metadata & Captions: `#706259` (meets WCAG AA 4.5:1 on ivory canvas).
- **Accents (Muted Gold / Antique Brass):** `#B58D3D` is deployed with strict economy for focal indicators, selected tab underscores, active badges, and precision hover outlines. `#9E792D` is the pressed/deepened state. Metallic gradients, lens flares, and luminous gold glows are strictly prohibited.
- **Dividers & Structural Hairlines:** `#E4DCD0` at 1px thickness provides quiet spatial architecture without harsh visual boundaries.

## Typography

The typographic hierarchy pairs **Newsreader** (a sharp, contemporary optical serif with intellectual depth) with **Manrope** (a balanced, modern geometric sans-serif engineered for digital legibility).

### Usage Rules
- **Newsreader** governs all editorial statements, section titles, article leads, and prominent metric displays. Large optical titles employ default or italic styling with gentle negative tracking to emulate fine hot-metal typesetting.
- **Manrope** governs body compositions, dense data tables, interactive labels, navigation items, and code-adjacent technical descriptors. Its structural clarity prevents visual fatigue across prolonged reading sessions.
- **Uppercase Labels:** The `label-caps` token is reserved for technical categorizations, metadata tags, table headers, and status flags. It must always be set with generous tracking (`0.08em`) and sentence/uppercase rendering to maintain distinct architectural separation from continuous body copy.

## Layout & Spacing

The layout model is built on an architectural 12-column grid system bounded within a maximum content container of `76rem` (1216px). The system prioritizes breathing room, deliberate margins, and column alignment inspired by architectural drafting plates.

### Breakpoints & Adaptation
- **Desktop (1024px+):** 12-column structure with `1.5rem` (24px) gutters and generous outer margins (`3rem`+). Off-center, asymmetrical column distributions (e.g., 4-column contextual navigation/summary paired with an 8-column reading canvas) establish an editorial tempo.
- **Tablet (768px – 1023px):** 8-column grid with `1.25rem` (20px) gutters and `2rem` page margins. Secondary utility panels collapse into tabbed drawers or stacked sections.
- **Mobile (< 768px):** 4-column fluid grid with `1rem` (16px) gutters and `1.25rem` (20px) safe margins. Grid groupings collapse into pure vertical stacks with consistent `1.5rem` section spacing.

### Rhythm
Whitespace follows disciplined multiples of `0.25rem` (4px). Major editorial transitions employ `3rem` to `4.5rem` of vertical clearance to let typographic elements breathe against the ivory canvas.

## Elevation & Depth

This system intentionally rejects heavy, synthetic drop shadows in favor of tonal layering, warm ambient occlusions, and hairline boundaries. Depth reflects physical vellum, linen card stock, and precision joinery.

### Tonal Stratification
Depth is communicated primarily through distinct canvas plane tiers:
- **Base Canvas:** Deepest layer in `#F7F3EB` or `#FBF8F3`.
- **Card & Sheet Surface:** `#F2ECE1` bounded by a 1px solid hairline (`#E4DCD0`).
- **Elevated Interactive Sheet:** `#FFFFFF` or `#FAF7F2` for active modals, popovers, and elevated focus cards.

### Ambient Shadow Craft
When mechanical elevation is mandatory (such as floating toolbars, elevated menus, or dialog windows), rely on soft, multi-step ambient shadows tinted with the primary dark brown hue:
- **Default Card:** `0 1px 3px rgba(35, 27, 21, 0.04), 0 1px 1px rgba(35, 27, 21, 0.02)` coupled with a 1px border of `#E4DCD0`.
- **Floating Sheet / Popover:** `0 4px 20px -2px rgba(35, 27, 21, 0.08), 0 2px 6px -1px rgba(35, 27, 21, 0.04)` with a 1px border of `#D8CFC2`.
- **Modal Backing:** Dimmed backdrop overlay utilizing `rgba(35, 27, 21, 0.45)` with no artificial blur filters.

## Shapes

The shape geometry is crisp, disciplined, and architectural. The roundedness value is set to **1** (`Soft`). Standard interactive components (buttons, input boxes, badges) carry a `0.25rem` (4px) corner radius, while large surfaces, cards, and dialogue sheets scale to a maximum radius of `0.5rem` (8px). 

Exaggerated pill shapes, fully circular chips, and organic blobs are strictly avoided. Sharp geometric discipline conveys industrial precision, recalling drafted technical blueprints and traditional bookbinding edges.

## Components

### Buttons
- **Primary:** Solid dark brown (`#231B15`) container with crisp ivory text (`#FBF8F3`). Border is a calibrated 1px solid `#231B15`. Hover state introduces an interior ring or hairline border highlight in muted antique gold (`#B58D3D`) and shifts the background subtly to `#2B211B`. Active/pressed state deepens to `#1A130E`.
- **Secondary / Outline:** Transparent or `#F2ECE1` surface with a 1px solid border in `#D8CFC2` and text in `#231B15`. On hover, the border shifts to muted gold (`#B58D3D`) with text remaining dark brown.
- **Ghost / Text:** Transparent background, `#231B15` label, transitioning to warm beige hover tint (`#EDE5D8`) with no underline.

### Input Fields & Controls
- **Text Inputs:** Surface `#FBF8F3` (or pure `#FFFFFF` within beige cards) with a 1px border of `#D8CFC2`. Text set in Manrope regular (`#231B15`), placeholder text in `#8C7D73`. Focus state transitions the border to `#B58D3D` with a subtle 1px matching ring (`rgba(181, 141, 61, 0.15)`).
- **Checkboxes & Radios:** Unchecked state is a square (or circular for radio) with a 1.5px border of `#8C7D73` on `#FBF8F3`. Checked state fills with `#231B15`, displaying a crisp ivory checkmark or dot, accompanied by a subtle `#B58D3D` perimeter stroke.

### Cards & Container Panels
- Base surface is `#F2ECE1` bordered by a 1px stroke of `#E4DCD0`. Corner radius is consistently `0.5rem` (8px). Internal padding adheres strictly to `1.5rem` or `2rem`.
- When cards are interactive, hover state shifts the background to `#EDE5D8` and updates the border stroke to `#B58D3D` at 50% opacity, accompanied by an ambient brown lift.

### Chips & Status Badges
- Compact rectangular modules with `0.25rem` (4px) radius.
- **Default Category Chip:** `#EDE5D8` background with `#4A3E36` text in `label-caps` styling.
- **Active / Accent Badge:** Dark brown `#231B15` background with muted gold text (`#B58D3D`) and a fine `#B58D3D` outline.

### Lists & Key-Value Architectural Specs
- Lists avoid bulleted discs. Instead, use clean hairline borders (`#E4DCD0`) separating rows. Key metadata pairs display the key in `label-caps` (`#706259`) aligned left, with the corresponding value in `body-md` (`#231B15`) aligned right.

### Editorial Dividers & Callouts
- Horizontal separators are 1px solid `#E4DCD0`.
- Editorial quote/insight callouts use a left-edge 2px solid accent stroke of `#B58D3D` set against a `#F2ECE1` container, using Newsreader italic for body content.