import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Tag } from '../components/ui/Tag';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';
import { MetricCard } from '../components/ui/MetricCard';
import { CodeSnippet } from '../components/ui/CodeSnippet';
import {
  ArrowRight,
  Database,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Zap,
  TrendingUp,
  Terminal,
} from 'lucide-react';

export const StyleGuidePage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeTab, setActiveTab] = useState<'tokens' | 'components' | 'analytics' | 'typography'>('tokens');

  const sampleSql = `-- dbt Mart: mart_customer_360.sql
WITH customer_activity AS (
  SELECT
    c.customer_id,
    c.account_created_at,
    COUNT(DISTINCT t.transaction_id) AS total_orders,
    SUM(t.amount_usd) AS total_revenue,
    MAX(t.transaction_date) AS last_active_date,
    CURRENT_DATE - MAX(t.transaction_date) AS recency_days
  FROM {{ ref('stg_customers') }} c
  LEFT JOIN {{ ref('stg_transactions') }} t USING (customer_id)
  GROUP BY 1, 2
)
SELECT 
  customer_id,
  recency_days,
  total_orders,
  total_revenue,
  CASE 
    WHEN recency_days <= 30 AND total_orders >= 5 THEN 'High-Value Active'
    WHEN recency_days > 90 THEN 'At-Risk / Churned'
    ELSE 'Core Retained'
  END AS rfm_segment
FROM customer_activity;`;

  return (
    <div className="min-h-screen bg-background text-content-primary pb-24">
      {/* Top Banner / System Metadata */}
      <div className="border-b border-border-subtle bg-surface-muted py-3 px-4 sm:px-8">
        <div className="layout-container flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-accent-lime font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              ZH DESIGN SYSTEM
            </span>
            <span className="text-content-subtle">|</span>
            <span className="text-content-secondary">v1.0.0 (Phase 2 Master)</span>
          </div>
          <div className="flex items-center gap-4 text-content-muted">
            <span>Theme: Dark Editorial SaaS</span>
            <span className="hidden sm:inline">Accent: #C5FF4A (Electric Lime)</span>
            <Badge variant="live" size="xs">System Active</Badge>
          </div>
        </div>
      </div>

      <main className="layout-container pt-12 sm:pt-16 space-y-20">
        {/* Style Guide Intro */}
        <div className="border-b border-border-subtle pb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
              // SPECIFICATION & LIVING PATTERN LIBRARY
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-content-primary tracking-tight">
            Design Tokens & UI System
          </h1>
          <p className="mt-4 text-content-muted text-lg max-w-3xl leading-relaxed">
            A high-contrast, editorial design language engineered specifically for Md Zaid Haque's portfolio.
            Merges the precision of customer analytics dashboards with sleek, modern dark-mode aesthetics.
          </p>

          {/* Navigation Pill Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-8">
            {[
              { id: 'tokens', label: '01. Color & Tokens' },
              { id: 'typography', label: '02. Typography & Scale' },
              { id: 'components', label: '03. Core Components' },
              { id: 'analytics', label: '04. SaaS Analytics & Metrics' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-mono rounded-md border transition-all ${
                  activeTab === tab.id
                    ? 'bg-accent-lime text-background border-accent-lime font-semibold shadow-lime-sm'
                    : 'bg-surface-card text-content-secondary border-border-subtle hover:border-border-active'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 1: COLOR PALETTE & TOKENS */}
        {(activeTab === 'tokens' || activeTab === 'components' || activeTab === 'typography' || activeTab === 'analytics') && (
          <section id="colors" className="space-y-8">
            <SectionHeader
              kicker="01. PALETTE & CHROMATICS"
              title="Color Tokens & Contrast Ratio"
              description="Engineered strictly to specifications. High-contrast, restrained electric lime, deep obsidian surfaces, and WCAG AA verified text tokens."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Token 1 */}
              <div className="p-4 rounded-lg bg-surface-card border border-border-subtle space-y-3">
                <div className="h-20 rounded bg-background border border-border-subtle flex items-center justify-center">
                  <span className="font-mono text-xs text-content-muted">#08090B</span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-content-primary text-sm">Background</div>
                  <div className="font-mono text-xs text-content-muted mt-0.5">--bg-primary / #08090B</div>
                  <div className="text-xs text-content-secondary mt-2">Deep void canvas for editorial contrast</div>
                </div>
              </div>

              {/* Token 2 */}
              <div className="p-4 rounded-lg bg-surface-card border border-border-subtle space-y-3">
                <div className="h-20 rounded bg-surface border border-border-subtle flex items-center justify-center">
                  <span className="font-mono text-xs text-content-muted">#121419</span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-content-primary text-sm">Surface Card</div>
                  <div className="font-mono text-xs text-content-muted mt-0.5">--surface-card / #121419</div>
                  <div className="text-xs text-content-secondary mt-2">Primary card and container background</div>
                </div>
              </div>

              {/* Token 3 */}
              <div className="p-4 rounded-lg bg-surface-card border border-border-subtle space-y-3">
                <div className="h-20 rounded bg-surface-elevated border border-border-subtle flex items-center justify-center">
                  <span className="font-mono text-xs text-content-muted">#191C22</span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-content-primary text-sm">Elevated Surface</div>
                  <div className="font-mono text-xs text-content-muted mt-0.5">--surface-elevated / #191C22</div>
                  <div className="text-xs text-content-secondary mt-2">Dropdowns, hover states, modals</div>
                </div>
              </div>

              {/* Token 4: Primary Accent */}
              <div className="p-4 rounded-lg bg-surface-card border border-accent-lime/40 space-y-3">
                <div className="h-20 rounded bg-accent-lime flex items-center justify-center shadow-lime-sm">
                  <span className="font-mono text-xs text-background font-bold">#C5FF4A</span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-accent-lime text-sm flex items-center justify-between">
                    Primary Accent
                    <Badge variant="lime" size="xs">Brand</Badge>
                  </div>
                  <div className="font-mono text-xs text-content-muted mt-0.5">--accent-lime / #C5FF4A</div>
                  <div className="text-xs text-content-secondary mt-2">Electric lime for CTAs, active highlights & key data</div>
                </div>
              </div>

              {/* Token 5: Border */}
              <div className="p-4 rounded-lg bg-surface-card border border-border-subtle space-y-3">
                <div className="h-20 rounded bg-[#2A2D35] flex items-center justify-center">
                  <span className="font-mono text-xs text-content-primary">#2A2D35</span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-content-primary text-sm">Border Subtle</div>
                  <div className="font-mono text-xs text-content-muted mt-0.5">--border-subtle / #2A2D35</div>
                  <div className="text-xs text-content-secondary mt-2">Crisp structural dividers & outlines</div>
                </div>
              </div>

              {/* Token 6: Text Primary */}
              <div className="p-4 rounded-lg bg-surface-card border border-border-subtle space-y-3">
                <div className="h-20 rounded bg-surface-elevated border border-border-subtle flex items-center justify-center">
                  <span className="font-mono text-sm text-[#E7E9ED] font-semibold">#E7E9ED</span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-content-primary text-sm">Text Primary</div>
                  <div className="font-mono text-xs text-content-muted mt-0.5">--text-primary / #E7E9ED</div>
                  <div className="text-xs text-content-secondary mt-2">High-readability headers & primary copy</div>
                </div>
              </div>

              {/* Token 7: Text Muted */}
              <div className="p-4 rounded-lg bg-surface-card border border-border-subtle space-y-3">
                <div className="h-20 rounded bg-surface-elevated border border-border-subtle flex items-center justify-center">
                  <span className="font-mono text-sm text-[#9297A2]">#9297A2</span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-content-primary text-sm">Text Muted</div>
                  <div className="font-mono text-xs text-content-muted mt-0.5">--text-muted / #9297A2</div>
                  <div className="text-xs text-content-secondary mt-2">Descriptions, labels, secondary metadata</div>
                </div>
              </div>

              {/* Token 8: Status Palette */}
              <div className="p-4 rounded-lg bg-surface-card border border-border-subtle space-y-3">
                <div className="h-20 rounded bg-surface-elevated border border-border-subtle grid grid-cols-4 p-2 gap-1 items-center">
                  <div className="h-full rounded bg-emerald-500 flex items-center justify-center text-[10px] font-mono font-bold text-background">#10B</div>
                  <div className="h-full rounded bg-amber-500 flex items-center justify-center text-[10px] font-mono font-bold text-background">#F59</div>
                  <div className="h-full rounded bg-rose-500 flex items-center justify-center text-[10px] font-mono font-bold text-background">#EF4</div>
                  <div className="h-full rounded bg-sky-400 flex items-center justify-center text-[10px] font-mono font-bold text-background">#38B</div>
                </div>
                <div>
                  <div className="font-heading font-semibold text-content-primary text-sm">Functional Status</div>
                  <div className="font-mono text-xs text-content-muted mt-0.5">Success, Warning, Danger, Info</div>
                  <div className="text-xs text-content-secondary mt-2">Live badges, health metrics & alerts</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 2: TYPOGRAPHY */}
        <section id="typography" className="space-y-8 pt-8 border-t border-border-subtle">
          <SectionHeader
            kicker="02. TYPOGRAPHIC HIERARCHY"
            title="Space Grotesk, Inter & JetBrains Mono"
            description="Clear distinction between editorial headline personality, comfortable reading body text, and tabular monospace data presentation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Font Family 1 */}
            <Card variant="surface" padding="md" className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent-lime uppercase font-semibold">Headings & Titles</span>
                <Badge variant="neutral" size="xs">Space Grotesk</Badge>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-heading font-bold text-content-primary">
                  Customer Intelligence & ML
                </div>
                <div className="text-lg font-heading font-semibold text-content-secondary">
                  Cohort Retention & RFM Analytics
                </div>
                <p className="text-xs text-content-muted">
                  Used for H1–H4, hero headlines, project case study titles, and key numeric callouts.
                </p>
              </div>
            </Card>

            {/* Font Family 2 */}
            <Card variant="surface" padding="md" className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent-lime uppercase font-semibold">Body & Interface</span>
                <Badge variant="neutral" size="xs">Inter</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-base text-content-primary leading-relaxed">
                  Engineered dbt analytical transformation models to aggregate 1,500 customer records into Star Schema marts.
                </p>
                <p className="text-sm text-content-muted leading-relaxed">
                  Inter delivers optimal legibility across desktop and mobile screens with consistent letter-spacing.
                </p>
              </div>
            </Card>

            {/* Font Family 3 */}
            <Card variant="surface" padding="md" className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent-lime uppercase font-semibold">Data, Code & Metrics</span>
                <Badge variant="neutral" size="xs">JetBrains Mono</Badge>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-sm text-accent-lime">
                  SELECT COUNT(*) FROM mart_customers;
                </div>
                <div className="font-mono text-xs text-content-secondary">
                  Accuracy: 91.4% | ROC-AUC: 0.884 | SHAP Top: 'tenure'
                </div>
                <p className="text-xs text-content-muted">
                  Tabular numbers, query snippets, metadata labels, and system status indicators.
                </p>
              </div>
            </Card>
          </div>

          {/* Type Scale Demonstration */}
          <Card variant="elevated" padding="lg" className="space-y-6">
            <h3 className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
              // Scale Hierarchy Preview
            </h3>
            <div className="space-y-6 divide-y divide-border-subtle/50">
              <div className="pt-4 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-content-muted w-32 shrink-0">H1 Display / 48–60px</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-content-primary tracking-tight">
                  Understand Customers. Predict Churn.
                </h1>
              </div>
              <div className="pt-4 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-content-muted w-32 shrink-0">H2 Section / 36–48px</span>
                <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-content-primary tracking-tight">
                  AI-Powered Customer Intelligence
                </h2>
              </div>
              <div className="pt-4 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-content-muted w-32 shrink-0">H3 Card / 24–30px</span>
                <h3 className="text-2xl font-heading font-medium text-content-primary">
                  1,500 Customer Cohort Survival Matrix
                </h3>
              </div>
              <div className="pt-4 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-content-muted w-32 shrink-0">Body Large / 18px</span>
                <p className="text-lg text-content-secondary leading-relaxed">
                  Transforming raw transaction logs into actionable customer retention strategies using dbt and XGBoost.
                </p>
              </div>
              <div className="pt-4 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-content-muted w-32 shrink-0">Body Standard / 14px</span>
                <p className="text-sm text-content-muted leading-relaxed">
                  B.Tech Biotechnology student at NIT Durgapur (2023–2027) with deep focus on modern data analytics engineering.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* SECTION 3: REUSABLE UI COMPONENTS */}
        <section id="components" className="space-y-8 pt-8 border-t border-border-subtle">
          <SectionHeader
            kicker="03. COMPONENT SUITE"
            title="Interactive Buttons, Badges & Cards"
            description="Modular building blocks styled with restrained lime highlights, responsive states, and accessible keyboard focus."
          />

          {/* Buttons Showcase */}
          <Card variant="surface" padding="lg" className="space-y-6">
            <h3 className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
              // Button Variants & Sizes
            </h3>

            <div className="space-y-6">
              {/* Variants */}
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
                  Primary Lime
                </Button>
                <Button variant="secondary" iconLeft={<Database className="w-4 h-4" />}>
                  Secondary Dark
                </Button>
                <Button variant="outline" iconRight={<ExternalLink className="w-4 h-4" />}>
                  Outline Action
                </Button>
                <Button variant="ghost">
                  Ghost Button
                </Button>
                <Button variant="lime-ghost" iconLeft={<Zap className="w-4 h-4" />}>
                  Lime Ghost
                </Button>
                <Button variant="primary" isLoading>
                  Loading State
                </Button>
              </div>

              {/* Sizes */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle/50">
                <Button variant="primary" size="sm">
                  Small (sm)
                </Button>
                <Button variant="primary" size="md">
                  Medium (md)
                </Button>
                <Button variant="primary" size="lg" iconRight={<ArrowRight className="w-4 h-4" />}>
                  Large (lg)
                </Button>
                <Button variant="secondary" size="icon" aria-label="Icon button">
                  <Terminal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Badges & Tags Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="surface" padding="md" className="space-y-4">
              <h3 className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
                // Badges & Status Indicators
              </h3>
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="live">Live on Render</Badge>
                <Badge variant="lime">dbt Core</Badge>
                <Badge variant="neutral">PostgreSQL</Badge>
                <Badge variant="elevated">Python 3.11</Badge>
                <Badge variant="success">91.4% Accuracy</Badge>
                <Badge variant="warning">At-Risk Segment</Badge>
                <Badge variant="danger">High Churn</Badge>
              </div>
            </Card>

            <Card variant="surface" padding="md" className="space-y-4">
              <h3 className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
                // Interactive Filter Tags
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                {['All', 'Data Analytics', 'SQL & dbt', 'Machine Learning', 'Full-Stack Web', 'DevOps'].map((tag) => (
                  <Tag
                    key={tag}
                    interactive
                    active={selectedTag === tag}
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
              <p className="font-mono text-xs text-content-muted pt-2">
                Selected Filter: <span className="text-accent-lime">{selectedTag}</span>
              </p>
            </Card>
          </div>

          {/* Cards Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="surface" padding="md">
              <CardHeader>
                <Badge variant="lime" size="xs" className="w-fit mb-2">Surface Card</Badge>
                <CardTitle>Standard Surface</CardTitle>
                <CardDescription>
                  Base container with `#121419` surface color and `#2A2D35` subtle border.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-content-muted">Ideal for profile overview, static information, and skill listings.</p>
              </CardContent>
            </Card>

            <Card variant="elevated" padding="md">
              <CardHeader>
                <Badge variant="elevated" size="xs" className="w-fit mb-2">Elevated Card</Badge>
                <CardTitle>Elevated Surface</CardTitle>
                <CardDescription>
                  Higher hierarchy with `#191C22` elevated surface and deeper shadow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-content-muted">Used for modal popouts, highlighted milestones, and feature cards.</p>
              </CardContent>
            </Card>

            <Card variant="editorial" padding="md">
              <CardHeader>
                <Badge variant="neutral" size="xs" className="w-fit mb-2">Editorial Card</Badge>
                <CardTitle>Notched Accent</CardTitle>
                <CardDescription>
                  Features a signature lime top accent marker for primary project showcases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-content-muted">Exclusively for flagship case studies like Customer360.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 4: SAAS CUSTOMER ANALYTICS & METRIC DISPLAYS */}
        <section id="analytics" className="space-y-8 pt-8 border-t border-border-subtle">
          <SectionHeader
            kicker="04. SAAS ANALYTICS DISPLAY SYSTEM"
            title="Customer Analytics & Data Visuals"
            description="Inspired by top-tier data platforms. High-precision KPI cards, cohort indicators, and monospace code blocks."
          />

          {/* Metric KPI Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              label="Analyzed Records"
              value="1,500"
              subtext="Subscription Dataset"
              badge={{ text: "PostgreSQL", variant: "lime" }}
              icon={<Database className="w-4 h-4" />}
            />
            <MetricCard
              label="Retention Accuracy"
              value="91.4%"
              subtext="XGBoost Classifier"
              badge={{ text: "ROC-AUC 0.88", variant: "success" }}
              icon={<TrendingUp className="w-4 h-4" />}
            />
            <MetricCard
              label="Explainability Engine"
              value="TreeSHAP"
              subtext="Global & Local Attribution"
              badge={{ text: "Interpretable", variant: "lime" }}
              icon={<Cpu className="w-4 h-4" />}
            />
            <MetricCard
              label="Analytics Pipeline"
              value="dbt Core"
              subtext="Star Schema Marts"
              badge={{ text: "DuckDB + SQL", variant: "neutral" }}
              icon={<Layers className="w-4 h-4" />}
            />
          </div>

          {/* Code Snippet & SQL Transformation Box */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-content-muted uppercase">
                Interactive Transformation Snippet Preview
              </span>
              <Badge variant="live" size="xs">Live Data Contract</Badge>
            </div>
            <CodeSnippet
              code={sampleSql}
              language="sql"
              filename="dbt/models/marts/mart_customer_360.sql"
            />
          </div>
        </section>

        {/* SECTION 5: BREAKPOINTS & SPACING MATRIX */}
        <section className="space-y-8 pt-8 border-t border-border-subtle">
          <SectionHeader
            kicker="05. RESPONSIVE MATRIX & GRID"
            title="Viewport Breakpoints & Spacing Rules"
            description="Deterministic responsive scaling across mobile, tablet, laptop, and ultra-wide displays."
          />

          <Card variant="surface" padding="md">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-border-subtle text-content-muted">
                    <th className="py-3 px-4">Breakpoint</th>
                    <th className="py-3 px-4">Min Width</th>
                    <th className="py-3 px-4">Layout Target</th>
                    <th className="py-3 px-4">Max Container</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle/50 text-content-secondary">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-accent-lime">sm</td>
                    <td className="py-3 px-4">640px</td>
                    <td className="py-3 px-4">Mobile landscape / Phablets</td>
                    <td className="py-3 px-4">100% - 32px</td>
                    <td className="py-3 px-4"><span className="text-emerald-400">✓ Verified</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-accent-lime">md</td>
                    <td className="py-3 px-4">768px</td>
                    <td className="py-3 px-4">Tablets & Split Viewports</td>
                    <td className="py-3 px-4">720px</td>
                    <td className="py-3 px-4"><span className="text-emerald-400">✓ Verified</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-accent-lime">lg</td>
                    <td className="py-3 px-4">1024px</td>
                    <td className="py-3 px-4">Laptops & Small Desktops</td>
                    <td className="py-3 px-4">960px</td>
                    <td className="py-3 px-4"><span className="text-emerald-400">✓ Verified</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-accent-lime">xl</td>
                    <td className="py-3 px-4">1280px</td>
                    <td className="py-3 px-4">Standard Workstations</td>
                    <td className="py-3 px-4">1200px</td>
                    <td className="py-3 px-4"><span className="text-emerald-400">✓ Verified</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-accent-lime">2xl</td>
                    <td className="py-3 px-4">1536px</td>
                    <td className="py-3 px-4">Wide Desktops & 4K</td>
                    <td className="py-3 px-4">1280px (Centered)</td>
                    <td className="py-3 px-4"><span className="text-emerald-400">✓ Verified</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};
