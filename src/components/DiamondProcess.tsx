"use client";

import { motion } from "framer-motion";
import { HiSearch, HiPencil, HiCode, HiPaperAirplane, HiChartBar } from "react-icons/hi";
import { FiTarget } from "react-icons/fi";
import DiamondPattern from "./DiamondPattern";

const phases = [
  { icon: FiTarget, title: "Discover", subtitle: "Khám Phá", desc: "Understand your business, goals, and audience", color: "#0A5BFF" },
  { icon: HiSearch, title: "Strategy", subtitle: "Chiến Lược", desc: "Craft a tailored roadmap to success", color: "#0A5BFF" },
  { icon: HiPencil, title: "Design", subtitle: "Thiết Kế", desc: "Create stunning, user-centered experiences", color: "#00CFFF" },
  { icon: HiCode, title: "Develop", subtitle: "Phát Triển", desc: "Build with cutting-edge technology", color: "#0A5BFF" },
  { icon: HiPaperAirplane, title: "Launch", subtitle: "Ra Mắt", desc: "Deploy, test, and go live seamlessly", color: "#00CFFF" },
  { icon: HiChartBar, title: "Scale", subtitle: "Mở Rộng", desc: "Optimize, grow, and evolve continuously", color: "#0A5BFF" },
];

const uid = "dp";

export default function DiamondProcess() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-diamond-blue/[0.02] via-transparent to-diamond-blue/[0.02]" />
      <DiamondPattern opacity={0.02} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-diamond-cyan text-xs tracking-widest uppercase font-medium">
            Our Methodology
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-4 tracking-tight">
            The Diamond Process<sup className="text-[10px] text-diamond-cyan align-super ml-0.5">TM</sup>
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            A proven six-phase methodology that transforms rough ideas into polished digital assets
          </p>
        </motion.div>

        {/* Diamond grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* SVG connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
            <defs>
              <linearGradient id={`${uid}procLine`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0A5BFF" />
                <stop offset="100%" stopColor="#00CFFF" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 100,200 L 240,200 M 280,200 L 360,200 M 400,200 L 480,200 M 520,200 L 600,200 M 640,200 L 720,200"
              stroke={`url(#${uid}procLine)`}
              strokeWidth="1"
              strokeDasharray="4 6"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Diamond icon container */}
                <motion.div
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="relative mb-4"
                >
                  <svg width="72" height="72" viewBox="0 0 72 72" className="overflow-visible">
                    <defs>
                      <linearGradient id={`${uid}phaseGrad${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={phase.color} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={phase.color} stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <motion.polygon
                      points="36,4 66,26 66,46 36,68 6,46 6,26"
                      fill={`url(#${uid}phaseGrad${i})`}
                      stroke={phase.color}
                      strokeWidth="0.8"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                    />
                    {/* Inner diamond */}
                    <polygon
                      points="36,14 56,28 56,44 36,58 16,44 16,28"
                      fill="none"
                      stroke={phase.color}
                      strokeWidth="0.4"
                      strokeDasharray="2 4"
                      opacity="0.4"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <phase.icon className="w-5 h-5" style={{ color: phase.color }} />
                  </div>
                </motion.div>

                {/* Phase number */}
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mb-2"
                  style={{ background: `${phase.color}20`, color: phase.color }}
                >
                  {i + 1}
                </div>

                <h3 className="text-sm font-bold text-white/90 mb-0.5">{phase.title}</h3>
                <p className="text-[10px] text-diamond-cyan/60 mb-1 font-medium">{phase.subtitle}</p>
                <p className="text-[10px] text-white/30 leading-relaxed max-w-[120px]">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
