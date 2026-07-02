"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import QuoteModal from "@/components/QuoteModal";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";

export default function ProductsPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const products = [
    {
      title: "LIFENEX LABS CORE",
      desc: "An intelligent medical middleware that hooks custom diagnosis models directly into EHR pipelines, with compliant HL7/FHIR interfaces.",
      accent: "primary",
    },
    {
      title: "PATIENT COMPANION APP",
      desc: "Our pre-built mobile app framework for remote patient monitoring, incorporating smart medicine schedule alerts and telemedicine portals.",
      accent: "teal",
    },
    {
      title: "CLINICAL TELEMETRY PANEL",
      desc: "A high-performance Next.js dashboard template customized for real-time visualization of clinical telemetry and machine learning logs.",
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
                style={{ color: COLORS.accentLightBlue }}
              >
                READY SOLUTIONS
              </span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none uppercase">
                PROPRIETARY AI <br />
                <span className="bg-linear-to-r from-white via-white to-accent-teal bg-clip-text text-transparent">
                  PRODUCTS.
                </span>
              </h1>
              <p className="text-muted-gray text-sm max-w-xl mt-4 leading-relaxed">
                Discover our suite of pre-engineered, highly scalable healthcare
                technology products built to fast-track your clinical AI
                integrations.
              </p>
            </motion.div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              {products.map((product, idx) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-dark-card border border-dark-border p-8 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      backgroundColor:
                        product.accent === "primary"
                          ? COLORS.primary
                          : product.accent === "teal"
                            ? COLORS.accentLightBlue
                            : COLORS.secondary,
                    }}
                  />
                  <h3 className="text-lg font-bold tracking-wider mb-4 text-white uppercase">
                    {product.title}
                  </h3>
                  <p className="text-muted-gray text-xs sm:text-sm leading-relaxed">
                    {product.desc}
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
