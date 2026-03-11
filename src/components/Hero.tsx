import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-20 bg-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo/logo-black.png"
            alt="Tri2Thrive"
            width={400}
            height={200}
            className="w-56 md:w-72 h-auto"
            priority
          />
        </div>

        <p className="text-xl md:text-2xl text-primary-800 font-medium leading-relaxed max-w-xl mx-auto">
          Flowers don&apos;t compete — they just <span className="text-secondary-600 font-bold">thrive.</span>
          <br />
          So can you.
        </p>
      </div>
    </section>
  );
}
