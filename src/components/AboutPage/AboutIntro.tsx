import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { LightBulbIcon, RocketLaunchIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const HIGHLIGHTS = [
  {
    icon: CodeBracketIcon,
    key: "about.highlight.craft.title",
    descKey: "about.highlight.craft.desc",
    color: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20",
  },
  {
    icon: RocketLaunchIcon,
    key: "about.highlight.scale.title",
    descKey: "about.highlight.scale.desc",
    color: "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20",
  },
  {
    icon: LightBulbIcon,
    key: "about.highlight.ai.title",
    descKey: "about.highlight.ai.desc",
    color: "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-500/20",
  },
];

export default function AboutIntro() {
  const { t } = useLanguage();
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Headline */}
      <div className="space-y-4">
        <p className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-gray-900 dark:text-white">
          {t("about.intro.headline")}
        </p>
        <div className="space-y-4 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
          <p>{t("about.intro.p1")}</p>
          <p>{t("about.intro.p2")}</p>
        </div>
      </div>

      {/* Highlight cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {HIGHLIGHTS.map(({ icon: Icon, key, descKey, color }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            className={`p-4 rounded-xl border ${color} flex flex-col gap-2`}
          >
            <div className="w-8 h-8 rounded-lg bg-white/50 dark:bg-white/5 flex items-center justify-center">
              <Icon className="h-4 w-4" />
            </div>
            <p className="text-sm font-bold">{t(key)}</p>
            <p className="text-xs leading-relaxed opacity-80">{t(descKey)}</p>
          </motion.div>
        ))}
      </div>

      {/* Status pill */}
      <div className="flex items-center gap-3 pt-1">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative h-2 w-2 rounded-full bg-blue-500"></span>
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
          {t("about.intro.status")}
        </span>
      </div>
    </motion.div>
  );
}
