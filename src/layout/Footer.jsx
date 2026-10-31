import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200/60 dark:border-purple-500/10 py-10 bg-white/50 dark:bg-charcoal-950/60 text-gray-600 dark:text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Copyright */}
        <div className="text-center sm:text-left">
          <p className="font-semibold text-gray-900 dark:text-gray-200">
            Vaibhav Kumar · Frontend Developer
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            &copy; {new Date().getFullYear()} All rights reserved. Built with React.js &amp; Tailwind CSS.
          </p>
        </div>

        {/* Links & Scroll to top */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/vaibhavkr87"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile (opens in new tab)"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhavkr03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile (opens in new tab)"
            className="hover:text-[#0077B5] dark:hover:text-[#38a1db] transition"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:vaibhavkr87097@gmail.com"
            aria-label="Send Professional Email"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition"
          >
            <FaEnvelope size={18} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="p-2 rounded-lg bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 border border-gray-200 dark:border-purple-500/15 transition cursor-pointer"
          >
            <FaArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
