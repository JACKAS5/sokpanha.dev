import { Link } from "react-router-dom";

export default function CTAButtons() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <Link
        to="/projects"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-400 dark:text-black dark:hover:bg-blue-500 transition-all duration-300 font-medium shadow-md"
      >
        View Projects
      </Link>
      <Link
        to="/contact"
        className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900 transition-all duration-300 font-medium"
      >
        Contact Me
      </Link>
    </div>
  );
}