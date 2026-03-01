import type { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      <Navbar />

      {/* FIXED: Reduced pt-24 to pt-20. 
          Removed max-w-7xl/px-12 from here if you prefer 
          to let the children (sections) handle their own side padding.
      */}
      <main className="flex-1 relative pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;