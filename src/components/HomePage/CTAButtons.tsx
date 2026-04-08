import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { scrollToSection } from "../../utils/scroll";

export default function CTAButtons() {
  const { t } = useLanguage();

  const scroll = (id: string) => scrollToSection(id);

  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.55 }}
    >
      <button
        onClick={() => scroll("projects")}
        className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-8px_rgba(37,99,235,0.5)] hover:bg-blue-500 active:scale-95"
      >
        {t("hero.cta.projects")}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <button
        onClick={() => scroll("contact")}
        className="flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent text-gray-900 dark:text-white font-bold border border-gray-200 dark:border-white/15 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50/60 dark:hover:bg-blue-500/8 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95"
      >
        {t("hero.cta.contact")}
      </button>
    </motion.div>
  );
}
