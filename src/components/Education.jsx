import { FaGraduationCap, FaCheckCircle, FaLaptopCode } from "react-icons/fa";

export default function Education() {
  const coreCoursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Computer Networks & Protocols",
    "Web Engineering & Architecture",
    "Software Engineering & Testing",
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono font-medium text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Education &amp; <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Formal technical education in Computer Science providing the foundational theory behind modern software development.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-3xl mx-auto w-full min-w-0">
          <div className="bg-white dark:bg-charcoal-850 rounded-2xl p-4 sm:p-8 md:p-9 border border-gray-200/80 dark:border-purple-500/20 shadow-xl dark:shadow-violet-glow relative overflow-hidden max-w-full">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pb-5 sm:pb-6 border-b border-gray-100 dark:border-charcoal-700/80 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <FaGraduationCap size={24} />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-violet-100 dark:bg-violet-950/70 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 mb-1">
                  Undergraduate Degree
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight break-words">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-sm sm:text-base font-semibold text-violet-600 dark:text-violet-400 break-words">
                  Computer Science Engineering
                </p>
              </div>
            </div>

            {/* Academic Core Concepts & Competencies */}
            <div className="pt-5 sm:pt-6 space-y-4 min-w-0">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                <FaLaptopCode size={13} className="text-violet-500 shrink-0" />
                <span>Foundational Engineering Coursework</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {coreCoursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-charcoal-800/70 border border-gray-200/60 dark:border-purple-500/10 text-xs sm:text-sm text-gray-700 dark:text-gray-300 min-w-0"
                  >
                    <FaCheckCircle className="text-violet-500 shrink-0" size={13} />
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 pt-2 leading-relaxed">
                Applied theoretical coursework into practical software engineering, culminating in full-stack web applications, state-driven user interfaces, and algorithmic problem-solving.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
