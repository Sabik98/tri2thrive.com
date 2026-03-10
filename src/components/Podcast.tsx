"use client";

function EqualizerBars() {
  const bars = 20;
  return (
    <div className="flex items-end gap-[3px] h-24 group cursor-pointer">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="eq-bar w-2 bg-brand-400/50 group-hover:bg-brand-400 rounded-full transition-colors duration-300"
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

export default function Podcast() {
  return (
    <section id="podcast" className="py-24 md:py-32 bg-dark-900 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">
              Podcast
            </h2>
            <p className="mt-4 text-dark-400 leading-relaxed max-w-md mx-auto md:mx-0">
              Stories from athletes of all levels. Training tips, race-day insights, nutrition deep-dives, and the mental game — every episode brings you closer to your next breakthrough.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <EqualizerBars />
            </div>
            <p className="mt-6 text-sm text-dark-500">
              Coming soon to all platforms
            </p>
          </div>

          {/* Right — visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl bg-dark-800 flex items-center justify-center">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-16 h-16 text-brand-500"
                >
                  <rect x="18" y="4" width="12" height="22" rx="6" />
                  <path d="M12 22a12 12 0 0024 0" strokeLinecap="round" />
                  <path d="M24 34v8" strokeLinecap="round" />
                  <path d="M18 44h12" strokeLinecap="round" />
                </svg>
              </div>
              {/* Decorative offset */}
              <div className="absolute -bottom-3 -right-3 w-56 h-56 md:w-64 md:h-64 rounded-2xl border-2 border-brand-500/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
