import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

interface ScrollTopProps {
  showAfter?: number;
}

const ScrollTop: React.FC<ScrollTopProps> = ({ showAfter = 400 }) => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > showAfter);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50 p-3 rounded-full
        bg-white dark:bg-gray-800/80
        border border-gray-200 dark:border-gray-600
        text-gray-900 dark:text-white
        shadow-lg dark:shadow-black/30
        backdrop-blur-md
        transition-all duration-300 ease-in-out transform
        hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}
      `}
    >
      <ChevronUpIcon className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
};

export default ScrollTop;