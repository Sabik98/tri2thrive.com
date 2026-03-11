import Image from "next/image";

export default function Podcast() {
  return (
    <section id="podcast" className="py-20 md:py-28 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-primary-800">
            Our Podcast
          </h2>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden">
          <Image
            src="/images/podcast.jpg"
            alt="Tri2Thrive Podcast"
            width={768}
            height={536}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
