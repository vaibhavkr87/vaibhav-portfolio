import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-4xl md:text-6xl font-extrabold">
        <h1 className="text-4xl font-bold mb-2">
          Hi, I&apos;m <span className="text-blue-500">Vaibhav Kumar</span>
        </h1>
        <div className="text-xl font-medium mb-4 text-gray-500 dark:text-gray-300">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "React Enthusiast",
                "Open Source Contributor",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <p className="text-xl mt-4 max-w-xl text-gray-600 dark:text-gray-300">
        A Frontend Developer who builds responsive & interactive web apps using
        React and modern UI tools.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-md hover:bg-blue-600 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
