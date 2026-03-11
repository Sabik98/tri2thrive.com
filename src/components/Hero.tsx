import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <Image
        src="/logo/logo-black.png"
        alt="Tri2Thrive"
        width={500}
        height={250}
        className="w-64 md:w-80 lg:w-96 h-auto mb-12"
        priority
      />

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-800 text-center leading-tight max-w-3xl">
        Flowers don&apos;t compete —<br />
        they just <span className="text-secondary-600">thrive.</span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-neutral-400 text-center max-w-xl">
        So can you.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#mission"
          className="px-8 py-3.5 bg-primary-800 text-white font-medium rounded-lg hover:bg-secondary-600 transition-colors text-sm"
        >
          Discover More
        </a>
        <a
          href="#workshops"
          className="px-8 py-3.5 border border-neutral-200 text-neutral-500 font-medium rounded-lg hover:border-secondary-600 hover:text-secondary-600 transition-colors text-sm"
        >
          Our Workshops
        </a>
      </div>
    </section>
  );
}
