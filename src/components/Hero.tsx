import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center px-6">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-contain object-top"
        priority
      />
      {/* Fill remaining space with matching color */}
      <div className="absolute inset-0 bg-[#3a5a6e]" style={{ zIndex: -1 }} />

      {/* Navy overlay 75% */}
      <div className="absolute inset-0 bg-primary-800/75" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <Image
          src="/logo/logo-gold.png"
          alt="Tri2Thrive"
          width={500}
          height={250}
          className="mx-auto w-40 md:w-48 lg:w-56 h-auto mb-8"
          priority
        />

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight max-w-3xl uppercase">
          Flowers don&apos;t compete —<br />
          they just <span className="text-[#FFE7B8]">thrive.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/70 text-center max-w-xl mx-auto">
          So can you.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#mission"
            className="px-8 py-3.5 bg-white text-primary-800 font-medium rounded-lg hover:bg-secondary-600 hover:text-white transition-colors text-sm"
          >
            Discover More
          </a>
          <a
            href="#workshops"
            className="px-8 py-3.5 border border-white/40 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm"
          >
            Our Workshops
          </a>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="#f8f9fa"
          />
        </svg>
      </div>
    </section>
  );
}
