import { CONTACT_CONFIG } from "../../config/contact";

export default function ContactInfo() {
  const { header, details } = CONTACT_CONFIG;

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          {header.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
          {header.description}
        </p>
      </div>

      {/* Info Items List */}
      <div className="grid gap-8">
        {details.map((item) => (
          <div key={item.label} className="group flex items-center gap-5">
            {/* Icon Container with subtle "Ghost" style */}
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl 
                            bg-gray-50 text-blue-600 
                            dark:bg-white/[0.05] dark:text-blue-400 
                            group-hover:bg-blue-600 group-hover:text-white 
                            dark:group-hover:bg-blue-500 transition-all duration-300 shadow-sm">
              <item.icon size={22} strokeWidth={1.5} />
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-0.5">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-lg font-medium text-gray-900 dark:text-gray-200 
                             hover:text-blue-600 dark:hover:text-blue-400 
                             transition-colors duration-200"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-lg font-medium text-gray-900 dark:text-gray-200">
                  {item.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}