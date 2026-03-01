const skills = ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "TailwindCSS"];

export default function SkillsSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-400 text-sm font-medium transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}