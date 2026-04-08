import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { SiReact, SiTypescript, SiNodedotjs, SiSpringboot, SiExpress } from "react-icons/si";
import profilePhoto from "../../assets/profile.jpg";

const SOCIALS = [
  { href: "https://github.com/JACKAS5", Icon: FaGithub, label: "GitHub", hover: "hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10" },
  { href: "https://www.linkedin.com/in/sokpanha-prak-b88540350", Icon: FaLinkedin, label: "LinkedIn", hover: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10" },
  { href: "https://t.me/sokpanha05", Icon: FaTelegram, label: "Telegram", hover: "hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-500/10" },
];

const TOP_SKILLS = [
  { Icon: SiReact, color: "#61DAFB", label: "React" },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { Icon: SiNodedotjs, color: "#339933", label: "Node.js" },
  { Icon: SiExpress, color: "#c9d1d9", label: "Express" },
  { Icon: SiSpringboot, color: "#6DB33F", label: "Spring Boot" },
];

export default function ProfileCard() {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-xs mx-auto lg:mx-0"
    >
      {/* Glow background */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl pointer-events-none" />

      <div className="relative rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 overflow-hidden shadow-xl">
        {/* Banner with top skills */}
        <div className="h-24 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="absolute top-3 right-3 flex gap-1.5">
            {TOP_SKILLS.map(({ Icon, color, label }) => (
              <div key={label} title={label} className="w-7 h-7 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/25">
                <Icon size={15} style={{ color }} />
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 pb-5">
          {/* Profile photo */}
          <div className="-mt-10 mb-4 relative inline-block">
            <div className="w-20 h-20 rounded-2xl border-4 border-white dark:border-gray-950 shadow-lg overflow-hidden">
              {!imgError ? (
                <img
                  src={profilePhoto}
                  alt="Sokpanha Prak"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <span className="text-2xl font-extrabold text-white select-none">SP</span>
                </div>
              )}
            </div>
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white dark:border-gray-950 rounded-full flex items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
            </span>
          </div>

          {/* Name & Role */}
          <div className="mb-4 space-y-0.5">
            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">Sokpanha Prak</h3>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{t("hero.title")}</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-3.5 w-3.5 text-blue-500" />
              Phnom Penh, Cambodia 🇰🇭
            </div>
            <div className="flex items-center gap-2 truncate">
              <EnvelopeIcon className="h-3.5 w-3.5 text-blue-500" />
              praksokpanha12@gmail.com
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-white/8 border border-gray-100 dark:border-white/8 rounded-xl overflow-hidden mb-4 text-center">
            {[
              { label: t("profile.projects"), value: "10+" },
              { label: t("profile.certs"), value: "3" },
              { label: t("profile.years"), value: "2+" },
            ].map(({ label, value }) => (
              <div key={label} className="py-3 bg-gray-50/60 dark:bg-white/[0.02]">
                <p className="text-base font-extrabold text-gray-900 dark:text-white">{value}</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium mt-0.5 leading-tight">{label}</p>
              </div>
            ))}
          </div>

          {/* Socials & Hire */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1.5">
              {SOCIALS.map(({ href, Icon, label, hover }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 transition-all hover:-translate-y-0.5 ${hover}`}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
            <a href="mailto:praksokpanha12@gmail.com"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-600/20 whitespace-nowrap">
              Hire Me →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}