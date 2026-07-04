"use client";

import React from "react";
import Link from "next/link";
import { COLORS } from "@/constants/colors";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

// Custom brand social SVG icons to avoid lucide-react version export conflicts
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

interface FooterProps {
  theme?: "light" | "dark";
}

export default function Footer({ theme = "dark" }: FooterProps) {
  const isDark = theme === "dark";

  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: GithubIcon },
    { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
    { name: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
    { name: "Email", href: "mailto:inquiries@lifenexai.com", icon: Mail },
  ];

  const studioLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className={`w-full relative z-10 overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-[#03040b] text-neutral-400 border-t border-neutral-900"
          : "bg-neutral-50 text-neutral-600 border-t border-neutral-200"
      }`}
    >
      {/* Dynamic Glow Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div
          className={`absolute -bottom-48 -left-48 w-96 h-96 rounded-full blur-[100px] transition-colors duration-300 ${
            isDark ? "bg-indigo-500/10" : "bg-indigo-500/5"
          }`}
        />
        <div
          className={`absolute -top-48 -right-48 w-96 h-96 rounded-full blur-[100px] transition-colors duration-300 ${
            isDark ? "bg-purple-500/10" : "bg-purple-500/5"
          }`}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16 pt-16 pb-8 relative z-10">
        {/* Core Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6 md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2">
              <span
                className={`text-xl font-black tracking-tight transition-colors duration-300 ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                LIFENEX<span style={{ color: COLORS.primary }}> AI</span>
              </span>
            </Link>
            <p className="text-xs sm:text-[13px] leading-relaxed font-medium">
              Next-generation software engineering studio crafting premium AI
              systems, healthcare solutions, and high-performance digital
              platforms.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg border transition-all duration-300 ${
                      isDark
                        ? "border-neutral-900 bg-neutral-950/40 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-900"
                        : "border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-100"
                    }`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Studio Links */}
          <div className="flex flex-col gap-6 md:col-span-3 md:col-start-7">
            <h3
              className={`text-[11px] font-black tracking-widest uppercase transition-colors duration-300 ${
                isDark ? "text-neutral-300" : "text-neutral-900"
              }`}
            >
              Studio
            </h3>
            <ul className="flex flex-col gap-3 text-xs sm:text-[13px] font-semibold">
              {studioLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center group transition-colors duration-300 hover:text-primary"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Location */}
          <div className="flex flex-col gap-6 md:col-span-3">
            <h3
              className={`text-[11px] font-black tracking-widest uppercase transition-colors duration-300 ${
                isDark ? "text-neutral-300" : "text-neutral-900"
              }`}
            >
              Connect
            </h3>
            <div className="flex flex-col gap-4 text-xs sm:text-[13px] font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-indigo-500" />
                <span className="leading-relaxed">
                  Riyadh, Saudi Arabia <br />
                  <span className="text-[11px] text-neutral-500">
                    Global Engineering Operations
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-indigo-500" />
                <a
                  href="mailto:inquiries@lifenexai.com"
                  className="hover:underline hover:text-primary transition-colors"
                >
                  inquiries@lifenexai.com
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.2)] text-white"
                  style={{
                    backgroundColor: COLORS.primary,
                  }}
                >
                  Let's Discuss
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright block */}
        <div
          className={`border-t pt-8 flex items-center justify-center text-xs font-semibold ${
            isDark ? "border-neutral-900" : "border-neutral-200"
          }`}
        >
          <p className="text-neutral-500 text-center">
            &copy; {new Date().getFullYear()} LifeNex AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
