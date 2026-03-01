export default function HeroSection() {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. Headline: Masked Reveal with tighter tracking */}
      <div className="overflow-hidden py-1">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white animate-reveal leading-[1.1]">
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-500 inline-block hover:scale-[1.02] transition-transform duration-300 cursor-default">
            Sokpanha Prak
          </span>
        </h1>
      </div>

      {/* 2. Description: Refined Typography for a "Positional" feel */}
      <div className="overflow-hidden">
        <p className="max-w-2xl text-lg md:text-xl text-gray-500 dark:text-gray-400 font-normal leading-[1.6] tracking-tight animate-reveal [animation-delay:250ms] [animation-fill-mode:backwards]">
          I'm a passionate{" "}
          <span className="text-gray-900 dark:text-white font-semibold">
            Full-Stack Developer
          </span>{" "}
          and Cloud Enthusiast. I build{" "}
          <span className="text-gray-800 dark:text-gray-200">
            clean, scalable
          </span>
          , and modern digital experiences.
        </p>
      </div>

      {/* 3. Badge: Fade-in with a glassmorphism effect */}
      <div className="animate-fadeIn [animation-delay:800ms] [animation-fill-mode:backwards]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm group hover:border-blue-500/40 transition-all duration-500 cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Available for new projects
          </span>
        </div>
      </div>
    </div>
  );
}
