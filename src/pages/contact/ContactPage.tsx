import { motion } from "framer-motion";
import ContactInfo from "../../components/ContactPage/ContactInfo";
import ContactForm from "../../components/ContactPage/ContactForm";
import SocialLinks from "../../components/ContactPage/SocialLinks";
import { useLanguage } from "../../hooks/useLanguage";

interface PageProps {
  id?: string;
}

export default function ContactPage({ id }: PageProps) {
  const { t } = useLanguage();
  return (
    <section id={id} className="scroll-mt-24 pb-28 md:pb-36">
      <motion.div
        className="max-w-3xl mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/8 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-[11px] mb-4">
          {t("contact.kicker")}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
          {t("contact.title")}{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            {t("contact.title.highlight")}
          </span>{" "}
          {t("contact.title.end")}
        </h1>
        <p className="mt-5 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
          {t("contact.subtitle")}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <motion.div
          className="lg:col-span-5 space-y-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative pl-5 z-10">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/70 to-transparent rounded-full z-0" />
            <ContactInfo />
          </div>
          <div className="pt-8 border-t border-gray-100 dark:border-white/6">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500 mb-5">
              {t("contact.socials")}
            </p>
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="bg-gray-50/80 dark:bg-white/[0.03] border border-gray-100 dark:border-white/8 p-8 md:p-10 rounded-2xl">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
