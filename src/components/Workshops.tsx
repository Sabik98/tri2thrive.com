"use client";

import { useState } from "react";
import Image from "next/image";

const workshops = [
  {
    title: "Swim Workshop",
    instructor: "Łukasz Wójt",
    credential: "Olympic Swimmer & Professional Triathlete",
    description:
      "Master your technique in the water with personalized coaching from one of Poland's finest swimmers.",
    image: "/images/workshop-swim.png",
    featured: true,
  },
  {
    title: "Cycling Fundamentals",
    instructor: "Dennis Czekalla",
    credential: "Cycling Coach",
    description:
      "Build endurance, improve cadence, and learn nutrition strategies for long-distance rides.",
    image: null,
    featured: false,
  },
  {
    title: "Transition Training",
    instructor: "Christopher Beye",
    credential: "Triathlete",
    description:
      "Nail your T1 and T2 transitions. Shave minutes off your race with proven techniques.",
    image: null,
    featured: false,
  },
];

export default function Workshops() {
  const [current, setCurrent] = useState(0);
  const ws = workshops[current];

  const prev = () => setCurrent((c) => (c === 0 ? workshops.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === workshops.length - 1 ? 0 : c + 1));

  return (
    <section id="workshops" className="py-32 px-6 bg-neutral-50">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left — Workshop carousel */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md group">
              {/* Soft shadow behind image */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                {ws.image ? (
                  <Image
                    src={ws.image}
                    alt={ws.title}
                    width={500}
                    height={375}
                    className="w-full aspect-[4/3] object-cover"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] bg-primary-800/5 flex items-center justify-center">
                    <span className="text-primary-800/15 text-7xl font-bold">
                      {ws.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Arrows — appear on hover, softer style */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur text-primary-800 flex items-center justify-center rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                aria-label="Previous"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="12,4 6,9 12,14" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur text-primary-800 flex items-center justify-center rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                aria-label="Next"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6,4 12,9 6,14" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-5">
                {workshops.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? "bg-secondary-600 w-6" : "bg-neutral-300"
                    }`}
                    aria-label={`Workshop ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Title below image */}
            <p className="text-sm text-secondary-600 font-semibold uppercase tracking-widest mt-6">
              {ws.instructor} — {ws.credential}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-800 text-center mt-2">
              {ws.title}
            </h3>

            {ws.featured ? (
              <a
                href="#"
                className="mt-6 inline-block px-10 py-3 bg-primary-800 text-white font-medium rounded-full hover:bg-secondary-600 transition-colors"
              >
                See More
              </a>
            ) : (
              <span className="mt-6 inline-block px-10 py-3 bg-neutral-200/60 text-neutral-400 font-medium rounded-full">
                Coming Soon
              </span>
            )}
          </div>

          {/* Right — Section heading & description */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-8 leading-tight">
              Upcoming Workshops
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg md:text-xl">
              Step into a space where sport meets growth. Our workshops bring
              together athletes of all levels to explore training, nutrition, and
              mindset in a supportive environment.
            </p>
            <p className="text-neutral-400 leading-relaxed text-lg md:text-xl mt-4">
              It&apos;s not about being the fastest — it&apos;s about learning,
              sharing, and thriving together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
