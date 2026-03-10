const founders = [
  {
    name: "Dennis Czekalla",
    role: "Cycling & Nutrition Expert",
    bio: "Passionate cyclist and nutrition specialist, Dennis brings years of experience in endurance sports and holistic athlete development.",
    specialties: ["Cycling", "Nutrition", "Endurance"],
  },
  {
    name: "Christopher Beye",
    role: "Tech Engineer & Triathlete",
    bio: "A tech engineer by trade and triathlete by passion, Christopher bridges the gap between data-driven training and human performance.",
    specialties: ["Technology", "Triathlon", "Training"],
  },
];

export default function Founders() {
  return (
    <section
      id="founders"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white to-teal-50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest text-coral-400 mb-3">
            Meet the Pack
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-teal-900">
            Who We Are
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group relative overflow-hidden rounded-2xl border border-teal-100 bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Photo placeholder */}
              <div className="h-64 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                <span className="font-[family-name:var(--font-heading)] text-5xl font-bold text-teal-400/40">
                  {founder.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-teal-900">
                  {founder.name}
                </h3>
                <p className="text-sm text-coral-400 font-medium mt-1">
                  {founder.role}
                </p>
                <p className="mt-3 text-teal-700/70 text-sm leading-relaxed">
                  {founder.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {founder.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-xs font-[family-name:var(--font-mono)] font-medium bg-teal-50 text-teal-700 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
