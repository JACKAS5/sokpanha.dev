import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function EducationSection() {
  const { t } = useLanguage();

  return (
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {t("about.education.title")}
      </h2>

      <div className="relative flex gap-4 p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/8 hover:border-blue-400/40 transition-all duration-300 group">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center">
          <AcademicCapIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="space-y-0.5">
          <p className="font-bold text-gray-900 dark:text-white leading-tight">
            {t("about.education.degree")}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{t("about.education.school")}</p>
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mt-1.5">
            {t("about.education.period")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
