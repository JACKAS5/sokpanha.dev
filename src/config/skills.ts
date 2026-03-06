import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiAmazonwebservices, 
  SiDocker, 
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiPostman
} from "react-icons/si";

import { DiJava } from "react-icons/di"; 

import type { Skill } from "../types/skills";

export const SKILLS_CONFIG: Skill[] = [
  // Frontend
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: DiJava, color: "#f89820" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },

  // Databases
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },

  // DevOps / Cloud
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },

  // Tools
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];