"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import { ArrowRight } from "lucide-react";

const portfolioProjects = [
  {
    id: "fixora",
    title: "Fixora",
    subtitle: "Home Service Marketplace",
    category: "WEB PLATFORM",
    description:
      "A bilingual Arabic/English home services booking platform with real-time order tracking, provider dashboards, and full RTL support. Built for the Saudi Arabian market with seamless payment integration.",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "i18n",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    status: "LIVE",
    liveUrl: "#",
    accent: COLORS.primary,
  },
  {
    id: "battery-eye",
    title: "Battery Eye",
    subtitle: "Smart Battery Analytics",
    category: "MOBILE APP",
    description:
      "A smart battery monitoring app with advanced analytics, usage predictions, and health diagnostics. Published on the App Store with thousands of active users tracking their device health.",
    techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "Material Design"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    status: "DEPLOYED",
    liveUrl: "#",
    accent: COLORS.accentLightBlue,
  },
  {
    id: "dhs-platform",
    title: "DHS Platform",
    subtitle: "Enterprise Service Management",
    category: "ENTERPRISE",
    description:
      "A comprehensive home services management system with admin panels, technician assignment workflows, service tracking, and automated reporting designed for large-scale operations in Dammam.",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    status: "COMPLETED",
    liveUrl: "#",
    accent: "#10b981",
  },
  {
    id: "the-not-you",
    title: "The Not You",
    subtitle: "Emotion Management App",
    category: "MOBILE APP",
    description:
      "An innovative emotion management and addiction breaker app featuring glassmorphic 3D orb animations, wave-based mood tracking, guided meditation sessions, and personal growth analytics.",
    techStack: ["Flutter", "Dart", "Custom Animations", "Firebase", "Hive"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    status: "IN DEVELOPMENT",
    liveUrl: "#",
    accent: "#f59e0b",
  },
  {
    id: "lifenex-ai",
    title: "LifeNex AI",
    subtitle: "Corporate AI Platform",
    category: "WEB PLATFORM",
    description:
      "This very website — a premium corporate platform showcasing AI-powered healthcare technology services, featuring live telemetry visualizations, alternating sections, and a full contact pipeline.",
    techStack: [
      "Next.js 16",
      "React 19",
      "Framer Motion",
      "Tailwind CSS",
      "TypeScript",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    status: "LIVE",
    liveUrl: "/",
    accent: COLORS.primary,
  },
];

const statusConfig: Record<string, { bg: string; text: string; dot: string }> =
  {
    LIVE: { bg: "#ecfdf5", text: "#059669", dot: "#10b981" },
    DEPLOYED: { bg: "#eff6ff", text: "#2563eb", dot: "#3b82f6" },
    COMPLETED: { bg: "#f5f3ff", text: "#7c3aed", dot: "#8b5cf6" },
    "IN DEVELOPMENT": { bg: "#fffbeb", text: "#d97706", dot: "#f59e0b" },
  };

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-white text-neutral-900 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />



      <main className="relative z-10 ">
        {/* PROJECT CARDS */}
        <section className="px-6 sm:px-12 lg:px-16 max-w-[1200px] mx-auto pb-24 pt-40">
          <div className="space-y-16">
            {portfolioProjects.map((project, index) => {
              const status =
                statusConfig[project.status] || statusConfig.COMPLETED;
              const isReversed = index % 2 !== 0;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group"
                >
                  <div
                    className={`flex flex-col gap-8 ${
                      isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                  >
                    {/* IMAGE */}
                    <Link href={`/portfolio/${project.id}`} className="w-full lg:w-1/2 block">
                      <div className="relative overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 aspect-16/10 shadow-sm group-hover:shadow-xl transition-shadow duration-500 cursor-pointer">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Status badge */}
                        <div className="absolute top-4 left-4">
                          <span
                            className="text-[10px] font-black tracking-wider uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm"
                            style={{
                              color: status.text,
                              backgroundColor: status.bg + "e6",
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full inline-block animate-pulse"
                              style={{ backgroundColor: status.dot }}
                            />
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </Link>

                    {/* CONTENT */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5">
                      {/* Category tag */}
                      <span
                        className="text-[10px] font-black tracking-[0.2em] uppercase w-fit"
                        style={{ color: COLORS.primary }}
                      >
                        {project.category}
                      </span>

                      {/* Title + subtitle */}
                      <Link href={`/portfolio/${project.id}`} className="group/title block">
                        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 leading-tight group-hover/title:text-primary transition-colors">
                          {project.title}
                        </h2>
                        <p
                          className="text-sm font-semibold italic mt-1"
                          style={{ color: project.accent }}
                        >
                          {project.subtitle}
                        </p>
                      </Link>

                      {/* Description */}
                      <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full border border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-primary/40 hover:text-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 pt-2">
                        <Link
                          href={`/portfolio/${project.id}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[11px] font-black tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.25)]"
                          style={{
                            backgroundColor: COLORS.primary,
                            color: "#ffffff",
                          }}
                        >
                          Explore Case Study
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < portfolioProjects.length - 1 && (
                    <div className="border-b border-neutral-100 mt-16" />
                  )}
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section
          className="w-full py-28 relative overflow-hidden"
          style={{ backgroundColor: COLORS.darkBg }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
            style={{
              background: `radial-gradient(circle, ${COLORS.primary}15 0%, transparent 70%)`,
            }}
          />
          <div className="max-w-[800px] mx-auto px-8 text-center relative z-10">
            <span
              className="text-[10px] font-black tracking-[0.3em] uppercase mb-4 block"
              style={{ color: COLORS.accentLightBlue }}
            >
              START YOUR PROJECT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-white mb-4">
              Have A Project In Mind?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-medium mb-10">
              Let&apos;s transform your vision into a high-performance,
              production-grade digital product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-black tracking-widest uppercase rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)]"
                style={{ backgroundColor: COLORS.primary, color: "#ffffff" }}
              >
                Start A Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border text-xs font-black tracking-widest uppercase rounded-xl transition-all duration-300 text-white"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = COLORS.primary;
                  e.currentTarget.style.backgroundColor =
                    "rgba(79,70,229,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.02)";
                }}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
