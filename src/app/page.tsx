import Header from "@/components/Header";
import ScrollTracker from "@/components/ScrollTracker";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Founders from "@/components/Founders";
import Workshops from "@/components/Workshops";
import Podcast from "@/components/Podcast";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import RaceLine from "@/components/RaceLine";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollTracker />
      <main className="relative">
        <RaceLine />
        <Hero />
        <Mission />
        <Founders />
        <Workshops />
        <Podcast />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
