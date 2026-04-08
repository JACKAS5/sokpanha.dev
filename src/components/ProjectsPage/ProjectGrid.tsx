import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { projects } from "../../config/projects";
import type { Category } from "../../types/project";
import { useLanguage } from "../../hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectGrid() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  // Memoized filtered projects
  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="space-y-10">
      <ProjectFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-gray-500 dark:text-gray-400 py-16"
          >
            {t("projects.empty")}
          </motion.p>
        ) : (
          <motion.div
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}