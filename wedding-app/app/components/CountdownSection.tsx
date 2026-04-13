"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RealisticRose } from "./SvgOrnaments";

const WEDDING_DATE = new Date("2026-06-08T11:00:00");

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(() => Math.max(0, target.getTime() - Date.now()));
  useEffect(() => {
    const t = setInterval(() => setDiff(Math.max(0, target.getTime() - Date.now())), 1000);
    return () => clearInterval(t);
  }, [target]);
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      style={{ textAlign: 'center' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Flip card wrapper */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(160deg, rgba(107,15,26,0.25) 0%, rgba(50,5,12,0.4) 100%)',
        border: '1px solid rgba(201,168,76,0.18)',
        padding: '18px 14px 14px',
        minWidth: '70px',
        overflow: 'hidden'
      }}>
        {/* Shine effect stripe */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.04), transparent)',
          pointerEvents: 'none'
        }}/>
        {/* Middle divider line */}
        <div style={{
          position: 'absolute', top: '50%', left: 0, right: 0, height: '1px',
          background: 'rgba(0,0,0,0.35)', zIndex: 2, transform: 'translateY(-50%)'
        }}/>
        <motion.p
          key={value}
          initial={{ y: -6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.22 }}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(32px, 9vw, 50px)',
            fontWeight: 700,
            color: '#F5EDD8',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            position: 'relative', zIndex: 3
          }}
        >
          {String(value).padStart(2, '0')}
        </motion.p>
      </div>
      <p style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '8px',
        fontWeight: 600,
        letterSpacing: '0.28em',
        color: 'rgba(201,168,76,0.55)',
        textTransform: 'uppercase',
        marginTop: '7px'
      }}>{label}</p>
    </motion.div>
  );
}

// Beautiful themed June 2026 calendar
function WeddingCalendar() {
  const year = 2026, month = 5; // June
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const startOffset = (firstDay + 6) % 7; // Mon-first
  const daysInMonth = 30;
  const weddingDay = 8, haldiBefore = 7;

  const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const cells: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  return (
    <div style={{
      background: 'linear-gradient(160deg, rgba(10,2,8,0.85), rgba(15,3,12,0.9))',
      border: '1px solid rgba(201,168,76,0.2)',
      padding: '24px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative corner ornament */}
      {[0,1,2,3].map(c => (
        <div key={c} style={{
          position: 'absolute',
          top: c < 2 ? '6px' : 'auto',
          bottom: c >= 2 ? '6px' : 'auto',
          left: c % 2 === 0 ? '6px' : 'auto',
          right: c % 2 === 1 ? '6px' : 'auto',
          width: '12px', height: '12px',
          borderTop: c < 2 ? '1.5px solid rgba(201,168,76,0.4)' : 'none',
          borderBottom: c >= 2 ? '1.5px solid rgba(201,168,76,0.4)' : 'none',
          borderLeft: c % 2 === 0 ? '1.5px solid rgba(201,168,76,0.4)' : 'none',
          borderRight: c % 2 === 1 ? '1.5px solid rgba(201,168,76,0.4)' : 'none',
        }}/>
      ))}

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: '36px',
          color: '#F5EDD8',
          lineHeight: 1,
          marginBottom: '4px',
          textShadow: '0 2px 20px rgba(201,168,76,0.15)'
        }}>June 2026</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <div style={{ width: '30px', height: '1px', background: 'rgba(201,168,76,0.3)' }}/>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '7px',
            letterSpacing: '0.35em',
            color: 'rgba(201,168,76,0.45)',
            textTransform: 'uppercase'
          }}>Our Wedding Month</p>
          <div style={{ width: '30px', height: '1px', background: 'rgba(201,168,76,0.3)' }}/>
        </div>
      </div>

      {/* Day labels */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '6px', borderBottom: '1px solid rgba(201,168,76,0.1)', paddingBottom: '8px' }}>
        {dayLabels.map((d, i) => (
          <div key={`${d}-${i}`} style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: i >= 5 ? 'rgba(201,168,76,0.55)' : 'rgba(245,237,216,0.3)',
            textAlign: 'center',
            padding: '0 0 2px'
          }}>{d}</div>
        ))}
      </div>

      {/* Days */}
      {weeks.map((week, wi) => (
        <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '2px' }}>
          {week.map((day, di) => {
            if (!day) return <div key={di}/>;
            const isWedding = day === weddingDay;
            const isHaldi = day === haldiBefore;
            const isWeekend = di >= 5;
            return (
              <div key={di} style={{ display: 'flex', justifyContent: 'center', padding: '3px 0' }}>
                <motion.div
                  style={{
                    width: '32px', height: '32px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: isWedding ? '50%' : isHaldi ? '50%' : '4px',
                    background: isWedding
                      ? 'radial-gradient(circle at 40% 35%, #B02030, #6B0F1A)'
                      : isHaldi
                        ? 'rgba(201,168,76,0.12)'
                        : 'transparent',
                    border: isWedding
                      ? '1.5px solid rgba(201,168,76,0.6)'
                      : isHaldi
                        ? '1px solid rgba(201,168,76,0.35)'
                        : '1px solid transparent',
                    color: isWedding
                      ? '#F5EDD8'
                      : isHaldi
                        ? '#C9A84C'
                        : isWeekend
                          ? 'rgba(201,168,76,0.45)'
                          : 'rgba(245,237,216,0.38)',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: isWedding ? '14px' : '13px',
                    fontWeight: isWedding ? 700 : isHaldi ? 600 : 400,
                    cursor: 'default',
                    transition: 'all 0.2s',
                    boxShadow: isWedding ? '0 0 14px rgba(107,15,26,0.7), 0 0 30px rgba(107,15,26,0.35)' : 'none',
                    animation: isWedding ? 'weddingDayPulse 2.5s ease-in-out infinite' : 'none'
                  }}
                  whileHover={!isWedding && !isHaldi ? { color: 'rgba(245,237,216,0.75)', scale: 1.12 } : {}}
                >
                  {day}
                </motion.div>
              </div>
            );
          })}
        </div>
      ))}

      {/* Legend */}
      <div style={{ marginTop: '16px', borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '14px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { color: 'radial-gradient(circle, #B02030, #6B0F1A)', border: 'rgba(201,168,76,0.6)', label: 'Wedding Day · 8 June' },
          { color: 'rgba(201,168,76,0.12)', border: 'rgba(201,168,76,0.35)', textC: '#C9A84C', label: 'Pre-Wedding · 7 June' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{
              width: '22px', height: '22px', borderRadius: '50%',
              background: item.color,
              border: `1.5px solid ${item.border}`,
              flexShrink: 0
            }}/>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              fontStyle: 'italic',
              color: 'rgba(245,237,216,0.5)'
            }}>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Venue note at bottom */}
      <div style={{ marginTop: '12px', textAlign: 'center' }}>
        <p style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '8px',
          letterSpacing: '0.22em',
          color: 'rgba(201,168,76,0.35)',
          textTransform: 'uppercase'
        }}>Rajapeth, Amravati &nbsp;→&nbsp; Corinthians Resort, Pune</p>
      </div>
    </div>
  );
}

export default function CountdownSection() {
  const { days, hours, mins, secs } = useCountdown(WEDDING_DATE);

  return (
    <section
      id="countdown"
      style={{
        background: 'linear-gradient(180deg, #0A0308 0%, #0D0210 50%, #0A0308 100%)',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background roses */}
      <motion.div
        style={{ position: 'absolute', top: '-35px', right: '-45px', opacity: 0.18, pointerEvents: 'none' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <RealisticRose size={210} opacity={1} rotate={22} hue="crimson"/>
      </motion.div>
      <motion.div
        style={{ position: 'absolute', bottom: '-20px', left: '-35px', opacity: 0.15, pointerEvents: 'none' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <RealisticRose size={185} opacity={1} rotate={-14} hue="dark"/>
      </motion.div>

      <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '40px' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Counting Down</h2>
          <p className="section-subtitle">Until we say "I do"</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5))' }}/>
            <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '10px' }}>✦</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)' }}/>
          </div>
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '12px', alignItems: 'flex-start', marginBottom: '48px', flexWrap: 'wrap' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CountdownUnit value={days} label="Days"/>
          <div style={{ paddingTop: '22px', color: 'rgba(201,168,76,0.35)', fontSize: '28px', fontFamily: "'Cormorant Garamond', serif", lineHeight: 1 }}>:</div>
          <CountdownUnit value={hours} label="Hours"/>
          <div style={{ paddingTop: '22px', color: 'rgba(201,168,76,0.35)', fontSize: '28px', fontFamily: "'Cormorant Garamond', serif", lineHeight: 1 }}>:</div>
          <CountdownUnit value={mins} label="Minutes"/>
          <div style={{ paddingTop: '22px', color: 'rgba(201,168,76,0.35)', fontSize: '28px', fontFamily: "'Cormorant Garamond', serif", lineHeight: 1 }}>:</div>
          <CountdownUnit value={secs} label="Seconds"/>
        </motion.div>

        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <WeddingCalendar/>
        </motion.div>

        {/* Save the date */}
        <motion.div
          style={{ textAlign: 'center', marginTop: '28px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '38px',
            color: 'rgba(245,237,216,0.45)',
            marginBottom: '6px'
          }}>Save the Date</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '14px',
            fontStyle: 'italic',
            color: 'rgba(245,237,216,0.3)',
            letterSpacing: '0.04em'
          }}>Mark your calendar and join us for this joyful celebration</p>
        </motion.div>
      </div>
    </section>
  );
}
