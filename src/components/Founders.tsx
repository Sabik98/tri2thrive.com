"use client";

import { useState } from "react";

const founders = [
  {
    name: "Dennis Czekalla",
    role: "Cycling & Nutrition Expert",
    bio: "Passionate cyclist and nutrition specialist. Dennis brings years of experience in endurance sports and holistic athlete development to the team.",
    initials: "DC",
    specialties: ["Cycling", "Nutrition", "Endurance"],
  },
  {
    name: "Christopher Beye",
    role: "Tech Engineer & Triathlete",
    bio: "A tech engineer by trade and triathlete by passion. Christopher bridges the gap between data-driven training and human performance.",
    initials: "CB",
    specialties: ["Technology", "Triathlon", "Training"],
  },
];

export default function Founders() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="founders"
      className="relative py-24 md:py-32"
    >
      {/* Bib number watermark */}
      <div className="absolute top-8 left-8 bib-number text-[12rem] md:text-[20rem] leading-none">
        02
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-[0.3em] text-coral-400 mb-3">
            Meet the Pack
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-teal-900">
            Who We Are
          </h2>
        </div>

        {/* Overlapping Venn-style cards */}
        <div className="relative flex flex-col md:flex-row items-center justify-center">
          {founders.map((founder, i) => (
            <div
              key={founder.name}
              className={`relative w-full max-w-sm transition-all duration-500 ${
                i === 0
                  ? hoveredIndex === 0
                    ? "md:-translate-x-8"
                    : hoveredIndex === 1
                      ? "md:translate-x-4"
                      : "md:translate-x-6"
                  : hoveredIndex === 1
                    ? "md:translate-x-8"
                    : hoveredIndex === 0
                      ? "md:-translate-x-4"
                      : "md:-translate-x-6"
              } ${i === 1 ? "md:z-10 -mt-8 md:mt-0" : "z-20"}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-white border border-teal-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500">
                {/* Avatar circle */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                    i === 0
                      ? "bg-gradient-to-br from-teal-400 to-teal-600"
                      : "bg-gradient-to-br from-coral-300 to-coral-500"
                  }`}
                >
                  <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">
                    {founder.initials}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-teal-900">
                  {founder.name}
                </h3>
                <p className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-coral-400 mt-1">
                  {founder.role}
                </p>
                <p className="mt-4 text-sm text-teal-700/70 leading-relaxed">
                  {founder.bio}
                </p>

                {/* Specialty tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {founder.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-[10px] font-[family-name:var(--font-mono)] font-bold uppercase tracking-wider bg-teal-50 text-teal-600 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
