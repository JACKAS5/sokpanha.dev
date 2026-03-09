import profile from "../../assets/profile.jpg";

export default function HeroIllustration() {
  return (
    <div className="relative group flex items-center justify-center p-8 md:p-16">
      {/* 1. Background Glow */}
      <div className="absolute inset-0 bg-blue-500/15 dark:bg-blue-600/10 blur-[100px] md:blur-[120px] rounded-full scale-90 group-hover:scale-110 transition-transform duration-1000 ease-in-out" />

      {/* 2. The Image Container */}
      <div className="relative z-10 w-64 md:w-[400px] lg:w-[450px] overflow-visible">
        <div className="overflow-hidden rounded-3xl border-[0.5px] border-black/5 dark:border-white/10 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105 group-hover:-rotate-2 group-hover:translate-y-[-8px]">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-auto object-cover 
                       transition-transform duration-700 ease-out
                       group-hover:scale-110
                       
                       backdrop-blur-[0.5px] 
                       filter brightness-[1.01] contrast-[1.01]
                       animate-fadeIn"
          />
        </div>

        {/* 3. "Available for work" Tag with Bouncing Ball */}
        <div className="absolute -bottom-6 -right-6 md:-right-10 px-4 py-2 
                        bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl 
                        rounded-2xl border border-white/20 dark:border-white/10 
                        shadow-xl hidden md:flex items-center gap-2 
                        animate-bounce">
          {/* The Bouncing Dot (The Green Ball) */}
          <div className="relative flex h-3 w-3">
            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
            <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>
          </div>
          
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
            Available for work
          </span>
        </div>
      </div>
    </div>
  );
}