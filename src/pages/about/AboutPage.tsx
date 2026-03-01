import AboutHeader from "../../components/AboutPage/AboutHeader";
import AboutIntro from "../../components/AboutPage/AboutIntro";
import SkillsSection from "../../components/AboutPage/SkillsSection";
{/* import ExperienceSection from "../../components/AboutPage/ExperienceSection"; */}
import EducationSection from "../../components/AboutPage/EducationSection";
import CertificationsSection from "../../components/AboutPage/CertificationsSection";
import AboutIllustration from "../../components/AboutPage/AboutIllustration";

interface PageProps {
  id?: string;
}

export default function AboutPage({ id }: PageProps) {
  return (
    <div
      id={id}
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 scroll-mt-24 -mt-8 md:-mt-16 space-y-16"
    >
      <AboutHeader />
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <AboutIntro />
          <SkillsSection />
          {/* <ExperienceSection /> */}
          <EducationSection />
          <CertificationsSection />
        </div>
        <AboutIllustration />
      </div>
    </div>
  );
}
