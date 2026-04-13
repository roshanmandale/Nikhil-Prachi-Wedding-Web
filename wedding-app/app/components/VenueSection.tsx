"use client";

import { motion } from "framer-motion";
import { RealisticRose } from "./SvgOrnaments";

export default function VenueSection() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9247!2d73.9397!3d18.4870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eace9b8f0b31%3A0x5e2abe83ba3a1dc4!2sThe%20Corinthians%20Resort%20%26%20Club%2C%20Pune!5e0!3m2!1sen!2sin!4v1681000000000";

  const details = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 2C6.2 2 4 4.2 4 7 4 11 9 16 9 16S14 11 14 7C14 4.2 11.8 2 9 2Z" fill="rgba(201,168,76,0.6)"/>
          <circle cx="9" cy="7" r="2" fill="rgba(245,237,216,0.4)"/>
        </svg>
      ),
      title: "Venue",
      desc: "The Corinthians Resort & Club\n36/1&2, NIBM Annexure, Pune — 411048"
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="4" width="14" height="12" rx="1.5" fill="none" stroke="rgba(201,168,76,0.55)" strokeWidth="1.2"/>
          <line x1="6" y1="2" x2="6" y2="6" stroke="rgba(201,168,76,0.55)" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="12" y1="2" x2="12" y2="6" stroke="rgba(201,168,76,0.55)" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="2" y1="8" x2="16" y2="8" stroke="rgba(201,168,76,0.35)" strokeWidth="0.8"/>
          <rect x="5" y="10" width="3" height="3" rx="0.5" fill="rgba(201,168,76,0.35)"/>
          <rect x="10" y="10" width="3" height="3" rx="0.5" fill="rgba(201,168,76,0.55)"/>
        </svg>
      ),
      title: "Date",
      desc: "Monday, 8 June 2026\n11:00 AM — Onwards"
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="8" width="14" height="8" rx="1" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1.2"/>
          <path d="M5 8 L5 6 Q5 2 9 2 Q13 2 13 6 L13 8" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="9" cy="12" r="1.5" fill="rgba(201,168,76,0.6)"/>
        </svg>
      ),
      title: "Stay",
      desc: "On-site rooms available\nfor outstation guests"
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 10 Q2 5 9 5 Q16 5 16 10" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M3 10 L3 14 Q3 15 4 15 L14 15 Q15 15 15 14 L15 10Z" fill="rgba(107,15,26,0.2)" stroke="rgba(201,168,76,0.4)" strokeWidth="1"/>
          <circle cx="6" cy="14" r="1.5" fill="rgba(201,168,76,0.5)"/>
          <circle cx="12" cy="14" r="1.5" fill="rgba(201,168,76,0.5)"/>
        </svg>
      ),
      title: "Transport",
      desc: "Shuttles arranged from\nPune Railway Station"
    },
  ];

  return (
    <section
      id="location"
      style={{
        background: 'linear-gradient(180deg, #0A0210 0%, #0D0308 100%)',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Side roses */}
      <motion.div
        style={{ position: 'absolute', right: '-60px', top: '-20px', opacity: 0.2, pointerEvents: 'none' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <RealisticRose size={210} opacity={1} rotate={28} hue="dark"/>
      </motion.div>
      <motion.div
        style={{ position: 'absolute', left: '-55px', bottom: '-20px', opacity: 0.18, pointerEvents: 'none' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <RealisticRose size={190} opacity={1} rotate={-15} hue="crimson"/>
      </motion.div>

      <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '40px' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Location</h2>
          <p className="section-subtitle">Venue · Pune</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5))' }}/>
            <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '10px' }}>✦</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)' }}/>
          </div>
        </motion.div>

        {/* Venue title card */}
        <motion.div
           className="glass-card-crimson"
           style={{
             padding: '40px 24px',
             textAlign: 'center',
             marginBottom: '20px',
             position: 'relative',
             border: '1px solid rgba(201,168,76,0.3)',
             boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5), 0 10px 40px rgba(107,15,26,0.3)',
             borderRadius: '4px',
             overflow: 'hidden'
           }}
           initial={{ opacity: 0, scale: 0.96, y: 20 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
           {/* Corner ornaments */}
           <svg style={{ position: 'absolute', top: 10, left: 10 }} width="16" height="16" viewBox="0 0 16 16" fill="none">
             <path d="M0 0h16v1H1v15H0V0z" fill="rgba(201,168,76,0.5)"/>
             <circle cx="4" cy="4" r="1.5" fill="#C9A84C"/>
           </svg>
           <svg style={{ position: 'absolute', top: 10, right: 10 }} width="16" height="16" viewBox="0 0 16 16" fill="none">
             <path d="M16 0H0v1h15v15h1V0z" fill="rgba(201,168,76,0.5)"/>
             <circle cx="12" cy="4" r="1.5" fill="#C9A84C"/>
           </svg>
           <svg style={{ position: 'absolute', bottom: 10, left: 10 }} width="16" height="16" viewBox="0 0 16 16" fill="none">
             <path d="M0 16h16v-1H1V0H0v16z" fill="rgba(201,168,76,0.5)"/>
             <circle cx="4" cy="12" r="1.5" fill="#C9A84C"/>
           </svg>
           <svg style={{ position: 'absolute', bottom: 10, right: 10 }} width="16" height="16" viewBox="0 0 16 16" fill="none">
             <path d="M16 16H0v-1h15V0h1v16z" fill="rgba(201,168,76,0.5)"/>
             <circle cx="12" cy="12" r="1.5" fill="#C9A84C"/>
           </svg>

           {/* Stylized Building SVG Map graphic */}
           <svg viewBox="0 0 280 120" width="100%" height="90" fill="none" style={{ marginBottom: '24px', display: 'block' }}>
             <defs>
               <linearGradient id="bld-g2" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="rgba(201,168,76,0.2)"/>
                 <stop offset="100%" stopColor="transparent"/>
               </linearGradient>
             </defs>
             {/* Main building block */}
             <rect x="60" y="30" width="160" height="60" fill="url(#bld-g2)" stroke="rgba(201,168,76,0.5)" strokeWidth="1"/>
             {/* Pillars */}
             {[80, 105, 130, 155, 180, 205].map((x) => (
               <rect key={x} x={x} y="40" width="8" height="50" fill="rgba(107,15,26,0.5)" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5"/>
             ))}
             {/* Dome/Roof */}
             <path d="M50 30 L140 5 L230 30 Z" fill="rgba(107,15,26,0.3)" stroke="rgba(201,168,76,0.5)" strokeWidth="1"/>
             {/* Entrance arch */}
             <rect x="124" y="56" width="32" height="29" rx="14 14 0 0" fill="rgba(107,15,26,0.8)" stroke="rgba(201,168,76,0.7)" strokeWidth="1.2"/>
             {/* Steps */}
             <rect x="100" y="82" width="80" height="5" rx="1" fill="rgba(245,237,216,0.15)" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5"/>
             <rect x="108" y="86" width="64" height="4" rx="1" fill="rgba(245,237,216,0.1)" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5"/>
             {/* Flanking wings */}
             <rect x="8" y="42" width="52" height="43" fill="url(#bld-g2)" stroke="rgba(201,168,76,0.3)" strokeWidth="0.7"/>
             <rect x="220" y="42" width="52" height="43" fill="url(#bld-g2)" stroke="rgba(201,168,76,0.3)" strokeWidth="0.7"/>
             {/* Garden dots */}
             {[20,30,40,240,250,260].map(x => (
               <circle key={x} cx={x} cy="85" r="8" fill="rgba(13,34,8,0.8)" stroke="rgba(20,48,12,0.6)" strokeWidth="0.5"/>
             ))}
             {/* Stars */}
             {[30,80,200,250].map(x => (
               <circle key={x} cx={x} cy={10 + (x % 2)*8} r="1.5" fill="rgba(201,168,76,0.7)">
                 <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1.5 + (x%3)}s`} repeatCount="indefinite" />
               </circle>
             ))}
           </svg>

           <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '16px' }}>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5))' }} />
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(18px, 6vw, 26px)',
                fontWeight: 600,
                color: '#F5EDD8',
                letterSpacing: '0.12em',
                textShadow: '0 2px 10px rgba(201,168,76,0.3)'
              }}>
                The Corinthians Resort
              </p>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)' }} />
           </div>

           <p style={{
             fontFamily: "'Cormorant Garamond', serif",
             fontSize: '16px',
             fontStyle: 'italic',
             color: 'rgba(245,237,216,0.55)',
             letterSpacing: '0.05em',
             lineHeight: 1.6
           }}>
             36/1&amp;2, NIBM Annexure Road<br/>
             Undri, Pune — 411048, Maharashtra
           </p>
         </motion.div>

        {/* Directions button */}
        <motion.a
          href="https://maps.google.com/?q=The+Corinthians+Resort+Club+Pune"
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn"
          style={{ width: '100%', marginBottom: '32px' }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.svg 
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </motion.svg>
          SEE DESTINATION
        </motion.a>

        {/* Info cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {details.map((item, i) => (
            <motion.div
              key={i}
              style={{
                padding: '20px 16px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(201,168,76,0.1)',
                borderBottom: '2px solid rgba(107,15,26,0.6)',
                borderRadius: '3px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ 
                borderBottomColor: 'rgba(201,168,76,0.8)', 
                background: 'rgba(255,255,255,0.05)',
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                borderColor: 'rgba(201,168,76,0.3)'
              }}
            >
              <div style={{ marginBottom: '8px' }}>{item.icon}</div>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: '#C9A84C',
                textTransform: 'uppercase',
                marginBottom: '4px'
              }}>{item.title}</p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '13px',
                color: 'rgba(245,237,216,0.5)',
                fontStyle: 'italic',
                lineHeight: 1.55,
                whiteSpace: 'pre-line'
              }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Amravati note */}
        <motion.div
          style={{ marginTop: '20px', padding: '14px', background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.12)', textAlign: 'center' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(201,168,76,0.5)', textTransform: 'uppercase', marginBottom: '5px' }}>
            Pre-Wedding Celebrations
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '14px', fontStyle: 'italic', color: 'rgba(245,237,216,0.45)' }}>
            Haldi &amp; Mehendi at Nikhil's Residence,<br/>Rajapeth, Amravati · 7 June 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
