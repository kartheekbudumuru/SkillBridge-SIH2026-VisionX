import type { Opportunity, Student } from '@/data/types';

export const scoreWeights = { skillMatch: 60, projects: 15, education: 10, experience: 10, other: 5 };

export function calculateMatchScore(student: Student, opportunity: Opportunity) {
  const skillHits = opportunity.skills.filter((required) => student.skills.some((skill) => skill.name.toLowerCase() === required.toLowerCase()));
  const skillMatch = Math.round((skillHits.length / opportunity.skills.length) * 100);
  const projectScore = student.projects.length ? Math.min(100, 52 + student.projects.length * 14) : 35;
  const educationScore = Math.min(100, Math.round(student.cgpa * 10.4));
  const experienceScore = student.experience.length ? 88 : 42;
  const otherScore = student.certifications.length ? 82 : 48;
  const total = Math.round((skillMatch * .6) + (projectScore * .15) + (educationScore * .1) + (experienceScore * .1) + (otherScore * .05));
  return { total, skillMatch, projectScore, educationScore, experienceScore, otherScore, skillHits };
}

export function roleGap(student: Student, targetSkills: string[]) {
  return targetSkills.map((name) => {
    const skill = student.skills.find((item) => item.name.toLowerCase() === name.toLowerCase());
    return { name, current: skill?.score ?? 0, target: skill ? Math.min(92, skill.score + 18) : 78, status: skill ? (skill.score >= 72 ? 'Ready' : 'Build next') : 'Priority gap' };
  });
}