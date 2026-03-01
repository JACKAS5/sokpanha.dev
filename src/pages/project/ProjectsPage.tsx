import ProjectGrid from "../../components/ProjectsPage/ProjectGrid";

interface PageProps {
  id?: string;
}

export default function ProjectsPage({ id }: PageProps) {
  return (
    <section id={id} className="scroll-mt-24 space-y-16">
      {/* Page Header - Aligned with the rest of your brand */}
      <header className="max-w-3xl">
        <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-3">
          Selected Works
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
          Showcasing digital <span className="text-blue-600 dark:text-blue-500">innovation</span>.
        </h1>
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
          A collection of projects spanning web and mobile development, 
          built with a focus on clean code and user-centric design.
        </p>
      </header>

      {/* Projects Grid - Now takes the full container width */}
      <div className="pt-8">
        <ProjectGrid />
      </div>
    </section>
  );
}