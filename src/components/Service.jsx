import { FaCode, FaPaintBrush, FaMobileAlt, FaCheck } from "react-icons/fa";

export default function Service() {
  const services = [
    {
      title: "Frontend Web Development",
      icon: <FaCode size={26} />,
      description:
        "Building responsive, interactive, and high-performance web applications using React.js, modern JavaScript, and Tailwind CSS with clean component architecture.",
      deliverables: [
        "Component-Driven Architecture",
        "REST API & Data Integration",
        "State Management & Local Storage",
        "Performance & Bundle Optimization",
      ],
    },
    {
      title: "UI/UX Implementation",
      icon: <FaPaintBrush size={26} />,
      description:
        "Crafting pixel-perfect, accessible, and intuitive user interfaces with consistent design systems, dark mode palettes, and smooth feedback animations.",
      deliverables: [
        "Design Token Systems & Theming",
        "Light & Dark Mode Cohesion",
        "Micro-interactions & Transitions",
        "WCAG Legibility & Accessibility",
      ],
    },
    {
      title: "Responsive Web Design",
      icon: <FaMobileAlt size={26} />,
      description:
        "Ensuring websites function flawlessly across all screen sizes, from mobile phones and tablets to high-resolution desktop viewports.",
      deliverables: [
        "Mobile-First Responsive Layouts",
        "Fluid Typography & Flexible Grids",
        "Touch-Friendly Controls & Drawers",
        "Cross-Browser Compatibility",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono font-medium text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
            Capabilities &amp; Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Core <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Specialized engineering services focused on modern frontend architecture, intuitive UX, and responsive delivery.
          </p>
        </div>

        {/* Services 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-charcoal-850 border border-gray-200/80 dark:border-purple-500/15 rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-xl hover:border-violet-500/40 dark:hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between max-w-full overflow-hidden"
            >
              <div className="min-w-0">
                {/* Service Icon with Violet Gradient Box */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-violet-100 dark:bg-charcoal-800 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-purple-500/20 flex items-center justify-center mb-5 sm:mb-6 shrink-0">
                  {service.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2.5 sm:mb-3 tracking-tight break-words">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 sm:mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 sm:space-y-2.5 pt-2 border-t border-gray-100 dark:border-charcoal-700/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold block mb-2">
                    Deliverables
                  </span>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 min-w-0">
                      <FaCheck className="text-violet-500 shrink-0" size={10} />
                      <span className="break-words">{item}</span>
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
