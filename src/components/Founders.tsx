import Image from "next/image";

const founders = [
  {
    name: "Dennis Czekalla",
    role: "Cycling & Nutrition",
    bio: "Sports lover with a background in cycling, running, and nutrition. Focused on balanced growth and the Thrive lifestyle.",
    photo: "/images/founder-dennis.png",
  },
  {
    name: "Christopher Beye",
    role: "Tech & Triathlon",
    bio: "Tech enthusiast, engineer, and passionate triathlete living in Kraków, Poland. Always chasing innovation and personal bests.",
    photo: "/images/founder-christopher.png",
  },
];

export default function Founders() {
  return (
    <section id="team" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-primary-800 mb-16">
          Who are we?
        </h2>

        <div className="space-y-8 max-w-2xl mx-auto">
          {founders.map((f) => (
            <div
              key={f.name}
              className="flex items-center gap-6 md:gap-8"
            >
              {/* Photo */}
              <div className="shrink-0">
                <Image
                  src={f.photo}
                  alt={f.name}
                  width={300}
                  height={300}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-primary-800 uppercase tracking-wide">
                  {f.name}
                </h3>
                <div className="w-10 h-0.5 bg-secondary-600 mt-1.5 mb-3" />
                <p className="text-sm text-secondary-600 font-medium mb-2">
                  {f.role}
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed italic">
                  &ldquo;{f.bio}&rdquo;
                </p>

                {/* Social */}
                <div className="flex gap-2 mt-3">
                  {["fb", "ig"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-300 hover:bg-primary-800 hover:text-white transition-colors"
                    >
                      <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
