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
    <section id="team" className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary-800 mb-20">
          Who are we?
        </h2>

        <div className="space-y-12 max-w-3xl mx-auto">
          {founders.map((f) => (
            <div
              key={f.name}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-white rounded-2xl p-8 md:p-10 border border-neutral-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="shrink-0">
                <Image
                  src={f.photo}
                  alt={f.name}
                  width={300}
                  height={300}
                  className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover"
                />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-primary-800 uppercase tracking-wide">
                  {f.name}
                </h3>
                <div className="w-12 h-0.5 bg-secondary-600 mt-2 mb-3 mx-auto sm:mx-0" />
                <p className="text-sm text-secondary-600 font-semibold mb-3">
                  {f.role}
                </p>
                <p className="text-neutral-400 leading-relaxed italic">
                  &ldquo;{f.bio}&rdquo;
                </p>

                <div className="flex gap-2.5 mt-5 justify-center sm:justify-start">
                  {["fb", "ig"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="w-9 h-9 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-300 hover:bg-primary-800 hover:text-white transition-colors"
                    >
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
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
