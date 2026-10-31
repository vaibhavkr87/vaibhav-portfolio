import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-white/80 dark:bg-charcoal-900/85 backdrop-blur-md border-b border-gray-200/60 dark:border-purple-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#home"
          className="text-base sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1 hover:opacity-90 transition shrink-0"
        >
          <span className="text-violet-500 font-mono font-semibold">&lt;</span>
          <span>Vaibhav</span>
          <span className="text-violet-500 font-mono font-semibold">/&gt;</span>
        </a>

        {/* Desktop Nav Links (Visible only on lg and above) */}
        <div className="hidden lg:flex items-center space-x-5 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions: Socials + Theme Toggle + Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href="https://github.com/vaibhavkr87"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile (opens in new tab)"
            className="p-1.5 sm:p-2 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/vaibhavkr03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile (opens in new tab)"
            className="p-1.5 sm:p-2 text-gray-700 dark:text-gray-300 hover:text-[#0077B5] dark:hover:text-[#38a1db] transition-colors"
          >
            <FaLinkedin size={16} />
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle color theme"
            className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 border border-gray-200 dark:border-purple-500/20 transition-all cursor-pointer"
          >
            {darkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>

          {/* Mobile Menu Hamburger Button (lg:hidden) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-charcoal-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-purple-500/20 cursor-pointer"
          >
            {mobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="relative z-50 lg:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-charcoal-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-purple-500/15 space-y-2.5 shadow-xl w-full max-w-full box-border">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 hover:bg-violet-50 dark:hover:bg-charcoal-800 hover:text-violet-600 dark:hover:text-violet-400 transition"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-200 dark:border-charcoal-700 flex justify-between items-center px-3">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/vaibhavkr87"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-gray-600 dark:text-gray-300 hover:text-violet-500"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhavkr03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-600 dark:text-gray-300 hover:text-[#0077B5]"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-sm flex items-center gap-2 text-violet-600 dark:text-violet-400 font-medium cursor-pointer"
            >
              {darkMode ? <><FaSun size={14} /> Light Mode</> : <><FaMoon size={14} /> Dark Mode</>}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
