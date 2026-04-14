"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RealisticRose, FallingPetals } from "./SvgOrnaments";

type Field = {
  name: string;
  phone: string;
  attending: 'yes' | 'no' | '';
  guests: string;
  food: string;
  message: string;
};

const initialField: Field = { name: '', phone: '', attending: '', guests: '1', food: 'no-preference', message: '' };

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label style={{
      fontFamily: "'Cinzel', serif",
      fontSize: '9px',
      fontWeight: 600,
      letterSpacing: '0.28em',
      color: 'rgba(201,168,76,0.65)',
      textTransform: 'uppercase',
      display: 'block',
      marginBottom: '8px'
    }}>{children}</label>
  );
}

export default function RSVPSection() {
  const [form, setForm] = useState<Field>(initialField);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1); // Multi-step: 1 = name/phone, 2 = attending/guests, 3 = food/message

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
    exit: { opacity: 0, x: -30, transition: { duration: 0.3 } }
  };

  return (
    <section
      id="rsvp"
      style={{
        background: 'linear-gradient(180deg, #0A0208 0%, #0D050F 50%, #080308 100%)',
        padding: '80px 24px 100px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Falling petals */}
      <FallingPetals count={10}/>

      {/* Corner roses */}
      <motion.div
        style={{ position: 'absolute', top: '-30px', left: '-40px', opacity: 0.28, pointerEvents: 'none' }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <RealisticRose size={210} opacity={1} rotate={-25} hue="crimson"/>
      </motion.div>
      <motion.div
        style={{ position: 'absolute', top: '-20px', right: '-50px', opacity: 0.25, pointerEvents: 'none' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <RealisticRose size={195} opacity={1} rotate={30} hue="dark"/>
      </motion.div>
      <motion.div
        style={{ position: 'absolute', bottom: '-20px', left: '-20px', opacity: 0.22, pointerEvents: 'none' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      >
        <RealisticRose size={180} opacity={1} rotate={10} hue="blush"/>
      </motion.div>
      <motion.div
        style={{ position: 'absolute', bottom: '-30px', right: '-30px', opacity: 0.22, pointerEvents: 'none' }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <RealisticRose size={190} opacity={1} rotate={-18} hue="crimson"/>
      </motion.div>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '500px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(107,15,26,0.1), transparent)',
        pointerEvents: 'none', filter: 'blur(40px)'
      }}/>

      <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '12px' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">RSVP</h2>
          <p className="section-subtitle">Guest Confirmation</p>
          <div className="gold-line" style={{ marginTop: '14px', marginBottom: '24px' }}/>
        </motion.div>

        {/* Big date display */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '28px' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div style={{
            display: 'inline-block',
            padding: '20px 36px',
            border: '1px solid rgba(107,15,26,0.5)',
            background: 'rgba(107,15,26,0.12)',
            backdropFilter: 'blur(10px)',
            position: 'relative'
          }}>
            <div style={{ position: 'absolute', inset: '5px', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }}/>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(36px, 10vw, 56px)',
              fontWeight: 400,
              color: '#F5EDD8',
              lineHeight: 1.1,
              letterSpacing: '0.06em'
            }}>08.06.26</p>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(30px, 9vw, 48px)',
              fontWeight: 300,
              color: '#C9A84C',
              lineHeight: 1.1,
              letterSpacing: '0.1em',
              opacity: 0.85
            }}>11:00</p>
          </div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '16px',
            fontStyle: 'italic',
            color: 'rgba(245,237,216,0.5)',
            marginTop: '14px',
            lineHeight: 1.65
          }}>
            We'll be overjoyed to see you! Please confirm<br/>
            your attendance by filling in the form below.
          </p>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '9px',
            letterSpacing: '0.25em',
            color: 'rgba(201,168,76,0.5)',
            marginTop: '10px',
            textTransform: 'uppercase'
          }}>
            Kindly respond by &nbsp;<strong style={{ color: 'rgba(201,168,76,0.75)' }}>25 May 2026</strong>
          </p>
        </motion.div>

        {/* Form card */}
        <AnimatePresence mode="wait">
          {submitted ? (
          <motion.div
  key="success"
  className="glass-card gpu-layer"
  style={{ padding: '56px 28px', textAlign: 'center' }}
  initial={{ opacity: 0, scale: 0.88 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, type: 'spring' }}
>
              <FallingPetals count={8}/>
              {/* Animated heart */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.6, times: [0, 0.7, 1] }}
                style={{ marginBottom: '20px' }}
              >
                <svg viewBox="0 0 80 72" width="72" height="65" fill="none" style={{ display: 'block', margin: '0 auto' }}>
                  <defs>
                    <radialGradient id="heart-g" cx="45%" cy="35%" r="60%">
                      <stop offset="0%" stopColor="#C52535"/>
                      <stop offset="100%" stopColor="#4A0610"/>
                    </radialGradient>
                  </defs>
                  <path d="M40 68 C40 68 4 47 4 22 C4 10 12 3 22 3 C29 3 35 7 40 13 C45 7 51 3 58 3 C68 3 76 10 76 22 C76 47 40 68 40 68Z"
                    fill="url(#heart-g)" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5"/>
                  <ellipse cx="28" cy="22" rx="7" ry="5" fill="rgba(255,200,200,0.12)" transform="rotate(-30 28 22)"/>
                </svg>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: '54px',
                  color: '#F5EDD8',
                  marginBottom: '10px'
                }}
              >
                Thank You!
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '16px',
                  fontStyle: 'italic',
                  color: 'rgba(245,237,216,0.6)',
                  lineHeight: 1.7
                }}
              >
                {form.attending === 'yes'
                  ? `We can't wait to share our special day with you, ${form.name.split(' ')[0]}! 🌹`
                  : `We'll miss you dearly, ${form.name.split(' ')[0]}. Thank you for your warm wishes! 💛`}
              </motion.p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8 }}
                style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)', margin: '24px 0 20px' }}
              />
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '9px',
                letterSpacing: '0.3em',
                color: 'rgba(201,168,76,0.45)',
                textTransform: 'uppercase'
              }}>
                Grand Hyatt · Mumbai · 08 June 2026
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="glass-card"
              style={{ padding: '28px 24px 32px', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="gpu-layer"
            >
              {/* Step progress */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '24px' }}>
                {[1, 2, 3].map(s => (
                  <div key={s} style={{
                    flex: 1, height: '2px',
                    background: s <= step ? 'linear-gradient(90deg, #8B1A24, #C9A84C)' : 'rgba(255,255,255,0.08)',
                    borderRadius: '1px',
                    transition: 'all 0.4s ease'
                  }}/>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="s1" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
                    {/* Name */}
                    <div style={{ marginBottom: '18px' }}>
                      <Label>Your Full Name *</Label>
                      <input
                        type="text"
                        className="rsvp-field"
                        placeholder="e.g. Rahul Mehta"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    {/* Phone */}
                    <div style={{ marginBottom: '28px' }}>
                      <Label>WhatsApp / Phone</Label>
                      <input
                        type="tel"
                        className="rsvp-field"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                    <motion.button
                      type="button"
                      className="gold-btn"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={() => form.name && setStep(2)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Continue 
                      <motion.svg 
                        width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </motion.svg>
                    </motion.button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="s2" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
                    {/* Attending */}
                    <div style={{ marginBottom: '20px' }}>
                      <Label>Will you attend? *</Label>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        {([
                          { val: 'yes', icon: '✓', label: 'Joyfully Attend' },
                          { val: 'no', icon: '✗', label: 'Regrettably Cannot' }
                        ] as const).map(opt => (
                          <motion.label
                            key={opt.val}
                            whileHover={{ scale: 1.02 }}
                            style={{
                              flex: 1,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '14px 10px',
                              border: `1.5px solid ${form.attending === opt.val
                                ? (opt.val === 'yes' ? '#C9A84C' : 'rgba(200,60,80,0.6)')
                                : 'rgba(255,255,255,0.08)'}`,
                              background: form.attending === opt.val
                                ? (opt.val === 'yes' ? 'rgba(201,168,76,0.08)' : 'rgba(176,32,48,0.08)')
                                : 'transparent',
                              cursor: 'pointer',
                              transition: 'all 0.25s',
                              borderRadius: '2px'
                            }}
                          >
                            <input
                              type="radio"
                              name="attending"
                              value={opt.val}
                              checked={form.attending === opt.val}
                              onChange={() => setForm({ ...form, attending: opt.val })}
                              style={{ display: 'none' }}
                            />
                            <span style={{ fontSize: '18px', opacity: 0.75 }}>{opt.icon}</span>
                            <span style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: '13px',
                              color: form.attending === opt.val ? '#C9A84C' : 'rgba(245,237,216,0.45)',
                              letterSpacing: '0.04em',
                              textAlign: 'center'
                            }}>
                              {opt.label}
                            </span>
                          </motion.label>
                        ))}
                      </div>
                    </div>

                    {/* Guests */}
                    <div style={{ marginBottom: '28px' }}>
                      <Label>Number of Guests</Label>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {["1", "2", "3", "4", "5+"].map(n => (
                          <motion.button
                            key={n}
                            type="button"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.94 }}
                            onClick={() => setForm({ ...form, guests: n })}
                            style={{
                              width: '44px', height: '44px',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              background: form.guests === n ? 'rgba(107,15,26,0.5)' : 'rgba(255,255,255,0.03)',
                              border: `1px solid ${form.guests === n ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.1)'}`,
                              color: form.guests === n ? '#C9A84C' : 'rgba(245,237,216,0.5)',
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: '16px',
                              cursor: 'pointer',
                              borderRadius: '2px',
                              transition: 'all 0.2s'
                            }}
                          >
                            {n}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        style={{
                          padding: '13px 20px',
                          background: 'transparent',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: 'rgba(245,237,216,0.4)',
                          fontFamily: "'Cinzel', serif",
                          fontSize: '9px',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                          borderRadius: '2px'
                        }}
                      >← Back</button>
                      <motion.button
                        type="button"
                        className="gold-btn"
                        style={{ flex: 1, justifyContent: 'center' }}
                        onClick={() => form.attending && setStep(3)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Continue 
                        <motion.svg 
                          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </motion.svg>
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="s3" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
                    {/* Dietary */}
                    <div style={{ marginBottom: '18px' }}>
                      <Label>Dietary Preference</Label>
                      <select
                        className="rsvp-field"
                        value={form.food}
                        onChange={e => setForm({ ...form, food: e.target.value })}
                      >
                        {[
                          { v: 'no-preference', l: 'No Preference' },
                          { v: 'vegetarian', l: 'Vegetarian / Sattvic' },
                          { v: 'vegan', l: 'Vegan / Jain' },
                          { v: 'non-veg', l: 'Non-Vegetarian' },
                          { v: 'gluten-free', l: 'Gluten Free' },
                        ].map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: '24px' }}>
                      <Label>Wishes for Nikhil &amp; Prachi 💌</Label>
                      <textarea
                        className="rsvp-field"
                        placeholder="Leave a heartfelt message..."
                        rows={3}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{ resize: 'none' }}
                      />
                    </div>

                    {/* Summary */}
                    <div style={{
                      padding: '14px',
                      background: 'rgba(107,15,26,0.12)',
                      border: '1px solid rgba(107,15,26,0.3)',
                      marginBottom: '20px',
                      borderRadius: '2px'
                    }}>
                      <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '14px',
                        color: 'rgba(245,237,216,0.6)',
                        fontStyle: 'italic',
                        lineHeight: 1.6
                      }}>
                        {form.name} &nbsp;·&nbsp; {form.guests} Guest{Number(form.guests) > 1 || form.guests === '5+' ? 's' : ''} &nbsp;·&nbsp;
                        {form.attending === 'yes' ? '✓ Attending' : '✗ Cannot Attend'} &nbsp;·&nbsp; {form.food.replace('-', ' ')}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        style={{
                          padding: '13px 20px',
                          background: 'transparent',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: 'rgba(245,237,216,0.4)',
                          fontFamily: "'Cinzel', serif",
                          fontSize: '9px',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                          borderRadius: '2px'
                        }}
                      >← Back</button>
                      <motion.button
                        type="submit"
                        className="crimson-btn"
                        style={{ flex: 1, justifyContent: 'center' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.svg 
                          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: [0.8, 1.1, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </motion.svg>
                        Submit RSVP
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
