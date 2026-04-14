"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { RealisticRose, RoseBud } from "./SvgOrnaments";

/* ═══════════════════════════════════════════
   OPTIMIZED FLOWER SHOWER — Hero Home Only
   GPU-Accelerated & Smooth for Vedic Royalty
   ═══════════════════════════════════════════ */

interface FlowerProps {
  initialX: number;
  delay: number;
  duration: number;
  size: number;
  type: "rose" | "bud" | "darkRose";
  rotation: number;
  rotationSpeed: number;
  horizontalDrift: number;
}

const FlowerItem = ({ flower }: { flower: FlowerProps }) => {
  return (
    <motion.div
      className="absolute will-change-transform"
      style={{ width: flower.size, height: flower.size, left: `${flower.initialX}%`, top: -100 }}
      initial={{ 
        y: -50, 
        rotate: flower.rotation, 
        opacity: 0,
        scale: 0.6
      }}
      animate={{
        y: "110vh",
        x: [0, flower.horizontalDrift],
        rotate: flower.rotation + flower.rotationSpeed,
        opacity: [0, 0.9, 0.9, 0],
        scale: [0.6, 1, 1, 0.8],
      }}
      transition={{
        duration: flower.duration,
        repeat: Infinity,
        delay: flower.delay,
        ease: "linear",
      }}
    >
      {flower.type === "rose" ? (
        <RealisticRose size={flower.size} opacity={0.9} rotate={flower.rotation} hue="crimson" />
      ) : flower.type === "bud" ? (
        <RoseBud size={flower.size} opacity={0.9} rotate={flower.rotation} />
      ) : (
        <RealisticRose size={flower.size} opacity={0.6} rotate={flower.rotation} hue="dark" />
      )}
    </motion.div>
  );
};

export default function FloatingPetals() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Use useMemo to prevent re-renders of the random configurations
  const flowerData = useMemo(() => {
    // Reduced count to 60 for perfect smoothness (lag-free)
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 20,
      size: 15 + Math.random() * 25,
      type: (Math.random() > 0.7 ? "rose" : (Math.random() > 0.4 ? "bud" : "darkRose")) as any,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 500,
      horizontalDrift: (Math.random() - 0.5) * 150, // drift in pixels
    }));
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[50] overflow-hidden w-full h-full">
      {flowerData.map((flower) => (
        <FlowerItem key={flower.id} flower={flower} />
      ))}
    </div>
  );
}
