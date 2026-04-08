import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import type { NavItem } from "../../types/navigation";

interface Props {
  items: NavItem[];
  activeId: string;
  isOpen: boolean;
  onNavClick: (item: NavItem) => void;
  onClose: () => void;
}

export default function MobileNav({
  items,
  activeId,
  isOpen,
  onNavClick,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 md:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed top-16 left-0 w-full bg-white/95 dark:bg-[#0c0c18]/95 backdrop-blur-xl border-b border-gray-200/70 dark:border-white/10 shadow-xl z-50 md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <div className="px-4 py-3 space-y-1">
              {items.map((item: NavItem, i: number) => {
                const isActive =
                  activeId === item.path ||
                  (item.path === "/" && activeId === "home");

                return (
                  <motion.button
                    key={item.path}
                    onClick={() => onNavClick(item)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`group w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold ${
                      isActive
                        ? "bg-blue-600 text-white dark:bg-blue-500/20 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                  >
                    {item.label}

                    {isActive ? (
                      <span className="w-2 h-2 bg-white rounded-full" />
                    ) : (
                      <ChevronRightIcon className="h-4 w-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}