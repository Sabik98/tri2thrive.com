const sponsors = ["Berghaus", "Liga Kraków"];

export default function Sponsors() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-[0.3em] text-dark-300 mb-8">
          Our Crew
        </p>
        <div className="flex items-center justify-center gap-16 flex-wrap">
          {sponsors.map((sponsor) => (
            <span
              key={sponsor}
              className="font-[family-name:var(--font-heading)] text-2xl font-bold text-dark-200 hover:text-brand-500 transition-colors duration-500 cursor-default"
            >
              {sponsor}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
