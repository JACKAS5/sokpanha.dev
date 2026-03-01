export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      {/* Primary Button: The "Glow" Lift */}
      <a
        href="#projects"
        className="group relative px-8 py-3.5 rounded-full bg-blue-600 text-white font-bold 
                   transition-all duration-300 ease-out text-center
                   hover:-translate-y-1 hover:bg-blue-500 
                   hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.5)]
                   active:scale-95 overflow-hidden"
      >
        <span className="relative z-10">View Projects</span>
        {/* Subtle shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      </a>

      {/* Secondary Button: The "Minimalist" Glass */}
      <a
        href="#contact"
        className="px-8 py-3.5 rounded-full bg-transparent text-gray-900 dark:text-white font-bold 
                   border border-gray-200 dark:border-white/10 text-center
                   transition-all duration-300
                   hover:border-blue-600 dark:hover:border-blue-500 
                   hover:bg-blue-50/50 dark:hover:bg-blue-500/5 
                   hover:text-blue-600 dark:hover:text-blue-400
                   active:scale-95"
      >
        Contact Me
      </a>
    </div>
  );
}