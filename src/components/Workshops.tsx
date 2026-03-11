import Image from "next/image";

export default function Workshops() {
  return (
    <section id="workshops" className="py-24 px-6 bg-neutral-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-primary-800 mb-4">
          Workshops
        </h2>
        <p className="text-center text-neutral-500 leading-relaxed max-w-2xl mx-auto mb-14">
          Step into a space where sport meets growth. Our workshops bring
          together athletes of all levels to explore training, nutrition, and
          mindset in a supportive environment. It&apos;s not about being the
          fastest — it&apos;s about learning, sharing, and thriving together.
        </p>

        <div className="max-w-xs mx-auto">
          <div className="bg-white rounded-xl overflow-hidden border border-neutral-200">
            <Image
              src="/images/workshop-swim.png"
              alt="Swim Workshop"
              width={400}
              height={300}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-sm font-bold text-primary-800 leading-snug mb-4">
                Swim Workshop with Łukasz Wójt<br />
                Olympic Swimmer and Professional Triathlete
              </h3>
              <a
                href="#"
                className="inline-block px-6 py-2.5 bg-primary-800 text-white text-sm font-medium rounded-lg hover:bg-secondary-600 transition-colors"
              >
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
