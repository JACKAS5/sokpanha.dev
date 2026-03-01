export default function AboutHeader() {
  return (
    <div className="max-w-4xl mb-8 md:mb-12">
      {/* Small Kicker for brand consistency */}
      <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-3">
        My Journey
      </h2>
      
      {/* High-impact Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] transition-colors duration-500">
        Driven by <span className="text-blue-600 dark:text-blue-500">curiosity</span>, <br className="hidden md:block" />
        defined by code.
      </h1>
    </div>
  );
}