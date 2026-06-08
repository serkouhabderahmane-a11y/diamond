"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "2000+", label: "Projects Delivered" },
  { value: "5000+", label: "Happy Clients" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "7+", label: "Years Experience" },
];

function AnimatedCounter({ from = 0, to, suffix = "" }: { from?: number; to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01 }}
        >
          <CountingNumber from={from} to={to} suffix={suffix} />
        </motion.span>
      ) : (
        "0"
      )}
    </motion.span>
  );
}

function CountingNumber({ from, to, suffix }: { from: number; to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={false}
      animate={isInView ? { scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {to}{suffix}
    </motion.span>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-diamond-blue/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-diamond-cyan text-sm tracking-widest uppercase font-medium">
            By the Numbers
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 tracking-tight">
            Our impact in{" "}
            <span className="text-gradient">numbers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="relative inline-block">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <div className="absolute -inset-4 bg-diamond-blue/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-sm md:text-base text-white/40 mt-3 group-hover:text-white/60 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
