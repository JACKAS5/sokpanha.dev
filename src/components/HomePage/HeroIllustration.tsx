import { motion } from "framer-motion";
import {
  SiReact, SiTypescript, SiNodedotjs, SiDocker, SiPython, SiMongodb,
} from "react-icons/si";

const ORBIT_ICONS = [
  { Icon: SiReact, color: "#61DAFB", label: "React", angle: 0 },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript", angle: 60 },
  { Icon: SiNodedotjs, color: "#339933", label: "Node.js", angle: 120 },
  { Icon: SiDocker, color: "#2496ED", label: "Docker", angle: 180 },
  { Icon: SiPython, color: "#3776AB", label: "Python", angle: 240 },
  { Icon: SiMongodb, color: "#47A248", label: "MongoDB", angle: 300 },
];

const CODE_LINES = [
  { text: "const dev = {", indent: 0, color: "text-blue-400" },
  { text: '  name: "Sokpanha",', indent: 1, color: "text-green-400" },
  { text: '  role: "Full-Stack",', indent: 1, color: "text-green-400" },
  { text: "  passion: true,", indent: 1, color: "text-yellow-400" },
  { text: "  skills: [...stack],", indent: 1, color: "text-purple-400" },
  { text: "}", indent: 0, color: "text-blue-400" },
  { text: "", indent: 0, color: "" },
  { text: "dev.build(future) 🚀", indent: 0, color: "text-orange-400" },
];

export default function HeroIllustration() {
  return (
    <div className="relative w-full flex items-center justify-center" style={{ minHeight: 400 }}>

      {/* Outer glowing ring */}
      <div className="absolute w-80 h-80 rounded-full border border-blue-500/10 dark:border-blue-400/10" />
      <div className="absolute w-64 h-64 rounded-full border border-blue-500/20 dark:border-blue-400/15 animate-pulse" />

      {/* Orbiting tech icons */}
      {ORBIT_ICONS.map(({ Icon, color, label, angle }) => {
        const rad = (angle * Math.PI) / 180;
        const r = 155;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        return (
          <motion.div
            key={label}
            className="absolute"
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + angle / 360, duration: 0.5, type: "spring" }}
          >
            <motion.div
              className="relative group flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-white/10 cursor-default"
              whileHover={{ scale: 1.2, rotate: 10 }}
              style={{ boxShadow: `0 0 20px ${color}30` }}
            >
              <Icon size={20} style={{ color }} />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-400 dark:text-gray-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center code card */}
      <motion.div
        className="relative z-10 w-64 rounded-2xl bg-gray-900 dark:bg-gray-950 border border-white/10 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-[10px] text-gray-500 font-mono">portfolio.ts</span>
        </div>

        <div className="p-4 font-mono text-xs space-y-1.5">
          {CODE_LINES.map((line, i) => (
            <motion.div
              key={i}
              className="flex gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            >
              <span className="text-gray-600 select-none w-4 text-right shrink-0">{line.text ? i + 1 : ""}</span>
              <span className={`${line.color} ${line.indent ? "pl-4" : ""}`}>{line.text}</span>
            </motion.div>
          ))}
          {/* Blinking cursor */}
          <motion.div
            className="flex gap-2 mt-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <span className="text-gray-600 w-4 text-right shrink-0">9</span>
            <span className="w-2 h-4 bg-blue-400 rounded-sm" />
          </motion.div>
        </div>
      </motion.div>

      {/* Glow behind card */}
      <div className="absolute w-48 h-48 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl" />
    </div>
  );
}
