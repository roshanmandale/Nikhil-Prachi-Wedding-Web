"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

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

  return (
    <main style={{ background: '#050305', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Tap-to-open envelope gate */}
      {!opened && <EnvelopeEntry onOpen={() => setOpened(true)} />}

      {/* Global UI chrome */}
      <Navigation />
      <MusicPlayer autoPlay={opened} />

      {/* ── SECTIONS IN ORDER ── */}
      <div id="home"><HeroSection /></div>
      <EventsSection />
      <CountdownSection />
      <VenueSection />
      <GallerySection />
      <RSVPSection />
      <Footer />
    </main>
  );
}
