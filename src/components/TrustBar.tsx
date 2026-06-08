"use client";

import { motion } from "framer-motion";
import {
  SiVisa,
  SiMastercard,
  SiPaypal,
} from "react-icons/si";
import { HiOutlineCreditCard } from "react-icons/hi";

const logos = [
  { icon: SiVisa, label: "Visa" },
  { icon: SiMastercard, label: "Mastercard" },
  { icon: SiPaypal, label: "PayPal" },
  { icon: HiOutlineCreditCard, label: "ZaloPay" },
  { icon: HiOutlineCreditCard, label: "Momo" },
  { icon: HiOutlineCreditCard, label: "Shopee" },
  { icon: HiOutlineCreditCard, label: "Lazada" },
];

export default function TrustBar() {
  return (
    <section className="relative py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-white/30 tracking-widest uppercase"
        >
          Trusted by leading brands worldwide
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-diamond-navy to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-diamond-navy to-transparent z-10" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-16 animate-marquee"
          style={{ width: "max-content" }}
        >
          {[...logos, ...logos].map((Item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-white/20 hover:text-white/40 transition-colors"
            >
              <Item.icon className="w-8 h-8" />
              <span className="text-sm font-medium whitespace-nowrap">{Item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "2000+", label: "Projects Delivered" },
            { value: "5000+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "7+", label: "Years Experience" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/40 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
