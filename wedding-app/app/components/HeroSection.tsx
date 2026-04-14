"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { RealisticRose, RoseBud, FallingPetals } from "./SvgOrnaments";

export default function HeroSection({ isVisible = true }: { isVisible?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ['start start', 'end start'] 
  });

  // Ultra-smooth "liquid" scroll syncing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const bgY = useTransform(smoothProgress, [0, 1], ['0%', '15%']);
  const textY = useTransform(smoothProgress, [0, 1], ['0%', '10%']);
  const textOpacity = useTransform(smoothProgress, [0, 0.45], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #080210 0%, #0D0308 35%, #0A0210 100%)',
        padding: '100px 24px 80px'
      }}
    >
      {/* Parallax rose background - Strict Absolute Stacking */}
      <motion.div 
        style={{ 
          y: bgY, 
          position: 'absolute', 
          inset: 0, 
          pointerEvents: 'none', 
          willChange: 'transform',
          transform: 'translateZ(0)' // Force compositor layer
        }}
      >
        {/* Ambient crimson gradient pools */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse 700px 500px at 8% 12%, rgba(107,15,26,0.55) 0%, transparent 60%),
            radial-gradient(ellipse 600px 450px at 92% 8%, rgba(90,10,20,0.5) 0%, transparent 65%),
            radial-gradient(ellipse 450px 380px at 82% 88%, rgba(107,15,26,0.45) 0%, transparent 65%),
            radial-gradient(ellipse 400px 340px at 12% 88%, rgba(90,12,22,0.45) 0%, transparent 65%)`
        }}/>
        {/* Top-left cluster */}
        <motion.div
          style={{ position: 'absolute', top: '-70px', left: '-65px' }}
          animate={{ y: [0, -12, 0], rotate: [-28, -30, -28] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <RealisticRose size={270} opacity={0.72} rotate={-30} hue="crimson"/>
        </motion.div>
        <motion.div
          style={{ position: 'absolute', top: '40px', left: '130px' }}
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
        >
          <RoseBud size={95} opacity={0.5} rotate={18}/>
        </motion.div>
        {/* Top-right cluster */}
        <motion.div
          style={{ position: 'absolute', top: '-50px', right: '-55px' }}
          animate={{ y: [0, -10, 0], rotate: [38, 40, 38] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <RealisticRose size={250} opacity={0.67} rotate={42} hue="dark"/>
        </motion.div>
        <motion.div
          style={{ position: 'absolute', top: '55px', right: '105px' }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3.2 }}
        >
          <RoseBud size={80} opacity={0.42} rotate={-22}/>
        </motion.div>
        {/* Left mid */}
        <motion.div
          style={{ position: 'absolute', top: '38%', left: '-55px' }}
          animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
        >
          <RealisticRose size={185} opacity={0.5} rotate={-12} hue="blush"/>
        </motion.div>
        {/* Right mid */}
        <motion.div
          style={{ position: 'absolute', top: '32%', right: '-45px' }}
          animate={{ y: [0, -12, 0], x: [0, -4, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
        >
          <RealisticRose size={205} opacity={0.56} rotate={12} hue="crimson"/>
        </motion.div>
        {/* Bottom cluster */}
        <motion.div
          style={{ position: 'absolute', bottom: '-55px', left: '-35px' }}
          animate={{ y: [0, 8, 0], rotate: [14, 12, 14] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2.8 }}
        >
          <RealisticRose size={240} opacity={0.62} rotate={16} hue="dark"/>
        </motion.div>
        <motion.div
          style={{ position: 'absolute', bottom: '-25px', right: '-45px' }}
          animate={{ y: [0, 6, 0], rotate: [-16, -14, -16] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <RealisticRose size={230} opacity={0.62} rotate={-20} hue="crimson"/>
        </motion.div>
        <motion.div
          style={{ position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)' }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        >
          <RoseBud size={70} opacity={0.32} rotate={5}/>
        </motion.div>
      </motion.div>

      {/* Falling petals */}
      <FallingPetals count={14}/>

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 72% 62% at 50% 50%, transparent 28%, rgba(5,2,5,0.68) 100%)'
      }}/>
      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px',
        background: 'linear-gradient(to bottom, transparent, rgba(8,2,8,0.85))',
        pointerEvents: 'none'
      }}/>

      <motion.div
        style={{ 
          y: textY, 
          opacity: isVisible ? textOpacity : 0, 
          position: 'relative', 
          zIndex: 5, 
          textAlign: 'center', 
          maxWidth: '640px', 
          width: '100%', 
          willChange: 'transform, opacity' 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{ willChange: 'transform, opacity' }}
        >
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.55em',
            color: 'rgba(201,168,76,0.65)',
            textTransform: 'uppercase',
            marginBottom: '14px'
          }}>
            ✦ &nbsp; The Wedding of &nbsp; ✦
          </p>
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)', marginBottom: '26px' }}/>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, type: 'spring', stiffness: 80 }}
        >
          <h1 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(76px, 18vw, 118px)',
            color: '#F5EDD8',
            lineHeight: 1.0,
            textShadow: '0 4px 40px rgba(201,168,76,0.15), 0 0 80px rgba(107,15,26,0.4)',
            fontWeight: 400
          }}>Nikhil</h1>
          <motion.p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '26px',
              fontStyle: 'italic',
              color: '#C9A84C',
              letterSpacing: '0.24em',
              margin: '-2px 0',
              opacity: 0.9
            }}
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            &amp;
          </motion.p>
          <h1 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(76px, 18vw, 118px)',
            color: '#F5EDD8',
            lineHeight: 1.0,
            textShadow: '0 4px 40px rgba(201,168,76,0.15), 0 0 80px rgba(107,15,26,0.4)',
            fontWeight: 400
          }}>Prachi</h1>
        </motion.div>

        {/* Ornamental divider */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '22px 0 16px' }}
        >
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C)' }}/>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z" fill="rgba(201,168,76,0.6)"/>
          </svg>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #C9A84C, transparent)' }}/>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          style={{ marginBottom: '8px' }}
        >
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(22px, 6vw, 34px)',
            fontWeight: 400,
            letterSpacing: '0.3em',
            color: '#C9A84C',
            textShadow: '0 0 30px rgba(201,168,76,0.35)'
          }}>
            08 · 06 · 2026
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '15px',
            fontStyle: 'italic',
            color: 'rgba(245,237,216,0.45)',
            letterSpacing: '0.1em',
            marginTop: '6px'
          }}>
            Monday &nbsp;·&nbsp; Pune, Maharashtra
          </p>
        </motion.div>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)', margin: '18px 0 26px' }}
        />

        {/* Invitation text */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '17px',
            fontStyle: 'italic',
            color: 'rgba(245,237,216,0.62)',
            lineHeight: 1.8,
            letterSpacing: '0.05em',
            marginBottom: '34px',
            maxWidth: '460px',
            margin: '0 auto 34px'
          }}
        >
          Dear friends and family —<br/>
          We joyfully invite you to join us<br/>
          in celebrating the beginning of our forever.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}
        >
          {/* View Ceremonies - gold outline */}
          <motion.a
            href="#timing"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 30px',
              border: '1.5px solid rgba(201,168,76,0.7)',
              color: '#C9A84C',
              fontFamily: "'Cinzel', serif",
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              background: 'transparent',
              transition: 'all 0.35s ease',
              backdropFilter: 'blur(4px)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.12)';
              (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.7)';
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="#C9A84C" strokeWidth="1.2"/>
              <polyline points="4,6 6,4 8,6" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
              <line x1="6" y1="4" x2="6" y2="9" stroke="#C9A84C" strokeWidth="1.2"/>
            </svg>
            View Ceremonies
          </motion.a>

          {/* Confirm Attendance - crimson fill */}
          <motion.a
            href="#rsvp"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '13px 30px',
              background: 'linear-gradient(135deg, #6B0F1A 0%, #8B1A24 50%, #6B0F1A 100%)',
              backgroundSize: '200% auto',
              color: '#F5EDD8',
              fontFamily: "'Cinzel', serif",
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1.5px solid rgba(201,168,76,0.3)',
              transition: 'all 0.45s ease',
              boxShadow: '0 4px 20px rgba(107,15,26,0.4)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundPosition = 'right center';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 30px rgba(107,15,26,0.65)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.55)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundPosition = 'left center';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(107,15,26,0.4)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.3)';
            }}
          >
            {/* Heart icon */}
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
              <path d="M6.5 11 C6.5 11 1 7 1 3.5 C1 2 2.1 1 3.5 1 C4.6 1 5.5 1.6 6.5 2.5 C7.5 1.6 8.4 1 9.5 1 C10.9 1 12 2 12 3.5 C12 7 6.5 11 6.5 11Z"
                fill="rgba(245,237,216,0.7)" stroke="rgba(245,237,216,0.4)" strokeWidth="0.5"/>
            </svg>
            Confirm Attendance
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ marginTop: '52px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
        >
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '8px',
            letterSpacing: '0.42em',
            color: 'rgba(201,168,76,0.3)',
            textTransform: 'uppercase'
          }}>Scroll</p>
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            style={{ width: '1px', height: '36px', background: 'linear-gradient(180deg, rgba(201,168,76,0.5), transparent)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
