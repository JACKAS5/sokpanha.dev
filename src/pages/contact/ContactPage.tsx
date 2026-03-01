import ContactInfo from "../../components/ContactPage/ContactInfo";
import ContactForm from "../../components/ContactPage/ContactForm";
import SocialLinks from "../../components/ContactPage/SocialLinks";

interface PageProps {
  id?: string;
}

export default function ContactPage({ id }: PageProps) {
  return (
    <section
      id={id}
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 scroll-mt-24 -mt-8 md:-mt-16 space-y-16"
    >
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Contact Me
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
          Let’s work together or just say hello 👋
        </p>
      </header>

      {/* Contact Info + Form */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <ContactInfo />
        <ContactForm />
      </div>

      {/* Social Links */}
      <div className="mt-16 flex justify-center md:justify-start">
        <SocialLinks />
      </div>
    </section>
  );
}
