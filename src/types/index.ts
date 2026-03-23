export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  courses: string[];
}

export interface Skills {
  [category: string]: string[];
}

export interface ResumeProject {
  name: string;
  tools: string[];
  bullets: string[];
}

export interface ProjectMeta {
  url: string;
  language: string;
  isHardware: boolean;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
