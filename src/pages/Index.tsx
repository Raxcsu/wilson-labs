import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { Flywheel } from "@/components/sections/Flywheel";
import { DataAssets } from "@/components/sections/DataAssets";
import { Impact } from "@/components/sections/Impact";
import { Team } from "@/components/sections/Team";
import { Roadmap } from "@/components/sections/Roadmap";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

const BOOKING_URL = "https://calendar.app.google/HgWsbGZrapY4Cex39";

const Index = () => {
  const openBooking = () => window.open(BOOKING_URL, "_blank");

  return (
    <div className="min-h-screen bg-background">
      <Navbar onPartnerClick={openBooking} />
      <Hero onPartnerClick={openBooking} />
      <Problem />
      <Platform />
      <Flywheel />
      <DataAssets />
      <Impact />
      <Team />
      <Roadmap />
      <CTA onPartnerClick={openBooking} />
      <Footer />
    </div>
  );
};

export default Index;
