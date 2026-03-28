"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const preloadImages = [
  "/images/logo.png",
  "/images/hero/crispy-pata.png",
  "/images/hero/food-cart.png",
  "/images/hero/start-negosyo.png",
  "/images/products/10-ulam-bundle.png",
  "/images/products/3-ulam-bundle.png",
  "/images/products/4-ulam-bundle.png",
  "/images/products/5-ulam-bundle.png",
  "/images/products/5-ulam-w-belly.png",
  "/images/products/6-ulam-bundle.png",
  "/images/products/pork-bbq-1.png",
  "/images/products/pork-bbq-2.png",
  "/images/products/crispy-pata.png",
  "/images/products/fried-chicken.png",
];

function loadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(true);

  const loadAssets = useCallback(async () => {
    const total = preloadImages.length;
    let completed = 0;

    // Load images in small batches for smooth progress
    const batchSize = 3;
    for (let i = 0; i < total; i += batchSize) {
      const batch = preloadImages.slice(i, i + batchSize);
      await Promise.all(batch.map(loadImage));
      completed += batch.length;
      setProgress(Math.min(Math.round((completed / total) * 100), 100));
    }

    // Brief pause at 100%
    await new Promise((r) => setTimeout(r, 400));
    setLoaded(true);

    // Remove splash after exit animation
    setTimeout(() => setVisible(false), 800);
  }, []);

  useEffect(() => {
    loadAssets();
  }, [loadAssets]);

  return (
    <>
      {/* Content — always mounted, fades in when splash exits */}
      <div
        className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={loaded ? undefined : { position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none" }}
      >
        {children}
      </div>

      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="splash"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.04]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="splash-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8B6914" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#splash-grid)" />
              </svg>
            </div>

            {/* Animated glow */}
            <motion.div
              className="absolute w-[500px] h-[500px] rounded-full blur-[150px] bg-white/10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Content */}
            <div className="relative flex flex-col items-center gap-8">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Mr. Fryman"
                  width={200}
                  height={90}
                  priority
                  className="drop-shadow-xl"
                />
              </motion.div>

              {/* Progress section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col items-center gap-4 w-64"
              >
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-[#8B6914]/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#8B6914] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>

                {/* Percentage */}
                <div className="flex items-center justify-between w-full">
                  <span className="text-[#8B6914]/60 text-xs font-medium tracking-wider uppercase">
                    Loading
                  </span>
                  <span className="text-[#8B6914] text-sm font-bold font-mono tabular-nums">
                    {progress}%
                  </span>
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-[#8B6914]/50 text-xs tracking-[0.2em] uppercase font-medium"
              >
                Where we fry it you&apos;ll surely gonna love it!
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
