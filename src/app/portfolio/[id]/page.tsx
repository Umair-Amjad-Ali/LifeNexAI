"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { COLORS } from "@/constants/colors";
import { portfolioDetails } from "@/data/portfolioData";
import {
  ArrowLeft,
  ArrowRight,
  Code,
  Clock,
  User,
  Layers,
  AlertTriangle,
  CheckCircle,
  Cpu,
  BarChart,
  Globe,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Activity,
  Layers2,
  HardDrive,
} from "lucide-react";

// Custom Google Play SVG Path
const GooglePlayIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 20.6401V3.36011C3 2.50011 3.96 2.01011 4.67 2.51011L18.42 11.1501C19.06 11.5501 19.06 12.4501 18.42 12.8501L4.67 21.4901C3.96 21.9901 3 21.5001 3 20.6401Z"
      fill="currentColor"
    />
    <path
      opacity="0.3"
      d="M13.62 12L3.25 21.75C3.12 21.65 3.01 21.52 3 21.36V20.64L13.62 12Z"
      fill="white"
    />
    <path
      opacity="0.3"
      d="M3 3.36011C3.01 3.20011 3.12 3.07011 3.25 2.97011L13.62 12.0001L3 11.2801V3.36011Z"
      fill="white"
    />
  </svg>
);

// Custom Apple Store SVG Path
const AppleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.02 2.96 1.1.09 2.23-.58 2.95-1.39z" />
  </svg>
);

// Metadata helpers for Challenge / Solution cards
const caseMetrics: Record<
  string,
  {
    challengeArea: string;
    risk: string;
    solutionCore: string;
    benefit: string;
    complexity: string;
  }
> = {
  fixora: {
    challengeArea: "Localization & Latency",
    risk: "Critical Checkout Fails",
    solutionCore: "Socket.io + Redis Clusters",
    benefit: "Instant Dispatch Telemetry",
    complexity: "High Complexity",
  },
  "battery-eye": {
    challengeArea: "High-Freq Telemetry Sync",
    risk: "Main-Thread UI Freeze",
    solutionCore: "Dart Isolates + Hive DB",
    benefit: "Fluid 120Hz Telemetry",
    complexity: "High Complexity",
  },
  "dhs-platform": {
    challengeArea: "Workforce Logistics",
    risk: "Inefficient Scheduling Sync",
    solutionCore: "PostGIS Spatial Query Board",
    benefit: "Optimized Geo-Clusters",
    complexity: "Enterprise Scale",
  },
  "the-not-you": {
    challengeArea: "Organic Canvas Physics",
    risk: "UI Rendering Frame Drops",
    solutionCore: "Impeller Engine + CustomPainter",
    benefit: "Butter-Smooth 60/120fps",
    complexity: "Advanced UX",
  },
  "lifenex-ai": {
    challengeArea: "Heavy Assets Loading",
    risk: "High FOUC / Bundles Sluggishness",
    solutionCore: "Next.js 16 Server Components",
    benefit: "Lighthouse Performance Locked",
    complexity: "Production Grade",
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const id = typeof params?.id === "string" ? params.id : "";
  const project = portfolioDetails[id];

  const [activeIndex, setActiveIndex] = useState(0);

  // Exclude current project from bottom carousel
  const otherProjects = Object.values(portfolioDetails).filter(
    (p) => p.id !== id,
  );

  // Auto-scroll logic for carousel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !project || otherProjects.length === 0) return;

    let intervalId: NodeJS.Timeout;

    const startAutoplay = () => {
      intervalId = setInterval(() => {
        if (!container) return;
        const maxScroll = container.scrollWidth - container.clientWidth;
        // Scroll right, or reset to 0 if at the end
        if (container.scrollLeft >= maxScroll - 20) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by width of one card (including gap)
          let step = 300;
          if (window.innerWidth >= 1024) {
            step = (container.clientWidth - 48) / 3 + 24;
          } else if (window.innerWidth >= 768) {
            step = (container.clientWidth - 24) / 2 + 24;
          } else {
            step = 304;
          }
          container.scrollBy({ left: step, behavior: "smooth" });
        }
      }, 4500);
    };

    startAutoplay();

    // Pause autoplay on hover/touch and resume on leave
    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => startAutoplay();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleMouseEnter);
    container.addEventListener("touchend", handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("touchstart", handleMouseEnter);
        container.removeEventListener("touchend", handleMouseLeave);
      }
    };
  }, [id, project, otherProjects.length]);

  // Track active slide index by scroll position (center-based)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || otherProjects.length === 0) return;

    const handleScroll = () => {
      const children = container.children;
      if (children.length === 0) return;

      let closestIndex = 0;
      let minDistance = Infinity;
      const containerCenter =
        container.getBoundingClientRect().left + container.clientWidth / 2;

      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const rect = child.getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        const distance = Math.abs(childCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }
      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [id, otherProjects.length]);

  // Handle project not found
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative bg-white text-neutral-900">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-md mx-auto space-y-6">
          <h1 className="text-4xl font-black uppercase text-neutral-900 tracking-widest">
            Case Study Not Found
          </h1>
          <p className="text-neutral-500 text-sm font-medium">
            The project you are looking for does not exist or has been archived.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 text-white text-xs font-black tracking-widest uppercase rounded-xl hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all"
            style={{ backgroundColor: COLORS.primary }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Links availability check
  const hasLiveUrl =
    project.liveUrl && project.liveUrl !== "" && project.liveUrl !== "#";
  const hasAppStoreUrl = project.appStoreUrl && project.appStoreUrl !== "";
  const hasPlayStoreUrl = project.playStoreUrl && project.playStoreUrl !== "";
  const hasAnyLink = hasLiveUrl || hasAppStoreUrl || hasPlayStoreUrl;

  const metrics = caseMetrics[project.id] || {
    challengeArea: "Core Architecture",
    risk: "Moderate",
    solutionCore: "Modern Web Standards",
    benefit: "Stable Platform Delivery",
    complexity: "Standard Grade",
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      let step = 300;
      if (window.innerWidth >= 1024) {
        step = (scrollContainerRef.current.clientWidth - 48) / 3 + 24;
      } else if (window.innerWidth >= 768) {
        step = (scrollContainerRef.current.clientWidth - 24) / 2 + 24;
      } else {
        step = 304;
      }
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -step : step,
        behavior: "smooth",
      });
    }
  };

  const selectCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const children = container.children;
    if (children[index]) {
      children[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft dynamic background glow mapping to project accent */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl z-0 opacity-30"
        style={{
          background: `radial-gradient(circle, ${project.accent}16 0%, transparent 70%)`,
        }}
      />



      <main className="relative z-10 pt-28">
        {/* HERO SECTION - STANDARDIZED MAX WIDTH AND PADDING */}
        <section className="px-8 sm:px-12 lg:px-16 max-w-[1200px] mx-auto w-full pt-4 pb-12">
          {/* Back button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-neutral-500 hover:text-neutral-950 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span
                  className="text-[9px] font-black tracking-[0.2em] uppercase px-2.5 py-1 rounded-md"
                  style={{
                    backgroundColor: `${project.accent}12`,
                    color: project.accent,
                  }}
                >
                  {project.category}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                <span className="text-[10px] font-bold tracking-wider text-neutral-400">
                  STATUS:{" "}
                  <span className="text-neutral-900 uppercase font-black">
                    {project.status}
                  </span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none text-neutral-900">
                {project.title}
              </h1>

              <p
                className="text-base font-bold italic"
                style={{ color: project.accent }}
              >
                {project.subtitle}
              </p>

              <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed font-medium">
                {project.longDescription}
              </p>

              {/* ACTION BUTTONS (CONDITIONAL LINKS) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {!hasAnyLink ? (
                  /* No links present -> Discuss Integration */
                  <Link
                    href={`/contact?service=${encodeURIComponent(project.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.2)] text-white hover:-translate-y-0.5 cursor-pointer"
                    style={{
                      backgroundColor: COLORS.primary,
                    }}
                  >
                    Discuss Integration
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  /* Links are present -> Render store/web links */
                  <>
                    {hasLiveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black tracking-widest uppercase text-white transition-all duration-300 hover:-translate-y-0.5 shadow-xs cursor-pointer"
                        style={{
                          backgroundColor: COLORS.primary,
                          boxShadow: `0 4px 14px ${COLORS.primary}15`,
                        }}
                      >
                        <Globe className="w-4 h-4" />
                        Live Website
                      </a>
                    )}
                    {hasAppStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black tracking-widest uppercase text-white bg-black hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5 shadow-xs cursor-pointer"
                      >
                        <AppleIcon className="w-4 h-4" />
                        App Store
                      </a>
                    )}
                    {hasPlayStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black tracking-widest uppercase text-neutral-800 border border-neutral-300 bg-neutral-50 hover:bg-neutral-100 hover:border-neutral-400 transition-all duration-300 hover:-translate-y-0.5 shadow-xs cursor-pointer"
                      >
                        <GooglePlayIcon className="w-3.5 h-3.5 text-[#00E5FF]" />
                        Google Play
                      </a>
                    )}
                    {/* Secondary button */}
                    <Link
                      href={`/contact?service=${encodeURIComponent(project.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 text-xs font-bold tracking-widest uppercase text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50/50 transition-all duration-300"
                    >
                      Discuss Project
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Right Side Info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative aspect-16/10 rounded-2xl border border-neutral-300 overflow-hidden shadow-md bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>

              <div className="p-5 rounded-2xl border border-neutral-300 bg-neutral-50/80 space-y-3">
                <h3 className="text-[9px] font-black uppercase tracking-wider text-neutral-500">
                  Case Metadata
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider block">
                      Client / Org
                    </span>
                    <span className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-neutral-450" />
                      {project.clientName}
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider block">
                      Timeline
                    </span>
                    <span className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-450" />
                      {project.timeline}
                    </span>
                  </div>
                  <div className="space-y-0.5 col-span-2">
                    <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider block">
                      Responsibilities
                    </span>
                    <span className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-neutral-455" />
                      {project.projectRole}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGE VS SOLUTION - STANDARDIZED MAX WIDTH AND PADDING */}
        <section className="border-t border-neutral-200 bg-neutral-50/50 py-10">
          <div className="px-8 sm:px-12 lg:px-16 max-w-[1200px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Challenge Card */}
              <div className="relative p-6 rounded-2xl border border-amber-500 bg-amber-500/2 flex flex-col justify-between hover:border-amber-600 transition-all duration-300 shadow-xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-amber-500/10 text-amber-800">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/10 text-amber-800">
                      {metrics.complexity}
                    </span>
                  </div>
                  <h2 className="text-base font-black uppercase tracking-wider text-neutral-900">
                    The Engineering Challenge
                  </h2>
                  <p className="text-neutral-700 text-xs leading-relaxed font-semibold">
                    {project.problemStatement}
                  </p>
                </div>

                {/* Micro Detail Data Footer */}
                <div className="mt-4 pt-3 border-t border-amber-500/20 flex justify-between text-[9px] font-bold text-neutral-400 uppercase">
                  <span>
                    Area:{" "}
                    <span className="text-neutral-800 font-extrabold">
                      {metrics.challengeArea}
                    </span>
                  </span>
                  <span>
                    Risk:{" "}
                    <span className="text-red-700 font-extrabold">
                      {metrics.risk}
                    </span>
                  </span>
                </div>
              </div>

              {/* Solution Card */}
              <div className="relative p-6 rounded-2xl border border-emerald-500 bg-emerald-500/2 flex flex-col justify-between hover:border-emerald-600 transition-all duration-300 shadow-xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-emerald-500/10 text-emerald-800">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-800">
                      CORE STRATEGY
                    </span>
                  </div>
                  <h2 className="text-base font-black uppercase tracking-wider text-neutral-900">
                    The Architectural Solution
                  </h2>
                  <p className="text-neutral-700 text-xs leading-relaxed font-semibold">
                    {project.solutionStatement}
                  </p>
                </div>

                {/* Micro Detail Data Footer */}
                <div className="mt-4 pt-3 border-t border-emerald-500/20 flex justify-between text-[9px] font-bold text-neutral-400 uppercase">
                  <span>
                    Engine:{" "}
                    <span className="text-neutral-800 font-extrabold">
                      {metrics.solutionCore}
                    </span>
                  </span>
                  <span>
                    Value:{" "}
                    <span className="text-emerald-800 font-extrabold">
                      {metrics.benefit}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENGINEERING HIGHLIGHTS - STANDARDIZED MAX WIDTH AND PADDING */}
        <section className="py-10">
          <div className="px-8 sm:px-12 lg:px-16 max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-3">
              <div>
                <span
                  className="text-[9px] font-black tracking-[0.2em] uppercase"
                  style={{ color: project.accent }}
                >
                  Behind The Code
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-neutral-900 mt-0.5">
                  Technical Architecture
                </h2>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                <Code className="w-3.5 h-3.5" />
                Production-Grade Implementations
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {project.engineeringHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl border border-neutral-300 bg-neutral-50/80 space-y-3 hover:border-neutral-400 transition-colors duration-300"
                >
                  <span
                    className="text-2xl font-black tracking-tight block opacity-50"
                    style={{ color: project.accent }}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="text-xs font-black uppercase tracking-wider text-neutral-900">
                    {highlight.title}
                  </h3>
                  <p className="text-neutral-600 text-[11px] leading-relaxed font-semibold">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK DETAILS - STANDARDIZED MAX WIDTH AND PADDING */}
        <section className="border-t border-neutral-200 bg-neutral-50/30 py-10">
          <div className="px-8 sm:px-12 lg:px-16 max-w-[1200px] mx-auto w-full">
            <div className="mb-8">
              <span
                className="text-[9px] font-black tracking-[0.2em] uppercase"
                style={{ color: project.accent }}
              >
                Infrastructure Matrix
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-neutral-900 mt-0.5">
                Technology Stack Deep-Dive
              </h2>
            </div>

            {project.techStackDetails.length === 2 ? (
              /* Two detailed columns: balanced with a beautiful Specs & Tags Panel */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Panel: Global Specs & Full Tags Cloud */}
                <div className="lg:col-span-4 p-5 rounded-2xl border border-neutral-300 bg-neutral-50/80 space-y-5">
                  <div className="space-y-1">
                    <span className="text-[9px] font-black tracking-widest text-neutral-400 uppercase block">
                      Architecture Blueprint
                    </span>
                    <h3 className="text-xs font-black uppercase text-neutral-800">
                      Core Implementation Specs
                    </h3>
                  </div>

                  {/* Visual Spec Matrix (Aligned left with fixed grid layout to avoid center-bleed spacing) */}
                  <div className="space-y-3 text-[10px] font-bold text-neutral-500 uppercase">
                    <div className="grid grid-cols-[110px_1fr] items-center py-1.5 border-b border-neutral-200">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-neutral-400" />{" "}
                        State Engine
                      </span>
                      <span className="text-neutral-800 font-black pl-2">
                        Clean Architecture
                      </span>
                    </div>
                    <div className="grid grid-cols-[110px_1fr] items-center py-1.5 border-b border-neutral-200">
                      <span className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-neutral-400" />{" "}
                        Thread Model
                      </span>
                      <span className="text-neutral-800 font-black pl-2">
                        Async Dispatch
                      </span>
                    </div>
                    <div className="grid grid-cols-[110px_1fr] items-center py-1.5 border-b border-neutral-200">
                      <span className="flex items-center gap-1.5">
                        <Layers2 className="w-3.5 h-3.5 text-neutral-400" />{" "}
                        Safety
                      </span>
                      <span className="text-neutral-800 font-black pl-2">
                        TypeScript / Dart
                      </span>
                    </div>
                    <div className="grid grid-cols-[110px_1fr] items-center py-1.5">
                      <span className="flex items-center gap-1.5">
                        <HardDrive className="w-3.5 h-3.5 text-neutral-400" />{" "}
                        Offline State
                      </span>
                      <span className="text-neutral-800 font-black pl-2">
                        Memory Cache Sync
                      </span>
                    </div>
                  </div>

                  {/* Fully formatted tag cloud of all technologies */}
                  <div className="space-y-2 pt-2 border-t border-neutral-200">
                    <span className="text-[8px] font-black text-neutral-400 tracking-wider uppercase block">
                      Primary Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-[9px] font-extrabold uppercase rounded bg-white border border-neutral-300 text-neutral-700 shadow-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Columns: The 2 detailed categories */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.techStackDetails.map((cat, idx) => (
                    <div key={idx} className="space-y-3.5">
                      <div className="flex items-center gap-2 border-b border-neutral-300 pb-2">
                        <Cpu className="w-4 h-4 text-neutral-400" />
                        <h3 className="text-xs font-black uppercase tracking-widest text-neutral-500">
                          {cat.category}
                        </h3>
                      </div>

                      <div className="space-y-2.5">
                        {cat.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="p-3.5 rounded-xl border border-neutral-300 bg-white shadow-xs hover:-translate-y-0.5 transition-transform"
                          >
                            <span className="text-xs font-black uppercase text-neutral-855 block">
                              {item.name}
                            </span>
                            <span className="text-[10px] text-neutral-600 font-semibold leading-relaxed block mt-1">
                              {item.reason}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Three detailed columns: normal horizontal split layout */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.techStackDetails.map((cat, idx) => (
                  <div key={idx} className="space-y-3.5">
                    <div className="flex items-center gap-2 border-b border-neutral-300 pb-2">
                      <Cpu className="w-4 h-4 text-neutral-400" />
                      <h3 className="text-xs font-black uppercase tracking-widest text-neutral-500">
                        {cat.category}
                      </h3>
                    </div>

                    <div className="space-y-2.5">
                      {cat.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="p-3.5 rounded-xl border border-neutral-300 bg-white shadow-xs hover:-translate-y-0.5 transition-transform"
                        >
                          <span className="text-xs font-black uppercase text-neutral-855 block">
                            {item.name}
                          </span>
                          <span className="text-[10px] text-neutral-600 font-semibold leading-relaxed block mt-1">
                            {item.reason}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* BUSINESS IMPACT & STATS - STANDARDIZED MAX WIDTH AND PADDING */}
        <section className="py-10">
          <div className="px-8 sm:px-12 lg:px-16 max-w-[1200px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-3">
                <span
                  className="text-[9px] font-black tracking-[0.25em] uppercase"
                  style={{ color: project.accent }}
                >
                  Deliverables & Results
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-neutral-900 leading-tight">
                  Business Value & Metrics
                </h2>
                <p className="text-neutral-500 text-xs font-medium leading-relaxed">
                  How our engineering choices translated directly into key
                  performance metrics, reliability guarantees, and user
                  engagement milestones.
                </p>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7 space-y-3.5">
                {project.businessImpact.map((impact, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-2xl border border-neutral-300 bg-neutral-50/80 items-center hover:border-neutral-400 transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${project.accent}15`,
                        color: project.accent,
                      }}
                    >
                      <BarChart className="w-4 h-4" />
                    </div>
                    <p className="text-[11px] sm:text-xs font-semibold text-neutral-700">
                      {impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS CAROUSEL (STANDARDIZED MAX WIDTH, EXACTLY 3 VISIBLE CARDS ON DESKTOP, CLIPPED OVERFLOW WITH VERTICAL HEADROOM) */}
        <section className="border-t border-neutral-200 bg-neutral-50/30 pt-10 pb-12">
          {/* Header block with exact boundaries */}
          <div className="max-w-[1200px] mx-auto w-full px-8 sm:px-12 lg:px-16 mb-6 flex items-center justify-between">
            <div>
              <span className="text-[9px] font-black tracking-[0.25em] text-neutral-400 uppercase block">
                Portfolio Suite
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-neutral-900 mt-0.5">
                Explore Case Studies
              </h2>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-xl border border-neutral-300 bg-white flex items-center justify-center text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:shadow-xs transition-all cursor-pointer"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-xl border border-neutral-300 bg-white flex items-center justify-center text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:shadow-xs transition-all cursor-pointer"
                aria-label="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel outer wrapper aligned exactly inside the 1200px max-width boundary and clipping any horizontal overflow, while leaving vertical space for hovers */}
          <div className="max-w-[1200px] mx-auto w-full px-8 sm:px-12 lg:px-16 relative">
            <div className="overflow-hidden w-full py-4 -my-4">
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pt-2 pb-4"
              >
                {otherProjects.map((p) => {
                  return (
                    <div
                      key={p.id}
                      className="flex-none w-[280px] md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] snap-start transition-transform duration-300 hover:-translate-y-2"
                    >
                      <Link
                        href={`/portfolio/${p.id}`}
                        className="group block rounded-2xl border border-neutral-300 bg-white p-4.5 space-y-3.5 shadow-xs hover:shadow-md hover:border-neutral-400 transition-all duration-300"
                      >
                        {/* Compact Image */}
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 280px, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>

                        {/* Content */}
                        <div className="space-y-0.5">
                          <div className="flex items-center justify-between">
                            <span
                              className="text-[8px] font-black tracking-wider uppercase"
                              style={{ color: p.accent }}
                            >
                              {p.category}
                            </span>
                            <span className="text-[8px] font-black uppercase text-neutral-400 bg-neutral-50 px-1.5 py-0.5 rounded border border-neutral-300">
                              {p.status}
                            </span>
                          </div>
                          <h3 className="text-base font-black uppercase text-neutral-900 tracking-tight">
                            {p.title}
                          </h3>
                          <p className="text-neutral-550 text-[10px] font-semibold line-clamp-1 italic">
                            {p.subtitle}
                          </p>
                        </div>

                        <div className="pt-1 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-neutral-500 group-hover:text-primary transition-colors">
                          Explore Case Study
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator Progress Bar matching project accent color */}
            {otherProjects.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {otherProjects.map((_, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => selectCard(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive ? "w-6 shadow-sm" : "w-2 hover:opacity-80"
                      }`}
                      style={{
                        backgroundColor: isActive ? project.accent : "#d1d5db",
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

    </div>
  );
}
