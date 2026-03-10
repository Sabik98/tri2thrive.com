"use client";

import { useEffect, useRef } from "react";

const disciplines = [
  {
    title: "Community",
    subtitle: "SWIM",
    description:
      "Group training and mutual support. Together we push further than we ever could alone. Dive in — the water is warm.",
    images: ["Training sessions", "Open water swims", "Group meetups", "Recovery days", "Race support"],
    accent: "teal",
  },
  {
    title: "Learning",
    subtitle: "BIKE",
    description:
      "Shared coaching from experienced athletes. Nutrition, technique, cadence — every kilometre teaches something new.",
    images: ["Cycling clinics", "Nutrition plans", "Bike fitting", "Hill training", "Indoor sessions"],
    accent: "amber",
  },
  {
    title: "Inspiration",
    subtitle: "RUN",
    description:
      "Inclusive goal-setting across all levels. Your personal best is the only podium that matters. Lace up and go.",
    images: ["5K to marathon", "Trail running", "Speed work", "Race day", "Personal records"],
    accent: "coral",
  },
];

function ScrollStrip({
  items,
  accent,
}: {
  items: string[];
  accent: string;
}) {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    let animId: number;
    let pos = 0;

    const animate = () => {
      pos += 0.5;
      if (pos >= strip.scrollWidth / 2) pos = 0;
      strip.scrollLeft = pos;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const colorMap: Record<string, string> = {
    teal: "bg-teal-100 text-teal-700 border-teal-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    coral: "bg-coral-50 text-coral-600 border-coral-200",
  };

  return (
    <div
      ref={stripRef}
      className="scroll-strip flex gap-3 overflow-x-hidden py-2"
    >
      {/* Duplicate for seamless loop */}
      {[...items, ...items].map((item, i) => (
        <div
          key={i}
          className={`shrink-0 px-4 py-2 rounded-lg border text-xs font-[family-name:var(--font-mono)] font-bold uppercase tracking-wider whitespace-nowrap ${colorMap[accent]}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default function Mission() {
  return (
    <section id="mission" className="relative py-24 md:py-32">
      {/* Bib number watermark */}
      <div className="absolute top-8 right-8 bib-number text-[12rem] md:text-[20rem] leading-none">
        01
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-[0.3em] text-coral-400 mb-3">
            Three Disciplines
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-teal-900">
            One Community
          </h2>
        </div>

        {/* Ribbon layout — alternating left/right */}
        <div className="space-y-20 md:space-y-28">
          {disciplines.map((d, i) => (
            <div
              key={d.title}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-16 items-center`}
            >
              {/* Text side */}
              <div className="flex-1 max-w-md">
                <span
                  className={`font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-[0.3em] ${
                    d.accent === "teal"
                      ? "text-teal-500"
                      : d.accent === "amber"
                        ? "text-amber-500"
                        : "text-coral-400"
                  }`}
                >
                  {d.subtitle}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl font-bold text-teal-900 mt-2">
                  {d.title}
                </h3>
                <p className="mt-4 text-teal-700/70 leading-relaxed">
                  {d.description}
                </p>
              </div>

              {/* Horizontal scroll strip */}
              <div className="flex-1 w-full max-w-md">
                <ScrollStrip items={d.images} accent={d.accent} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
