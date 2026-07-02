"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import QuoteModal from "@/components/QuoteModal";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";

export default function ServicesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const services = [
    {
      title: "AI CORE INTEGRATION",
      desc: "Deploy bespoke large language models, computer vision APIs, and custom neural networks natively inside your clinical systems.",
      accent: "primary",
    },
    {
      title: "FLUTTER & NATIVE MOBILE APPS",
      desc: "Craft high-performance, responsive iOS and Android applications with offline-first synchronisation and smart sensor logging.",
      accent: "teal",
    },
    {
      title: "ENTERPRISE WEB PLATFORMS",
      desc: "Design secure, cloud-native administration panels, real-time telemetry dashboards, and client-facing web portals.",
      accent: "white",
    },
  ];

  return (
    <div 
      className="relative min-h-screen text-white overflow-hidden selection:text-white"
      style={{ backgroundColor: COLORS.darkBg, selectionColor: COLORS.primary } as any}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none z-0" />

      {/* Shared Navigation Navbar Component */}
      <Navbar setIsQuoteModalOpen={setIsQuoteModalOpen} />

      {/* Desktop Main Layout */}
      <div className="relative flex flex-col min-h-screen w-full pt-20">
        {/* Content Area */}
        <main className="flex-1 flex flex-col w-full min-h-screen z-10">
          <section className="flex-1 flex flex-col justify-center py-20 px-8 sm:px-12 lg:px-16 max-w-[1200px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span 
                className="text-[10px] font-bold tracking-[0.25em] uppercase mb-3 block"
                style={{ color: COLORS.primary }}
              >
                WHAT WE DO
              </span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none uppercase">
                OUR AI & MOBILE <br />
                <span className="bg-linear-to-r from-white via-white to-primary bg-clip-text text-transparent">
                  SERVICES.
                </span>
              </h1>
              <p className="text-muted-gray text-sm max-w-xl mt-4 leading-relaxed">
                We design and engineer elite digital solutions that combine
                advanced artificial intelligence with seamless, intuitive
                frontend experiences.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-dark-card border border-dark-border p-8 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      backgroundColor:
                        service.accent === "primary"
                          ? COLORS.primary
                          : service.accent === "teal"
                            ? COLORS.accentLightBlue
                            : COLORS.secondary,
                    }}
                  />
                  <h3 className="text-lg font-bold tracking-wider mb-4 text-white uppercase">
                    {service.title}
                  </h3>
                  <p className="text-muted-gray text-xs sm:text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 items-center"
            >
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-8 py-4 bg-primary text-white font-bold tracking-widest text-xs rounded-lg hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all cursor-pointer uppercase border border-primary/20"
              >
                REQUEST AN ESTIMATE
              </button>
            </motion.div>
          </section>
        </main>
      </div>

      {/* Quote Modal Component */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
