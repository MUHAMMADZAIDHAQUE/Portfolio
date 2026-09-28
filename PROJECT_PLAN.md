# Master Project Plan: Md Zaid Haque Portfolio

**Project**: Next-Generation Personal Portfolio & Technical Case Studies  
**Owner**: Md Zaid Haque  
**Target Roles**: Entry-Level Data Analyst (Primary), Software Developer (Secondary)  
**Theme**: Premium Ultra-Dark / Obsidian Black with Neon Cyan & Emerald Accents  
**Architecture**: React 18 + TypeScript + Vite + Modular Vanilla CSS System  
**Date**: September 28, 2026  

---

## 1. Executive Summary & Vision

The objective is to architect and build an industry-grade, ultra-premium portfolio that positions **Md Zaid Haque** as a top-tier candidate for **Data Analyst** and **Software Engineering** roles.

Rather than a generic static website, this portfolio will act as an interactive technical showcase featuring:
1. **Curated Black-Themed Aesthetic**: Obsidian glassmorphism, subtle glowing gradients, fluid micro-interactions, responsive typography, and precision spacing.
2. **Deep-Dive Case Studies**: Comprehensive data analytics and full-stack engineering breakdowns for **Customer360** and **WanderLust**.
3. **Live Architecture & Metric Integrations**: Real-time health badge integration for Customer360, interactive dataset/architecture visualizers, and verifiable project links.
4. **Recruiter-Centric UX**: One-click resume access, clear contact channels, fast load times (< 1s), zero layout shift, and 100% mobile/desktop responsiveness.

---

## 2. Technical Stack & Architectural Decisions

### Core Technologies
* **Framework**: React 18 (with TypeScript) via Vite for fast HMR, strict type safety, and optimized production bundling.
* **Styling**: Vanilla CSS Design System with CSS Custom Properties (Variables), modern CSS Grid/Flexbox, and scoped module styles. Avoids heavy styling framework bloat while giving 100% control over animations and aesthetics.
* **Icons**: Lucide React for clean, lightweight, consistent vector iconography.
* **Data Visualization & Effects**: Lightweight SVG charts and interactive canvas / CSS micro-animations for data metrics and architecture flows.
* **Live API Connectivity**: Native `fetch` with caching to check live health of `https://customer360-api-u4k0.onrender.com/health`.

### Design Tokens & Color System
* **Background Primary**: `#060709` (Deep Void Black)
* **Surface / Card Background**: `#0d0f14` (Obsidian Surface) with `rgba(255, 255, 255, 0.05)` borders and glassmorphism backdrop filters.
* **Surface Hover / Highlight**: `#151821`
* **Text Primary**: `#f8fafc` (Bright Slate / Off-White)
* **Text Secondary**: `#94a3b8` (Muted Slate Gray)
* **Text Accent / Dim**: `#64748b`
* **Primary Accent (Data & Tech)**: `#00f0ff` / `#38bdf8` (Electric Cyan)
* **Secondary Accent (Success / Retention)**: `#10b981` (Emerald Green)
* **Tertiary Accent (Intelligence / ML)**: `#818cf8` (Laser Indigo)
* **Typography**:
  * Headings & UI: `Inter`, `Outfit`, or `Plus Jakarta Sans`
  * Data & Code / Numbers: `JetBrains Mono` / `Fira Code`

---

## 3. Application Structure & Page Layout

The application is structured as a high-performance Single Page Application (SPA) with smooth hash-based navigation and full-featured interactive deep-dive modal drawers for in-depth project case studies.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Sticky Glassmorphic Header                      │
│   [ZH Logo]        [About]  [Skills]  [Projects]  [Experience]  [Contact]   [Download CV]│
└────────────────────────────────────────────────────────────────────────┘
│
├── 1. HERO SECTION
│   ├── Floating Status Badge: "Available for Data Analyst & Developer Roles"
│   ├── Headline: "Md Zaid Haque" — Turning Complex Data into Actionable Intelligence
│   ├── Subtitle: B.Tech @ NIT Durgapur | Data Analytics, SQL/dbt, ML & Full-Stack Systems
│   ├── Key Metric Pills: 1,500+ Customer Records Analyzed | Production Churn ML | Full-Stack MVC
│   └── CTAs: [Explore Case Studies] [View Customer360 Live] [Get in Touch]
│
├── 2. ABOUT & PHILOSOPHY
│   ├── Narrative: Bridging raw data engineering, statistical rigor, and user-facing software.
│   ├── Education Spotlight: National Institute of Technology Durgapur (2023–2027)
│   └── Core Competencies: Data Analytics, Star Schema Marts, Churn Modeling, Full-Stack APIs
│
├── 3. SKILLS & TOOLING MATRIX
│   ├── Interactive Filter Tabs: [All] [Data Analytics & BI] [Software & APIs] [DevOps & Tools]
│   └── Visual Cards with Proficiency Badges & Tool Badges (Python, SQL, PostgreSQL, dbt, DuckDB, Power BI, XGBoost, React, Node.js, Docker, etc.)
│
├── 4. FLAGSHIP PROJECT CASE STUDIES (Interactive Showcase)
│   ├── Card 1: Customer360 (AI-Powered Customer Intelligence & Retention)
│   │   ├── Tags: Data Analytics, dbt, XGBoost, Power BI, FastAPI, React, Docker
│   │   ├── Highlights: 1,500 records, RFM, Cohorts, CLV, TreeSHAP Explainability
│   │   ├── Live Status: [● Live on Render]
│   │   ├── Quick Links: [GitHub] [Live App] [API Docs] [Case Study Deep-Dive]
│   │   └── Case Study Modal: Full architecture breakdown, methodology, SQL mart design, ML metrics
│   │
│   └── Card 2: WanderLust (Travel & Accommodation Marketplace)
│       ├── Tags: Node.js, Express, MongoDB Atlas, EJS, Cloudinary, Mapbox
│       ├── Highlights: MVC architecture, Session Auth, Geocoding, Reviews/Ratings
│       ├── Quick Links: [GitHub] [Live Demo / Code Walkthrough] [Case Study Deep-Dive]
│       └── Case Study Modal: Full architecture breakdown, REST endpoints, database schema
│
├── 5. INTERACTIVE DATA ANALYST SHOWCASE / PLAYGROUND
│   ├── Interactive Tabbed Widget:
│   │   ├── Tab 1: SQL Data Mart Transformation Preview (Raw -> Staging -> Marts)
│   │   ├── Tab 2: RFM Segmentation & Cohort Matrix Visualizer
│   │   └── Tab 3: XGBoost Churn Feature Importance (TreeSHAP breakdown)
│
├── 6. EDUCATION & TIMELINE
│   ├── NIT Durgapur — B.Tech in Biotechnology (2023–2027)
│   └── Technical Growth Milestones & Academic Projects
│
├── 7. CONTACT & CONNECT
│   ├── Direct Contact Card (Email Quick-Copy, LinkedIn, GitHub)
│   ├── Interactive Message Form / Quick Reach
│   └── Resume PDF Download with Preview
│
└── FOOTER
    ├── Colophon, Copyright, Version Tag, Built with React & TypeScript
```

---

## 4. Detailed Workspace Folder Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml                 # Automated build and typecheck
├── public/
│   ├── favicon.svg                # Custom branded SVG favicon
│   ├── Md_Zaid_Haque_Resume.pdf    # Resume PDF asset (or placeholder document)
│   └── assets/                    # Project screenshots and diagrams
├── src/
│   ├── assets/                    # Static UI icons / images
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx         # Premium button variants (primary, secondary, glow, ghost)
│   │   │   ├── Badge.tsx          # Status and technology pill badges
│   │   │   ├── Card.tsx           # Glassmorphic obsidian cards
│   │   │   ├── Modal.tsx          # Accessible case study modal / drawer
│   │   │   └── SectionHeading.tsx # Uniform section header with gradient subtitle
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Sticky navigation with scroll spy & mobile menu
│   │   │   └── Footer.tsx         # Global footer with live metadata
│   │   ├── sections/
│   │   │   ├── Hero.tsx           # High-impact hero section with live status badge
│   │   │   ├── About.tsx          # Academic background & philosophy
│   │   │   ├── Skills.tsx         # Filterable skills matrix
│   │   │   ├── Projects.tsx       # Flagship case studies with deep-dive modal triggers
│   │   │   ├── Showcase.tsx       # Interactive SQL & Analytics visualizer
│   │   │   ├── Education.tsx      # NIT Durgapur timeline & milestones
│   │   │   └── Contact.tsx        # Contact channels, copyable email, resume CTA
│   │   └── case-studies/
│   │       ├── Customer360Modal.tsx # Full analytical breakdown for Customer360
│   │       └── WanderLustModal.tsx  # Full architectural breakdown for WanderLust
│   ├── data/
│   │   ├── profile.ts             # Single source of truth for personal facts & links
│   │   ├── skills.ts              # Categorized skills data
│   │   ├── projects.ts            # Detailed project specs & case study content
│   │   └── timeline.ts            # Education & milestone items
│   ├── styles/
│   │   ├── variables.css          # Design tokens (colors, typography, shadows, transitions)
│   │   ├── base.css               # Reset, typography, smooth scroll, custom scrollbar
│   │   ├── components.css         # Glassmorphism, buttons, cards, animations
│   │   └── index.css              # Global style aggregator
│   ├── utils/
│   │   ├── apiCheck.ts            # Live health checker for Render backend
│   │   └── analytics.ts          # Safe interaction tracking / helper utilities
│   ├── App.tsx                    # Main layout coordinator
│   ├── main.tsx                   # React root entry point
│   └── vite-env.d.ts
├── .gitignore
├── CONTENT_INVENTORY.md           # Factual data registry
├── PROJECT_PLAN.md                # This master plan
├── index.html                     # SEO optimized HTML entry with metadata & OpenGraph
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript compiler configuration
├── tsconfig.node.json
└── vite.config.ts                 # Vite build setup
```

---

## 5. Development Phases

### Phase 1: Environment & Project Scaffolding
* Initialize Vite + React + TypeScript in workspace.
* Configure `tsconfig.json`, `vite.config.ts`, `.gitignore`.
* Install essential lightweight dependencies (`lucide-react`).
* Set up global CSS tokens (`variables.css`, `base.css`, `components.css`).

### Phase 2: Design System & Core Shell
* Build foundational components: `Navbar`, `Footer`, `Button`, `Badge`, `Card`, `SectionHeading`.
* Implement sticky glassmorphic navigation with mobile drawer and scroll-spy.
* Establish responsive layout grid and high-end obsidian dark theme aesthetics.

### Phase 3: Core Sections & Data Binding
* **Hero Section**: Dynamic intro, floating availability badge, role highlights, key stats.
* **About Section**: NIT Durgapur B.Tech Biotechnology context, transition to data analytics and software development.
* **Skills Matrix**: Tabbed interactive matrix with categorization (Data/BI, Software, Cloud/Tools).
* **Education & Timeline**: NIT Durgapur milestones and achievements.

### Phase 4: Project Showcase & Deep-Dive Case Study Modals
* **Customer360 Case Study Card & Modal**:
  * Live Render status badge with dynamic ping.
  * Deep-dive breakdown: 1,500 Customer Cohorts, RFM, XGBoost + TreeSHAP, dbt Marts, Power BI Star Schema.
  * Direct links to frontend, backend API, API docs, and GitHub repository.
* **WanderLust Case Study Card & Modal**:
  * Architecture breakdown: Node/Express MVC, MongoDB Atlas, Mapbox geocoding, Cloudinary media pipeline, Session Auth.
  * Direct links to repository and live demo.
* **Interactive Analytics Playground**: SQL Marts and RFM Matrix visualizer.

### Phase 5: Contact, Resume & SEO Optimization
* Contact card with 1-click email copy, LinkedIn/GitHub external links.
* Resume download trigger and preview modal.
* Complete SEO meta tags, OpenGraph tags, semantic HTML tags, and schema.org structured data.

### Phase 6: Testing, Performance & Cross-Device Validation
* Type checking (`tsc --noEmit`) and production build verification (`npm run build`).
* Cross-device responsive testing (Mobile 375px, Tablet 768px, Laptop 1280px, Desktop 1920px).
* Lighthouse audit (Performance, Accessibility, Best Practices, SEO).

---

## 6. Quality Assurance & Verification Criteria

| Category | Target Metric | Verification Method |
| :--- | :--- | :--- |
| **Type Safety** | 0 TypeScript Errors | `npm run tsc` / `npm run build` |
| **Performance** | < 1.0s First Contentful Paint | Chrome DevTools Lighthouse |
| **Responsiveness** | 100% fluid across 320px to 4K | Browser Subagent / Viewport checks |
| **Links & Deployments** | 100% working URLs for Customer360 | Automated HTTP ping & verified links |
| **Accessibility** | WCAG 2.1 AA Compliance | Contrast check & keyboard navigability |
| **Content Integrity** | Zero fabricated metrics/history | Strict adherence to `CONTENT_INVENTORY.md` |
