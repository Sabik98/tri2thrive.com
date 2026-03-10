"use client";

import { useEffect, useState } from "react";

const checkpoints = [
  { id: "hero", label: "START" },
  { id: "mission", label: "SWIM" },
  { id: "founders", label: "BIKE" },
  { id: "workshops", label: "RUN" },
  { id: "podcast", label: "THRIVE" },
];

export default function ScrollTracker() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(pct);

      const sectionIndex = Math.min(
        Math.floor(pct * checkpoints.length),
        checkpoints.length - 1
      );
      setActiveIndex(sectionIndex);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-8 bg-white/90 backdrop-blur-sm border-b border-dark-100 hidden md:flex items-center">
      <div className="mx-auto max-w-5xl w-full px-6 flex items-center gap-1">
        {/* Track */}
        <div className="relative flex-1 h-1 bg-dark-100 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-brand-500 rounded-full transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        {/* Checkpoint labels */}
        <div className="flex items-center gap-3 ml-4">
          {checkpoints.map((cp, i) => (
            <a
              key={cp.id}
              href={`#${cp.id}`}
              className={`text-[10px] font-[family-name:var(--font-mono)] font-bold tracking-widest transition-all duration-300 ${
                i <= activeIndex
                  ? "text-dark-900"
                  : "text-dark-300"
              }`}
            >
              {cp.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
