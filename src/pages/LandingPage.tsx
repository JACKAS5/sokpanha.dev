import { lazy, Suspense } from "react";
import HomePage from "./homepage/HomePage";

// Lazy load existing pages
const AboutPage = lazy(() => import("./about/AboutPage"));
const ProjectsPage = lazy(() => import("./project/ProjectsPage"));
const ContactPage = lazy(() => import("./contact/ContactPage"));

export default function LandingPage() {
  return (
    <div className="flex flex-col">

      {/* Home loads immediately */}
      <HomePage /> {/* HomePage already has id="home" in the hero section */}

      {/* Lazy Loaded Pages */}
      <Suspense fallback={<PageLoader />}>
        <AboutPage id="about" />
        <ProjectsPage id="projects" />
        <ContactPage id="contact" />
      </Suspense>

    </div>
  );
}

function PageLoader() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
    </div>
  );
}