import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-6 md:gap-8">

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
          bg-blue-500/20 dark:bg-blue-400/25 
          border border-blue-500/40 dark:border-blue-400/50 
          shadow-sm dark:shadow-lg
          hover:bg-blue-500/30 dark:hover:bg-blue-400/35
          hover:border-blue-500/60 dark:hover:border-blue-400/60
          backdrop-blur-md transition-all duration-300 cursor-default"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-80 dark:opacity-70"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 dark:bg-blue-300"></span>
          </span>
          <span className="text-[12px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-100">
            {t("hero.available")}
          </span>
        </div>
      </motion.div>

      {/* Headline */}
      <div className="space-y-1">
        <motion.p
          className="text-base md:text-lg font-semibold text-gray-500 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t("hero.greeting")}
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.05]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Sokpanha
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">Prak</span>
        </motion.h1>
      </div>

      {/* Role badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full 
          bg-gray-100 dark:bg-white/10 
          text-gray-800 dark:text-white 
          text-sm font-semibold border border-gray-200 dark:border-white/20
          shadow-sm dark:shadow-md
          backdrop-blur-sm"
        >
          {t("hero.title")}
        </span>
      </motion.div>

      {/* Description */}
      <motion.p
        className="max-w-xl text-base md:text-lg text-gray-500 dark:text-gray-300 font-normal leading-relaxed"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {t("hero.description")}
      </motion.p>
    </div>
  );
}