"use client";

import { useEffect, useState } from "react";

export default function DiamondLoading() {
  const [phase, setPhase] = useState<"show" | "fade" | "hidden">("show");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fade"), 50);
    const t2 = setTimeout(() => setPhase("hidden"), 200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-diamond-dark pointer-events-none"
      style={{
        transition: "opacity 0.15s ease-out",
        opacity: phase === "fade" ? 0 : 1,
      }}
    >
      <svg width="40" height="50" viewBox="0 0 40 50">
        <polygon
          points="20,1 37,20 20,49 3,20"
          fill="none"
          stroke="#0A5BFF"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
