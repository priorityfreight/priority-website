import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BackgroundNetwork } from "@/components/ui/background-network";
import { CTASection } from "@/sections/cta-section";
import { HeroSection } from "@/sections/hero-section";
import { ImpactSection } from "@/sections/impact-section";
import { MethodologySection } from "@/sections/methodology-section";
import { PositioningSection } from "@/sections/positioning-section";
import { TransportModesSection } from "@/sections/transport-modes-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundNetwork className="top-0 h-[960px] text-white/10" />
      <div className="relative z-10">
        <SiteHeader />
        <main>
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
