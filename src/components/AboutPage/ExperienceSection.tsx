const experiences = [
  { role: "Full-Stack Developer", company: "Tech Company", period: "2024 - Present" },
  { role: "Frontend Developer", company: "Startup Inc.", period: "2022 - 2024" },
];

export default function ExperienceSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
        Experience
      </h2>
      <ul className="space-y-4">
        {experiences.map((exp) => (
          <li key={exp.role} className="border-l-2 border-blue-600 dark:border-blue-400 pl-4">
            <h3 className="font-medium text-gray-900 dark:text-white">{exp.role}</h3>
            <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
            <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}