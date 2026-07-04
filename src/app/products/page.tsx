"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import {
  ArrowRight,
  Cpu,
  Smartphone,
  LayoutDashboard,
  Zap,
  Shield,
  Globe,
  Sparkles,
  ShieldCheck,
  Radar,
  Layers,
  ChevronDown,
} from "lucide-react";

const products = [
  {
    id: "lifenex-core",
    title: "LifeNex Core",
    tagline: "AI Medical Middleware Engine",
    category: "ENTERPRISE ENGINE",
    description:
      "An intelligent medical middleware that hooks custom diagnosis models directly into EHR pipelines, with compliant HL7/FHIR interfaces. Built for hospital-scale deployments with zero-downtime model swaps.",
    icon: Cpu,
    features: [
      {
        title: "HL7/FHIR Compliance",
        description: "Native support for healthcare interoperability standards",
      },
      {
        title: "Hot Model Swap",
        description: "Deploy updated ML models without service interruption",
      },
      {
        title: "Audit Trail",
        description: "Complete decision logging for regulatory compliance",
      },
      {
        title: "Multi-Tenant",
        description: "Isolated pipelines per hospital department or client",
      },
    ],
    metrics: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "<50ms", label: "Inference" },
      { value: "HIPAA", label: "Certified" },
    ],
    accent: COLORS.primary,
  },
  {
    id: "patient-companion",
    title: "Patient Companion",
    tagline: "Smart Remote Monitoring Suite",
    category: "MOBILE PLATFORM",
    description:
      "A pre-built mobile app framework for remote patient monitoring, incorporating smart medicine schedule alerts, telemedicine portals, and wearable device integrations for continuous health tracking.",
    icon: Smartphone,
    features: [
      {
        title: "Smart Scheduling",
        description: "AI-driven medication reminders with adaptive timing",
      },
      {
        title: "Wearable Sync",
        description: "Apple Watch, Fitbit, and custom IoT device integration",
      },
      {
        title: "Telehealth Portal",
        description: "Built-in video consultations with session recording",
      },
      {
        title: "Family Dashboard",
        description: "Caregiver views with permission-based health sharing",
      },
    ],
    metrics: [
      { value: "50K+", label: "Users" },
      { value: "4.8★", label: "App Rating" },
      { value: "12+", label: "Integrations" },
    ],
    accent: COLORS.accentLightBlue,
  },
  {
    id: "clinical-telemetry",
    title: "Clinical Telemetry Panel",
    tagline: "Real-Time Intelligence Dashboard",
    category: "ANALYTICS PLATFORM",
    description:
      "A high-performance Next.js dashboard template customized for real-time visualization of clinical telemetry and machine learning logs. White-label ready with customizable widget architecture.",
    icon: LayoutDashboard,
    features: [
      {
        title: "Real-Time Streams",
        description: "WebSocket-powered live data feeds at 60fps refresh",
      },
      {
        title: "Widget Builder",
        description: "Drag-and-drop dashboard composition for any metric",
      },
      {
        title: "Export Engine",
        description: "Automated PDF/CSV reporting with scheduling",
      },
      {
        title: "White-Label Ready",
        description: "Complete theming system for client branding",
      },
    ],
    metrics: [
      { value: "60fps", label: "Render" },
      { value: "1M+", label: "Data Points" },
      { value: "< 2s", label: "Load Time" },
    ],
    accent: "#10b981",
  },
];

// Cycled per feature card — purely a visual accent, tied to each product's own color.
const featureIcons = [Sparkles, ShieldCheck, Radar, Layers];

export default function ProductsPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex(
              (el) => el === entry.target,
            );
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToProduct = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="relative min-h-screen text-white overflow-hidden selection:text-white"
      style={{ backgroundColor: COLORS.darkBg }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none z-0" />



      {/* Persistent index rail — doubles as scroll progress + jump nav */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-5">
        {products.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => scrollToProduct(idx)}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-full"
            aria-label={`Jump to ${p.title}`}
          >
            <span
              className={`text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeIndex === idx
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2 group-hover:opacity-60 group-hover:translate-x-0"
              }`}
              style={{ color: activeIndex === idx ? p.accent : "#ffffff" }}
            >
              {p.title}
            </span>
            <span
              className="rounded-full transition-all duration-300"
              style={{
                width: activeIndex === idx ? 10 : 6,
                height: activeIndex === idx ? 10 : 6,
                backgroundColor:
                  activeIndex === idx ? p.accent : "rgba(255,255,255,0.25)",
                boxShadow:
                  activeIndex === idx ? `0 0 12px ${p.accent}` : "none",
              }}
            />
          </button>
        ))}
      </div>

      <div className="relative flex flex-col min-h-screen w-full pt-20">
        <main className="flex-1 flex flex-col w-full z-10">
          {/* HERO SECTION */}
          <section className="relative py-24 sm:py-28 px-8 sm:px-12 lg:px-16 max-w-[1200px] mx-auto w-full overflow-hidden">
            {/* Ambient drift — the one place on the page motion runs continuously */}
            <motion.div
              className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full pointer-events-none blur-3xl"
              style={{
                background: `radial-gradient(circle, ${COLORS.primary}22 0%, transparent 70%)`,
              }}
              animate={{ y: [0, 20, 0], x: [0, 14, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-8 right-0 w-[300px] h-[300px] rounded-full pointer-events-none blur-3xl"
              style={{
                background: `radial-gradient(circle, ${COLORS.accentLightBlue}1f 0%, transparent 70%)`,
              }}
              animate={{ y: [0, -14, 0], x: [0, -10, 0] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="h-px w-8"
                  style={{ backgroundColor: COLORS.accentLightBlue }}
                />
                <span
                  className="text-[10px] font-black tracking-[0.25em] uppercase"
                  style={{ color: COLORS.accentLightBlue }}
                >
                  Ready-to-deploy solutions
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase">
                PROPRIETARY AI{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accentLightBlue})`,
                  }}
                >
                  PRODUCTS.
                </span>
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-5 leading-relaxed font-medium">
                Our suite of pre-engineered, highly scalable healthcare
                technology products built to fast-track your clinical AI
                integrations. Each product is battle-tested and
                deployment-ready.
              </p>

              {/* Capability pills */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { icon: Zap, label: "Instant Deploy" },
                  { icon: Shield, label: "HIPAA Compliant" },
                  { icon: Globe, label: "Global Scale" },
                ].map((pill) => (
                  <div
                    key={pill.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/3 text-xs font-bold tracking-wider text-neutral-300 transition-all duration-300 hover:border-white/25 hover:-translate-y-0.5"
                  >
                    <pill.icon
                      className="w-3.5 h-3.5"
                      style={{ color: COLORS.primary }}
                    />
                    {pill.label}
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollToProduct(0)}
                className="flex items-center gap-2 mt-14 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-300 transition-colors duration-300 focus:outline-none"
              >
                Explore the suite
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.span>
              </button>
            </motion.div>
          </section>

          {/* PRODUCT SECTIONS */}
          {products.map((product, index) => {
            const isDark = index % 2 === 0;
            const isOdd = index % 2 !== 0;
            const isFlagship = index === 0;
            const ProductIcon = product.icon;

            return (
              <section
                key={product.id}
                id={product.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="w-full py-24 sm:py-28 relative overflow-hidden border-t"
                style={{
                  backgroundColor: isDark ? COLORS.darkBg : "#ffffff",
                  borderColor: isDark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.06)",
                }}
              >
                {/* Signature mark — each product rendered as its own oversized, near-invisible glyph */}
                <ProductIcon
                  className="absolute pointer-events-none z-0"
                  style={{
                    color: product.accent,
                    opacity: isDark ? 0.05 : 0.045,
                    width: 300,
                    height: 300,
                    right: isOdd ? "auto" : "-3%",
                    left: isOdd ? "-3%" : "auto",
                    top: "8%",
                    transform: "rotate(-8deg)",
                  }}
                  strokeWidth={0.6}
                />

                {/* Static accent wash — no ambient motion here; the hero already owns that beat */}
                <div
                  className="absolute w-[420px] h-[420px] rounded-full pointer-events-none blur-3xl z-0"
                  style={{
                    background: `radial-gradient(circle, ${product.accent}10 0%, transparent 70%)`,
                    top: "18%",
                    left: isOdd ? "auto" : "8%",
                    right: isOdd ? "8%" : "auto",
                  }}
                />

                <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div
                      className={`flex flex-col gap-12 lg:gap-16 items-start ${
                        isOdd ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* LEFT COLUMN: Description + Metrics */}
                      <div
                        className={`space-y-8 w-full text-left ${isFlagship ? "lg:w-3/5" : "lg:w-1/2"}`}
                      >
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className="text-[10px] font-mono font-bold"
                              style={{ color: product.accent }}
                            >
                              P.0{index + 1}
                            </span>
                            <span
                              className="h-px flex-1 max-w-[36px]"
                              style={{ backgroundColor: `${product.accent}50` }}
                            />
                            <span
                              className="text-[10px] font-black tracking-[0.2em] uppercase"
                              style={{
                                color: isDark
                                  ? "rgba(255,255,255,0.4)"
                                  : "rgba(0,0,0,0.4)",
                              }}
                            >
                              {product.category}
                            </span>
                            {isFlagship && (
                              <span
                                className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                                style={{
                                  backgroundColor: `${product.accent}18`,
                                  color: product.accent,
                                }}
                              >
                                Flagship
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-4 mb-4">
                            <div
                              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 hover:rotate-6"
                              style={{
                                backgroundColor: `${product.accent}15`,
                                color: product.accent,
                                boxShadow: `0 0 0 1px ${product.accent}20 inset`,
                              }}
                            >
                              <ProductIcon className="w-7 h-7" />
                            </div>
                            <h2
                              className={`text-3xl sm:text-4xl lg:text-[2.6rem] font-black uppercase tracking-wide leading-[1.05] ${
                                isDark ? "text-white" : "text-neutral-900"
                              }`}
                            >
                              {product.title}
                            </h2>
                          </div>

                          <div
                            className="pl-4 border-l-2 mb-4"
                            style={{ borderColor: product.accent }}
                          >
                            <p
                              className="text-sm sm:text-base font-bold italic"
                              style={{ color: product.accent }}
                            >
                              {product.tagline}
                            </p>
                          </div>

                          <p
                            className={`text-sm sm:text-base leading-relaxed font-semibold ${
                              isDark ? "text-neutral-300" : "text-neutral-700"
                            }`}
                          >
                            {product.description}
                          </p>
                        </div>

                        {/* Metrics — a single stat strip instead of three boxed tiles */}
                        <div
                          className={`flex rounded-2xl border overflow-hidden divide-x ${
                            isDark
                              ? "bg-neutral-950/40 border-white/5 divide-white/5"
                              : "bg-neutral-50 border-neutral-200 divide-neutral-200"
                          }`}
                        >
                          {product.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="flex-1 px-3 sm:px-4 py-4 text-center"
                            >
                              <span
                                className="block text-lg sm:text-2xl font-black tracking-tight"
                                style={{
                                  color: isDark
                                    ? COLORS.accentLightBlue
                                    : COLORS.primary,
                                }}
                              >
                                {m.value}
                              </span>
                              <span
                                className={`block text-[8px] sm:text-[9px] mt-1.5 uppercase font-bold tracking-wider ${
                                  isDark ? "text-white/40" : "text-neutral-500"
                                }`}
                              >
                                {m.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Card */}
                        <a
                          href={`/contact?service=${encodeURIComponent(product.title)}`}
                          className="relative flex w-full items-center justify-between p-5 rounded-2xl border overflow-hidden transition-all duration-300 group"
                          style={{
                            borderColor: isDark
                              ? "rgba(255,255,255,0.08)"
                              : "rgba(0,0,0,0.08)",
                            backgroundColor: isDark
                              ? "rgba(255,255,255,0.02)"
                              : "rgba(0,0,0,0.015)",
                          }}
                        >
                          <div
                            className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                            style={{
                              background: `linear-gradient(90deg, ${product.accent}12, transparent)`,
                            }}
                          />
                          <div className="text-left space-y-1 relative z-10">
                            <span
                              className="text-[10px] font-black uppercase tracking-[0.2em] block"
                              style={{
                                color: isDark
                                  ? COLORS.accentLightBlue
                                  : COLORS.primary,
                              }}
                            >
                              Request Product Demo
                            </span>
                            <h4
                              className={`text-sm sm:text-base font-black uppercase tracking-wide ${
                                isDark ? "text-white" : "text-neutral-900"
                              }`}
                            >
                              Deploy {product.title}
                            </h4>
                          </div>
                          <div
                            className="h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0 relative z-10"
                            style={{
                              backgroundColor: product.accent,
                              color: "#ffffff",
                              boxShadow: `0 0 16px ${product.accent}55`,
                            }}
                          >
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                          </div>
                        </a>
                      </div>

                      {/* RIGHT COLUMN: Features */}
                      <div
                        className={`space-y-4 w-full text-left ${isFlagship ? "lg:w-2/5" : "lg:w-1/2"}`}
                      >
                        <h4
                          className={`text-xs font-black uppercase tracking-wider mb-2 ${
                            isDark ? "text-white/50" : "text-neutral-400"
                          }`}
                        >
                          Product Capabilities
                        </h4>
                        <div
                          className={`grid grid-cols-1 ${isFlagship ? "" : "sm:grid-cols-2"} gap-3.5`}
                        >
                          {product.features.map((feature, idx) => {
                            const FeatureIcon =
                              featureIcons[idx % featureIcons.length];
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.4,
                                  delay: idx * 0.08,
                                }}
                                className={`relative p-5 border rounded-xl space-y-2 transition-all duration-300 ${
                                  isDark
                                    ? "bg-neutral-900/40 border-white/5 hover:border-white/15 hover:-translate-y-0.5"
                                    : "bg-neutral-50 border-neutral-200 hover:shadow-md hover:-translate-y-0.5"
                                }`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <FeatureIcon
                                    className="w-4 h-4 shrink-0"
                                    style={{ color: product.accent }}
                                  />
                                  <h5
                                    className={`text-xs sm:text-sm font-black uppercase tracking-wider ${
                                      isDark ? "text-white" : "text-neutral-800"
                                    }`}
                                  >
                                    {feature.title}
                                  </h5>
                                </div>
                                <p
                                  className={`text-[10px] sm:text-xs leading-relaxed font-semibold ${
                                    isDark
                                      ? "text-neutral-400"
                                      : "text-neutral-600"
                                  }`}
                                >
                                  {feature.description}
                                </p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            );
          })}

          {/* BOTTOM CTA */}
          <section
            className="w-full py-28 relative border-t overflow-hidden z-10"
            style={{
              backgroundColor: COLORS.darkBg,
              borderColor: "rgba(255,255,255,0.05)",
            }}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
              style={{
                background: `radial-gradient(circle, ${COLORS.primary}15 0%, transparent 70%)`,
              }}
            />
            <div className="max-w-[800px] mx-auto px-8 text-center relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span
                  className="h-px w-8"
                  style={{ backgroundColor: COLORS.accentLightBlue }}
                />
                <span
                  className="text-[10px] font-black tracking-[0.3em] uppercase"
                  style={{ color: COLORS.accentLightBlue }}
                >
                  Enterprise Licensing
                </span>
                <span
                  className="h-px w-8"
                  style={{ backgroundColor: COLORS.accentLightBlue }}
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-white mb-4">
                Ready To Scale?
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-medium mb-10">
                All products include enterprise licensing, dedicated support,
                and custom integration services. Contact us for volume pricing
                and white-label options.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-black tracking-widest uppercase rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] hover:-translate-y-0.5"
                style={{
                  backgroundColor: COLORS.primary,
                  color: "#ffffff",
                }}
              >
                Request Enterprise Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
