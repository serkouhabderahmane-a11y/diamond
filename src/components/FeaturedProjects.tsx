"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const projects = [
  {
    title: "LuxeWander Travels",
    category: "Travel & Tourism",
    desc: "A premium travel booking platform with AI-powered recommendations and immersive destination experiences.",
    image: "/img/screencapture-lmwanderstravels-2026-06-07-16_16_48.png",
    tags: ["Next.js", "Node.js", "AI", "Stripe"],
    results: "250% increase in bookings",
    color: "#0A5BFF",
  },
  {
    title: "Grenier de Guinée",
    category: "E-commerce",
    desc: "A full-featured e-commerce marketplace connecting local producers with global buyers.",
    image: "/img/screencapture-grenierdeguinee-2026-06-07-16_16_13.png",
    tags: ["React", "Shopify", "Custom CMS"],
    results: "180% revenue growth",
    color: "#00CFFF",
  },
  {
    title: "FinFlow Dashboard",
    category: "Fintech",
    desc: "An enterprise financial analytics dashboard with real-time data visualization and reporting.",
    image: "/img/screencapture-astonishing-toffee-6ee6eb-netlify-app-2026-06-07-16_17_13.png",
    tags: ["Vue.js", "D3.js", "Python", "AWS"],
    results: "40% faster reporting",
    color: "#0A5BFF",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="text-diamond-cyan text-sm tracking-widest uppercase font-medium">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 tracking-tight">
            Projects we&#39;re{" "}
            <span className="text-gradient">proud of</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl">
            Each project represents a partnership built on trust, creativity, and measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] card-hover"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-diamond-navy via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-2 text-white/90 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/40 mb-4 line-clamp-2 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-sm font-medium text-diamond-cyan">{project.results}</span>
                  <span className="inline-flex items-center gap-1 text-sm text-white/30 group-hover:text-white/60 transition-colors">
                    View Case Study <HiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(800px circle at 50% 50%, ${project.color}08, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="btn-secondary px-8 py-4 rounded-full text-sm font-medium inline-flex items-center gap-2 group"
          >
            View All Projects
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
