import type { TechStack } from "../types/project";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiAmazon,    
  SiExpress,
  SiGithub,
  SiHtml5,       
  SiCss3,        
  SiJavascript,  
  SiTailwindcss,
  // New Imports
  SiPython,
  SiPytest,
  SiDocker,
  SiFlask,
  SiDjango,
  SiSpringboot,
  SiPostgresql,
  SiNextdotjs,
  SiRedis,
  SiPostman
} from "react-icons/si";

export const techMap: Record<string, TechStack> = {
  // Frontend & Basics
  React: { name: "React", icon: SiReact },
  TypeScript: { name: "TypeScript", icon: SiTypescript },
  HTML: { name: "HTML5", icon: SiHtml5 },
  CSS: { name: "CSS3", icon: SiCss3 },
  JavaScript: { name: "JavaScript", icon: SiJavascript },
  Tailwind: { name: "Tailwind CSS", icon: SiTailwindcss },
  NextJS: { name: "Next.js", icon: SiNextdotjs },

  // Backend Frameworks
  NodeJS: { name: "Node.js", icon: SiNodedotjs },
  Express: { name: "Express", icon: SiExpress },
  Flask: { name: "Flask", icon: SiFlask },
  Django: { name: "Django", icon: SiDjango },
  SpringBoot: { name: "Spring Boot", icon: SiSpringboot },
  
  // Languages & Testing
  Python: { name: "Python", icon: SiPython },
  Pytest: { name: "Pytest", icon: SiPytest },

  // Databases & DevOps
  MongoDB: { name: "MongoDB", icon: SiMongodb },
  PostgreSQL: { name: "PostgreSQL", icon: SiPostgresql },
  Redis: { name: "Redis", icon: SiRedis },
  AWS: { name: "AWS", icon: SiAmazon },   
  Docker: { name: "Docker", icon: SiDocker },
  GitHub: { name: "GitHub", icon: SiGithub },
  Postman: { name: "Postman", icon: SiPostman },
};