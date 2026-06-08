"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const projects = [
  {
    title: "LuxeWander Travels",
    category: "Du Lịch",
    image: "/img/screencapture-lmwanderstravels-2026-06-07-16_16_48.png",
    tags: ["Next.js", "Node.js", "AI"],
    color: "#0A5BFF",
  },
  {
    title: "Grenier de Guinée",
    category: "Thương Mại Điện Tử",
    image: "/img/screencapture-grenierdeguinee-2026-06-07-16_16_13.png",
    tags: ["React", "Shopify"],
    color: "#00CFFF",
  },
  {
    title: "FinFlow Dashboard",
    category: "Tài Chính",
    image: "/img/screencapture-astonishing-toffee-6ee6eb-netlify-app-2026-06-07-16_17_13.png",
    tags: ["Vue.js", "Python"],
    color: "#0A5BFF",
  },
  {
    title: "Diamond Shop",
    category: "Thương Mại Điện Tử",
    image: "/img/screenshot-1.png",
    tags: ["Next.js", "Stripe"],
    color: "#00CFFF",
  },
  {
    title: "SmartHR Platform",
    category: "Nhân Sự",
    image: "/img/screenshot-2.png",
    tags: ["React", "Node.js"],
    color: "#0A5BFF",
  },
  {
    title: "MediCare Plus",
    category: "Y Tế",
    image: "/img/screenshot-3.png",
    tags: ["Flutter", "Firebase"],
    color: "#00CFFF",
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-diamond-blue/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-diamond-cyan/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-diamond-cyan text-xs tracking-widest uppercase font-medium">
            Diamond Cases
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-4 tracking-tight">
            From Rough Idea to{" "}
            <span className="text-gradient">Digital Diamond</span>
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            Every project starts as a rough idea and is polished into a valuable digital asset
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative crystal overflow-hidden rounded-xl"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              {/* Shine reflection overlay */}
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0) 100%)",
                  backgroundSize: "200% 200%",
                }}
                animate={{}}
              />

              {/* Mockup */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-diamond-navy via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] font-medium border"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      borderColor: `${project.color}30`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-4 relative z-20">
                <h3 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Diamond corner accent */}
              <div className="absolute -bottom-6 -right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg viewBox="0 0 50 50" className="w-full h-full">
                  <polygon points="25,2 46,18 46,32 25,48 4,32 4,18" fill="#0A5BFF" opacity="0.15" />
                </svg>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-diamond-blue/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <HiArrowRight className="w-3.5 h-3.5 text-diamond-cyan" />
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/70 text-sm hover:bg-white/5 hover:border-white/30 transition-all"
          >
            Xem Tất Cả Dự Án
            <HiArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
