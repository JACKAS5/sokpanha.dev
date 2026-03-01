import { SKILLS_CONFIG } from "../../config/skills";

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Tech Stack
      </h2>
      
      <div className="flex flex-wrap gap-4">
        {SKILLS_CONFIG.map((skill) => (
          <div
            key={skill.name}
            className="group relative flex items-center gap-3 px-4 py-2.5 rounded-2xl 
                       bg-white dark:bg-black 
                       border border-gray-200 dark:border-white/10
                       hover:scale-105 hover:shadow-xl
                       transition-all duration-300 cursor-default overflow-hidden"
            // Dynamic inline style for the hover border color
            style={{ 
              ['--hover-color' as unknown as string]: skill.color 
            }}
          >
            {/* Hover Glow Effect Layer */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
              style={{ backgroundColor: skill.color }}
            />

            {/* Icon Container */}
            <div 
              className="relative flex items-center justify-center p-2 rounded-xl transition-all duration-300 
                         group-hover:rotate-6 group-hover:scale-110"
              style={{ backgroundColor: `${skill.color}15` }} 
            >
              <skill.icon 
                size={22} 
                style={{ color: skill.color }} 
                className="drop-shadow-sm transition-all duration-300 
                           group-hover:drop-shadow-[0_0_8px_var(--hover-color)]"
              />
            </div>
            
            {/* Text Label */}
            <span className="relative text-sm font-semibold text-gray-700 dark:text-gray-300 
                             group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
              {skill.name}
            </span>

            {/* Bottom Accent Line */}
            <div 
              className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--hover-color)] 
                         transition-all duration-500 group-hover:w-full opacity-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
}