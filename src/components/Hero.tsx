export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center pt-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Logo mark */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-primary-800 flex items-center justify-center">
            <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
              T2T
            </span>
          </div>
        </div>

        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold text-primary-800 leading-tight">
          Flowers don&apos;t compete —<br />
          they just{" "}
          <span className="text-secondary-600">thrive.</span>
        </h1>

        <p className="mt-6 text-lg text-neutral-400 max-w-lg mx-auto leading-relaxed">
          So can you. A community-driven platform for inclusive athletic growth — swim, bike, run, and thrive together.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#mission"
            className="px-8 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-secondary-600 transition-colors"
          >
            Discover More
          </a>
          <a
            href="#workshops"
            className="px-8 py-3 border border-neutral-200 text-neutral-500 font-medium rounded-lg hover:border-secondary-600 hover:text-secondary-600 transition-colors"
          >
            Our Workshops
          </a>
        </div>
      </div>
    </section>
  );
}
