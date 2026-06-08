"use client";

import { motion } from "framer-motion";
import { SiVisa, SiMastercard, SiPaypal, SiStripe } from "react-icons/si";
import { HiOutlineCreditCard } from "react-icons/hi";

const partners = [
  { icon: SiVisa, label: "Visa" },
  { icon: SiMastercard, label: "Mastercard" },
  { icon: SiPaypal, label: "PayPal" },
  { icon: HiOutlineCreditCard, label: "ZaloPay" },
  { icon: HiOutlineCreditCard, label: "Momo" },
  { icon: HiOutlineCreditCard, label: "VNPay" },
  { icon: SiStripe, label: "Stripe" },
];

export default function Partners() {
  return (
    <section className="relative py-14 md:py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-white/20 tracking-widest uppercase mb-8"
        >
          Đối Tác Công Nghệ
        </motion.p>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-white/20 hover:text-white/40 transition-colors">
                <partner.icon className="w-8 h-8 md:w-10 md:h-10" />
                <span className="text-xs md:text-sm font-medium">{partner.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
