export default function About() {
  return (
    <section
      id="about"
      className="py-12 px-4 bg-white text-gray-800 dark:bg-[#0f172a] dark:text-gray-200 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
      <p className="text-center max-w-xl mx-auto text-gray-600 dark:text-gray-300">
        I’m a passionate frontend developer from India with experience in
        React, TypeScript, Redux Toolkit, Tailwind CSS, and building beautiful UIs. 
        I love turning ideas into interactive web experiences.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {["React", "Redux", "TypeScript", "Tailwind", "Vite", "GitHub"].map(
          (tech) => (
            <span
              key={tech}
              className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          )
        )}
      </div>
    </section>
  );
}
