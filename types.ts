
export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}
