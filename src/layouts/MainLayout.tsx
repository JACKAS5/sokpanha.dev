import type { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      {/* Navbar sits outside the container to allow full-width glass effects */}
      <Navbar />

      {/* MAIN WRAPPER:
        1. flex-1: pushes footer to bottom
        2. pt-20: prevents content from hiding under fixed Navbar
        3. max-w-7xl/mx-auto/px-6: The "HomePage Logic" applied globally
      */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;