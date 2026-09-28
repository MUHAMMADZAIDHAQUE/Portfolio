export interface ExperienceItem {
  id: string;
  type: 'education' | 'leadership' | 'extracurricular' | 'sports';
  title: string;
  organization: string;
  period: string;
  location: string;
  badge: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const TIMELINE_ITEMS: ExperienceItem[] = [
  {
    id: 'nit-durgapur',
    type: 'education',
    title: 'Bachelor of Technology in Biotechnology',
    organization: 'National Institute of Technology Durgapur',
    period: '2023 – 2027',
    location: 'Durgapur, West Bengal',
    badge: 'Undergraduate Degree',
    description:
      'Pursuing B.Tech with focus on quantitative modeling, biostatistics, analytical computing, and database systems.',
    highlights: [
      'Applying statistical methods and exploratory analysis to customer behavior and data-driven systems.',
      'Coursework and practical projects in data analysis, statistical modeling, database design, and programming.',
    ],
    tags: ['Biotechnology', 'Data Analysis', 'Statistical Modeling', 'NIT Durgapur'],
  },
  {
    id: 'high-school',
    type: 'education',
    title: 'Class XII',
    organization: 'Dr. Zameer Ahsan High School, Jahanabad',
    period: '2022',
    location: 'Jahanabad, Bihar',
    badge: 'Higher Secondary',
    description: 'Completed senior secondary education with strong foundation in mathematics and science.',
    highlights: [
      'Academic focus on mathematics, physics, and analytical problem-solving.',
    ],
    tags: ['Mathematics', 'Science', 'Higher Secondary'],
  },
  {
    id: 'ecell-nitd',
    type: 'leadership',
    title: 'Senior Member',
    organization: 'E-Cell, Centre for Cognitive Activities, NIT Durgapur',
    period: 'April 2023 – Present',
    location: 'NIT Durgapur',
    badge: 'Campus Leadership',
    description:
      'Spearheaded planning and execution of entrepreneurial events and workshops while coordinating multiple activities, deadlines, and team responsibilities.',
    highlights: [
      'Spearheaded planning and execution of entrepreneurial events and workshops while coordinating multiple activities, deadlines, and team responsibilities.',
      'Mentored junior members and collaborated with startups, alumni, and industry experts to organize speaker sessions, pitch competitions, and ideation camps.',
      'Supported planning and promotion of E-Cell initiatives by coordinating information and requirements across teams.',
    ],
    tags: ['Leadership', 'Event Planning', 'Team Mentorship', 'Coordination'],
  },
  {
    id: 'recstacy',
    type: 'extracurricular',
    title: 'Junior Coordinator',
    organization: 'RECstacy, NIT Durgapur',
    period: 'Collegiate Operations',
    location: 'NIT Durgapur',
    badge: 'Event Coordination',
    description:
      'Assisted in planning and executing cultural events while coordinating with vendors, sponsors, and multiple stakeholders.',
    highlights: [
      'Assisted in planning and executing cultural events while coordinating with vendors, sponsors, and multiple stakeholders.',
      'Communicated requirements, tracked resources, and helped resolve operational issues under time-sensitive deadlines.',
    ],
    tags: ['Operations', 'Vendor Coordination', 'Event Logistics'],
  },
  {
    id: 'cricket-team',
    type: 'sports',
    title: 'Vice Captain',
    organization: 'Cricket Team, NIT Durgapur',
    period: '2024',
    location: 'NIT Durgapur',
    badge: 'Sports Leadership',
    description:
      'Selected to represent NIT Durgapur at the Inter-NIT Cricket Tournament in 2024 and served as Vice Captain.',
    highlights: [
      'Selected to represent NIT Durgapur at the Inter-NIT Cricket Tournament in 2024 and served as Vice Captain.',
      'Awarded Man of the Match for a strong performance in the semifinal while balancing academic responsibilities with regular team practices.',
    ],
    tags: ['Inter-NIT Cricket', 'Vice Captain', 'Man of the Match', 'Athletics'],
  },
];

