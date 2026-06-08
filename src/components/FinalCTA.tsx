"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";
import { HiArrowRight } from "react-icons/hi";
import DiamondPattern from "./DiamondPattern";

export default function FinalCTA() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-diamond-blue via-diamond-navy to-diamond-dark" />
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-diamond-cyan/20 blur-[100px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-white/10 blur-[80px] animate-blob"
          style={{ animationDelay: "-4s" }}
        />
      </div>
      <DiamondPattern opacity={0.04} className="z-0" />

      {/* Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {[...Array(isTouch ? 5 : 15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
              animate={{ y: [0, -40, 0], opacity: [0, 0.5, 0], rotate: [0, 360] }}
              transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 5, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full crystal text-sm text-white/80 mb-8 border-diamond-blue/20">
            <span className="w-2 h-2 rounded-full bg-diamond-cyan animate-pulse-glow" />
            Hãy cùng hợp tác
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]"
        >
          Sẵn Sàng Tạo Nên{" "}
          <span className="text-gradient-white">Điều Khác Biệt</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-12"
        >
          Hãy trao đổi về dự án của bạn và cùng nhau tạo ra điều tuyệt vời.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <MagneticButton variant="primary" href="#">
            Nhận Tư Vấn Miễn Phí
            <HiArrowRight className="w-4 h-4" />
          </MagneticButton>
          <MagneticButton variant="secondary" href="#">
            Yêu Cầu Báo Giá
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
