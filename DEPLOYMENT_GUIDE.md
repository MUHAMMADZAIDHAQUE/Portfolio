**Project:** Md Zaid Haque — Personal Portfolio & Technical Case Studies  
**Owner:** Md Zaid Haque ([@MUHAMMADZAIDHAQUE](https://github.com/MUHAMMADZAIDHAQUE))  
**Target Platform:** [Vercel](https://vercel.com) (Global Edge Network)  
**Production URL:** [https://portfolio-one-zeta-jr00f93w6l.vercel.app](https://portfolio-one-zeta-jr00f93w6l.vercel.app/)  
**Status:** **LIVE & VERIFIED**


---

## 1. Deployment Architecture Overview

This portfolio is built with **React 18, TypeScript, Tailwind CSS, Framer Motion, and Vite 6**. It is optimized as a static single-page application (SPA) with automated client-side routing, asset compression, and HTTP cache headers.

### Deployment Specifications
| Setting | Production Value | Note |
| :--- | :--- | :--- |
| **Framework Preset** | `Vite` | Auto-detected by Vercel |
| **Build Command** | `npm run build` | Compiles TypeScript (`tsc`) and bundles with Rollup |
| **Output Directory** | `dist` | Production assets location |
| **Install Command** | `npm install` | Standard package resolution |
| **Node.js Version** | `18.x` / `20.x` (LTS) | Recommended runtime |
| **Client Routing** | SPA Rewrites enabled | Handled via `vercel.json` and `public/_redirects` |

---

## 2. Option A: GitHub-to-Vercel Integration (Recommended)

Connecting your GitHub repository (`MUHAMMADZAIDHAQUE/portfolio`) to Vercel provides **automatic Continuous Deployment (CI/CD)** on every `git push` to `main`, along with automatic preview deployments for pull requests.

### Step-by-Step GitHub Import:

1. **Push your code to GitHub** (following [`GITHUB_RELEASE_CHECKLIST.md`](./GITHUB_RELEASE_CHECKLIST.md)):
   ```bash
   git add .
   git commit -m "feat: initial production release of personal portfolio & technical case studies"
   git branch -M main
   git remote add origin https://github.com/MUHAMMADZAIDHAQUE/portfolio.git
   git push -u origin main
   ```

2. **Log in to Vercel**:
   - Navigate to [vercel.com](https://vercel.com) and log in with your GitHub account.

3. **Import the Project**:
   - Click the **"Add New..."** button in the top right and select **"Project"**.
   - Under **"Import Git Repository"**, select **`MUHAMMADZAIDHAQUE/portfolio`**.

4. **Configure Project Settings**:
   - **Project Name**: `mdzaidhaque-portfolio` (or `portfolio`)
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (default)
   - **Build and Output Settings**:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

5. **Configure Environment Variables (Optional)**:
   - If customizing default endpoints, add the variables documented in [Section 4](#4-environment-variables).
   - If left empty, the application uses built-in production fallbacks.

6. **Deploy**:
   - Click the **"Deploy"** button.
   - Vercel will clone the repo, run the build script (`npx tsc && vite build`), and publish the site to a global CDN within 30–45 seconds.
   - You will be assigned a live production URL (e.g., `https://mdzaidhaque-portfolio.vercel.app`).

---

## 3. Option B: Direct Deployment via Vercel CLI

If you prefer deploying from your terminal using the Vercel CLI:

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Authenticate with Vercel**:
   ```bash
   vercel login
   ```
   *(Follow the browser prompt to log in with your Vercel/GitHub account).*

3. **Deploy to Preview / Staging**:
   ```bash
   vercel
   ```
   - Confirm project root (`./`).
   - Confirm framework preset (`Vite`).

4. **Deploy Directly to Production**:
   ```bash
   vercel --prod
   ```
   - Vercel will output your live production URL directly in the terminal.

---

## 4. Environment Variables

The project includes a clean [`.env.example`](./.env.example) template. No secrets or private tokens are stored in the client codebase.

| Variable | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `VITE_APP_TITLE` | `string` | `Md Zaid Haque — Portfolio` | Browser tab title prefix |
| `VITE_CUSTOMER360_API_URL` | `string` | `https://customer360-api-u4k0.onrender.com` | Live FastAPI backend endpoint for health check badge |
| `VITE_RESUME_URL` | `string` | `/Md_Zaid_Haque_Resume.pdf` | ATS resume PDF path in `public/` |
| `VITE_SITE_URL` | `string` | `https://mdzaidhaque.dev` | Canonical website domain for OpenGraph meta tags |

> [!NOTE]
> All client-accessible environment variables in Vite must be prefixed with `VITE_`.

---

## 5. Routing & SPA Configuration

Because this application uses React client-side routing (`/work/customer360`, `/work/wanderlust`, `/about`, `/skills`, `/contact`, `/style-guide`), direct URLs and browser refreshes must route to `/index.html`.

This is pre-configured in [`vercel.json`](./vercel.json):
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

An additional [`public/_redirects`](./public/_redirects) file is included for multi-cloud parity.

---

## 6. Custom Domain Configuration (Optional)

To link a custom domain (such as `zaidhaque.dev` or `mdzaidhaque.com`):

1. Go to your Vercel Dashboard → Select `portfolio` → **Settings** → **Domains**.
2. Enter your custom domain and click **Add**.
3. Configure your DNS provider with the records provided by Vercel:
   - **Apex Domain (`@`)**: `A` record pointing to `76.76.21.21`.
   - **Subdomain (`www`)**: `CNAME` record pointing to `cname.vercel-dns.com`.
4. Vercel will automatically provision a free SSL/TLS certificate within 5 minutes.

---

## 7. Redeployment & Rollback Procedures

- **Continuous Deployment**: Every commit pushed to `main` triggers a zero-downtime deployment.
- **Instant Rollback**: If an issue arises, navigate to **Deployments** in the Vercel dashboard, locate the last healthy build, and click **"Promote to Production"**.

---

## 8. Verification Matrix

- [x] TypeScript compilation: `npx tsc --noEmit` (**0 errors**)
- [x] Production bundle: `npm run build` (**1.64s**)
- [x] SPA Rewrites: Verified in `vercel.json` & `public/_redirects`
- [x] Secrets Scan: 0 private keys or tokens
- [x] Static Assets: Resume PDF, SVG favicon, project images bundled into `dist/`
