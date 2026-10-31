import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload, FaCode, FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { resumeData } from "../data/credentials";

export default function Hero() {
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
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Subtle ambient violet radial gradient in background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[350px] bg-gradient-to-tr from-violet-600/15 via-purple-600/10 to-transparent blur-3xl opacity-75 dark:opacity-60 -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Recruiter Headline, Typewriter, Intro, CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left min-w-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-medium bg-violet-50 dark:bg-charcoal-800 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-purple-500/20 max-w-full text-center leading-normal">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse shrink-0" />
              <span className="break-words">Frontend Developer · React Specialist · Available for Hire</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15] break-words">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Vaibhav Kumar
              </span>
            </h1>

            <div className="text-lg sm:text-2xl font-semibold text-gray-700 dark:text-gray-200 min-h-[2.5rem] h-auto flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
              <span className="text-gray-400 font-mono text-base sm:text-lg">&gt;</span>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "React Developer",
                    "Web Developer",
                    "UI/UX Implementation"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              B.Tech in Computer Science graduate specializing in building responsive, accessible, and high-performance web applications using React.js, JavaScript, and Tailwind CSS.
            </p>

            {/* Recruiter Quick Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-3 sm:gap-x-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 pt-1">
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-violet-500 shrink-0" size={12} />
                <span>React &amp; JavaScript Core</span>
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-violet-500 shrink-0" size={12} />
                <span>7 Verified Live Projects</span>
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-violet-500 shrink-0" size={12} />
                <span>Clean Code &amp; Responsive UI</span>
              </span>
            </div>

            {/* Functional CTAs for Recruiters */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-3 w-full">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-xs sm:text-sm shadow-violet-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <FaArrowRight size={12} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-charcoal-800 text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium text-xs sm:text-sm border border-gray-200 dark:border-purple-500/20 hover:border-violet-500/40 transition-all hover:scale-[1.02]"
              >
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 dark:bg-charcoal-800 hover:bg-violet-50 dark:hover:bg-charcoal-750 text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium text-xs sm:text-sm border border-gray-200 dark:border-purple-500/20 hover:border-violet-500/40 transition-all hover:scale-[1.02] cursor-pointer"
                title={`Download ${resumeData.fileName} from ${resumeData.file}`}
              >
                <FaDownload size={12} className="text-violet-500" />
                <span>{resumeData.label || "Download Resume"}</span>
              </button>

              {/* Verified Profiles: GitHub & LinkedIn */}
              <div className="flex items-center justify-center gap-1.5 pt-1 sm:pt-0 pl-0 sm:pl-1">
                <a
                  href="https://github.com/vaibhavkr87"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile (opens in new tab)"
                  className="p-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-100 dark:hover:bg-charcoal-800 transition"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaibhavkr03"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile (opens in new tab)"
                  className="p-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:text-[#0077B5] dark:hover:text-[#38a1db] hover:bg-gray-100 dark:hover:bg-charcoal-800 transition"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Profile Card */}
          <div className="lg:col-span-5 min-w-0 w-full">
            <div className="bg-white dark:bg-charcoal-850 rounded-2xl p-4 sm:p-6 border border-gray-200/80 dark:border-purple-500/20 shadow-xl dark:shadow-violet-glow transition-all max-w-full overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-100 dark:border-charcoal-700/80 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                  <FaCode size={12} className="text-violet-500" />
                  <span>developerProfile.json</span>
                </div>
              </div>

              {/* Code Snippet Content */}
              <div className="pt-4 font-mono text-[11px] sm:text-xs leading-relaxed space-y-1.5 text-gray-800 dark:text-gray-200 break-words">
                <p>
                  <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                  <span className="text-violet-700 dark:text-violet-300">candidate</span> = &#123;
                </p>
                <p className="pl-3 sm:pl-4">
                  <span className="text-gray-500 dark:text-gray-400">name:</span>{" "}
                  <span className="text-green-600 dark:text-emerald-400">&quot;Vaibhav Kumar&quot;</span>,
                </p>
                <p className="pl-3 sm:pl-4">
                  <span className="text-gray-500 dark:text-gray-400">degree:</span>{" "}
                  <span className="text-green-600 dark:text-emerald-400">&quot;B.Tech in Computer Science&quot;</span>,
                </p>
                <div className="pl-3 sm:pl-4">
                  <span className="text-gray-500 dark:text-gray-400">targetRoles:</span> [
                  <div className="pl-3 sm:pl-4 text-amber-600 dark:text-amber-300">
                    &quot;Frontend Developer&quot;,
                  </div>
                  <div className="pl-3 sm:pl-4 text-amber-600 dark:text-amber-300">
                    &quot;React Developer&quot;
                  </div>
                  ],
                </div>
                <p className="pl-3 sm:pl-4">
                  <span className="text-gray-500 dark:text-gray-400">internship:</span>{" "}
                  <span className="text-green-600 dark:text-emerald-400">&quot;WAP Infotech / Admiration Labs&quot;</span>,
                </p>
                <div className="pl-3 sm:pl-4">
                  <span className="text-gray-500 dark:text-gray-400">coreStack:</span> [
                  <span className="text-amber-600 dark:text-amber-300">&quot;ReactJS&quot;</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-300">&quot;Tailwind CSS&quot;</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-300">&quot;JavaScript&quot;</span>],
                </div>
                <p className="pl-3 sm:pl-4">
                  <span className="text-gray-500 dark:text-gray-400">featuredWork:</span>{" "}
                  <a href="#projects" className="text-violet-600 dark:text-violet-400 underline underline-offset-2 hover:text-violet-500">
                    &quot;DevMentor AI&quot;
                  </a>,
                </p>
                <p className="pl-3 sm:pl-4">
                  <span className="text-gray-500 dark:text-gray-400">immediateHire:</span>{" "}
                  <span className="text-blue-600 dark:text-cyan-400">true</span>
                </p>
                <p>&#125;;</p>
              </div>

              {/* Quick Summary Strip */}
              <div className="mt-4 pt-3 sm:pt-4 border-t border-gray-100 dark:border-charcoal-700/80 grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
                <div className="p-1.5 sm:p-2 rounded-lg bg-gray-50 dark:bg-charcoal-900/60">
                  <div className="text-base sm:text-lg font-bold text-violet-600 dark:text-violet-400 font-mono">7</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400">Live Apps</div>
                </div>
                <div className="p-1.5 sm:p-2 rounded-lg bg-gray-50 dark:bg-charcoal-900/60">
                  <div className="text-base sm:text-lg font-bold text-violet-600 dark:text-violet-400 font-mono">Intern</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400">Frontend</div>
                </div>
                <div className="p-1.5 sm:p-2 rounded-lg bg-gray-50 dark:bg-charcoal-900/60">
                  <div className="text-base sm:text-lg font-bold text-violet-600 dark:text-violet-400 font-mono">React</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400">Modern UI</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
