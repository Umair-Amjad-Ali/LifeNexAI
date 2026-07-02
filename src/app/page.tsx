"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import QuoteModal from "@/components/QuoteModal";

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

  return (
    <div className="relative min-h-screen bg-dark-bg text-white overflow-hidden selection:bg-accent-green selection:text-black">
      {/* Radial Glow Spotlight (Mouse Tracker) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-45"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 135, 0.09), transparent 80%)`,
        }}
      />

      {/* Tech Grid Background Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none z-0" />
      <Sidebar setIsQuoteModalOpen={setIsQuoteModalOpen} />

      {/* Desktop Main Layout */}
      <div className="relative flex flex-col md:flex-row min-h-screen w-full">
        {/* Right Content Area (Hero + Ticker + Who We Are) */}
        <main className="flex-1 flex flex-col md:pl-16 lg:pl-20 w-full min-h-screen">
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
                    className="absolute inset-0 w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-10 lg:px-16 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 lg:gap-8 items-center w-full max-w-[1500px] mx-auto">
                      {/* LEFT: Text Content */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-6">
                          <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
                          <span className="text-[10px] font-bold tracking-[0.25em] text-accent-green uppercase">
                            AI-POWERED HEALTHCARE SOFTWARE
                          </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight leading-[1.05] mb-5 select-none">
                          UNLOCK YOUR <br />
                          <span className="text-stroke-gray uppercase block mt-1 hover:text-white transition-colors duration-500">
                            MEDICAL AI
                          </span>
                          <span className="bg-linear-to-r from-white via-white to-accent-green/80 bg-clip-text text-transparent uppercase block mt-1">
                            APPLICATIONS.
                          </span>
                        </h1>

                        <p className="text-muted-gray text-xs sm:text-sm leading-relaxed mb-6 max-w-lg">
                          We specialize in high-end medical software solutions
                          integrated with advanced artificial intelligence. From
                          feature-rich mobile applications using Flutter and
                          React Native to modern web systems on
                          React/Next.js/Vue, we build robust backend
                          architectures with seamless AI models.
                        </p>

                        <div className="flex items-center gap-4 mt-2">
                          <button
                            onClick={() => handleSlideChange(1)}
                            className="group relative flex items-center justify-center h-11 w-11 shrink-0 rounded-full border border-white/20 hover:border-accent-green bg-transparent hover:shadow-[0_0_15px_rgba(0,255,135,0.25)] transition-all duration-300 cursor-pointer"
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
                                <text className="fill-accent-green text-[7px] font-bold tracking-[0.25em]">
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
                              className="w-4 h-4 text-white group-hover:text-accent-green transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
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
                      <div className="hidden md:flex flex-col items-center gap-4 px-3 lg:px-4 border-l border-r border-white/5 self-center">
                        <div className="flex flex-col gap-4 text-muted-gray">
                          {socialLinks.map((social, idx) => (
                            <a
                              key={idx}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={social.name}
                              className="hover:text-accent-green hover:border-accent-green/60 hover:shadow-[0_0_15px_rgba(0,255,135,0.3)] transition-all w-7 h-7 flex items-center justify-center border border-white/10 rounded-full bg-black/40 hover:bg-accent-green/5"
                            >
                              {social.icon}
                            </a>
                          ))}
                        </div>
                        <div className="flex flex-col items-center gap-3 mt-2">
                          <span
                            className="text-[9px] font-bold tracking-[0.25em] text-muted-gray uppercase whitespace-nowrap"
                            style={{ writingMode: "vertical-rl" }}
                          >
                            Scroll Down To Explore
                          </span>
                          <div className="h-12 w-px bg-linear-to-b from-white/30 to-transparent relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-green animate-scroll-down" />
                          </div>
                        </div>
                      </div>

                      {/* RIGHT: Hero Image */}
                      <div className="relative w-full aspect-4/3 md:aspect-square xl:aspect-4/3 rounded-2xl overflow-hidden border border-white/10 group shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                        <div className="absolute inset-0 bg-linear-to-tr from-accent-green/30 via-accent-teal/10 to-transparent z-10 mix-blend-color" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                        <div className="absolute inset-0 border border-accent-green/0 group-hover:border-accent-green/30 z-20 pointer-events-none transition-all duration-500 rounded-2xl shadow-[inset_0_0_20px_rgba(0,255,135,0)] group-hover:shadow-[inset_0_0_30px_rgba(0,255,135,0.25)]" />
                        <Image
                          src="/team_medical_ai.png"
                          alt="LifeNex AI Medical App Development Team"
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                          priority
                        />
                        <div className="absolute bottom-4 left-4 z-20 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-accent-green animate-ping" />
                          <span className="text-[10px] font-bold tracking-widest text-accent-green">
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
                            className="hover:text-accent-green hover:border-accent-green/60 hover:shadow-[0_0_15px_rgba(0,255,135,0.3)] transition-all w-9 h-9 flex items-center justify-center border border-white/10 rounded-full bg-black/40 hover:bg-accent-green/5"
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
                    className="absolute inset-0 w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-10 lg:px-16 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-[1500px] mx-auto">
                      {/* LEFT: Content */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="h-2 w-2 rounded-full bg-accent-teal animate-pulse" />
                          <span className="text-[10px] font-bold tracking-[0.25em] text-accent-teal uppercase">
                            MOBILE DEVELOPMENT
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight leading-[1.08] mb-5 select-none">
                          BUILD NEXT-GEN <br />
                          <span className="text-stroke-gray uppercase block mt-1 hover:text-white transition-colors duration-500">
                            MOBILE APPS
                          </span>
                          <span className="bg-linear-to-r from-accent-teal via-accent-green to-white bg-clip-text text-transparent uppercase block mt-1">
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
                              className="px-3.5 py-1.5 text-[10px] font-bold tracking-wider rounded-full border border-accent-teal/30 bg-accent-teal/5 text-accent-teal hover:bg-accent-teal/15 hover:border-accent-teal/60 transition-all cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleSlideChange(2)}
                            className="group relative flex items-center justify-center h-11 w-11 shrink-0 rounded-full border border-white/20 hover:border-accent-teal bg-transparent hover:shadow-[0_0_15px_rgba(0,229,255,0.25)] transition-all duration-300 cursor-pointer"
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
                                <text className="fill-accent-teal text-[7px] font-bold tracking-[0.25em]">
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
                              className="w-4 h-4 text-white group-hover:text-accent-teal transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
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

                      {/* RIGHT: Image */}
                      <div className="relative w-full aspect-4/3 md:aspect-square xl:aspect-4/3 rounded-2xl overflow-hidden border border-white/10 group shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                        <div className="absolute inset-0 bg-linear-to-tr from-accent-teal/25 via-accent-green/10 to-transparent z-10 mix-blend-color" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                        <div className="absolute inset-0 border border-accent-teal/0 group-hover:border-accent-teal/30 z-20 pointer-events-none transition-all duration-500 rounded-2xl shadow-[inset_0_0_20px_rgba(0,229,255,0)] group-hover:shadow-[inset_0_0_30px_rgba(0,229,255,0.2)]" />
                        <Image
                          src="/mobile_dev_ai.png"
                          alt="AI-Powered Mobile App Development"
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-4 left-4 z-20 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-accent-teal animate-ping" />
                          <span className="text-[10px] font-bold tracking-widest text-accent-teal">
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
                    className="absolute inset-0 w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-10 lg:px-16 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-[1500px] mx-auto">
                      {/* LEFT: Content */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="h-2 w-2 rounded-full bg-[#a78bfa] animate-pulse" />
                          <span className="text-[10px] font-bold tracking-[0.25em] text-[#a78bfa] uppercase">
                            WEB DEVELOPMENT
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight leading-[1.08] mb-5 select-none">
                          CRAFT MODERN <br />
                          <span className="text-stroke-gray uppercase block mt-1 hover:text-white transition-colors duration-500">
                            WEB EXPERIENCES
                          </span>
                          <span className="bg-linear-to-r from-[#a78bfa] via-accent-green to-white bg-clip-text text-transparent uppercase block mt-1">
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
                              className="px-3.5 py-1.5 text-[10px] font-bold tracking-wider rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/5 text-[#a78bfa] hover:bg-[#a78bfa]/15 hover:border-[#a78bfa]/60 transition-all cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <button
                            onClick={scrollToAbout}
                            className="group relative flex items-center justify-center h-11 w-11 shrink-0 rounded-full border border-white/20 hover:border-[#a78bfa] bg-transparent hover:shadow-[0_0_15px_rgba(167,139,250,0.25)] transition-all duration-300 cursor-pointer"
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
                                <text className="fill-[#a78bfa] text-[7px] font-bold tracking-[0.25em]">
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
                              className="w-4 h-4 text-white group-hover:text-[#a78bfa] transform group-hover:translate-y-0.5 transition-all duration-300"
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

                      {/* RIGHT: Image */}
                      <div className="relative w-full aspect-4/3 md:aspect-square xl:aspect-4/3 rounded-2xl overflow-hidden border border-white/10 group shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                        <div className="absolute inset-0 bg-linear-to-tr from-[#a78bfa]/25 via-accent-green/10 to-transparent z-10 mix-blend-color" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                        <div className="absolute inset-0 border border-[#a78bfa]/0 group-hover:border-[#a78bfa]/30 z-20 pointer-events-none transition-all duration-500 rounded-2xl shadow-[inset_0_0_20px_rgba(167,139,250,0)] group-hover:shadow-[inset_0_0_30px_rgba(167,139,250,0.2)]" />
                        <Image
                          src="/web_dev_ai.png"
                          alt="AI-Powered Web Application Development"
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-4 left-4 z-20 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#a78bfa] animate-ping" />
                          <span className="text-[10px] font-bold tracking-widest text-[#a78bfa]">
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
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === i
                      ? "bg-accent-green shadow-[0_0_10px_#00ff87] scale-125"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </section>

          {/* Marquee Scrolling Banner */}
          <section className="w-full bg-black/50 border-y border-white/5 py-6 overflow-hidden z-10 relative">
            <div className="animate-marquee flex items-center whitespace-nowrap">
              {/* Loop items 3 times for a seamless scroll container */}
              {[1, 2, 3].map((loopIndex) => (
                <div key={loopIndex} className="flex items-center gap-12 pr-12">
                  {tickerItems.map((text, idx) => (
                    <React.Fragment key={`${loopIndex}-${idx}`}>
                      <span className="text-xs sm:text-sm font-black tracking-[0.3em] text-white hover:text-accent-green transition-colors duration-300 cursor-default">
                        {text}
                      </span>
                      {/* Custom Divider Graphic */}
                      <div className="h-1.5 w-1.5 rotate-45 bg-accent-green" />
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* "Who We Are" Section with Scroll Reveals */}
          <section
            id="about"
            className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10 relative bg-linear-to-b from-transparent to-black/40"
          >
            <div className="max-w-[1500px] mx-auto">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/5 text-[9px] font-bold tracking-[0.25em] text-accent-green uppercase mb-4">
                  ✦ OUR MISSION & VALUES ✦
                </span>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none text-white select-none">
                  Who We Are
                </h2>
              </motion.div>

              {/* Main Content Split Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left Side: About Text & Features */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-muted-gray text-base leading-relaxed sm:text-lg"
                  >
                    At LifeNex AI, we bridge the gap between advanced artificial
                    intelligence capabilities and intuitive, high-performance
                    software. We build secure, FDA-compliant medical diagnostics
                    apps, smart health trackers, and high-performance digital
                    tools that empower doctors, researchers, and patients
                    worldwide.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-muted-gray text-sm sm:text-base leading-relaxed"
                  >
                    By leveraging modern tech stacks like Flutter, React Native,
                    and Next.js, we construct cross-platform applications
                    connected to reliable cloud platforms and deep neural
                    network models. Our systems translate complex biosignals
                    into clear, actionable clinical insights.
                  </motion.p>

                  {/* Feature Lists Staggered Entrance */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
                  >
                    {[
                      {
                        title: "Mobile Engineering",
                        desc: "Native-grade iOS & Android apps built using Flutter and React Native.",
                      },
                      {
                        title: "Web Architectures",
                        desc: "Ultra-fast responsive web portals utilizing React, Next.js, and Vue.",
                      },
                      {
                        title: "AI Core Integrations",
                        desc: "Custom AI pipeline integrations, LLMs, computer vision, and analytics.",
                      },
                      {
                        title: "Compliance & Security",
                        desc: "Data protection built to comply with HIPAA and medical standards.",
                      },
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        variants={cardVariants}
                        className="p-5 border border-white/5 bg-white/2 hover:bg-white/4 hover:border-accent-green/20 rounded-xl transition-all duration-300"
                      >
                        <h4 className="text-sm font-bold tracking-wider text-white mb-2 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                          {feature.title}
                        </h4>
                        <p className="text-xs text-muted-gray leading-relaxed">
                          {feature.desc}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Right Side: Mockup Image with Smooth Scroll Slide & Float */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="lg:col-span-5"
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 group shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                  >
                    {/* Subtle Glow backdrop */}
                    <div className="absolute inset-0 bg-linear-to-tr from-accent-teal/20 via-accent-green/5 to-transparent z-10 mix-blend-color" />

                    {/* Image */}
                    <Image
                      src="/medical_ai_app.png"
                      alt="LifeNex AI Mobile Application Diagnostics Display"
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Inner neon border overlay */}
                    <div className="absolute inset-0 border border-white/5 group-hover:border-accent-teal/30 z-20 pointer-events-none transition-all duration-500 rounded-2xl shadow-[inset_0_0_20px_rgba(0,229,255,0)] group-hover:shadow-[inset_0_0_30px_rgba(0,229,255,0.2)]" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer Branding Info */}
      <footer className="md:pl-24 lg:pl-28 border-t border-dark-border py-8 text-center text-xs text-muted-gray bg-black/60 relative z-10">
        <div className="max-w-[1500px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} LifeNex AI. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent-green transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-accent-green transition-colors">
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
