"use client";

import { motion } from "framer-motion";
import { HiCode, HiDeviceMobile, HiCube, HiArrowRight } from "react-icons/hi";
import DiamondPattern from "./DiamondPattern";

const solutions = [
  {
    icon: HiCode,
    title: "Thiết Kế Website",
    desc: "Website doanh nghiệp, landing page, e-commerce chuẩn chuyên nghiệp với giao diện đẹp và tốc độ tải nhanh.",
    image: "/img/screenshot-1.png",
  },
  {
    icon: HiDeviceMobile,
    title: "Ứng Dụng Di Động",
    desc: "App iOS/Android với trải nghiệm mượt mà, thiết kế đẹp và hiệu suất cao cho doanh nghiệp.",
    image: "/img/screenshot-2.png",
  },
  {
    icon: HiCube,
    title: "Phần Mềm Doanh Nghiệp",
    desc: "Hệ thống quản lý, CRM, ERP và các giải pháp phần mềm tùy chỉnh theo quy trình nghiệp vụ.",
    image: "/img/screenshot-3.png",
  },
];

export default function SolutionsShowcase() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <DiamondPattern opacity={0.02} />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-diamond-cyan text-xs tracking-widest uppercase font-medium">
            Giải Pháp
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-4 tracking-tight">
            Giải Pháp Công Nghệ{" "}
            <span className="text-gradient">Toàn Diện</span>
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            Từ website đến ứng dụng di động và phần mềm doanh nghiệp
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left - Team visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden crystal border-white/5">
              <div className="aspect-[4/3] bg-gradient-to-br from-diamond-blue/20 via-diamond-navy to-gray-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <img
                    src="/img/logoDDwhite.png"
                    alt="Diamond Digital"
                    className="h-16 w-auto mx-auto mb-4 object-contain opacity-80"
                  />
                  <p className="text-white/60 text-sm max-w-xs mx-auto mb-4">
                    Đội ngũ hơn 50+ kỹ sư và designer giàu kinh nghiệm
                  </p>
                  <div className="flex justify-center -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-diamond-navy bg-gradient-to-br from-diamond-blue to-blue-400 flex items-center justify-center text-xs font-bold"
                      >
                        D
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-diamond-navy bg-diamond-blue flex items-center justify-center text-xs font-bold">
                      +50
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-diamond-blue/20 rounded-full -z-10" />
            <div className="absolute -top-3 -left-3 w-16 h-16 border border-diamond-cyan/20 rounded-full -z-10" />
          </motion.div>

          {/* Right - Solution cards */}
          <div className="space-y-4">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative crystal rounded-xl border-white/5 hover:border-diamond-blue/20 transition-all duration-300"
              >
                <div className="flex gap-4 p-4 md:p-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 bg-gray-800">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-md bg-diamond-blue/20 flex items-center justify-center text-diamond-blue">
                        <solution.icon className="w-3 h-3" />
                      </div>
                      <h3 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-xs text-white/40 group-hover:text-white/50 transition-colors leading-relaxed">
                      {solution.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-diamond-cyan mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Xem chi tiết <HiArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
