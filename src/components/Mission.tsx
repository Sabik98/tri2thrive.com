import Image from "next/image";

const pillars = [
  {
    title: "Community",
    text: "Supporting each other through hard training sessions, group rides, and open water swims.",
  },
  {
    title: "Learning",
    text: "Sharing knowledge, experiences, and coaching insights so everyone can grow.",
  },
  {
    title: "Inspiration",
    text: "You don\u2019t have to be a pro to chase big goals\u2014whether it\u2019s your first 5K, a triathlon, or an Ironman.",
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
    <section id="mission" className="py-24 px-6 bg-neutral-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-primary-800 mb-4">
          Our Mission
        </h2>
        <p className="text-center text-neutral-500 leading-relaxed max-w-2xl mx-auto mb-16">
          At Tri2Thrive, we believe sport is more than finish lines and podiums
          — it&apos;s about movement, growth, and connection.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {pillars.map((p) => (
            <div key={p.title} className="text-center">
              <h3 className="text-lg font-bold text-primary-800 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {photos.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt=""
              width={300}
              height={300}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
