"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const LinkedinIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ width: size, height: size }}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@lifenex.ai",
    href: "mailto:hello@lifenex.ai",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (650) 980-2341",
    href: "tel:+16509802341",
  },
  {
    icon: MapPin,
    label: "Locations",
    value: "United States · Pakistan",
    href: "#",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) {
        setForm((prev) => ({
          ...prev,
          message: `I would like to inquire about your ${serviceParam} service. Let's discuss a custom pipeline design for our organization.`
        }));
      }
    }
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/hello@lifenex.ai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: form.name,
            Email: form.email,
            Company: form.company,
            Message: form.message,
          }),
        },
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert(
          "Failed to send message. Please try again or email us directly at hello@lifenex.ai",
        );
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert(
        "An error occurred. Please try again or email us directly at hello@lifenex.ai",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="relative min-h-screen text-white overflow-hidden selection:text-white"
      style={{ backgroundColor: COLORS.darkBg } as any}
    >

      <main className="flex-1 flex flex-col w-full min-h-screen z-10 pt-20">
        {/* ── HERO ── */}
        <section className="relative w-full pt-20 pb-16 overflow-hidden">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
          
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: COLORS.primary }} />
              <span className="text-xs font-bold text-white/60 uppercase tracking-widest">
                Let's Build Together
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-5 uppercase"
            >
              Got a project in mind?
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-primary">
                We'd love to hear it.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-semibold"
            >
              Tell us what you're building. We'll get back to you within one
              business day.
            </motion.p>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="max-w-6xl mx-auto px-6 pb-24 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* ── LEFT: Contact Info ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              <div>
                <h2 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">
                  Contact Info
                </h2>
                <div className="flex flex-col gap-5">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="group flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/3 hover:bg-white/5 hover:border-white/10 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                        style={{
                          backgroundColor: `${COLORS.primary}1a`,
                          borderColor: `${COLORS.primary}33`
                        }}
                      >
                        <Icon
                          className="w-4.5 h-4.5"
                          style={{ color: COLORS.primary }}
                          strokeWidth={2}
                        />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                          {label}
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <h2 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
                  Find Us Online
                </h2>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/lifenexai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-2 px-5 py-3 text-xs font-bold rounded-xl border border-white/10 hover:border-primary/50 bg-white/3 transition-all duration-300 text-gray-300 hover:text-white"
                  >
                    <LinkedinIcon
                      size={15}
                      className="text-[#0077B5] group-hover:text-white transition-colors"
                    />
                    <span>Follow on LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Quick promise */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: COLORS.primary }}>
                  <CheckCircle2 className="w-4 h-4" /> Our Promise
                </div>
                <ul className="flex flex-col gap-2">
                  {[
                    "Reply within 1 business day",
                    "Free initial consultation",
                    "No commitment required",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-semibold"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.accentLightBlue }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ── RIGHT: Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="lg:col-span-3"
            >
              <div className="rounded-3xl border border-white/5 bg-white/3 backdrop-blur-sm p-8 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-16 gap-5"
                  >
                    <div className="w-16 h-16 rounded-full border flex items-center justify-center bg-white/5 border-white/10">
                      <CheckCircle2 className="w-8 h-8" style={{ color: COLORS.primary }} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 max-w-sm text-sm">
                      Thanks for reaching out. Our team will get back to you
                      within one business day.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          company: "",
                          message: "",
                        });
                      }}
                      className="mt-4 text-sm hover:underline"
                      style={{ color: COLORS.primary }}
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-lg font-extrabold text-white mb-1">
                      Send us a message
                    </h3>
                    <p className="text-sm text-gray-500 mb-8">
                      Fill in the details below and we'll take it from there.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      {/* Row: Name + Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            Your Name *
                          </label>
                          <input
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            Company
                          </label>
                          <input
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Acme Corp (optional)"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          Email *
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@yourcompany.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all"
                        />
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, timeline, and goals..."
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group relative w-full py-4 rounded-2xl bg-primary text-white font-bold text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {submitting ? "Sending..." : "Send Message"}
                        {!submitting && (
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>

                      <p className="text-[11px] text-center text-gray-600">
                        By submitting, you agree to our Privacy Policy. We never
                        share your data.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

    </div>
  );
}
