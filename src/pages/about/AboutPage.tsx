import AboutHeader from "../../components/AboutPage/AboutHeader";
import AboutIntro from "../../components/AboutPage/AboutIntro";
import SkillsSection from "../../components/AboutPage/SkillsSection";
import EducationSection from "../../components/AboutPage/EducationSection";
import CertificationsSection from "../../components/AboutPage/CertificationsSection";
import ProfileCard from "../../components/AboutPage/ProfileCard";

interface PageProps {
  id?: string;
}


export default function AboutPage({ id }: PageProps) {
  return (
    <div id={id} className="scroll-mt-24 space-y-24">
      <AboutHeader />
      <div className="flex flex-col lg:flex-row items-start gap-16 md:gap-24">
        {/* Left Column: centered on small, sticky+left on lg */}
        <div className="w-full lg:flex-1 lg:sticky lg:top-32 lg:self-start">
          <ProfileCard />
        </div>
        {/* Right Column */}
        <div className="flex-[1.5] space-y-16">
          <AboutIntro />
          <div className="grid grid-cols-1 gap-16">
            <SkillsSection />
            <EducationSection />
            <CertificationsSection />
          </div>
        </div>
      </div>
    </div>
  );
}