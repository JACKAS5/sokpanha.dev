import { lazy, Suspense } from "react";
import HomePage from "./homepage/HomePage";

// Lazy load existing pages
const AboutPage = lazy(() => import("./about/AboutPage"));
const ProjectsPage = lazy(() => import("./project/ProjectsPage"));
const ContactPage = lazy(() => import("./contact/ContactPage"));

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Home Section: Usually takes full viewport height.
        We pass the ID here so the Navbar can jump to it.
      */}
      <HomePage id="" />

      {/* Lazy Loaded Sections 
        We use a wrapper to control the vertical rhythm between pages.
      */}
      <Suspense fallback={<PageLoader />}>
        <div className="space-y-32 md:space-y-48 pb-32">
          
          {/* Subtle Horizontal Divider (Optional: keeps the "Pure" look) */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-100 dark:via-white/5 to-transparent" />

          <AboutPage id="about" />

          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-100 dark:via-white/5 to-transparent" />
          
          <ProjectsPage id="projects" />

          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-100 dark:via-white/5 to-transparent" />

          <ContactPage id="contact" />
        </div>
      </Suspense>
    </div>
  );
}

function PageLoader() {
  return (
    <div className="flex flex-col justify-center items-center py-40 space-y-4">
      <div className="animate-spin h-10 w-10 border-2 border-blue-600 border-t-transparent rounded-full"></div>
      <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">
        Loading Experience
      </span>
    </div>
  );
}