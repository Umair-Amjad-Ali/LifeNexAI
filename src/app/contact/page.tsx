"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import QuoteModal from "@/components/QuoteModal";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";

export default function ContactPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 2500);
  };

  return (
    <div 
      className="relative min-h-screen text-white overflow-hidden selection:text-white"
      style={{ backgroundColor: COLORS.darkBg, selectionColor: COLORS.primary } as any}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none z-0" />

      {/* Shared Navigation Navbar Component */}
      <Navbar setIsQuoteModalOpen={setIsQuoteModalOpen} />

      {/* Desktop Main Layout */}
      <div className="relative flex flex-col min-h-screen w-full pt-20">
        {/* Content Area */}
        <main className="flex-1 flex flex-col w-full min-h-screen z-10">
          <section className="flex-1 flex flex-col justify-center py-20 px-8 sm:px-12 lg:px-16 max-w-[1200px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Left Column: Heading and info */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span 
                  className="text-[10px] font-bold tracking-[0.25em] uppercase mb-3 block"
                  style={{ color: COLORS.primary }}
                >
                  GET IN TOUCH
                </span>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none uppercase">
                  LET'S BUILD <br />
                  <span className="bg-linear-to-r from-white via-white to-primary bg-clip-text text-transparent">
                    TOGETHER.
                  </span>
                </h1>
                <p className="text-muted-gray text-sm max-w-md mt-4 leading-relaxed">
                  Have an application idea or AI model you need deployed? Drop
                  us a line. Our engineering team responds to all project
                  inquiries within 12 hours.
                </p>

                <div className="flex flex-col gap-4 mt-8 text-xs sm:text-sm text-muted-gray font-mono">
                  <div className="flex items-center gap-3">
                    <span style={{ color: COLORS.primary }}>•</span>
                    <span>EMAIL: hello@lifenex.ai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span style={{ color: COLORS.primary }}>•</span>
                    <span>OFFICE: San Francisco, CA</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Interactive Form */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-dark-card border border-dark-border p-8 rounded-2xl relative overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.05)]"
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r" 
                  style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.accentLightBlue}, ${COLORS.primary})` }}
                />

                {formSubmitted ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center gap-4">
                    <div 
                      className="h-16 w-16 rounded-full border flex items-center justify-center bg-primary/5 animate-pulse"
                      style={{ borderColor: COLORS.primary, boxShadow: `0 0 20px rgba(79, 70, 229, 0.2)` }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8"
                        style={{ color: COLORS.primary }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white tracking-wide uppercase">
                      MESSAGE TRANSMITTED
                    </h4>
                    <p className="text-sm text-muted-gray max-w-xs">
                      Thank you for contacting LifeNex. A solution architect
                      will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold tracking-wider text-muted-gray uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            name: e.target.value,
                          })
                        }
                        placeholder="Dr. Sarah Jenkins"
                        className="w-full bg-black/40 border border-dark-border px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-primary transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold tracking-wider text-muted-gray uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            email: e.target.value,
                          })
                        }
                        placeholder="sarah@medlabs.com"
                        className="w-full bg-black/40 border border-dark-border px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-primary transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold tracking-wider text-muted-gray uppercase">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.subject}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            subject: e.target.value,
                          })
                        }
                        placeholder="Clinical AI Integration inquiry"
                        className="w-full bg-black/40 border border-dark-border px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-primary transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold tracking-wider text-muted-gray uppercase">
                        Message Detail
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            message: e.target.value,
                          })
                        }
                        placeholder="Provide details about your project timeline or design goals..."
                        className="w-full bg-black/40 border border-dark-border px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-primary transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 mt-2 bg-primary text-white font-bold tracking-widest text-sm rounded-lg hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all cursor-pointer uppercase border border-primary/20"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </section>
        </main>
      </div>

      {/* Quote Modal Component */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
