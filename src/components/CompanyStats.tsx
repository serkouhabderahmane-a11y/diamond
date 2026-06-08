"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2000+", label: "Dự Án Đã Hoàn Thành" },
  { value: "5000+", label: "Khách Hàng" },
  { value: "7+", label: "Năm Kinh Nghiệm" },
  { value: "98%", label: "Khách Hàng Hài Lòng" },
];

export default function CompanyStats() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-diamond-blue/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Diamond Digital{" "}
            <span className="text-gradient">Qua Những Con Số</span>
          </h2>
          <p className="text-white/40 mt-2 text-sm">
            Những con số biết nói về hành trình phát triển của chúng tôi
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="crystal rounded-2xl p-6 md:p-8 text-center border-white/5 hover:border-diamond-blue/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-white/40 group-hover:text-white/60 transition-colors">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
