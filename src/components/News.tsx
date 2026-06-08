"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import DiamondPattern from "./DiamondPattern";

const articles = [
  {
    title: "Xu Hướng Thiết Kế Website 2026: Tối Giản Nhưng Tinh Tế",
    date: "01/06/2026",
    category: "Thiết Kế",
    excerpt: "Khám phá những xu hướng thiết kế website mới nhất đang định hình ngành công nghiệp số trong năm 2026.",
    image: "/img/screenshot-1.png",
  },
  {
    title: "Chuyển Đổi Số Cho Doanh Nghiệp Vừa Và Nhỏ: Lộ Trình 90 Ngày",
    date: "25/05/2026",
    category: "Chuyển Đổi Số",
    excerpt: "Hướng dẫn chi tiết lộ trình chuyển đổi số 90 ngày dành cho SME với ngân sách tối ưu.",
    image: "/img/screenshot-2.png",
  },
  {
    title: "Cách AI Đang Thay Đổi Ngành Phát Triển Web & Ứng Dụng",
    date: "18/05/2026",
    category: "Công Nghệ",
    excerpt: "AI đang cách mạng hóa cách chúng ta xây dựng website và ứng dụng di động hiện nay.",
    image: "/img/screenshot-3.png",
  },
];

export default function News() {
  return (
    <section className="section-padding relative">
      <DiamondPattern opacity={0.02} />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-diamond-cyan text-xs tracking-widest uppercase font-medium">
            Tin Tức
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-4 tracking-tight">
            Kiến Thức &{" "}
            <span className="text-gradient">Tin Công Nghệ</span>
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            Cập nhật xu hướng công nghệ và kiến thức chuyển đổi số mới nhất
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group crystal rounded-xl overflow-hidden border-white/5 hover:border-diamond-blue/20 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden bg-gray-900">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] text-white/30">{article.date}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-diamond-blue/10 text-diamond-cyan">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors leading-snug mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-diamond-cyan group-hover:gap-2 transition-all">
                  Đọc tiếp <HiArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
