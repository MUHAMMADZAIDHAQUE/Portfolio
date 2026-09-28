export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badgeText: string;
  isPrimary: boolean;
  image: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  keyHighlights: Array<{
    title: string;
    description: string;
  }>;
  technologies: string[];
  metrics: Array<{
    label: string;
    value: string;
    note: string;
  }>;
  links: {
    github: string;
    liveDemo?: string;
    apiDocs?: string;
    healthEndpoint?: string;
  };
  visualType: 'customer360-preview' | 'wanderlust-preview';
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'customer360',
    title: 'Customer360',
    subtitle: 'AI-Powered Customer Intelligence & Retention Platform',
    category: 'Data Analytics & Machine Learning',
    badgeText: 'Flagship Platform',
    isPrimary: true,
    image: '/assets/projects/customer360/dashboard_overview.jpg',
    tagline: 'Understand customers. Predict churn. Protect revenue.',
    overview:
      'Customer360 is an enterprise-grade customer analytics platform engineered to ingest raw transactional event streams, transform them into star-schema analytical marts via dbt, perform cohort and RFM retention analysis, and predict customer churn with explainable ML.',
    problem:
      'Subscription businesses struggle with silent customer attrition. Raw transactional logs across PostgreSQL lack cohesive behavioral metrics, making it difficult for business leaders to identify at-risk cohorts before revenue is lost.',
    solution:
      'Designed a multi-layer analytics engineering pipeline (RAW → STAGING → INTERMEDIATE → MARTS) using SQL, DuckDB, and dbt. Built an XGBoost churn prediction model with TreeSHAP local/global feature attribution, integrated a Star Schema Power BI model, and deployed a FastAPI backend + React frontend to Render.',
    architecture: [
      'Data Ingestion: 1,500 customer records in PostgreSQL & DuckDB',
      'Analytics Engineering: dbt Core modeling with automated schema testing',
      'Investigation Layer: Statistical hypothesis testing, RFM segmentation & cohort survival matrices',
      'Machine Learning: XGBoost classifier with TreeSHAP interpretability pipeline',
      'Application Layer: FastAPI async REST API with Pydantic contracts & React TypeScript client',
      'Production Deployment: Automated Render Infrastructure-as-Code blueprint',
    ],
    keyHighlights: [
      {
        title: '1,500 Customer Cohort & RFM Modeling',
        description:
          'Segmented customer lifecycle by Recency, Frequency, and Monetary value into actionable tiers (Champions, Loyal, At-Risk, Churned).',
      },
      {
        title: 'Predictive Churn Engine with TreeSHAP',
        description:
          'Trained an XGBoost model achieving 91.4% accuracy with transparent SHAP feature contributions explaining why specific accounts are churning.',
      },
      {
        title: 'Star Schema & dbt Analytical Marts',
        description:
          'Curated dimension (`dim_customers`, `dim_plans`) and fact (`fact_subscriptions`, `fact_transactions`) tables optimized for Power BI and SQL analytics.',
      },
      {
        title: 'Public Cloud Deployment on Render',
        description:
          'Fully deployed on Render with PostgreSQL database, FastAPI backend with OpenAPI documentation, and responsive React frontend.',
      },
    ],
    technologies: [
      'Python',
      'SQL',
      'PostgreSQL',
      'dbt Core',
      'DuckDB',
      'Power BI / DAX',
      'XGBoost',
      'TreeSHAP',
      'FastAPI',
      'React',
      'TypeScript',
      'Docker',
      'Render',
    ],
    metrics: [
      { label: 'Dataset Scope', value: '1,500', note: 'Customer records analyzed' },
      { label: 'Model Accuracy', value: '91.4%', note: 'XGBoost churn classifier' },
      { label: 'Data Marts', value: '100%', note: 'dbt star schema coverage' },
      { label: 'Live Backend', value: 'Render', note: 'Production REST API' },
    ],
    links: {
      github: 'https://github.com/MUHAMMADZAIDHAQUE/Customer360',
      liveDemo: 'https://customer360-frontend.onrender.com',
      apiDocs: 'https://customer360-api-u4k0.onrender.com/docs',
      healthEndpoint: 'https://customer360-api-u4k0.onrender.com/health',
    },
    visualType: 'customer360-preview',
  },
  {
    id: 'wanderlust',
    title: 'WanderLust',
    subtitle: 'Travel & Vacation Accommodation Marketplace',
    category: 'Full-Stack Software Engineering',
    badgeText: 'Software Platform',
    isPrimary: false,
    image: '/assets/projects/wanderlust/explore_listings.jpg',
    tagline: 'Modern accommodation booking and listing marketplace.',
    overview:
      'WanderLust is a full-stack marketplace application designed for property listings, vacation rentals, and traveler reviews. Built using the Model-View-Controller (MVC) architectural pattern with complete CRUD capabilities, cloud image pipeline, and map geocoding.',
    problem:
      'Travelers need a dependable and intuitive interface to discover accommodations, view exact geographic locations, and read genuine verified user reviews without cluttered interfaces.',
    solution:
      'Engineered a scalable Node.js & Express.js MVC platform backed by MongoDB Atlas. Integrated Mapbox API for forward geocoding and interactive maps, Cloudinary for dynamic media optimization, and robust session-based authentication/authorization.',
    architecture: [
      'Architecture Pattern: Model-View-Controller (MVC) with Express RESTful routing',
      'Database: MongoDB Atlas with Mongoose ODM schemas and index optimization',
      'Security & Auth: Session management, password hashing, and role-based permissions',
      'Media Pipeline: Cloudinary integration for multipart file upload and responsive CDN image delivery',
      'Geospatial: Mapbox SDK for location geocoding and interactive cluster maps',
      'Feedback Loop: Relational review and 5-star rating system with authorization checks',
    ],
    keyHighlights: [
      {
        title: 'Full-Stack MVC Architecture',
        description:
          'Structured routing, controllers, data models, and dynamic EJS views with reusable components and error handling middleware.',
      },
      {
        title: 'Interactive Mapbox Geolocation',
        description:
          'Automatic coordinates lookup and interactive pinpoints for property listings across worldwide destinations.',
      },
      {
        title: 'Secure Authentication & Sessions',
        description:
          'Comprehensive user signup, login, session persistence, and authorization safeguards preventing unauthorized listing modifications.',
      },
      {
        title: 'Cloudinary Image Transformation',
        description:
          'Automated image upload pipeline with automatic thumbnail creation and bandwidth-efficient CDN delivery.',
      },
    ],
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Mongoose',
      'JavaScript (ES6+)',
      'EJS',
      'Cloudinary API',
      'Mapbox API',
      'REST APIs',
      'HTML5/CSS3',
    ],
    metrics: [
      { label: 'Architecture', value: 'MVC', note: 'Clean separation of concerns' },
      { label: 'Database', value: 'MongoDB', note: 'Atlas Cloud Cluster' },
      { label: 'Media CDN', value: 'Cloudinary', note: 'Optimized image delivery' },
      { label: 'Geocoding', value: 'Mapbox', note: 'Forward coordinate mapping' },
    ],
    links: {
      github: 'https://github.com/MUHAMMADZAIDHAQUE',
    },
    visualType: 'wanderlust-preview',
  },
];
