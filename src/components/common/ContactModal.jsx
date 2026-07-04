import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactModal = ({ isOpen, onClose }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    // Simulate submit
    setTimeout(() => {
      setResult("Message Sent Successfully!");
      setIsSubmitting(false);
      setTimeout(() => {
        onClose();
        setResult("");
      }, 1500);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white w-full max-w-lg rounded-[10px] p-8 md:p-10 shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              {/* Close Button (10px Rounded) */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-[10px] flex items-center justify-center transition-colors text-black"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-orange-50 text-[#ff5f1f] font-bold text-xs rounded-[10px] mb-4 tracking-wider uppercase">
                  Let's Connect
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#111] mb-2">
                  Partner with Us
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Have a vision for your brand? Tell us about your project and let's make it a reality.
                </p>
              </div>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-[10px] px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-[#ff5f1f] focus:ring-2 focus:ring-[#ff5f1f]/20 transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-[10px] px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-[#ff5f1f] focus:ring-2 focus:ring-[#ff5f1f]/20 transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">How can we help?</label>
                  <textarea
                    name="message"
                    placeholder="Describe your brand goals..."
                    rows="3"
                    className="w-full bg-gray-50 border border-gray-200 rounded-[10px] px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-[#ff5f1f] focus:ring-2 focus:ring-[#ff5f1f]/20 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full bg-[#ff5f1f] hover:bg-[#ff783d] text-white font-bold py-4 rounded-[10px] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,95,31,0.3)] hover:shadow-[0_0_30px_rgba(255,95,31,0.6)]"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  {!isSubmitting && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>

                {result && (
                  <span className={`text-center text-sm font-medium ${result.includes("Successfully") ? "text-green-600" : "text-gray-500"}`}>
                    {result}
                  </span>
                )}
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
