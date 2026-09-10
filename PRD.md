# Portfolio Website PRD

## Purpose
Create a portfolio website that presents my projects, skills, and education clearly, showcasing my abilities as a serious, creative, and forward-thinking software developer.

## Audience
Recruiters, engineering hiring managers, and internship reviewers looking for proactive, high-potential talent in software engineering and AI-driven development.

## Main Goals & Brand Identity

### 1. What do I actually do?
- I do coding, build projects with the help of AI, and occasionally work on cybersecurity.

### 2. What should a visitor feel in the first five seconds?
- They should see me as serious, focused, and creative. They should feel that I am interested in AI + coding and that my projects are worth exploring.

### 3. What three words describe my work?
- Creative, Innovative, Intelligent.

### 4. What do I want to be hired for?
- Software development, web development, and AI-based project development.

### 5. What am I deliberately NOT?
- I do not want my brand to feel boring, overly flashy, childish, like I am just a coding-nerd student, like I only use AI tools, or overloaded and confusing. I want it to feel clean, mature, and architecturally sound.

---

## 6. Design & Aesthetic Direction

In accordance with [DESIGN Light.md](file:///c:/Users/jsash/Desktop/Projects/Demo%20Portfolio/DESIGN%20Light.md) and [DESIGN Dark.md](file:///c:/Users/jsash/Desktop/Projects/Demo%20Portfolio/DESIGN%20Dark.md):
- **Aesthetic Style:** Warm Architectural Editorial — combines intellectual depth and editorial craftsmanship with clean software engineering rigor.
- **Typography:** 
  - Headings & Editorial statements: **Newsreader** (contemporary optical serif, intellectual gravitas).
  - Body copy, labels, and technical descriptors: **Manrope** (geometric, highly legible sans-serif).
  - Metadata & Tags: `label-caps` (uppercase, letter-spaced `0.08em`).
- **Color Palettes:**
  - **Light Mode (Ivory Canvas):** Primary ivory background (`#FBF8F3`), deep espresso brown text (`#231B15`), rich walnut body text (`#4A3E36`), linen card containers (`#F2ECE1`), and antique brass accents (`#B58D3D`).
  - **Dark Mode (Warm Espresso Vellum):** Deep warm dark canvas (`#131411`), cream typography (`#E5E2DD` / `#D1C4BD`), espresso surface containers (`#20201D`), and muted warm gold accents (`#EDC06A`).
- **Shapes & Elevations:** Disciplined 4px radius for controls/chips, 8px for cards/containers. Tonal layering and 1px hairline borders (`#E4DCD0` in Light, `#353532` in Dark) replace artificial heavy shadows.

---

## 7. Key Sections & Functional Specifications

### 7.1 Header & Navigation
- **Identity / Wordmark:** Minimalist typographic mark + live status indicator ("Available for internships & junior roles").
- **Navigation Links:** Smooth scroll anchors: `Projects`, `Skills`, `Education & Experience`, `About`, `Contact`.
- **Action Controls:**
  - **Theme Switcher:** Toggle between Warm Ivory (Light) and Warm Espresso (Dark) with smooth transition and persistence (`localStorage`).
  - **Resume Button:** Direct access to view or download CV (PDF).

### 7.2 Hero Section (First 5 Seconds Impact)
- **High-Impact Headline:** Editorial statement in Newsreader Display conveying creativity, intelligence, and technical capability.
- **Positioning Statement:** Clear summary: Software & Web Developer building modern web applications and AI-augmented software solutions.
- **Quick Spec Matrix:**
  - **Status:** Open to Software Engineering & AI Internships / Roles
  - **Core Focus:** Web Development • AI Integration • Systems & Security
  - **Location:** Open to Remote & On-Site
- **CTAs:** "Explore Projects" (Primary Solid Button) and "Get in Touch" (Secondary Outline Button).

### 7.3 Featured Projects (AI + Web + Cybersecurity Showcase)
- **Domain Filter Tabs:** All • Web Development • AI & Intelligent Apps • Cybersecurity / Systems.
- **Project Cards:**
  - Project Title & Category Badge (`label-caps`).
  - Problem solved & architectural overview.
  - Role, Key Engineering Highlights, and AI tooling/methodology used transparently to demonstrate practical leverage.
  - Tech Stack tags (e.g., Python, JavaScript/TypeScript, React, Node.js, LangChain/OpenAI APIs, Security tooling).
  - Links: Live Demo, GitHub Repository, and "View Architecture & Learnings" expander/modal.

### 7.4 Technical Skills & Competencies (Clean Architectural Spec Sheet)
Structured clean key-value / domain spec lists rather than cliché percentage bars:
- **Languages & Frameworks:** JavaScript / TypeScript, Python, HTML5, CSS3, modern front-end frameworks & Node.js.
- **AI & Intelligent Systems:** LLM API integration, prompt engineering pipelines, agent workflows, intelligent automation.
- **Cybersecurity & Systems:** Fundamentals of network security, web application security (OWASP Top 10), basic penetration testing and secure coding practices.
- **Tools & Workflow:** Git, GitHub, VS Code / Antigravity IDE, Linux / Terminal, Docker basics.

### 7.5 Education & Experience Timeline
- **Academic Background:** Degree, major/specialization, expected graduation year, and relevant coursework.
- **Key Milestones / Practical Experience:** Internships, personal projects, hackathons, or open-source contributions.
- Clean two-column layout: Date/Institution on the left, details and achievements on the right.

### 7.6 About & Working Philosophy
- Personal narrative communicating a serious, inquisitive mindset: Why I love combining programming with AI leverage and security fundamentals.
- Editorial callout with left antique brass border highlighting core ethos: *“Leveraging modern AI not to cut corners, but to build deeper, cleaner, and more impactful software.”*

### 7.7 Contact & Colophon (Footer)
- **Direct Contact Box:** Clear email link with one-click copy feedback, GitHub, LinkedIn, and social profiles.
- **Interactive Message / Inquiry Form:** Name, Email, Subject/Interest, and Message with crisp inline validation.
- **Colophon:** Architectural note mentioning typography, design system version, and copyright.

---

## 8. Technical Architecture & Non-Functional Requirements

- **Tech Stack:** Semantic HTML5, Vanilla CSS with custom properties matching `DESIGN Light.md` and `DESIGN Dark.md`, Vanilla JavaScript (ES6+).
- **Performance:** Instant load times, zero heavy bundle dependencies, 95+ score across all Lighthouse audits.
- **Responsiveness:** Fluid scaling across 12-column Desktop (1024px+), 8-column Tablet (768px–1023px), and 4-column Mobile (<768px).
- **Accessibility:** Strict WCAG 2.1 AA compliance (contrast ratios ≥ 4.5:1, keyboard navigable, visible focus states).
- **SEO:** Optimized metadata, semantic heading structure (`h1` -> `h2` -> `h3`), Open Graph tags for social preview.

---

## 9. Next Steps / Implementation Plan

1. **Review & Approval:** User verification of the completed PRD.
2. **Setup Base Architecture:** `index.html`, `style.css` (tokens from `DESIGN Light.md` and `DESIGN Dark.md`), and `main.js`.
3. **Build Core Sections:** Header, Hero, Filterable Projects, Skills Spec, Education Timeline, About, and Contact.
4. **Interactive Polish:** Theme toggle, copy-to-clipboard, responsive drawer for mobile, and case study modals.
5. **Testing & Validation:** Cross-browser check, mobile responsiveness, and Lighthouse audit.
