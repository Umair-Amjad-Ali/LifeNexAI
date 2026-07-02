"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

export default function Sidebar({ setIsQuoteModalOpen }: SidebarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* ================= HEADER FOR MOBILE DEVICES ================= */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-dark-bg/95 border-b border-dark-border px-6 py-4 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-accent-green/40 bg-black shadow-[0_0_10px_rgba(0,255,135,0.2)]"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-accent-green animate-pulse" />
          </Link>
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    pathname === link.href
                      ? "text-accent-green"
                      : "hover:text-accent-green"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
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
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
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

      {/* ================= DESKTOP VERTICAL NAVIGATION SIDEBAR ================= */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-16 lg:w-20 flex-col justify-between items-center py-6 border-r border-dark-border bg-nav-bg/60 backdrop-blur-md z-40 transition-colors duration-300">
        {/* Top: Logo and Hamburger Grouped Closer together */}
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-accent-green/30 bg-black cursor-pointer hover:border-accent-green shadow-[0_0_15px_rgba(0,255,135,0.1)] hover:shadow-[0_0_20px_rgba(0,255,135,0.3)] transition-all group"
          >
            <div className="h-3 w-3 rounded-full bg-accent-green group-hover:scale-125 transition-transform" />
            <div className="absolute inset-0 rounded-full border border-dashed border-accent-green/30 animate-spin [animation-duration:10s] group-hover:border-accent-green/60" />
          </Link>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 rounded-lg border border-dark-border bg-black/40 hover:border-accent-green group transition-all cursor-pointer"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-white group-hover:text-accent-green"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.div
                  key="hamburger"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col gap-1 items-center"
                >
                  <div className="h-px w-4 bg-white group-hover:bg-accent-green transition-colors" />
                  <div className="h-px w-4 bg-white group-hover:bg-accent-green transition-colors" />
                  <div className="h-px w-4 bg-white group-hover:bg-accent-green transition-colors" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Middle: Brand Text OR Navigation Links */}
        <div className="flex-1 flex items-center justify-center py-8 select-none overflow-hidden w-full">
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.nav
                key="nav-links"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-8 text-[11px] lg:text-xs font-bold tracking-[0.25em]"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                    className={`block uppercase transition-all duration-300 hover:text-accent-green hover:scale-105 ${
                      pathname === link.href
                        ? "text-accent-green drop-shadow-[0_0_8px_#00ff87]"
                        : "text-muted-gray"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.nav>
            ) : (
              <motion.div
                key="brand-text"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.2 }}
                className="py-4 w-full flex justify-center"
              >
                <span
                  className="block text-xl lg:text-2xl font-extrabold tracking-[0.25em] text-stroke-gray uppercase opacity-60 hover:opacity-100 hover:text-white transition-all cursor-default"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  LIFENEX AI
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom: Get A Quote button */}
        <button
          onClick={() => setIsQuoteModalOpen(true)}
          className="group relative flex items-center justify-center py-4 px-2 border border-accent-green/30 bg-black/40 hover:border-accent-green hover:bg-accent-green/5 rounded-lg transition-all cursor-pointer"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-accent-green uppercase whitespace-nowrap pt-2">
            GET A QUOTE
          </span>
        </button>
      </aside>
    </>
  );
}
