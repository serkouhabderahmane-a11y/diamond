"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DiamondLoading() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-diamond-dark"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <svg width="120" height="140" viewBox="0 0 120 140" className="overflow-visible">
              <defs>
                <linearGradient id="diamondTop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0A5BFF" />
                  <stop offset="100%" stopColor="#00CFFF" />
                </linearGradient>
                <linearGradient id="diamondLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0066FF" />
                  <stop offset="100%" stopColor="#0A5BFF" />
                </linearGradient>
                <linearGradient id="diamondRight" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00CFFF" />
                  <stop offset="100%" stopColor="#0066FF" />
                </linearGradient>
              </defs>
              <motion.polygon
                points="60,0 108,50 60,130 12,50"
                fill="none"
                stroke="url(#diamondTop)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.line
                x1="60" y1="0" x2="60" y2="130"
                stroke="rgba(10,91,255,0.3)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.line
                x1="12" y1="50" x2="108" y2="50"
                stroke="rgba(0,207,255,0.2)"
                strokeWidth="1"
                strokeDasharray="3 6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              <motion.circle
                cx="60" cy="50" r="3"
                fill="#0A5BFF"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
              />
              <motion.circle
                cx="60" cy="130" r="3"
                fill="#00CFFF"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              />
              <motion.circle
                cx="12" cy="50" r="2.5"
                fill="#0066FF"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.4 }}
              />
              <motion.circle
                cx="108" cy="50" r="2.5"
                fill="#00CFFF"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.15, duration: 0.4 }}
              />
            </svg>
            <motion.div
              className="absolute -inset-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-diamond-blue/10 via-transparent to-diamond-cyan/10 blur-2xl animate-pulse-glow" />
            </motion.div>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-xl font-bold tracking-tight">
              Diamond<span className="text-diamond-blue">.</span>
            </p>
            <p className="text-[10px] text-white/20 tracking-[0.3em] uppercase mt-2">
              Transforming Ideas Into Digital Assets
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 w-40 h-[2px] bg-white/5 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-diamond-blue to-diamond-cyan rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
