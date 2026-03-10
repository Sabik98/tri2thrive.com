const founders = [
  {
    name: "Dennis Czekalla",
    role: "Cycling & Nutrition Expert",
    bio: "Passionate cyclist and nutrition specialist. Dennis brings years of experience in endurance sports and holistic athlete development to the team.",
    initials: "DC",
  },
  {
    name: "Christopher Beye",
    role: "Tech Engineer & Triathlete",
    bio: "A tech engineer by trade and triathlete by passion. Christopher bridges the gap between data-driven training and human performance.",
    initials: "CB",
  },
];

export default function Founders() {
  return (
    <section id="founders" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-dark-900">
            Who are we?
          </h2>
          <p className="mt-4 text-dark-400 max-w-lg mx-auto">
            The people behind the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="bg-white rounded-2xl border border-dark-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Photo placeholder */}
              <div className="h-56 bg-gradient-to-br from-dark-50 to-dark-100 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-brand-500 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
                    {founder.initials}
                  </span>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-dark-900">
                  {founder.name}
                </h3>
                <p className="text-sm text-brand-500 font-medium mt-1">
                  {founder.role}
                </p>
                <p className="mt-4 text-sm text-dark-400 leading-relaxed">
                  {founder.bio}
                </p>

                {/* Social links */}
                <div className="mt-5 flex justify-center gap-3">
                  {["Facebook", "Instagram"].map((platform) => (
                    <span
                      key={platform}
                      className="w-9 h-9 rounded-full bg-dark-50 flex items-center justify-center text-dark-300 hover:bg-brand-500 hover:text-white transition-colors cursor-pointer"
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        {platform === "Facebook" ? (
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        ) : (
                          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                        )}
                      </svg>
                    </span>
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
