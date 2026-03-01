export default function HeroIllustration() {
  return (
    <div className="relative group">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-600/10 blur-[80px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />

      <img
        // Note: Paths in public folder should start with /
        src="/assets/hero-illustration.svg" 
        alt="Hero Illustration"
        className="relative z-10 w-64 md:w-[450px] lg:w-[500px] h-auto mx-auto 
                   transition-all duration-700 ease-in-out
                   hover:scale-105 hover:-rotate-1
                   filter drop-shadow-xl dark:drop-shadow-[0_0_30px_rgba(37,99,235,0.15)]
                   animate-fadeIn"
      />

      {/* Subtle floating animation "Light" indicator */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 dark:bg-blue-500/10 backdrop-blur-md rounded-full border border-gray-200 dark:border-white/10 hidden md:flex items-center justify-center animate-bounce">
        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,1)]" />
      </div>
    </div>
  );
}