"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "@/constants/colors";

interface NavbarProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

export default function Navbar({ setIsQuoteModalOpen }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "PRODUCTS", href: "/products" },
    { name: "CONTACT", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/lifenexai" },
    { name: "Twitter", href: "https://twitter.com/lifenexai" },
    { name: "LinkedIn", href: "https://linkedin.com/company/lifenexai" },
    { name: "Instagram", href: "https://instagram.com/lifenexai" },
  ];

  return (
    <>
      {/* Horizontal Premium Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-nav-bg/80 border-b border-dark-border/40 backdrop-blur-md transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-black cursor-pointer hover:border-primary shadow-[0_0_15px_rgba(79,70,229,0.15)] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all group"
            ></Link>
            <span className="font-sans font-black tracking-[0.2em] text-sm sm:text-base bg-linear-to-r from-white via-white to-primary bg-clip-text text-transparent">
              LIFENEX AI
            </span>
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
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="hidden md:block px-5 py-2.5 border text-xs font-bold tracking-widest rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] cursor-pointer"
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
              GET A QUOTE
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-dark-border bg-black/40 text-white hover:border-primary transition-colors cursor-pointer"
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
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-20 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-8 border-b border-dark-border"
          >
            <nav className="flex flex-col gap-6 text-xl font-bold tracking-wider mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                  style={{
                    color: pathname === link.href ? COLORS.primary : undefined,
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-6 mt-8">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full py-4 border font-bold tracking-widest text-center rounded-md transition-all duration-300 hover:text-black"
                style={{
                  borderColor: COLORS.primary,
                  color: COLORS.primary,
                  backgroundColor: `${COLORS.primary}10`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.primary;
                  e.currentTarget.style.color = "#000000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${COLORS.primary}10`;
                  e.currentTarget.style.color = COLORS.primary;
                }}
              >
                GET A QUOTE
              </button>

              <div className="flex justify-center gap-6 text-muted-gray text-xs">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
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
