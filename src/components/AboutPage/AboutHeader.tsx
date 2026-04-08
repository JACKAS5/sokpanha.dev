import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";

export default function AboutHeader() {
  const { t } = useLanguage();
  return (
    <motion.div
      className="text-center space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/8 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-[11px]">
        {t("about.header.kicker")}
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
        {t("about.header.title")}
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
        {t("about.header.subtitle")}
      </p>
    </motion.div>
  );
}
