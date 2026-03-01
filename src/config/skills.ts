import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiAmazonwebservices, 
  SiDocker, 
  SiTailwindcss 
} from "react-icons/si";
import type { Skill } from "../types/skills";

export const SKILLS_CONFIG: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
];