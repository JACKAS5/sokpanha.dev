import { motion } from "framer-motion";
import { techMap } from "../../config/tect";
import { useLanguage } from "../../hooks/useLanguage";

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "NextJS"],
  },
  {
    label: "Backend",
    skills: ["NodeJS", "Express", "SpringBoot", "Python", "Django", "Flask"],
  },
  {
    label: "Database & DevOps",
    skills: ["MongoDB", "PostgreSQL", "Redis", "AWS", "Docker", "Postman", "GitHub"],
  },
];

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {t("about.skills.title")}
      </h2>

      <div className="space-y-5">
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <div key={category.label} className="space-y-2.5">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">
              {category.label}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skillName, i) => {
                const skill = techMap[skillName];
                if (!skill) return null;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIdx * 0.05 + i * 0.04,
                      duration: 0.4,
                      type: "spring",
                    }}
                    className="group relative flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 hover:border-blue-400/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 rounded-xl"
                      style={{ backgroundColor: skill.color }}
                    />
                    <skill.icon size={18} style={{ color: skill.color }} />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}