export type Skill = { name: string; category: string; level: 'Foundational' | 'Working' | 'Strong' | 'Advanced'; score: number };
export type Student = {
  id: string; name: string; initials: string; branch: string; year: string; cgpa: number; readiness: number;
  skills: Skill[]; projects: string[]; certifications: string[]; experience: string[];
};
export type Opportunity = {
  id: string; title: string; company: string; location: string; type: string; skills: string[];
  match: number; deadline: string; description: string; eligibility: string; posted: string;
};
export type Application = { id: string; opportunityId: string; stage: 'Applied' | 'Screening' | 'Interview' | 'Offer'; appliedAt: string };
export type Department = { name: string; students: number; readiness: number; gap: number };
export type Candidate = { studentId: string; match: number; topSkills: string[]; gaps: string[] };
export type Module = { id: string; title: string; provider: string; duration: string; stage: string; progress: number; skill: string; color: string };

export const currentStudent: Student = {
  id: 'student-1',
  name: 'Alex Rivera',
  initials: 'AR',
  branch: 'Computer Science & Engineering',
  year: '4th Year (Senior)',
  cgpa: 8.8,
  readiness: 78,
  skills: [
    { name: 'SQL', category: 'Technical', level: 'Strong', score: 85 },
    { name: 'Python', category: 'Technical', level: 'Strong', score: 80 },
    { name: 'Product Thinking', category: 'Professional', level: 'Working', score: 72 },
    { name: 'Communication', category: 'Professional', level: 'Strong', score: 88 },
    { name: 'React', category: 'Technical', level: 'Working', score: 68 },
    { name: 'Experiment Design', category: 'Technical', level: 'Foundational', score: 45 },
  ],
  projects: [
    'Campus Food Delivery Analytics Dashboard (Python, SQL, Streamlit)',
    'E-Commerce User Drop-off & Conversion Funnel Analysis',
  ],
  certifications: [
    'Google Data Analytics Professional Certificate',
    'AWS Cloud Practitioner Certified',
  ],
  experience: [
    'Product Analytics Intern @ TechCorp (3 months)',
  ],
};

export const students: Student[] = [
  currentStudent,
  {
    id: 'student-2',
    name: 'Priya Sharma',
    initials: 'PS',
    branch: 'AI & Data Science',
    year: '4th Year',
    cgpa: 9.2,
    readiness: 88,
    skills: [
      { name: 'Python', category: 'Technical', level: 'Advanced', score: 95 },
      { name: 'Machine Learning', category: 'Technical', level: 'Strong', score: 88 },
      { name: 'SQL', category: 'Technical', level: 'Strong', score: 84 },
      { name: 'Statistics', category: 'Technical', level: 'Strong', score: 86 },
    ],
    projects: ['Predictive Student Placement Engine (Scikit-Learn, FastAPI)'],
    certifications: ['Deep Learning Specialization - Coursera'],
    experience: ['ML Research Intern @ IISc'],
  },
  {
    id: 'student-3',
    name: 'Rohan Mehta',
    initials: 'RM',
    branch: 'Electronics & Communication',
    year: '3rd Year',
    cgpa: 8.4,
    readiness: 65,
    skills: [
      { name: 'C++', category: 'Technical', level: 'Strong', score: 82 },
      { name: 'Embedded Systems', category: 'Technical', level: 'Working', score: 70 },
      { name: 'Communication', category: 'Professional', level: 'Strong', score: 80 },
    ],
    projects: ['IoT Smart Campus Energy Monitor'],
    certifications: ['ARM Microcontroller Architecture'],
    experience: ['Hardware Systems Trainee'],
  },
  {
    id: 'student-4',
    name: 'Ananya Patel',
    initials: 'AP',
    branch: 'Computer Science & Engineering',
    year: '4th Year',
    cgpa: 9.0,
    readiness: 82,
    skills: [
      { name: 'React', category: 'Technical', level: 'Advanced', score: 92 },
      { name: 'JavaScript', category: 'Technical', level: 'Advanced', score: 90 },
      { name: 'Python', category: 'Technical', level: 'Working', score: 74 },
    ],
    projects: ['Real-time Collaborative Whiteboard (React, WebSockets)'],
    certifications: ['Meta Frontend Developer Professional Certificate'],
    experience: ['Frontend Developer Intern @ Startup Lab'],
  },
  {
    id: 'student-5',
    name: 'Vikram Singh',
    initials: 'VS',
    branch: 'Mechanical Engineering',
    year: '4th Year',
    cgpa: 7.9,
    readiness: 58,
    skills: [
      { name: 'Python', category: 'Technical', level: 'Foundational', score: 55 },
      { name: 'CAD/CAM', category: 'Technical', level: 'Strong', score: 85 },
    ],
    projects: ['Automated Gearbox Failure Simulation'],
    certifications: ['SolidWorks CSWA Certified'],
    experience: ['Industrial Automation Trainee'],
  },
];

export const opportunities: Opportunity[] = [
  {
    id: 'opp-1',
    title: 'Associate Product Analyst',
    company: 'Tata Digital',
    location: 'Bengaluru',
    type: 'Full-time',
    skills: ['SQL', 'Python', 'Product Thinking', 'Communication'],
    match: 88,
    deadline: 'Oct 15, 2026',
    description: 'Partner with product and operations teams to turn customer signals into decisions used by millions of e-commerce users daily.',
    eligibility: 'B.Tech / B.E. Graduating 2026',
    posted: '2 days ago',
  },
  {
    id: 'opp-2',
    title: 'Data Analyst Intern',
    company: 'Swiggy',
    location: 'Remote / Bengaluru',
    type: 'Internship',
    skills: ['SQL', 'Python', 'Experiment Design', 'Communication'],
    match: 92,
    deadline: 'Oct 20, 2026',
    description: 'Analyze hyper-local delivery logistics, driver efficiency metrics, and consumer conversion funnels to drive marketplace recommendations.',
    eligibility: 'Pre-final / Final Year Students',
    posted: '3 days ago',
  },
  {
    id: 'opp-3',
    title: 'Frontend Engineer (Associate)',
    company: 'Razorpay',
    location: 'Bengaluru',
    type: 'Full-time',
    skills: ['React', 'JavaScript', 'Product Thinking', 'Communication'],
    match: 76,
    deadline: 'Nov 01, 2026',
    description: 'Build fast, accessible, high-reliability payment checkout interfaces and merchant dashboard tools for fintech products.',
    eligibility: 'B.Tech / B.Sc CS Graduating 2026',
    posted: '1 week ago',
  },
  {
    id: 'opp-4',
    title: 'Business Intelligence Analyst',
    company: 'Flipkart',
    location: 'Bengaluru',
    type: 'Full-time',
    skills: ['SQL', 'Python', 'Communication', 'Experiment Design'],
    match: 84,
    deadline: 'Oct 28, 2026',
    description: 'Transform supply chain data into executive dashboards and actionable inventory replenishment models.',
    eligibility: 'All Engineering Branches',
    posted: '4 days ago',
  },
];

export const applications: Application[] = [
  { id: 'app-1', opportunityId: 'opp-2', stage: 'Interview', appliedAt: '2 days ago' },
  { id: 'app-2', opportunityId: 'opp-1', stage: 'Screening', appliedAt: '1 week ago' },
  { id: 'app-3', opportunityId: 'opp-4', stage: 'Applied', appliedAt: 'Yesterday' },
];

export const departments: Department[] = [
  { name: 'Computer Science & Engineering', students: 240, readiness: 78, gap: 22 },
  { name: 'Artificial Intelligence & Data Science', students: 180, readiness: 84, gap: 16 },
  { name: 'Information Technology', students: 160, readiness: 72, gap: 28 },
  { name: 'Electronics & Communication', students: 200, readiness: 64, gap: 36 },
  { name: 'Mechanical Engineering', students: 140, readiness: 52, gap: 48 },
];

export const modules: Module[] = [
  { id: 'm1', title: 'Advanced SQL Window Functions & Aggregations', provider: 'SkillBridge Sprint', duration: '2 hours', stage: 'Now', progress: 85, skill: 'SQL', color: 'teal' },
  { id: 'm2', title: 'Product Metrics & A/B Experimentation Design', provider: 'Reforge Masterclass', duration: '4 hours', stage: 'Next', progress: 40, skill: 'Experiment Design', color: 'yellow' },
  { id: 'm3', title: 'Building Proof-of-Work Portfolios for Recruiters', provider: 'SkillBridge Studio', duration: '3 hours', stage: 'Later', progress: 0, skill: 'Portfolio Evidence', color: 'orange' },
];

export const candidates: Candidate[] = [
  { studentId: 'student-2', match: 92, topSkills: ['Python', 'Machine Learning', 'SQL'], gaps: ['Experiment Design'] },
  { studentId: 'student-1', match: 88, topSkills: ['SQL', 'Python', 'Communication'], gaps: ['Experiment Design'] },
  { studentId: 'student-4', match: 82, topSkills: ['React', 'JavaScript', 'Python'], gaps: ['SQL Window Functions'] },
  { studentId: 'student-3', match: 65, topSkills: ['C++', 'Communication'], gaps: ['Python', 'SQL'] },
];

export const companyNames: string[] = [
  'Tata Digital',
  'Swiggy',
  'Razorpay',
  'Flipkart',
  'Infosys',
  'Wipro',
  'TCS',
  'Amazon',
];