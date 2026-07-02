"use client";

import React from "react";
import { COLORS } from "@/constants/colors";

export default function SocialStrip() {
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
    <div className="hidden md:flex flex-col items-center gap-4 px-3 lg:px-4 border-l border-r border-white/5 self-center">
      <div className="flex flex-col gap-4 text-muted-gray">
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            className="hover:text-primary hover:border-primary/60 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all w-7 h-7 flex items-center justify-center border border-white/10 rounded-full bg-black/40 hover:bg-primary/5"
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
          <div 
            className="absolute top-0 left-0 w-full h-1/2 animate-scroll-down" 
            style={{ backgroundColor: COLORS.primary }}
          />
        </div>
      </div>
    </div>
  );
}
