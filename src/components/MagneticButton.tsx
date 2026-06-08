"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function MagneticButton({
  children,
  href,
  className = "",
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  const baseClass =
    variant === "primary"
      ? "btn-primary px-8 py-4 rounded-full text-sm font-medium inline-flex items-center gap-2"
      : "btn-secondary px-8 py-4 rounded-full text-sm font-medium inline-flex items-center gap-2";

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseClass} ${className} cursor-pointer`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
