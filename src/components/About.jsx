import Vaibhav from "../assets/Vaibhav.png";
import { FaGraduationCap, FaCheckCircle, FaArrowRight, FaCode, FaRocket, FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";
import { resumeData } from "../data/credentials";

export default function About() {
  const strengths = [
    {
      title: "Component-Driven Architecture",
      desc: "Decomposing complex UIs into clean, reusable, and predictable React components with isolated state.",
    },
    {
      title: "Responsive & Accessible Execution",
      desc: "Delivering interfaces that look sharp and function intuitively across mobile, tablet, and desktop viewports.",
    },
    {
      title: "Modern Build & State Tooling",
      desc: "Building with Vite, Tailwind CSS, and RESTful API integrations for fast load times and clean developer workflows.",
    },
  ];

  const handleDownloadResume = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(resumeData.file, { method: "HEAD" });
      if (res.ok) {
        const link = document.createElement("a");
        link.href = resumeData.file;
        link.download = resumeData.fileName || "Vaibhav_Kumar_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Downloading resume...");
      } else {
        toast.info(
          `Resume PDF is configured at ${resumeData.file}. Please upload your resume PDF to public${resumeData.file} to enable instant downloads, or email vaibhavkr87097@gmail.com.`,
          { autoClose: 5000 }
        );
      }
    } catch {
      toast.info(
        `Resume PDF is configured at ${resumeData.file}. Please email vaibhavkr87097@gmail.com for an immediate copy.`,
        { autoClose: 5000 }
      );
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono font-medium text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
            Profile &amp; Engineering Approach
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        {/* 2-Column Profile & Story */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Avatar with Violet Halo Border */}
          <div className="lg:col-span-5 flex justify-center w-full min-w-0">
            <div className="relative group max-w-full">
              {/* Violet Glow Ring */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-1.5 bg-gradient-to-tr from-violet-600 to-purple-600 rounded-3xl blur-md opacity-40 group-hover:opacity-60 transition duration-500" 
              />
              <div className="relative p-2 bg-white dark:bg-charcoal-850 rounded-3xl border border-gray-200/80 dark:border-purple-500/20 shadow-xl overflow-hidden max-w-full">
                <img
                  src={Vaibhav}
                  alt="Vaibhav Kumar - Frontend Developer"
                  loading="lazy"
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-2xl max-w-full aspect-square"
                />
              </div>
            </div>
          </div>

          {/* Right: Bio & Degree Highlights */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-gray-700 dark:text-gray-300 min-w-0 w-full">
            <div className="p-3.5 sm:p-4 rounded-xl bg-violet-50/70 dark:bg-charcoal-850 border border-violet-100 dark:border-purple-500/15 flex items-start gap-3 sm:gap-4 min-w-0">
              <div className="p-2 sm:p-2.5 rounded-lg bg-violet-600 text-white shrink-0 mt-0.5 shadow-sm">
                <FaGraduationCap size={18} />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base break-words">
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">
                  Grounded in fundamental software engineering, data structures, and computer networks with an applied focus on modern web engineering.
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              I am a Frontend Developer with a passion for turning complex problems into intuitive, high-performance web applications. My core toolkit centers on <strong className="text-violet-600 dark:text-violet-400 font-semibold">React.js</strong>, modern <strong className="text-violet-600 dark:text-violet-400 font-semibold">JavaScript</strong>, and <strong className="text-violet-600 dark:text-violet-400 font-semibold">Tailwind CSS</strong>.
            </p>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
              During my frontend internship at <strong className="text-violet-600 dark:text-violet-400 font-semibold">WAP Infotech / Admiration Labs</strong>, I worked on responsive interface engineering and resolved cross-browser UI/UX challenges. With 7 verified live deployments ranging from AI developer assistants to real-time tracking dashboards, I enjoy building clean, maintainable frontend systems.
            </p>

            {/* Recruiter Strengths Cards */}
            <div className="space-y-3 pt-2">
              {strengths.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm min-w-0">
                  <FaCheckCircle className="text-violet-500 shrink-0 mt-1" size={13} />
                  <div className="min-w-0 break-words">
                    <span className="font-semibold text-gray-900 dark:text-white">{item.title}: </span>
                    <span className="text-gray-600 dark:text-gray-400">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links for Recruiters */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-4">
              <button
                type="button"
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-medium shadow-sm transition hover:scale-[1.01] cursor-pointer w-full sm:w-auto"
              >
                <FaDownload size={12} />
                <span>Download Resume</span>
              </button>

              <a
                href="#skills"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500"
              >
                <FaCode size={12} />
                <span>Technical Skills</span>
                <FaArrowRight size={10} />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500"
              >
                <span>Work Experience</span>
                <FaArrowRight size={10} />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500"
              >
                <FaRocket size={12} />
                <span>Projects (7)</span>
                <FaArrowRight size={10} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}