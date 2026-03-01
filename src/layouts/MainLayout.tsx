import type { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      {/* Navbar */}
      <Navbar />

      {/* Main content: add padding-top equal to navbar height */}
      <main className="flex-1 relative max-w-7xl w-full mx-auto px-6 md:px-12 pt-24">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;