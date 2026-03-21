"use client";

import Image from "next/image";

import airInfoImage from "@/assets/Aereo_INFO.png";
import drayageInfoImage from "@/assets/Arrastre_INFO.png";
import ftlInfoImage from "@/assets/FTL_INFO.png";
import lclInfoImage from "@/assets/LCL_INFO.png";
import ltlInfoImage from "@/assets/LTL_INFO.png";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const serviceImages = [
  lclInfoImage,
  ltlInfoImage,
  ftlInfoImage,
  drayageInfoImage,
  airInfoImage,
];

function ServiceCard({ service, image, featured = false, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-2.5 shadow-[0_28px_80px_rgba(3,10,24,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.06] sm:rounded-[32px] sm:p-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(179,58,91,0.16),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className={`relative overflow-hidden rounded-[22px] sm:rounded-[26px] ${featured ? "aspect-[3/2] min-h-[230px] sm:min-h-[360px]" : "aspect-[3/2]"}`}>
          <Image
            src={image}
            alt={service.alt}
            fill
            sizes={featured ? "(min-width: 1280px) 720px, 100vw" : "(min-width: 1280px) 340px, (min-width: 640px) 50vw, 100vw"}
            className="object-cover transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,22,0.04),rgba(4,10,22,0.2))]" />
        </div>

        <div className="relative z-10 flex items-start justify-between gap-4 px-2 pb-2 pt-4 sm:gap-5 sm:pt-5">
          <div className="min-w-0">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/58 sm:text-[0.68rem] sm:tracking-[0.26em]">
              {service.code}
            </div>
            <h3 className={`mt-3 text-white sm:mt-4 ${featured ? "text-2xl font-semibold sm:text-3xl" : "text-xl font-semibold sm:text-2xl"}`}>
              {service.title}
            </h3>
            <p className={`mt-2 max-w-2xl text-white/66 sm:mt-3 ${featured ? "text-sm leading-7 sm:text-base sm:leading-8" : "text-sm leading-6 sm:leading-7"}`}>
              {service.subtitle}
            </p>
          </div>

          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg text-white/54 md:flex">
            ↗
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function TransportModesSection() {
  const { copy } = useLanguage();
  const services = copy.services.items.map((service, index) => ({
    ...service,
    image: serviceImages[index],
  }));
  const [featuredService, ...secondaryServices] = services;

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,#0B1F3B_0%,#07152C_100%)]"
    >
      <div className="absolute inset-0 bg-brand-grid opacity-30" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(179,58,91,0.24),transparent_60%)]" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={copy.services.eyebrow}
          title={copy.services.title}
          description={copy.services.description}
          invert
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <ServiceCard service={featuredService} image={featuredService.image} featured />

          <div className="grid gap-6 sm:grid-cols-2">
            {secondaryServices.map((service, index) => (
              <ServiceCard
                key={service.code}
                service={service}
                image={service.image}
                delay={0.06 * (index + 1)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
