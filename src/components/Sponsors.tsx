const sponsors = ["Berghaus", "Liga Kraków"];

export default function Sponsors() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-neutral-300 mb-8">
          Partners &amp; Sponsors
        </p>
        <div className="flex items-center justify-center gap-16 flex-wrap">
          {sponsors.map((sponsor) => (
            <span
              key={sponsor}
              className="font-[family-name:var(--font-heading)] text-xl font-bold text-neutral-200 hover:text-primary-800 transition-colors duration-400 cursor-default"
            >
              {sponsor}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
