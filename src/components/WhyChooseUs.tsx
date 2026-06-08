"use client";

import { motion } from "framer-motion";
import {
  HiLightningBolt,
  HiColorSwatch,
  HiSearch,
  HiDeviceMobile,
  HiShieldCheck,
  HiSupport,
  HiCode,
  HiCollection,
} from "react-icons/hi";

const benefits = [
  {
    icon: HiLightningBolt,
    title: "Fast Delivery",
    desc: "Agile development with rapid iteration cycles.",
    color: "#0A5BFF",
    gradient: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: HiColorSwatch,
    title: "Premium Design",
    desc: "Pixel-perfect interfaces with world-class UI.",
    color: "#00CFFF",
    gradient: "from-cyan-500/20 to-cyan-600/5",
  },
  {
    icon: HiSearch,
    title: "SEO Optimized",
    desc: "Built with search engines in mind from day one.",
    color: "#0A5BFF",
    gradient: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile First",
    desc: "Every project optimized for all devices.",
    color: "#00CFFF",
    gradient: "from-cyan-500/20 to-cyan-600/5",
  },
  {
    icon: HiShieldCheck,
    title: "Secure Systems",
    desc: "Enterprise-grade security across all solutions.",
    color: "#0A5BFF",
    gradient: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: HiSupport,
    title: "Ongoing Support",
    desc: "24/7 maintenance and dedicated support team.",
    color: "#00CFFF",
    gradient: "from-cyan-500/20 to-cyan-600/5",
  },
  {
    icon: HiCode,
    title: "Custom Development",
    desc: "Tailored solutions built specifically for you.",
    color: "#0A5BFF",
    gradient: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: HiCollection,
    title: "Scalable Architecture",
    desc: "Built to grow with your business needs.",
    color: "#00CFFF",
    gradient: "from-cyan-500/20 to-cyan-600/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-diamond-cyan text-sm tracking-widest uppercase font-medium">
            Why Diamond Digital
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 tracking-tight">
            Built for{" "}
            <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We combine creative design with technical expertise to deliver digital solutions that drive real results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 card-hover cursor-default"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color}22, ${benefit.color}11)`,
                    color: benefit.color,
                  }}
                >
                  <benefit.icon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white/90 group-hover:text-white transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-700 blur-3xl"
                style={{ background: benefit.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
