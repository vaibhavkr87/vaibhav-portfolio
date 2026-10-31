const projects = [
  {
    title: "Crypto Tracker",
    tech: ["React", "Redux Toolkit", "Chart.js", "API"],
    live: "https://crypto-tracker-wine-one.vercel.app",
    github: "https://github.com/vaibhavkr87097/crypto-tracker",
  },
  {
    title: "T-Shirt Customizer",
    tech: ["React", "Three.js", "Vite", "Cloudflare"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 px-4 bg-gray-100 text-gray-800 dark:bg-[#0f172a] dark:text-white transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {proj.tech.join(", ")}
            </p>
            <div className="flex gap-4">
              <a
                href={proj.live}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Live
              </a>
              <a
                href={proj.github}
                className="text-gray-600 dark:text-gray-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

