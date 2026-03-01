import ContactInfo from "../../components/ContactPage/ContactInfo";
import ContactForm from "../../components/ContactPage/ContactForm";
import SocialLinks from "../../components/ContactPage/SocialLinks";

export default function ContactPage({ id }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-24">
      {/* Header Section - Stripped of mx-auto/px to use MainLayout grid */}
      <div className="max-w-3xl mb-16">
        <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-3">
          Available for hire
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
          Let's build something <span className="text-blue-600 dark:text-blue-500">extraordinary</span> together.
        </h1>
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
          Have a question, a project idea, or just want to chat? 
          I'm always just a message away.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Info & Socials */}
        <div className="lg:col-span-5 space-y-12">
          <div className="relative">
            {/* Subtle decorative glow for the Info section */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-500/20 rounded-full hidden md:block" />
            <ContactInfo />
          </div>
          
          <div className="pt-10 border-t border-gray-100 dark:border-white/5">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
              Connect on Social
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* Right Column: The Form - Adjusted for Pure Black/White */}
        <div className="lg:col-span-7 bg-gray-50/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/10 p-8 md:p-12 rounded-[2rem] shadow-sm transition-colors duration-500">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}