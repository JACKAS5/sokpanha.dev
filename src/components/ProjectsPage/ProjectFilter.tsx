import { motion } from "framer-motion";
import type { Category } from "../../types/project";

const CATEGORIES: (Category | "All")[] = ["All", "Frontend", "Backend", "Fullstack"];

interface Props {
  activeCategory: Category | "All";
  setActiveCategory: (c: Category | "All") => void;
}

export default function ProjectFilter({ activeCategory, setActiveCategory }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat;

        return (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-200"
          >
            {/* Active pill */}
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-blue-500 dark:bg-blue-600 shadow-md"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}

            {/* Text */}
            <span
              className={`relative z-10 ${
                isActive
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}