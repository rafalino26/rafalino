"use client";

import { motion } from "framer-motion";

type Props = {
  yOffset?: number;
};

export default function HeroRings({ yOffset = 0 }: Props) {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ transform: `translateY(${yOffset}px)` }}
    >
      <svg
        // 1. UPDATED VIEWBOX: Made width 1400 (was 1000) to fit wider rings
        // x starts at -700 instead of -500
        className="h-[150vh] w-[150vh] min-h-[800px] min-w-[800px] mix-blend-screen"
        viewBox="-700 -500 1400 1000"
      >
        <defs>
          <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0)" />
            <stop offset="40%" stopColor="rgba(167, 139, 250, 0.5)" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="rgba(167, 139, 250, 0.5)" />
            <stop offset="100%" stopColor="rgba(124, 58, 237, 0)" />
          </linearGradient>

          <filter id="intense-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="coloredBlur" />
            <feGaussianBlur stdDeviation="4" result="softBlur" in="SourceGraphic" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="softBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- RING 1: Outer Giant (Much Wider) --- */}
        {/* Changed rx from 450 -> 650 */}
        <motion.ellipse
          cx="0" cy="0" rx="650" ry="140"
          fill="none"
          stroke="url(#neon-gradient)"
          strokeWidth="4"
          filter="url(#intense-glow)"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "center" }}
        />

        {/* --- RING 2: Middle Reverse --- */}
        {/* Changed rx from 350 -> 500 */}
        <motion.ellipse
          cx="0" cy="0" rx="500" ry="100"
          fill="none"
          stroke="url(#neon-gradient)"
          strokeWidth="3"
          filter="url(#intense-glow)"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "center" }}
        />

        {/* --- RING 3: Inner Fast --- */}
        {/* Changed rx from 220 -> 320 */}
        <motion.ellipse
          cx="0" cy="0" rx="320" ry="60"
          fill="none"
          stroke="url(#neon-gradient)"
          strokeWidth="5"
          filter="url(#intense-glow)"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "center" }}
        />

        {/* --- RING 4: Ghost Ring --- */}
        {/* Changed rx from 400 -> 580 */}
        <motion.ellipse
          cx="0" cy="0" rx="580" ry="120"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="1"
          opacity="0.3"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </div>
  );
}