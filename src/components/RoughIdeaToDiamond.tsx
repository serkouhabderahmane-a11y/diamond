"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiLightningBolt, HiTrendingUp } from "react-icons/hi";
import DiamondPattern from "./DiamondPattern";

const transformations = [
  {
    challenge: "A travel startup needed a booking platform that could handle 10,000+ daily users with a seamless UX and AI-powered recommendations.",
    process: "We designed a custom Next.js platform with Node.js microservices, integrated AI for personalized suggestions, and optimized for sub-second load times.",
    result: "400% traffic increase, 3x booking conversion, featured in Tech in Asia.",
    image: "/img/screencapture-lmwanderstravels-2026-06-07-16_16_48.png",
    tags: ["Next.js", "Node.js", "AI", "Redis"],
  },
  {
    challenge: "An e-commerce brand in West Africa needed a modern storefront with multi-currency, multi-language, and mobile-first experience.",
    process: "Built a React + Shopify headless architecture with localized payment gateways and a custom admin dashboard for inventory management.",
    result: "250% revenue growth in 6 months, expanded to 3 new markets across West Africa.",
    image: "/img/screencapture-grenierdeguinee-2026-06-07-16_16_13.png",
    tags: ["React", "Shopify", "Node.js"],
  },
];

export default function RoughIdeaToDiamond() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-diamond-blue/[0.02] to-transparent" />
      <DiamondPattern opacity={0.02} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-diamond-cyan text-xs tracking-widest uppercase font-medium">
            Case Studies
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-4 tracking-tight">
            From Rough Idea to{" "}
            <span className="text-gradient">Polished Diamond</span>
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            See how we transform raw business challenges into valuable digital assets
          </p>
        </motion.div>

        <div className="space-y-8">
          {transformations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="crystal rounded-2xl overflow-hidden border-white/5"
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Before - Challenge */}
                <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] text-white/40 font-bold">01</div>
                    <span className="text-[10px] text-white/30 tracking-wider uppercase">The Challenge</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white/80 mb-3">Raw Idea</h3>
                  <p className="text-xs md:text-sm text-white/40 leading-relaxed">
                    {item.challenge}
                  </p>
                  <div className="mt-4 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      <HiLightningBolt className="w-3 h-3 text-amber-400/60" />
                      <span className="text-[10px] text-white/30">Pain Points</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Slow growth", "Poor UX", "Scalability"].map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-[9px] bg-amber-400/5 text-amber-400/50 border border-amber-400/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center - Our Process */}
                <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/5 relative">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-diamond-blue/30 to-transparent lg:hidden" />
                  <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-diamond-blue/30 to-transparent hidden lg:block" />

                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-diamond-blue/20 flex items-center justify-center text-[10px] text-diamond-blue font-bold">02</div>
                    <span className="text-[10px] text-white/30 tracking-wider uppercase">Diamond Digital Process</span>
                  </div>

                  {/* Diamond icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <svg width="28" height="28" viewBox="0 0 28 28">
                      <polygon points="14,2 25,10 25,18 14,26 3,18 3,10" fill="none" stroke="#0A5BFF" strokeWidth="1" />
                      <polygon points="14,6 21,12 21,16 14,22 7,16 7,12" fill="none" stroke="#00CFFF" strokeWidth="0.5" opacity="0.6" />
                    </svg>
                    <h3 className="text-sm font-semibold text-gradient">Polishing Process</h3>
                  </div>

                  <p className="text-xs md:text-sm text-white/40 leading-relaxed mb-4">
                    {item.process}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[9px] bg-diamond-blue/10 text-diamond-cyan border border-diamond-blue/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* After - Result */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-diamond-cyan/20 flex items-center justify-center text-[10px] text-diamond-cyan font-bold">03</div>
                    <span className="text-[10px] text-white/30 tracking-wider uppercase">The Result</span>
                  </div>

                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-gray-900 mb-4">
                    <img
                      src={item.image}
                      alt="Result"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-diamond-navy/60 to-transparent" />
                    <div className="absolute bottom-2 right-2">
                      <div className="px-2 py-0.5 rounded text-[8px] bg-diamond-blue/20 text-diamond-cyan border border-diamond-blue/30">
                        Live Project
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <HiTrendingUp className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <p className="text-xs md:text-sm text-white/70 font-medium">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary text-sm font-medium text-white"
          >
            Start Your Transformation
            <HiArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
