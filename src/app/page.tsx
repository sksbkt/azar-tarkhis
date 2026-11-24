import React from "react";
import { Header } from "@/components/sections/Header";
import { StoriesBar } from "@/components/sections/StoriesBar";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { VehicleCatalog } from "@/components/sections/VehicleCatalog";
import { CurrencyTicker } from "@/components/sections/CurrencyTicker";
import { WeblogSection } from "@/components/sections/WeblogSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-surface-white selection:bg-accent-blue/20 selection:text-primary-blue">
      {/* 1. Top Navbar / Floating Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1 w-full pt-[84px] lg:pt-[96px]">
        {/* 2. Unified Hero Section: Stories Bar + Hero Carousel on pure white background */}
        <section className="w-full bg-white relative pt-2 pb-0 overflow-x-clip">
          <StoriesBar />
          <HeroSlider />
        </section>

        {/* 3. Services Grid (3x2) */}
        <ServicesGrid />

        {/* 4. Live Prices Section: Cars & Trucks Showcase */}
        <VehicleCatalog />

        {/* 5. Live Currency Exchange Bar */}
        <CurrencyTicker />

        {/* 6. Weblog & Articles Section */}
        <WeblogSection />

        {/* 7. Quick Consultation CTA Banner */}
        <CtaBanner />
      </main>

      {/* 8. Dark Surface Footer */}
      <Footer />
    </div>
  );
}
