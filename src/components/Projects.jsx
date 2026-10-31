import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle, FaTimes, FaCheck, FaStar, FaRobot } from "react-icons/fa";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // Dedicated featured project (DevMentor AI)
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  // Remaining 6 unique projects for the grid
  const otherProjects = projects.filter((p) => !p.featured);

  const filterTabs = [
    { id: "all", label: "All Projects (6)" },
    { id: "frontend", label: "Frontend & UI (4)" },
    { id: "fullstack", label: "Full-Stack / MERN (1)" },
    { id: "games", label: "Games (1)" },
  ];

  const filteredGridProjects = activeFilter === "all"
    ? otherProjects
    : otherProjects.filter((p) => p.category === activeFilter);

  // Keyboard accessibility: Close modal on Escape key press & prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block text-xs font-mono font-medium text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
            Verified Deployments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Featured &amp; Verified <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Seven real-world web applications built with React, modern APIs, and clean design. Every project includes working live demos and verified source code.
          </p>
        </div>

        {/* 1. Flagship Spotlight: DevMentor AI (Featured Prominently) */}
        {featuredProject && (
          <div className="mb-16">
            <div className="relative rounded-3xl bg-gradient-to-b from-violet-500/15 via-transparent to-transparent p-[1px] max-w-full">
              <div className="rounded-3xl bg-white dark:bg-charcoal-850 border border-gray-200/80 dark:border-purple-500/25 p-4 sm:p-8 lg:p-10 shadow-xl dark:shadow-violet-glow relative overflow-hidden max-w-full">
                
                {/* Top Badge Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-violet-100 dark:bg-violet-950/70 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 max-w-full">
                    <FaStar size={12} className="text-violet-500 shrink-0" />
                    <span className="break-words">Featured Flagship Project · AI &amp; Developer Tools</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400 break-words">
                    React · JavaScript · Tailwind · Gemini API
                  </span>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Details */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-5 min-w-0">
                    <div>
                      <h3 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight break-words">
                        {featuredProject.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-violet-600 dark:text-violet-400 font-mono mt-1 break-words">
                        {featuredProject.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2 pt-1">
                      {featuredProject.highlights.map((point, index) => (
                        <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 min-w-0">
                          <span className="p-0.5 rounded-full bg-violet-100 dark:bg-charcoal-750 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5">
                            <FaCheck size={11} />
                          </span>
                          <span className="break-words leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                      {featuredProject.tech.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 sm:px-3 py-1 rounded-md bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-purple-500/20 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions: Stacks on mobile */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-3 w-full">
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-xs sm:text-sm shadow-violet-glow transition-all hover:scale-[1.02] text-center w-full sm:w-auto"
                      >
                        <span>Launch Live Demo</span>
                        <FaExternalLinkAlt size={11} />
                      </a>

                      {featuredProject.githubUrl && (
                        <a
                          href={featuredProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium text-xs sm:text-sm border border-gray-200 dark:border-purple-500/20 hover:border-violet-500/40 transition-all hover:scale-[1.02] text-center w-full sm:w-auto"
                        >
                          <FaGithub size={14} />
                          <span>View Source</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(featuredProject)}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 text-xs sm:text-sm font-medium transition cursor-pointer w-full sm:w-auto text-center"
                      >
                        <FaInfoCircle size={13} />
                        <span>Architecture Details</span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Modern Mockup / Terminal Preview */}
                  <div className="lg:col-span-5 w-full min-w-0">
                    <div className="bg-gray-900 dark:bg-charcoal-900 rounded-2xl p-4 sm:p-5 border border-gray-800 dark:border-purple-500/30 text-gray-200 shadow-2xl font-mono text-xs space-y-3 max-w-full overflow-hidden">
                      <div className="flex items-center justify-between pb-3 border-b border-gray-800 text-[11px] text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex items-center gap-1 text-violet-400 truncate max-w-[180px]">
                          <FaRobot size={11} className="shrink-0" />
                          <span className="truncate">devmentor-ai.vercel.app</span>
                        </div>
                      </div>

                      <div className="space-y-2 text-gray-300 break-words">
                        <p className="text-violet-400 font-semibold break-all sm:break-words">$ devmentor --debug &quot;React state race condition&quot;</p>
                        <div className="p-2.5 sm:p-3 rounded-lg bg-gray-950/70 dark:bg-charcoal-950 border border-gray-800 space-y-1.5 text-gray-300 break-words">
                          <p className="text-green-400 font-bold">&#10003; AI Analysis Complete:</p>
                          <p className="text-gray-400 text-[11px] leading-relaxed break-words">
                            • Identified asynchronous state collision in event handler.
                          </p>
                          <p className="text-gray-400 text-[11px] leading-relaxed break-words">
                            • Recommendation: Implement functional state updates <code className="text-violet-300 break-all">setState(prev =&gt; ...)</code> and cleanup flags inside effects.
                          </p>
                        </div>
                        <p className="text-violet-400 pt-1">$ devmentor --status</p>
                        <p className="text-gray-500 text-[11px] break-words">&gt; Model: Gemini API · Latency: 220ms · Ready</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* 2. Filter Tabs for Remaining 6 Verified Projects */}
        <div className="pt-4 border-t border-gray-200/60 dark:border-purple-500/10 mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              More Verified Projects <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({otherProjects.length})</span>
            </h3>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 max-w-full">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? "bg-violet-600 text-white shadow-violet-glow"
                      : "bg-gray-100 dark:bg-charcoal-800 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 border border-gray-200 dark:border-purple-500/15"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Non-Duplicated Project Cards Grid (6 projects with key features) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGridProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between bg-white dark:bg-charcoal-850 border border-gray-200/80 dark:border-purple-500/15 hover:border-violet-500/40 dark:hover:border-violet-500/40 shadow-sm hover:shadow-lg max-w-full overflow-hidden"
            >
              <div className="min-w-0">
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold truncate">
                    {project.category}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 flex items-center gap-1 transition cursor-pointer shrink-0"
                    title="View full project details"
                  >
                    <FaInfoCircle size={13} />
                    <span>Details</span>
                  </button>
                </div>

                {/* Title & Tagline */}
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 tracking-tight break-words">
                  {project.title}
                </h4>
                <p className="text-xs text-violet-600 dark:text-violet-400 font-mono mb-3 break-words">
                  {project.tagline}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4 leading-relaxed break-words">
                  {project.description}
                </p>

                {/* Recruiter Quick Features (Main Features directly on card) */}
                <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-gray-50/70 dark:bg-charcoal-800/60 border border-gray-200/50 dark:border-purple-500/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold block mb-1">
                    Key Features
                  </span>
                  {project.highlights.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-600 dark:text-gray-300 leading-tight min-w-0">
                      <FaCheck className="text-violet-500 shrink-0 mt-0.5" size={9} />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-0.5 rounded bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-purple-500/10 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 dark:border-charcoal-700/80 flex items-center justify-between gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-xs transition shadow-sm"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt size={10} />
                </a>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium text-xs border border-gray-200 dark:border-purple-500/20 transition"
                  >
                    <FaGithub size={13} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 4. Interactive Project Details Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-purple-500/25 p-5 sm:p-8 shadow-2xl space-y-5 sm:space-y-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-charcoal-800 transition cursor-pointer"
              >
                <FaTimes size={16} />
              </button>

              <div className="pr-8">
                <div className="text-xs font-mono font-medium text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-1">
                  {selectedProject.featured ? "Featured Project" : selectedProject.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white break-words">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 break-words">
                  {selectedProject.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider font-mono">
                  Key Capabilities &amp; Architecture
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 min-w-0">
                      <FaCheck className="text-violet-500 shrink-0 mt-1" size={11} />
                      <span className="break-words">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider font-mono mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-purple-500/20 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons in Modal: Stacks cleanly on mobile */}
              <div className="pt-4 border-t border-gray-100 dark:border-charcoal-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 w-full">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 text-xs font-medium border border-gray-200 dark:border-purple-500/20 transition w-full sm:w-auto text-center"
                  >
                    <FaGithub size={14} />
                    <span>View Repository</span>
                  </a>
                )}
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-xs font-medium transition shadow-sm w-full sm:w-auto text-center"
                >
                  <span>Open Live Demo</span>
                  <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
