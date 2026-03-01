import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline"; 

interface ScrollTopProps {
  showAfter?: number; 
}

const ScrollTop: React.FC<ScrollTopProps> = ({ showAfter = 400 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // FORCE TOP ON REFRESH: This ensures the user starts at the HeroSection
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 p-3 rounded-full 
        bg-white/10 dark:bg-white/5 backdrop-blur-md 
        border border-gray-200 dark:border-white/10
        text-gray-900 dark:text-white shadow-2xl
        transition-all duration-500 ease-in-out transform
        hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-2
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
};

export default ScrollTop;