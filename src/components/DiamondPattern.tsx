"use client";

import { useMemo } from "react";

export default function DiamondPattern({ opacity = 0.03, className = "" }: { opacity?: number; className?: string }) {
  const diamonds = useMemo(() => {
    const cols = 12;
    const rows = 20;
    const items = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c / cols) * 100;
        const y = (r / rows) * 100;
        const offset = r % 2 === 0 ? 0 : (100 / cols) / 2;
        items.push({ x: x + offset, y });
      }
    }
    return items;
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        <defs>
          <linearGradient id="dpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A5BFF" />
            <stop offset="100%" stopColor="#00CFFF" />
          </linearGradient>
        </defs>
        {diamonds.map((d, i) => (
          <polygon
            key={i}
            points={`${d.x},${d.y - 4} ${d.x + 3},${d.y} ${d.x},${d.y + 4} ${d.x - 3},${d.y}`}
            fill="none"
            stroke="url(#dpGrad)"
            strokeWidth="0.06"
          />
        ))}
      </svg>
    </div>
  );
}
