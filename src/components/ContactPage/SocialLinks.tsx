import { CONTACT_CONFIG } from "../../config/contact";

export default function SocialLinks() {
  return (
    <div>
      {/* Section Title */}
      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
        Connect on Social Media
      </h3>

      {/* Social Buttons */}
      <div className="flex flex-wrap gap-3">
        {CONTACT_CONFIG.socials.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-gray-100 text-gray-700 
                       dark:bg-white/5 dark:text-gray-300
                       hover:bg-blue-600 hover:text-white 
                       dark:hover:bg-blue-600 dark:hover:text-white
                       transition-colors duration-200 font-medium shadow-sm"
          >
            <link.icon size={18} />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}