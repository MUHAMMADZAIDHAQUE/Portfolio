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
    title: 'Bachelor of Technology (B.Tech) in Biotechnology',
    organization: 'National Institute of Technology (NIT) Durgapur',
    period: '2023 – 2027',
    location: 'Durgapur, West Bengal, India',
    badge: 'Undergraduate Degree',
    description:
      'Pursuing an engineering degree focusing on computational mathematics, biological data modeling, statistical hypothesis testing, and quantitative problem-solving.',
    highlights: [
      'Applying scientific rigor and statistical inference to data analytics engineering and predictive machine learning.',
      'Active coursework in biostatistics, computational mathematics, data modeling, and algorithmic problem-solving.',
      'Collaborating on technical initiatives, cross-functional student projects, and open-source data software.',
    ],
    tags: ['Biotechnology', 'Data Analytics', 'Statistical Modeling', 'Algorithms', 'NIT Durgapur'],
  },
  {
    id: 'ecell-nitd',
    type: 'leadership',
    title: 'Active Member & Initiative Coordinator',
    organization: 'Entrepreneurship Cell (E-Cell), NIT Durgapur',
    period: '2023 – Present',
    location: 'NIT Durgapur',
    badge: 'Campus Leadership',
    description:
      'Contributing to campus-wide entrepreneurial events, startup pitch sessions, technical workshops, and student innovation initiatives.',
    highlights: [
      'Coordinated event logistics and stakeholder engagement for campus entrepreneurship summits and speaker sessions.',
      'Promoted data-driven decision-making and software tools among student startup founders.',
      'Developed strong real-time team coordination and organizational skills under tight deadlines.',
    ],
    tags: ['Leadership', 'Event Coordination', 'Entrepreneurship', 'Stakeholder Communication'],
  },
  {
    id: 'cca-nitd',
    type: 'leadership',
    title: 'Active Member — Technical & Cognitive Initiatives',
    organization: 'Centre for Cognitive Activities (CCA), NIT Durgapur',
    period: '2023 – Present',
    location: 'NIT Durgapur',
    badge: 'Technical Society',
    description:
      'Participating in activities organized by NIT Durgapur’s central technical club responsible for organizing Aarohan (Annual Techno-Management Fest) and student skill workshops.',
    highlights: [
      'Collaborated on organizing student technical competitions, logic challenges, and analytical events.',
      'Engaged with peer engineering groups on problem-solving, algorithmic structures, and technical demonstrations.',
    ],
    tags: ['Technical Club', 'Aarohan', 'Cognitive Activities', 'Workshop Operations'],
  },
  {
    id: 'recstacy',
    type: 'extracurricular',
    title: 'Core Organizing Committee & Ground Operations',
    organization: 'RECstacy — Annual Cultural Festival, NIT Durgapur',
    period: '2024 – 2025',
    location: 'NIT Durgapur',
    badge: 'Cultural Operations',
    description:
      'Managed operational logistics, crowd coordination, and scheduling for Eastern India’s major collegiate cultural festival.',
    highlights: [
      'Supervised venue readiness, stage scheduling, and emergency crisis resolution across multi-day cultural events.',
      'Ensured seamless coordination between student committees, artists, and institutional administration.',
    ],
    tags: ['Operations Management', 'Event Logistics', 'Team Leadership'],
  },
  {
    id: 'inter-nit-cricket',
    type: 'sports',
    title: 'Vice Captain & Semifinal Man of the Match',
    organization: 'Inter-NIT Cricket Championship 2024',
    period: '2024',
    location: 'NIT Durgapur Cricket Team',
    badge: 'Athletic Excellence',
    description:
      'Represented NIT Durgapur as Vice Captain in the prestigious Inter-NIT Cricket Tournament, leading on-field tactical strategy and game execution.',
    highlights: [
      'Awarded **Man of the Match in the Semifinal** for game-changing individual performance under intense tournament pressure.',
      'Assisted the team captain in bowling changes, fielding placements, and high-stakes match strategies.',
      'Honed leadership, split-second tactical clarity, and steadfast team composure on the competitive field.',
    ],
    tags: ['Inter-NIT Cricket', 'Vice Captain', 'Man of the Match', 'Athletics', 'Competitive Sports'],
  },
];
