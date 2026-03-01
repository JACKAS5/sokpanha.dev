import AboutHeader from "../../components/AboutPage/AboutHeader";
import AboutIntro from "../../components/AboutPage/AboutIntro";
import SkillsSection from "../../components/AboutPage/SkillsSection";
import EducationSection from "../../components/AboutPage/EducationSection";
import CertificationsSection from "../../components/AboutPage/CertificationsSection";
import AboutIllustration from "../../components/AboutPage/AboutIllustration";

interface PageProps {
  id?: string;
}

export default function AboutPage({ id }: PageProps) {
  return (
    <div id={id} className="scroll-mt-24 space-y-24">
      {/* Header section - Full width of the container */}
      <AboutHeader />

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row items-start gap-16 md:gap-24">
        
        {/* Narrative & Credentials Column */}
        <div className="flex-[1.5] space-y-16">
          <AboutIntro />
          
          <div className="grid grid-cols-1 gap-16">
            <SkillsSection />
            <EducationSection />
            <CertificationsSection />
          </div>
        </div>

        {/* Visual Column - Sticky on Desktop */}
        <div className="flex-1 sticky top-32 hidden lg:block">
          <AboutIllustration />
        </div>
      </div>
    </div>
  );
}