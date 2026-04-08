import { lazy, Suspense } from "react";
import HomePage from "./homepage/HomePage";
import { SectionLoader } from "../components/ui/PageLoader";

// Lazy load pages
const AboutPage = lazy(() => import("./about/AboutPage"));
const ProjectsPage = lazy(() => import("./project/ProjectsPage"));
const ContactPage = lazy(() => import("./contact/ContactPage"));


export default function LandingPage() {
  return (
    <>
      {/* Home Section */}
      <HomePage id="home" />

      {/* Lazy Loaded Sections */}
      <SectionDivider />
      <Suspense fallback={<SectionLoader />}>
        <AboutPage />
      </Suspense>

      <SectionDivider />
      <Suspense fallback={<SectionLoader />}>
        <ProjectsPage id="projects" />
      </Suspense>

      <SectionDivider />
      <Suspense fallback={<SectionLoader />}>
        <ContactPage id="contact" />
      </Suspense>
    </>
  );
}

// Reusable divider component
function SectionDivider() {
  return (
    <div className="my-28 md:my-36 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-white/8 to-transparent" />
  );
}