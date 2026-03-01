import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { projects } from "../../config/projects";
import type { Category } from "../../types/project";

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-10">
      <ProjectFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No projects in this category.
        </p>
      )}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}