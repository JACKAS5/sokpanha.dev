import { memo, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "../../types/project";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, ClockIcon } from "@heroicons/react/24/outline";
import ComingSoonModal from "./ComingSoonModal";

type Props = {
  project: Project;
  index?: number;
};

function ProjectCardComponent({ project, index = 0 }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#080808] 
                   border border-gray-100 dark:border-white/10 
                   transition-all duration-500 ease-out
                   hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] hover:-translate-y-2 hover:border-blue-500/50"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-video border-b border-gray-100 dark:border-white/5">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 bg-white text-black rounded-full text-xs font-bold hover:scale-105 transition-transform"
            >
              <CodeBracketIcon className="h-3.5 w-3.5" />
              GitHub
            </a>

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold hover:scale-105 transition-transform"
              >
                <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
                Live Demo
              </a>
            ) : (
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 bg-amber-500/80 text-white rounded-full text-xs font-bold hover:scale-105 transition-transform"
              >
                <ClockIcon className="h-3.5 w-3.5" />
                Coming Soon
              </button>
            )}
          </div>

          {/* Category Badge */}
          <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {project.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.tech.slice(0, 5).map((tech) => {
              const Icon = tech.icon;
              return (
                <div key={tech.name} className="flex items-center gap-1 group/icon">
                  <Icon
                    size={16}
                    style={{ color: tech.color }}
                    className="transition-transform duration-300 group-hover/icon:scale-125"
                  />
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 group-hover/icon:text-gray-900 dark:group-hover/icon:text-gray-300 transition-colors">
                    {tech.name}
                  </span>
                </div>
              );
            })}
            {project.tech.length > 5 && (
              <span className="text-[10px] font-semibold text-gray-400">+{project.tech.length - 5}</span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={modalOpen}
        projectTitle={project.title}
        githubUrl={project.github}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

// Wrap with memo for performance
export default memo(ProjectCardComponent);