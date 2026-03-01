type Props = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const categories = ["All", "Frontend", "Backend", "Fullstack"];

export default function ProjectFilter({
  activeCategory,
  setActiveCategory,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}