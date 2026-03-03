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
    image: "https://private-user-images.githubusercontent.com/46219018/557434290-60dd355b-62d2-45d1-a5e4-ddac53412dba.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzI1MzU4MTYsIm5iZiI6MTc3MjUzNTUxNiwicGF0aCI6Ii80NjIxOTAxOC81NTc0MzQyOTAtNjBkZDM1NWItNjJkMi00NWQxLWE1ZTQtZGRhYzUzNDEyZGJhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAzMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMzAzVDEwNTgzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThmNjQyZTY2NDcyZjJmNjQ2OWFlNjFmYzAzZjM0ZTAyYjk4MDc4YWQ2ZDFjNTRkN2RlNzFjYzhmZWYwNzYyODkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.nBVyRN7td5ur_eNvRHt5OLqpXochZHbHJ9mZeFUVrEk",
    github: "https://github.com/JACKAS5/Netflix-Clone",
    demo: "https://netflix-clone-xkdh.onrender.com",
    category: "Fullstack"
  }
];