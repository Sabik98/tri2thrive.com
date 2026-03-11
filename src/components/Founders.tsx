import Image from "next/image";

const founders = [
  {
    name: "Dennis Czekalla",
    role: "Cycling & Nutrition",
    bio: "Sports lover with a background in cycling, running, and nutrition. Focused on balanced growth and the Thrive lifestyle.",
    photo: "/images/founder-dennis.png",
    bg: "bg-primary-800",
    textAccent: "text-[#FFE7B8]",
  },
  {
    name: "Christopher Beye",
    role: "Tech & Triathlon",
    bio: "Tech enthusiast, engineer, and passionate triathlete living in Kraków, Poland. Always chasing innovation and personal bests.",
    photo: "/images/founder-christopher.png",
    bg: "bg-secondary-600",
    textAccent: "text-[#FFE7B8]",
  },
];

export default function Founders() {
  return (
    <section id="team">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-primary-800 pt-8 pb-16 bg-white">
        Who are we?
      </h2>

      <div className="grid md:grid-cols-2">
        {founders.map((f) => (
          <div
            key={f.name}
            className={`${f.bg} flex flex-col items-center justify-center px-8 py-20 md:py-28 text-center`}
          >
            <Image
              src={f.photo}
              alt={f.name}
              width={300}
              height={300}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-4 ring-white/20 shadow-2xl mb-8"
            />

            <h3 className={`text-2xl md:text-3xl font-bold ${f.textAccent} uppercase tracking-wide mb-2`}>
              {f.name}
            </h3>

            <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-5">
              {f.role}
            </p>

            <p className="text-white/80 leading-relaxed max-w-xs text-lg italic">
              &ldquo;{f.bio}&rdquo;
            </p>

            <div className="flex gap-3 mt-6">
              {["fb", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-white/25 hover:text-white transition-colors"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    {s === "fb" ? (
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    ) : (
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
