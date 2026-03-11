import Image from "next/image";

export default function Workshops() {
  return (
    <section id="workshops" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-primary-800 mb-6">
            Workshops
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Step into a space where sport meets growth. Our workshops bring together athletes of all levels to explore training, nutrition, and mindset in a supportive environment. It&apos;s not about being the fastest — it&apos;s about learning, sharing, and thriving together.
          </p>
        </div>

        {/* Featured workshop card */}
        <div className="max-w-sm mx-auto bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="aspect-[4/3] relative bg-neutral-100">
            <Image
              src="/images/workshop-swim.png"
              alt="Swim Workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-primary-800 leading-snug">
              Swim Workshop with Łukasz Wójt Olympic Swimmer and Professional Triathlete
            </h3>
            <a
              href="#"
              className="mt-5 inline-block px-8 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-secondary-600 transition-colors"
            >
              See more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
