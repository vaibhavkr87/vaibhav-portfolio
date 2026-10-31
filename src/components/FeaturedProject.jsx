import { FaExternalLinkAlt, FaGithub, FaRobot, FaStar, FaCheck } from "react-icons/fa";

export default function FeaturedProject() {
  const highlights = [
    "AI-powered frontend code debugging and real-time concept explainers",
    "Tailored guidance for React hooks, component lifecycles, and modern CSS",
    "Structured project learning roadmaps for aspiring and leveling-up developers",
    "Clean, responsive, distraction-free modern interface with instant answers"
  ];

  return (
    <section id="featured-project" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
              <FaStar size={11} />
              <span>Flagship Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-1">
              Featured <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Project</span>
            </h2>
          </div>
        </div>

        {/* Spotlight Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-violet-500/10 via-transparent to-transparent p-[1px]">
          <div className="rounded-3xl bg-white dark:bg-charcoal-850 border border-gray-200/80 dark:border-purple-500/25 p-6 sm:p-10 shadow-xl dark:shadow-violet-glow relative overflow-hidden">
            
            {/* Top Tag & Decorative Icon */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-violet-100 dark:bg-violet-950/70 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60">
                <FaRobot size={12} className="text-violet-500" />
                <span>Featured Project · AI &amp; Developer Tools</span>
              </div>
              <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                React · Vite · Gemini API
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                  DevMentor AI
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  An AI-powered development assistant designed to help developers debug code, master complex React and CSS concepts, and generate personalized, actionable learning roadmaps.
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-1">
                  {highlights.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <span className="p-0.5 rounded-full bg-violet-100 dark:bg-charcoal-750 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5">
                        <FaCheck size={11} />
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["React", "JavaScript", "Tailwind CSS", "Vite", "Gemini API"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-md bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-purple-500/20 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Launch & Source CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="https://devmentor-ai-frontend-assistant.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-sm shadow-violet-glow transition-all hover:scale-[1.02]"
                  >
                    <span>Launch Live Demo</span>
                    <FaExternalLinkAlt size={12} />
                  </a>

                  <a
                    href="https://github.com/vaibhavkr87/devmentor-ai-frontend-assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium text-sm border border-gray-200 dark:border-purple-500/20 hover:border-violet-500/40 transition-all hover:scale-[1.02]"
                  >
                    <FaGithub size={16} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right: Modern Mockup / Terminal Preview */}
              <div className="lg:col-span-5">
                <div className="bg-gray-900 dark:bg-charcoal-900 rounded-2xl p-5 border border-gray-800 dark:border-purple-500/30 text-gray-200 shadow-2xl font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-800 text-[11px] text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span>devmentor-ai.vercel.app</span>
                  </div>

                  <div className="space-y-2 text-gray-300">
                    <p className="text-violet-400 font-semibold">$ devmentor --query &quot;React useEffect vs useLayoutEffect&quot;</p>
                    <div className="p-3 rounded-lg bg-gray-950/70 dark:bg-charcoal-950 border border-gray-800 space-y-1.5 text-gray-300">
                      <p className="text-green-400 font-bold">&#10003; AI Analysis Complete:</p>
                      <p className="text-gray-400 text-[11px] leading-relaxed">
                        • <span className="text-gray-200 font-medium">useEffect</span>: Runs asynchronously AFTER paint. Ideal for data fetching, subscriptions, timers.
                      </p>
                      <p className="text-gray-400 text-[11px] leading-relaxed">
                        • <span className="text-gray-200 font-medium">useLayoutEffect</span>: Runs synchronously BEFORE browser paint. Use strictly for DOM measurements and preventing visual flicker.
                      </p>
                    </div>
                    <p className="text-violet-400 pt-1">$ devmentor --generate-roadmap &quot;Advanced React 2026&quot;</p>
                    <p className="text-gray-500 text-[11px]">&gt; Generating 5-tier milestone roadmap with interactive exercises...</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
