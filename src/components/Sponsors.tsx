import Image from "next/image";

const sponsors = [
  {
    name: "Liga Kraków",
    href: "https://ligaskrakow.com/en",
    logo: "/sponsors/liga-krakow.png",
  },
  {
    name: "Berghaus",
    href: "https://berghaus-tinyhouse.com",
    logo: "/sponsors/berghaus.png",
  },
  {
    name: "Dennis.cz",
    href: "https://dennis.cz",
    logo: "/sponsors/dennis-cz.png",
  },
  {
    name: "Beye.blog",
    href: "https://beye.blog",
    logo: "/sponsors/beye-blog.png",
  },
];

export default function Sponsors() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-primary-800 mb-12">
          Our Sponsors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-400"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={160}
                height={160}
                className="w-full max-w-[160px] h-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
