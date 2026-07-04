"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "@/constants/colors";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    // { name: "PRODUCTS", href: "/products" },
    { name: "PORTFOLIO", href: "/portfolio" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/lifenexai" },
    { name: "Twitter", href: "https://twitter.com/lifenexai" },
    { name: "LinkedIn", href: "https://linkedin.com/company/lifenexai" },
    { name: "Instagram", href: "https://instagram.com/lifenexai" },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Horizontal Premium Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-nav-bg/85 border-b border-dark-border/40 backdrop-blur-md transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-sans font-black tracking-[0.2em] text-sm sm:text-base bg-linear-to-r from-white via-white to-primary bg-clip-text text-transparent hover:opacity-85 transition-opacity"
            >
              LIFENEX AI
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 relative py-2 ${
                    isActive ? "text-white" : "text-muted-gray hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ backgroundColor: COLORS.primary }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:block px-5 py-2.5 border text-xs font-bold tracking-widest rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] cursor-pointer text-center"
              style={{
                borderColor: COLORS.primary,
                color: COLORS.secondary,
                backgroundColor: `${COLORS.primary}10`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.primary;
                e.currentTarget.style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${COLORS.primary}10`;
                e.currentTarget.style.color = COLORS.secondary;
              }}
            >
              GET IN TOUCH
            </Link>

            {/* Mobile Menu Button — Clean Vector Icon Hamburger/X */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-dark-border bg-white/5 backdrop-blur-sm text-white hover:border-primary/50 hover:bg-white/10 transition-all duration-300 cursor-pointer relative z-50"
              aria-label="Toggle menu"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2 4H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                  style={{ originX: "9px", originY: "4px" }}
                />
                <motion.path
                  d="M2 9H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.path
                  d="M2 14H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                  style={{ originX: "9px", originY: "14px" }}
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          MOBILE OVERLAY MENU (Lighter, smaller, more premium design)
          ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden fixed inset-x-0 top-20 z-40 bg-[#07081a]/95 backdrop-blur-xl border-b border-dark-border/40 flex flex-col p-6 shadow-2xl"
          >
            {/* Navigation Links — Compact, elegant layout */}
            <nav className="flex flex-col gap-2 py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3.5 px-4 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-white/5 text-white"
                        : "hover:bg-white/2 text-white/60 hover:text-white"
                    }`}
                  >
                    <span className="text-sm font-bold tracking-widest uppercase">
                      {link.name}
                    </span>
                    {isActive ? (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: COLORS.primary,
                          boxShadow: `0 0 8px ${COLORS.primary}`,
                        }}
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-3.5 h-3.5 opacity-20"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button and Socials Footer */}
            <div className="pt-4 border-t border-white/5 space-y-6">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase text-white transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: COLORS.primary,
                  boxShadow: `0 4px 20px ${COLORS.primary}20`,
                }}
              >
                <span>GET IN TOUCH</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>

              <div className="flex justify-center gap-5 text-white/30 text-[9px] font-bold tracking-wider">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {link.name.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
