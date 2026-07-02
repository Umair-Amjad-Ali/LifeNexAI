"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    service: "AI Integration",
    details: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      onClose();
      setFormSubmitted(false);
      setQuoteForm({
        name: "",
        email: "",
        service: "AI Integration",
        details: "",
      });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Modal Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-dark-card border border-dark-border p-8 rounded-2xl shadow-[0_0_50px_rgba(0,255,135,0.15)] z-10 overflow-hidden"
          >
            {/* Decorative Tech Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-accent-teal via-accent-green to-accent-teal" />

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold tracking-wider text-white">
                GET A TECH ESTIMATE
              </h3>
              <button
                onClick={onClose}
                className="text-muted-gray hover:text-white transition-colors cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="h-16 w-16 rounded-full border border-accent-green flex items-center justify-center bg-accent-green/5 shadow-[0_0_20px_rgba(0,255,135,0.2)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-accent-green"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white tracking-wide">
                  REQUEST RECEIVED
                </h4>
                <p className="text-sm text-muted-gray max-w-xs">
                  Our medical tech solution architects will review and reply
                  within 12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider text-muted-gray uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={quoteForm.name}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, name: e.target.value })
                    }
                    placeholder="Dr. John Doe"
                    className="w-full bg-black/40 border border-dark-border px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-accent-green transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider text-muted-gray uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={quoteForm.email}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, email: e.target.value })
                    }
                    placeholder="john@clinic.com"
                    className="w-full bg-black/40 border border-dark-border px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-accent-green transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider text-muted-gray uppercase">
                    Required Services
                  </label>
                  <div className="relative">
                    <select
                      value={quoteForm.service}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, service: e.target.value })
                      }
                      className="w-full bg-black/40 border border-dark-border px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-accent-green transition-all appearance-none cursor-pointer"
                    >
                      <option
                        value="AI Integration"
                        className="bg-dark-card text-white"
                      >
                        AI Core Integration
                      </option>
                      <option
                        value="Mobile App"
                        className="bg-dark-card text-white"
                      >
                        Flutter / React Native Mobile App
                      </option>
                      <option
                        value="Web App"
                        className="bg-dark-card text-white"
                      >
                        React / Next.js Web Portal
                      </option>
                      <option
                        value="Full Backend"
                        className="bg-dark-card text-white"
                      >
                        Backend Engineering
                      </option>
                      <option
                        value="Consulting"
                        className="bg-dark-card text-white"
                      >
                        Custom Medical Tech Consultation
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider text-muted-gray uppercase">
                    Project Brief
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={quoteForm.details}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, details: e.target.value })
                    }
                    placeholder="Briefly describe your medical application or project goals..."
                    className="w-full bg-black/40 border border-dark-border px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-accent-green transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-2 bg-accent-green text-black font-bold tracking-widest text-sm rounded-lg hover:shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all cursor-pointer"
                >
                  SEND REQUEST
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
