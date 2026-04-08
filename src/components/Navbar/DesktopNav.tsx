import { motion } from "framer-motion";
import type { NavItem } from "../../types/navigation";

interface Props {
  items: NavItem[];
  activeId: string;
  onNavClick: (item: NavItem) => void;
}

export default function DesktopNav({ items, activeId, onNavClick }: Props) {
  return (
    <ul className="hidden md:flex items-center gap-2">
      {items.map((item: NavItem) => {
        const isActive =
          activeId === item.path ||
          (item.path === "/" && activeId === "home");

        const Icon = item.icon;

        return (
          <li key={item.path} className="relative group">
            <button
              onClick={() => onNavClick(item)}
              className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {item.label}

              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-blue-50 dark:bg-blue-500/10 rounded-lg -z-10"
                />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}