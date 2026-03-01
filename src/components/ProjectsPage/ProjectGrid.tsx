import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

const projects = [
  {
    title: "Cloud Portfolio Website",
    description: "Modern portfolio deployed on AWS.",
    tech: ["React", "TypeScript", "AWS"],
    image: "/project1.jpg",
    github: "#",
    demo: "#",
    category: "Frontend",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce system.",
    tech: ["Node.js", "MongoDB"],
    image: "/project2.jpg",
    github: "#",
    demo: "#",
    category: "Fullstack",
  },
  {
    title: "API Authentication Service",
    description: "Secure JWT authentication API.",
    tech: ["Node.js", "Express"],
    image: "/project3.jpg",
    github: "#",
    demo: "#",
    category: "Backend",
  },
];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter */}
      <ProjectFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Project Cards Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}