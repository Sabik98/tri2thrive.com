"use client";

import { useEffect, useState } from "react";

const words = ["Swim.", "Bike.", "Run.", "Thrive."];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-coral-50" />

      {/* Decorative blob */}
      <svg
        className="absolute -top-32 -right-32 w-[600px] h-[600px] opacity-20"
        viewBox="0 0 600 600"
      >
        <path
          d="M300,520C390,520 480,460 520,370C560,280 560,180 510,110C460,40 370,10 280,30C190,50 120,120 80,200C40,280 40,380 90,450C140,520 210,520 300,520Z"
          fill="#0d9488"
        />
      </svg>

      <svg
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] opacity-15"
        viewBox="0 0 400 400"
      >
        <path
          d="M200,350C260,350 320,310 350,250C380,190 370,120 330,70C290,20 230,0 170,20C110,40 70,90 50,150C30,210 40,280 80,320C120,360 150,350 200,350Z"
          fill="#f97066"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl w-full px-6 grid md:grid-cols-2 gap-12 items-center pt-24">
        {/* Left — Text */}
        <div>
          <p className="text-sm font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest text-teal-600 mb-4">
            Flowers don&apos;t compete
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-bold leading-tight text-teal-900">
            They just{" "}
            <span
              key={currentWord}
              className="inline-block text-coral-400 transition-all duration-500"
            >
              {words[currentWord]}
            </span>
          </h1>
          <p className="mt-6 text-lg text-teal-700/80 max-w-md leading-relaxed">
            A community-driven platform for inclusive athletic growth. Train
            together, learn together, thrive together.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#mission"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-[family-name:var(--font-heading)] font-medium rounded-full hover:bg-teal-700 transition-colors"
            >
              Discover More
            </a>
            <a
              href="#workshops"
              className="inline-flex items-center px-6 py-3 border-2 border-teal-600 text-teal-600 font-[family-name:var(--font-heading)] font-medium rounded-full hover:bg-teal-50 transition-colors"
            >
              Our Workshops
            </a>
          </div>
        </div>

        {/* Right — Visual placeholder */}
        <div className="relative flex items-center justify-center">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-teal-200 to-coral-200 opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl font-bold text-teal-900/20 select-none">
              T2T
            </span>
          </div>
        </div>
      </div>

      {/* Diagonal bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white clip-diagonal-reverse" />
    </section>
  );
}
