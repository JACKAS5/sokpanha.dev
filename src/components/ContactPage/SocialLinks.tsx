import { CONTACT_CONFIG } from "../../config/contact";

export default function SocialLinks() {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
        Connect With Me
      </h3>
      
      <div className="flex flex-wrap gap-4">
        {CONTACT_CONFIG.socials.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full 
                       bg-gray-100 text-gray-700 
                       dark:bg-white/5 dark:text-gray-300
                       hover:bg-blue-600 hover:text-white 
                       dark:hover:bg-blue-600 dark:hover:text-white
                       transition-all duration-300 font-medium shadow-sm"
          >
            <link.icon size={18} />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}