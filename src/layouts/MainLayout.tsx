import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/layout/Footer";
import { InitialPageLoader } from "../components/ui/PageLoader";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative bg-white dark:bg-[#060609] text-gray-900 dark:text-white transition-colors duration-500 min-h-screen">
      {/* Initial Page Loader */}
      <InitialPageLoader />

      {/* Subtle grid background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#6366f1 1px,transparent 1px),linear-gradient(to bottom,#6366f1 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top hero glow */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-blue-500/5 dark:bg-blue-500/8 blur-[120px] z-0" />

      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <motion.main
        className="relative flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 pt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}