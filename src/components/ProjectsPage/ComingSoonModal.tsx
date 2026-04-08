import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ClockIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../../hooks/useLanguage";

interface ComingSoonModalProps {
  isOpen: boolean;
  projectTitle: string;
  githubUrl: string;
  onClose: () => void;
}

export default function ComingSoonModal({
  isOpen,
  projectTitle,
  githubUrl,
  onClose,
}: ComingSoonModalProps) {
  const { t } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cs-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative w-full max-w-md rounded-2xl bg-white dark:bg-[#0e0e1a] border border-gray-200 dark:border-white/10 shadow-2xl p-8 text-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/8 transition-all"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              {/* Decorative glow */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Icon */}
              <div className="relative mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/20 flex items-center justify-center">
                <ClockIcon className="h-8 w-8 text-blue-500" />
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-2xl border border-blue-400/40 animate-ping opacity-50" />
              </div>

              {/* Title */}
              <h2
                id="cs-title"
                className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-1"
              >
                {t("demo.comingsoon.title")}
              </h2>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
                {projectTitle}
              </p>

              {/* Body */}
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                {t("demo.comingsoon.body")}
              </p>

              {/* Divider with dots */}
              <div className="flex items-center gap-2 justify-center mb-6">
                {[0, 0.3, 0.6].map((delay, i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-blue-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.4, delay, repeat: Infinity }}
                  />
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white/8 hover:bg-gray-800 dark:hover:bg-white/12 text-white text-sm font-bold border border-gray-800 dark:border-white/10 transition-all hover:-translate-y-0.5"
                >
                  <CodeBracketIcon className="h-4 w-4" />
                  {t("demo.comingsoon.cta.github")}
                </a>
                <button
                  onClick={onClose}
                  className="flex-1 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30"
                >
                  {t("demo.comingsoon.cta.back")}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
