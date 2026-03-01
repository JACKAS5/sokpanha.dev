import { useRef, useEffect } from "react";
import MobileMenuItem from "./MobileMenuItem";
import type { NavItem } from "../../types/navigation";

type Props = {
  items?: NavItem[];
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ items = [], isOpen, onClose }: Props) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <>
      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-72 z-[9999] transform transition-transform duration-300 ease-in-out bg-white dark:bg-gray-900 shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-6 space-y-4">
          {items.map((item) => (
            <MobileMenuItem key={item.path} item={item} onClick={onClose} />
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/80 dark:bg-black/90 transition-opacity duration-300 ease-in-out"
          onClick={onClose}
        />
      )}
    </>
  );
}
