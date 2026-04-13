"use client";

import { motion } from "framer-motion";

// Gallery photo SVG placeholder with couple silhouettes (or real images!)
const PhotoFrame = ({ style_id, imageUrl }: { style_id: number, imageUrl?: string }) => {
  const gradients = [
    ['#1A0508', '#3D0010', '#200609'],
    ['#0A0208', '#1E0512', '#12030A'],
    ['#050210', '#1A0520', '#0D0315'],
    ['#0A0808', '#201010', '#150808'],
  ];
  const [bg1, bg2, bg3] = gradients[style_id % gradients.length];

  return (
    <motion.div 
      whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(107,15,26,0.4)', borderColor: 'rgba(201,168,76,0.7)' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
      background: bg1,
      border: '1px solid rgba(201,168,76,0.3)',
      padding: '4px', // Reduced padding slightly for better image fit
      position: 'relative',
      borderRadius: '2px',
      overflow: 'hidden'
    }}>
      {/* Decorative inner corners */}
      <div style={{ position: 'absolute', top: 8, left: 8, width: 10, height: 10, borderTop: '1px solid rgba(201,168,76,0.6)', borderLeft: '1px solid rgba(201,168,76,0.6)', zIndex: 3 }}/>
      <div style={{ position: 'absolute', top: 8, right: 8, width: 10, height: 10, borderTop: '1px solid rgba(201,168,76,0.6)', borderRight: '1px solid rgba(201,168,76,0.6)', zIndex: 3 }}/>
      <div style={{ position: 'absolute', bottom: 8, left: 8, width: 10, height: 10, borderBottom: '1px solid rgba(201,168,76,0.6)', borderLeft: '1px solid rgba(201,168,76,0.6)', zIndex: 3 }}/>
      <div style={{ position: 'absolute', bottom: 8, right: 8, width: 10, height: 10, borderBottom: '1px solid rgba(201,168,76,0.6)', borderRight: '1px solid rgba(201,168,76,0.6)', zIndex: 3 }}/>
      
      <div style={{
        position: 'absolute', inset: '9px',
        border: '1px solid rgba(201,168,76,0.1)',
        pointerEvents: 'none', zIndex: 2
      }}/>
      <div style={{
        width: '100%',
        height: '180px', // slightly taller
        background: `linear-gradient(135deg, ${bg1} 0%, ${bg2} 50%, ${bg3} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '1px'
      }}>
        {imageUrl ? (
          /* Actual Image rendering */
          // eslint-disable-next-line @next/next/no-img-element
          <motion.img 
            src={imageUrl} 
            alt="Wedding Gallery" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
        ) : (
          /* Fallback SVG Placeholders */
          <>
            {/* Rose overlay */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
              <svg viewBox="0 0 200 200" width="200" height="200" fill="none">
                <ellipse cx="100" cy="100" rx="70" ry="90" fill={style_id % 2 === 0 ? '#6B0F1A' : '#0D0820'} transform="rotate(20 100 100)"/>
                <ellipse cx="100" cy="100" rx="70" ry="90" fill={style_id % 2 === 0 ? '#8B1A24' : '#1A0D35'} transform="rotate(80 100 100)"/>
                <ellipse cx="100" cy="100" rx="50" ry="68" fill={style_id % 2 === 0 ? '#A01E2A' : '#251040'} transform="rotate(140 100 100)"/>
                <circle cx="100" cy="100" r="35" fill={style_id % 2 === 0 ? '#C0392B' : '#3D1880'} fillOpacity="0.6"/>
              </svg>
            </div>

            {/* Couple silhouette */}
            <svg viewBox="0 0 120 140" width="100" height="117" fill="none" style={{ position: 'relative', zIndex: 1 }}>
              {/* Ground/horizon */}
              <path d="M0 100 Q60 88 120 100 L120 140 L0 140Z" fill="rgba(245,237,216,0.06)"/>
              {/* Person 1 */}
              <circle cx="48" cy="45" r="14" fill="rgba(245,237,216,0.55)"/>
              {style_id % 3 === 0 ? (
                // Long hair silhouette (bride)
                <>
                  <path d="M34 43 Q32 62 36 80" stroke="rgba(245,237,216,0.4)" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M62 43 Q64 62 60 80" stroke="rgba(245,237,216,0.4)" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M38 56 Q38 75 34 95 Q38 90 48 92 L48 120 L38 120 L36 140 L60 140 L58 120 L48 120" fill="rgba(245,237,216,0.45)"/>
                  {/* Dress skirt */}
                  <path d="M34 95 Q28 112 22 135 Q35 128 48 130 Q61 128 74 135 Q68 112 62 95Z" fill="rgba(245,237,216,0.35)"/>
                </>
              ) : (
                <path d="M35 58 L35 105 Q42 100 48 105 Q54 100 61 105 L61 58 Q55 52 48 54 Q41 52 35 58Z" fill="rgba(245,237,216,0.5)"/>
              )}
              {/* Person 2 */}
              <circle cx="75" cy="48" r="12" fill="rgba(245,237,216,0.5)"/>
              <path d="M63 60 L63 110 L70 110 L75 85 L80 110 L87 110 L87 60 Q81 54 75 56 Q69 54 63 60Z" fill="rgba(245,237,216,0.45)"/>
              {/* Joined hands */}
              <path d="M61 78 Q68 74 75 78" stroke="rgba(245,237,216,0.4)" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Gold sparkles */}
              <circle cx="15" cy="20" r="2" fill="rgba(201,168,76,0.4)"/>
              <circle cx="105" cy="25" r="1.5" fill="rgba(201,168,76,0.35)"/>
              <circle cx="60" cy="12" r="2.5" fill="rgba(201,168,76,0.5)"/>
              <circle cx="8" cy="60" r="1.5" fill="rgba(201,168,76,0.3)"/>
              <circle cx="112" cy="55" r="1.5" fill="rgba(201,168,76,0.3)"/>
            </svg>
          </>
        )}
      </div>
    </motion.div>
  );
};

// HOW TO ADD REAL IMAGES:
// 1. Place your actual photo in the `public` folder of your project (e.g., public/photos/pic1.jpg)
// 2. Add an `imageUrl` property here matching the path like: `imageUrl: "/photos/pic1.jpg"`
// 3. The gallery will automatically replace the SVG placeholder with your real image!
const galleryItems = [
  { title: "First Meeting", desc: "Where our story began", /* imageUrl: "/photos/1.jpg" */ },
  { title: "Our Journey", desc: "Building dreams together", /* imageUrl: "/photos/2.jpg" */ },
  { title: "The Proposal", desc: "She said yes! 💍", /* imageUrl: "/photos/3.jpg" */ },
  { title: "Engagement Day", desc: "Officially forever", /* imageUrl: "/photos/4.jpg" */ },
  { title: "Pre-Wedding", desc: "Counting the days...", /* imageUrl: "/photos/5.jpg" */ },
  { title: "Together", desc: "You + Me = ∞", /* imageUrl: "/photos/6.jpg" */ },
];

const familyMembers = [
  { side: "Groom's Family", name: "Mr. Pramod Mandale", role: "Father" },
  { side: "Groom's Family", name: "Mrs. Priya Mandale", role: "Mother" },
  { side: "Groom's Family", name: "Ms. Nikita Mandale", role: "Sister" },
  { side: "Groom's Family", name: "Mr. Roshan Mandale", role: "Brother" },
  { side: "Groom's Family", name: "Mr. Rohan Mandale", role: "Brother" },
  { side: "Groom's Family", name: "Mr. Nayan Mandale", role: "Brother" },
  { side: "Bride's Family", name: "Mr. Vijay Verma", role: "Father" },
  { side: "Bride's Family", name: "Mrs. Kavita Verma", role: "Mother" },
  { side: "Bride's Family", name: "Mr. Rohan Verma", role: "Brother" },
];

export default function GallerySection() {
  return (
    <>
      {/* GALLERY */}
      <section
        id="gallery"
        className="floral-bg"
        style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ maxWidth: '560px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '40px' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">Gallery</h2>
            <p className="section-subtitle">A journey through our love</p>
            <div className="gold-line" style={{ marginTop: '12px' }}/>
          </motion.div>

          {/* Photo Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            marginBottom: '16px'
          }}>
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <PhotoFrame style_id={i} imageUrl={item.imageUrl} />
                <div style={{ padding: '10px 4px 4px' }}>
                  <p style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#C9A84C',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '2px'
                  }}>
                    {item.title}
                  </p>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '13px',
                    fontStyle: 'italic',
                    color: 'rgba(245,237,216,0.5)'
                  }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY MEMBERS */}
      <section
        id="family"
        style={{
          background: 'linear-gradient(180deg, #0A0208 0%, #100306 100%)',
          padding: '80px 24px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative large rose left */}
        <div style={{ position: 'absolute', left: '-80px', top: '50%', transform: 'translateY(-50%)', opacity: 0.12, pointerEvents: 'none' }}>
          <svg viewBox="0 0 300 300" width="300" height="300" fill="none">
            <ellipse cx="150" cy="150" rx="110" ry="140" fill="#6B0F1A" transform="rotate(-15 150 150)"/>
            <ellipse cx="150" cy="150" rx="110" ry="140" fill="#8B1A24" transform="rotate(45 150 150)"/>
            <ellipse cx="150" cy="150" rx="80" ry="100" fill="#A01E2A" transform="rotate(20 150 150)"/>
            <circle cx="150" cy="150" r="55" fill="#C0392B"/>
            <circle cx="150" cy="150" r="30" fill="#8B1A24"/>
          </svg>
        </div>

        <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '48px' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">Our Families</h2>
            <p className="section-subtitle">Together they make us whole</p>
            <div className="gold-line" style={{ marginTop: '12px' }}/>
          </motion.div>

          {/* Two columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Groom's side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{
                borderTop: '2px solid #6B0F1A',
                paddingTop: '16px',
                marginBottom: '16px'
              }}>
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#C9A84C',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '4px'
                }}>
                  Groom's Family
                </p>
                <p style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: '26px',
                  color: '#F5EDD8',
                  opacity: 0.6
                }}>
                  Mandale
                </p>
              </div>
              {familyMembers.filter(m => m.side === "Groom's Family").map((member, i) => (
                <motion.div
                  key={i}
                  style={{ marginBottom: '14px' }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '15px',
                    color: '#F5EDD8',
                    fontWeight: 500,
                    marginBottom: '2px'
                  }}>
                    {member.name}
                  </p>
                  <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '10px',
                    color: 'rgba(201,168,76,0.6)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 700
                  }}>
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Bride's side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{
                borderTop: '2px solid #6B0F1A',
                paddingTop: '16px',
                marginBottom: '16px'
              }}>
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#C9A84C',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '4px'
                }}>
                  Bride's Family
                </p>
                <p style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: '26px',
                  color: '#F5EDD8',
                  opacity: 0.6
                }}>
                  Verma
                </p>
              </div>
              {familyMembers.filter(m => m.side === "Bride's Family").map((member, i) => (
                <motion.div
                  key={i}
                  style={{ marginBottom: '14px' }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '15px',
                    color: '#F5EDD8',
                    fontWeight: 500,
                    marginBottom: '2px'
                  }}>
                    {member.name}
                  </p>
                  <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '10px',
                    color: 'rgba(201,168,76,0.6)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 700
                  }}>
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            style={{ marginTop: '40px', textAlign: 'center' }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="gold-line" style={{ marginBottom: '20px' }}/>
            <p style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: '28px',
              color: 'rgba(245,237,216,0.55)',
              lineHeight: 1.4
            }}>
              "Two families, one beautiful beginning"
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
