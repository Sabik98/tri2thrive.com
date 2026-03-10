"use client";

import { useEffect, useRef } from "react";

export default function RaceLine() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      path.style.strokeDashoffset = `${length * (1 - pct)}`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <svg
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl pointer-events-none z-0 hidden md:block"
      style={{ height: "100%" }}
      viewBox="0 0 800 5000"
      preserveAspectRatio="none"
      fill="none"
    >
      {/* The race route — zigzags down the page */}
      <path
        ref={pathRef}
        d="M400 0
           L400 200
           C400 300 200 350 200 450
           C200 550 600 600 600 700
           C600 800 200 850 200 950
           C200 1050 600 1100 600 1200
           C600 1300 200 1350 200 1450
           C200 1550 600 1600 600 1700
           C600 1800 400 1850 400 1950
           L400 5000"
        stroke="url(#routeGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Faint dotted guide */}
      <path
        d="M400 0
           L400 200
           C400 300 200 350 200 450
           C200 550 600 600 600 700
           C600 800 200 850 200 950
           C200 1050 600 1100 600 1200
           C600 1300 200 1350 200 1450
           C200 1550 600 1600 600 1700
           C600 1800 400 1850 400 1950
           L400 5000"
        stroke="#0d948810"
        strokeWidth="1.5"
        strokeDasharray="8 8"
      />
      <defs>
        <linearGradient id="routeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="35%" stopColor="#14b8a6" />
          <stop offset="55%" stopColor="#fbbf24" />
          <stop offset="75%" stopColor="#f97066" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
      </defs>
    </svg>
  );
}
