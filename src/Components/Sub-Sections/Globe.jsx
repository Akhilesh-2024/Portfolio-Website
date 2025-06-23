"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markers: [
    { location: [19.0760, 72.8777], size: 0.1 }, // Fixed Mumbai location
    { location: [14.5995, 120.9842], size: 0.03 }, // Manila
    { location: [23.8103, 90.4125], size: 0.05 }, // Dhaka
    { location: [30.0444, 31.2357], size: 0.07 }, // Cairo
    { location: [39.9042, 116.4074], size: 0.08 }, // Beijing
    { location: [-23.5505, -46.6333], size: 0.1 }, // São Paulo
    { location: [19.4326, -99.1332], size: 0.1 }, // Mexico City
    { location: [40.7128, -74.0060], size: 0.1 }, // New York
    { location: [34.6937, 135.5022], size: 0.05 }, // Osaka
    { location: [41.0082, 28.9784], size: 0.06 }, // Istanbul
  ],
};

export function Globe({ className }) {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, { damping: 20, stiffness: 100 });

  useEffect(() => {
    let width = 0;
    let phi = 0;

    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...GLOBE_CONFIG,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        // No auto-rotation (removed `phi += 0.005`)
        state.phi = phi + smoothRotation.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"), 0);
    return () => globe.destroy();
  }, [smoothRotation]);

  return (
    <div className={twMerge("w-full h-full", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-500 cursor-grab"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = "grab";
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            rotation.set(rotation.get() + delta * 0.01);
          }
        }}
      />
    </div>
  );
}