const workshops = [
  {
    title: "Swim Workshop",
    instructor: "with Olympic Athlete Łukasz Wójt",
    description:
      "Master your technique in the water with personalized coaching from one of Poland's finest swimmers.",
    tag: "Featured",
  },
  {
    title: "Cycling Fundamentals",
    instructor: "with Dennis Czekalla",
    description:
      "Build endurance, improve cadence, and learn nutrition strategies for long-distance rides.",
    tag: "Coming Soon",
  },
  {
    title: "Transition Training",
    instructor: "with Christopher Beye",
    description:
      "Nail your T1 and T2 transitions. Shave minutes off your race with proven techniques.",
    tag: "Coming Soon",
  },
];

export default function Workshops() {
  return (
    <section id="workshops" className="relative py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest text-coral-400 mb-3">
            Train Together
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-teal-900">
            Workshops
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {workshops.map((ws, i) => (
            <div
              key={ws.title}
              className={`group relative rounded-2xl border border-teal-100 bg-white overflow-hidden hover:shadow-lg transition-all duration-300 ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              {/* Visual placeholder */}
              <div
                className={`${
                  i === 0 ? "h-48 md:h-64" : "h-36"
                } bg-gradient-to-br ${
                  i === 0
                    ? "from-teal-400 to-teal-600"
                    : i === 1
                      ? "from-coral-200 to-coral-400"
                      : "from-teal-200 to-coral-200"
                } flex items-center justify-center`}
              >
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  className="w-16 h-16 opacity-50"
                >
                  {i === 0 ? (
                    <path
                      d="M8 30c4-6 8-2 12-8s8-2 12-8 8-2 8 4"
                      strokeLinecap="round"
                    />
                  ) : i === 1 ? (
                    <circle cx="24" cy="24" r="14" />
                  ) : (
                    <path
                      d="M12 36l12-24 12 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </svg>
              </div>

              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 text-xs font-[family-name:var(--font-mono)] font-bold rounded-full mb-3 ${
                    ws.tag === "Featured"
                      ? "bg-coral-50 text-coral-500"
                      : "bg-teal-50 text-teal-600"
                  }`}
                >
                  {ws.tag}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-teal-900">
                  {ws.title}
                </h3>
                <p className="text-sm text-teal-600 font-medium mt-1">
                  {ws.instructor}
                </p>
                <p className="mt-3 text-sm text-teal-700/70 leading-relaxed">
                  {ws.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
