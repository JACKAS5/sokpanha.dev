import type { TechStack } from "../types/project";
import {
  SiReact, SiTypescript, SiNodedotjs, SiMongodb, SiAmazon, SiExpress,
  SiGithub, SiHtml5, SiCss3, SiJavascript, SiTailwindcss,
  SiPython, SiPytest, SiDocker, SiFlask, SiDjango, SiSpringboot,
  SiPostgresql, SiNextdotjs, SiRedis, SiPostman
} from "react-icons/si";

export const techMap: Record<string, TechStack> = {
  React: { name: "React", icon: SiReact, color: "#61DAFB" },
  TypeScript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  HTML: { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  CSS: { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  JavaScript: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  Tailwind: { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  NextJS: { name: "Next.js", icon: SiNextdotjs, color: "#000000" },

  NodeJS: { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  Express: { name: "Express", icon: SiExpress, color: "#000000" },
  Flask: { name: "Flask", icon: SiFlask, color: "#000000" },
  Django: { name: "Django", icon: SiDjango, color: "#092E20" },
  SpringBoot: { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },

  Python: { name: "Python", icon: SiPython, color: "#3776AB" },
  Pytest: { name: "Pytest", icon: SiPytest, color: "#0A9EDC" },

  MongoDB: { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  Redis: { name: "Redis", icon: SiRedis, color: "#DC382D" },
  AWS: { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  Docker: { name: "Docker", icon: SiDocker, color: "#2496ED" },
  GitHub: { name: "GitHub", icon: SiGithub, color: "#181717" }, // fixed black color
  Postman: { name: "Postman", icon: SiPostman, color: "#FF6C37" },
};