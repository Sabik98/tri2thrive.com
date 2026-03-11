export default function Podcast() {
  return (
    <section id="podcast" className="relative py-40 px-6 bg-primary-800 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFE7B8]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Text content */}
          <div>
            <p className="text-[#FFE7B8] text-sm font-semibold uppercase tracking-widest mb-4">
              Listen Now
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Podcast
            </h2>
            <p className="text-white/50 leading-relaxed text-lg md:text-xl mb-4">
              Stories from athletes of all levels. Training tips, race-day
              insights, and the mental game.
            </p>
            <p className="text-white/50 leading-relaxed text-lg md:text-xl">
              Tune in to hear real conversations about what it means to swim,
              bike, run — and <span className="text-[#FFE7B8]">thrive</span>.
            </p>

            {/* Stats */}
            <div className="flex gap-10 mt-10">
              <div>
                <p className="text-3xl font-bold text-[#FFE7B8]">3</p>
                <p className="text-white/30 text-sm mt-1">Disciplines</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#FFE7B8]">1</p>
                <p className="text-white/30 text-sm mt-1">Community</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#FFE7B8]">&infin;</p>
                <p className="text-white/30 text-sm mt-1">Motivation</p>
              </div>
            </div>
          </div>

          {/* Right — Spotify embed */}
          <div className="relative">
            <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-sm" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://open.spotify.com/embed/show/3VitQ9rEuYp8NFFIcehYa9?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-2xl border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
