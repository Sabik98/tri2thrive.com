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
    <div className="flex flex-col sm:flex-row bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Main info */}
      <div className="flex-1 p-6">
        {workshop.featured ? (
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-secondary-600 text-white rounded-full mb-3">
            Featured
          </span>
        ) : (
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-400 rounded-full mb-3">
            Coming Soon
          </span>
        )}
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-primary-800">
          {workshop.title}
        </h3>
        <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
          {workshop.description}
        </p>
      </div>

      {/* Dashed separator */}
      <div className="hidden sm:block w-px border-l-2 border-dashed border-neutral-200 my-4" />
      <div className="sm:hidden border-t-2 border-dashed border-neutral-200 mx-6" />

      {/* Stub */}
      <div className="sm:w-44 p-6 flex flex-col justify-center bg-primary-50/30">
        <p className="font-[family-name:var(--font-heading)] text-sm font-bold text-primary-800">
          {workshop.instructor}
        </p>
        <p className="text-xs text-secondary-600 font-medium mt-0.5">
          {workshop.credential}
        </p>
        <div className="mt-3 space-y-1 text-xs text-neutral-400">
          <p>{workshop.date}</p>
          <p>{workshop.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Workshops() {
  return (
    <section id="workshops" className="py-24 md:py-32 bg-neutral-50">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-primary-800">
            Workshops
          </h2>
          <p className="mt-4 text-neutral-400 max-w-lg mx-auto">
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
            className="px-8 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-secondary-600 transition-colors inline-block"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  );
}
