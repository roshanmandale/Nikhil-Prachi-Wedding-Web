"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TempleDoorEntry({ onOpen }: { onOpen: () => void }) {
  const [phase, setPhase] = useState<"intro" | "opened" | "exit">("intro");

  const handleOpen = () => {
    if (phase !== "intro") return;
    setPhase("opened");
    // Start main content reveal slightly before the doors finish opening
    setTimeout(onOpen, 1000); 
    // Remove from DOM completely
    setTimeout(() => setPhase("exit"), 2000);
  };

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#0B132B" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Subtle Ambient Light */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(212,175,55,0.1)] to-transparent" />

          {/* 3D Perspective Doors Container */}
          <div className="absolute inset-0 perspective-1000">
            {/* Left Door */}
            <motion.div
              className="absolute left-0 top-0 w-1/2 h-full origin-left border-r border-[#D4AF37]/30 flex items-center justify-end overflow-hidden"
              style={{ backgroundColor: "#0B132B", zIndex: 101 }}
              initial={{ rotateY: 0 }}
              animate={phase === "opened" ? { rotateY: -110, opacity: 0 } : {}}
              transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            >
                {/* Removed Mandala */}
            </motion.div>

            {/* Right Door */}
            <motion.div
              className="absolute right-0 top-0 w-1/2 h-full origin-right border-l border-[#D4AF37]/30 flex items-center justify-start overflow-hidden"
              style={{ backgroundColor: "#0B132B", zIndex: 101 }}
              initial={{ rotateY: 0 }}
              animate={phase === "opened" ? { rotateY: 110, opacity: 0 } : {}}
              transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            >
                {/* Removed Mandala */}
            </motion.div>
          </div>

          {/* Envelope Card Wrapper — Stacks on top of doors (zIndex 105) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto" style={{ zIndex: 105 }}>
            <motion.div
              className="relative w-[90%] max-w-lg bg-[#FFFDD0] rounded-xl p-10 sm:p-16 flex flex-col items-center text-center shadow-2xl border border-[#D4AF37]/40"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={phase === "intro" ? { scale: 1, opacity: 1, y: 0 } : { scale: 1.1, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Corner Filigree Borders */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl-xl" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr-xl" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl-xl" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-xl" />

            {/* Inner Border Line */}
            <div className="absolute inset-5 border border-[#D4AF37]/20 rounded-lg pointer-events-none" />

            {/* Removed StorybookGanesh */}

            <p className="font-body text-[#0B132B]/60 text-xs tracking-[0.4em] uppercase font-bold mb-2">The Wedding Of</p>
            
            <h2 className="font-display text-[#0B132B] text-4xl sm:text-6xl tracking-widest leading-none font-black drop-shadow-sm mb-4">
              NIKHIL<br />&amp;<br />PRACHI
            </h2>

            <p className="font-body text-[#D4AF37] text-sm tracking-[0.4em] font-bold uppercase mb-6">June 08, 2026</p>

            {/* Removed OrnamentDivider */}

            {/* Interactive Wax Seal Button */}
            <button
              onClick={handleOpen}
              className="group relative flex flex-col items-center gap-3 cursor-pointer select-none"
            >
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#F5E6BE] via-[#D4AF37] to-[#8B6B10] shadow-xl flex items-center justify-center border-2 border-white/40 transform transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <span className="font-display text-[#3D1A00] text-3xl font-black shadow-inner">NP</span>
                {/* Ping Animation for affordance */}
                <span className="absolute inset-0 rounded-full border border-[#D4AF37] opacity-0 group-hover:animate-ping" />
              </div>
              <p className="font-body text-[#0B132B]/50 text-[10px] tracking-[0.3em] uppercase group-hover:text-[#D4AF37] transition-colors">Click to Open</p>
            </button>

            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
