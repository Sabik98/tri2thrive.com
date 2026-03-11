import Image from "next/image";

const pillars = [
  {
    title: "Community",
    text: "Supporting each other through hard training sessions, group rides, and open water swims.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
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
    text: "Sharing knowledge, experiences, and coaching insights so everyone can grow.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
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
    text: "You don\u2019t have to be a pro to chase big goals\u2014whether it\u2019s your first 5K, a triathlon, or an Ironman.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M24 4l4 8 9 1.3-6.5 6.3L32 29 24 24.8 16 29l1.5-9.4L11 13.3l9-1.3z" strokeLinejoin="round" />
        <path d="M12 38h24" strokeLinecap="round" />
        <path d="M16 44h16" strokeLinecap="round" />
      </svg>
    ),
  },
];

const photos = [
  "/images/mission-1.png",
  "/images/mission-2.png",
  "/images/mission-3.png",
  "/images/mission-4.png",
  "/images/mission-5.png",
  "/images/mission-6.png",
];

export default function Mission() {
  return (
    <section id="mission" className="py-32 px-6 bg-neutral-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary-800 mb-5">
          Our Mission
        </h2>
        <p className="text-center text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-20 text-lg">
          At Tri2Thrive, we believe sport is more than finish lines and podiums
          — it&apos;s about movement, growth, and connection.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-10 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 text-primary-800 flex items-center justify-center mx-auto mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">
                {p.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {photos.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt=""
              width={300}
              height={300}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ring-4 ring-white shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
