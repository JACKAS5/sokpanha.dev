import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  category: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }} // smoother upward lift
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 transform-gpu will-change-transform"
    >
      {/* Image */}
      <div className="relative overflow-hidden transform-gpu will-change-transform">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 transform-gpu will-change-transform"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 will-change-opacity">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}