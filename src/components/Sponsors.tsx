import Image from "next/image";

const sponsors = [
  { name: "Liga Kraków", href: "https://ligaskrakow.com/en", logo: "/sponsors/liga-krakow.png" },
  { name: "Berghaus", href: "https://berghaus-tinyhouse.com", logo: "/sponsors/berghaus.png" },
  { name: "Dennis.cz", href: "https://dennis.cz", logo: "/sponsors/dennis-cz.png" },
  { name: "Beye.blog", href: "https://beye.blog", logo: "/sponsors/beye-blog.png" },
];

export default function Sponsors() {
  return (
    <section className="relative py-32 px-6 bg-neutral-50 overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-800/3 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <p className="text-center text-[#FFE7B8] text-sm font-semibold uppercase tracking-widest mb-4">
          Backed by
        </p>
        <h2 className="text-center text-4xl md:text-5xl font-bold text-primary-800 mb-6">
          Our Sponsors
        </h2>
        <p className="text-center text-neutral-400 leading-relaxed max-w-lg mx-auto mb-16 text-lg">
          We&apos;re grateful for the partners who believe in our mission and
          help make Tri2Thrive possible.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {sponsors.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-lg hover:border-primary-800/10 transition-all duration-300"
            >
              <Image
                src={s.logo}
                alt={s.name}
                width={160}
                height={160}
                className="w-full max-w-[120px] h-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
              <p className="mt-4 text-xs text-neutral-300 font-medium uppercase tracking-wider group-hover:text-primary-800 transition-colors">
                {s.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
