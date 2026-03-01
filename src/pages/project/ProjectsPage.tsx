// src/pages/project/ProjectsPage.tsx

import ProjectGrid from "../../components/ProjectsPage/ProjectGrid";

interface PageProps {
  id?: string;
}

export default function ProjectsPage({ id }: PageProps) {
  return (
    <section
      id={id}
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 scroll-mt-24 -mt-8 md:-mt-16 space-y-16"
    >
      {/* Page Header */}
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Projects
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
          A selection of projects showcasing my skills and experience.
        </p>
      </header>

      {/* Projects Grid */}
      <ProjectGrid />
    </section>
  );
}
