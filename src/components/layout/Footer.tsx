import { motion } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../../hooks/useLanguage";
import { scrollToSection } from "../../utils/scroll";
import { navigation } from "../../config/navigation";
import { CONTACT_CONFIG } from "../../config/contact";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-100 dark:border-white/6 bg-white dark:bg-[#060609] transition-colors duration-500 overflow-hidden">

      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/5 dark:bg-blue-500/8 blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand / Availability */}
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-extrabold text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
            >
              Sokpanha Prak<span className="text-blue-600">.</span>
            </button>

            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              {t("hero.description")}
            </p>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-semibold">
              ● {t("hero.available")}
            </span>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {t("footer.nav")}
            </h3>

            <ul className="space-y-2">
              {navigation.map((item) => {
                const id = item.path === "/" ? "home" : item.path.slice(1);
                return (
                  <li key={item.path}>
                    <motion.button
                      onClick={() => scrollToSection(id)}
                      whileHover={{ x: 4, color: "#3b82f6" }} // subtle shift + blue on hover
                      className="text-sm text-gray-600 dark:text-gray-400 transition-all duration-200 font-medium"
                    >
                      {t(`nav.${id}`) || item.label}
                    </motion.button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact / Socials */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {t("footer.connect")}
            </h3>

            <div className="flex gap-3">
              {CONTACT_CONFIG.socials.map(({ name, href, icon: Icon }) => (
                <motion.a
                  key={name}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 hover:text-blue-500 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              {CONTACT_CONFIG.details.map(({ label, value, href }) => (
                <p key={label}>
                  {href ? (
                    <a href={href} className="hover:underline transition-colors">
                      {value}
                    </a>
                  ) : value}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-400">
            © {year} • <span className="font-semibold text-gray-600 dark:text-gray-300">Sokpanha Prak</span> • {t("footer.rights")}
          </div>

          <motion.button
            onClick={() => scrollToSection("home")}
            whileHover={{ y: -2, color: "#3b82f6" }}
            className="flex items-center gap-1 text-xs text-gray-400 transition-colors duration-200"
          >
            {t("footer.backToTop")}
            <ArrowUpIcon className="h-3 w-3" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}