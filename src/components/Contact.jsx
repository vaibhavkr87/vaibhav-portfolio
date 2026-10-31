import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaCheck, FaCopy, FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Web3Forms public access key for client-side form routing
  const accessKey = "3fa2010a-1940-4055-9ec7-1454862d079c";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText("vaibhavkr87097@gmail.com");
        setCopied(true);
        toast.success("Email copied to clipboard!");
        setTimeout(() => setCopied(false), 2500);
      } else {
        toast.info("Email: vaibhavkr87097@gmail.com");
      }
    } catch {
      toast.info("Email: vaibhavkr87097@gmail.com");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // RFC-compliant basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast.error("Please provide a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          subject: `Portfolio Inquiry from ${trimmedName}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(result.message || "Failed to deliver message. Please try again or email directly.");
      }
    } catch {
      toast.error("Network error. Please email directly at vaibhavkr87097@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono font-medium text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
            Recruiter &amp; Engineering Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Let&apos;s <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Open for frontend development opportunities, engineering roles, and technical discussions. Reach out via email or send a message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Inquiries & Profiles */}
          <div className="lg:col-span-5 space-y-5 min-w-0 w-full">
            <div className="bg-white dark:bg-charcoal-850 rounded-2xl p-4 sm:p-7 border border-gray-200/80 dark:border-purple-500/15 shadow-sm space-y-4 sm:space-y-5 max-w-full overflow-hidden">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight break-words">
                  Direct Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                  Primary and most responsive channels for hiring managers and recruiters.
                </p>
              </div>

              {/* Primary Email Card */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-violet-50/70 dark:bg-charcoal-800 border border-violet-100 dark:border-purple-500/20 space-y-3 min-w-0">
                <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider font-mono">
                  <FaEnvelope size={13} className="shrink-0" />
                  <span>Professional Email</span>
                </div>
                
                <a
                  href="mailto:vaibhavkr87097@gmail.com"
                  className="block text-xs sm:text-sm md:text-base font-medium text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 break-all transition"
                >
                  vaibhavkr87097@gmail.com
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-charcoal-750 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 border border-gray-200 dark:border-purple-500/20 transition cursor-pointer w-full sm:w-auto"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-green-500" size={11} />
                      <span className="text-green-600 dark:text-green-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy size={11} />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Verified LinkedIn Profile Card */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50 dark:bg-charcoal-800 border border-gray-200/70 dark:border-purple-500/10 flex items-center justify-between gap-2 min-w-0">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-[#0077B5]/10 text-[#0077B5] dark:text-[#38a1db] shrink-0">
                    <FaLinkedin size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-900 dark:text-white truncate">LinkedIn Profile</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">vaibhavkr03</div>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/vaibhavkr03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-charcoal-750 text-xs font-medium text-violet-600 dark:text-violet-400 border border-gray-200 dark:border-purple-500/20 hover:border-violet-500 transition shrink-0"
                >
                  <span>Connect</span>
                  <FaExternalLinkAlt size={9} />
                </a>
              </div>

              {/* Verified GitHub Card */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50 dark:bg-charcoal-800 border border-gray-200/70 dark:border-purple-500/10 flex items-center justify-between gap-2 min-w-0">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-gray-200 dark:bg-charcoal-750 text-gray-700 dark:text-gray-300 shrink-0">
                    <FaGithub size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-900 dark:text-white truncate">GitHub Profile</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">@vaibhavkr87</div>
                  </div>
                </div>
                <a
                  href="https://github.com/vaibhavkr87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-charcoal-750 text-xs font-medium text-violet-600 dark:text-violet-400 border border-gray-200 dark:border-purple-500/20 hover:border-violet-500 transition shrink-0"
                >
                  <span>View Repos</span>
                  <FaExternalLinkAlt size={9} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Asynchronous Web3Forms Contact Form */}
          <div className="lg:col-span-7 min-w-0 w-full">
            <div className="bg-white dark:bg-charcoal-850 rounded-2xl p-4 sm:p-8 border border-gray-200/80 dark:border-purple-500/15 shadow-sm max-w-full overflow-hidden">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block mb-1.5 text-xs font-medium text-gray-700 dark:text-gray-300">
                    Your Name <span className="text-violet-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-800 border border-gray-200 dark:border-charcoal-700 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1.5 text-xs font-medium text-gray-700 dark:text-gray-300">
                    Your Email <span className="text-violet-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-800 border border-gray-200 dark:border-charcoal-700 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1.5 text-xs font-medium text-gray-700 dark:text-gray-300">
                    Your Message <span className="text-violet-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your role details or project message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-charcoal-800 border border-gray-200 dark:border-charcoal-700 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 disabled:opacity-60 text-white font-medium text-sm shadow-violet-glow flex items-center justify-center gap-2 transition hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane size={13} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
