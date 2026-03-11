export default function Podcast() {
  return (
    <section id="podcast" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-primary-800 mb-14">
          Our Podcast
        </h2>
        <div className="max-w-xl mx-auto rounded-xl overflow-hidden">
          <iframe
            src="https://open.spotify.com/embed/show/3VitQ9rEuYp8NFFIcehYa9?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl border-0"
          />
        </div>
      </div>
    </section>
  );
}
