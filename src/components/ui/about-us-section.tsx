"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Activity,
  Layers,
  PenTool,
  Settings,
  Ruler,
  Cpu,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { COLORS } from "@/constants/colors";

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: <Activity className="w-5 h-5" />,
      secondaryIcon: <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-indigo-400" />,
      title: "AI Systems",
      description:
        "Architecting customized deep learning models, clinical diagnostic telemetry, and real-time medical stream processing systems.",
      position: "left",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      secondaryIcon: <CheckCircle className="w-3 h-3 absolute -top-1 -right-1 text-indigo-400" />,
      title: "Cloud Core",
      description:
        "Deploying high-availability secure FHIR databases, containerized microservice APIs, and encrypted transfer channels.",
      position: "left",
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      secondaryIcon: <Star className="w-3 h-3 absolute -top-1 -right-1 text-indigo-400" />,
      title: "UI/UX Design",
      description:
        "Crafting intuitive patient and practitioner dashboards optimized for visual hierarchy, usability, and lightning speeds.",
      position: "left",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      secondaryIcon: <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-indigo-400" />,
      title: "Modern Web",
      description:
        "Developing responsive web platforms, telemetry panels, and real-time clinical monitoring interfaces utilizing React and Next.js.",
      position: "right",
    },
    {
      icon: <Ruler className="w-5 h-5" />,
      secondaryIcon: <CheckCircle className="w-3 h-3 absolute -top-1 -right-1 text-indigo-400" />,
      title: "Agile Sprints",
      description:
        "Rigorous software blueprinting and rapid iteration cycles ensuring projects meet deadlines and regulatory requirements.",
      position: "right",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      secondaryIcon: <Star className="w-3 h-3 absolute -top-1 -right-1 text-indigo-400" />,
      title: "Execution",
      description:
        "Bringing platforms to life with clean TypeScript codebase, test-driven protocols, and automated deployment pipelines.",
      position: "right",
    },
  ];

  const stats = [
    { icon: <Award />, value: 150, label: "Projects Completed", suffix: "+" },
    { icon: <Users />, value: 1200, label: "Happy Clients", suffix: "+" },
    { icon: <Calendar />, value: 12, label: "Years Experience", suffix: "" },
    { icon: <TrendingUp />, value: 98, label: "Satisfaction Rate", suffix: "%" },
  ];

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-gradient-to-b from-slate-50 to-white text-slate-900 overflow-hidden relative border-t border-slate-200"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full"
        style={{ backgroundColor: COLORS.primary, opacity: 0.3 }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full"
        style={{ backgroundColor: COLORS.primary, opacity: 0.3 }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-[1200px] relative z-10 px-4 sm:px-8 lg:px-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="font-black text-[10px] tracking-[0.25em] mb-2 flex items-center gap-2 uppercase"
            style={{ color: COLORS.primary }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            DISCOVER OUR STORY
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-center uppercase tracking-tight font-sans">About Us</h2>
          <motion.div
            className="w-24 h-1 mt-4"
            style={{ backgroundColor: COLORS.primary }}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-16 text-slate-600 font-medium" variants={itemVariants}>
          We are a passionate team of developers, designers, and systems architects dedicated to engineering beautiful, functional platforms that inspire and elevate everyday operations.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-xl overflow-hidden shadow-xl border border-slate-200"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
                  alt="Tech Wireframe & UI Design"
                  className="w-full h-full object-cover aspect-3/4"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="bg-white text-slate-900 px-5 py-2.5 rounded-lg flex items-center gap-2 text-xs font-bold tracking-wider uppercase border border-slate-200 shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Portfolio <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 rounded-xl -m-3 z-[-1]"
                style={{ borderColor: `${COLORS.primary}20` }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-indigo-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-indigo-500/10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>

              {/* Additional decorative elements */}
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS.primary }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                style={{ backgroundColor: COLORS.primary }}
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-slate-900 text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold tracking-tight mb-2 uppercase">Ready to transform your operations?</h3>
            <p className="text-slate-300 text-sm font-medium">Let's create high-performance systems together.</p>
          </div>
          <motion.button
            className="hover:bg-opacity-95 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-bold text-xs tracking-wider uppercase"
            style={{ backgroundColor: COLORS.primary }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  variants: any;
  delay: number;
  direction: "left" | "right";
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-2.5 mb-2"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="bg-indigo-500/10 p-2 rounded-md transition-colors duration-300 group-hover:bg-indigo-500/20 relative"
          style={{ color: COLORS.primary }}
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors duration-300 uppercase">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-slate-600 font-medium leading-relaxed pl-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-2 pl-10 flex items-center text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ color: COLORS.primary }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  );
}

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <motion.div
      className="bg-white/50 border border-slate-200 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white hover:border-primary/20 hover:shadow-md transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-indigo-50 transition-colors duration-300"
        style={{ color: COLORS.primary }}
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-black text-slate-900 flex items-center tracking-tight">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-slate-600 font-semibold text-xs mt-1 uppercase tracking-wider">{label}</p>
      <motion.div 
        className="w-10 h-0.5 mt-3 group-hover:w-16 transition-all duration-300"
        style={{ backgroundColor: COLORS.primary }}
      />
    </motion.div>
  );
}
