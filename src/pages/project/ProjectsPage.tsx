import ProjectGrid from "../../components/ProjectsPage/ProjectGrid";
import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";

interface PageProps {
  id?: string;
}

export default function ProjectsPage({ id } : PageProps) {
  const { t } = useLanguage();

  return (
    <section id={id} className="scroll-mt-24 space-y-14">
      {/* Header */}
      <motion.header
        className="max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/8 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-[11px] mb-4">
          {t("projects.kicker")}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
          {t("projects.title")}
        </h1>
        <p className="mt-5 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
          {t("projects.subtitle")}
        </p>
      </motion.header>

      {/* Projects grid */}
      <ProjectGrid />
    </section>
  );
}