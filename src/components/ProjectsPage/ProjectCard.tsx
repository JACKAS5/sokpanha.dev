import { motion } from "framer-motion";
import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#080808] 
                 border border-gray-100 dark:border-white/10 
                 transition-all duration-500 ease-out
                 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] hover:-translate-y-2 hover:border-blue-500/50"
    >
      {/* 1. Image: Always visible, subtle zoom on hover */}
      <div className="relative overflow-hidden aspect-video border-b border-gray-100 dark:border-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Hover Overlay for Buttons */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
             className="px-4 py-2 bg-white text-black rounded-full text-xs font-bold hover:scale-110 transition-transform">
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
             className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:scale-110 transition-transform">
            Live Demo
          </a>
        </div>
      </div>

      {/* 2. Content: Visible by default */}
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {project.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* 3. Tech Stack: Brand colors always visible */}
        <div className="flex flex-wrap gap-4 pt-2">
          {project.tech.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.name} className="flex items-center gap-2 group/icon">
                <Icon 
                  size={18}
                  className="transition-transform duration-300 group-hover/icon:scale-125"
                  style={{ color: tech.color }} // Always showing color
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400 dark:text-gray-600 group-hover/icon:text-gray-900 dark:group-hover/icon:text-gray-300 transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}