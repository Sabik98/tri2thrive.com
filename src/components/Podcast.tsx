export default function Podcast() {
  return (
    <section
      id="podcast"
      className="relative py-24 md:py-32 bg-teal-900 text-white overflow-hidden"
    >
      {/* Waveform decoration */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 60 }).map((_, i) => (
          <rect
            key={i}
            x={i * 20}
            y={200 - Math.sin(i * 0.5) * 80 - Math.random() * 40}
            width="8"
            height={Math.sin(i * 0.5) * 160 + Math.random() * 80 + 20}
            rx="4"
            fill="white"
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest text-coral-400 mb-3">
              Voices of Thrive
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold">
              The Podcast
            </h2>
            <p className="mt-6 text-teal-200/80 leading-relaxed max-w-md">
              Stories from athletes of all levels. Training tips, race-day
              insights, nutrition deep-dives, and the mental game — every
              episode brings you closer to your next breakthrough.
            </p>
            <div className="mt-8 flex gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                Coming Soon
              </span>
            </div>
          </div>

          {/* Podcast visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-700 to-coral-400/30 rotate-6" />
              <div className="absolute inset-0 rounded-2xl bg-teal-800 flex items-center justify-center">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-20 h-20 text-teal-400"
                >
                  <rect x="18" y="4" width="12" height="22" rx="6" />
                  <path d="M12 22a12 12 0 0024 0" strokeLinecap="round" />
                  <path d="M24 34v8" strokeLinecap="round" />
                  <path d="M18 44h12" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
