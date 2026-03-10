const pillars = [
  {
    title: "Community",
    description:
      "Group training sessions and mutual support. Together we push further than we ever could alone.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <circle cx="24" cy="14" r="6" />
        <circle cx="10" cy="20" r="5" />
        <circle cx="38" cy="20" r="5" />
        <path d="M16 34c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
        <path d="M4 38c0-3.3 2.7-6 6-6h2" strokeLinecap="round" />
        <path d="M44 38c0-3.3-2.7-6-6-6h-2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Learning",
    description:
      "Shared coaching knowledge from experienced athletes. Every race teaches something new.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M8 38V14l16-8 16 8v24" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 6v16" strokeLinecap="round" />
        <path d="M14 22v10" strokeLinecap="round" />
        <path d="M34 22v10" strokeLinecap="round" />
        <circle cx="24" cy="34" r="4" />
      </svg>
    ),
  },
  {
    title: "Inspiration",
    description:
      "Inclusive goal-setting across all fitness levels. Your personal best is the only podium that matters.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M24 4l4 8 9 1.3-6.5 6.3L32 29 24 24.8 16 29l1.5-9.4L11 13.3l9-1.3z" strokeLinejoin="round" />
        <path d="M12 38h24" strokeLinecap="round" />
        <path d="M16 44h16" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Mission() {
  return (
    <section id="mission" className="py-24 md:py-32 bg-dark-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-dark-900">
            Our Mission
          </h2>
          <p className="mt-4 text-dark-400 max-w-lg mx-auto">
            Three pillars that drive everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 text-brand-500 mb-6">
                {pillar.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-dark-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-dark-400 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
