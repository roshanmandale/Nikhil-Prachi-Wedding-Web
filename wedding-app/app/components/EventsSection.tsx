"use client";

import { motion } from "framer-motion";
import { RealisticRose, RoseBud } from "./SvgOrnaments";

// ─── SVG ICONS for each ceremony ────────────────────────────────────────────
const HaldiIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
    {/* Leaf */}
    <path d="M14 22 Q8 17 8 11 Q11 8 14 10 Q17 8 20 11 Q20 17 14 22Z" fill="rgba(26,58,10,0.7)" stroke="rgba(26,58,10,0.4)" strokeWidth="0.5"/>
    <path d="M14 10 L14 22" stroke="rgba(201,168,76,0.5)" strokeWidth="0.6" fill="none"/>
    {/* Turmeric drops */}
    <circle cx="10" cy="13" r="1.8" fill="rgba(201,168,76,0.7)"/>
    <circle cx="18" cy="13" r="1.8" fill="rgba(201,168,76,0.7)"/>
    <circle cx="14" cy="18" r="1.8" fill="rgba(201,168,76,0.7)"/>
  </svg>
);

const MehendiIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" fill="rgba(107,15,26,0.1)" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
    {/* Hand shape */}
    <path d="M10 20 L10 12 Q10 10 11.5 10 Q13 10 13 12 L13 10 Q13 8 14.5 8 Q16 8 16 10 L16 11 Q16 9 17.5 9 Q19 9 19 11 L19 16 Q21 16 21 18 L21 20 Q21 23 18 23 L12 23 Q10 23 10 20Z"
      fill="rgba(139,26,36,0.25)" stroke="rgba(201,168,76,0.4)" strokeWidth="0.7"/>
    {/* Henna pattern dot */}
    <circle cx="14" cy="19" r="1.5" fill="rgba(201,168,76,0.6)"/>
    <circle cx="14" cy="19" r="0.7" fill="rgba(201,168,76,0.9)"/>
    {/* Small decorative dots */}
    <circle cx="12" cy="17" r="0.6" fill="rgba(201,168,76,0.5)"/>
    <circle cx="16" cy="17" r="0.6" fill="rgba(201,168,76,0.5)"/>
  </svg>
);

const SangeetIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" fill="rgba(107,15,26,0.1)" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
    {/* Music notes */}
    <path d="M10 17 L10 10 L20 8 L20 15" stroke="rgba(201,168,76,0.75)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <circle cx="9" cy="17" r="2" fill="rgba(201,168,76,0.65)"/>
    <circle cx="19" cy="15" r="2" fill="rgba(201,168,76,0.65)"/>
    {/* Staff lines */}
    <line x1="8" y1="21" x2="20" y2="21" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
  </svg>
);

const RingsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <defs>
      <radialGradient id="ring-gold" cx="40%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#E8D5A3"/>
        <stop offset="100%" stopColor="#A07820"/>
      </radialGradient>
    </defs>
    <circle cx="14" cy="14" r="13" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.25)" strokeWidth="1"/>
    {/* Two interlocking rings */}
    <circle cx="11" cy="14" r="6" fill="none" stroke="url(#ring-gold)" strokeWidth="2.5"/>
    <circle cx="17" cy="14" r="6" fill="none" stroke="url(#ring-gold)" strokeWidth="2.5"/>
    {/* Diamond on left ring */}
    <path d="M8.5 11 L11 9 L13.5 11 L11 16Z" fill="rgba(220,230,255,0.5)" stroke="rgba(201,168,76,0.5)" strokeWidth="0.5"/>
  </svg>
);

const CameraIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" fill="rgba(107,15,26,0.1)" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
    {/* Camera body */}
    <rect x="7" y="11" width="14" height="10" rx="2" fill="rgba(245,237,216,0.1)" stroke="rgba(201,168,76,0.5)" strokeWidth="1"/>
    {/* Lens */}
    <circle cx="14" cy="16" r="3.5" fill="rgba(107,15,26,0.2)" stroke="rgba(201,168,76,0.5)" strokeWidth="1"/>
    <circle cx="14" cy="16" r="2" fill="rgba(107,15,26,0.15)" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5"/>
    {/* Flash bump */}
    <rect x="10" y="9" width="4" height="2" rx="1" fill="rgba(245,237,216,0.15)" stroke="rgba(201,168,76,0.4)" strokeWidth="0.7"/>
    {/* Indicator dot */}
    <circle cx="19" cy="12" r="1" fill="rgba(201,168,76,0.7)"/>
  </svg>
);

const DinnerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" fill="rgba(107,15,26,0.1)" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
    {/* Plate */}
    <circle cx="14" cy="15" r="6" fill="rgba(245,237,216,0.06)" stroke="rgba(201,168,76,0.4)" strokeWidth="1"/>
    <circle cx="14" cy="15" r="4" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
    {/* Fork */}
    <line x1="10" y1="9" x2="10" y2="22" stroke="rgba(201,168,76,0.6)" strokeWidth="1" strokeLinecap="round"/>
    <line x1="9" y1="9" x2="9" y2="13" stroke="rgba(201,168,76,0.5)" strokeWidth="0.7" strokeLinecap="round"/>
    <line x1="11" y1="9" x2="11" y2="13" stroke="rgba(201,168,76,0.5)" strokeWidth="0.7" strokeLinecap="round"/>
    {/* Knife */}
    <line x1="18" y1="9" x2="18" y2="22" stroke="rgba(201,168,76,0.6)" strokeWidth="1" strokeLinecap="round"/>
    <path d="M18 9 Q19.5 11 19 14 L18 14" stroke="rgba(201,168,76,0.5)" strokeWidth="0.7" fill="none"/>
  </svg>
);

const CelebrationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" fill="rgba(107,15,26,0.1)" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
    {/* Firework burst */}
    {[0,40,80,120,160,200,240,280,320].map((deg, i) => {
      const angle = (deg * Math.PI) / 180;
      const x1 = 14 + 3 * Math.cos(angle), y1 = 14 + 3 * Math.sin(angle);
      const x2 = 14 + 8 * Math.cos(angle), y2 = 14 + 8 * Math.sin(angle);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(201,168,76,0.7)" strokeWidth="1.2" strokeLinecap="round"/>;
    })}
    <circle cx="14" cy="14" r="2.5" fill="rgba(201,168,76,0.75)"/>
    {/* Sparkle dots */}
    <circle cx="8" cy="8" r="1.2" fill="rgba(201,168,76,0.5)"/>
    <circle cx="20" cy="7" r="1" fill="rgba(201,168,76,0.45)"/>
    <circle cx="21" cy="20" r="1" fill="rgba(201,168,76,0.45)"/>
    <circle cx="7" cy="20" r="1.2" fill="rgba(201,168,76,0.5)"/>
  </svg>
);

// ─── CEREMONIES DATA ───────────────────────────────────────────────────────
const preWeddingEvents = [
  {
    date: "07 Jun (Sun)",
    time: "08:00",
    name: "Haldi Ceremony",
    desc: "Sacred turmeric blessing at home",
    location: "Rajapeth, Amravati (Nikhil's Residence)",
    Icon: HaldiIcon,
    accent: 'rgba(201,168,76,0.15)'
  },
  {
    date: "07 Jun (Sun)",
    time: "18:00",
    name: "Mehendi Artistry",
    desc: "Mehndi applications & family bonding",
    location: "Rajapeth, Amravati (Nikhil's Residence)",
    Icon: MehendiIcon,
    accent: 'transparent'
  }
];

const weddingEvents = [
  {
    date: "08 Jun (Mon)",
    time: "11:00",
    name: "Wedding Ceremony",
    desc: "Saptapadi · Sacred vows & Pheras",
    location: "Corinthians Resort & Club, Pune",
    Icon: RingsIcon,
    accent: 'rgba(201,168,76,0.18)'
  },
  {
    date: "08 Jun (Mon)",
    time: "13:00",
    name: "Photo Session",
    desc: "Capturing memories & family portraits",
    location: "Corinthians Resort & Club, Pune",
    Icon: CameraIcon,
    accent: 'transparent'
  }
];

const receptionEvents = [
  {
    date: "09 Jun (Tue)",
    time: "19:00",
    name: "Grand Reception & Sangeet",
    desc: "Wedding feast, music & dance celebrations",
    location: "Rajapeth, Amravati (Nikhil's Residence)",
    Icon: CelebrationIcon,
    accent: 'rgba(107,15,26,0.12)'
  }
];

function VenueTag({ location }: { location: string }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: "'Lato', sans-serif",
      fontSize: '9px',
      letterSpacing: '0.08em',
      color: 'rgba(201,168,76,0.45)',
      fontWeight: 700,
      marginTop: '3px'
    }}>
      <svg width="7" height="9" viewBox="0 0 7 9" fill="none">
        <path d="M3.5 0C1.6 0 0 1.6 0 3.5 0 6 3.5 9 3.5 9S7 6 7 3.5C7 1.6 5.4 0 3.5 0Z" fill="rgba(201,168,76,0.4)"/>
        <circle cx="3.5" cy="3.5" r="1.2" fill="rgba(245,237,216,0.3)"/>
      </svg>
      {location}
    </span>
  );
}
function CeremonyRow({ item, index, baseDelay = 0 }: { item: any; index: number; baseDelay?: number }) {
  return (
    <motion.div
      key={index}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
        padding: '16px 14px',
        borderBottom: '1px solid rgba(201,168,76,0.07)',
        background: item.accent,
        borderRadius: '2px',
        marginBottom: '2px',
        position: 'relative'
      }}
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: baseDelay + index * 0.1, ease: 'easeOut' }}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      className="gpu-layer-simple"
    >
      <div style={{
        flexShrink: 0,
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(10,2,8,0.4)',
        border: '1px solid rgba(201,168,76,0.15)',
        borderRadius: '2px'
      }}>
        <item.Icon />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '24px',
            fontWeight: 300,
            color: '#F5EDD8'
          }}>
            {item.time}
          </p>

          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '11px',
            fontWeight: 600,
            color: '#F5EDD8',
            letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }}>
            {item.name}
          </p>
        </div>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '14px',
          fontStyle: 'italic',
          color: 'rgba(245,237,216,0.4)'
        }}>
          {item.desc}
        </p>

        <VenueTag location={item.location} />
      </div>
    </motion.div>
  );
}

function VenueHeader({ label, city, date }: { label: string; city: string; date: string }) {
  return (
    <motion.div
      style={{ marginBottom: '12px', marginTop: '8px' }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 14px',
        background: 'linear-gradient(135deg, rgba(107,15,26,0.3), rgba(60,5,12,0.2))',
        border: '1px solid rgba(107,15,26,0.45)',
        borderLeft: '3px solid #8B1A24',
        borderRadius: '2px'
      }}
      className="gpu-layer-simple"
    >
        <svg width="10" height="13" viewBox="0 0 10 13" fill="none">
          <path d="M5 0C2.2 0 0 2.2 0 5 0 8.7 5 13 5 13S10 8.7 10 5C10 2.2 7.8 0 5 0Z" fill="rgba(201,168,76,0.6)"/>
          <circle cx="5" cy="5" r="1.8" fill="rgba(245,237,216,0.4)"/>
        </svg>
        <div>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: '#C9A84C',
            textTransform: 'uppercase'
          }}>{label}</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '13px',
            fontStyle: 'italic',
            color: 'rgba(245,237,216,0.45)'
          }}>{city} &nbsp;·&nbsp; {date}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventsSection() {
  return (
    <section
      id="timing"
      style={{
        background: 'linear-gradient(180deg, #0D0210 0%, #0A0208 100%)',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Side roses */}
      <motion.div
        style={{ position: 'absolute', left: '-75px', top: '12%', opacity: 0.22, pointerEvents: 'none' }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="gpu-layer"
      >
        <RealisticRose size={225} opacity={1} rotate={-20} hue="crimson"/>
      </motion.div>
      <motion.div
        style={{ position: 'absolute', right: '-65px', bottom: '12%', opacity: 0.2, pointerEvents: 'none' }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <RealisticRose size={205} opacity={1} rotate={15} hue="dark"/>
      </motion.div>
      <motion.div
        style={{ position: 'absolute', right: '-32px', top: '18%', opacity: 0.14, pointerEvents: 'none' }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      >
        <RoseBud size={115} opacity={1} rotate={20}/>
      </motion.div>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '-120px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(107,15,26,0.14), transparent)',
        pointerEvents: 'none', filter: 'blur(40px)'
      }}/>

      <div style={{ maxWidth: '560px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '48px' }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <h2 className="section-title">Timing</h2>
          <p className="section-subtitle">Programme du jour</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5))' }}/>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: '10px', color: 'rgba(201,168,76,0.5)', letterSpacing: '0.3em' }}>✦</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)' }}/>
          </div>
        </motion.div>

        {/* Pre-Wedding */}
        <VenueHeader label="Amravati Events" city="Rajapeth, Amravati" date="07 June 2026"/>
        {preWeddingEvents.map((item, i) => (
          <CeremonyRow key={i} item={item} index={i} baseDelay={0}/>
        ))}

        <div style={{ height: '24px' }}/>

        {/* Wedding */}
        <VenueHeader label="Pune Wedding" city="Corinthians Resort, Pune" date="08 June 2026"/>
        {weddingEvents.map((item, i) => (
          <CeremonyRow key={`wed-${i}`} item={item} index={i} baseDelay={0.1}/>
        ))}

        <div style={{ height: '24px' }}/>

        {/* Reception */}
        <VenueHeader label="Grand Reception" city="Rajapeth, Amravati" date="09 June 2026"/>
        {receptionEvents.map((item, i) => (
          <CeremonyRow key={`rec-${i}`} item={item} index={i} baseDelay={0.2}/>
        ))}

        {/* Note */}
        <motion.div
          style={{ marginTop: '28px', textAlign: 'center' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)', marginBottom: '14px' }}/>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '13px',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.28)',
            letterSpacing: '0.04em'
          }}>
            ✦ &nbsp; Timings are approximate. Please arrive 15 minutes early. &nbsp; ✦
          </p>
        </motion.div>
      </div>
    </section>
  );
}
