"use client";

import React, { useState, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RealisticRose, RoseBud, FallingPetals } from "./SvgOrnaments";

// Animated wax seal
const WaxSeal = React.memo(function WaxSeal({ glowing = false }: { glowing?: boolean }) {
  const reactId = useId();
  const id = `seal-main-${reactId.replace(/:/g, '')}`;
  return (
    <svg viewBox="0 0 140 140" width="140" height="140" fill="none">
      <defs>
        <radialGradient id={`${id}-bg`} cx="45%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#9B1828"/>
          <stop offset="50%" stopColor="#6B0F1A"/>
          <stop offset="100%" stopColor="#3D0008"/>
        </radialGradient>
        <radialGradient id={`${id}-edge`} cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="transparent"/>
          <stop offset="100%" stopColor="rgba(30,0,5,0.6)"/>
        </radialGradient>
        {glowing && (
          <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        )}
      </defs>
      {/* Outer ring decoration with notched edges */}
      {Array.from({ length: 32 }, (_, i) => {
        const a = (i * 360) / 32;
        const r = a * Math.PI / 180;
        const x = 70 + 64 * Math.cos(r);
        const y = 70 + 64 * Math.sin(r);
        return <circle key={i} cx={x} cy={y} r="2.2" fill="#6B0F1A" opacity="0.7"/>;
      })}
      {/* Main circle */}
      <circle cx="70" cy="70" r="58" fill={`url(#${id}-bg)`}/>
      {/* Edge shadow */}
      <circle cx="70" cy="70" r="58" fill={`url(#${id}-edge)`}/>
      {/* Inner decorative ring */}
      <circle cx="70" cy="70" r="52" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <circle cx="70" cy="70" r="45" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="0.7"/>
      {/* Monogram */}
      <text x="70" y="60" textAnchor="middle"
        fontFamily="Cinzel, serif" fontSize="16" fontWeight="700"
        fill="#C9A84C" letterSpacing="3">N</text>
      <text x="70" y="78" textAnchor="middle"
        fontFamily="Great Vibes, cursive" fontSize="22"
        fill="rgba(232,213,163,0.9)">&#38;</text>
      <text x="70" y="97" textAnchor="middle"
        fontFamily="Cinzel, serif" fontSize="16" fontWeight="700"
        fill="#C9A84C" letterSpacing="3">P</text>
      {/* Highlight */}
      <ellipse cx="58" cy="52" rx="14" ry="8" fill="rgba(255,200,200,0.07)" transform="rotate(-30 58 52)"/>
    </svg>
  );
});

// Gold shimmer text line
const GoldLineText = React.memo(function GoldLineText({ text }: { text: string }) {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12, margin: '6px 0' }}>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5))' }}/>
      <p style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '9px',
        fontWeight: 600,
        letterSpacing: '0.45em',
        color: 'rgba(201,168,76,0.7)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
      }}>{text}</p>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)' }}/>
    </div>
  );
});

interface Props {
  onOpen: () => void;
  onStartTransition?: () => void;
}

export default function EnvelopeEntry({ onOpen, onStartTransition }: Props) {
  const [phase, setPhase] = useState<'idle' | 'opening' | 'done'>('idle');
  const [pulseReady, setPulseReady] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const t = setTimeout(() => setPulseReady(true), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', onMouse);
    return () => window.removeEventListener('mousemove', onMouse);
  }, []);

  const handleOpen = () => {
    if (phase !== 'idle') return;
    setPhase('opening');
    // Immediately signal transition start for audio synchronization
    if (onStartTransition) onStartTransition();
    
    setTimeout(() => {
      setPhase('done');
      // Complete the unmount after animation settles
      setTimeout(onOpen, 600);
    }, 1400);
  };

  const parallaxX = (mousePos.x - 0.5) * 16;
  const parallaxY = (mousePos.y - 0.5) * 10;

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="envelope-overlay"
          style={{
            background: `radial-gradient(ellipse at ${50 + parallaxX}% ${45 + parallaxY}%, #2a0510 0%, #130208 45%, #080308 100%)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            willChange: 'background',
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden'
          }}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1, 
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
        >
          {/* Falling petals */}
          <FallingPetals count={16}/>

          {/* ── REALISTIC ROSE CLUSTERS ─── */}
          {/* Top left */}
          <motion.div
            style={{ position: 'absolute', top: '-40px', left: '-40px' }}
            animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <RealisticRose size={200} opacity={0.65} rotate={-25} hue="crimson"/>
          </motion.div>
          {/* Top right */}
          <motion.div
            style={{ position: 'absolute', top: '-30px', right: '-50px' }}
            animate={{ y: [0, -10, 0], rotate: [20, 17, 20] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <RealisticRose size={180} opacity={0.6} rotate={35} hue="dark"/>
          </motion.div>
          {/* Bottom left */}
          <motion.div
            style={{ position: 'absolute', bottom: '-30px', left: '-20px' }}
            animate={{ y: [0, 6, 0], rotate: [10, 7, 10] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            <RealisticRose size={170} opacity={0.55} rotate={15} hue="blush"/>
          </motion.div>
          {/* Bottom right */}
          <motion.div
            style={{ position: 'absolute', bottom: '-20px', right: '-30px' }}
            animate={{ y: [0, 8, 0], rotate: [-8, -5, -8] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <RealisticRose size={190} opacity={0.6} rotate={-12} hue="crimson"/>
          </motion.div>
          {/* Mid left bud */}
          <motion.div
            style={{ position: 'absolute', left: '2%', top: '35%' }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          >
            <RoseBud size={90} opacity={0.45} rotate={10}/>
          </motion.div>
          {/* Mid right bud */}
          <motion.div
            style={{ position: 'absolute', right: '3%', top: '30%' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          >
            <RoseBud size={80} opacity={0.4} rotate={-10}/>
          </motion.div>

          {/* Ambient glow orbs */}
          <div style={{
            position: 'absolute', top: '15%', left: '15%',
            width: '300px', height: '200px',
            background: 'radial-gradient(ellipse, rgba(107,15,26,0.25) 0%, transparent 70%)',
            pointerEvents: 'none', filter: 'blur(20px)'
          }}/>
          <div style={{
            position: 'absolute', bottom: '20%', right: '10%',
            width: '250px', height: '180px',
            background: 'radial-gradient(ellipse, rgba(139,26,36,0.2) 0%, transparent 70%)',
            pointerEvents: 'none', filter: 'blur(20px)'
          }}/>

          {/* ── MAIN CONTENT ─── */}
          <motion.div
            style={{
              position: 'relative', zIndex: 10,
              textAlign: 'center', padding: '0 28px',
              maxWidth: '480px', width: '100%',
              willChange: 'transform, opacity',
              transform: 'translate3d(0, 0, 0)'
            }}
            animate={phase === 'opening' ? { scale: 1.08, opacity: 0, y: -40 } : {}}
            transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <GoldLineText text="You Are Cordially Invited" />

            {/* Envelope with Wax Seal */}
            <motion.div
              className={pulseReady ? 'float-anim' : ''}
              style={{ position: 'relative', display: 'flex', justifyContent: 'center', margin: '24px 0 20px' }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.4, type: 'spring', stiffness: 100 }}
            >
              {/* Envelope SVG */}
              <svg viewBox="0 0 340 230" width="300" height="203" fill="none" style={{ filter: 'drop-shadow(0 8px 30px rgba(0,0,0,0.7))' }}>
                <defs>
                  <radialGradient id="env-body" cx="50%" cy="60%" r="60%">
                    <stop offset="0%" stopColor="#1E060C"/>
                    <stop offset="100%" stopColor="#0D0308"/>
                  </radialGradient>
                  <radialGradient id="env-flap" cx="50%" cy="80%" r="60%">
                    <stop offset="0%" stopColor="#250810"/>
                    <stop offset="100%" stopColor="#110406"/>
                  </radialGradient>
                </defs>
                {/* Body */}
                <rect x="5" y="65" width="330" height="160" rx="4" fill="url(#env-body)" stroke="rgba(201,168,76,0.4)" strokeWidth="1.2"/>
                {/* Inner diagonal fold lines */}
                <path d="M5 225 L170 138 L335 225" fill="#150506" stroke="rgba(201,168,76,0.2)" strokeWidth="0.7"/>
                <path d="M5 65 L5 225 L170 138Z" fill="rgba(0,0,0,0.2)" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5"/>
                <path d="M335 65 L335 225 L170 138Z" fill="rgba(0,0,0,0.15)" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5"/>
                {/* Top flap - animated open */}
                <motion.path
                  d="M5 65 L170 155 L335 65 L170 8Z"
                  fill="url(#env-flap)"
                  stroke="rgba(201,168,76,0.4)"
                  strokeWidth="1.2"
                  initial={{ rotateX: 0, transformOrigin: '170px 65px' }}
                  animate={phase === 'opening' ? { rotateX: 160, opacity: 0 } : { rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                  style={{ transformOrigin: '170px 65px' }}
                />
                {/* Decorative lines inside */}
                <line x1="50" y1="100" x2="290" y2="100" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5"/>
                <line x1="50" y1="115" x2="290" y2="115" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5"/>
              </svg>

              {/* Wax seal centered on envelope */}
              <motion.div
                className="seal-glow"
                style={{
                  position: 'absolute',
                  top: '42%', left: '50%',
                  cursor: 'pointer',
                  zIndex: 5,
                }}
                initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.8 }}
                animate={phase === 'opening' 
                  ? { x: "-50%", y: "-60px", scale: 1.5, opacity: 0 } 
                  : { x: "-50%", y: "-50%", opacity: 1, scale: 1 }
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleOpen}
                transition={{ duration: 0.6 }}
              >
                <WaxSeal glowing />
              </motion.div>
            </motion.div>

            {/* Names */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h1 style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: 'clamp(48px, 13vw, 72px)',
                color: '#F5EDD8',
                lineHeight: 1.1,
                textShadow: '0 2px 30px rgba(201,168,76,0.2)',
                letterSpacing: '-0.01em'
              }}>
                Nikhil &amp; Prachi
              </h1>
            </motion.div>

            {/* Date */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ margin: '8px 0 28px' }}
            >
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '0.35em',
                color: '#C9A84C',
                textShadow: '0 0 20px rgba(201,168,76,0.3)'
              }}>
                08 &nbsp;·&nbsp; 06 &nbsp;·&nbsp; 2026
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              onClick={handleOpen}
              className="gold-btn"
              style={{ padding: '15px 44px', fontSize: '11px', letterSpacing: '0.35em' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>✦</span>
              <span>Tap to Open</span>
              <span>✦</span>
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 1.5 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '12px',
                fontStyle: 'italic',
                color: 'rgba(245,237,216,0.35)',
                marginTop: '14px',
                letterSpacing: '0.04em'
              }}
            >
              Click the wax seal or the button above
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
