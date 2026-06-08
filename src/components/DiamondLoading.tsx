"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DiamondLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    // Start a minimum display time, then fade out
    const timer = setTimeout(() => {
      if (!cancelled) setLoading(false);
    }, 2000);

    // Fallback: force-hide after 5 seconds no matter what
    const fallback = setTimeout(() => {
      if (!cancelled) setLoading(false);
    }, 5000);

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
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-diamond-dark pointer-events-none"
          style={{ WebkitTransform: "translateZ(0)" }}
        >
          {/* Static SVG diamond — no motion animations to avoid iOS SVG hang */}
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
            {/* Pulse glow — CSS only */}
            <div
              className="absolute -inset-6 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(10,91,255,0.2) 0%, transparent 70%)",
                animation: "pulse-glow 2.5s ease-in-out infinite",
              }}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg font-bold tracking-tight">
              Diamond<span className="text-diamond-blue">.</span>
            </p>
          </div>

          {/* CSS-only progress bar */}
          <div className="mt-6 w-32 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #0A5BFF, #00CFFF)",
                animation: "loading-bar 2s ease-in-out forwards",
              }}
            />
          </div>

          <style>{`
            @keyframes loading-bar {
              0% { width: 0%; }
              100% { width: 100%; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
