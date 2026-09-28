export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: Array<{
    name: string;
    description: string;
    tags: string[];
  }>;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    subtitle: 'Core foundational programming languages for analytical computing, scripting, and application engineering.',
    skills: [
      {
        name: 'Python',
        description: 'Primary language for data wrangling, machine learning, statistical modeling, and backend APIs.',
        tags: ['Python 3.11', 'Data Wrangling', 'Object-Oriented', 'Scripting'],
      },
      {
        name: 'SQL',
        description: 'Declarative querying across relational and OLAP engines with CTEs, window functions, and aggregations.',
        tags: ['PostgreSQL', 'DuckDB', 'MySQL', 'Window Functions', 'CTEs'],
      },
      {
        name: 'JavaScript (ES6+)',
        description: 'Dynamic frontend interfaces, asynchronous event loops, DOM manipulation, and Node.js backends.',
        tags: ['JavaScript', 'ES6+', 'Async/Await', 'DOM APIs'],
      },
      {
        name: 'C',
        description: 'Foundational procedural programming, memory management, pointers, and algorithmic structures.',
        tags: ['C Programming', 'Memory Management', 'Data Structures'],
      },
    ],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Statistical Investigation',
    subtitle: 'Exploratory data analysis, statistical variance testing, and exploratory visualization.',
    skills: [
      {
        name: 'Pandas & NumPy',
        description: 'Multi-dimensional array processing, data frame transformations, merging, grouping, and reshaping.',
        tags: ['Pandas', 'NumPy', 'Data Cleaning', 'Aggregation'],
      },
      {
        name: 'Exploratory Data Analysis (EDA)',
        description: 'Uncovering distributional shapes, anomaly detection, missing data handling, and correlation mapping.',
        tags: ['EDA', 'Data Cleaning', 'Outlier Detection', 'Distributions'],
      },
      {
        name: 'Statistical Hypothesis Testing',
        description: 'Formal statistical inference using Chi-Square, Mann-Whitney U, Welch’s t-test, and Fisher’s Exact test.',
        tags: ['Hypothesis Testing', 'p-Values', 'Parametric & Non-Parametric', 'Effect Sizes'],
      },
      {
        name: 'Data Visualization',
        description: 'Transforming complex datasets into intuitive graphical stories with Matplotlib, Seaborn, and Plotly.',
        tags: ['Plotly', 'Seaborn', 'Matplotlib', 'Visual Analytics'],
      },
    ],
  },
  {
    id: 'bi-analytics',
    title: 'Business Intelligence & Customer Analytics',
    subtitle: 'Executive KPI dashboards, retention dynamics, and commercial value modeling.',
    skills: [
      {
        name: 'Power BI & DAX',
        description: 'Star-schema dimensional reporting, complex DAX measures, time-intelligence calculations, and dashboards.',
        tags: ['Power BI', 'DAX', 'Data Modeling', 'KPI Reporting'],
      },
      {
        name: 'RFM Behavioral Segmentation',
        description: 'Scoring customer Recency, Frequency, and Monetary quintiles to segment accounts into targeted playbooks.',
        tags: ['RFM', 'Customer Segmentation', 'Behavioral Clustering'],
      },
      {
        name: 'Cohort Retention & Churn Dynamics',
        description: 'Tracking longitudinal subscriber survival rates across signup cohorts to identify drop-off inflection points.',
        tags: ['Cohort Analysis', 'Retention Curves', 'Churn Analytics', 'Decay Modeling'],
      },
      {
        name: 'Microsoft Excel',
        description: 'Advanced lookup functions (XLOOKUP), pivot tables, scenario modeling, and financial aggregations.',
        tags: ['Excel', 'Pivot Tables', 'XLOOKUP', 'Financial Modeling'],
      },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage Engines',
    subtitle: 'Relational, document, and analytical embedded columnar database architectures.',
    skills: [
      {
        name: 'PostgreSQL',
        description: 'Enterprise relational database with ACID compliance, relational schemas, indexing, and JSONB support.',
        tags: ['PostgreSQL', 'Relational Schemas', 'Foreign Keys', 'Indexes'],
      },
      {
        name: 'DuckDB',
        description: 'In-process analytical OLAP database optimized for vectorized columnar SQL processing over Parquet files.',
        tags: ['DuckDB', 'Columnar OLAP', 'Vectorized Execution', 'Parquet'],
      },
      {
        name: 'MySQL',
        description: 'Relational database management, table constraints, transaction isolation, and query optimization.',
        tags: ['MySQL', 'Relational Models', 'Indexing'],
      },
      {
        name: 'MongoDB Atlas',
        description: 'Cloud document database with flexible JSON-like schemas, aggregation pipelines, and Mongoose ODM.',
        tags: ['MongoDB Atlas', 'Mongoose ODM', 'NoSQL', 'Document Store'],
      },
    ],
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & Transformation',
    subtitle: 'Analytics engineering DAG pipelines, dimensional star schemas, and automated data quality assertions.',
    skills: [
      {
        name: 'dbt (Data Build Tool)',
        description: 'Modelling raw data into Staging (stg_), Intermediate (int_), and Mart (mart_) analytical layers.',
        tags: ['dbt Core', 'Modular SQL', 'Lineage DAG', 'Schema Testing'],
      },
      {
        name: 'Dimensional Star Schema Modeling',
        description: 'Architecting Kimball-style dimension and fact tables optimized for high-performance analytical queries.',
        tags: ['Star Schema', 'Fact Tables', 'Dimension Tables', 'Marts'],
      },
      {
        name: 'ETL / ELT Pipelines & Data Quality',
        description: 'Automated data loading, schema validation, null checks, duplicate pruning, and relationship tests.',
        tags: ['ETL / ELT', 'Data Quality', 'Schema Validation', 'Integrity Tests'],
      },
    ],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning & Explainability',
    subtitle: 'Supervised predictive classification, validation metrics, and TreeSHAP mathematical interpretability.',
    skills: [
      {
        name: 'XGBoost & Scikit-Learn',
        description: 'Gradient boosted decision trees and ensemble classifiers optimized for tabular customer churn prediction.',
        tags: ['XGBoost', 'Scikit-Learn', 'Classification', 'ROC-AUC / F1'],
      },
      {
        name: 'TreeSHAP Model Explainability',
        description: 'Extracting exact Shapley feature attribution values to explain why individual accounts are flagged at-risk.',
        tags: ['TreeSHAP', 'Feature Attribution', 'Interpretability', 'Global & Local'],
      },
      {
        name: 'Churn Prediction Pipelines',
        description: 'End-to-end ML scoring pipelines outputting churn probabilities and decision-threshold revenue optimizations.',
        tags: ['Churn Prediction', 'Risk Scoring', 'Revenue at Risk'],
      },
    ],
  },
  {
    id: 'tools-apis',
    title: 'Developer Tools & REST APIs',
    subtitle: 'Version control, development environments, and application programming interfaces.',
    skills: [
      {
        name: 'Git & GitHub',
        description: 'Branching workflows, pull request reviews, semantic commit versioning, and GitHub Actions automation.',
        tags: ['Git', 'GitHub', 'Version Control', 'CI/CD'],
      },
      {
        name: 'RESTful API Engineering',
        description: 'Designing and consuming HTTP endpoints with FastAPI (Pydantic validation) and Express.js.',
        tags: ['REST APIs', 'FastAPI', 'Express.js', 'OpenAPI / Swagger'],
      },
      {
        name: 'Jupyter Notebooks',
        description: 'Interactive computational notebooks for rapid data exploration, visualization prototyping, and research.',
        tags: ['Jupyter', 'Reproducible Research', 'Interactive Python'],
      },
    ],
  },
];
