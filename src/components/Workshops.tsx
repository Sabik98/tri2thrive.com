import Image from "next/image";

const workshops = [
  {
    title: "Swim Workshop",
    instructor: "Łukasz Wójt",
    credential: "Olympic Swimmer & Professional Triathlete",
    description:
      "Master your technique in the water with personalized coaching from one of Poland's finest swimmers.",
    image: "/images/workshop-swim.png",
    featured: true,
  },
  {
    title: "Cycling Fundamentals",
    instructor: "Dennis Czekalla",
    credential: "Cycling Coach",
    description:
      "Build endurance, improve cadence, and learn nutrition strategies for long-distance rides.",
    image: null,
    featured: false,
  },
  {
    title: "Transition Training",
    instructor: "Christopher Beye",
    credential: "Triathlete",
    description:
      "Nail your T1 and T2 transitions. Shave minutes off your race with proven techniques.",
    image: null,
    featured: false,
  },
];

export default function Workshops() {
  return (
    <section id="workshops" className="py-32 px-6 bg-neutral-50">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary-800 mb-5">
          Workshops
        </h2>
        <p className="text-center text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-16 text-lg">
          Step into a space where sport meets growth. It&apos;s not about being
          the fastest — it&apos;s about learning, sharing, and thriving together.
        </p>

        <div className="space-y-5 max-w-3xl mx-auto">
          {workshops.map((ws) => (
            <div
              key={ws.title}
              className="flex flex-col sm:flex-row bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image or placeholder */}
              {ws.image ? (
                <div className="sm:w-56 shrink-0">
                  <Image
                    src={ws.image}
                    alt={ws.title}
                    width={400}
                    height={300}
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>
              ) : (
                <div className="sm:w-56 shrink-0 bg-primary-50 flex items-center justify-center h-48 sm:h-auto">
                  <span className="text-primary-200 text-4xl font-bold">
                    {ws.title.charAt(0)}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-primary-800">
                    {ws.title}
                  </h3>
                  {ws.featured && (
                    <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-secondary-600 text-white rounded-full">
                      Featured
                    </span>
                  )}
                  {!ws.featured && (
                    <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-400 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-xs text-secondary-600 font-semibold mb-2">
                  {ws.instructor} — {ws.credential}
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  {ws.description}
                </p>
                {ws.featured && (
                  <div>
                    <a
                      href="#"
                      className="inline-block px-6 py-2.5 bg-primary-800 text-white text-sm font-medium rounded-lg hover:bg-secondary-600 transition-colors"
                    >
                      See more
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
