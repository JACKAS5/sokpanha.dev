import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import MobileMenu from "../MobileMenu/MobileMenu";
import { navigation } from "../../config/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const [activeId, setActiveId] = useState<string>("home");

  // Update active section while scrolling on landing page
  useEffect(() => {
    if (location.pathname !== "/") return; 

    let frame: number;

    const updateActive = () => {
      const scrollPos = window.scrollY + 100;
      let current = "home";

      for (const item of navigation) {
        const sectionId = item.path === "/" ? "home" : item.path.slice(1);
        const section = document.getElementById(sectionId);
        if (section && scrollPos >= section.offsetTop) current = sectionId;
      }

      setActiveId(current);
    };

    const handleScroll = () => {
      frame = requestAnimationFrame(updateActive);
    };

    window.addEventListener("scroll", handleScroll);
    updateActive();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, [location.pathname]);

  // Scroll to top when clicking the logo / home
  const scrollToTopAndReset = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveId("home");
    }
  };

  // Scroll to a section on landing page only
  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") return; // only active on landing page

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
    setMobileOpen(false); // close mobile menu on mobile
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-[1000] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">
        {/* Logo / Home */}
        <Link
          to="/"
          onClick={scrollToTopAndReset}
          className="text-gray-900 dark:text-white font-semibold text-xl tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          SOKPANHA PRAK
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navigation.map((item) => {
            const sectionId = item.path === "/" ? "home" : item.path.slice(1);
            const isActive = activeId === sectionId;
            const Icon = item.icon;

            return (
              <li key={item.path} className="relative group">
                <button
                  onClick={() => scrollToSection(sectionId)}
                  className={`relative flex items-center gap-1.5 px-2 py-1 text-sm font-medium transition-all duration-300 transform ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {Icon && (
                    <Icon className="h-5 w-5 stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
                  )}
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-1 rounded-full bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : ""
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Theme toggle + mobile menu button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-900 dark:text-gray-300" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        items={navigation}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </nav>
  );
}