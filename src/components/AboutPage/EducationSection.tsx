const education = [
  { degree: "Ass. Software Engineering", school: "Tux Global Institue", period: "201x- 202x" },
];

export default function EducationSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
        Education
      </h2>
      <ul className="space-y-2">
        {education.map((edu) => (
          <li key={edu.degree} className="pl-4 border-l-2 border-gray-400 dark:border-gray-600">
            <h3 className="font-medium text-gray-900 dark:text-white">{edu.degree}</h3>
            <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
            <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}