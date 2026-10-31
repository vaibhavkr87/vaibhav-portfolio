import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNetworkWired,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skillGroups = [
    {
      category: "Frontend Development",
      description: "Core technologies used to build responsive, accessible, and performant user interfaces.",
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" size={22} />, desc: "Component architecture, hooks, state management" },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-[#F7DF1E]" size={22} />, desc: "Asynchronous programming, DOM, modern syntax" },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={22} />, desc: "Semantic markup, modern web accessibility" },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={22} />, desc: "Responsive layouts, Flexbox, CSS Grid, keyframes" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={22} />, desc: "Utility-first design, dark mode, design tokens" },
      ],
    },
    {
      category: "Backend & APIs",
      description: "Server-side and communication protocols utilized in full-stack project implementations.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" size={22} />, desc: "JavaScript runtime for server-side environments" },
        { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-200" size={22} />, desc: "Lightweight web framework for RESTful routing" },
        { name: "REST API Fundamentals", icon: <FaNetworkWired className="text-violet-500" size={22} />, desc: "HTTP methods, JSON payloads, client integration" },
      ],
    },
    {
      category: "Database",
      description: "Document and state persistence systems used in verified projects.",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={22} />, desc: "NoSQL document database powering the MERN Blog platform" },
      ],
    },
    {
      category: "Tools & Workflow",
      description: "Essential development tooling, version control, and build systems.",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={22} />, desc: "Version control, branching, clean commits" },
        { name: "GitHub", icon: <FaGithub className="text-gray-900 dark:text-white" size={22} />, desc: "Repository hosting, open source collaboration" },
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" size={22} />, desc: "Next-gen frontend build tool and dev server" },
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" size={22} />, desc: "Primary code editor with linting and debugging tools" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono font-medium text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Core <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            A grounded overview of technologies I actively use across frontend engineering and full-stack web applications.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white dark:bg-charcoal-850 rounded-2xl p-4 sm:p-7 border border-gray-200/80 dark:border-purple-500/15 shadow-sm hover:border-violet-500/40 dark:hover:border-violet-500/40 transition-all flex flex-col justify-between max-w-full overflow-hidden"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-3 border-b border-gray-100 dark:border-charcoal-700/80">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-tight break-words min-w-0">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-gray-400 shrink-0">
                    {group.skills.length} {group.skills.length === 1 ? "Technology" : "Technologies"}
                  </span>
                </div>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed break-words">
                  {group.description}
                </p>

                {/* Skill Badges: width 100%, min-width 0, icons and text never overflowing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="w-full min-w-0 flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-charcoal-800/80 border border-gray-200/60 dark:border-purple-500/10 hover:border-violet-500/30 transition-all hover:scale-[1.01] box-border overflow-hidden"
                    >
                      <div className="p-1.5 rounded-lg bg-white dark:bg-charcoal-750 shrink-0 shadow-xs">
                        {skill.icon}
                      </div>
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate min-w-0">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400 truncate min-w-0" title={skill.desc}>
                          {skill.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
