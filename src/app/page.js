import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import JewelleryType from "@/components/sections/JewelleryType";
import Collections from "@/components/sections/Collections";
import Explore from "@/components/sections/Explore";
import Popular from "@/components/sections/Popular"
import Banner from "@/components/sections/Banner";
import Process from "@/components/sections/Process";
import Testimonial from "@/components/sections/Testimonial";
import Consultation from "@/components/sections/Consultation";
import StayConnected from "@/components/sections/StayConnected";

export default function Home() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* <Header /> */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center sm:items-start">
        <Hero />
        <JewelleryType />
        <Collections />
        <Explore />
        <Popular />
        <Banner />
        <Process />
        <Testimonial />
        <Consultation />
        <StayConnected />
      </main>

      {/* <Footer /> */}
      <Footer />
    </div>
  );
}
