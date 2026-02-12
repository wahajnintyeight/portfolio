export interface SocialLink {
  platform: string;
  url: string;
  icon: 'github' | 'linkedin' | 'mail' | 'phone';
  display: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  techStack: string[];
  location: string;
  period: string;
  description: string[];
  images: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  summary: string;
  socials: SocialLink[];
}