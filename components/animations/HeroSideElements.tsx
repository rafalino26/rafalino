"use client";

import { motion } from "framer-motion";

export default function HeroSideElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full opacity-30 mix-blend-screen">
        <defs>
           {/* A glow filter for the particles */}
          <filter id="particle-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ==============================
            LEFT SIDE ELEMENTS
           ============================== */}
        
        {/* Floating Plus Sign (+) */}
        <motion.path
          d="M 10 0 L 30 0 M 20 -10 L 20 10" 
          stroke="#a78bfa" 
          strokeWidth="2"
          filter="url(#particle-glow)"
          // Position: Left side (10%), Vertical center
          style={{ x: "10vw", y: "40vh" }} 
          animate={{ 
            y: ["40vh", "35vh", "40vh"], 
            rotate: [0, 90, 0],
            opacity: [0.4, 0.8, 0.4] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Diamond (◇) */}
        <motion.rect
          width="15" height="15"
          x="0" y="0"
          stroke="#fff"
          strokeWidth="1"
          fill="transparent"
          style={{ x: "5vw", y: "70vh" }}
          animate={{ 
            y: ["70vh", "75vh", "70vh"], 
            rotate: [45, 225, 45], // Spin
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Tiny Circle (o) */}
        <motion.circle
          cx="0" cy="0" r="3"
          fill="#a78bfa"
          filter="url(#particle-glow)"
          style={{ x: "15vw", y: "20vh" }}
          animate={{ 
            y: ["20vh", "25vh", "20vh"], 
            opacity: [0, 1, 0] // Twinkle
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />


        {/* ==============================
            RIGHT SIDE ELEMENTS
           ============================== */}

        {/* Floating Cross (X) */}
        <motion.path
          d="M -10 -10 L 10 10 M -10 10 L 10 -10" 
          stroke="#a78bfa" 
          strokeWidth="2"
          filter="url(#particle-glow)"
          style={{ x: "90vw", y: "30vh" }} 
          animate={{ 
            y: ["30vh", "25vh", "30vh"], 
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Hollow Circle (O) */}
        <motion.circle
          cx="0" cy="0" r="8"
          stroke="#fff"
          strokeWidth="1"
          fill="transparent"
          style={{ x: "85vw", y: "60vh" }}
          animate={{ 
            y: ["60vh", "50vh", "60vh"], 
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dashed Line Decoration */}
        <motion.line
          x1="0" y1="0" x2="0" y2="60"
          stroke="#a78bfa"
          strokeWidth="1"
          strokeDasharray="4 4"
          style={{ x: "95vw", y: "75vh" }}
          animate={{ 
            y: ["75vh", "80vh", "75vh"], 
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
      </svg>
    </div>
  );
}