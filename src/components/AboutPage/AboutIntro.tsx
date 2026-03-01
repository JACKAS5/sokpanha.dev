export default function AboutIntro() {
  return (
    <div className="relative max-w-2xl">
      {/* Thinner, more elegant accent line */}
      <div className="absolute -left-8 top-1 bottom-1 w-[1px] bg-gray-200 dark:bg-white/10 hidden md:block" />

      <div className="space-y-10">
        {/* Main Identity Statement */}
        <section>
          <p className="text-2xl md:text-3xl tracking-tight leading-tight text-gray-900 dark:text-white font-medium transition-colors duration-500">
            I'm <span className="text-blue-600 dark:text-blue-500">Sokpanha Prak</span>. 
            A developer currently balancing <span className="opacity-50">academic studies</span> with a deep obsession for building the web.
          </p>
        </section>

        {/* Core Narrative - Split into clean blocks */}
        <div className="space-y-6 text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
          <p>
            As a student of the craft, I focus on the intersection of 
            <span className="text-gray-900 dark:text-gray-200 font-medium"> App Development</span> and 
            <span className="text-gray-900 dark:text-gray-200 font-medium"> Scalable Web Architecture</span>. 
            I spend my time mastering React, TypeScript, and Node.js to turn complex logic into refined digital products.
          </p>

          <p>
            My vision extends beyond today's standards. I am committed to a path of 
            <span className="text-blue-600 dark:text-blue-500"> continual growth</span>, 
            actively preparing to integrate <span className="text-gray-900 dark:text-white font-semibold">Artificial Intelligence</span> into 
            my future engineering workflow.
          </p>
        </div>

        {/* Minimalist Status Indicator */}
        <footer className="flex items-center gap-3 pt-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative h-2 w-2 rounded-full bg-blue-500"></span>
          </span>
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-gray-500">
            Building the AI-Driven Future
          </span>
        </footer>
      </div>
    </div>
  );
}