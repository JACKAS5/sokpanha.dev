import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SectionLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-32 gap-5">
      <div className="relative w-12 h-12">
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-blue-600/20"
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-blue-600/40"
          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute inset-0 m-auto w-5 h-5 rounded-full bg-blue-600"
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </div>
      <motion.p
        className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-300 dark:text-gray-600"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Loading
      </motion.p>
    </div>
  );
}

export function InitialPageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="initial-loader"
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white dark:bg-[#060609]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative w-16 h-16">
              <motion.span
                className="absolute inset-0 rounded-full border-[3px] border-blue-600/15"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border-[3px] border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-base font-extrabold tracking-tight text-gray-900 dark:text-white">
                  S<span className="text-blue-600">.</span>
                </span>
              </div>
            </div>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-blue-600"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15, ease: "easeInOut" }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
