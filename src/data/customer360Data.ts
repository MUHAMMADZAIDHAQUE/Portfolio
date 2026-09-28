export interface MetricSummary {
  label: string;
  value: string;
  subtext: string;
  badge?: string;
  variant?: 'lime' | 'success' | 'warning' | 'neutral';
}

export interface RfmSegmentData {
  segment: string;
  count: number;
  percentage: number;
  churnRate: number;
  arr: number;
  rScore: string;
  fScore: string;
  mScore: string;
  color: string;
  playbook: string;
}

export interface CohortMonth {
  month: number;
  label: string;
  retentionRate: number;
  activeCohortsCount: number;
}

export interface StatTestResult {
  id: string;
  testName: string;
  variables: string;
  nullHypothesis: string;
  testType: "Chi-Square" | "Mann-Whitney U" | "Welch's t-test" | "Fisher's Exact";
  statisticName: string;
  statisticValue: number | string;
  pValue: string;
  degreesOfFreedom?: number;
  effectSizeName?: string;
  effectSizeValue?: number | string;
  isSignificant: boolean;
  businessFinding: string;
}

export interface MlModelMetric {
  name: string;
  type: string;
  rocAuc: number;
  prAuc: number;
  f1Score: number;
  threshold: number;
  revenueSaved: string;
  isChampion: boolean;
}

export interface ShapFeature {
  feature: string;
  meanShap: number;
  description: string;
  businessImpact: string;
}

export interface StarSchemaTable {
  name: string;
  type: 'Dimension' | 'Fact' | 'Curated Mart';
  description: string;
  primaryKey: string;
  foreignKeys?: string[];
  columns: string[];
}

export const C360_SUMMARY_METRICS: MetricSummary[] = [
  {
    label: 'Analyzed Accounts',
    value: '1,500',
    subtext: 'B2B subscription customer records',
    badge: 'PostgreSQL Marts',
    variant: 'lime',
  },
  {
    label: 'Overall Retention Rate',
    value: '64.93%',
    subtext: '974 Active vs 526 Churned (35.07%)',
    badge: '31 Cohorts',
    variant: 'success',
  },
  {
    label: 'Active ARR',
    value: '$1,359,072',
    subtext: 'Active MRR: $113,256 / ARPU: $116.28',
    badge: 'Realized: $1.94M',
    variant: 'lime',
  },
  {
    label: 'Revenue At Risk',
    value: '$207,756',
    subtext: '167 accounts identified by ML engine',
    badge: 'Urgent Action',
    variant: 'warning',
  },
];

export const C360_RFM_SEGMENTS: RfmSegmentData[] = [
  {
    segment: 'Loyal Customers',
    count: 356,
    percentage: 23.7,
    churnRate: 13.8,
    arr: 559476.0,
    rScore: '4 - 5',
    fScore: '4 - 5',
    mScore: '4 - 5',
    color: '#10B981',
    playbook: 'Nurture with early feature access, enterprise upsells, and executive check-ins.',
  },
  {
    segment: 'At Risk',
    count: 388,
    percentage: 25.9,
    churnRate: 31.7,
    arr: 414060.0,
    rScore: '2 - 3',
    fScore: '3 - 4',
    mScore: '4 - 5',
    color: '#F59E0B',
    playbook: 'Immediate CSM intervention, SLA remediation, and value-realization reviews.',
  },
  {
    segment: 'Promising / New',
    count: 396,
    percentage: 26.4,
    churnRate: 25.2,
    arr: 230328.0,
    rScore: '4 - 5',
    fScore: '1 - 2',
    mScore: '1 - 2',
    color: '#38BDF8',
    playbook: 'Guided onboarding acceleration, product adoption workshops, and milestone check-ins.',
  },
  {
    segment: 'Champions',
    count: 39,
    percentage: 2.6,
    churnRate: 2.6,
    arr: 131544.0,
    rScore: '5',
    fScore: '5',
    mScore: '5',
    color: '#C5FF4A',
    playbook: 'Advocacy program, co-marketing case studies, and priority advisory board seats.',
  },
  {
    segment: 'Hibernating / Dormant',
    count: 320,
    percentage: 21.3,
    churnRate: 78.8,
    arr: 23664.0,
    rScore: '1',
    fScore: '1 - 2',
    mScore: '1 - 2',
    color: '#EF4444',
    playbook: 'Automated re-engagement campaigns or sunset workflows to recover server overhead.',
  },
  {
    segment: "Can't Lose Them",
    count: 1,
    percentage: 0.1,
    churnRate: 100.0,
    arr: 0.0,
    rScore: '1',
    fScore: '5',
    mScore: '5',
    color: '#94A3B8',
    playbook: 'Post-mortem root-cause analysis to prevent similar high-value departures.',
  },
];

export const C360_COHORT_RETENTION: CohortMonth[] = [
  { month: 1, label: 'Month 1', retentionRate: 100.0, activeCohortsCount: 31 },
  { month: 2, label: 'Month 2', retentionRate: 97.8, activeCohortsCount: 31 },
  { month: 3, label: 'Month 3', retentionRate: 93.82, activeCohortsCount: 30 },
  { month: 6, label: 'Month 6', retentionRate: 83.08, activeCohortsCount: 27 },
  { month: 9, label: 'Month 9', retentionRate: 74.20, activeCohortsCount: 24 },
  { month: 12, label: 'Month 12', retentionRate: 65.10, activeCohortsCount: 21 },
];

export const C360_STATISTICAL_TESTS: StatTestResult[] = [
  {
    id: 'test-contract',
    testName: 'Contract Type vs Churn Independence',
    variables: 'Contract Type (Monthly, Annual, Multi-year) vs Churned Status (Binary)',
    nullHypothesis: 'Customer churn is independent of contract commitment length.',
    testType: 'Chi-Square',
    statisticName: 'χ² Statistic',
    statisticValue: 85.5647,
    degreesOfFreedom: 2,
    pValue: '2.63e-19 (p < 0.0001)',
    effectSizeName: "Cramer's V",
    effectSizeValue: 0.2388,
    isSignificant: true,
    businessFinding:
      'Monthly contracts experience 43.94% churn versus 20.71% for Annual and 18.33% for Multi-year. Longer contract terms establish a structural retention barrier.',
  },
  {
    id: 'test-tier',
    testName: 'Plan Tier vs Churn Independence',
    variables: 'Plan Tier (Starter, Growth, Pro, Enterprise) vs Churned Status',
    nullHypothesis: 'Customer churn is independent of subscription tier.',
    testType: 'Chi-Square',
    statisticName: 'χ² Statistic',
    statisticValue: 29.9633,
    degreesOfFreedom: 3,
    pValue: '1.40e-06 (p < 0.001)',
    effectSizeName: "Cramer's V",
    effectSizeValue: 0.1413,
    isSignificant: true,
    businessFinding:
      'Enterprise tier churn is only 12.36% compared to Starter tier churn of 40.92%. Higher-tier accounts receive dedicated support and demonstrate higher product stickiness.',
  },
  {
    id: 'test-sessions',
    testName: 'Engagement Total Sessions vs Churn',
    variables: 'Total Platform Sessions (Continuous) between Active vs Churned Accounts',
    nullHypothesis: 'There is no difference in session volume between retained and churned customers.',
    testType: 'Mann-Whitney U',
    statisticName: 'U Statistic',
    statisticValue: '367,913.0',
    pValue: '2.74e-44 (p < 0.0001)',
    effectSizeName: 'Rank-Biserial Correlation',
    effectSizeValue: -0.4363,
    isSignificant: true,
    businessFinding:
      'Active customers average 541.9 sessions (median 472.5) versus 302.0 sessions (median 232.5) for churned accounts. Session drop-off is a strong leading indicator 60 days before cancellation.',
  },
  {
    id: 'test-csat',
    testName: 'CSAT Customer Satisfaction vs Churn',
    variables: 'Mean CSAT Score (1-5 scale) between Active vs Churned Accounts',
    nullHypothesis: 'Customer satisfaction scores do not differ between churned and active users.',
    testType: "Welch's t-test",
    statisticName: "Welch's t",
    statisticValue: 30.412,
    pValue: '< 0.0001',
    effectSizeName: "Cohen's d",
    effectSizeValue: 1.62,
    isSignificant: true,
    businessFinding:
      'Customers with CSAT < 3.0 have a 72.4% probability of churn within 90 days if unresolved support friction is present.',
  },
  {
    id: 'test-delinquency',
    testName: 'Payment Delinquency vs Churn',
    variables: 'Billing Delinquency Flag (Binary) vs Churned Status',
    nullHypothesis: 'Payment failures and delinquency do not increase churn likelihood.',
    testType: "Fisher's Exact",
    statisticName: 'Odds Ratio',
    statisticValue: 3.48,
    pValue: '< 0.0001',
    isSignificant: true,
    businessFinding:
      'Accounts with at least one payment delinquency event are 3.48x more likely to churn, pointing to involuntary churn caused by dunning friction.',
  },
  {
    id: 'test-channel',
    testName: 'Acquisition Channel vs Churn',
    variables: 'Channel (Organic, Referral, Paid Ads, Outbound) vs Churned Status',
    nullHypothesis: 'Customer retention is uniform regardless of acquisition channel.',
    testType: 'Chi-Square',
    statisticName: 'χ² Statistic',
    statisticValue: 18.241,
    degreesOfFreedom: 3,
    pValue: '0.0004 (p < 0.001)',
    isSignificant: true,
    businessFinding:
      'Referral customers demonstrate the highest cohort survival (74.2% at M12), whereas Paid Ads acquisition yields higher initial drop-off (56.4% at M12).',
  },
  {
    id: 'test-geography',
    testName: 'Geography / Region vs Churn',
    variables: 'Geographic Theater (North America, EMEA, APAC, LATAM) vs Churn',
    nullHypothesis: 'Churn rates vary by global geographic region.',
    testType: 'Chi-Square',
    statisticName: 'χ² Statistic',
    statisticValue: 3.118,
    degreesOfFreedom: 3,
    pValue: '0.3738 (p > 0.05)',
    isSignificant: false,
    businessFinding:
      'Fail to reject H0. Churn is invariant across geographic theaters, demonstrating that product value and support quality matter significantly more than regional demographics.',
  },
];

export const C360_ML_MODELS: MlModelMetric[] = [
  {
    name: 'XGBoost Classifier',
    type: 'Gradient Boosted Decision Trees',
    rocAuc: 1.0,
    prAuc: 1.0,
    f1Score: 1.0,
    threshold: 0.1,
    revenueSaved: '$53,214.00 (Holdout)',
    isChampion: true,
  },
  {
    name: 'Random Forest Classifier',
    type: 'Ensemble Bagging Trees',
    rocAuc: 1.0,
    prAuc: 1.0,
    f1Score: 1.0,
    threshold: 0.45,
    revenueSaved: '$53,214.00 (Holdout)',
    isChampion: true,
  },
  {
    name: 'Logistic Regression',
    type: 'L2 Regularized Linear Model',
    rocAuc: 0.9999,
    prAuc: 0.9998,
    f1Score: 0.9953,
    threshold: 0.5,
    revenueSaved: '$53,164.00 (Holdout)',
    isChampion: false,
  },
];

export const C360_SHAP_FEATURES: ShapFeature[] = [
  {
    feature: 'monthly_price',
    meanShap: 0.2237,
    description: 'Monthly billed subscription rate ($/mo)',
    businessImpact: 'High price points without proportional feature adoption trigger immediate churn vulnerability.',
  },
  {
    feature: 'has_support_friction',
    meanShap: 0.0575,
    description: 'Flag for accounts with > 2 open or escalated tickets',
    businessImpact: 'Support escalations create compounding frustration, elevating churn risk by 4.2x.',
  },
  {
    feature: 'avg_resolution_hours',
    meanShap: 0.0476,
    description: 'Mean hours elapsed to resolve technical support tickets',
    businessImpact: 'Resolution times exceeding 24 hours correlate directly with downstream contract non-renewal.',
  },
  {
    feature: 'high_urgency_tickets_count',
    meanShap: 0.0336,
    description: 'Count of P1 / P2 critical priority support issues',
    businessImpact: 'Critical operational blocks severely erode executive customer trust.',
  },
  {
    feature: 'urgent_ticket_ratio',
    meanShap: 0.033,
    description: 'Proportion of urgent tickets to standard inquiries',
    businessImpact: 'High ratios indicate foundational onboarding or API reliability hurdles.',
  },
];

export const C360_STAR_SCHEMA: StarSchemaTable[] = [
  {
    name: 'dim_customers',
    type: 'Dimension',
    description: 'Core customer profile, demographic attributes, and acquisition origin.',
    primaryKey: 'customer_id',
    columns: ['customer_id', 'full_name', 'email', 'country', 'region', 'acquisition_channel', 'signup_date'],
  },
  {
    name: 'dim_plans',
    type: 'Dimension',
    description: 'Product tier specifications, billing intervals, and SLA tiers.',
    primaryKey: 'plan_id',
    columns: ['plan_id', 'plan_tier', 'monthly_price', 'billing_frequency', 'max_seats', 'support_level'],
  },
  {
    name: 'fact_subscriptions',
    type: 'Fact',
    description: 'Active, paused, and cancelled subscription contracts with MRR/ARR tracking.',
    primaryKey: 'subscription_id',
    foreignKeys: ['customer_id', 'plan_id'],
    columns: ['subscription_id', 'customer_id', 'plan_id', 'start_date', 'end_date', 'contract_type', 'mrr_usd', 'status'],
  },
  {
    name: 'fact_transactions',
    type: 'Fact',
    description: 'Granular billing events, successful charges, and delinquency logs.',
    primaryKey: 'transaction_id',
    foreignKeys: ['customer_id', 'subscription_id'],
    columns: ['transaction_id', 'customer_id', 'subscription_id', 'transaction_date', 'amount_usd', 'payment_status', 'is_delinquent'],
  },
  {
    name: 'mart_customer_360',
    type: 'Curated Mart',
    description: 'Unified 360 analytical mart feeding Power BI dashboards, ML pipelines, and API endpoints.',
    primaryKey: 'customer_id',
    foreignKeys: ['plan_id', 'region_id'],
    columns: ['customer_id', 'tenure_months', 'current_mrr', 'rfm_segment', 'churn_probability', 'revenue_at_risk', 'has_support_friction'],
  },
];
