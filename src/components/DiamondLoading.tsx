"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DiamondLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    // Hide instantly — just long enough for first paint (~50ms)
    const timer = setTimeout(() => {
      if (!cancelled) setLoading(false);
    }, 50);

    // Absolute fallback at 300ms
    const fallback = setTimeout(() => {
      if (!cancelled) setLoading(false);
    }, 300);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="diamond-loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-diamond-dark pointer-events-none"
          style={{ WebkitTransform: "translateZ(0)" }}
        >
          <div className="relative">
            <svg width="80" height="100" viewBox="0 0 80 100" className="overflow-visible">
              <defs>
                <linearGradient id="loadTop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0A5BFF" />
                  <stop offset="100%" stopColor="#00CFFF" />
                </linearGradient>
              </defs>
              <polygon
                points="40,2 74,40 40,98 6,40"
                fill="none"
                stroke="url(#loadTop)"
                strokeWidth="1.5"
              />
              <line x1="40" y1="2" x2="40" y2="98" stroke="rgba(10,91,255,0.25)" strokeWidth="0.8" strokeDasharray="3 4" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
