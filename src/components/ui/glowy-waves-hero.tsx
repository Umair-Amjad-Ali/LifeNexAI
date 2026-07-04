"use client";

import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const statsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
  },
};

interface HeroStat {
  label: string;
  value: string;
}

interface GlowyWavesHeroProps {
  badge?: string;
  title: React.ReactNode;
  description: string;
  stats?: HeroStat[];
  pills?: string[];
  children?: React.ReactNode;
}

export function GlowyWavesHero({
  badge = "✦ SERVICE PORTFOLIO ✦",
  title,
  description,
  stats = [],
  pills = [],
  children,
}: GlowyWavesHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let animationId: number;
    let time = 0;

    // Use the project's actual brand colors (reduced to 3 waves for better rendering performance)
    const wavePalette: WaveConfig[] = [
      { offset: 0, amplitude: 60, frequency: 0.003, color: "rgba(79, 70, 229, 0.7)", opacity: 0.4 },
      { offset: Math.PI / 2, amplitude: 75, frequency: 0.0026, color: "rgba(56, 189, 248, 0.6)", opacity: 0.35 },
      { offset: Math.PI, amplitude: 50, frequency: 0.0034, color: "rgba(79, 70, 229, 0.45)", opacity: 0.3 },
    ];

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouseInfluence = prefersReducedMotion ? 10 : 70;
    const influenceRadius = prefersReducedMotion ? 160 : 320;
    const smoothing = prefersReducedMotion ? 0.04 : 0.1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    const recenterMouse = () => {
      const p = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseRef.current = p;
      targetMouseRef.current = p;
    };

    const handleResize = () => { resizeCanvas(); recenterMouse(); };
    const handleMouseMove = (e: MouseEvent) => { targetMouseRef.current = { x: e.clientX, y: e.clientY }; };
    const handleMouseLeave = () => { recenterMouse(); };

    resizeCanvas();
    recenterMouse();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const drawWave = (wave: WaveConfig) => {
      ctx.save();
      ctx.beginPath();
      // Increased step size from 4 to 12 for 3x fewer calculations per frame
      for (let x = 0; x <= canvas.width; x += 12) {
        const dx = x - mouseRef.current.x;
        const dy = canvas.height / 2 - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / influenceRadius);
        const mouseEffect = influence * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset);
        const y =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45) +
          mouseEffect;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineWidth = 2;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      // Removed heavy shadow blur filters to eliminate GPU rendering bottlenecks
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      time += 1;
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing;

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#060606");
      gradient.addColorStop(1, "#0a0c1b");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      wavePalette.forEach(drawWave);
      animationId = window.requestAnimationFrame(animate);
    };

    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-[85vh] w-full items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      {/* Soft radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-accent-teal/[0.05] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 py-24 text-center sm:px-12 lg:px-16">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-primary backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {badge}
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] uppercase text-white select-none"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-sm sm:text-base text-neutral-400 leading-relaxed font-semibold"
          >
            {description}
          </motion.p>

          {/* Optional action buttons */}
          {children && (
            <motion.div variants={itemVariants} className="mb-10">
              {children}
            </motion.div>
          )}

          {/* Pills */}
          {pills.length > 0 && (
            <motion.ul
              variants={itemVariants}
              className="mb-10 flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold"
            >
              {pills.map((pill) => (
                <li key={pill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  {pill}
                </li>
              ))}
            </motion.ul>
          )}

          {/* Stats Grid */}
          {stats.length > 0 && (
            <motion.div
              variants={statsVariants}
              className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={itemVariants} className="space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">{stat.label}</div>
                  <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
