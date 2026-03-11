import Image from "next/image";

const pillars = [
  {
    title: "Community",
    description:
      "Supporting each other through hard training sessions, group rides, and open water swims.",
  },
  {
    title: "Learning",
    description:
      "Sharing knowledge, experiences, and coaching insights so everyone can grow.",
  },
  {
    title: "Inspiration",
    description:
      "You don't have to be a pro to chase big goals—whether it's your first 5K, a triathlon, or an Ironman.",
  },
];

const missionImages = [
  "/images/mission-1.png",
  "/images/mission-2.png",
  "/images/mission-3.png",
  "/images/mission-4.png",
  "/images/mission-5.png",
  "/images/mission-6.png",
];

export default function Mission() {
  return (
    <section id="mission" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-primary-800 mb-6">
            Our Mission
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            At Tri2Thrive, we believe sport is more than finish lines and podiums — it&apos;s about movement, growth, and connection.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary-800 mb-3">
                {pillar.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Circular team photos */}
        <div className="flex flex-wrap justify-center gap-6">
          {missionImages.map((src, i) => (
            <div key={i} className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden">
              <Image
                src={src}
                alt={`Team member ${i + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
