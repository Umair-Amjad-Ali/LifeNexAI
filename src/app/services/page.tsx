"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GlowyWavesHero } from "@/components/ui/glowy-waves-hero";
import { servicesList, ServiceData } from "@/data/servicesData";
import { COLORS } from "@/constants/colors";
import {
  Brain,
  Globe,
  Smartphone,
  Cloud,
  Heart,
  Shield,
  CheckCircle,
  Activity,
  Cpu,
  Lock,
  Network,
  Terminal,
} from "lucide-react";

// Helper function to get Lucide Icons based on database names
const getIcon = (name: string, className: string = "w-6 h-6") => {
  switch (name) {
    case "brain":
      return <Brain className={className} />;
    case "globe":
      return <Globe className={className} />;
    case "smartphone":
      return <Smartphone className={className} />;
    case "cloud":
      return <Cloud className={className} />;
    case "heart":
      return <Heart className={className} />;
    case "shield":
      return <Shield className={className} />;
    default:
      return <Terminal className={className} />;
  }
};

// =========================================================
// CUSTOM SERVICE LIVE VISUALIZERS (FOR PREMIUM AESTHETIC)
// =========================================================

function AIVisualizer() {
  const [activeNode, setActiveNode] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between p-4 font-mono text-[10px] text-accent-teal">
      <div className="flex justify-between border-b border-neutral-800 pb-2">
        <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          NEURAL PIPELINE STATUS
        </span>
        <span className="text-white/40">LATENCY: 122ms</span>
      </div>

      {/* Node Graph */}
      <div className="flex items-center justify-around my-auto relative">
        <div className="absolute w-[80%] h-px bg-neutral-800 z-0" />
        {[0, 1, 2, 3].map((i) => {
          const names = ["EHR RAW", "VEC EMBED", "LLM INFER", "DIAG OUT"];
          const isActive = activeNode === i;
          return (
            <div key={i} className="flex flex-col items-center gap-2 z-10">
              <motion.div
                animate={{
                  scale: isActive ? 1.25 : 1,
                  borderColor: isActive ? COLORS.accentLightBlue : "#262626",
                }}
                className={`w-8 h-8 rounded-full border-2 bg-neutral-950 flex items-center justify-center text-[10px] text-white font-black`}
              >
                {i + 1}
              </motion.div>
              <span
                className={`text-[8px] tracking-tighter font-bold ${isActive ? "text-white" : "text-white/40"}`}
              >
                {names[i]}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between border-t border-neutral-800 pt-2 text-white/40 font-bold">
        <span>ACCURACY: 99.4%</span>
        <span>DEVICE: CUDA-NVIDIA</span>
      </div>
    </div>
  );
}

function WebVisualizer() {
  const [routes, setRoutes] = useState<string[]>([
    "GET /api/v1/auth 200",
    "GET /api/v1/patient/profile 200",
  ]);

  useEffect(() => {
    const list = [
      "GET /api/v1/clinical/telemetry 200",
      "POST /api/v1/fhir/Patient 201",
      "GET /api/v1/analytics/realtime 200",
      "PUT /api/v1/user/settings 200",
      "GET /_next/data/development 304",
    ];
    const interval = setInterval(() => {
      const randomRoute = list[Math.floor(Math.random() * list.length)];
      setRoutes((prev) => [randomRoute, prev[0]]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col p-4 font-mono text-[10px]">
      <div className="flex justify-between border-b border-neutral-800 pb-2 mb-2 text-indigo-400 font-bold">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-ping" />
          HTTP REQUEST STREAMER
        </span>
        <span className="text-white/40">SSR SPEED: 14ms</span>
      </div>

      <div className="flex-1 flex flex-col gap-1.5 justify-center">
        {routes.slice(0, 3).map((r, i) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={r + i}
            className={`p-2 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-between ${i === 0 ? "border-indigo-500/50 text-white" : "text-white/50"}`}
          >
            <span className="font-semibold">{r}</span>
            <span className="text-[8px] opacity-60">NOW</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MobileVisualizer() {
  const [syncProgress, setSyncProgress] = useState(100);
  useEffect(() => {
    const interval = setInterval(() => {
      setSyncProgress(0);
      let p = 0;
      const t = setInterval(() => {
        p += 20;
        setSyncProgress(p);
        if (p >= 100) clearInterval(t);
      }, 200);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex items-center justify-center p-4">
      {/* Phone mock shape */}
      <div className="w-[120px] h-[170px] border border-white/10 bg-neutral-950 rounded-2xl p-2 relative flex flex-col justify-between shadow-2xl">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-black rounded-full border border-white/5" />
        <div className="flex items-center justify-between text-[7px] font-mono text-white/50 mt-1.5 font-bold">
          <span>LifeNex Companion</span>
          <span>99%</span>
        </div>

        {/* Heart Beat Wave */}
        <div className="flex-1 flex flex-col justify-center items-center gap-1.5">
          <Activity className="w-6 h-6 text-red-500 animate-pulse" />
          <div className="w-16 h-1.5 bg-neutral-900 border border-white/5 rounded-full overflow-hidden">
            <motion.div
              style={{ width: `${syncProgress}%` }}
              className="h-full bg-emerald-500 transition-all duration-300"
            />
          </div>
          <span className="text-[6px] font-mono text-white/40 font-bold">
            {syncProgress < 100
              ? `SYNCING... ${syncProgress}%`
              : "OFFLINE CACHE READY"}
          </span>
        </div>

        <div className="w-full text-center text-[6px] font-mono text-white/30 border-t border-white/5 pt-1">
          BLE CONNECTED
        </div>
      </div>
    </div>
  );
}

function CloudVisualizer() {
  const [cores, setCores] = useState([76, 45, 88]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCores([
        Math.floor(Math.random() * 40) + 40,
        Math.floor(Math.random() * 45) + 30,
        Math.floor(Math.random() * 30) + 65,
      ]);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between p-4 font-mono text-[10px]">
      <div className="flex justify-between border-b border-neutral-800 pb-2 text-white/80">
        <span className="flex items-center gap-1.5 text-indigo-400 font-bold">
          <Cpu className="w-3.5 h-3.5" />
          K8S AUTO-SCALER LOGS
        </span>
        <span className="text-emerald-500 font-bold">HEALTHY</span>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-3">
        {cores.map((val, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-[8px] text-white/50 font-bold">
              <span>NODE-{idx + 1} (CPU LOAD)</span>
              <span>{val}%</span>
            </div>
            <div className="w-full h-2 bg-neutral-950 border border-neutral-800 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${val}%` }}
                className="h-full bg-indigo-500"
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HealthcareVisualizer() {
  return (
    <div className="relative w-full h-48 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col p-4 font-mono text-[9px] text-amber-500 overflow-y-auto no-scrollbar">
      <div className="flex justify-between border-b border-neutral-800 pb-1 mb-2 text-white/80 font-bold">
        <span className="flex items-center gap-1.5">
          <Network className="w-3.5 h-3.5 text-amber-500" />
          FHIR R4 JSON SCHEMA
        </span>
        <span className="text-amber-500">FORMAT: JSON</span>
      </div>
      <pre className="leading-tight text-white/60 font-semibold">
        {`{
  "resourceType": "Patient",
  "id": "lifenex-pt-0921",
  "active": true,
  "name": [{ "use": "official", "family": "Jenkins" }],
  "gender": "female",
  "birthDate": "1984-12-01",
  "telecom": [{
    "system": "email",
    "value": "sarah@jenkins.com"
  }],
  "security": "AES-256-CLIENT-KEY"
}`}
      </pre>
    </div>
  );
}

function ComplianceVisualizer() {
  const [logs, setLogs] = useState<string[]>([
    "SYS_SEC: IAM check verified (dr-sarah)",
    "CRYP_CORE: TLS 1.3 Handshake completed",
  ]);

  useEffect(() => {
    const list = [
      "AUDIT: Log entry encrypted & written",
      "KMS: Rotate key (ID: 029a) success",
      "SEC_SIEM: Zero vulnerability threats detected",
      "WAF: Blocked potential portscan event",
      "OAuth: Auth0 OIDC callback validated",
    ];
    const interval = setInterval(() => {
      const randLog = list[Math.floor(Math.random() * list.length)];
      setLogs((prev) => [randLog, prev[0]]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col p-4 font-mono text-[10px] text-indigo-400">
      <div className="flex justify-between border-b border-neutral-800 pb-2 mb-2 font-bold">
        <span className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-indigo-400" />
          SECURITY SHIELD AUDITING
        </span>
        <span className="text-emerald-500 font-bold">COMPLIANT</span>
      </div>

      <div className="flex-1 flex flex-col gap-1.5 justify-center">
        {logs.slice(0, 3).map((l, i) => (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            key={l + i}
            className={`p-1.5 border border-neutral-800 rounded flex items-center justify-between ${
              i === 0
                ? "bg-indigo-950/40 text-white border-indigo-500/20"
                : "text-white/40 bg-neutral-950"
            }`}
          >
            <span className="truncate font-semibold">{l}</span>
            <span className="text-[7px] text-white/30 shrink-0 font-bold">
              PASS
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Custom Technical Corner Bracket Frame Wrapper for visualizers
function TechFrame({
  children,
  isDarkTheme,
}: {
  children: React.ReactNode;
  isDarkTheme: boolean;
}) {
  const cornerColor = isDarkTheme ? "border-sky-400" : "border-indigo-600";
  const bracketColor = isDarkTheme ? "border-white/10" : "border-neutral-200";
  return (
    <div
      className={`relative p-2 rounded-xl border ${bracketColor} bg-neutral-950/30 backdrop-blur-xs`}
    >
      {/* Corner Brackets */}
      <div
        className={`absolute top-0 left-0 w-2.5 h-2.5 border-t border-l ${cornerColor} rounded-tl-[3px] z-20`}
      />
      <div
        className={`absolute top-0 right-0 w-2.5 h-2.5 border-t border-r ${cornerColor} rounded-tr-[3px] z-20`}
      />
      <div
        className={`absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l ${cornerColor} rounded-bl-[3px] z-20`}
      />
      <div
        className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r ${cornerColor} rounded-br-[3px] z-20`}
      />
      {children}
    </div>
  );
}

export default function ServicesPage() {
  // Map icon and visualizer according to the service
  const renderVisualizer = (id: string, isDarkTheme: boolean) => {
    let visualizerContent = null;
    switch (id) {
      case "ai-intelligence":
        visualizerContent = <AIVisualizer />;
        break;
      case "web-development":
        visualizerContent = <WebVisualizer />;
        break;
      case "mobile-development":
        visualizerContent = <MobileVisualizer />;
        break;
      case "cloud-devops":
        visualizerContent = <CloudVisualizer />;
        break;
      case "healthcare-integrations":
        visualizerContent = <HealthcareVisualizer />;
        break;
      case "compliance-security":
        visualizerContent = <ComplianceVisualizer />;
        break;
      default:
        visualizerContent = null;
    }
    if (!visualizerContent) return null;
    return <TechFrame isDarkTheme={isDarkTheme}>{visualizerContent}</TechFrame>;
  };

  return (
    <div
      className="relative min-h-screen text-white overflow-hidden selection:text-white"
      style={{ backgroundColor: COLORS.darkBg } as any}
    >


      {/* Desktop Main Layout */}
      <div className="relative flex flex-col min-h-screen w-full">
        {/* Content Area */}
        <main className="flex-1 flex flex-col w-full min-h-screen z-10 pt-20">
          {/* ===== GLOWY WAVES HERO ===== */}
          <GlowyWavesHero
            badge="✦ SERVICE PORTFOLIO ✦"
            title={
              <>
                What We <span style={{ color: COLORS.primary }}>Engineer.</span>
              </>
            }
            description="We build high-performance clinical applications, custom neural pipelines, and secure cloud ecosystems under tight regulatory frameworks."
            pills={[
              "AI & Machine Learning",
              "Web & Mobile Apps",
              "Cloud & DevOps",
              "Healthcare FHIR",
              "HIPAA Compliant",
              "24/7 Monitoring",
            ]}
            stats={[
              { label: "Core Disciplines", value: "6" },
              { label: "Technologies", value: "40+" },
              { label: "Uptime SLA", value: "99.99%" },
              { label: "Compliance", value: "HIPAA" },
            ]}
          />

          {/* ===== SEQUENTIAL SERVICES SECTIONS (MIXED DARK & LIGHT) ===== */}
          <div className="w-full flex flex-col">
            {servicesList.map((service, index) => {
              // 2nd (index 1) and 4th (index 3) services are Dark themed.
              // 1st (index 0), 3rd (index 2), 5th (index 4), and 6th (index 5) services are Light themed (bg-white).
              const isDarkTheme = index === 1 || index === 3;
              const isOdd = index % 2 === 0;

              const newLocal = "text-white/2";
              return (
                <section
                  key={service.id}
                  id={service.id}
                  className={`w-full py-28 border-t relative z-10 overflow-hidden ${
                    isDarkTheme
                      ? "bg-dark-bg text-white border-white/5"
                      : "bg-white text-neutral-900 border-neutral-200"
                  }`}
                >
                  {/* Grid pattern only on dark themed sections to keep spacing consistent with branding */}
                  {isDarkTheme && (
                    <div className="absolute inset-0 bg-grid-pattern opacity-45 pointer-events-none z-0" />
                  )}

                  {/* Unique monospaced background watermark */}
                  <div
                    className={`absolute select-none font-mono font-black text-[220px] pointer-events-none z-0 leading-none ${
                      isDarkTheme ? newLocal : "text-neutral-900/2"
                    }`}
                    style={{
                      left: isOdd ? "auto" : "5%",
                      right: isOdd ? "5%" : "auto",
                      top: "10%",
                    }}
                  >
                    {`0${index + 1}`}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10"
                  >
                    {/* Section colored accent bar */}
                    <div
                      className="w-10 h-1 rounded-full mb-8"
                      style={{
                        backgroundColor: isDarkTheme
                          ? COLORS.accentLightBlue
                          : COLORS.primary,
                      }}
                    />
                    <div
                      className={`flex flex-col gap-12 items-start ${
                        isOdd ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* COLUMN A: TEXT CONTENT AND METRICS */}
                      <div className="space-y-8 w-full lg:w-1/2 text-left">
                        <div>
                          {/* Subtitle Accent */}
                          <span
                            className="text-xs font-black tracking-[0.2em] uppercase block mb-3"
                            style={{
                              color: isDarkTheme
                                ? COLORS.accentLightBlue
                                : COLORS.primary,
                            }}
                          >
                            {`[0${index + 1}] // ${service.subtitle}`}
                          </span>
                          {/* Title */}
                          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wide">
                            {service.title}
                          </h2>
                          {/* Tagline */}
                          <p
                            className="text-sm sm:text-base mt-2 font-bold italic"
                            style={{
                              color: isDarkTheme
                                ? COLORS.accentLightBlue
                                : COLORS.primary,
                            }}
                          >
                            &ldquo;{service.tagline}&rdquo;
                          </p>
                          {/* Description */}
                          <p
                            className={`text-sm sm:text-base mt-3 leading-relaxed font-semibold ${
                              isDarkTheme
                                ? "text-neutral-300"
                                : "text-neutral-700"
                            }`}
                          >
                            {service.description}
                          </p>
                        </div>

                        {/* TECH STACK BADGES */}
                        <div>
                          <h4
                            className={`text-xs font-black uppercase tracking-wider mb-3 ${
                              isDarkTheme ? "text-white/50" : "text-neutral-400"
                            }`}
                          >
                            Core Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.techStack.map((tech) => (
                              <span
                                key={tech}
                                className={`px-3 py-1.5 text-xs font-bold tracking-wider rounded-full border transition-colors ${
                                  isDarkTheme
                                    ? "border-white/10 bg-neutral-900/60 text-neutral-300 hover:text-white hover:border-white/30"
                                    : "border-neutral-200 bg-neutral-100 text-neutral-700 hover:text-primary hover:border-primary/60"
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* METRICS GRID */}
                        <div>
                          <h4
                            className={`text-xs font-black uppercase tracking-wider mb-3 ${
                              isDarkTheme ? "text-white/50" : "text-neutral-400"
                            }`}
                          >
                            SLA & Performance Metrics
                          </h4>
                          <div className="grid grid-cols-3 gap-3">
                            {service.metrics.map((m) => (
                              <div
                                key={m.label}
                                className={`p-3 sm:p-4 border rounded-xl text-center ${
                                  isDarkTheme
                                    ? "bg-neutral-950/40 border-white/5"
                                    : "bg-neutral-50 border-neutral-200"
                                }`}
                              >
                                <span
                                  className="block text-base sm:text-xl font-black tracking-tight"
                                  style={{
                                    color: isDarkTheme
                                      ? COLORS.accentLightBlue
                                      : COLORS.primary,
                                  }}
                                >
                                  {m.value}
                                </span>
                                <span
                                  className={`block text-[8px] sm:text-[9px] mt-1.5 uppercase font-bold tracking-wider ${
                                    isDarkTheme
                                      ? "text-white/40"
                                      : "text-neutral-500"
                                  }`}
                                >
                                  {m.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* INQUIRE BUTTON CARD */}
                        <div>
                          <a
                            href={`/contact?service=${encodeURIComponent(service.title)}`}
                            className="flex w-full items-center justify-between p-6 rounded-2xl border transition-all duration-300 group hover:shadow-[0_0_25px_rgba(79,70,229,0.35)]"
                            style={{
                              borderColor: isDarkTheme
                                ? "rgba(255,255,255,0.08)"
                                : "rgba(0,0,0,0.08)",
                              backgroundColor: isDarkTheme
                                ? "rgba(255,255,255,0.02)"
                                : "rgba(0,0,0,0.015)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor =
                                COLORS.primary;
                              e.currentTarget.style.backgroundColor =
                                isDarkTheme
                                  ? "rgba(79,70,229,0.05)"
                                  : "rgba(79,70,229,0.03)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = isDarkTheme
                                ? "rgba(255,255,255,0.08)"
                                : "rgba(0,0,0,0.08)";
                              e.currentTarget.style.backgroundColor =
                                isDarkTheme
                                  ? "rgba(255,255,255,0.02)"
                                  : "rgba(0,0,0,0.015)";
                            }}
                          >
                            <div className="text-left space-y-1">
                              <span
                                className="text-[10px] font-black uppercase tracking-[0.2em] block"
                                style={{
                                  color: isDarkTheme
                                    ? COLORS.accentLightBlue
                                    : COLORS.primary,
                                }}
                              >
                                Deploy Service Pipeline
                              </span>
                              <h4
                                className={`text-base sm:text-lg font-black uppercase tracking-wide ${
                                  isDarkTheme
                                    ? "text-white"
                                    : "text-neutral-900"
                                }`}
                              >
                                Inquire About {service.title}
                              </h4>
                            </div>

                            {/* Glowing Arrow button wrapper */}
                            <div
                              className="h-12 w-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 shrink-0"
                              style={{
                                backgroundColor: COLORS.primary,
                                borderColor: COLORS.primary,
                                color: "#ffffff",
                                boxShadow: "0 0 15px rgba(79, 70, 229, 0.4)",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="space-y-6 w-full lg:w-1/2 text-left">
                        {/* Live Telemetry Visualizer wrapped in high-tech Frame */}
                        <div>
                          <h4
                            className={`text-xs font-black uppercase tracking-wider mb-3 ${
                              isDarkTheme ? "text-white/50" : "text-neutral-400"
                            }`}
                          >
                            Live Telemetry Simulation
                          </h4>
                          {renderVisualizer(service.id, isDarkTheme)}
                        </div>

                        {/* Standard Deliverables list */}
                        <div className="space-y-3.5">
                          <h4
                            className={`text-xs font-black uppercase tracking-wider ${
                              isDarkTheme ? "text-white/50" : "text-neutral-400"
                            }`}
                          >
                            Capabilities & Deliverables
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {service.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className={`p-5 border rounded-xl space-y-2 transition-all duration-300 ${
                                  isDarkTheme
                                    ? "bg-neutral-900/40 border-white/5 hover:border-white/15"
                                    : "bg-neutral-50 border-neutral-200 hover:border-primary/20 hover:shadow-md"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <CheckCircle
                                    className="w-3.5 h-3.5 shrink-0"
                                    style={{
                                      color: isDarkTheme
                                        ? COLORS.accentLightBlue
                                        : COLORS.primary,
                                    }}
                                  />
                                  <h5
                                    className={`text-xs sm:text-sm font-black uppercase tracking-wider ${
                                      isDarkTheme
                                        ? "text-white"
                                        : "text-neutral-800"
                                    }`}
                                  >
                                    {feature.title}
                                  </h5>
                                </div>
                                <p
                                  className={`text-[10px] sm:text-xs leading-relaxed font-semibold ${
                                    isDarkTheme
                                      ? "text-neutral-400"
                                      : "text-neutral-600"
                                  }`}
                                >
                                  {feature.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>
              );
            })}
          </div>

          {/* ===== CALL TO ACTION (DARK SECTION) ===== */}
          <section className="w-full bg-dark-bg py-28 relative border-t border-white/5 overflow-hidden z-10">
            {/* Subtle background grid and radial glow */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none z-0"
              style={{
                background: `radial-gradient(circle, ${COLORS.primary} 0%, transparent 70%)`,
              }}
            />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-4xl mx-auto rounded-3xl border border-white/5 bg-white/2 backdrop-blur-md p-10 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl"
              >
                {/* Tech micro pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: COLORS.accentLightBlue }}
                  />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                    Secure Collaboration Pipeline
                  </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.1] text-white">
                    Ready to build <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-primary">
                      something extraordinary?
                    </span>
                  </h2>
                  <p className="text-muted-gray text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
                    Partner with our engineers to deploy high-throughput,
                    secure, and regulatory-compliant clinical pipelines and
                    applications.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-black tracking-widest text-xs rounded-xl hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all cursor-pointer uppercase border border-primary/20 text-center"
                  >
                    Book A Consultation
                  </a>
                  <a
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black tracking-widest text-xs rounded-xl border border-white/10 transition-all text-center uppercase"
                  >
                    Contact Our Team
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
