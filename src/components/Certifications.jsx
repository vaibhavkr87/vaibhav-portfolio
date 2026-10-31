import { useState, useEffect } from "react";
import { certificatesData } from "../data/credentials";
import { 
  FaCertificate, 
  FaExternalLinkAlt, 
  FaAward, 
  FaCalendarAlt, 
  FaCheckCircle, 
  FaFilter,
  FaTimes,
  FaDownload,
  FaIdBadge
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [previewCert, setPreviewCert] = useState(null);

  const categories = [
    { id: "all", label: `All Certificates (${certificatesData.length})` },
    { id: "google", label: "Google / Coursera (6)" },
    { id: "other", label: "Specialized & Internship (3)" },
  ];

  const filteredCerts = certificatesData.filter((cert) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "google") return cert.issuer.includes("Google");
    if (activeCategory === "other") return !cert.issuer.includes("Google");
    return true;
  });

  // Keyboard navigation & body scroll lock for preview modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setPreviewCert(null);
      }
    };

    if (previewCert) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [previewCert]);

  const handleOpenPreview = async (cert) => {
    if (!cert.file) {
      if (cert.verificationUrl) {
        window.open(cert.verificationUrl, "_blank", "noopener,noreferrer");
      } else {
        toast.info("Certificate file will be available once uploaded to the project.", { autoClose: 5000 });
      }
      return;
    }

    try {
      const res = await fetch(cert.file, { method: "HEAD" });
      if (res.ok) {
        setPreviewCert(cert);
      } else if (cert.verificationUrl) {
        window.open(cert.verificationUrl, "_blank", "noopener,noreferrer");
      } else {
        toast.info(
          `Certificate for "${cert.title}" will be viewable once placed in ${cert.file}. Please request via email if needed.`,
          { autoClose: 5000 }
        );
      }
    } catch {
      if (cert.verificationUrl) {
        window.open(cert.verificationUrl, "_blank", "noopener,noreferrer");
      } else {
        toast.info(
          `Certificate for "${cert.title}" will be viewable once placed in ${cert.file}. Please request via email if needed.`,
          { autoClose: 5000 }
        );
      }
    }
  };

  const isImageFile = (filePath) => {
    if (!filePath) return false;
    const lower = filePath.toLowerCase();
    return lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".jpeg") || lower.endsWith(".webp");
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block text-xs font-mono font-medium text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Licenses &amp; <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Professional certifications and specialized credentials in AI, frontend engineering, and machine learning.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-mono text-gray-400 mr-1 hidden sm:inline-flex items-center gap-1">
            <FaFilter size={10} /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-violet-600 text-white shadow-violet-glow"
                  : "bg-gray-100 dark:bg-charcoal-800 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 border border-gray-200 dark:border-purple-500/15"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Certificates Grid: 1 col mobile, 2 col tablet (md), 3 col desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-charcoal-850 rounded-2xl p-6 border border-gray-200/80 dark:border-purple-500/15 hover:border-violet-500/40 dark:hover:border-violet-500/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold flex items-center gap-1.5">
                    <FaAward size={12} />
                    <span>{cert.category}</span>
                  </span>
                  {cert.verificationUrl && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1">
                      <FaCheckCircle size={9} />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5 tracking-tight leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 mb-2">
                  {cert.issuer}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-gray-400 mb-2">
                  <FaCalendarAlt size={11} className="text-gray-400" />
                  <span>{cert.date}</span>
                </div>

                {/* Credential ID badge if available */}
                {cert.credentialId && (
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-500 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-charcoal-800/80 px-2 py-1 rounded border border-gray-200/60 dark:border-purple-500/10 self-start inline-flex">
                    <FaIdBadge size={10} className="text-violet-500" />
                    <span>ID: <strong className="text-gray-700 dark:text-gray-300 font-medium">{cert.credentialId}</strong></span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 dark:border-charcoal-700/80 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenPreview(cert)}
                  aria-label={`View certificate preview for ${cert.title}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-charcoal-800 text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 text-xs font-medium border border-gray-200 dark:border-purple-500/20 transition cursor-pointer"
                >
                  <FaCertificate size={11} className="text-violet-500" />
                  <span>View Certificate</span>
                </button>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${cert.title} certificate on official site`}
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-violet-600 dark:text-violet-400 hover:text-violet-500 underline underline-offset-2"
                  >
                    <span>Verify</span>
                    <FaExternalLinkAlt size={9} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Updated Footer Message as requested */}
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-12">
          Official verification links are provided wherever available. Original certificate documents are available for review.
        </p>

      </div>

      {/* Elegant Certificate Preview Modal */}
      {previewCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          onClick={() => setPreviewCert(null)}
        >
          <div 
            className="bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-purple-500/30 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-purple-500/20 bg-gray-50/50 dark:bg-charcoal-850/60">
              <div className="pr-4">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold flex items-center gap-1">
                    <FaAward size={11} />
                    <span>{previewCert.category}</span>
                  </span>
                  {previewCert.verificationUrl && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1">
                      <FaCheckCircle size={9} />
                      <span>Verified Credential</span>
                    </span>
                  )}
                  {previewCert.credentialId && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/50 flex items-center gap-1">
                      <FaIdBadge size={9} />
                      <span>ID: {previewCert.credentialId}</span>
                    </span>
                  )}
                </div>

                <h3 id="cert-modal-title" className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {previewCert.title}
                </h3>
                <p className="text-xs sm:text-sm text-violet-600 dark:text-violet-400 font-medium">
                  {previewCert.issuer} · <span className="text-gray-500 dark:text-gray-400 font-normal">{previewCert.date}</span>
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                aria-label="Close certificate preview"
                className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-white bg-gray-100 dark:bg-charcoal-800 hover:bg-gray-200 dark:hover:bg-charcoal-700 transition cursor-pointer shrink-0"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Modal Body / Document Preview */}
            <div className="flex-1 p-3 sm:p-5 overflow-auto bg-gray-100/50 dark:bg-charcoal-950/70 min-h-[300px] flex items-center justify-center">
              {isImageFile(previewCert.file) ? (
                <div className="max-h-[62vh] max-w-full flex items-center justify-center p-2 rounded-xl bg-white dark:bg-charcoal-900 shadow border border-gray-200 dark:border-purple-500/15">
                  <img 
                    src={previewCert.file} 
                    alt={`Certificate for ${previewCert.title}`}
                    className="max-h-[58vh] max-w-full object-contain rounded-lg"
                  />
                </div>
              ) : (
                <div className="w-full h-[58vh] sm:h-[62vh] rounded-xl overflow-hidden border border-gray-200 dark:border-purple-500/20 bg-white dark:bg-charcoal-900 shadow">
                  <iframe 
                    src={`${previewCert.file}#toolbar=0`} 
                    title={`Certificate preview for ${previewCert.title}`}
                    className="w-full h-full border-0"
                  />
                </div>
              )}
            </div>

            {/* Modal Footer / Actions: Fluid on mobile phones */}
            <div className="p-3.5 sm:p-5 border-t border-gray-200 dark:border-purple-500/20 bg-gray-50/50 dark:bg-charcoal-850/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 w-full">
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 w-full sm:w-auto">
                {/* Download Button */}
                <a
                  href={previewCert.file}
                  download={previewCert.file.split("/").pop()}
                  aria-label={`Download certificate document for ${previewCert.title}`}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-semibold transition shadow-sm hover:scale-[1.01] w-full sm:w-auto text-center"
                >
                  <FaDownload size={12} />
                  <span>Download</span>
                </a>

                {/* Open in New Tab Button */}
                <a
                  href={previewCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open certificate document in a new tab`}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 dark:bg-charcoal-800 hover:bg-gray-200 dark:hover:bg-charcoal-750 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium border border-gray-200 dark:border-purple-500/20 transition w-full sm:w-auto text-center"
                >
                  <FaExternalLinkAlt size={11} className="text-violet-500" />
                  <span>Open in Tab</span>
                </a>

                {/* Official Verification URL if present */}
                {previewCert.verificationUrl && (
                  <a
                    href={previewCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${previewCert.title} on official issuer website`}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm font-medium transition w-full sm:w-auto text-center"
                  >
                    <FaCheckCircle size={11} className="text-emerald-500 shrink-0" />
                    <span>Official Verification</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                )}
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-charcoal-800 hover:bg-gray-300 dark:hover:bg-charcoal-750 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium transition cursor-pointer w-full sm:w-auto text-center"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
