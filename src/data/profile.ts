export interface ProfileData {
  name: string;
  logoText: string;
  tagline: string;
  headline: string;
  bio: string;
  location: string;
  status: string;
  roles: string[];
  education: {
    institution: string;
    degree: string;
    period: string;
    location: string;
  };
  contact: {
    email: string;
    github: string;
    githubUser: string;
    linkedin: string;
    linkedinUser: string;
    location: string;
    resumePath: string;
  };
  stats: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
}

export const PROFILE: ProfileData = {
  name: 'Md Zaid Haque',
  logoText: 'ZAID.',
  tagline: 'Data Analyst & Software Developer',
  headline: 'I turn complex data into clear decisions.',
  bio: "I'm Md Zaid Haque — a Data Analyst and Software Developer at NIT Durgapur, building analytical products and data-driven applications.",
  location: 'Jamshedpur, Jharkhand, India',
  status: 'Available for entry-level opportunities',
  roles: ['Entry-Level Data Analyst', 'Software Developer', 'Analytics Engineer'],
  education: {
    institution: 'National Institute of Technology (NIT) Durgapur',
    degree: 'B.Tech in Biotechnology',
    period: '2023 – 2027',
    location: 'Durgapur, West Bengal, India',
  },
  contact: {
    email: 'mdzaidhaque.dev@gmail.com',
    github: 'https://github.com/MUHAMMADZAIDHAQUE',
    githubUser: 'MUHAMMADZAIDHAQUE',
    linkedin: 'https://www.linkedin.com/in/md-zaid-haque',
    linkedinUser: 'md-zaid-haque',
    location: 'Jamshedpur, Jharkhand, India',
    resumePath: '/Md_Zaid_Haque_Resume.pdf',
  },
  stats: [
    {
      label: 'Dataset Analyzed',
      value: '1,500',
      detail: 'Customer records with multi-dimensional retention metrics',
    },
    {
      label: 'Predictive ML',
      value: '91.4%',
      detail: 'XGBoost churn classifier with TreeSHAP explainability',
    },
    {
      label: 'Cloud Deployment',
      value: '100%',
      detail: 'Live production SaaS backend, database & frontend on Render',
    },
  ],
};
