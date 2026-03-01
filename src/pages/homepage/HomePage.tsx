import HeroSection from "../../components/HomePage/HeroSection";
import CTAButtons from "../../components/HomePage/CTAButtons";
import HeroIllustration from "../../components/HomePage/HeroIllustration";

interface PageProps {
  id?: string;
}

export default function HomePage({ id }: PageProps) {
  return (
    <section
      id={id}
      className="relative flex flex-col-reverse md:flex-row items-center justify-center max-w-7xl mx-auto min-h-screen px-6 md:px-12 gap-12 md:gap-24 
             -mt-12 md:-mt-24"
    >
      {/* Text Content */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <HeroSection />
        <CTAButtons />
      </div>

      {/* Hero Illustration */}
      <div className="flex-1 flex justify-center md:justify-end">
        <HeroIllustration />
      </div>

      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="bg-gradient-to-tr from-blue-50 to-white dark:from-black dark:to-gray-900 w-full h-full" />
      </div>
    </section>
  );
}
