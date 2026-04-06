"use client";

import Image from "next/image";
import { useState } from "react";

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

function ArrowButton({ direction, label, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg text-white/72 transition hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
}

export function TransportModesSection() {
  const { copy } = useLanguage();
  const services = copy.services.items.map((service, index) => ({
    ...service,
    image: serviceImages[index],
  }));
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + services.length) % services.length);
  };
  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % services.length);
  };

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,#0B1F3B_0%,#07152C_100%)]"
      aria-label={copy.services.carouselLabel}
    >
      <div className="absolute inset-0 bg-brand-grid opacity-30" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(179,58,91,0.24),transparent_60%)]" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-7 sm:gap-9">
          <SectionHeading
            eyebrow={copy.services.eyebrow}
            title={copy.services.title}
            description={copy.services.description}
            invert
            className="max-w-[48ch]"
          />

          <div className="grid gap-8 xl:grid-cols-[minmax(320px,0.37fr)_minmax(0,0.63fr)] xl:items-start">
            <Reveal className="xl:sticky xl:top-28">
              <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_70px_rgba(3,10,24,0.18)] backdrop-blur sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/40">
                      {copy.services.sheetLabel}
                    </p>
                    <p className="mt-3 text-sm text-white/54">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <ArrowButton direction="left" label={copy.services.previous} onClick={goToPrevious} />
                    <ArrowButton direction="right" label={copy.services.next} onClick={goToNext} />
                  </div>
                </div>

                <div className="mt-7">
                  <div className="rounded-[24px] border border-white/10 bg-[rgba(8,20,40,0.42)] px-4 py-4">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/40">
                      {activeService.code}
                    </p>
                    <h3 className="mt-3 font-display text-[1.65rem] font-semibold leading-tight text-white sm:text-[1.95rem]">
                      {activeService.title}
                    </h3>
                    <p className="mt-4 text-[0.98rem] leading-7 text-white/68">
                      {activeService.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-6 divide-y divide-white/10">
                  {services.map((service, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={service.code}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`flex w-full items-center justify-between gap-4 py-4 text-left transition-[color,opacity] duration-200 ${
                          isActive ? "text-white" : "text-white/60 hover:text-white/82"
                        }`}
                        aria-pressed={isActive}
                      >
                        <div className="min-w-0">
                          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/38">
                            {service.code}
                          </p>
                          <p className="mt-2 text-[1rem] font-semibold leading-6 sm:text-[1.08rem]">
                            {service.title}
                          </p>
                        </div>
                        <span
                          className={`h-2.5 w-2.5 rounded-full transition-[background-color,box-shadow] duration-200 ${
                            isActive
                              ? "bg-[var(--color-orbit)] shadow-[0_0_0_8px_rgba(179,58,91,0.12)]"
                              : "bg-white/16"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[rgba(8,20,40,0.36)] shadow-[0_32px_90px_rgba(3,10,24,0.32)]">
                <div className="relative aspect-[16/11] min-h-[240px] sm:min-h-[480px] lg:min-h-[620px]">
                  <Image
                    src={activeService.image}
                    alt={activeService.alt}
                    fill
                    sizes="(min-width: 1280px) 820px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,22,0.02),rgba(4,10,22,0.24))]" />
                  <div className="absolute left-4 top-4 z-10 inline-flex rounded-full border border-white/10 bg-[rgba(8,20,40,0.74)] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/62 backdrop-blur sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-[0.68rem]">
                    {activeService.code}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-[0_28px_80px_rgba(3,10,24,0.18)]">
              <div className="grid gap-8 px-5 py-6 sm:px-6 sm:py-8 lg:grid-cols-[minmax(0,0.64fr)_minmax(0,1.36fr)] lg:gap-10 lg:px-8">
                <div>
                  <p className="section-label text-white/58">{copy.services.additionalEyebrow}</p>
                  <h3 className="mt-5 max-w-[12ch] font-display text-[2rem] font-semibold leading-[0.98] text-white sm:text-[2.5rem]">
                    {copy.services.additionalTitle}
                  </h3>
                  <p className="mt-5 max-w-[46ch] text-[0.98rem] leading-7 text-white/66 sm:text-[1rem] sm:leading-8">
                    {copy.services.additionalDescription}
                  </p>
                </div>

                <div className="grid gap-0 md:grid-cols-2">
                  {copy.services.additionalItems.map((item, index) => (
                    <article
                      key={item.title}
                      className={`grid gap-3 border-white/10 px-0 py-4 md:px-5 md:py-5 ${
                        index > 0 ? "border-t md:border-t-0" : ""
                      } ${index % 2 === 1 ? "md:border-l" : ""} ${index > 1 ? "md:border-t" : ""}`}
                    >
                      <div className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/36">
                        0{index + 1}
                      </div>
                      <div>
                        <h4 className="text-[1.08rem] font-semibold text-white sm:text-[1.24rem]">
                          {item.title}
                        </h4>
                        <p className="mt-3 max-w-[40ch] text-sm leading-6 text-white/64 sm:text-[0.96rem] sm:leading-7">
                          {item.copy}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
