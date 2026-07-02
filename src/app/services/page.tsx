"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import QuoteModal from "@/components/QuoteModal";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const services = [
    {
      title: "AI CORE INTEGRATION",
      desc: "Deploy bespoke large language models, computer vision APIs, and custom neural networks natively inside your clinical systems.",
      accent: "accent-green",
    },
    {
      title: "FLUTTER & NATIVE MOBILE APPS",
      desc: "Craft high-performance, responsive iOS and Android applications with offline-first synchronisation and smart sensor logging.",
      accent: "accent-teal",
    },
    {
      title: "ENTERPRISE WEB PLATFORMS",
      desc: "Design secure, cloud-native administration panels, real-time telemetry dashboards, and client-facing web portals.",
      accent: "a78bfa",
    },
  ];

  return (
    <div className="relative min-h-screen bg-dark-bg text-white overflow-hidden selection:bg-accent-green selection:text-black">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none z-0" />

      {/* Shared Navigation Sidebar Component */}
      <Sidebar setIsQuoteModalOpen={setIsQuoteModalOpen} />

      {/* Desktop Main Layout */}
      <div className="relative flex flex-col md:flex-row min-h-screen w-full">
        {/* Right Content Area */}
        <main className="flex-1 flex flex-col md:pl-16 lg:pl-20 w-full min-h-screen z-10">
          <section className="flex-1 flex flex-col justify-center py-20 px-8 sm:px-16 md:px-12 lg:px-20 max-w-[1400px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-[10px] font-bold tracking-[0.25em] text-accent-green uppercase mb-3 block">
                WHAT WE DO
              </span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none uppercase">
                OUR AI & MOBILE <br />
                <span className="bg-linear-to-r from-white via-white to-accent-green bg-clip-text text-transparent">
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
                  className="bg-dark-card border border-dark-border p-8 rounded-2xl relative overflow-hidden group hover:border-accent-green/30 transition-all duration-300"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 ${
                      service.accent === "accent-green"
                        ? "bg-accent-green"
                        : service.accent === "accent-teal"
                          ? "bg-accent-teal"
                          : "bg-[#a78bfa]"
                    }`}
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
                className="px-8 py-4 bg-accent-green text-black font-bold tracking-widest text-xs rounded-lg hover:shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all cursor-pointer uppercase"
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
