"use client";

import { motion } from "framer-motion";
import { HiCode, HiDeviceMobile, HiChip, HiColorSwatch, HiChartBar, HiCube } from "react-icons/hi";
import DiamondPattern from "./DiamondPattern";

const diamondNodes = [
  { icon: HiCode, label: "Website", angle: 0, color: "#0A5BFF" },
  { icon: HiDeviceMobile, label: "Mobile Apps", angle: 60, color: "#00CFFF" },
  { icon: HiColorSwatch, label: "Branding", angle: 120, color: "#0A5BFF" },
  { icon: HiChartBar, label: "Digital Marketing", angle: 180, color: "#00CFFF" },
  { icon: HiChip, label: "AI Solutions", angle: 240, color: "#0A5BFF" },
  { icon: HiCube, label: "Enterprise Software", angle: 300, color: "#00CFFF" },
];

export default function Ecosystem() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-diamond-blue/[0.02] to-transparent" />
      <DiamondPattern opacity={0.025} />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-diamond-cyan text-xs tracking-widest uppercase font-medium">
            The Diamond Ecosystem
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-4 tracking-tight">
            A Cut-Gemstone{" "}
            <span className="text-gradient">Network</span>
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            Every service is a facet of a single, unified digital ecosystem — connected, polished, and built to perform
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto aspect-square flex items-center justify-center">
          {/* Diamond-shaped connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
            <defs>
              <linearGradient id="ecoLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0A5BFF" />
                <stop offset="100%" stopColor="#00CFFF" />
              </linearGradient>
            </defs>

            {/* Outer diamond ring */}
            <motion.polygon
              points="250,30 430,150 430,350 250,470 70,350 70,150"
              fill="none"
              stroke="url(#ecoLineGrad)"
              strokeWidth="1"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Inner diamond */}
            <motion.polygon
              points="250,80 390,180 390,320 250,420 110,320 110,180"
              fill="none"
              stroke="url(#ecoLineGrad)"
              strokeWidth="0.5"
              strokeDasharray="4 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3 }}
            />

            {/* Connector lines from center to nodes */}
            {diamondNodes.map((_, i) => {
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const x = 250 + 160 * Math.cos(angle);
              const y = 250 + 160 * Math.sin(angle);
              return (
                <motion.line
                  key={i}
                  x1={250} y1={250}
                  x2={x} y2={y}
                  stroke="url(#ecoLineGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.25 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                />
              );
            })}
          </svg>

          {/* Center - Diamond Digital core */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-diamond-blue/20 via-transparent to-diamond-cyan/20 blur-2xl" />
              <img
                src="/img/logoDDwhite.png"
                alt="Diamond Digital"
                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(10,91,255,0.3)]"
              />
            </div>
          </motion.div>

          {/* Orbiting node diamonds */}
          {diamondNodes.map((node, i) => {
            const angleRad = (node.angle - 90) * (Math.PI / 180);
            const x = Math.cos(angleRad) * 195;
            const y = Math.sin(angleRad) * 195;

            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.12 }}
                className="absolute z-10"
                style={{
                  left: `calc(50% + ${x}px - 44px)`,
                  top: `calc(50% + ${y}px - 44px)`,
                }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                  className="group relative"
                >
                  {/* Diamond frame */}
                  <svg width="88" height="88" viewBox="0 0 88 88" className="absolute -inset-0.5">
                    <motion.polygon
                      points="44,6 78,28 78,60 44,82 10,60 10,28"
                      fill="rgba(10,91,255,0.03)"
                      stroke={node.color}
                      strokeWidth="0.5"
                      strokeDasharray="3 3"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                  </svg>
                  <div className="relative w-[76px] md:w-[84px] rounded-lg crystal border-white/5 p-2.5 text-center cursor-default">
                    <node.icon className="w-4 h-4 mx-auto mb-1" style={{ color: node.color }} />
                    <p className="text-[9px] md:text-[10px] font-medium text-white/60 leading-tight">
                      {node.label}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
