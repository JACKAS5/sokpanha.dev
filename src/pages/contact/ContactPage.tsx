import ContactInfo from "../../components/ContactPage/ContactInfo";
import ContactForm from "../../components/ContactPage/ContactForm";
import SocialLinks from "../../components/ContactPage/SocialLinks";

export default function ContactPage({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 scroll-mt-24"
    >
      {/* Header Section */}
      <div className="max-w-3xl mb-16">
        <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-3">
          Available for hire
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Let's build something <span className="text-blue-600 dark:text-blue-500">extraordinary</span> together.
        </h1>
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Have a question, a project idea, or just want to chat? 
          I'm always just a message away.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Info & Socials */}
        <div className="lg:col-span-5 space-y-10">
          {/* We use a glassmorphism style or simple border to stay "clean" */}
          <div className="p-1 rounded-3xl">
            <ContactInfo />
          </div>
          
          <div className="pt-8 border-t border-gray-100 dark:border-gray-800/50">
            <SocialLinks />
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="lg:col-span-7 bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 p-8 md:p-10 rounded-3xl shadow-sm">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}