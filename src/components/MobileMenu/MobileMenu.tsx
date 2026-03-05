import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import MobileMenuItem from "./MobileMenuItem";
import type { NavItem } from "../../types/navigation";

type Props = {
  items?: NavItem[];
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  items = [],
  isOpen,
  onClose,
}: Props) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close when pressing Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Prevent rendering on server (safety for SSR)
  if (typeof window === "undefined") return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/80 dark:bg-black/90 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-72 z-[9999] transform transition-transform duration-300 ease-in-out bg-white dark:bg-gray-900 shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-6 space-y-4">
          {items.map((item) => (
            <MobileMenuItem
              key={item.path}
              item={item}
              onClick={onClose}
            />
          ))}
        </ul>
      </div>
    </>,
    document.body
  );
}