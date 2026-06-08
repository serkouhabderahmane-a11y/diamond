"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiMail, HiPhone, HiBadgeCheck } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import DiamondPattern from "./DiamondPattern";

const footerLinks = {
  DịchVụ: [
    { label: "Thiết Kế Website", href: "#" },
    { label: "Ứng Dụng Di Động", href: "#" },
    { label: "Phần Mềm CRM", href: "#" },
    { label: "Thương Mại Điện Tử", href: "#" },
    { label: "Thiết Kế Thương Hiệu", href: "#" },
    { label: "AI & Tự Động Hóa", href: "#" },
  ],
  DựÁn: [
    { label: "Website Doanh Nghiệp", href: "#" },
    { label: "Cổng Thương Mại", href: "#" },
    { label: "App Mobile", href: "#" },
    { label: "Hệ Thống Quản Lý", href: "#" },
    { label: "Landing Page", href: "#" },
  ],
  TàiNguyên: [
    { label: "Blog Công Nghệ", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Tài Liệu", href: "#" },
    { label: "Trung Tâm Trợ Giúp", href: "#" },
    { label: "Chính Sách Bảo Mật", href: "#" },
    { label: "Điều Khoản Dịch Vụ", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Sapphire gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-diamond-navy via-[#080F2A] to-[#040814]" />
      <DiamondPattern opacity={0.04} />

      {/* Light sweep animation */}
      <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
        <motion.div
          className="absolute top-0 w-[60%] h-full bg-gradient-to-r from-transparent via-diamond-blue/50 to-transparent"
          animate={{ left: ["-60%", "160%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Diamond Digital emblem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <img
            src="/img/logoDDwhite.png"
            alt="Diamond Digital"
            className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </motion.div>

        {/* Newsletter + Contact */}
        <div className="grid lg:grid-cols-2 gap-8 pb-10 border-b border-white/5 mb-10">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-bold tracking-tight mb-2"
            >
              Đăng Ký Nhận{" "}
              <span className="text-gradient">Tin</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-sm text-white/30 mb-4"
            >
              Nhận thông tin về xu hướng công nghệ và ưu đãi mới nhất
            </motion.p>
            <div className="flex crystal rounded-xl p-1 max-w-md border-white/5">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none"
              />
              <button className="bg-gradient-to-r from-diamond-blue to-blue-600 px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-1.5 whitespace-nowrap hover:shadow-[0_0_20px_rgba(10,91,255,0.2)] transition-all">
                Đăng Ký
                <HiArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="crystal rounded-xl p-4 border-white/5">
              <HiMail className="w-4 h-4 text-diamond-cyan mb-2" />
              <p className="text-xs text-white/40">Email</p>
              <p className="text-sm text-white/80">contact@diamonddigital.io</p>
            </div>
            <div className="crystal rounded-xl p-4 border-white/5">
              <HiPhone className="w-4 h-4 text-diamond-cyan mb-2" />
              <p className="text-xs text-white/40">Hotline</p>
              <p className="text-sm text-white/80">+84 123 456 789</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-10">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <p className="text-xs text-white/30 leading-relaxed mb-4 max-w-xs">
              Diamond Digital là công ty công nghệ hàng đầu, chuyên cung cấp giải pháp số toàn diện cho doanh nghiệp tại Việt Nam và quốc tế.
            </p>
            <div className="flex gap-2.5 mb-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full crystal flex items-center justify-center text-white/30 hover:text-diamond-cyan transition-all text-sm border-white/5"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <div className="flex gap-2">
              <div className="px-2.5 py-1 rounded-md bg-diamond-blue/10 border border-diamond-blue/20 text-[10px] text-diamond-cyan flex items-center gap-1">
                <HiBadgeCheck /> ISO 9001
              </div>
              <div className="px-2.5 py-1 rounded-md bg-diamond-blue/10 border border-diamond-blue/20 text-[10px] text-diamond-cyan flex items-center gap-1">
                <HiBadgeCheck /> Đối Tác Google
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-white/50 mb-3 tracking-wider uppercase">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-white/30 hover:text-white/50 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5">
          <p className="text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} Diamond Digital. Bản quyền đã được bảo lưu.
          </p>
          <p className="text-[11px] text-white/20">
            Transforming Ideas Into Digital Assets
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[11px] text-white/20 hover:text-white/40 transition-colors">Chính Sách Bảo Mật</a>
            <a href="#" className="text-[11px] text-white/20 hover:text-white/40 transition-colors">Điều Khoản</a>
            <a href="#" className="text-[11px] text-white/20 hover:text-white/40 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
