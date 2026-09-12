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
  id: 's-001', name: 'Ananya Iyer', initials: 'AI', branch: 'Computer Science', year: '3rd year', cgpa: 8.7, readiness: 72,
  skills: [
    { name: 'Python', category: 'Technical', level: 'Advanced', score: 86 }, { name: 'SQL', category: 'Technical', level: 'Strong', score: 74 },
    { name: 'React', category: 'Technical', level: 'Working', score: 64 }, { name: 'Data Structures', category: 'Technical', level: 'Strong', score: 78 },
    { name: 'Machine Learning', category: 'Technical', level: 'Working', score: 58 }, { name: 'Communication', category: 'Professional', level: 'Strong', score: 76 },
    { name: 'Product Thinking', category: 'Professional', level: 'Working', score: 62 }, { name: 'Leadership', category: 'Professional', level: 'Foundational', score: 45 },
  ],
  projects: ['CampusPulse — student engagement analytics', 'CropSense — lightweight crop health classifier'],
  certifications: ['Google Data Analytics', 'AWS Cloud Practitioner Essentials'],
  experience: ['Data intern · BharatMinds · Summer 2024'],
};

export const students: Student[] = [
  currentStudent,
  { id: 's-002', name: 'Rohan Mehta', initials: 'RM', branch: 'Information Technology', year: '4th year', cgpa: 8.2, readiness: 81, skills: [{ name: 'Java', category: 'Technical', level: 'Advanced', score: 90 }, { name: 'Spring Boot', category: 'Technical', level: 'Strong', score: 82 }, { name: 'SQL', category: 'Technical', level: 'Strong', score: 77 }], projects: ['TransitOS API'], certifications: ['Oracle Java Foundations'], experience: ['Backend intern · Zoho'] },
  { id: 's-003', name: 'Meera Nair', initials: 'MN', branch: 'Electronics & Communication', year: '3rd year', cgpa: 9.1, readiness: 76, skills: [{ name: 'Python', category: 'Technical', level: 'Strong', score: 79 }, { name: 'Embedded C', category: 'Technical', level: 'Strong', score: 75 }, { name: 'IoT', category: 'Technical', level: 'Working', score: 61 }], projects: ['Low-cost air quality sensor'], certifications: ['NPTEL IoT'], experience: [] },
  { id: 's-004', name: 'Arjun Kapoor', initials: 'AK', branch: 'Mechanical Engineering', year: '4th year', cgpa: 7.9, readiness: 68, skills: [{ name: 'CAD', category: 'Technical', level: 'Advanced', score: 88 }, { name: 'Python', category: 'Technical', level: 'Working', score: 56 }, { name: 'Project Management', category: 'Professional', level: 'Strong', score: 73 }], projects: ['EV thermal system'], certifications: ['AutoCAD Professional'], experience: ['Design intern · Tata Motors'] },
  { id: 's-005', name: 'Kavya Shah', initials: 'KS', branch: 'Computer Science', year: '2nd year', cgpa: 8.8, readiness: 61, skills: [{ name: 'React', category: 'Technical', level: 'Strong', score: 80 }, { name: 'Figma', category: 'Professional', level: 'Strong', score: 77 }, { name: 'JavaScript', category: 'Technical', level: 'Strong', score: 74 }], projects: ['Swasthya appointment app'], certifications: [], experience: [] },
  { id: 's-006', name: 'Vivek Rao', initials: 'VR', branch: 'Data Science', year: '4th year', cgpa: 8.5, readiness: 84, skills: [{ name: 'Python', category: 'Technical', level: 'Advanced', score: 92 }, { name: 'Machine Learning', category: 'Technical', level: 'Advanced', score: 88 }, { name: 'SQL', category: 'Technical', level: 'Strong', score: 84 }], projects: ['Demand forecasting for kiranas'], certifications: ['IBM ML Professional'], experience: ['Data science intern · PhonePe'] },
];

export const opportunities: Opportunity[] = [
  { id: 'opp-01', title: 'Associate Product Analyst', company: 'Razorpay', location: 'Bengaluru · Hybrid', type: 'Full-time', skills: ['SQL', 'Python', 'Product Thinking', 'Communication'], match: 91, deadline: '18 Oct 2025', posted: '2 days ago', description: 'Work with product and operations teams to turn payment data into decisions used by millions of businesses.', eligibility: 'Final-year students · 7.5+ CGPA' },
  { id: 'opp-02', title: 'Data Science Intern', company: 'Myntra', location: 'Bengaluru · On-site', type: 'Internship', skills: ['Python', 'Machine Learning', 'SQL'], match: 84, deadline: '24 Oct 2025', posted: '4 days ago', description: 'Build experimentation and recommendation systems for India’s most loved fashion marketplace.', eligibility: '3rd / 4th year · CSE, DS, Statistics' },
  { id: 'opp-03', title: 'Frontend Engineer Intern', company: 'Postman', location: 'Remote · India', type: 'Internship', skills: ['React', 'JavaScript', 'Communication'], match: 78, deadline: '29 Oct 2025', posted: '1 week ago', description: 'Help shape delightful developer tools with a team that cares deeply about craft and accessibility.', eligibility: 'Students with a frontend portfolio' },
  { id: 'opp-04', title: 'Business Analyst', company: 'Deloitte India', location: 'Hyderabad · Hybrid', type: 'Full-time', skills: ['SQL', 'Communication', 'Project Management'], match: 76, deadline: '02 Nov 2025', posted: '1 week ago', description: 'Translate complex client questions into clear analysis and practical transformation roadmaps.', eligibility: 'Any engineering branch · 7.0+ CGPA' },
  { id: 'opp-05', title: 'Cloud Engineering Trainee', company: 'Freshworks', location: 'Chennai · Hybrid', type: 'Full-time', skills: ['Python', 'AWS', 'SQL'], match: 69, deadline: '11 Nov 2025', posted: '2 weeks ago', description: 'Join an early-career cohort building reliable systems for thousands of growing businesses.', eligibility: '2025 / 2026 graduates · 7.0+ CGPA' },
  { id: 'opp-06', title: 'Growth Strategy Intern', company: 'Meesho', location: 'Bengaluru · Hybrid', type: 'Internship', skills: ['Communication', 'Product Thinking', 'SQL'], match: 73, deadline: '15 Nov 2025', posted: '2 weeks ago', description: 'Explore new ways to help India’s next billion users discover value online.', eligibility: '3rd year and above' },
];

export const applications: Application[] = [
  { id: 'app-01', opportunityId: 'opp-01', stage: 'Interview', appliedAt: '08 Oct 2025' },
  { id: 'app-02', opportunityId: 'opp-02', stage: 'Screening', appliedAt: '05 Oct 2025' },
  { id: 'app-03', opportunityId: 'opp-03', stage: 'Applied', appliedAt: '01 Oct 2025' },
];

export const departments: Department[] = [
  { name: 'Computer Science & Engineering', students: 842, readiness: 76, gap: 24 },
  { name: 'Information Technology', students: 516, readiness: 73, gap: 27 },
  { name: 'Electronics & Communication', students: 408, readiness: 62, gap: 38 },
  { name: 'Mechanical Engineering', students: 391, readiness: 58, gap: 42 },
  { name: 'Civil Engineering', students: 284, readiness: 51, gap: 49 },
];

export const modules: Module[] = [
  { id: 'm-01', title: 'SQL for Product Analytics', provider: 'Mode Analytics', duration: '6h 20m', stage: 'Now', progress: 64, skill: 'SQL', color: 'teal' },
  { id: 'm-02', title: 'Thinking in Experiments', provider: 'Reforge', duration: '3h 10m', stage: 'Next up', progress: 18, skill: 'Product Thinking', color: 'orange' },
  { id: 'm-03', title: 'Practical Machine Learning', provider: 'Google', duration: '11h 40m', stage: 'Build depth', progress: 0, skill: 'Machine Learning', color: 'navy' },
  { id: 'm-04', title: 'Presenting with Data', provider: 'LinkedIn Learning', duration: '2h 40m', stage: 'Polish', progress: 0, skill: 'Communication', color: 'yellow' },
];

export const candidates: Candidate[] = students.map((student, index) => ({
  studentId: student.id,
  match: [94, 89, 86, 82, 79, 76][index] ?? 72,
  topSkills: student.skills.slice(0, 3).map((skill) => skill.name),
  gaps: index % 2 ? ['Stakeholder communication'] : ['Product discovery', 'Experiment design'],
}));

export const companyNames = ['Razorpay', 'Myntra', 'Postman', 'Deloitte India', 'Freshworks', 'Meesho', 'PhonePe', 'Tata Digital', 'Zoho', 'CRED'];