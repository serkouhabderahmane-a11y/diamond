"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus, HiSupport } from "react-icons/hi";
import DiamondPattern from "./DiamondPattern";

const faqs = [
  {
    q: "Diamond Digital cung cấp những dịch vụ gì?",
    a: "Chúng tôi cung cấp đa dạng dịch vụ số bao gồm thiết kế website, phát triển ứng dụng di động, phần mềm tùy chỉnh, giải pháp thương mại điện tử, thiết kế thương hiệu và tích hợp AI. Mỗi dịch vụ đều được tùy chỉnh theo nhu cầu cụ thể của khách hàng.",
  },
  {
    q: "Thời gian hoàn thành một dự án trung bình là bao lâu?",
    a: "Thời gian phụ thuộc vào độ phức tạp và phạm vi dự án. Website tiêu chuẩn mất 4-8 tuần, ứng dụng di động 8-16 tuần, phần mềm lớn hơn 12-24 tuần. Chúng tôi luôn cung cấp lịch trình chi tiết trong giai đoạn tư vấn.",
  },
  {
    q: "Chi phí cho một dự án là bao nhiêu?",
    a: "Chi phí phụ thuộc vào yêu cầu, độ phức tạp và thời gian thực hiện. Chúng tôi cung cấp báo giá chi tiết sau khi tìm hiểu yêu cầu của bạn. Liên hệ với chúng tôi để nhận báo giá miễn phí.",
  },
  {
    q: "Diamond Digital có hỗ trợ sau khi bàn giao không?",
    a: "Có, chúng tôi cung cấp gói hỗ trợ toàn diện sau khi bàn giao bao gồm bảo trì, cập nhật, vá lỗi bảo mật, tối ưu hiệu suất và giám sát 24/7. Gói hỗ trợ linh hoạt theo nhu cầu của bạn.",
  },
  {
    q: "Tôi có thể xem các dự án mẫu trước khi quyết định không?",
    a: "Hoàn toàn có thể! Chúng tôi có một danh mục dự án đa dạng ở nhiều lĩnh vực. Hãy liên hệ để được xem các case study chi tiết và sản phẩm thực tế phù hợp với ngành của bạn.",
  },
  {
    q: "Điều gì làm Diamond Digital khác biệt so với các agency khác?",
    a: "Chúng tôi kết hợp tư duy thiết kế cao cấp với nền tảng kỹ thuật vững chắc, coi mỗi dự án là một đối tác. Phương pháp linh hoạt, giao tiếp minh bạch và tập trung vào kết quả đo lường được là những điểm khác biệt chính.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      <DiamondPattern opacity={0.02} />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-diamond-blue/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-diamond-cyan text-xs tracking-widest uppercase font-medium">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-4 tracking-tight">
            Câu Hỏi{" "}
            <span className="text-gradient">Thường Gặp</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center"
          >
            <div className="w-48 h-48 rounded-full crystal flex items-center justify-center mb-4 border-diamond-blue/10">
              <HiSupport className="w-20 h-20 text-diamond-cyan/60" />
            </div>
            <p className="text-sm text-white/30 text-center max-w-xs">
              Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc
            </p>
            <div className="flex gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-diamond-blue animate-pulse-glow" />
              <div className="w-2 h-2 rounded-full bg-diamond-cyan animate-pulse-glow" style={{ animationDelay: "1s" }} />
              <div className="w-2 h-2 rounded-full bg-diamond-blue animate-pulse-glow" style={{ animationDelay: "2s" }} />
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`rounded-xl border transition-all duration-300 cursor-pointer ${
                  openIndex === i
                    ? "border-diamond-blue/20 crystal"
                    : "border-white/5 bg-white/[0.02] hover:border-white/10"
                }`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center justify-between p-4 md:p-5">
                  <span className="text-sm md:text-base font-medium text-white/80 pr-3">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                      openIndex === i ? "bg-diamond-blue/20 text-diamond-blue" : "bg-white/5 text-white/40"
                    }`}
                  >
                    {openIndex === i ? <HiMinus className="w-3.5 h-3.5" /> : <HiPlus className="w-3.5 h-3.5" />}
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 md:px-5 pb-4 md:pb-5 text-sm text-white/50 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
