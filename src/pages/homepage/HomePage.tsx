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
      className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-[calc(100vh-160px)] gap-12 md:gap-24"
    >
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
        <HeroSection />
        <CTAButtons />
      </div>

      <div className="flex-1 flex justify-center md:justify-end w-full max-w-md md:max-w-none">
        <HeroIllustration />
      </div>
    </section>
  );
}