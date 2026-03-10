const workshops = [
  {
    title: "Swim Workshop",
    instructor: "Łukasz Wójt",
    credential: "Olympic Athlete",
    date: "TBA",
    location: "Kraków, PL",
    description:
      "Master your technique in the water with personalized coaching from one of Poland's finest swimmers.",
    tag: "FEATURED",
    tagColor: "bg-coral-400 text-white",
  },
  {
    title: "Cycling Fundamentals",
    instructor: "Dennis Czekalla",
    credential: "Cycling Coach",
    date: "TBA",
    location: "Kraków, PL",
    description:
      "Build endurance, improve cadence, and learn nutrition strategies for long-distance rides.",
    tag: "COMING SOON",
    tagColor: "bg-teal-100 text-teal-700",
  },
  {
    title: "Transition Training",
    instructor: "Christopher Beye",
    credential: "Triathlete",
    date: "TBA",
    location: "Kraków, PL",
    description:
      "Nail your T1 and T2 transitions. Shave minutes off your race with proven techniques.",
    tag: "COMING SOON",
    tagColor: "bg-teal-100 text-teal-700",
  },
];

function TicketStub({
  workshop,
}: {
  workshop: (typeof workshops)[number];
}) {
  return (
    <div className="group relative">
      <div className="flex flex-col sm:flex-row bg-white border border-teal-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Left side — main info */}
        <div className="flex-1 p-6">
          <span
            className={`inline-block px-2 py-0.5 text-[9px] font-[family-name:var(--font-mono)] font-bold tracking-widest rounded ${workshop.tagColor}`}
          >
            {workshop.tag}
          </span>
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-teal-900 mt-3">
            {workshop.title}
          </h3>
          <p className="text-sm text-teal-700/70 mt-2 leading-relaxed">
            {workshop.description}
          </p>
        </div>

        {/* Perforation line */}
        <div className="hidden sm:flex flex-col items-center justify-center w-0">
          <div className="h-full border-l-2 border-dashed border-teal-100" />
        </div>
        <div className="sm:hidden border-t-2 border-dashed border-teal-100" />

        {/* Right side — ticket stub */}
        <div className="sm:w-48 p-6 flex flex-col justify-center items-start sm:items-center bg-teal-50/30">
          <p className="font-[family-name:var(--font-heading)] text-sm font-bold text-teal-900">
            {workshop.instructor}
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-widest text-teal-500 mt-1">
            {workshop.credential}
          </p>
          <div className="mt-4 space-y-1">
            <p className="font-[family-name:var(--font-mono)] text-[10px] text-teal-600 flex items-center gap-1">
              <svg
                width="10"
                height="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="1" y="1" width="8" height="8" rx="1" />
                <line x1="3" y1="0" x2="3" y2="2" />
                <line x1="7" y1="0" x2="7" y2="2" />
              </svg>
              {workshop.date}
            </p>
            <p className="font-[family-name:var(--font-mono)] text-[10px] text-teal-600 flex items-center gap-1">
              <svg
                width="10"
                height="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="5" cy="4" r="2" />
                <path d="M5 6v3" />
              </svg>
              {workshop.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Workshops() {
  return (
    <section id="workshops" className="relative py-24 md:py-32">
      {/* Bib number watermark */}
      <div className="absolute top-8 right-8 bib-number text-[12rem] md:text-[20rem] leading-none">
        03
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-[0.3em] text-coral-400 mb-3">
            Train Together
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-teal-900">
            Workshops
          </h2>
        </div>

        {/* Ticket stubs */}
        <div className="space-y-6">
          {workshops.map((ws) => (
            <TicketStub key={ws.title} workshop={ws} />
          ))}
        </div>
      </div>
    </section>
  );
}
