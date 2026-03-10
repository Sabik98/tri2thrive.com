const pillars = [
  {
    title: "Community",
    description:
      "Group training sessions and mutual support. Together we push further than we ever could alone.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-12 h-12"
      >
        <circle cx="24" cy="14" r="6" />
        <circle cx="10" cy="20" r="5" />
        <circle cx="38" cy="20" r="5" />
        <path d="M16 32c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
        <path d="M4 36c0-3.3 2.7-6 6-6h2" strokeLinecap="round" />
        <path d="M44 36c0-3.3-2.7-6-6-6h-2" strokeLinecap="round" />
      </svg>
    ),
    color: "teal",
  },
  {
    title: "Learning",
    description:
      "Shared coaching knowledge from experienced athletes. Every race teaches something new.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-12 h-12"
      >
        <path d="M8 38V14l16-8 16 8v24" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 6v16" strokeLinecap="round" />
        <path d="M14 22v10" strokeLinecap="round" />
        <path d="M34 22v10" strokeLinecap="round" />
        <circle cx="24" cy="34" r="4" />
      </svg>
    ),
    color: "coral",
  },
  {
    title: "Inspiration",
    description:
      "Inclusive goal-setting across all fitness levels. Your personal best is the only podium that matters.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-12 h-12"
      >
        <path d="M24 4l4 8 9 1.3-6.5 6.3L32 29 24 24.8 16 29l1.5-9.4L11 13.3l9-1.3z" strokeLinejoin="round" />
        <path d="M12 36h24" strokeLinecap="round" />
        <path d="M16 42h16" strokeLinecap="round" />
      </svg>
    ),
    color: "teal",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="relative py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest text-coral-400 mb-3">
            Our Mission
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-teal-900">
            Three Disciplines, One Community
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative p-8 rounded-2xl border border-teal-100 bg-white hover:shadow-lg hover:border-teal-200 transition-all duration-300"
            >
              <div
                className={`mb-6 ${
                  pillar.color === "coral" ? "text-coral-400" : "text-teal-600"
                }`}
              >
                {pillar.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-teal-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-teal-700/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
