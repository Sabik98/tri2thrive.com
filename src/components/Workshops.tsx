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
    <section id="workshops" className="py-32 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Workshop carousel */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden bg-primary-50 aspect-[4/3] flex items-center justify-center">
                {ws.image ? (
                  <Image
                    src={ws.image}
                    alt={ws.title}
                    width={500}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-primary-200 text-6xl font-bold">
                    {ws.title.charAt(0)}
                  </span>
                )}
              </div>

              {/* Arrow buttons */}
              <button
                onClick={prev}
                className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 w-12 h-12 bg-secondary-600 text-white flex items-center justify-center rounded hover:bg-secondary-600/80 transition-colors"
                aria-label="Previous"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="14,4 6,10 14,16" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 w-12 h-12 bg-secondary-600 text-white flex items-center justify-center rounded hover:bg-secondary-600/80 transition-colors"
                aria-label="Next"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6,4 14,10 6,16" />
                </svg>
              </button>
            </div>

            {/* Title & CTA below image */}
            <h3 className="text-xl md:text-2xl font-bold text-primary-800 text-center mt-8 max-w-sm">
              {ws.title} with {ws.instructor} {ws.credential}
            </h3>

            {ws.featured ? (
              <a
                href="#"
                className="mt-6 inline-block px-10 py-3.5 bg-primary-800 text-white font-medium rounded hover:bg-secondary-600 transition-colors"
              >
                See More
              </a>
            ) : (
              <span className="mt-6 inline-block px-10 py-3.5 bg-neutral-100 text-neutral-400 font-medium rounded">
                Coming Soon
              </span>
            )}
          </div>

          {/* Right — Section heading & description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
              Upcoming Workshops
            </h2>
            <p className="text-neutral-500 leading-relaxed text-lg">
              Step into a space where sport meets growth. Our workshops bring
              together athletes of all levels to explore training, nutrition, and
              mindset in a supportive environment. It&apos;s not about being the
              fastest — it&apos;s about learning, sharing, and thriving together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
