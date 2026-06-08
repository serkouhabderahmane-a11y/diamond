"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  HiCode,
  HiDeviceMobile,
  HiCube,
  HiShoppingCart,
  HiColorSwatch,
  HiChip,
} from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

const services = [
  {
    icon: HiCode,
    title: "Website Development",
    desc: "Custom websites with premium UI that captivate audiences and drive conversions. Built with modern frameworks for lightning-fast performance.",
    color: "#0A5BFF",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile Applications",
    desc: "Native iOS and Android apps that deliver seamless user experiences. From concept to App Store deployment, we handle it all.",
    color: "#00CFFF",
    tags: ["React Native", "Flutter", "Swift"],
  },
  {
    icon: HiCube,
    title: "Custom Software",
    desc: "Scalable business management systems, CRMs, ERPs, and internal tools that streamline your operations and boost productivity.",
    color: "#0A5BFF",
    tags: ["Node.js", "Python", "Cloud"],
  },
  {
    icon: HiShoppingCart,
    title: "E-commerce Solutions",
    desc: "Powerful online stores and marketplaces with seamless checkout, inventory management, and personalized shopping experiences.",
    color: "#00CFFF",
    tags: ["Shopify", "WooCommerce", "Custom"],
  },
  {
    icon: HiColorSwatch,
    title: "Branding & Design",
    desc: "Complete visual identity design, from logos and color systems to marketing assets that make your brand unforgettable.",
    color: "#0A5BFF",
    tags: ["UI/UX", "Branding", "Graphics"],
  },
  {
    icon: HiChip,
    title: "AI Integration",
    desc: "Modern AI-powered business tools including chatbots, recommendation engines, and predictive analytics for smarter decisions.",
    color: "#00CFFF",
    tags: ["OpenAI", "ML", "Automation"],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="services" ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-diamond-cyan text-sm tracking-widest uppercase font-medium">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 tracking-tight">
            Everything you need to{" "}
            <span className="text-gradient">succeed</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl">
            Comprehensive digital services designed to transform your business from the ground up.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-diamond-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-diamond-navy to-transparent z-10 pointer-events-none" />

        <motion.div
          style={{ x }}
          className="flex gap-6 px-6"
        >
          {[...services, ...services].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % services.length) * 0.1 }}
              className="group relative min-w-[380px] md:min-w-[440px] rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 card-hover cursor-default overflow-hidden flex-shrink-0"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(600px circle at 50% 50%, ${service.color}15, transparent)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}22, ${service.color}11)`,
                    color: service.color,
                  }}
                >
                  <service.icon />
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/40 group-hover:text-white/60 transition-colors leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${service.color}15`,
                        color: service.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-white/30 group-hover:text-diamond-blue transition-colors">
                  Learn more <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
