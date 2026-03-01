const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    year: "2023",
  },
  {
    title: "Docker & Kubernetes Fundamentals",
    issuer: "Udemy",
    year: "2023",
  },
];

export default function CertificationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {cert.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {cert.issuer}
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {cert.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}