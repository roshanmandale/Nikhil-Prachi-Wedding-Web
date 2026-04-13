"use client";

import { motion } from "framer-motion";

// Bouquet line art
const BouquetArt = () => (
  <svg viewBox="0 0 200 240" width="160" height="192" fill="none">
    {/* Stems */}
    <path d="M100 220 Q95 180 90 155" stroke="rgba(245,237,216,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M100 220 Q100 178 100 150" stroke="rgba(245,237,216,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M100 220 Q105 180 110 155" stroke="rgba(245,237,216,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M100 220 Q85 175 75 148" stroke="rgba(245,237,216,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M100 220 Q115 175 125 148" stroke="rgba(245,237,216,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Ribbon */}
    <path d="M88 210 Q100 205 112 210 Q105 220 100 225 Q95 220 88 210" stroke="rgba(201,168,76,0.6)" strokeWidth="1" fill="rgba(201,168,76,0.08)"/>
    <path d="M88 210 Q80 215 78 222" stroke="rgba(201,168,76,0.5)" strokeWidth="1" fill="none"/>
    <path d="M112 210 Q120 215 122 222" stroke="rgba(201,168,76,0.5)" strokeWidth="1" fill="none"/>
    {/* Rose 1 - center large */}
    <ellipse cx="100" cy="100" rx="32" ry="40" fill="#6B0F1A" fillOpacity="0.75" transform="rotate(-10 100 100)"/>
    <ellipse cx="100" cy="100" rx="32" ry="40" fill="#8B1A24" fillOpacity="0.6" transform="rotate(35 100 100)"/>
    <ellipse cx="100" cy="100" rx="32" ry="40" fill="#6B0F1A" fillOpacity="0.7" transform="rotate(80 100 100)"/>
    <ellipse cx="100" cy="100" rx="25" ry="32" fill="#A01E2A" fillOpacity="0.8" transform="rotate(15 100 100)"/>
    <ellipse cx="100" cy="100" rx="25" ry="32" fill="#8B1A24" fillOpacity="0.75" transform="rotate(60 100 100)"/>
    <circle cx="100" cy="100" r="16" fill="#C0392B" fillOpacity="0.85"/>
    <circle cx="100" cy="100" r="9" fill="#8B1A24"/>
    <circle cx="100" cy="100" r="4" fill="#5C0D14"/>
    {/* Rose 2 - left */}
    <ellipse cx="65" cy="125" rx="22" ry="28" fill="#6B0F1A" fillOpacity="0.7" transform="rotate(-20 65 125)"/>
    <ellipse cx="65" cy="125" rx="22" ry="28" fill="#8B1A24" fillOpacity="0.55" transform="rotate(30 65 125)"/>
    <ellipse cx="65" cy="125" rx="18" ry="22" fill="#A01E2A" fillOpacity="0.75" transform="rotate(5 65 125)"/>
    <circle cx="65" cy="125" r="10" fill="#C0392B" fillOpacity="0.8"/>
    <circle cx="65" cy="125" r="5" fill="#8B1A24"/>
    {/* Rose 3 - right */}
    <ellipse cx="135" cy="125" rx="22" ry="28" fill="#6B0F1A" fillOpacity="0.7" transform="rotate(20 135 125)"/>
    <ellipse cx="135" cy="125" rx="22" ry="28" fill="#8B1A24" fillOpacity="0.55" transform="rotate(-30 135 125)"/>
    <ellipse cx="135" cy="125" rx="18" ry="22" fill="#A01E2A" fillOpacity="0.75" transform="rotate(-5 135 125)"/>
    <circle cx="135" cy="125" r="10" fill="#C0392B" fillOpacity="0.8"/>
    <circle cx="135" cy="125" r="5" fill="#8B1A24"/>
    {/* Small buds */}
    <ellipse cx="78" cy="82" rx="12" ry="16" fill="#6B0F1A" fillOpacity="0.6" transform="rotate(-10 78 82)"/>
    <ellipse cx="78" cy="82" rx="12" ry="16" fill="#8B1A24" fillOpacity="0.5" transform="rotate(40 78 82)"/>
    <circle cx="78" cy="82" r="6" fill="#A01E2A" fillOpacity="0.75"/>
    <ellipse cx="122" cy="82" rx="12" ry="16" fill="#6B0F1A" fillOpacity="0.6" transform="rotate(10 122 82)"/>
    <ellipse cx="122" cy="82" rx="12" ry="16" fill="#8B1A24" fillOpacity="0.5" transform="rotate(-40 122 82)"/>
    <circle cx="122" cy="82" r="6" fill="#A01E2A" fillOpacity="0.75"/>
    {/* Leaves */}
    <path d="M72 142 Q56 148 52 165 Q68 155 72 142" fill="#1A3A0A" fillOpacity="0.6"/>
    <path d="M128 142 Q144 148 148 165 Q132 155 128 142" fill="#1A3A0A" fillOpacity="0.6"/>
    <path d="M60 100 Q42 105 38 122 Q55 112 60 100" fill="#1A3A0A" fillOpacity="0.5"/>
    <path d="M140 100 Q158 105 162 122 Q145 112 140 100" fill="#1A3A0A" fillOpacity="0.5"/>
    {/* Sparkle dots */}
    <circle cx="50" cy="70" r="2" fill="rgba(201,168,76,0.5)"/>
    <circle cx="150" cy="75" r="1.5" fill="rgba(201,168,76,0.4)"/>
    <circle cx="100" cy="55" r="2.5" fill="rgba(201,168,76,0.6)"/>
    <circle cx="35" cy="130" r="1.5" fill="rgba(201,168,76,0.35)"/>
    <circle cx="165" cy="130" r="1.5" fill="rgba(201,168,76,0.35)"/>
  </svg>
);

// Champagne bottle art
const ChampagneArt = () => (
  <svg viewBox="0 0 100 240" width="80" height="192" fill="none">
    {/* Bottle */}
    <path d="M42 220 L42 110 Q35 90 35 70 L35 40 Q35 20 50 15 Q65 20 65 40 L65 70 Q65 90 58 110 L58 220 Z" stroke="rgba(245,237,216,0.6)" strokeWidth="1.2" fill="rgba(245,237,216,0.04)"/>
    {/* Neck */}
    <rect x="43" y="15" width="14" height="10" stroke="rgba(245,237,216,0.5)" strokeWidth="1" fill="rgba(245,237,216,0.05)"/>
    {/* Cork */}
    <rect x="44" y="8" width="12" height="8" rx="2" fill="rgba(201,168,76,0.4)" stroke="rgba(201,168,76,0.6)" strokeWidth="0.8"/>
    {/* Wire cage */}
    <path d="M44 13 L44 20 M50 11 L50 20 M56 13 L56 20" stroke="rgba(201,168,76,0.4)" strokeWidth="0.7"/>
    <ellipse cx="50" cy="20" rx="8" ry="2" stroke="rgba(201,168,76,0.4)" strokeWidth="0.7" fill="none"/>
    {/* Label */}
    <rect x="37" y="130" width="26" height="45" stroke="rgba(201,168,76,0.3)" strokeWidth="0.8" fill="rgba(201,168,76,0.04)"/>
    <line x1="37" y1="140" x2="63" y2="140" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
    <line x1="37" y1="165" x2="63" y2="165" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
    {/* Liquid */}
    <path d="M43 110 Q35 95 35 75 L35 60 Q38 65 43 65" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" fill="rgba(201,168,76,0.06)"/>
    {/* Bubbles */}
    {[[48,80],[52,70],[46,60],[53,55],[49,45]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="1.5" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" fill="none"/>
    ))}
    {/* Gold sparkles */}
    <text x="30" y="50" fontFamily="serif" fontSize="8" fill="rgba(201,168,76,0.5)">✦</text>
    <text x="62" y="60" fontFamily="serif" fontSize="6" fill="rgba(201,168,76,0.4)">✦</text>
    <text x="25" y="100" fontFamily="serif" fontSize="7" fill="rgba(201,168,76,0.3)">✦</text>
    <text x="68" y="95" fontFamily="serif" fontSize="5" fill="rgba(201,168,76,0.35)">✦</text>
  </svg>
);

export default function DressCodeSection() {
  const colors = [
    { name: 'Night Crimson', hex: '#6B0F1A' },
    { name: 'Deep Bordeaux', hex: '#4A0E18' },
    { name: 'Midnight Blush', hex: '#3D2030' },
    { name: 'Champagne Gold', hex: '#C9A84C' },
    { name: 'Ivory White', hex: '#F5EDD8' },
  ];

  return (
    <>
      {/* DRESS CODE SECTION */}
      <section
        id="dresscode"
        className="floral-bg"
        style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '40px' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">Dress Code</h2>
            <p className="section-subtitle">Внешний вид</p>
            <div className="gold-line" style={{ marginTop: '12px' }}/>
          </motion.div>

          {/* Dress illustration area */}
          <motion.div
            className="glass-card"
            style={{ padding: '30px 24px', marginBottom: '24px', textAlign: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Dress code image - dark elegant setup */}
            <div style={{
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'rgba(107,15,26,0.15)',
              padding: '20px',
              marginBottom: '20px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Decorative roses in background */}
              <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.15 }}>
                <svg viewBox="0 0 100 100" width="120" height="120" fill="none">
                  <ellipse cx="50" cy="50" rx="40" ry="50" fill="#6B0F1A" transform="rotate(-15 50 50)"/>
                  <ellipse cx="50" cy="50" rx="40" ry="50" fill="#8B1A24" transform="rotate(45 50 50)"/>
                  <circle cx="50" cy="50" r="22" fill="#C0392B"/>
                  <circle cx="50" cy="50" r="12" fill="#8B1A24"/>
                </svg>
              </div>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: '#C9A84C',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}>
                Black Tie
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '15px',
                fontStyle: 'italic',
                color: 'rgba(245,237,216,0.65)',
                lineHeight: 1.7
              }}>
                We will fall in love if you come in classic attire. Sarees &amp; lehengas for ladies — elegant formal gowns for guests. Sherwani, tuxedo, or suit for gentlemen.
              </p>
            </div>

            {/* Color palette */}
            <div style={{ marginBottom: '16px' }}>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '9px',
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                Preferred Color Palette
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                {colors.map((c, i) => (
                  <div key={i} title={c.name} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '32px', height: '32px',
                      borderRadius: '50%',
                      background: c.hex,
                      border: '1.5px solid rgba(255,255,255,0.15)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                      margin: '0 auto 4px'
                    }}/>
                    <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)', fontFamily: "'Lato'", letterSpacing: '0.05em' }}>
                      {c.name.split(' ')[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section
        id="details"
        style={{
          background: '#6B0F1A',
          padding: '80px 24px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Dark overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(10,2,8,0.5) 0%, rgba(10,2,8,0.2) 50%, rgba(10,2,8,0.5) 100%)',
          pointerEvents: 'none'
        }}/>

        <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '40px' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">Details</h2>
            <p className="section-subtitle">Размещение</p>
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(245,237,216,0.4), transparent)', marginTop: '12px' }}/>
          </motion.div>

          {/* Illustration + text row */}
          <motion.div
            style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '28px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ flexShrink: 0 }}>
              <BouquetArt />
            </div>
            <div style={{ flex: 1, paddingTop: '20px' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '15px',
                color: 'rgba(245,237,216,0.75)',
                lineHeight: 1.75,
                fontStyle: 'italic',
                marginBottom: '16px'
              }}>
                We ask you not to be late! If you have any dietary requirements or special needs, please contact our event coordinator.
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '15px',
                color: 'rgba(245,237,216,0.75)',
                lineHeight: 1.75,
                fontStyle: 'italic',
                marginBottom: '20px'
              }}>
                Your presence is the most valuable gift. If you would like to share wishes, you may leave a card or contribute to our honeymoon fund.
              </p>
              <a
                href="#rsvp"
                style={{
                  display: 'inline-block',
                  padding: '11px 24px',
                  border: '1px solid rgba(245,237,216,0.6)',
                  color: 'rgba(245,237,216,0.9)',
                  fontFamily: "'Cinzel', serif",
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  transition: 'all 0.3s'
                }}
              >
                Contact Coordinator
              </a>
            </div>
          </motion.div>

          {/* Champagne + additional info */}
          <motion.div
            style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ flex: 1 }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '15px',
                color: 'rgba(245,237,216,0.75)',
                lineHeight: 1.75,
                fontStyle: 'italic'
              }}>
                Florals 🌹 — They are the decoration of our evening and the decoration of your table. Be sure to take a sprig with you as a keepsake of our celebration!
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <ChampagneArt />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
