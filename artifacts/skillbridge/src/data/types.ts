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
  id: '', name: '', initials: '', branch: '', year: '', cgpa: 0, readiness: 0,
  skills: [],
  projects: [],
  certifications: [],
  experience: [],
};

export const students: Student[] = [];

export const opportunities: Opportunity[] = [];

export const applications: Application[] = [];

export const departments: Department[] = [];

export const modules: Module[] = [];

export const candidates: Candidate[] = [];

export const companyNames: string[] = [];