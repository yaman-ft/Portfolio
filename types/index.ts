export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: Tag[];
  liveUrl?: string;
  githubUrl?: string;
  category: "Vue" | "React" | "Angular" | "Laravel" | "Full Stack";
}

export interface Tag {
  name: string;
  color: "vue" | "react" | "angular" | "laravel" | "php" | "tailwind" | "typescript" | "next" | "nuxt" | "node" | "docker" | "mysql";
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  description: string;
  category: "frontend" | "backend" | "styling" | "tools";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  icon: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}
