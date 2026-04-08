import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { LanguageContext } from "./LanguageContext";
import type { Language } from "./LanguageContext";

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.title": "Backend | Full-Stack Developer",
    "hero.description": "Building clean, scalable web applications with React, TypeScript, Node.js, Express, and Java Spring Boot. Experienced in REST API design, Docker containerization, and AWS cloud deployment.",
    "hero.available": "Available for new projects",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact Me",

    // About
    "about.header.kicker": "The Story Behind the Code",
    "about.header.title": "Building clean, scalable digital experiences.",
    "about.header.subtitle": "A Cambodian full-stack developer shaped by curiosity and driven by craft.",
    "about.intro.headline": "I'm Sokpanha Prak — a Full-Stack Developer from Phnom Penh, Cambodia, passionate about building purposeful software.",
    "about.intro.p1": "I work across the full stack — React & TypeScript on the frontend, Node.js/Express REST APIs and Java Spring Boot microservices on the backend, and PostgreSQL/MongoDB at the data layer. I write code that is clean, tested, and built to scale.",
    "about.intro.p2": "Currently studying Software Engineering at Tux Global Institute, I balance academic depth with real shipped projects — from containerized Express APIs to Spring Boot services. My next frontier is weaving AI and LLMs into the products I build.",
    "about.intro.status": "Open to freelance & full-time opportunities",
    "about.skills.title": "Tech Stack",
    "about.education.title": "Education",
    "about.education.degree": "Associate in Software Engineering",
    "about.education.school": "Tux Global Institute",
    "about.education.period": "2025 – Present",
    "about.certifications.title": "Certifications",
    "about.certifications.view": "View Credential",

    // Projects
    "projects.kicker": "Selected Works",
    "projects.title": "Showcasing digital innovation.",
    "projects.subtitle": "A collection of projects spanning web and mobile development, built with a focus on clean code and user-centric design.",
    "projects.filter.all": "All",
    "projects.github": "GitHub",
    "projects.demo": "Live Demo",
    "projects.empty": "No projects in this category.",
    "projects.demo.comingsoon": "Coming Soon",

    // Coming Soon Modal
    "demo.comingsoon.title": "Live Demo Coming Soon",
    "demo.comingsoon.body": "The live deployment for this project isn't public yet, but the full source code is available on GitHub. Check it out while the demo is being prepared!",
    "demo.comingsoon.cta.github": "View Source Code",
    "demo.comingsoon.cta.back": "Got it",

    // Contact
    "contact.kicker": "Available for hire",
    "contact.title": "Let's build something",
    "contact.title.highlight": "extraordinary",
    "contact.title.end": "together.",
    "contact.subtitle": "Have a question, a project idea, or just want to chat? I'm always just a message away.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.telegram": "Telegram",
    "contact.location": "Location",
    "contact.socials": "Connect on Social",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your Name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "email@example.com",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Tell me about your project...",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success.title": "Sent Successfully!",
    "contact.form.success.desc": "Thanks for reaching out. I'll get back to you shortly.",
    "contact.form.success.again": "Send another message",
    "contact.form.error": "Something went wrong. Please try again or reach me directly via email or Telegram.",

    // About highlights
    "about.highlight.craft.title": "Full-Stack Dev",
    "about.highlight.craft.desc": "React + TypeScript frontend. Node.js/Express APIs. Java Spring Boot microservices. Clean architecture throughout.",
    "about.highlight.scale.title": "Cloud & DevOps",
    "about.highlight.scale.desc": "AWS-hosted deployments, Docker containerization, Git workflows, and CI/CD — built for production from day one.",
    "about.highlight.ai.title": "AI Integration",
    "about.highlight.ai.desc": "Actively exploring LLM APIs and AI-powered tooling to build next-generation intelligent products.",

    // Profile card stats
    "profile.projects": "Projects",
    "profile.certs": "Certs",
    "profile.years": "Yrs Exp",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.nav": "Navigation",
    "footer.connect": "Get in touch",
    "footer.built": "Built with",
  },
  km: {
    // Nav
    "nav.home": "ទំព័រដើម",
    "nav.about": "អំពីខ្ញុំ",
    "nav.projects": "គម្រោង",
    "nav.contact": "ទំនាក់ទំនង",

    // Hero
    "hero.greeting": "សួស្តី, ខ្ញុំឈ្មោះ",
    "hero.title": "Backend | Full-Stack Developer",
    "hero.description": "បង្កើត web applications ដ៏ស្អាត និងពង្រីកបាន ជាមួយ React, TypeScript, Node.js, Express, និង Java Spring Boot ។ ជំនាញ REST API design, Docker containerization, និង AWS cloud deployment ។",
    "hero.available": "ទទួលគម្រោងថ្មី",
    "hero.cta.projects": "មើលគម្រោង",
    "hero.cta.contact": "ទំនាក់ទំនង",

    // About
    "about.header.kicker": "រឿងរ៉ាវនៅពីក្រោយកូដ",
    "about.header.title": "បង្កើតបទពិសោធន៍ឌីជីថលដ៏ស្អាតនិងពង្រីកបាន",
    "about.header.subtitle": "អ្នកអភិវឌ្ឍន៍ Full-Stack ខ្មែរ ដែលបង្កើតដោយការចង់ដឹង ជំរុញដោយការបង្កើត",
    "about.intro.headline": "ខ្ញុំឈ្មោះ សុខបញ្ញា ប្រាក់ — ជា Full-Stack Developer មកពីភ្នំពេញ ប្រទេសកម្ពុជា ចូលចិត្តបង្កើតកម្មវិធីដ៏មានន័យ",
    "about.intro.p1": "ខ្ញុំធ្វើការនៅ full stack ទាំងស្រុង — React & TypeScript ខាងមុខ, Node.js/Express REST API និង Java Spring Boot microservices ខាងក្រោយ, PostgreSQL/MongoDB ជាស្រទាប់ទិន្នន័យ។ ខ្ញុំសរសេរកូដដែលស្អាត tested និងអាចពង្រីកបាន។",
    "about.intro.p2": "បច្ចុប្បន្នកំពុងសិក្សា Software Engineering នៅ Tux Global Institute ខ្ញុំមានគម្រោងជាក់ស្ដែងដែល ship ហើយ — ចាប់ពី Express APIs containerized រហូតដល់ Spring Boot services។ ដំណោះស្រាយបន្ទាប់គឺការបញ្ចូល AI និង LLMs ចូល។",
    "about.intro.status": "ទទួលការងារ Freelance និង Full-time",
    "about.skills.title": "បច្ចេកទេស",
    "about.education.title": "ការអប់រំ",
    "about.education.degree": "Associate in Software Engineering",
    "about.education.school": "វិទ្យាស្ថាន Tux Global",
    "about.education.period": "២០២៥ – បច្ចុប្បន្ន",
    "about.certifications.title": "វិញ្ញាបនបត្រ",
    "about.certifications.view": "មើលវិញ្ញាបនបត្រ",

    // Projects
    "projects.kicker": "ស្នាដៃជ្រើសរើស",
    "projects.title": "បង្ហាញការច្នៃប្រឌិតឌីជីថល",
    "projects.subtitle": "បណ្ដុំគម្រោងដែលគ្របដណ្ដប់ការអភិវឌ្ឍន៍ web និង mobile ដែលបង្កើតដោយផ្ដោតលើកូដស្អាត និងការរចនាផ្ដោតលើអ្នកប្រើប្រាស់",
    "projects.filter.all": "ទាំងអស់",
    "projects.github": "GitHub",
    "projects.demo": "មើលបង្ហាញ",
    "projects.empty": "គ្មានគម្រោងក្នុងប្រភេទនេះ",
    "projects.demo.comingsoon": "នឹងមកដល់",

    // Coming Soon Modal
    "demo.comingsoon.title": "ការបង្ហាញ Live នឹងមកដល់ឆាប់ៗ",
    "demo.comingsoon.body": "ការ deploy live សម្រាប់គម្រោងនេះមិនទាន់សាធារណៈទេ ប៉ុន្តែ source code ពេញលេញអាចរកបាននៅ GitHub ។ ពិនិត្យមើលខណៈពេលកំពុងរៀបចំ!",
    "demo.comingsoon.cta.github": "មើល Source Code",
    "demo.comingsoon.cta.back": "យល់ហើយ",

    // Contact
    "contact.kicker": "ទទួលការងារ",
    "contact.title": "តោះបង្កើត",
    "contact.title.highlight": "អ្វីមួយអស្ចារ្យ",
    "contact.title.end": "រួមគ្នា",
    "contact.subtitle": "មានសំណួរ គំនិតគម្រោង ឬចង់និយាយ? ខ្ញុំរង់ចាំជានិច្ច",
    "contact.email": "អ៊ីម៉ែល",
    "contact.phone": "ទូរស័ព្ទ",
    "contact.telegram": "តេឡេក្រាម",
    "contact.location": "ទីតាំង",
    "contact.socials": "ទំនាក់ទំនងតាម Social",
    "contact.form.name": "ឈ្មោះ",
    "contact.form.name.placeholder": "ឈ្មោះរបស់អ្នក",
    "contact.form.email": "អ៊ីម៉ែល",
    "contact.form.email.placeholder": "email@example.com",
    "contact.form.message": "សារ",
    "contact.form.message.placeholder": "ប្រាប់ខ្ញុំអំពីគម្រោងរបស់អ្នក...",
    "contact.form.send": "ផ្ញើសារ",
    "contact.form.sending": "កំពុងផ្ញើ...",
    "contact.form.success.title": "ផ្ញើបានជោគជ័យ!",
    "contact.form.success.desc": "អរគុណសម្រាប់ការទំនាក់ទំនង ខ្ញុំនឹងឆ្លើយតបឆាប់ៗ",
    "contact.form.success.again": "ផ្ញើសារថ្មី",
    "contact.form.error": "មានបញ្ហា។ សូមព្យាយាមម្ដងទៀត ឬទំនាក់ទំនងខ្ញុំដោយផ្ទាល់តាម Email ឬ Telegram ។",

    // About highlights
    "about.highlight.craft.title": "Full-Stack Dev",
    "about.highlight.craft.desc": "React + TypeScript ខាងមុខ, Node.js/Express API និង Java Spring Boot microservices ខាងក្រោយ",
    "about.highlight.scale.title": "Cloud & DevOps",
    "about.highlight.scale.desc": "Deploy លើ AWS, Docker containerization, Git workflows និង CI/CD — build សម្រាប់ production ពីថ្ងៃដំបូង",
    "about.highlight.ai.title": "AI Integration",
    "about.highlight.ai.desc": "កំពុង explore LLM APIs និង AI tools ដើម្បីបង្កើតផលិតផល intelligent ជំនាន់ក្រោយ",

    // Profile card stats
    "profile.projects": "គម្រោង",
    "profile.certs": "វិញ្ញាបន",
    "profile.years": "ឆ្នាំ",

    // Footer
    "footer.rights": "រក្សាសិទ្ធិគ្រប់យ៉ាង",
    "footer.nav": "ផ្លូវរុករក",
    "footer.connect": "ទំនាក់ទំនង",
    "footer.built": "បង្កើតដោយ",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageSt] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageSt(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
