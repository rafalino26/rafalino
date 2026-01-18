"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function EntranceAnim({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setLoading(false);
      
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 1000); 
      
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <>
            {/* 1. BLACK BACKDROP */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-9998 bg-[#050505]"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeInOut",
                delay: 0.8 
              }}
            />

            {/* 2. FLYING TEXT */}
            <motion.div
              key="flying-text"
              className="fixed inset-0 z-9999 flex items-center justify-center pointer-events-none"
              initial={{ scale: 1.5, y: 0, x: 0, opacity: 1 }}
              animate={{ scale: 1, y: 0, x: 0, opacity: 1 }}
              
              exit={{ 
                // Y Position: Moves to top edge + half navbar height
                y: "calc(-50vh + 35px)", 

                // X Position: THIS IS THE FIX
                // 1. On small screens, it goes to the left edge (-50vw) + 25px padding
                // 2. On wide screens, it stops at -550px (which aligns with your max-w-6xl container)
                x: "max(calc(-50vw + 25px), -550px)",
                
                // Scale: Matches your text-2xl size
                scale: 0.5, 
                
                opacity: 1, 
                
                transition: { 
                  duration: 0.8, 
                  ease: [0.76, 0, 0.24, 1] 
                }
              }}
            >
              <div className="relative text-4xl md:text-6xl font-semibold tracking-tight whitespace-nowrap">
                {/* Rafa */}
                <motion.span
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-[linear-gradient(90deg,#b46cff,#7c3aed)] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(180,108,255,0.4)]"
                >
                  Rafa
                </motion.span>

                {/* lino */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "backOut" }}
                  className="ml-1 text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                >
                  lino
                </motion.span>

                {/* ._ */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                  className="ml-1 text-[#b46cff]"
                >
                  ._
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.2, type: "spring" }}
                    className="ml-1 inline-block h-2 w-2 md:h-3 md:w-3 rounded-full bg-[#b46cff] shadow-[0_0_22px_rgba(180,108,255,0.95)]"
                  />
                </motion.span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}