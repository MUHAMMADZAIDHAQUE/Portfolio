import React, { useState } from 'react';
import {
  C360_SUMMARY_METRICS,
  C360_ML_MODELS,
  MetricSummary,
  MlModelMetric,
} from '../data/customer360Data';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CodeSnippet } from '../components/ui/CodeSnippet';
import {
  LiveHealthBadge,
  PipelineDiagram,
  RfmSegmentViewer,
  CohortHeatmapViewer,
  StatisticalTestsExplorer,
  TreeShapViewer,
  StarSchemaViewer,
} from '../components/case-study/Customer360Components';
import { ScrollProgress } from '../components/common/ScrollProgress';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

export const Customer360CaseStudyPage: React.FC = () => {
  const [dashboardTab, setDashboardTab] = useState<'screenshot' | 'kpi' | 'sql'>('screenshot');

  const sampleDbtSql = `-- dbt Core Mart: models/marts/mart_customer_360.sql
WITH customer_base AS (
  SELECT * FROM {{ ref('int_customer_metrics') }}
),
churn_predictions AS (
  SELECT * FROM {{ ref('int_churn_scores') }}
)
SELECT
  c.customer_id,
  c.full_name,
  c.country,
  c.plan_tier,
  c.contract_type,
  c.tenure_months,
  c.current_mrr,
  c.current_arr,
  c.rfm_segment,
  c.has_support_friction,
  c.has_payment_delinquency,
  p.churn_probability,
  p.risk_tier,
  CASE
    WHEN p.churn_probability >= 0.70 THEN c.current_arr
    ELSE 0.0
  END AS revenue_at_risk
FROM customer_base c
LEFT JOIN churn_predictions p USING (customer_id);`;

  return (
    <div className="min-h-screen bg-background text-content-primary pb-32">
      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgress />

      {/* Top Breadcrumb Header */}
      <div className="border-b border-border-subtle bg-surface-muted py-3 px-4 sm:px-8">
        <div className="layout-container flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <a
            href="/"
            className="flex items-center gap-2 text-content-muted hover:text-accent-lime transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio Overview</span>
          </a>

          <div className="flex items-center gap-3">
            <span className="text-content-muted">CASE STUDY:</span>
            <span className="text-content-primary font-bold">CUSTOMER360</span>
            <span className="text-content-subtle">|</span>
            <LiveHealthBadge />
          </div>
        </div>
      </div>

      <main className="layout-container pt-10 sm:pt-14 space-y-24">
        {/* 1. HERO SECTION */}
        <section className="space-y-6 border-b border-border-subtle pb-12">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="lime" size="xs">
              FLAGSHIP ANALYTICS CASE STUDY
            </Badge>
            <Badge variant="live" size="xs">
              Deployed on Render Cloud
            </Badge>
            <span className="font-mono text-xs text-content-muted">
              PostgreSQL • dbt • DuckDB • XGBoost • TreeSHAP • Power BI
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-content-primary tracking-tight leading-[1.08]">
              Customer360 — AI-Powered Customer Intelligence & Retention Platform
            </h1>
            <p className="text-xl sm:text-2xl text-accent-lime font-mono">
              Understand customers. Predict churn. Protect revenue.
            </p>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-sans pt-2">
              An enterprise customer intelligence platform engineered to ingest raw transactional event streams,
              transform them into star-schema analytical marts via dbt, perform cohort and RFM retention analysis,
              and predict customer churn with interpretable TreeSHAP machine learning.
            </p>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              href="https://customer360-frontend.onrender.com"
              target="_blank"
              iconRight={<ExternalLink className="w-4 h-4" />}
            >
              Launch Production Application
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="https://customer360-api-u4k0.onrender.com/docs"
              target="_blank"
              iconLeft={<Cpu className="w-4 h-4 text-accent-lime" />}
            >
              Interactive API Docs (FastAPI)
            </Button>
            <Button
              variant="outline"
              size="md"
              href="https://github.com/MUHAMMADZAIDHAQUE/Customer360"
              target="_blank"
              iconLeft={<Github className="w-4 h-4" />}
            >
              GitHub Repository
            </Button>
          </div>

          {/* Executive KPI Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {C360_SUMMARY_METRICS.map((metric: MetricSummary) => (
              <Card key={metric.label} variant="surface" padding="md" className="space-y-1">
                <div className="font-mono text-[10px] text-content-muted uppercase">
                  {metric.label}
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-accent-lime font-data">
                  {metric.value}
                </div>
                <div className="text-xs text-content-secondary">{metric.subtext}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* 2. FULL-WIDTH DASHBOARD PREVIEW / EMBED */}
        <section className="space-y-6">
          <SectionHeader
            kicker="01. DASHBOARD & INTERFACE SHOWCASE"
            title="Executive Analytics Interface & Live Data Layer"
            description="The production application delivers interactive dashboards, customer drill-downs, and natural-language AI insights directly from curated data marts."
          />

          <Card variant="surface" padding="none" className="border-border-subtle overflow-hidden">
            {/* Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface-elevated border-b border-border-subtle font-mono text-xs text-content-muted">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="ml-2 text-content-secondary font-medium">
                  https://customer360-frontend.onrender.com/analytics
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setDashboardTab('screenshot' as any)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                    dashboardTab === ('screenshot' as any)
                      ? 'bg-accent-lime text-background font-bold shadow-lime-sm'
                      : 'hover:text-content-primary text-content-muted'
                  }`}
                >
                  Dashboard View
                </button>
                <button
                  type="button"
                  onClick={() => setDashboardTab('kpi')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                    dashboardTab === 'kpi'
                      ? 'bg-accent-lime text-background font-bold shadow-lime-sm'
                      : 'hover:text-content-primary text-content-muted'
                  }`}
                >
                  Live Health Data
                </button>
                <button
                  type="button"
                  onClick={() => setDashboardTab('sql')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                    dashboardTab === 'sql'
                      ? 'bg-accent-lime text-background font-bold shadow-lime-sm'
                      : 'hover:text-content-primary text-content-muted'
                  }`}
                >
                  dbt Mart SQL
                </button>
              </div>
            </div>

            {/* Dashboard Canvas Container */}
            <div className="p-4 sm:p-6 bg-surface-card space-y-6">
              {dashboardTab === ('screenshot' as any) ? (
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden border border-border-subtle shadow-card">
                    <img
                      src="/assets/projects/customer360/dashboard_overview.jpg"
                      alt="Customer360 Production Dashboard: ARR $1.36M, Retention Rate 64.9%, Revenue at Risk $207.7K, Cohort Retention Heatmap and RFM Quadrant"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-content-muted pt-2 border-t border-border-subtle/60">
                    <span className="text-content-secondary">
                      Showing actual executive dashboard metrics: $1.36M ARR • 64.9% Retention • 1,500 Accounts
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      href="https://customer360-frontend.onrender.com"
                      target="_blank"
                      iconRight={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Launch Cloud App
                    </Button>
                  </div>
                </div>
              ) : dashboardTab === 'kpi' ? (
                <div className="space-y-6">
                  {/* Top Bar inside simulated dashboard */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-surface-elevated border border-border-subtle">
                    <div>
                      <h4 className="font-heading font-bold text-lg text-content-primary">
                        Customer Portfolio Intelligence & Health
                      </h4>
                      <p className="text-xs text-content-muted font-mono">
                        Filtered: 1,500 active & historic accounts • Granularity: Monthly Cohorts
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="live" size="xs">
                        974 Retained Accounts
                      </Badge>
                      <Badge variant="danger" size="xs">
                        167 High Risk Accounts
                      </Badge>
                    </div>
                  </div>

                  {/* Visual KPI Mini Widgets */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-surface-muted border border-border-subtle space-y-2">
                      <span className="font-mono text-xs text-content-muted uppercase">ARR Portfolio Value</span>
                      <div className="text-3xl font-heading font-bold text-content-primary font-data">$1,359,072</div>
                      <div className="text-xs text-emerald-400 font-mono">↑ 64.9% Portfolio Health</div>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-muted border border-border-subtle space-y-2">
                      <span className="font-mono text-xs text-content-muted uppercase">Revenue At Risk</span>
                      <div className="text-3xl font-heading font-bold text-amber-400 font-data">$207,756</div>
                      <div className="text-xs text-amber-400 font-mono">167 High-Probability Accounts</div>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-muted border border-border-subtle space-y-2">
                      <span className="font-mono text-xs text-content-muted uppercase">Model ROC-AUC</span>
                      <div className="text-3xl font-heading font-bold text-accent-lime font-data">1.000</div>
                      <div className="text-xs text-accent-lime font-mono">TreeSHAP Explainable ML</div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <Button
                      variant="primary"
                      size="sm"
                      href="https://customer360-frontend.onrender.com"
                      target="_blank"
                      iconRight={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Open Live Dashboard in New Tab
                    </Button>
                  </div>
                </div>
              ) : (
                <CodeSnippet code={sampleDbtSql} language="sql" filename="dbt/models/marts/mart_customer_360.sql" />
              )}
            </div>
          </Card>
        </section>

        {/* 3. EXECUTIVE SUMMARY & BUSINESS CONTEXT */}
        <section className="space-y-6">
          <SectionHeader
            kicker="02. EXECUTIVE SUMMARY"
            title="The Business Problem & Analytical Objectives"
            description="Addressing silent attrition across B2B subscription software through quantitative visibility and machine learning."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="surface" padding="lg" className="space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                <AlertTriangle className="w-4 h-4" />
                The Silent Churn Challenge
              </div>
              <h3 className="text-2xl font-heading font-bold text-content-primary">
                Why reactive customer retention fails.
              </h3>
              <div className="space-y-3 text-sm text-content-secondary leading-relaxed">
                <p>
                  In subscription SaaS businesses, by the time a customer formally clicks "Cancel Subscription," 
                  their usage velocity and product engagement have been decaying for <strong>60 to 90 days</strong>.
                </p>
                <p>
                  Without centralized analytics marts and early-warning signal detection, customer success teams are 
                  forced to fight churn reactively. This results in $200,000+ in annual recurring revenue slipping away unnoticed.
                </p>
              </div>
            </Card>

            <Card variant="surface" padding="lg" className="space-y-4">
              <div className="flex items-center gap-2 text-accent-lime font-mono text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                Analytical Objectives
              </div>
              <h3 className="text-2xl font-heading font-bold text-content-primary">
                Four pillars of quantitative intelligence.
              </h3>
              <div className="space-y-2 text-sm text-content-secondary leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-accent-lime font-bold mt-0.5">01.</span>
                  <span><strong>Behavioral Cohort Tracking:</strong> Map 31 signup cohorts to isolate precise decay inflection points.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-accent-lime font-bold mt-0.5">02.</span>
                  <span><strong>RFM Segmentation:</strong> Cluster 1,500 accounts into actionable tiers with dedicated playbooks.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-accent-lime font-bold mt-0.5">03.</span>
                  <span><strong>Statistical Inference:</strong> Statistically prove root causes using Chi-Square, Mann-Whitney U & Welch's tests.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-accent-lime font-bold mt-0.5">04.</span>
                  <span><strong>Interpretable ML:</strong> Train XGBoost with TreeSHAP to flag at-risk accounts 60 days before contract expiry.</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 4. DATASET OVERVIEW & LIMITATIONS */}
        <section className="space-y-6">
          <SectionHeader
            kicker="03. DATASET SPECIFICATIONS"
            title="1,500 Customer Accounts & Multi-Entity Model"
            description="Verified relational dataset capturing demographics, transactional billing, support tickets, and daily session engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="surface" padding="md" className="space-y-3">
              <div className="font-mono text-xs text-accent-lime uppercase font-semibold">
                Entity 01: Core Accounts
              </div>
              <h4 className="font-heading font-bold text-lg text-content-primary">
                1,500 Profiles
              </h4>
              <p className="text-xs text-content-muted leading-relaxed">
                Demographic attributes, country, acquisition channel, contract type (Monthly vs Annual), and signup timestamps.
              </p>
            </Card>

            <Card variant="surface" padding="md" className="space-y-3">
              <div className="font-mono text-xs text-accent-lime uppercase font-semibold">
                Entity 02: Transactions & Billing
              </div>
              <h4 className="font-heading font-bold text-lg text-content-primary">
                31,000+ Events
              </h4>
              <p className="text-xs text-content-muted leading-relaxed">
                Monthly recurring payments, payment status logs, currency amounts, and delinquency failure timestamps.
              </p>
            </Card>

            <Card variant="surface" padding="md" className="space-y-3">
              <div className="font-mono text-xs text-accent-lime uppercase font-semibold">
                Entity 03: Support & Usage
              </div>
              <h4 className="font-heading font-bold text-lg text-content-primary">
                Sessions & CSAT
              </h4>
              <p className="text-xs text-content-muted leading-relaxed">
                Platform session logs, support ticket resolution hours, urgency escalations, and customer satisfaction (CSAT) scores.
              </p>
            </Card>
          </div>

          <div className="p-4 rounded-lg bg-surface-muted border border-border-subtle space-y-1">
            <span className="font-mono text-xs text-accent-lime font-bold uppercase">
              Analytical Scope & Dataset Limitations:
            </span>
            <p className="text-xs text-content-muted leading-relaxed font-sans">
              The dataset models a single-currency B2B subscription business. Seasonality is evaluated across 31 historical monthly cohorts. External macro-economic shocks are held constant to isolate product-market friction from external variance.
            </p>
          </div>
        </section>

        {/* 5. DATA PIPELINE VISUALIZATION (DAG) */}
        <section className="space-y-6">
          <SectionHeader
            kicker="04. DATA PIPELINE ARCHITECTURE"
            title="End-to-End Analytics Engineering DAG"
            description="From raw SQL ingestion to dbt dimensional modeling, statistical inference, XGBoost inference, and Power BI delivery."
          />

          <PipelineDiagram />
        </section>

        {/* 6. CUSTOMER SEGMENTATION (RFM) */}
        <section className="space-y-6">
          <SectionHeader
            kicker="05. BEHAVIORAL SEGMENTATION"
            title="RFM Customer Clustering & ARR Distribution"
            description="Accounts segmented by Recency (days since last active), Frequency (total sessions), and Monetary value (lifetime spend)."
          />

          <RfmSegmentViewer />
        </section>

        {/* 7. COHORT RETENTION DECAY */}
        <section className="space-y-6">
          <SectionHeader
            kicker="06. RETENTION & CHURN DYNAMICS"
            title="31-Cohort Survival Decay Analysis"
            description="Longitudinal retention tracking isolating the critical Month 3 and Month 6 drop-off boundaries."
          />

          <CohortHeatmapViewer />
        </section>

        {/* 8. CUSTOMER LIFETIME VALUE & REVENUE AT RISK */}
        <section className="space-y-6">
          <SectionHeader
            kicker="07. VALUE MODELING"
            title="Customer Lifetime Value (CLV) & Revenue at Risk"
            description="Comparing realized historical billing against actuarial projected lifetime value and identified revenue pools."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="surface" padding="lg" className="space-y-4">
              <span className="font-mono text-xs text-accent-lime uppercase font-semibold">
                // CLV ACTUARIAL MODELING
              </span>
              <h3 className="text-2xl font-heading font-bold text-content-primary">
                Historical Realized vs Projected Value
              </h3>
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-content-muted">Total Historical Billed CLV</div>
                    <div className="text-2xl font-heading font-bold text-content-primary font-data">$1,944,200.00</div>
                  </div>
                  <Badge variant="lime" size="xs">Mean: $1,296.13</Badge>
                </div>

                <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-content-muted">Total Projected Lifetime Value</div>
                    <div className="text-2xl font-heading font-bold text-accent-lime font-data">$4,195,446.75</div>
                  </div>
                  <Badge variant="success" size="xs">Mean: $2,796.96</Badge>
                </div>
              </div>
            </Card>

            <Card variant="surface" padding="lg" className="space-y-4">
              <span className="font-mono text-xs text-amber-400 uppercase font-semibold">
                // RISK QUANTIFICATION
              </span>
              <h3 className="text-2xl font-heading font-bold text-content-primary">
                $207,756 ARR at Immediate Risk
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                By cross-referencing XGBoost churn probabilities (&gt; 0.70) with active ARR contracts, the platform identifies <strong>167 accounts</strong> currently at high risk of departure.
              </p>
              <div className="p-4 rounded-lg bg-surface-muted border border-amber-500/30 text-xs font-mono text-amber-300 space-y-1">
                <div className="font-bold">Intervention Opportunity:</div>
                <p className="text-content-secondary font-sans">
                  Targeted CSM remediation on the top 20% of at-risk accounts protects over $140,000 in recurring revenue.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* 9. STATISTICAL HYPOTHESIS TESTING */}
        <section className="space-y-6">
          <SectionHeader
            kicker="08. STATISTICAL INFERENCE"
            title="7 Formal Hypothesis Tests & Empirical Proof"
            description="Testing contract terms, plan tiers, CSAT scores, payment delinquency, acquisition channels, and geography."
          />

          <StatisticalTestsExplorer />
        </section>

        {/* 10. MACHINE LEARNING & TREESHAP */}
        <section className="space-y-6">
          <SectionHeader
            kicker="09. MACHINE LEARNING ENGINE"
            title="XGBoost Classifier & TreeSHAP Explainability"
            description="Evaluating model ROC-AUC, decision thresholds, and mathematical feature contributions."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Model Comparison Table (6 Cols) */}
            <Card variant="surface" padding="lg" className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="font-mono text-xs text-accent-lime uppercase font-semibold">
                  // Model Performance on Test Set (N=300)
                </span>
                <Badge variant="live" size="xs">Champion: Random Forest / XGBoost</Badge>
              </div>

              <div className="space-y-3">
                {C360_ML_MODELS.map((m: MlModelMetric) => (
                  <div
                    key={m.name}
                    className={`p-4 rounded-lg border transition-all ${
                      m.isChampion
                        ? 'bg-surface-elevated border-accent-lime/40'
                        : 'bg-surface-card border-border-subtle'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-heading font-bold text-sm text-content-primary">
                        {m.name}
                      </div>
                      <Badge variant={m.isChampion ? 'lime' : 'neutral'} size="xs">
                        {m.type}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-3 text-xs font-mono">
                      <div>
                        <span className="text-content-muted text-[10px]">ROC-AUC: </span>
                        <span className="font-bold text-accent-lime">{m.rocAuc.toFixed(4)}</span>
                      </div>
                      <div>
                        <span className="text-content-muted text-[10px]">PR-AUC: </span>
                        <span className="font-bold text-accent-lime">{m.prAuc.toFixed(4)}</span>
                      </div>
                      <div>
                        <span className="text-content-muted text-[10px]">F1: </span>
                        <span className="font-bold text-accent-lime">{m.f1Score.toFixed(4)}</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] font-mono text-content-secondary border-t border-border-subtle/50 mt-2 flex justify-between">
                      <span>Threshold: {m.threshold}</span>
                      <span className="text-emerald-400 font-bold">{m.revenueSaved}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* TreeSHAP Feature Attribution (6 Cols) */}
            <div className="lg:col-span-6">
              <TreeShapViewer />
            </div>
          </div>
        </section>

        {/* 11. STAR SCHEMA DATA MODELING */}
        <section className="space-y-6">
          <SectionHeader
            kicker="10. DATA WAREHOUSE MODELING"
            title="Star Schema & Curated Analytical Marts"
            description="Normalized dimensions and transactional fact tables fueling the unified `mart_customer_360` layer."
          />

          <StarSchemaViewer />
        </section>

        {/* 12. KEY FINDINGS & STRATEGIC RECOMMENDATIONS */}
        <section className="space-y-6">
          <SectionHeader
            kicker="11. STRATEGIC SYNTHESIS"
            title="Key Findings & Actionable Recommendations"
            description="Synthesizing statistical evidence and ML attributions into concrete business retention strategies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="surface" padding="lg" className="space-y-3">
              <div className="flex items-center gap-2 text-accent-lime font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                1. Contract Length Incentives
              </div>
              <h4 className="font-heading font-bold text-lg text-content-primary">
                Transition Monthly Accounts to Annual Commitments
              </h4>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                With monthly contract churn at 43.9% vs 20.7% for annual, offering a 15% discount on annual prepayment immediately cuts expected cohort churn in half.
              </p>
            </Card>

            <Card variant="surface" padding="lg" className="space-y-3">
              <div className="flex items-center gap-2 text-accent-lime font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                2. Support SLA Hardening
              </div>
              <h4 className="font-heading font-bold text-lg text-content-primary">
                Cap Critical Ticket Resolution Under 12 Hours
              </h4>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                SHAP analysis identifies resolution hours as the #3 churn driver. Establishing priority routing for high-MRR accounts prevents support-induced churn.
              </p>
            </Card>

            <Card variant="surface" padding="lg" className="space-y-3">
              <div className="flex items-center gap-2 text-accent-lime font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                3. Automated Dunning Workflows
              </div>
              <h4 className="font-heading font-bold text-lg text-content-primary">
                Remediate Involuntary Payment Failures
              </h4>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                Fisher's exact test revealed a 3.48x churn multiplier on payment delinquency. Smart retries and proactive card expiry reminders rescue up to $45,000 annually.
              </p>
            </Card>

            <Card variant="surface" padding="lg" className="space-y-3">
              <div className="flex items-center gap-2 text-accent-lime font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                4. Proactive CSM Early Warning
              </div>
              <h4 className="font-heading font-bold text-lg text-content-primary">
                Trigger Outreach at 60-Day Inactivity
              </h4>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                Mann-Whitney U analysis confirms that session volume drops 44% prior to churn. Triggering CSM re-engagement when weekly sessions decline by 30% intercepts silent churn early.
              </p>
            </Card>
          </div>
        </section>

        {/* 13. PROJECT FOOTER LINKS & NEXT PROJECT */}
        <section className="pt-12 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              href="https://customer360-frontend.onrender.com"
              target="_blank"
              iconRight={<ExternalLink className="w-4 h-4" />}
            >
              Launch Live App
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="https://github.com/MUHAMMADZAIDHAQUE/Customer360"
              target="_blank"
              iconLeft={<Github className="w-4 h-4" />}
            >
              GitHub Source
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/work/wanderlust"
              className="flex items-center gap-2 font-mono text-xs text-accent-lime hover:underline group"
            >
              <span>Next Project: WanderLust Accommodation Marketplace</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
