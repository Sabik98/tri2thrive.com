export default function Podcast() {
  return (
    <section id="podcast" className="py-32 px-6 bg-primary-800">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-5">
          Our Podcast
        </h2>
        <p className="text-center text-primary-300 leading-relaxed max-w-xl mx-auto mb-14 text-lg">
          Stories from athletes of all levels. Training tips, race-day insights,
          and the mental game.
        </p>
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden">
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
    </section>
  );
}
