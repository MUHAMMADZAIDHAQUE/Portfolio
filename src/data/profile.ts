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
  headline: 'I turn complex data into clear, actionable insights.',
  bio: 'Undergraduate at NIT Durgapur with hands-on experience in Python, SQL, Excel, and database-driven applications. Specializing in exploratory data analysis, statistical modeling, KPI reporting, and end-to-end customer analytics.',
  location: 'Jamshedpur, Jharkhand',
  status: 'Open for Data Analyst & Analytics Roles',
  roles: [
    'Data Analyst',
    'Business Intelligence Analyst',
    'Junior Data Analyst',
    'Software Developer',
  ],
  education: {
    institution: 'National Institute of Technology (NIT) Durgapur',
    degree: 'Bachelor of Technology in Biotechnology',
    period: '2023 – 2027',
    location: 'Durgapur, West Bengal, India',
  },
  contact: {
    email: 'mdzaidhaque4@gmail.com',
    github: 'https://github.com/MUHAMMADZAIDHAQUE',
    githubUser: 'MUHAMMADZAIDHAQUE',
    linkedin: 'https://www.linkedin.com/in/mdzaidhaque',
    linkedinUser: 'mdzaidhaque',
    location: 'Jamshedpur, Jharkhand',
    resumePath: '/md-zaid-haque-resume.pdf',
  },
  stats: [
    {
      label: 'Records Analyzed',
      value: '1,500',
      detail: 'Customer records with multi-dimensional retention metrics',
    },
    {
      label: 'Predictive ML',
      value: '91.4%',
      detail: 'XGBoost churn classifier with TreeSHAP explainability',
    },
    {
      label: 'Live Platforms',
      value: '2',
      detail: 'Production-ready customer intelligence and web applications',
    },
  ],
};

