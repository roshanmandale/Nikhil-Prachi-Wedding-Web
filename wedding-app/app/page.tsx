"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

const EnvelopeEntry  = dynamic(() => import("./components/EnvelopeEntry"),  { ssr: false });
const Navigation     = dynamic(() => import("./components/Navigation"),     { ssr: false });
const MusicPlayer    = dynamic(() => import("./components/MusicPlayer"),    { ssr: false });
const HeroSection    = dynamic(() => import("./components/HeroSection"),    { ssr: false });
const EventsSection  = dynamic(() => import("./components/EventsSection"),  { ssr: false });
const CountdownSection = dynamic(() => import("./components/CountdownSection"), { ssr: false });
const VenueSection   = dynamic(() => import("./components/VenueSection"),   { ssr: false });
const GallerySection = dynamic(() => import("./components/GallerySection"), { ssr: false });
const RSVPSection    = dynamic(() => import("./components/RSVPSection"),    { ssr: false });
const Footer         = dynamic(() => import("./components/Footer"),         { ssr: false });

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  return (
    <main style={{ background: '#050305', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Tap-to-open envelope gate */}
      <AnimatePresence mode="wait">
        {!opened && (
          <EnvelopeEntry 
            key="entry-gate"
            onStartTransition={() => setIsOpening(true)}
            onOpen={() => setOpened(true)} 
          />
        )}
      </AnimatePresence>

      <div className="diorama-core" style={{ opacity: opened ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        {/* Global UI chrome */}
        <Navigation />
        <MusicPlayer autoPlay={opened || isOpening} />

        {/* ── SECTIONS IN ORDER ── */}
        <div id="home"><HeroSection isVisible={opened} /></div>
        <EventsSection />
        <CountdownSection />
        <VenueSection />
        <GallerySection />
        <RSVPSection />
        <Footer />
      </div>
    </main>
  );
}
