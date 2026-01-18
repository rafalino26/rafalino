"use client";

import { motion } from "framer-motion";

type Props = {
  intensity?: number;
  yOffset?: number;
};

export default function HeroWaves({ intensity = 1, yOffset = 0 }: Props) {
  return (
    <div 
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ transform: `translateY(${yOffset}px)` }}
    >
      <svg
        className="absolute bottom-0 left-0 w-full h-[50vh] min-h-[400px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0)" />
            <stop offset="20%" stopColor="rgba(124, 58, 237, 0.5)" />
            <stop offset="50%" stopColor="rgba(180, 108, 255, 1)" />
            <stop offset="80%" stopColor="rgba(124, 58, 237, 0.5)" />
            <stop offset="100%" stopColor="rgba(124, 58, 237, 0)" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M0,160 C320,300 420,0 720,160 C1020,320 1120,0 1440,160 C1760,320 1860,0 2160,160 C2460,320 2560,0 2880,160"
          fill="none"
          stroke="url(#wave-gradient)"
          strokeWidth="4"
          filter="url(#glow)"
          opacity="0.9"
          animate={{
            x: ["0px", "-1440px"], 
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        <motion.path
          d="M0,160 C320,20 420,280 720,160 C1020,20 1120,280 1440,160 C1760,20 1860,280 2160,160 C2460,20 2560,280 2880,160"
          fill="none"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          opacity="0.4"
          animate={{
            x: ["0px", "-1440px"],
          }}
          transition={{
            duration: 20, 
            ease: "linear",
            repeat: Infinity,
          }}
        />
        
        {/* I REMOVED THE <circle> THAT WAS HERE */}
      </svg>
    </div>
  );
}