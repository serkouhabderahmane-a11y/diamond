"use client";

import { motion } from "framer-motion";
import { HiStar, HiBadgeCheck } from "react-icons/hi";

const testimonials = [
  {
    name: "Nguyễn Minh Anh",
    role: "CEO, LuxeWander Travels",
    content: "Diamond Digital transformed our online presence completely. Our booking conversion increased 3x and traffic grew 400%. They didn't just build a website — they built a growth engine for our business.",
    rating: 5,
    tags: ["Website", "AI Integration"],
  },
  {
    name: "Aissatou Diallo",
    role: "Founder, Grenier de Guinée",
    content: "Working with Diamond Digital was a game-changer for our e-commerce business. They understood our vision for expanding across West Africa and built a platform that made it possible. Revenue grew 250% in 6 months.",
    rating: 5,
    tags: ["E-Commerce", "Mobile App"],
  },
  {
    name: "Trần Văn Hoàng",
    role: "CTO, FinFlow Financial",
    content: "The team at Diamond Digital brought world-class engineering to our fintech dashboard. The diamond-themed design system they created became integral to our brand identity. Truly a partnership, not just a vendor relationship.",
    rating: 5,
    tags: ["Fintech", "Dashboard"],
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-diamond-blue/[0.02] via-transparent to-diamond-blue/[0.02]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-diamond-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-diamond-cyan text-xs tracking-widest uppercase font-medium">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-4 tracking-tight">
            Businesses We Helped{" "}
            <span className="text-gradient">Shine</span>
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            Real stories from businesses we&apos;ve transformed into digital success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative crystal rounded-2xl p-6 md:p-7"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, ri) => (
                  <HiStar key={ri} className="w-3.5 h-3.5 text-yellow-400/80" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-white/60 leading-relaxed mb-6 min-h-[100px]">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[9px] bg-diamond-blue/10 text-diamond-cyan border border-diamond-blue/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-diamond-blue to-diamond-cyan flex items-center justify-center text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80 flex items-center gap-1">
                    {t.name}
                    <HiBadgeCheck className="w-3.5 h-3.5 text-diamond-cyan" />
                  </p>
                  <p className="text-[11px] text-white/30">{t.role}</p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-diamond-blue/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
