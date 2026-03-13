import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BackgroundNetwork } from "@/components/ui/background-network";
import { BenefitsSection } from "@/sections/benefits-section";
import { CTASection } from "@/sections/cta-section";
import { HeroSection } from "@/sections/hero-section";
import { TechnologySection } from "@/sections/technology-section";
import { TransportModesSection } from "@/sections/transport-modes-section";
import { WhatWeDoSection } from "@/sections/what-we-do-section";
import { WhyPrioritySection } from "@/sections/why-priority-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundNetwork className="top-0 h-[720px] text-white/10" />
      <div className="relative z-10">
        <SiteHeader />
        <main>
          <HeroSection />
          <WhatWeDoSection />
          <TransportModesSection />
          <WhyPrioritySection />
          <BenefitsSection />
          <TechnologySection />
          <CTASection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

