import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CTASection } from "@/sections/cta-section";
import { HeroSection } from "@/sections/hero-section";
import { ImpactSection } from "@/sections/impact-section";
import { MethodologySection } from "@/sections/methodology-section";
import { PositioningSection } from "@/sections/positioning-section";
import { TransportModesSection } from "@/sections/transport-modes-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#061326_0%,#08192F_30%,#08182F_60%,#061326_100%)]">
      <div className="relative z-10">
        <SiteHeader />
        <main className="pb-4">
          <HeroSection />
          <PositioningSection />
          <TransportModesSection />
          <MethodologySection />
          <ImpactSection />
          <CTASection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
