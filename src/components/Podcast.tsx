import Image from "next/image";

export default function Podcast() {
  return (
    <section id="podcast" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-primary-800 mb-14">
          Our Podcast
        </h2>
        <div className="max-w-xl mx-auto rounded-xl overflow-hidden">
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
