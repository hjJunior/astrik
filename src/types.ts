export interface Skill {
  name: string;
  matchingPercentage: number;
}

export interface SkillSection {
  type: string;
  skills: Skill[];
}

export interface User {
  name: string;
  imageUrl: string;
  role: string;
  matchingPercentage: number;
  skillsSections: SkillSection[];
}
