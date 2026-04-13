"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Timing", href: "#timing" },
    { label: "Countdown", href: "#countdown" },
    { label: "Location", href: "#location" },
    { label: "Gallery", href: "#gallery" },
    { label: "RSVP", href: "#rsvp" },
  ];

  return (
    <>
    <motion.nav
      style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%',
        zIndex: 800,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0'
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <a href="#home" style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: '28px',
          color: '#F5EDD8',
          textDecoration: 'none',
          textShadow: '0 0 20px rgba(201,168,76,0.3)'
        }}>
          N &amp; P
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: '32px' }}>
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.28em',
                color: 'rgba(255,255,255,0.55)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseOver={e => (e.currentTarget.style.color = '#C9A84C')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}
        >
          <svg width="20" height="14" fill="none">
            <path d="M0 1H20M0 7H20M0 13H20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </motion.nav>

    {/* Mobile menu - Moved outside nav to fix stacking context overlap */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(8,8,8,0.98)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <svg width="22" height="22" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/>
              </svg>
            </button>
            <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: '40px', color: 'rgba(245,237,216,0.3)', marginBottom: '40px' }}>
              N &amp; P
            </p>
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '24px',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  color: '#F5EDD8',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  marginBottom: '24px'
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '14px', fontStyle: 'italic', color: '#C9A84C', marginTop: '24px' }}>
              08 · June · 2026
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
