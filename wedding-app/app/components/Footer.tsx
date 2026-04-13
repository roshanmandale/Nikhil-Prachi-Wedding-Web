"use client";

export default function Footer() {
  return (
    <footer style={{
      background: '#080808',
      padding: '60px 24px 40px',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(201,168,76,0.15)'
    }}>
      {/* Background rose */}
      <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.06, pointerEvents: 'none' }}>
        <svg viewBox="0 0 400 400" width="400" height="400" fill="none">
          <ellipse cx="200" cy="200" rx="150" ry="190" fill="#6B0F1A" transform="rotate(-15 200 200)"/>
          <ellipse cx="200" cy="200" rx="150" ry="190" fill="#8B1A24" transform="rotate(55 200 200)"/>
          <ellipse cx="200" cy="200" rx="110" ry="145" fill="#A01E2A" transform="rotate(20 200 200)"/>
          <circle cx="200" cy="200" r="80" fill="#C0392B"/>
          <circle cx="200" cy="200" r="45" fill="#8B1A24"/>
        </svg>
      </div>

      <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Logo names */}
        <p style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: '52px',
          color: '#F5EDD8',
          opacity: 0.75,
          marginBottom: '8px',
          textShadow: '0 0 30px rgba(201,168,76,0.2)'
        }}>
          Nikhil &amp; Prachi
        </p>

        <p style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '11px',
          letterSpacing: '0.35em',
          color: '#C9A84C',
          fontWeight: 400,
          marginBottom: '24px',
          textTransform: 'uppercase',
          opacity: 0.7
        }}>
          08 · June · 2026
        </p>

        {/* Gold divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)', marginBottom: '24px' }}/>

        {/* Nav links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {[
            { label: 'Home', href: '#home' },
            { label: 'Timing', href: '#timing' },
            { label: 'Location', href: '#location' },
            { label: 'Gallery', href: '#gallery' },
            { label: 'Family', href: '#family' },
            { label: 'RSVP', href: '#rsvp' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '9px',
                letterSpacing: '0.25em',
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseOver={e => (e.currentTarget.style.color = 'rgba(201,168,76,0.8)')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Venue */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '13px',
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.25)',
          marginBottom: '8px'
        }}>
          Grand Hyatt Mumbai, Santacruz East, Mumbai — 400099
        </p>

        {/* Made with love */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '12px',
          fontStyle: 'italic',
          color: 'rgba(201,168,76,0.3)'
        }}>
          Made with ❤️ for Nikhil &amp; Prachi · 2026
        </p>
      </div>
    </footer>
  );
}
