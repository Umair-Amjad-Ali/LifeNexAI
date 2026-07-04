"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import QuoteModal from "@/components/QuoteModal";
import SocialStrip from "@/components/SocialStrip";
import { Features } from "@/components/Features";
import AboutUsSection from "@/components/ui/about-us-section";
import LifeVoices from "@/components/LifeVoices";
import { COLORS } from "@/constants/colors";
import FAQ1 from "@/components/ui/faq-monochrome";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1); // 1 = right-to-left, -1 = left-to-right

  // Autoplay interval — resets when currentSlide changes to avoid immediate double-change
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection(1);
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleSlideChange = useCallback(
    (index: number) => {
      if (index === currentSlide) return;
      setSlideDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide],
  );

  const scrollToAbout = useCallback(() => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tickerItems = [
    "AI-POWERED MEDICAL SOFTWARE",
    "CUSTOM MOBILE APPS",
    "FLUTTER & REACT NATIVE",
    "NEXT.JS & VUE SOLUTIONS",
    "BACKEND AI INTEGRATION",
    "HEALTHCARE DIGITALIZATION",
  ];

  // Framer Motion Variants for Staggered Children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: {
          type: "tween" as const,
          ease: "easeInOut" as const,
          duration: 0.85,
        },
        opacity: { duration: 0.75 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: {
          type: "tween" as const,
          ease: "easeInOut" as const,
          duration: 0.85,
        },
        opacity: { duration: 0.75 },
      },
    }),
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/lifenexai",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
    },
    {
      name: "Twitter / X",
      href: "https://x.com/lifenexai",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/lifenexai",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/lifenexai",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
  ];

  const newLocal =
    "grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-4 lg:gap-6 items-center w-full max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16";
  return (
    <div
      className="relative min-h-screen text-white overflow-hidden selection:text-white"
      style={
        {
          backgroundColor: COLORS.darkBg,
          selectionColor: COLORS.primary,
        } as any
      }
    >
      {/* Radial Glow Spotlight (Mouse Tracker) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-45"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.12), transparent 80%)`,
        }}
      />

      {/* Tech Grid Background Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none z-0" />
      <Navbar setIsQuoteModalOpen={setIsQuoteModalOpen} />

      {/* Desktop Main Layout */}
      <div className="relative flex flex-col min-h-screen w-full">
        {/* Content Area (Hero + Ticker + Who We Are) */}
        <main className="flex-1 flex flex-col w-full min-h-screen">
          {/* ===== AUTO-PLAYING HORIZONTAL HERO CAROUSEL ===== */}
          <section
            id="hero"
            className="relative w-full h-dvh flex flex-col justify-center bg-dark-bg border-b border-dark-border/40 overflow-hidden"
          >
            {/* Carousel Content Container */}
            <div className="relative w-full h-full flex-1 overflow-hidden">
              <AnimatePresence
                initial={false}
                custom={slideDirection}
                mode="popLayout"
              >
                {currentSlide === 0 && (
                  <motion.div
                    key="slide-0"
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full flex items-center justify-center pt-24 pb-8 overflow-hidden"
                  >
                    <div className={newLocal}>
                      {/* LEFT: Content */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-5">
                          <span
                            className="h-2 w-2 rounded-full animate-pulse"
                            style={{ backgroundColor: COLORS.primary }}
                          />
                          <span
                            className="text-[10px] font-bold tracking-[0.25em] uppercase"
                            style={{ color: COLORS.primary }}
                          >
                            01 / DIGITAL DIAGNOSTICS
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight leading-[1.08] mb-5 select-none font-sans">
                          INTEGRATING DEEP <br />
                          <span className="text-stroke-gray uppercase block mt-1 hover:text-white transition-colors duration-500">
                            CLINICAL SYSTEMS
                          </span>
                          <span className="bg-linear-to-r from-primary via-accent-teal to-white bg-clip-text text-transparent uppercase block mt-1">
                            WITH NEXT-GEN AI.
                          </span>
                        </h2>

                        <p className="text-muted-gray text-xs sm:text-sm leading-relaxed mb-6 max-w-lg mt-4">
                          We construct elite software interfaces connecting deep
                          neural network capabilities with intuitive health tech
                          designs, linking secure cloud web architectures with
                          seamless AI models.
                        </p>

                        <div className="flex items-center gap-4 mt-2">
                          <button
                            onClick={() => handleSlideChange(1)}
                            className="group relative flex items-center justify-center h-11 w-11 shrink-0 rounded-full border border-white/20 hover:border-primary bg-transparent hover:shadow-[0_0_15px_rgba(79,70,229,0.25)] transition-all duration-300 cursor-pointer"
                          >
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                              <svg
                                className="w-full h-full animate-spin [animation-duration:10s]"
                                viewBox="0 0 100 100"
                              >
                                <path
                                  id="circlePath"
                                  fill="none"
                                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                />
                                <text
                                  className="text-[7px] font-bold tracking-[0.25em]"
                                  style={{ fill: COLORS.primary }}
                                >
                                  <textPath href="#circlePath" startOffset="0%">
                                    • EXPLORE MORE • LIFENEX AI • DIGITAL
                                    HEALTHCARE
                                  </textPath>
                                </text>
                              </svg>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-4 h-4 text-white group-hover:text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </button>
                          <div className="flex flex-col justify-center">
                            <span className="text-xs font-bold tracking-[0.2em] text-white">
                              EXPLORE MORE
                            </span>
                            <span className="text-[10px] text-muted-gray tracking-wider">
                              Discover Our Solutions
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* MIDDLE: Social strip */}
                      <SocialStrip />

                      {/* RIGHT: Hero Image */}
                      <div className="relative w-full aspect-4/3 md:aspect-square xl:aspect-4/3 rounded-2xl overflow-hidden border border-white/10 group shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-primary/5 to-transparent z-10 mix-blend-color" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                        <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 z-20 pointer-events-none transition-all duration-500 rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_30px_rgba(79,70,229,0.25)]" />
                        <Image
                          src="/team_medical_ai.png"
                          alt="LifeNex AI Medical App Development Team"
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                          priority
                        />
                        <div className="absolute bottom-4 left-4 z-20 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                          <div
                            className="h-2 w-2 rounded-full animate-ping"
                            style={{ backgroundColor: COLORS.primary }}
                          />
                          <span
                            className="text-[10px] font-bold tracking-widest"
                            style={{ color: COLORS.primary }}
                          >
                            LIFENEX LABS
                          </span>
                        </div>
                      </div>

                      {/* Mobile social icons */}
                      <div className="flex md:hidden items-center justify-center gap-5 text-muted-gray">
                        {socialLinks.map((social, idx) => (
                          <a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.name}
                            className="hover:text-primary hover:border-primary/60 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all w-9 h-9 flex items-center justify-center border border-white/10 rounded-full bg-black/40 hover:bg-primary/5"
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentSlide === 1 && (
                  <motion.div
                    key="slide-1"
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full flex items-center justify-center pt-24 pb-8 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-4 lg:gap-6 items-center w-full max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16">
                      {/* LEFT: Content */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-5">
                          <span
                            className="h-2 w-2 rounded-full animate-pulse"
                            style={{ backgroundColor: COLORS.accentLightBlue }}
                          />
                          <span
                            className="text-[10px] font-bold tracking-[0.25em] uppercase"
                            style={{ color: COLORS.accentLightBlue }}
                          >
                            MOBILE DEVELOPMENT
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight leading-[1.08] mb-5 select-none font-sans">
                          BUILD NEXT-GEN <br />
                          <span className="text-stroke-gray uppercase block mt-1 hover:text-white transition-colors duration-500">
                            MOBILE APPS
                          </span>
                          <span className="bg-linear-to-r from-[#38bdf8] via-primary to-white bg-clip-text text-transparent uppercase block mt-1">
                            WITH AI POWER.
                          </span>
                        </h2>

                        <p className="text-muted-gray text-xs sm:text-sm leading-relaxed mb-6 max-w-lg">
                          From cross-platform Flutter masterpieces to native
                          React Native experiences, we craft mobile applications
                          that redefine user engagement. Our AI-first approach
                          ensures intelligent features like predictive
                          analytics, real-time diagnostics, and smart patient
                          interactions — all from a single codebase.
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2.5 mb-6">
                          {[
                            "Flutter",
                            "React Native",
                            "Dart",
                            "Swift",
                            "Kotlin",
                            "AI/ML",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-3.5 py-1.5 text-[10px] font-bold tracking-wider rounded-full border border-accent-teal/30 bg-accent-teal/5 hover:bg-accent-teal/15 hover:border-accent-teal/60 transition-all cursor-default"
                              style={{
                                color: COLORS.accentLightBlue,
                                borderColor: `${COLORS.accentLightBlue}30`,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleSlideChange(2)}
                            className="group relative flex items-center justify-center h-11 w-11 shrink-0 rounded-full border border-white/20 hover:border-primary bg-transparent hover:shadow-[0_0_15px_rgba(79,70,229,0.25)] transition-all duration-300 cursor-pointer"
                          >
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                              <svg
                                className="w-full h-full animate-spin [animation-duration:10s]"
                                viewBox="0 0 100 100"
                              >
                                <path
                                  id="circlePathMobile"
                                  fill="none"
                                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                />
                                <text
                                  className="text-[7px] font-bold tracking-[0.25em]"
                                  style={{ fill: COLORS.accentLightBlue }}
                                >
                                  <textPath
                                    href="#circlePathMobile"
                                    startOffset="0%"
                                  >
                                    • EXPLORE WEB • MOBILE STUDIO • LIFENEX AI
                                  </textPath>
                                </text>
                              </svg>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-4 h-4 text-white group-hover:text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </button>
                          <div className="flex flex-col justify-center">
                            <span className="text-xs font-bold tracking-[0.2em] text-white">
                              EXPLORE WEB
                            </span>
                            <span className="text-[10px] text-muted-gray tracking-wider">
                              Next: Web Platform
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* MIDDLE: Social strip */}
                      <SocialStrip />

                      {/* RIGHT: Image */}
                      <div className="relative w-full aspect-4/3 md:aspect-square xl:aspect-4/3 rounded-2xl overflow-hidden border border-white/10 group shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-primary/5 to-transparent z-10 mix-blend-color" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                        <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 z-20 pointer-events-none transition-all duration-500 rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_30px_rgba(79,70,229,0.2)]" />
                        <Image
                          src="/mobile_dev_ai.png"
                          alt="AI-Powered Mobile App Development"
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-4 left-4 z-20 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                          <div
                            className="h-2 w-2 rounded-full animate-ping"
                            style={{ backgroundColor: COLORS.accentLightBlue }}
                          />
                          <span
                            className="text-[10px] font-bold tracking-widest"
                            style={{ color: COLORS.accentLightBlue }}
                          >
                            MOBILE STUDIO
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentSlide === 2 && (
                  <motion.div
                    key="slide-2"
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full flex items-center justify-center pt-24 pb-8 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-4 lg:gap-6 items-center w-full max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16">
                      {/* LEFT: Content */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                          <span className="text-[10px] font-bold tracking-[0.25em] text-white uppercase">
                            WEB DEVELOPMENT
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight leading-[1.08] mb-5 select-none font-sans">
                          CRAFT MODERN <br />
                          <span className="text-stroke-gray uppercase block mt-1 hover:text-white transition-colors duration-500">
                            WEB EXPERIENCES
                          </span>
                          <span className="bg-linear-to-r from-primary via-[#38bdf8] to-white bg-clip-text text-transparent uppercase block mt-1 font-sans">
                            AT SCALE.
                          </span>
                        </h2>

                        <p className="text-muted-gray text-xs sm:text-sm leading-relaxed mb-6 max-w-lg">
                          Enterprise-grade web platforms built on React,
                          Next.js, and Vue with AI-driven backends. From
                          real-time dashboards and patient portals to admin
                          panels with intelligent automation — we build web
                          solutions that scale with your ambition and integrate
                          cutting-edge machine learning pipelines.
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2.5 mb-6">
                          {[
                            "React",
                            "Next.js",
                            "Vue",
                            "Node.js",
                            "Python",
                            "AI Backend",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-3.5 py-1.5 text-[10px] font-bold tracking-wider rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <button
                            onClick={scrollToAbout}
                            className="group relative flex items-center justify-center h-11 w-11 shrink-0 rounded-full border border-white/20 hover:border-primary bg-transparent hover:shadow-[0_0_15px_rgba(79,70,229,0.25)] transition-all duration-300 cursor-pointer"
                          >
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                              <svg
                                className="w-full h-full animate-spin [animation-duration:10s]"
                                viewBox="0 0 100 100"
                              >
                                <path
                                  id="circlePathWeb"
                                  fill="none"
                                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                />
                                <text
                                  className="text-[7px] font-bold tracking-[0.25em]"
                                  style={{ fill: COLORS.secondary }}
                                >
                                  <textPath
                                    href="#circlePathWeb"
                                    startOffset="0%"
                                  >
                                    • WHO WE ARE • WEB STUDIO • LIFENEX AI
                                  </textPath>
                                </text>
                              </svg>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-4 h-4 text-white group-hover:text-primary transform group-hover:translate-y-0.5 transition-all duration-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </button>
                          <div className="flex flex-col justify-center">
                            <span className="text-xs font-bold tracking-[0.2em] text-white">
                              WHO WE ARE
                            </span>
                            <span className="text-[10px] text-muted-gray tracking-wider">
                              Scroll to Company Info
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* MIDDLE: Social strip */}
                      <SocialStrip />

                      {/* RIGHT: Image */}
                      <div className="relative w-full aspect-4/3 md:aspect-square xl:aspect-4/3 rounded-2xl overflow-hidden border border-white/10 group shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-primary/5 to-transparent z-10 mix-blend-color" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                        <div className="absolute inset-0 border border-white/0 group-hover:border-white/30 z-20 pointer-events-none transition-all duration-500 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0)] group-hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.2)]" />
                        <Image
                          src="/web_dev_ai.png"
                          alt="AI-Powered Web Application Development"
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-4 left-4 z-20 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-white animate-ping" />
                          <span className="text-[10px] font-bold tracking-widest text-white">
                            WEB STUDIO
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pagination Dot Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => handleSlideChange(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === i
                      ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  style={{
                    backgroundColor:
                      currentSlide === i ? COLORS.primary : undefined,
                    boxShadow:
                      currentSlide === i
                        ? `0 0 10px ${COLORS.primary}`
                        : undefined,
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </section>

          {/* Marquee Scrolling Banner */}
          <section className="w-full border-y border-white/5 py-6 overflow-hidden z-10 relative bg-nav-bg">
            <div className="animate-marquee flex items-center whitespace-nowrap">
              {/* Loop items 3 times for a seamless scroll container */}
              {[1, 2, 3].map((loopIndex) => (
                <div key={loopIndex} className="flex items-center gap-12 pr-12">
                  {tickerItems.map((text, idx) => (
                    <React.Fragment key={`${loopIndex}-${idx}`}>
                      <span
                        className="text-xs sm:text-sm font-black tracking-[0.3em] text-white transition-colors duration-300 cursor-default"
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = COLORS.primary)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#ffffff")
                        }
                      >
                        {text}
                      </span>
                      {/* Custom Divider Graphic */}
                      <div
                        className="h-1.5 w-1.5 rotate-45"
                        style={{ backgroundColor: COLORS.primary }}
                      />
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <Features />
          <AboutUsSection />
          <LifeVoices />
          <FAQ1 />
        </main>
      </div>

      {/* Footer Branding Info */}
      <footer className="border-t border-dark-border py-8 text-center text-xs text-muted-gray bg-black/60 relative z-10">
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} LifeNex AI. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="transition-colors duration-300"
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = COLORS.primary)
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#"
              className="transition-colors duration-300"
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = COLORS.primary)
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* Reusable Quote Form Modal Component */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
