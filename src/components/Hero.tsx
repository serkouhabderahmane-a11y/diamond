"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import DiamondPattern from "./DiamondPattern";

const facets = [
  { label: "Website", angle: 0, color: "#0A5BFF" },
  { label: "App", angle: 60, color: "#00CFFF" },
  { label: "AI", angle: 120, color: "#0A5BFF" },
  { label: "Branding", angle: 180, color: "#00CFFF" },
  { label: "Marketing", angle: 240, color: "#0A5BFF" },
  { label: "Software", angle: 300, color: "#00CFFF" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-diamond-navy via-[#0A1A4A] to-diamond-dark" />
      <DiamondPattern opacity={0.04} className="z-0" />
      <div className="absolute top-[-15%] left-[-5%] w-[70%] h-[70%] rounded-full bg-diamond-blue/15 blur-[120px] animate-blob" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[60%] h-[60%] rounded-full bg-diamond-cyan/10 blur-[100px] animate-blob" style={{ animationDelay: "-4s" }} />

      {/* Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
              animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0], rotate: [0, 360] }}
              transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}

      {/* Light sweep */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-diamond-blue/40 to-transparent" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full crystal text-diamond-cyan text-sm font-medium mb-6 border-diamond-blue/20">
                <span className="w-2 h-2 rounded-full bg-diamond-cyan" />
                Agency Công Nghệ Số Từ 2018
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-5"
            >
              Transforming Ideas Into{" "}
              <span className="text-gradient">Digital Assets</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/60 leading-relaxed max-w-lg mb-8"
            >
              Just as pressure transforms carbon into a diamond, we transform businesses into valuable digital assets — through strategy, technology, creativity, and execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-diamond-blue to-blue-600 text-white font-medium text-sm hover:shadow-[0_0_30px_rgba(10,91,255,0.3)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Liên Hệ Ngay
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white/80 font-medium text-sm hover:bg-white/5 hover:border-white/30 transition-all"
              >
                Xem Dự Án
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-5 mt-8 pt-6 border-t border-white/5"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-diamond-navy bg-gradient-to-br from-diamond-blue to-diamond-cyan flex items-center justify-center text-[10px] font-bold"
                  >
                    D
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">500+ Khách Hàng</p>
                <p className="text-xs text-white/30">Đã tin tưởng hợp tác</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Diamond Centerpiece */}
          <div className="order-1 lg:order-2 relative h-[420px] sm:h-[500px] lg:h-[580px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative"
              style={{
                perspective: "800px",
              }}
            >
              {/* Outer glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-r from-diamond-blue/10 via-diamond-cyan/5 to-diamond-blue/10 blur-3xl animate-pulse-glow" />
              </div>

              {/* Rotating diamond */}
              <motion.div
                className="relative w-[260px] h-[300px] sm:w-[320px] sm:h-[360px]"
                animate={{
                  rotateY: -15 + mousePos.x * 15,
                  rotateX: 10 - mousePos.y * 10,
                }}
                transition={{ type: "spring", stiffness: 60, damping: 30 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Main diamond shape */}
                <svg
                  viewBox="0 0 200 240"
                  className="w-full h-full drop-shadow-[0_0_60px_rgba(10,91,255,0.3)]"
                >
                  <defs>
                    <linearGradient id="facetTop" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0A5BFF" />
                      <stop offset="50%" stopColor="#0066FF" />
                      <stop offset="100%" stopColor="#00CFFF" />
                    </linearGradient>
                    <linearGradient id="facetLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0044CC" />
                      <stop offset="100%" stopColor="#0A5BFF" />
                    </linearGradient>
                    <linearGradient id="facetRight" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00CFFF" />
                      <stop offset="100%" stopColor="#0088CC" />
                    </linearGradient>
                    <linearGradient id="facetBottomL" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0A5BFF" />
                      <stop offset="100%" stopColor="#003399" />
                    </linearGradient>
                    <linearGradient id="facetBottomR" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00CFFF" />
                      <stop offset="100%" stopColor="#006699" />
                    </linearGradient>
                    <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                      <stop offset="30%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="70%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
                    </linearGradient>
                    <linearGradient id="shineSweep" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="40%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="60%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                    <clipPath id="diamondClip">
                      <polygon points="100,5 195,85 100,235 5,85" />
                    </clipPath>
                  </defs>

                  {/* Top crown facets */}
                  <motion.polygon
                    points="100,5 160,60 100,85 40,60"
                    fill="url(#facetTop)"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <polygon points="100,5 195,85 160,60" fill="url(#facetRight)" opacity="0.9" />
                  <polygon points="100,5 40,60 5,85" fill="url(#facetLeft)" opacity="0.7" />
                  <polygon points="160,60 195,85 100,85" fill="url(#facetRight)" opacity="0.5" />
                  <polygon points="40,60 5,85 100,85" fill="url(#facetLeft)" opacity="0.4" />

                  {/* Middle band */}
                  <polygon points="5,85 100,85 100,130 5,130" fill="url(#facetBottomL)" opacity="0.35" />
                  <polygon points="195,85 100,85 100,130 195,130" fill="url(#facetBottomR)" opacity="0.35" />

                  {/* Bottom pavilion */}
                  <motion.polygon
                    points="5,85 100,130 100,235"
                    fill="url(#facetBottomL)"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <motion.polygon
                    points="195,85 100,130 100,235"
                    fill="url(#facetBottomR)"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />

                  {/* Shine overlay */}
                  <motion.polygon
                    points="100,5 195,85 100,235 5,85"
                    fill="url(#shineSweep)"
                    animate={{
                      x: ["-100%", "100%"],
                      y: ["-100%", "100%"],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    clipPath="url(#diamondClip)"
                  />
                </svg>

                {/* Service labels as orbiting facets */}
                {facets.map((facet, i) => {
                  const angleRad = ((facet.angle + 30) * Math.PI) / 180;
                  const radius = 165;
                  const x = Math.cos(angleRad) * radius;
                  const y = Math.sin(angleRad) * radius;
                  return (
                    <motion.div
                      key={facet.label}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 14px)`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                        className="px-3 py-1.5 rounded-md crystal text-[11px] font-medium whitespace-nowrap border-white/5"
                        style={{ color: facet.color }}
                      >
                        {facet.label}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20"
      >
        <span className="text-[10px] text-white/20 tracking-widest uppercase">Cuộn</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-6 bg-gradient-to-b from-diamond-blue/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
