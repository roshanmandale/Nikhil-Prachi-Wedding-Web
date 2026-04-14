"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer({ autoPlay = false }: { autoPlay?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const passageTimerRef = useRef<NodeJS.Timeout | null>(null);
  const nodeRefs = useRef<AudioNode[]>([]);
  const tickRef = useRef(0);
  
  // Track if we've auto-played to prevent multiple starts
  const hasAutoPlayed = useRef(false);

  useEffect(() => {
    if (autoPlay && !playing && !hasAutoPlayed.current) {
      hasAutoPlayed.current = true;
      // Small delay to ensure audio context is allowed after interaction
      setTimeout(() => {
        startMusic();
      }, 500);
    }
  }, [autoPlay]);

  // Raag Yaman-inspired D major wedding melody
  const NOTES = {
    D3: 146.83, A3: 220.00, D4: 293.66, E4: 329.63,
    Fs4: 369.99, G4: 392.00, A4: 440.00, B4: 493.88,
    Cs5: 554.37, D5: 587.33, E5: 659.25, Fs5: 739.99,
    A5: 880.00
  };

  // High-fidelity Bansuri Flute melody (Raag Yaman based)
  const MELODY: [number, number, number][] = [
    // Phrase 1: Intro
    [NOTES.A4,  1,   0.8],  [NOTES.B4,  0.5, 0.7],  [NOTES.A4,  1.5, 0.9],
    [NOTES.Fs4, 0.5, 0.75], [NOTES.G4,  0.5, 0.7],  [NOTES.A4,  1.5, 0.85],
    [NOTES.E4,  1.5, 0.7],  [NOTES.D4,  2.5, 1.0],
    
    // Phrase 2: Building
    [NOTES.A4,  1,   0.85], [NOTES.D5,  1,   1.0],   [NOTES.Cs5, 0.5, 0.9],
    [NOTES.B4,  1.5, 0.85], [NOTES.A4,  0.5, 0.75],  [NOTES.Fs4, 1.5, 0.8],
    [NOTES.A4,  1,   0.9],  [NOTES.G4,  0.5, 0.7],   [NOTES.Fs4, 0.5, 0.75],
    [NOTES.E4,  2.5, 0.8],
    
    // Phrase 3: Climax
    [NOTES.D4,  1,   0.85], [NOTES.Fs4, 0.5, 0.75],  [NOTES.A4,  0.5, 0.8],
    [NOTES.D5,  1.5, 1.1],  [NOTES.E5,  0.5, 0.9],   [NOTES.Fs5, 1,   1.0],
    [NOTES.E5,  0.5, 0.85], [NOTES.D5,  1.5, 1.0],   [NOTES.A4,  1,   0.85],
    [NOTES.B4,  1.5, 0.9],  [NOTES.A4,  0.5, 0.8],   [NOTES.Fs4, 2,   0.85],
    [NOTES.E4,  0.5, 0.7],  [NOTES.D4,  3,   1.0],
  ];

  // Chord pads: [freqs[], beats]
  const CHORDS: [[number[], number]] = [
    [[NOTES.D3, NOTES.A3, NOTES.D4], 8],
  ] as any;

  const buildReverb = (ctx: AudioContext): ConvolverNode => {
    const len = ctx.sampleRate * 4;
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) {
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.8);
      }
    }
    const node = ctx.createConvolver();
    node.buffer = buf;
    return node;
  };

  const playFlute = (
    ctx: AudioContext, dest: AudioNode, reverb: AudioNode,
    freq: number, start: number, dur: number, vol: number
  ) => {
    const G = ctx.createGain();
    G.connect(dest);
    G.gain.setValueAtTime(0, start);
    G.gain.linearRampToValueAtTime(0.4 * vol, start + 0.08); // Softer attack
    G.gain.setTargetAtTime(0.3 * vol, start + 0.1, 0.2);
    G.gain.setTargetAtTime(0, start + dur * 0.8, dur * 0.15); // Longer tail
    nodeRefs.current.push(G);

    const rG = ctx.createGain();
    rG.gain.value = 0.45;
    rG.connect(reverb);
    nodeRefs.current.push(rG);

    // Flute harmonics (Square + Sine blend for 'breath')
    [1, 2, 3].forEach((h, idx) => {
      const o = ctx.createOscillator();
      const hG = ctx.createGain();
      o.type = idx === 0 ? 'sine' : idx === 1 ? 'triangle' : 'sine';
      o.frequency.value = freq * h + (idx === 0 ? Math.sin(start * 10) * 2 : 0); // Subtle vibrato
      hG.gain.value = [1, 0.2, 0.05][idx];
      o.connect(hG);
      hG.connect(G);
      hG.connect(rG);
      o.start(start);
      o.stop(start + dur + 0.8);
      nodeRefs.current.push(o, hG);
    });
    
    // Breath noise
    const noise = ctx.createOscillator();
    const nG = ctx.createGain();
    noise.type = 'sine';
    noise.frequency.value = freq * 4.2;
    nG.gain.setValueAtTime(0, start);
    nG.gain.linearRampToValueAtTime(0.012, start + 0.05);
    nG.gain.linearRampToValueAtTime(0, start + dur);
    noise.connect(nG);
    nG.connect(G);
    noise.start(start);
    noise.stop(start + dur);
    nodeRefs.current.push(noise, nG);
  };

  const playPad = (
    ctx: AudioContext, dest: AudioNode, reverb: AudioNode,
    freq: number, start: number, dur: number
  ) => {
    const G = ctx.createGain();
    G.connect(dest);
    G.gain.setValueAtTime(0, start);
    G.gain.linearRampToValueAtTime(0.1, start + 0.8);
    G.gain.setTargetAtTime(0, start + dur - 0.8, 0.8);
    nodeRefs.current.push(G);
    const rG = ctx.createGain();
    rG.gain.value = 0.5;
    rG.connect(reverb);
    nodeRefs.current.push(rG);

    [1, 2].forEach((h, idx) => {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq * h * (idx === 1 ? 1.002 : 1);
      o.connect(G);
      o.connect(rG);
      o.start(start);
      o.stop(start + dur + 1);
      nodeRefs.current.push(o);
    });
  };

  const schedulePassage = (ctx: AudioContext, dry: AudioNode, reverb: AudioNode, startTime: number): number => {
    const BPM = 68; // Slower = more romantic
    const beat = 60 / BPM;
    let t = startTime;

    for (let i = 0; i < MELODY.length; i++) {
      const [freq, beats, vol] = MELODY[i];
      playFlute(ctx, dry, reverb, freq, t, beats * beat, vol);
      t += beats * beat;
    }

    // Pad chords in background, 2 bars each
    const padDur = 8 * beat;
    [ [NOTES.D3, NOTES.A3, NOTES.D4],
      [NOTES.A3, NOTES.E4, NOTES.A4],
      [NOTES.D3, NOTES.Fs4, NOTES.D4],
      [NOTES.A3, NOTES.D4, NOTES.Fs4] ].forEach((chord, ci) => {
      chord.forEach(f => playPad(ctx, dry, reverb, f, startTime + ci * padDur, padDur));
    });

    return (MELODY.reduce((a, [,b]) => a + b, 0)) * beat * 1000;
  };

  const startMusic = () => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    ctxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.setValueAtTime(0, ctx.currentTime);
    // Smooth 2.2s fade-in to prevent CPU spike or audio pop
    master.gain.exponentialRampToValueAtTime(0.88, ctx.currentTime + 2.2);
    master.connect(ctx.destination);
    masterRef.current = master;

    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 6;
    comp.ratio.value = 4;
    comp.attack.value = 0.002;
    comp.release.value = 0.2;
    comp.connect(master);

    const reverb = buildReverb(ctx);
    const revGain = ctx.createGain();
    revGain.gain.value = 0.4;
    reverb.connect(revGain);
    revGain.connect(comp);

    const dry = ctx.createGain();
    dry.gain.value = 0.6;
    dry.connect(comp);

    let nextStartTime = ctx.currentTime + 0.2;
    const durationMs = schedulePassage(ctx, dry, reverb, nextStartTime);
    const durationSec = durationMs / 1000;
    nextStartTime += durationSec;

    // Lookahead buffering: schedule the next loop 500ms before the current one ends
    passageTimerRef.current = setInterval(() => {
      if (ctxRef.current) {
        schedulePassage(ctxRef.current, dry, reverb, nextStartTime);
        nextStartTime += durationSec;
      }
    }, Math.max(durationMs - 500, 1000));

    setPlaying(true);
  };

  const stopMusic = () => {
    if (passageTimerRef.current) { clearInterval(passageTimerRef.current); passageTimerRef.current = null; }
    if (masterRef.current && ctxRef.current) {
      masterRef.current.gain.setTargetAtTime(0, ctxRef.current.currentTime, 0.4);
    }
    setTimeout(() => {
      nodeRefs.current.forEach(n => { try { if (n instanceof OscillatorNode) n.stop(); n.disconnect(); } catch {} });
      nodeRefs.current = [];
      try { ctxRef.current?.close(); } catch {}
      ctxRef.current = null;
      masterRef.current = null;
    }, 700);
    setPlaying(false);
  };

  const toggle = () => {
    if (playing) stopMusic();
    else startMusic();
  };

  // Auto-hide hint after 6s
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 6000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => () => { stopMusic(); }, []);

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>

      {/* Tooltip hint */}
      <AnimatePresence>
        {showHint && !playing && (
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.4 }}
            style={{
              background: 'rgba(10,2,8,0.92)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '4px',
              padding: '8px 14px',
              backdropFilter: 'blur(12px)',
              whiteSpace: 'nowrap'
            }}
          >
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '13px',
              fontStyle: 'italic',
              color: 'rgba(201,168,76,0.85)'
            }}>🎵 Play music</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music button */}
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        title={playing ? "Pause Music" : "Play Wedding Music"}
        aria-label={playing ? "Pause Music" : "Play Wedding Music"}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: playing
            ? 'linear-gradient(135deg, #8B1A24, #6B0F1A)'
            : 'linear-gradient(135deg, rgba(107,15,26,0.9), rgba(55,5,12,0.95))',
          border: `2px solid ${playing ? 'rgba(201,168,76,0.7)' : 'rgba(201,168,76,0.4)'}`,
          backdropFilter: 'blur(14px)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          transition: 'all 0.3s ease',
          boxShadow: playing
            ? '0 0 0 4px rgba(107,15,26,0.2), 0 6px 24px rgba(0,0,0,0.55)'
            : '0 4px 20px rgba(0,0,0,0.5)',
          animation: playing ? 'musicPulse 2s ease-in-out infinite' : 'none'
        }}
      >
        {playing ? (
          <>
            {/* Animated waveform bars */}
            <svg width="22" height="16" viewBox="0 0 22 16">
              {[2, 6, 10, 14, 18].map((x, i) => (
                <rect
                  key={i}
                  x={x} width="2.5" rx="1.2"
                  fill="#C9A84C"
                  style={{
                    animation: `waveBar${i} ${0.45 + i * 0.1}s ease-in-out infinite alternate`,
                    transformOrigin: `${x + 1.25}px bottom`
                  }}
                >
                  <animate
                    attributeName="height"
                    values={`${4 + (i * 2) % 8};${10 + (i * 3) % 6};${4 + (i * 2) % 8}`}
                    dur={`${0.4 + i * 0.12}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    values={`${16 - 4 - (i * 2) % 8};${16 - 10 - (i * 3) % 6};${16 - 4 - (i * 2) % 8}`}
                    dur={`${0.4 + i * 0.12}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              ))}
            </svg>
          </>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {/* Musical note */}
            <path d="M8 16 L8 6 L18 4 L18 14" stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round"/>
            <circle cx="6.5" cy="16" r="2.5" fill="#C9A84C" opacity="0.85"/>
            <circle cx="16.5" cy="14" r="2.5" fill="#C9A84C" opacity="0.85"/>
          </svg>
        )}

        {/* Playing label */}
        {playing && (
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '5.5px',
            letterSpacing: '0.1em',
            color: 'rgba(201,168,76,0.65)',
            textTransform: 'uppercase',
            lineHeight: 1
          }}>Live</p>
        )}
      </motion.button>
    </div>
  );
}
