import { experienceData } from "../data/credentials";
import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaFilePdf, FaExternalLinkAlt, FaAward } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Experience() {
  const handleOpenDoc = async (filePath, title) => {
    try {
      const res = await fetch(filePath, { method: "HEAD" });
      if (res.ok) {
        window.open(filePath, "_blank", "noopener,noreferrer");
      } else {
        toast.info(
          `Document (${title}) will be available once uploaded to ${filePath}. Please request directly via email: vaibhavkr87097@gmail.com`,
          { autoClose: 5000 }
        );
      }
    } catch {
      toast.info(
        `Document (${title}) will be available once uploaded to ${filePath}. Please request directly via email: vaibhavkr87097@gmail.com`,
        { autoClose: 5000 }
      );
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono font-medium text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
            Professional Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Work <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Practical industry internship delivering responsive user interfaces, modular React components, and team collaboration.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-charcoal-850 rounded-2xl p-4 sm:p-8 md:p-9 border border-gray-200/80 dark:border-purple-500/20 shadow-xl dark:shadow-violet-glow relative overflow-hidden transition-all max-w-full"
            >
              {/* Header: Role, Company, Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-gray-100 dark:border-charcoal-700/80">
                <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-violet-600 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <FaBriefcase size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-violet-100 dark:bg-violet-950/70 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 mb-1">
                      {exp.type}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight break-words">
                      {exp.role}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-violet-600 dark:text-violet-400 break-words">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-charcoal-800 px-3 py-1.5 rounded-lg border border-gray-200/60 dark:border-purple-500/10 self-start sm:self-auto shrink-0">
                  <FaCalendarAlt size={12} className="text-violet-500" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="pt-5 sm:pt-6 space-y-4">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2.5">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-2">
                    Key Technical Contributions
                  </span>
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <FaCheckCircle className="text-violet-500 shrink-0 mt-0.5" size={13} />
                      <span className="leading-relaxed break-words">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold block mb-2">
                    Technologies Applied
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-purple-500/15 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Internship Documents & Recommendation */}
                <div className="pt-6 border-t border-gray-100 dark:border-charcoal-700/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full">
                  {exp.certificateFile && (
                    <button
                      type="button"
                      onClick={() => handleOpenDoc(exp.certificateFile, "Internship Certificate")}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium shadow-sm transition hover:scale-[1.01] cursor-pointer w-full sm:w-auto"
                    >
                      <FaAward size={13} />
                      <span>View Internship Certificate</span>
                      <FaExternalLinkAlt size={9} />
                    </button>
                  )}

                  {exp.recommendationFile && (
                    <button
                      type="button"
                      onClick={() => handleOpenDoc(exp.recommendationFile, "Letter of Recommendation")}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-charcoal-800 hover:bg-gray-200 dark:hover:bg-charcoal-750 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 text-xs font-medium border border-gray-200 dark:border-purple-500/20 transition cursor-pointer w-full sm:w-auto"
                      title="Optional verified recommendation letter"
                    >
                      <FaFilePdf size={12} className="text-violet-500" />
                      <span>Letter of Recommendation</span>
                      <FaExternalLinkAlt size={9} />
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
