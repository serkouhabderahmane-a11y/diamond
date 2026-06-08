"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  HiSearch,
  HiLightningBolt,
  HiColorSwatch,
  HiCode,
  HiShieldCheck,
  HiPaperAirplane,
} from "react-icons/hi";

const steps = [
  { icon: HiSearch, title: "Discovery", desc: "We dive deep into your business, market, and goals to define the perfect strategy." },
  { icon: HiLightningBolt, title: "Strategy", desc: "A comprehensive roadmap is created, outlining timelines, milestones, and deliverables." },
  { icon: HiColorSwatch, title: "Design", desc: "Beautiful, intuitive interfaces are crafted with your brand and users in mind." },
  { icon: HiCode, title: "Development", desc: "Our engineers build scalable, performant solutions using cutting-edge technology." },
  { icon: HiShieldCheck, title: "Testing", desc: "Rigorous quality assurance ensures every feature works flawlessly across all devices." },
  { icon: HiPaperAirplane, title: "Launch", desc: "We deploy, monitor, and optimize to ensure a smooth go-live and beyond." },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={containerRef} className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-diamond-cyan text-sm tracking-widest uppercase font-medium">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 tracking-tight">
            How we bring your vision to{" "}
            <span className="text-gradient">life</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            A proven six-step process that takes your project from concept to launch with precision and care.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-[31px] md:left-8 top-0 bottom-0 w-[2px] bg-white/5">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-diamond-blue to-diamond-cyan rounded-full"
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Icon */}
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                  className="absolute left-0 top-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl glass flex items-center justify-center text-xl md:text-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${i % 2 === 0 ? "#0A5BFF" : "#00CFFF"}22, transparent)`,
                    color: i % 2 === 0 ? "#0A5BFF" : "#00CFFF",
                  }}
                >
                  <step.icon />
                </motion.div>

                {/* Content */}
                <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-white/10 transition-all duration-500">
                  <span className="text-xs text-white/20 font-mono mb-2 block">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white/90">
                    {step.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
