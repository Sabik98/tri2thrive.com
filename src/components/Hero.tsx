"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.classList.add("animate-fade-up");
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-white to-white" />

      <div ref={containerRef} className="relative z-10 text-center px-6">
        {/* Typographic explosion */}
        <div className="font-[family-name:var(--font-heading)] leading-none select-none">
          <div className="text-outline text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter">
            SWIM
          </div>
          <div className="text-outline text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter -mt-2 md:-mt-6">
            BIKE
          </div>
          <div className="text-outline text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter -mt-2 md:-mt-6">
            RUN
          </div>
          <div className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter -mt-2 md:-mt-6 text-dark-900">
            THRIVE<span className="text-brand-500">.</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-8 md:mt-12 font-[family-name:var(--font-mono)] text-xs md:text-sm tracking-widest uppercase text-dark-400">
          Flowers don&apos;t compete — they just thrive. So can you.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#mission"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 text-white font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-dark-900 transition-colors"
          >
            Start the race
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 8h8M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 text-dark-300">
          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest">
            Scroll
          </span>
          <svg width="16" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="1" width="10" height="18" rx="5" />
            <line x1="8" y1="6" x2="8" y2="10" strokeLinecap="round">
              <animate
                attributeName="y1"
                values="5;8;5"
                dur="1.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y2"
                values="9;12;9"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </line>
          </svg>
        </div>
      </div>
    </section>
  );
}
