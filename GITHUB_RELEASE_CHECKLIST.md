# GitHub Publication & Release Checklist (Phase 10)

**Repository:** `portfolio`  
**Owner:** Md Zaid Haque ([@MUHAMMADZAIDHAQUE](https://github.com/MUHAMMADZAIDHAQUE))  
**Target Repository Name:** `portfolio` or `mdzaidhaque-portfolio`  
**Release Readiness:** **READY FOR PUBLICATION**

---

## 1. Pre-Flight Repository Sanitation

| Checklist Item | Description | Status |
| :--- | :--- | :--- |
| **No Secret / Key Leakage** | Repository scanned with regex for API keys, passwords, tokens, private keys. | **PASSED (0 Secrets)** |
| **Clean `.gitignore`** | Excludes `node_modules`, `dist`, `.env*`, `.DS_Store`, and temporary files. | **PASSED** |
| **No Temporary / Debug Files** | Cleaned up all `.DS_Store`, scratch files, and debug console logs. | **PASSED** |
| **Downloadable Resume Verified** | `public/Md_Zaid_Haque_Resume.pdf` verified and linked. | **PASSED** |
| **Production Build Verified** | `npx tsc --noEmit && npm run build` compiles with 0 errors. | **PASSED (1.61s)** |
| **Documentation Complete** | `README.md`, `ASSET_AUDIT.md`, `QA_REPORT.md`, `PROJECT_PLAN.md`. | **PASSED** |

---

## 2. Step-by-Step GitHub Publication Guide

When you are ready to publish the repository to your GitHub account (`MUHAMMADZAIDHAQUE`), execute the following commands in your terminal:

### Step 1: Verify Git Status
```bash
cd /Users/zaidhaque/Desktop/portfolio
git status
```

### Step 2: Stage and Commit the Initial Production Release
```bash
git add .
git commit -m "feat: initial production release of personal portfolio & technical case studies"
```

### Step 3: Create GitHub Remote Repository
You can create the remote repository using either the **GitHub CLI (`gh`)** or the **GitHub Web Interface**:

#### Option A: Using GitHub CLI (Fastest)
```bash
# Create a public repository on your GitHub account and push directly
gh repo create MUHAMMADZAIDHAQUE/portfolio --public --source=. --remote=origin --push
```

#### Option B: Using GitHub Web UI
1. Go to [https://github.com/new](https://github.com/new).
2. Set **Repository name**: `portfolio`.
3. Set **Visibility**: `Public`.
4. Leave "Initialize this repository with a README" **unchecked** (we already have our comprehensive README).
5. Click **Create repository**.
6. Run the following terminal commands to link and push:
```bash
git branch -M main
git remote add origin https://github.com/MUHAMMADZAIDHAQUE/portfolio.git
git push -u origin main
```

---

## 3. Recommended Post-Push Actions

1. **Deploy to Vercel or Netlify**:
   - Connect `https://github.com/MUHAMMADZAIDHAQUE/portfolio` on [Vercel](https://vercel.com/new).
   - Set Framework: `Vite`, Root: `./`, Build: `npm run build`, Output: `dist`.
   - Automatic continuous deployment on every `git push` to `main`.
2. **Update GitHub About Section**:
   - Add description: *"Personal Portfolio & Technical Case Studies — Data Analyst & Software Developer (NIT Durgapur)"*.
   - Add topics: `portfolio`, `data-analytics`, `machine-learning`, `react`, `typescript`, `vite`, `tailwindcss`, `dbt`, `power-bi`, `xgboost`.
   - Set Website URL to your live Vercel/Netlify link.
