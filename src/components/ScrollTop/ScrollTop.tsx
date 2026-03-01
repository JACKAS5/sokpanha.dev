import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid"; 

interface ScrollTopProps {
  showAfter?: number; 
}

const ScrollTop: React.FC<ScrollTopProps> = ({ showAfter = 300 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
        fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg
        transition-opacity duration-300 transform hover:scale-110
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  );
};

export default ScrollTop;