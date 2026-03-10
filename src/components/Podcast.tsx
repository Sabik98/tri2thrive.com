"use client";

function EqualizerBars() {
  const bars = 24;
  return (
    <div className="flex items-end gap-[3px] h-32 group cursor-pointer">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="eq-bar w-2 bg-brand-400/60 group-hover:bg-brand-300 rounded-full transition-colors duration-300"
          style={{
            animationDelay: `${i * 0.08}s`,
            animationDuration: `${0.8 + Math.random() * 0.8}s`,
            height: `${20 + Math.random() * 60}%`,
          }}
        />
      ))}
    </div>
  );
}

const episodes = [
  {
    number: "001",
    title: "Why We Started Tri2Thrive",
    duration: "42 min",
  },
  {
    number: "002",
    title: "Open Water Swimming — Fears & Freedoms",
    duration: "38 min",
  },
  {
    number: "003",
    title: "Nutrition for the Long Ride",
    duration: "51 min",
  },
];

export default function Podcast() {
  return (
    <section id="podcast" className="relative py-24 md:py-32 bg-dark-900 text-white">
      {/* Bib number watermark */}
      <div className="absolute top-8 left-8 font-[family-name:var(--font-heading)] text-[12rem] md:text-[20rem] leading-none font-bold text-white/[0.03] select-none pointer-events-none">
        04
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Info & equalizer */}
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-[0.3em] text-brand-500 mb-3">
              Voices of Thrive
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
              The Podcast
            </h2>
            <p className="mt-6 text-dark-400 leading-relaxed max-w-md">
              Stories from athletes of all levels. Training tips, race-day
              insights, nutrition deep-dives, and the mental game.
            </p>

            <div className="mt-8">
              <EqualizerBars />
            </div>
          </div>

          {/* Right — Episode list */}
          <div className="space-y-0">
            <p className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-dark-500 mb-4">
              Latest Episodes
            </p>
            {episodes.map((ep) => (
              <div
                key={ep.number}
                className="flex items-center gap-4 py-4 border-b border-dark-800 hover:border-brand-500/50 transition-colors group cursor-pointer"
              >
                <span className="font-[family-name:var(--font-mono)] text-xs text-dark-600 w-8">
                  {ep.number}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-dark-200 group-hover:text-brand-400 transition-colors">
                    {ep.title}
                  </p>
                </div>
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-dark-600">
                  {ep.duration}
                </span>
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-dark-700 group-hover:text-brand-500 transition-colors"
                >
                  <polygon points="4,2 14,8 4,14" />
                </svg>
              </div>
            ))}

            <p className="pt-6 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-dark-500">
              Coming soon to all platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
