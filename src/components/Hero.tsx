import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <Image
          src="/logo/logo-black.png"
          alt="Tri2Thrive"
          width={400}
          height={200}
          className="mx-auto w-48 md:w-64 h-auto mb-10"
          priority
        />
        <h1 className="text-2xl md:text-3xl text-primary-800 leading-relaxed">
          Flowers don&apos;t compete — they just{" "}
          <span className="text-secondary-600 font-bold">thrive.</span>
          <br />So can you.
        </h1>
      </div>
    </section>
  );
}
