import Image from "next/image";

const sponsors = [
  { name: "Liga Kraków", href: "https://ligaskrakow.com/en", logo: "/sponsors/liga-krakow.png" },
  { name: "Berghaus", href: "https://berghaus-tinyhouse.com", logo: "/sponsors/berghaus.png" },
  { name: "Dennis.cz", href: "https://dennis.cz", logo: "/sponsors/dennis-cz.png" },
  { name: "Beye.blog", href: "https://beye.blog", logo: "/sponsors/beye-blog.png" },
];

export default function Sponsors() {
  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-primary-800 mb-14">
          Our Sponsors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {sponsors.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={s.logo}
                alt={s.name}
                width={140}
                height={140}
                className="w-full max-w-[120px] h-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
