const sponsors = ["Berghaus", "Liga Kraków"];

export default function Sponsors() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest text-teal-400 mb-10">
          Our Crew
        </p>
        <div className="flex items-center justify-center gap-16 flex-wrap">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor}
              className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-teal-800">
                {sponsor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
