# Md Zaid Haque — Portfolio Design System (v1.0.0)

**Identity**: Premium Dark Editorial Portfolio & Customer Analytics SaaS  
**Architect**: Md Zaid Haque  
**Target Domains**: Data Analytics (Primary), Software Engineering (Secondary)  
**Last Updated**: September 28, 2026  

---

## 1. Design Philosophy & Aesthetic Principles

This design system combines the sophistication of a high-end editorial publication with the data-dense precision of an enterprise customer analytics SaaS platform (such as Customer360).

### Core Pillars
1. **Ultra-Dark Obsidian Foundation**: Eliminates eye fatigue while creating high contrast against analytical charts and metrics (`#08090B` canvas, `#121419` surface, `#191C22` elevated).
2. **Restrained Electric Lime Accent**: `#C5FF4A` is applied intentionally to primary calls-to-action, active indicators, and high-priority metrics. It is never used as overwhelming decoration.
3. **Tri-Typographic Engine**:
   - **Display / Headings**: `Space Grotesk` / `Sora` for authoritative, modern character.
   - **Body & Editorial**: `Inter` for optimal readability across device screens.
   - **Metrics & Code**: `JetBrains Mono` for tabular figures, SQL queries, dbt models, and system metadata.
4. **Architectural Grid & Structure**: Clean 1px `#2A2D35` borders, subtle 32px background grid texture, and intentional asymmetrical layouts that convey rigorous engineering discipline.

---

## 2. Color Palette & Token Hierarchy

| Token Name | CSS Custom Property | Hex / Value | Tailwind Class | Semantic Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Background Primary** | `--bg-primary` | `#08090B` | `bg-background` | Global canvas & deep negative space |
| **Surface Card** | `--surface-card` | `#121419` | `bg-surface` | Primary card & section background |
| **Elevated Surface** | `--surface-elevated` | `#191C22` | `bg-surface-elevated` | Popovers, modal drawers, hover tiers |
| **Border Subtle** | `--border-subtle` | `#2A2D35` | `border-border-subtle` | Structural 1px dividers and outlines |
| **Border Active** | `--border-active` | `#3F4450` | `border-border-active` | Hover & focus borders |
| **Primary Accent** | `--accent-lime` | `#C5FF4A` | `text-accent-lime` / `bg-accent-lime` | Primary CTAs, active pills, live highlights |
| **Accent Muted** | `--accent-lime-muted`| `rgba(197, 255, 74, 0.12)` | `bg-accent-muted` | Badge backgrounds, subtle glow tint |
| **Text Primary** | `--text-primary` | `#E7E9ED` | `text-content-primary` | Headings, active values, high-contrast text |
| **Text Secondary** | `--text-secondary` | `#B0B5C1` | `text-content-secondary` | Body paragraphs, bullet items |
| **Text Muted** | `--text-muted` | `#9297A2` | `text-content-muted` | Captions, dates, metadata labels |
| **Status Success** | `--status-success` | `#10B981` | `text-status-success` | Live deployments, 90%+ model accuracy |
| **Status Warning** | `--status-warning` | `#F59E0B` | `text-status-warning` | At-risk segments, warnings |
| **Status Danger** | `--status-danger` | `#EF4444` | `text-status-danger` | High-churn customer flags |

---

## 3. Typography Scale & Hierarchy

| Element | Font Family | Size (Desktop / Mobile) | Line Height | Tracking | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | Space Grotesk | 60px / 36px (`text-5xl lg:text-6xl`) | 1.05 | `-0.05em` | Bold (700) |
| **Section H2** | Space Grotesk | 42px / 28px (`text-3xl lg:text-4xl`) | 1.15 | `-0.03em` | SemiBold (600) |
| **Card Title H3**| Space Grotesk | 24px / 20px (`text-xl lg:text-2xl`) | 1.25 | `-0.02em` | SemiBold (600) |
| **Lead Paragraph**| Inter | 18px / 16px (`text-lg`) | 1.65 | `normal` | Regular (400) |
| **Body Text** | Inter | 15px / 14px (`text-sm sm:text-base`) | 1.60 | `normal` | Regular (400) / Medium (500) |
| **KPI Metrics** | Space Grotesk / Mono | 36px / 28px (`text-3xl sm:text-4xl`) | 1.10 | `-0.03em` | Bold (700) |
| **Kickers & Tags**| JetBrains Mono | 12px / 11px (`text-xs`) | 1.00 | `+0.05em` | SemiBold (600) |
| **Code & SQL** | JetBrains Mono | 13px / 12px (`text-xs sm:text-sm`) | 1.60 | `normal` | Regular (400) |

---

## 4. Reusable Component Inventory

### 1. Button (`src/components/ui/Button.tsx`)
* **Variants**:
  * `primary`: Electric Lime `#C5FF4A` background with dark `#08090B` text.
  * `secondary`: Dark surface `#121419` with `#2A2D35` border and `#E7E9ED` text.
  * `outline`: Transparent with hover border `#C5FF4A` and hover text `#C5FF4A`.
  * `ghost`: Minimalist text button with hover highlight.
  * `lime-ghost`: Electric lime text with subtle lime tint hover.
* **Sizes**: `sm` (h-8), `md` (h-10), `lg` (h-12), `icon` (h-10 w-10).
* **States**: Normal, Hover, Active (scale 0.98), Disabled (opacity 50), Loading (spinner).

### 2. Badge & Tag (`src/components/ui/Badge.tsx`, `Tag.tsx`)
* **Badges**: Monospace status pills (`live`, `lime`, `neutral`, `elevated`, `success`, `warning`, `danger`). Live variant includes a pulsing CSS green radar ring.
* **Tags**: Technology chips (e.g. `dbt`, `PostgreSQL`, `XGBoost`, `FastAPI`) with active toggle and interactive hover support.

### 3. Card (`src/components/ui/Card.tsx`)
* **Variants**:
  * `surface`: Default `#121419` background with `#2A2D35` border.
  * `elevated`: `#191C22` background with elevated shadow.
  * `interactive`: Hover lift (`translate-y-[-2px]`) and lime border highlight.
  * `editorial`: Notched lime accent marker (`before:w-12 before:bg-accent-lime`) on the top border.

### 4. SectionHeader (`src/components/ui/SectionHeader.tsx`)
* Standardized editorial section layout featuring:
  * Category kicker with decorative accent line (`// 01. CORE SPECIALIZATION`).
  * High-contrast Space Grotesk headline.
  * Explanatory subtitle paragraph.
  * Optional right-aligned CTA slot.

### 5. MetricCard (`src/components/ui/MetricCard.tsx`)
* High-density KPI presentation component:
  * Upper metadata label in JetBrains Mono.
  * Prominent numeric display.
  * Contextual badge (e.g. `ROC-AUC 0.88`, `PostgreSQL`).
  * Bottom explanatory subtext.

### 6. CodeSnippet (`src/components/ui/CodeSnippet.tsx`)
* Terminal/Code block with header bar, copy-to-clipboard button with state feedback, line numbers, and dark syntax container.

### 7. Navigation (`src/components/ui/Navigation.tsx`)
* Sticky top bar with glassmorphic backdrop filter (`bg-background/90 backdrop-blur-md`).
* Brand logo with lime badge dot.
* Responsive desktop nav links and mobile slide-down menu.
* Integrated live status badge ("Open to Analyst & Dev Roles").

---

## 5. Spacing Scale & Breakpoints

### Spacing Scale
* `4px` (`--space-1` / `p-1`) — Micro gaps & badge padding
* `8px` (`--space-2` / `p-2`) — Icon offsets & tight chips
* `12px` (`--space-3` / `p-3`) — Small button padding & card inner items
* `16px` (`--space-4` / `p-4`) — Standard padding & card gutters
* `24px` (`--space-6` / `p-6`) — Card padding & component separation
* `32px` (`--space-8` / `p-8`) — Section block margins & large cards
* `48px` (`--space-12` / `py-12`) — Medium section padding
* `64px` (`--space-16` / `py-16`) — Standard mobile section separation
* `96px`–`128px` (`--space-28`–`--space-32` / `py-24 sm:py-32`) — Editorial desktop section rhythm

### Responsive Breakpoints

| Breakpoint | Min-Width | Layout Target | Max Container |
| :--- | :--- | :--- | :--- |
| `sm` | 640px | Mobile Landscape / Large Phones | 100% (-32px padding) |
| `md` | 768px | Tablets / Dual Column Split | 720px |
| `lg` | 1024px | Laptops & Small Desktops | 960px |
| `xl` | 1280px | Standard Workstations | 1200px |
| `2xl` | 1536px | Ultra-Wide / 4K Monitors | 1280px (Centered) |

---

## 6. Prohibited Anti-Patterns

1. ❌ **No Excessive Glassmorphism**: Avoid heavy layered blur filters that degrade rendering performance and reduce contrast.
2. ❌ **No Giant Glowing Gradient Blobs**: Keep the background deep and solid with disciplined 1px subtle grid textures.
3. ❌ **No Distracting Cursor Glow Trails**: Focus entirely on crisp, responsive hover feedback on interactive elements.
4. ❌ **No Low-Contrast Text**: Secondary and muted text must maintain at least a 4.5:1 contrast ratio against card backgrounds.
5. ❌ **No Generic Template Sections**: Every section layout is intentionally asymmetrical and purpose-built for data analytics and software engineering proof.
