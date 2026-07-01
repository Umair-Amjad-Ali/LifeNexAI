"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveredSidebar, setIsHoveredSidebar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Form states
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    service: "AI Integration",
    details: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsQuoteModalOpen(false);
      setFormSubmitted(false);
      setQuoteForm({
        name: "",
        email: "",
        service: "AI Integration",
        details: "",
      });
    }, 2000);
  };

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

      {/* Header for Mobile Devices */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-dark-bg/95 border-b border-dark-border px-6 py-4 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-accent-green/40 bg-black shadow-[0_0_10px_rgba(0,255,135,0.2)]">
            <div className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
          </div>
          <span className="font-sans font-bold tracking-widest text-lg bg-linear-to-r from-white via-white to-accent-green bg-clip-text text-transparent">
            LIFENEX AI
          </span>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-dark-border bg-black/50 text-white hover:border-accent-green transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              }
            />
          </svg>
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[73px] z-30 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-8 border-b border-dark-border"
          >
            <nav className="flex flex-col gap-6 text-2xl font-bold tracking-wider mt-8">
              <a
                href="#hero"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-accent-green transition-colors"
              >
                HOME
              </a>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-accent-green transition-colors"
              >
                WHO WE ARE
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-accent-green transition-colors"
              >
                SERVICES
              </a>
              <a
                href="#tech"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-accent-green transition-colors"
              >
                TECH STACK
              </a>
            </nav>

            <div className="flex flex-col gap-6">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full py-4 border border-accent-green bg-accent-green/10 text-accent-green rounded-md font-bold tracking-widest text-center shadow-[0_0_15px_rgba(0,255,135,0.15)] hover:bg-accent-green hover:text-black transition-all"
              >
                GET A QUOTE
              </button>

              <div className="flex justify-center gap-6 text-muted-gray text-sm">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-green transition-colors"
                  >
                    {link.name.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Main Layout */}
      <div className="relative flex flex-col md:flex-row min-h-screen w-full">
        {/* Left Vertical Navigation Panel (Sidebar) */}
        <aside
          className="hidden md:flex fixed top-0 left-0 bottom-0 w-24 lg:w-28 flex-col justify-between items-center py-8 border-r border-dark-border bg-nav-bg/60 backdrop-blur-md z-40 transition-colors duration-300"
          onMouseEnter={() => setIsHoveredSidebar(true)}
          onMouseLeave={() => setIsHoveredSidebar(false)}
        >
          {/* Top Logo */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-accent-green/30 bg-black cursor-pointer hover:border-accent-green shadow-[0_0_15px_rgba(0,255,135,0.1)] hover:shadow-[0_0_20px_rgba(0,255,135,0.3)] transition-all group">
            <div className="h-3.5 w-3.5 rounded-full bg-accent-green group-hover:scale-125 transition-transform" />
            <div className="absolute inset-0 rounded-full border border-dashed border-accent-green/30 animate-spin [animation-duration:10s] group-hover:border-accent-green/60" />
          </div>

          {/* Middle Menu Button & Rotating Brand Text */}
          <div className="flex flex-col items-center gap-12">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-dark-border bg-black/40 hover:border-accent-green group transition-all"
              aria-label="Menu"
            >
              <div className="h-0.5 w-5 bg-white group-hover:bg-accent-green transition-colors" />
              <div className="h-0.5 w-5 bg-white group-hover:bg-accent-green transition-colors" />
              <div className="h-0.5 w-5 bg-white group-hover:bg-accent-green transition-colors" />
            </button>

            {/* Rotated Vertical Brand Text */}
            <div className="py-8 select-none">
              <span
                className="block text-4xl lg:text-5xl font-extrabold tracking-[0.25em] text-stroke-gray uppercase opacity-60 hover:opacity-100 hover:text-white transition-all cursor-default"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                LIFENEX AI
              </span>
            </div>
          </div>

          {/* Bottom Get A Quote button */}
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="group relative flex items-center justify-center py-6 px-3 border border-accent-green/30 bg-black/40 hover:border-accent-green hover:bg-accent-green/5 rounded-lg transition-all"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-green shadow-[0_0_8px_#00ff87] group-hover:animate-ping" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent-green uppercase whitespace-nowrap pt-2">
              GET A QUOTE
            </span>
          </button>
        </aside>

        {/* Right Content Area (Hero + Ticker + Who We Are) */}
        <main className="flex-1 flex flex-col md:pl-24 lg:pl-28 w-full min-h-screen">
          {/* Hero Section - Vertically Centered Layout */}
          <section
            id="hero"
            className="relative flex-1 flex flex-col justify-center min-h-screen pt-28 pb-16 md:py-16 px-8 sm:px-16 md:px-12 lg:px-20 z-10 border-b border-dark-border/40"
          >
            {/* Top Right Floating Pager Indicator */}
            <div className="absolute top-8 right-8 hidden lg:flex flex-col gap-2.5 z-20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green shadow-[0_0_8px_#00ff87]" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer" />
            </div>

            {/* Vertically centered 3-column layout grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 lg:gap-8 items-center w-full max-w-[1500px] mx-auto">

              {/* LEFT: Text Content Column - vertically centered by grid */}
              <div className="flex flex-col justify-center">

                {/* Small Tagline Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-2 mb-6"
                >
                  <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.25em] text-accent-green uppercase">
                    AI-POWERED HEALTHCARE SOFTWARE
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] mb-6 select-none"
                >
                  UNLOCK YOUR <br />
                  <span className="text-stroke-gray uppercase block mt-1 hover:text-white transition-colors duration-500">
                    MEDICAL AI
                  </span>
                  <span className="bg-gradient-to-r from-white via-white to-accent-green/80 bg-clip-text text-transparent uppercase block mt-1">
                    APPLICATIONS.
                  </span>
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-muted-gray text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
                >
                  We specialize in high-end medical software solutions
                  integrated with advanced artificial intelligence. From
                  feature-rich mobile applications using Flutter and React
                  Native to modern web systems on React/Next.js/Vue, we
                  build robust backend architectures with seamless AI
                  models.
                </motion.p>

                {/* Circular Explore More Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <button
                    onClick={() => {
                      const target = document.getElementById("about");
                      target?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group relative flex items-center justify-center h-20 w-20 shrink-0 rounded-full border border-white/20 hover:border-accent-green bg-transparent hover:shadow-[0_0_20px_rgba(0,255,135,0.2)] transition-all duration-300 cursor-pointer"
                  >
                    {/* Circular Text Backdrop */}
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
                        <text className="fill-accent-green text-[7.5px] font-bold tracking-[0.25em]">
                          <textPath href="#circlePath" startOffset="0%">
                            • EXPLORE MORE • LIFENEX AI • DIGITAL HEALTHCARE
                          </textPath>
                        </text>
                      </svg>
                    </div>

                    {/* Center Arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 text-white group-hover:text-accent-green transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
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
                </motion.div>
              </div>

              {/* MIDDLE: Social Icons + Scroll Indicator Strip - vertically centered by grid */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="hidden md:flex flex-col items-center gap-6 px-4 lg:px-6 border-l border-r border-white/5 self-center"
              >
                {/* Social Icons */}
                <div className="flex flex-col gap-5 text-muted-gray">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="hover:text-accent-green hover:border-accent-green/60 hover:shadow-[0_0_15px_rgba(0,255,135,0.3)] transition-all w-8 h-8 flex items-center justify-center border border-white/10 rounded-full bg-black/40 hover:bg-accent-green/5"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                {/* Scroll Down Section */}
                <div className="flex flex-col items-center gap-3 mt-2">
                  <span
                    className="text-[9px] font-bold tracking-[0.25em] text-muted-gray uppercase whitespace-nowrap"
                    style={{
                      writingMode: "vertical-rl",
                    }}
                  >
                    Scroll Down To Explore
                  </span>
                  <div className="h-12 w-[1px] bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-green animate-scroll-down" />
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: Hero Image with Floating Animation & Tint Overlay - vertically centered by grid */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.3 },
                  scale: { duration: 0.8, delay: 0.3 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative w-full aspect-[4/3] md:aspect-square xl:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
              >
                {/* Tech Green Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-green/30 via-accent-teal/10 to-transparent z-10 mix-blend-color" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />

                {/* Glowing neon green border overlay */}
                <div className="absolute inset-0 border border-accent-green/0 group-hover:border-accent-green/30 z-20 pointer-events-none transition-all duration-500 rounded-2xl shadow-[inset_0_0_20px_rgba(0,255,135,0)] group-hover:shadow-[inset_0_0_30px_rgba(0,255,135,0.25)]" />

                {/* Team Image */}
                <Image
                  src="/team_medical_ai.png"
                  alt="LifeNex AI Medical App Development Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Bottom-left corner accent graphic */}
                <div className="absolute bottom-4 left-4 z-20 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent-green animate-ping" />
                  <span className="text-[10px] font-bold tracking-widest text-accent-green">
                    LIFENEX LABS
                  </span>
                </div>
              </motion.div>

              {/* Mobile-only Social Icons (shown below content on small screens) */}
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
            className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10 relative bg-gradient-to-b from-transparent to-black/40"
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
                        className="p-5 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent-green/20 rounded-xl transition-all duration-300"
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal/20 via-accent-green/5 to-transparent z-10 mix-blend-color" />

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

      {/* Quote Form Modal (Interactive Micro-Feature) */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-dark-card border border-dark-border p-8 rounded-2xl shadow-[0_0_50px_rgba(0,255,135,0.1)] z-10 overflow-hidden"
            >
              {/* Decorative Tech Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-teal via-accent-green to-accent-teal" />

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold tracking-wider text-white">
                  GET A TECH ESTIMATE
                </h3>
                <button
                  onClick={() => setIsQuoteModalOpen(false)}
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
                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-4"
                >
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
                    <select
                      value={quoteForm.service}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, service: e.target.value })
                      }
                      className="w-full bg-black/40 border border-dark-border px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-accent-green transition-all appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/></svg>")`,
                        backgroundPosition: "right 1rem center",
                        backgroundSize: "1.25rem",
                        backgroundRepeat: "no-repeat",
                      }}
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
    </div>
  );
}
