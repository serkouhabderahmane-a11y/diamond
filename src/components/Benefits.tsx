"use client";

import { motion } from "framer-motion";
import {
  HiColorSwatch, HiSearch, HiLightningBolt, HiCode, HiCollection,
  HiShieldCheck, HiChartBar, HiDeviceMobile, HiSupport, HiBadgeCheck,
  HiChip, HiTrendingUp,
} from "react-icons/hi";
import DiamondPattern from "./DiamondPattern";

const benefits = [
  { icon: HiColorSwatch, title: "Thiết Kế Chuyên Nghiệp", desc: "Giao diện đẹp, chuẩn UI/UX, tối ưu trải nghiệm người dùng." },
  { icon: HiSearch, title: "Tối Ưu SEO", desc: "Chuẩn SEO từ gốc, giúp website lên top Google nhanh chóng." },
  { icon: HiLightningBolt, title: "Tốc Độ Nhanh", desc: "Tối ưu hiệu suất, tải trang siêu tốc dưới 1 giây." },
  { icon: HiCode, title: "Phát Triển Tùy Chỉnh", desc: "Giải pháp riêng theo yêu cầu, không dùng template có sẵn." },
  { icon: HiCollection, title: "Hệ Thống Mở Rộng", desc: "Kiến trúc linh hoạt, dễ dàng mở rộng khi doanh nghiệp phát triển." },
  { icon: HiShieldCheck, title: "Bảo Mật Cao", desc: "Bảo vệ dữ liệu với các tiêu chuẩn bảo mật hàng đầu." },
  { icon: HiChartBar, title: "Sẵn Sàng Marketing", desc: "Tích hợp sẵn công cụ marketing, analytics và tracking." },
  { icon: HiDeviceMobile, title: "Tối Ưu Di Động", desc: "Hiển thị hoàn hảo trên mọi thiết bị từ desktop đến mobile." },
  { icon: HiSupport, title: "Hỗ Trợ Tận Tâm", desc: "Đội ngũ hỗ trợ 24/7, sẵn sàng giải đáp mọi thắc mắc." },
  { icon: HiBadgeCheck, title: "Dễ Dàng Quản Lý", desc: "CMS thân thiện, dễ dàng cập nhật nội dung không cần code." },
  { icon: HiChip, title: "Công Nghệ Mới", desc: "Áp dụng công nghệ AI và automation hiện đại nhất." },
  { icon: HiTrendingUp, title: "Tập Trung Tăng Trưởng", desc: "Mọi giải pháp đều hướng đến mục tiêu phát triển doanh nghiệp." },
];

export default function Benefits() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-diamond-blue/[0.02] to-transparent pointer-events-none" />
      <DiamondPattern opacity={0.02} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-diamond-cyan text-xs tracking-widest uppercase font-medium">
            Tại Sao Chọn Chúng Tôi
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-4 tracking-tight">
            Cam Kết Dịch Vụ{" "}
            <span className="text-gradient">Chất Lượng Cao</span>
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            12 lý do khiến Diamond Digital là đối tác công nghệ đáng tin cậy của bạn
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative crystal rounded-xl p-4 md:p-5 border-white/5 hover:border-diamond-blue/20 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-diamond-blue/20 to-diamond-cyan/10 flex items-center justify-center text-diamond-blue shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-white/40 group-hover:text-white/50 transition-colors mt-0.5 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
