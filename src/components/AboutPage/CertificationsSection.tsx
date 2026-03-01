import { STATIC_CERTIFICATIONS } from '../../config/certifications';

export default function CertificationsSection() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-4">
      {/* Header Section */}
      <div className="flex items-center gap-6 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-nowrap">
          Certifications
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-gray-200 via-gray-100 to-transparent dark:from-gray-800 dark:via-gray-900" />
      </div>

      {/* Single Column List for "Long Width" look */}
      <div className="flex flex-col gap-4">
        {STATIC_CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-800/40 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            {/* Logo Container - Keeps fixed size */}
            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white dark:bg-gray-800 shadow-inner border border-gray-100 dark:border-gray-700 flex items-center justify-center p-2 overflow-hidden">
              <img
                src={cert.logo}
                alt={`${cert.issuer} logo`}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Content Container - Flex 1 allows it to take full width */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-base font-medium text-gray-600 dark:text-gray-400 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
                
                {/* Year tag moved to the right on desktop for a cleaner look */}
                <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 sm:order-last">
                  {cert.year}
                </span>
              </div>

              <div className="flex items-center mt-4">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                >
                  <span>Verify Credential</span>
                  <svg 
                    className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Subtle Right Arrow Icon (only visible on hover) */}
            <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity pr-2">
               <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}