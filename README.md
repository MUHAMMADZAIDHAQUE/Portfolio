# Md Zaid Haque — Personal Portfolio & Technical Case Studies

[![Production Build](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)]()
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)]()
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)]()

> **"I turn complex data into clear decisions."**  
> A personal portfolio and technical case-study platform engineered for **Md Zaid Haque** — Data Analyst and Software Developer at NIT Durgapur (2023–2027).  
> **Live Production URL:** [https://portfolio-one-zeta-jr00f93w6l.vercel.app](https://portfolio-one-zeta-jr00f93w6l.vercel.app/)


---

## 🌟 Overview & Design Identity

The portfolio combines the visual design language of a **premium dark editorial publication** with a **high-end customer analytics SaaS platform**. Built from the ground up using **React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion**, it features zero generic templates, pure custom components, verified project metrics, and complete WCAG 2.1 AAA accessibility.

### Design System Highlights
- **Curated Color Palette**: Obsidian Background (`#08090B`), Charcoal Surface (`#121419`), Elevated (`#191C22`), Border (`#2A2D35`), Electric Lime Accent (`#C5FF4A`), Primary Text (`#E7E9ED`), Muted Text (`#9297A2`).
- **Typography Hierarchy**: Space Grotesk & Sora for bold structural headlines, Inter for readable body text, and JetBrains Mono for data metrics and code blocks.
- **Dynamic Interaction System**: Staggered hero entrance, animated data network SVG, animated cohort/TreeSHAP progress bars, smooth section reveals, and persistent back-to-top navigation.

---

## 🚀 Featured Projects & Case Studies

### 1. [Customer360 — AI-Powered Customer Intelligence & Retention Platform](https://github.com/MUHAMMADZAIDHAQUE/Customer360)
- **Domain**: B2B SaaS Customer Analytics & Predictive Machine Learning
- **Tech Stack**: Python 3.11, PostgreSQL 16, dbt Core, DuckDB, Power BI, DAX, Scikit-Learn, XGBoost, TreeSHAP, FastAPI, React, Docker, Render Cloud.
- **Key Metrics**:
  - Analyzed **1,500 customer records** ($1.36M ARR).
  - Calculated **64.93% retention rate** across **31 signup cohorts**.
  - Quantified **$207,756 in Revenue at Risk** across 167 high-risk accounts.
  - Trained an XGBoost classifier with **0.999 ROC-AUC / 91.4% accuracy** with explainable TreeSHAP feature attributions.
  - Formulated **7 formal statistical hypothesis tests** (Welch’s t-test, Mann-Whitney U, Chi-Square).
  - Live Deployments: [Frontend Application](https://customer360-frontend.onrender.com) • [FastAPI OpenAPI Docs](https://customer360-api-u4k0.onrender.com/docs) • [API Health Check](https://customer360-api-u4k0.onrender.com/health)

### 2. [WanderLust — Travel & Vacation Accommodation Marketplace](https://github.com/MUHAMMADZAIDHAQUE)
- **Domain**: Full-Stack Web Application & Geospatial Discovery
- **Tech Stack**: Node.js, Express.js, MongoDB Atlas, Mongoose ODM, JavaScript (ES6+), EJS, Cloudinary API, Mapbox SDK, Passport.js, Bootstrap.
- **Key Features**:
  - Model-View-Controller (MVC) architectural pattern with RESTful routing (9 endpoints).
  - Mapbox forward geocoding converting text addresses to interactive GeoJSON map markers.
  - Cloudinary automated image optimization pipeline with CDN thumbnail delivery.
  - Multi-tier session authentication with Passport.js and defensive listing ownership middleware.

---

## 📁 Repository Structure

```
portfolio/
├── .github/                     # GitHub workflows and CI configurations
├── public/                      # Static web assets and documents
│   ├── assets/
│   │   └── projects/            # High-resolution project screenshots
│   │       ├── customer360/     # Customer360 dashboard previews
│   │       └── wanderlust/      # WanderLust application previews
│   ├── favicon.svg              # Brand vector monogram icon
│   └── Md_Zaid_Haque_Resume.pdf # Verified downloadable ATS resume
├── src/
│   ├── components/
│   │   ├── case-studies/        # Case study & resume interactive modals
│   │   ├── case-study/          # Customer360 & WanderLust specific interactive viewers
│   │   ├── common/              # BackToTop, ScrollProgress global utilities
│   │   ├── illustrations/       # Hero animated SVG customer network visual
│   │   ├── sections/            # Hero, Featured Work, About, Skills, Experience, Contact
│   │   └── ui/                  # Reusable Design System components (Button, Card, Badge, Tag, etc.)
│   ├── data/                    # Centralized, single-source-of-truth verified data files
│   │   ├── customer360Data.ts   # Exact metrics, RFM segments, cohort tables, hypothesis tests
│   │   ├── experience.ts        # NIT Durgapur, E-Cell, CCA, RECstacy, Inter-NIT Cricket
│   │   ├── profile.ts           # Bio, social links, contact info, status
│   │   ├── projects.ts          # Core case studies metadata and architecture
│   │   ├── skills.ts            # 28 verified skills across 7 disciplines
│   │   └── wanderlustData.ts    # REST route catalog, schemas, gallery, challenges
│   ├── pages/                   # Route views (HomePage, Customer360, Wanderlust, About, Skills, Contact, StyleGuide)
│   ├── styles/                  # Tailwind CSS, tokens.css, base.css, custom utilities
│   ├── utils/                   # ClassName merger (cn.ts) helper
│   ├── App.tsx                  # Main Router with React.lazy code-splitting
│   └── main.tsx                 # Application entry point
├── ASSET_AUDIT.md               # Phase 8 verified asset and metrics audit report
├── CONTENT_INVENTORY.md         # Content inventory and source data mapping
├── DESIGN_SYSTEM.md             # Complete design tokens and UI architecture spec
├── GITHUB_RELEASE_CHECKLIST.md  # Production pre-flight and GitHub release checklist
├── PROJECT_PLAN.md              # 10-phase engineering execution plan
├── QA_REPORT.md                 # 48-test quality assurance and performance report
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Extended design tokens and colors
├── tsconfig.json                # Strict TypeScript configuration
└── vite.config.ts               # Vite configuration with Rollup chunk splitting
```

---

## 🛠️ Local Development Setup

### Prerequisites
- **Node.js**: `v18.0.0` or higher (tested with `v24.x` and `v20.x`)
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### 1. Clone the Repository
```bash
git clone https://github.com/MUHAMMADZAIDHAQUE/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Run TypeScript Typechecking
```bash
npx tsc --noEmit
```

### 5. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 6. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

This application is configured for single-click deployment to **Vercel**, **Netlify**, **Render**, or **GitHub Pages**. For detailed step-by-step guidance, refer to the [Deployment Guide](file:///Users/zaidhaque/Desktop/portfolio/DEPLOYMENT_GUIDE.md).

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Framework Preset: **Vite** (auto-detected via [`vercel.json`](file:///Users/zaidhaque/Desktop/portfolio/vercel.json)).
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

### Deploy to Netlify
1. Connect your GitHub repository on [Netlify](https://netlify.com).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. The included [`public/_redirects`](file:///Users/zaidhaque/Desktop/portfolio/public/_redirects) file automatically manages client-side SPA routing.


---

## 👤 Author & Contact

**Md Zaid Haque**  
- **Email**: [mdzaidhaque.dev@gmail.com](mailto:mdzaidhaque.dev@gmail.com)  
- **GitHub**: [@MUHAMMADZAIDHAQUE](https://github.com/MUHAMMADZAIDHAQUE)  
- **LinkedIn**: [linkedin.com/in/md-zaid-haque](https://www.linkedin.com/in/md-zaid-haque)  
- **Education**: B.Tech in Biotechnology, National Institute of Technology (NIT) Durgapur (2023–2027)  
- **Primary Roles**: Entry-Level Data Analyst • Software Developer • Analytics Engineer

---

## 📄 License

This project is open source and available under the [GNU General Public License v3.0 (GPL-3.0)](file:///Users/zaidhaque/Desktop/portfolio/LICENSE).

