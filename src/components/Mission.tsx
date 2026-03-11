import Image from "next/image";

const pillars = [
  {
    title: "Community",
    text: "Supporting each other through hard training sessions, group rides, and open water swims.",
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
    text: "Sharing knowledge, experiences, and coaching insights so everyone can grow.",
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
    text: "You don\u2019t have to be a pro to chase big goals\u2014whether it\u2019s your first 5K, a triathlon, or an Ironman.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
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
    <section id="mission" className="py-40 px-6 bg-primary-800">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-6">
          Our Mission
        </h2>
        <p className="text-center text-primary-300 leading-relaxed max-w-2xl mx-auto mb-20 text-lg md:text-xl">
          At Tri2Thrive, we believe sport is more than finish lines and podiums
          — it&apos;s about movement, growth, and connection.
        </p>

        {/* Photo River */}
        <div className="relative mb-[-3.5rem] z-0">
          <div className="flex justify-center items-center">
            {photos.map((src, i) => (
              <div
                key={i}
                className="relative shrink-0 -mx-2 md:-mx-3"
                style={{ zIndex: photos.length - i }}
              >
                <Image
                  src={src}
                  alt=""
                  width={300}
                  height={300}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover ring-4 ring-primary-800 shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pillar Cards — overlapping the photo river */}
        <div className="relative z-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-14">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-center border border-white/10 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="w-18 h-18 rounded-full bg-secondary-600/20 text-[#FFE7B8] flex items-center justify-center mx-auto mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {p.title}
              </h3>
              <p className="text-primary-300 leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
