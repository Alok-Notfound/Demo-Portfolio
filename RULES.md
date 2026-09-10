# Build Rules & Guidelines

## 1. Content Authenticity & Truthfulness
- **Source of Truth:** Use only authentic information provided in the project files or explicitly confirmed by the user.
- **Zero Hallucination:** Under no circumstances should project metrics, past employers, degrees, certifications, or technical claims be fabricated or assumed.
- **Transparent AI Leverage:** Position AI as a multiplier for engineering depth, quality, and velocity—never as a shortcut or replacement for fundamental coding competence.
- **Tone & Identity:** Maintain a tone that is serious, intellectually rigorous, mature, and creative. Avoid self-deprecating student tropes and pretentious tech buzzwords.

---

## 2. Design System & Aesthetic Strictness
Adhere 100% to the design foundations specified in [DESIGN Light.md](file:///c:/Users/jsash/Desktop/Projects/Demo%20Portfolio/DESIGN%20Light.md) and [DESIGN Dark.md](file:///c:/Users/jsash/Desktop/Projects/Demo%20Portfolio/DESIGN%20Dark.md).

### 2.1 Typography Rules
- **Editorial Headings & Quotes:** Must use **Newsreader** (Google Fonts optical serif) with gentle negative tracking (`-0.02em` to `-0.01em`) for editorial gravitas.
- **Body & Continuous Copy:** Must use **Manrope** (Google Fonts sans-serif, regular weight 400, line-height 24px–30px) for prolonged reading comfort.
- **Uppercase Labels (`label-caps`):** Must use **Manrope** 11px, font-weight 600, uppercase with wide letter-spacing (`0.08em`).
- **Font Loading:** Always declare `font-display: swap` and preload key font files to prevent Layout Shifts (CLS). Never fall back to browser defaults.

### 2.2 Color & Contrast Discipline
- **Light Theme (Warm Ivory & Linen):**
  - Background Canvas: Ivory `#FBF8F3` (Sunken: `#F7F3EB`)
  - Typography Ink: Espresso Brown `#231B15` (Headings), Walnut `#4A3E36` (Body)
  - Card Surfaces: Linen `#F2ECE1` (Active/Sub-panel: `#EDE5D8`)
  - Accent / Focus: Antique Brass `#B58D3D` (Pressed: `#9E792D`)
  - Dividers & Hairlines: Calibrated 1px solid `#E4DCD0`
- **Dark Theme (Warm Espresso Vellum):**
  - Background Canvas: Warm Obsidian/Espresso `#131411`
  - Typography Ink: Soft Cream `#E5E2DD` (Headings), Warm Neutral `#D1C4BD` (Body)
  - Card Surfaces: Deep Espresso Container `#20201D` (Elevated: `#2A2A27`)
  - Accent / Focus: Muted Warm Gold `#EDC06A` / `#ECC06C`
  - Dividers & Hairlines: Hairline `#353532` / `#4D4540`
- **Prohibited Colors:** Pure `#000000` pitch black, cold slate grays (`#64748B`), and garish synthetic neons are strictly prohibited.

### 2.3 Geometry & Elevation
- **Corner Radii:** Exact tokens only—`0.25rem` (4px) for controls, inputs, and chips; `0.5rem` (8px) for cards, panels, and modals.
- **No Pill Badges or Organic Blobs:** Exaggerated round pill shapes and circular chips are banned to preserve architectural precision.
- **Shadows vs. Tonal Elevation:** Heavy synthetic drop shadows are replaced with tonal container layering, 1px hairline borders, and delicate warm ambient occlusions (`rgba(35, 27, 21, 0.04)`).

---

## 3. Comprehensive WCAG 2.1 AA Accessibility Guidelines

The portfolio must strictly satisfy the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA across the entire site:

### 3.1 Perceivable
- **Guideline 1.4.3 Contrast (Minimum):**
  - All standard body copy (`body-md`, `body-lg`, `body-sm`) must maintain a minimum contrast ratio of **4.5:1** against its adjacent background.
  - Large text (≥ 18pt / 24px regular or ≥ 14pt / 18.66px bold) and display titles must maintain a minimum contrast ratio of **3.0:1**.
  - Incidental/placeholder text must still meet readable thresholds (`#8C7D73` on ivory provides ≥ 4.5:1).
- **Guideline 1.4.11 Non-text Contrast:**
  - UI components (input borders, active tab indicators, checkbox strokes, focus rings) must achieve at least **3.0:1** contrast against adjacent surfaces.
- **Guideline 1.4.4 Resize Text:**
  - The UI must remain 100% readable and functional when browser text is scaled up to 200% without clipping or horizontal page scroll.
- **Guideline 1.1.1 Non-text Content:**
  - All informative `<img>` and `<svg>` elements must include concise, descriptive `alt` text or `<title>` attributes. Purely decorative elements must carry `aria-hidden="true"`.
- **Guideline 1.3.1 Info and Relationships:**
  - Strict semantic HTML structure: a single `<h1>`, followed by hierarchical `<h2>` and `<h3>` tags.
  - Proper use of `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`.

### 3.2 Operable
- **Guideline 2.1.1 Keyboard Navigation:**
  - All interactive controls (navigation links, theme toggle, project filter tabs, modal dialog triggers, form fields, and copy buttons) must be fully navigable and actionable via keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`).
- **Guideline 2.4.7 Focus Visible:**
  - Focus outlines must never be suppressed (`outline: none` without a replacement is strictly forbidden).
  - Use a high-contrast antique brass focus ring: `outline: 2px solid var(--accent)` with `outline-offset: 2px`.
- **Guideline 2.1.2 No Keyboard Trap:**
  - Any opened modal dialog or expandable panel must allow keyboard focus to cycle inside and exit cleanly via the `Escape` key.
- **Guideline 2.4.1 Bypass Blocks:**
  - Include an accessible "Skip to Main Content" link at the very top of the DOM for screen reader and keyboard users.
- **Guideline 2.5.5 Target Size (Touch/Pointer):**
  - Minimum clickable touch target size of **44x44 CSS pixels** for all primary buttons, theme switches, and navigation links.

### 3.3 Understandable
- **Guideline 3.1.1 Language of Page:**
  - The root element must explicitly declare `<html lang="en">`.
- **Guideline 3.2.1 / 3.2.2 On Focus & On Input:**
  - Form inputs and theme selectors must never cause unexpected context changes, submissions, or disorientation upon receiving focus.
- **Guideline 3.3.1 Error Identification & Labels:**
  - Every form input must have a programmatic `<label for="...">`.
  - Validation errors must provide clear, human-readable text paired with `aria-describedby` and `aria-invalid="true"`.

### 3.4 Robust
- **Guideline 4.1.2 Name, Role, Value:**
  - Interactive custom elements must supply appropriate ARIA roles (e.g., `role="dialog"`, `role="tablist"`, `role="tab"`, `aria-selected`, `aria-expanded`).
  - Screen-reader announcements for dynamic events (e.g., "Link copied to clipboard", "Theme switched to dark mode") must use `aria-live="polite"`.

---

## 4. Technology Stack & Code Architecture
- **Core Stack:** Pure Vanilla HTML5, Vanilla CSS3, and Vanilla Modern JavaScript (ES6+).
- **Zero CSS Framework Bloat:** Do not introduce TailwindCSS, Bootstrap, or utility libraries unless explicitly instructed by the user.
- **CSS Architecture:**
  - Strictly use CSS Custom Properties (CSS variables) for all design tokens (colors, typography, spacing, elevations, transitions).
  - Organized modularly: Reset & Base, Design Tokens, Typography, Layout Grid, Components, Sections, Responsive Overrides.
- **Zero Heavy Runtime Libraries:** Avoid React, Vue, jQuery, or bloated animation packages. Rely on native browser APIs (`IntersectionObserver`, `fetch`, `Clipboard API`).
- **No Console Errors:** Every script must run without unhandled promise rejections, warnings, or deprecation notices.

---

## 5. Layout, Grid & Responsiveness Rules
- **Container Ceiling:** Maximum container width is strictly capped at `76rem` (1216px).
- **12-Column Architectural Drafting Grid:**
  - **Desktop (1024px+):** 12-column grid, `1.5rem` (24px) gutters, and generous `3rem` (48px) side margins.
  - **Tablet (768px – 1023px):** 8-column grid, `1.25rem` (20px) gutters, and `2rem` (32px) margins.
  - **Mobile (< 768px):** 4-column fluid stack, `1rem` (16px) gutters, and `1.25rem` (20px) safe margins.
- **Zero Overflow Bug:** Ensure `box-sizing: border-box` is set universally. Horizontal scrollbars on any viewport width are strictly prohibited.

---

## 6. Performance & Lighthouse Standards
- **Lighthouse Benchmarks:**
  - Performance: **95–100**
  - Accessibility: **100**
  - Best Practices: **100**
  - SEO: **100**
- **Core Web Vitals:**
  - Cumulative Layout Shift (CLS): `< 0.05`
  - Largest Contentful Paint (LCP): `< 1.2s`
  - First Input Delay / Interaction to Next Paint (INP): `< 50ms`
- **Motion Optimization:** Wrap animations and transitions in `@media (prefers-reduced-motion: reduce)` to disable kinetic effects for users with vestibular sensitivities.

---

## 7. State Management & Theme Persistence
- **FOUC Prevention:** Theme initialization script must run synchronously in the `<head>` to read `localStorage` or `window.matchMedia('(prefers-color-scheme: dark)')` before the body renders.
- **Interactive Feedback:** Micro-interactions (hover, active, pressed) must be smooth and tactile (duration: `150ms` to `200ms`, `ease-out`).