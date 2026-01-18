"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  // Close mobile menu event
  window.dispatchEvent(new CustomEvent("close-menu"));
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const items = useMemo(() => SITE.nav, []);
  const [active, setActive] = useState(items[0]?.id ?? "home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // --- 1. ACTIVE SCROLL TRACKING ---
  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        // Find the element that is most visible on screen
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      // Adjust rootMargin to trigger active state when section is near top of screen
      { threshold: [0.2, 0.5], rootMargin: "-10% 0px -50% 0px" }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  // --- 2. SCROLL STATE & EVENTS ---
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    
    const onClose = () => setMobileOpen(false);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("close-menu", onClose);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("close-menu", onClose);
    };
  }, []);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 4.0 }}
      >
        {/* BACKGROUND BLUR */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500",
            scrolled || mobileOpen
              ? "bg-[#050505]/80 border-b border-white/5"
              : "bg-transparent border-transparent"
          )}
        />

        {/* NEON LINE (Visible on Scroll) */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-px transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,#b46cff,transparent)] opacity-40" />
        </div>

        <div className="relative mx-auto h-20 max-w-7xl px-4 md:px-6">
          <div className="flex h-full items-center justify-between">
            
            {/* ==============================
                LEFT: MENU ICON & LOGO
               ============================== */}
            <div className="flex items-center gap-6">
              
              {/* HAMBURGER ICON (Left Side) */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="group relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              >
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-6 rounded-full bg-white transition-colors group-hover:bg-[#b46cff]"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="h-0.5 w-4 rounded-full bg-white/70 transition-colors group-hover:bg-[#b46cff]"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-6 rounded-full bg-white transition-colors group-hover:bg-[#b46cff]"
                />
              </button>

              {/* LOGO */}
              <button onClick={() => scrollToId("home")} className="group relative z-50">
                <span className="text-xl font-bold tracking-tighter md:text-2xl">
                  <span className="text-[#b46cff] drop-shadow-[0_0_10px_rgba(180,108,255,0.5)]">Rafa</span>
                  <span className="text-white">lino</span>
                  <span className="text-[#b46cff] animate-pulse">._</span>
                </span>
              </button>
            </div>

            {/* ==============================
                RIGHT: DESKTOP NAV
               ============================== */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
              {items.map((item) => {
                const isActive = active === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToId(item.id)}
                    className="group relative flex items-center px-4 py-2 text-sm font-medium transition-colors"
                  >
                    {/* FLOATING ACTIVE BACKGROUND (The "Move by itself" part) */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/5"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* 1. NUMBER (Changes Color + Pulses when active) */}
                    <span 
                      className={cn(
                        "mr-2 font-mono text-xs transition-colors duration-300", 
                        isActive 
                          ? "text-[#b46cff] animate-pulse font-bold" // Active: Purple + Pulse
                          : "text-white/30 group-hover:text-white/60" // Inactive
                      )}
                    >
                      {item.idx}
                    </span>
                    
                    {/* 2. TEXT (Glows when active) */}
                    <span 
                      className={cn(
                        "tracking-wide transition-all duration-300",
                        isActive 
                          ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]" // Active: Bright + Glow
                          : "text-white/60 group-hover:text-white"
                      )}
                    >
                      {item.label}
                    </span>

                    {/* 3. SEMICOLON (Changes Color) */}
                    <span 
                      className={cn(
                        "ml-1 font-mono transition-colors duration-300",
                        isActive 
                          ? "text-[#b46cff]" 
                          : "text-white/30 group-hover:text-[#b46cff]/50"
                      )}
                    >
                      ;
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* ==============================
          MOBILE SIDEBAR (Left Side)
         ============================== */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* SIDEBAR PANEL */}
            <motion.div
              initial={{ x: "-100%" }} // Slide from LEFT
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 top-0 z-50 w-[80%] max-w-xs border-r border-white/10 bg-[#0a0514] px-6 py-24 shadow-2xl md:hidden"
            >
              {/* DECORATION */}
              <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#b46cff] opacity-20 blur-[100px]" />

              <nav className="relative flex flex-col gap-6">
                {items.map((item, i) => {
                  const isActive = active === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      onClick={() => {
                        scrollToId(item.id);
                        setMobileOpen(false);
                      }}
                      className="group flex items-center gap-4 text-left"
                    >
                      {/* Mobile Number Pulse */}
                      <span 
                        className={cn(
                          "font-mono text-sm transition-colors",
                          isActive 
                           ? "text-[#b46cff] animate-pulse" 
                           : "text-white/30"
                        )}
                      >
                        {item.idx}
                      </span>
                      
                      {/* Mobile Text */}
                      <span 
                        className={cn(
                          "text-xl font-medium transition-colors",
                          isActive 
                            ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" 
                            : "text-white/60"
                        )}
                      >
                        {item.label}
                      </span>
                      
                      {/* Mobile Indicator Arrow */}
                      {isActive && (
                         <motion.div 
                           layoutId="sidebar-dot"
                           className="h-1.5 w-1.5 rounded-full bg-[#b46cff] shadow-[0_0_10px_#b46cff]"
                         />
                      )}
                    </motion.button>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}