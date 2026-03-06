import type { Project } from "../types/project";
import { techMap } from "../config/tect";

export const projects: Project[] = [
  {
    title: "Shoply E-Commerce Platform",
    description:
      "A scalable, modular e-commerce web application demonstrating modern frontend development practices with vanilla JavaScript.",
    tech: [techMap.HTML, techMap.CSS, techMap.JavaScript],
    image: "https://github.com/JACKAS5/Shoply/blob/master/images/Shoply_Screentshot.png?raw=true",
    github: "https://github.com/JACKAS5/Shoply",
    demo: "https://jackas5.github.io/Shoply/index.html",
    category: "Frontend",
  },
  {
    title: "Travel Planning Frontend",
    description: "TravelPlanning Frontend is a modern, responsive React application designed to provide users with an interactive experience for exploring travel destinations. The application showcases featured destinations with rich visuals, info badges, and hero carousels, allowing users to browse and plan trips effectively.",
    tech: [techMap.React, techMap.TypeScript, techMap.Tailwind],
    image: "https://github.com/JACKAS5/travelplanning-frontend/blob/main/public/assets/travelplanning_screenshot.png?raw=true",
    github: "https://github.com/JACKAS5/travelplanning-frontend",
    demo: "https://jackas5.github.io/travelplanning-frontend/",
    category: "Frontend",
  },
  {
    title: "API Authentication Service",
    description: "This project implements secure user authentication using JWT access and refresh tokens, password hashing with bcrypt, automated testing, Docker containerization, and pre-commit hooks for automatic code quality enforcement.",
    tech: [techMap.Python, techMap.Flask, techMap.MongoDB, techMap.Pytest, techMap.Docker, techMap.Postman],
    image: "/project3.jpg",
    github: "https://github.com/JACKAS5/flask-auth-mongo",
    demo: "#",
    category: "Backend",
  },
  {
    title: "Netflix Clone",
    description: "A full-stack Netflix-inspired streaming platform featuring user authentication (JWT), personalized 'My List' watchlists stored in MongoDB, TMDB API integration for movies/TV shows (trending, search, details), responsive React frontend with modern UI (hero banner, category rows, modals), and secure backend API proxy to protect the TMDB key.",
    tech: [techMap.NodeJS, techMap.Express, techMap.React, techMap.MongoDB],
    image: "https://github.com/JACKAS5/Netflix-Clone/blob/main/screenshot/1.png?raw=true",
    github: "https://github.com/JACKAS5/Netflix-Clone",
    demo: "https://netflix-clone-xkdh.onrender.com",
    category: "Fullstack"
  },
  {
    title: "AngkorLance",
    description: "is a modern freelancing marketplace platform designed to connect clients with freelancers. The platform aims to make it easy for businesses to post jobs and for talented professionals to find work opportunities. The concept is inspired by platforms such as Upwork, Fiverr, and Freelancer.com, but focuses on supporting freelancers and clients in Cambodia and Southeast Asia.",
    tech: [techMap.SpringBoot, techMap.React, techMap.TypeScript, techMap.Tailwind, techMap.PostgreSQL, techMap.Docker],
    image: "",
    github: "https://github.com/Panhavoan-Kymeas/AngkorLance/",
    demo: "#",
    category: "Fullstack"
  }
];