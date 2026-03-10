const workshops = [
  {
    title: "Swim Workshop",
    instructor: "Łukasz Wójt",
    credential: "Olympic Athlete",
    date: "TBA",
    location: "Kraków, PL",
    description:
      "Master your technique in the water with personalized coaching from one of Poland's finest swimmers.",
    featured: true,
  },
  {
    title: "Cycling Fundamentals",
    instructor: "Dennis Czekalla",
    credential: "Cycling Coach",
    date: "TBA",
    location: "Kraków, PL",
    description:
      "Build endurance, improve cadence, and learn nutrition strategies for long-distance rides.",
    featured: false,
  },
  {
    title: "Transition Training",
    instructor: "Christopher Beye",
    credential: "Triathlete",
    date: "TBA",
    location: "Kraków, PL",
    description:
      "Nail your T1 and T2 transitions. Shave minutes off your race with proven techniques.",
    featured: false,
  },
];

function TicketStub({ workshop }: { workshop: (typeof workshops)[number] }) {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-2xl border border-dark-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Main info */}
      <div className="flex-1 p-6">
        {workshop.featured && (
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand-500 text-white rounded-full mb-3">
            Featured
          </span>
        )}
        {!workshop.featured && (
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-dark-50 text-dark-400 rounded-full mb-3">
            Coming Soon
          </span>
        )}
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-dark-900">
          {workshop.title}
        </h3>
        <p className="text-sm text-dark-400 mt-2 leading-relaxed">
          {workshop.description}
        </p>
      </div>

      {/* Dashed separator */}
      <div className="hidden sm:block w-px border-l-2 border-dashed border-dark-100 my-4" />
      <div className="sm:hidden border-t-2 border-dashed border-dark-100 mx-6" />

      {/* Stub */}
      <div className="sm:w-44 p-6 flex flex-col justify-center bg-dark-50/50">
        <p className="font-[family-name:var(--font-heading)] text-sm font-bold text-dark-900">
          {workshop.instructor}
        </p>
        <p className="text-xs text-brand-500 font-medium mt-0.5">
          {workshop.credential}
        </p>
        <div className="mt-3 space-y-1 text-xs text-dark-400">
          <p>{workshop.date}</p>
          <p>{workshop.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Workshops() {
  return (
    <section id="workshops" className="py-24 md:py-32 bg-dark-50">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-dark-900">
            Workshops
          </h2>
          <p className="mt-4 text-dark-400 max-w-lg mx-auto">
            Train with experienced athletes and coaches.
          </p>
        </div>

        <div className="space-y-5">
          {workshops.map((ws) => (
            <TicketStub key={ws.title} workshop={ws} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="px-8 py-3 bg-brand-500 text-white font-medium rounded-lg hover:bg-dark-900 transition-colors inline-block"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  );
}
