import { useState, useEffect, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { scrollToSection } from "../../utils/scroll";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../hooks/useLanguage";
import { navigation as navConfig } from "../../config/navigation";
import type { NavItem } from "../../types/navigation";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Memo nav items
  const navItems: NavItem[] = useMemo(
    () =>
      navConfig.map((item) => ({
        ...item,
        label: t ? t(`nav.${item.label.toLowerCase()}`) : item.label,
      })),
    [t]
  );

  // Scroll handler
  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    setScrolled(currentScroll > 20);

    if (location.pathname !== "/") return;

    for (let i = navItems.length - 1; i >= 0; i--) {
      const elId = navItems[i].path.slice(1) || "home";
      const el = document.getElementById(elId);

      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(navItems[i].path);
          break;
        }
      }
    }
  }, [location.pathname, navItems]);

  // Attach scroll listener ONLY
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Initial run (safe, no warning)
  useEffect(() => {
    const id = requestAnimationFrame(handleScroll);
    return () => cancelAnimationFrame(id);
  }, [handleScroll]);

  // ESC to close mobile
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  // Navigation click
  const handleNavClick = (item: NavItem) => {
    setMobileOpen(false);

    if (location.pathname === "/" && item.path === "/") {
      scrollToSection("home");
      setActiveSection("home");
    } else if (location.pathname === "/" && item.path !== "/") {
      scrollToSection(item.path.slice(1));
      setActiveSection(item.path);
    } else {
      navigate(item.path);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#08080f]/95 backdrop-blur-2xl border-b border-gray-200/80 dark:border-white/10 shadow-sm"
          : "bg-white/60 dark:bg-[#08080f]/60 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick(navItems[0])}
          className="text-[17px] font-black tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Sokpanha<span className="text-blue-600">.</span>
        </button>

        {/* Desktop */}
        <DesktopNav
          items={navItems}
          activeId={activeSection}
          onNavClick={handleNavClick}
        />

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <LanguageToggle />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-white/10 transition-all"
          >
            {dark ? (
              <SunIcon className="h-4 w-4 text-yellow-400" />
            ) : (
              <MoonIcon className="h-4 w-4 text-blue-600" />
            )}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-white/10 transition-all"
          >
            {mobileOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <MobileNav
        items={navItems}
        activeId={activeSection}
        isOpen={mobileOpen}
        onNavClick={handleNavClick}
        onClose={() => setMobileOpen(false)}
      />
    </nav>
  );
}