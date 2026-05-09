"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

const GridPattern = ({ offsetX, offsetY }: { offsetX: any; offsetY: any }) => (
  <svg className="w-full h-full">
    <defs>
      <motion.pattern
        id="grid-pattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
        x={offsetX}
        y={offsetY}
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-zinc-900"
        />
      </motion.pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.3) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.3) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      {/* Base dim grid */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Cursor-reveal bright grid */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Orange glow — top right */}
      <div className="absolute right-[-5%] top-[-10%] w-[45%] h-[45%] rounded-full bg-orange-400/20 blur-[120px] pointer-events-none z-0" />
      {/* Warm secondary glow */}
      <div className="absolute right-[25%] top-[15%] w-[20%] h-[20%] rounded-full bg-orange-300/15 blur-[80px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest uppercase text-zinc-400 mb-8">
            Available for select projects
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8 text-zinc-900">
            I build software
            <br />
            that{" "}
            <span style={{ color: "#FF5500" }}>helps people.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-500 leading-relaxed max-w-2xl mb-12">
            Full-stack developer working across JavaScript, Python, and whatever
            the job demands. I lean into AI tooling — not as a gimmick, but
            to move faster and build smarter. By day, enterprise pension systems.
            By night, SaaS products and open tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:ken@kenb.dev"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: "#FF5500" }}
            >
              Get in touch
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-sm font-semibold border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition-all"
            >
              See my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
