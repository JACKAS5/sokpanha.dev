import type { Project } from "../types/project";
import { techMap } from "../config/tect"; 

export const projects: Project[] = [
  {
    title: "Shoply E-Commerce Platform",
    description:
      "A scalable, modular e-commerce web application demonstrating modern frontend development practices with vanilla JavaScript.",
    tech: [techMap.HTML, techMap.CSS, techMap.JavaScript],
    image: "https://github.com/JACKAS5/Shoply/blob/master/images/Shoply_Screentshot.png",
    github: "https://github.com/JACKAS5/Shoply",
    demo: "https://jackas5.github.io/Shoply/index.html",
    category: "Frontend",
  },
  {
    title: "Travel Planning Frontend",
    description: "Full-stack e-commerce system.",
    tech: [techMap.React, techMap.TypeScript, techMap.Tailwind],
    image: "/project2.jpg",
    github: "https://github.com/JACKAS5/travelplanning-frontend",
    demo: "https://jackas5.github.io/travelplanning-frontend/",
    category: "Frontend",
  },
  {
    title: "API Authentication Service",
    description: "This project implements secure user authentication using JWT access and refresh tokens, password hashing with bcrypt, automated testing, Docker containerization, and pre-commit hooks for automatic code quality enforcement.",
    tech: [techMap.Python, techMap.Flask, techMap.MongoDB, techMap.Pytest ,techMap.Docker, techMap.Postman],
    image: "/project3.jpg",
    github: "#",
    demo: "#",
    category: "Backend",
  },
];