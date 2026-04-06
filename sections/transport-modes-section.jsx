"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, [services.length]);

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
          />

          <Reveal>
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_32px_90px_rgba(3,10,24,0.34)] backdrop-blur sm:rounded-[36px] sm:p-4">
              <div className="flex items-center justify-between gap-4 px-2 pb-4 pt-1 sm:px-3">
                <div>
                  <div className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/58 sm:text-[0.68rem] sm:tracking-[0.24em]">
                    {copy.services.autoplay}
                  </div>
                  <p className="mt-3 text-sm text-white/58 sm:text-base">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <ArrowButton direction="left" label={copy.services.previous} onClick={goToPrevious} />
                  <ArrowButton direction="right" label={copy.services.next} onClick={goToNext} />
                </div>
              </div>

              <div className="overflow-hidden rounded-[24px] sm:rounded-[30px]">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {services.map((service, index) => (
                    <article key={service.code} className="min-w-full">
                      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(8,20,40,0.45)]">
                        <div className="absolute left-3 top-3 z-10 inline-flex rounded-full border border-white/10 bg-[rgba(8,20,40,0.82)] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/62 backdrop-blur sm:left-5 sm:top-5 sm:text-[0.68rem] sm:tracking-[0.24em]">
                          {service.code}
                        </div>

                        <div className="relative aspect-[16/11] min-h-[200px] sm:min-h-[420px] lg:min-h-[520px]">
                          <Image
                            src={service.image}
                            alt={service.alt}
                            fill
                            sizes="(min-width: 1280px) 1120px, 100vw"
                            className="object-cover"
                            priority={index === activeIndex}
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,22,0.02),rgba(4,10,22,0.16))]" />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(4,10,22,0.28))]" />
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="-mx-1 mt-5 flex snap-x gap-3 overflow-x-auto px-1 pb-1 sm:mx-0 sm:mt-6 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 xl:grid-cols-5">
                {services.map((service, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={service.code}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`min-w-[138px] shrink-0 snap-start rounded-[20px] border px-4 py-3 text-left transition sm:min-w-0 sm:py-4 ${
                        isActive
                          ? "border-white/18 bg-white/[0.08] shadow-[0_18px_40px_rgba(3,10,24,0.22)]"
                          : "border-white/10 bg-white/[0.03] hover:border-white/14 hover:bg-white/[0.05]"
                      }`}
                      aria-pressed={isActive}
                    >
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/46 sm:text-[0.66rem] sm:tracking-[0.2em]">
                        {copy.services.sheetLabel}
                      </p>
                      <p className="mt-2 text-base font-semibold text-white sm:text-lg">{service.code}</p>
                      <p className="mt-1.5 text-xs leading-5 text-white/62 sm:mt-2 sm:text-sm sm:leading-6">
                        {service.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-[0_28px_80px_rgba(3,10,24,0.24)]">
              <div className="grid gap-8 px-5 py-6 sm:px-6 sm:py-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:gap-10 lg:px-8">
                <div>
                <p className="section-label text-white/58">{copy.services.additionalEyebrow}</p>
                  <h3 className="mt-5 max-w-[12ch] font-display text-[1.9rem] font-semibold leading-[0.98] text-white sm:text-[2.35rem]">
                    {copy.services.additionalTitle}
                  </h3>
                  <p className="mt-5 max-w-[46ch] text-[0.94rem] leading-7 text-white/68 sm:text-[0.98rem] sm:leading-8">
                    {copy.services.additionalDescription}
                  </p>
                </div>

                <div className="divide-y divide-white/10">
                  {copy.services.additionalItems.map((item, index) => (
                    <article
                      key={item.title}
                      className="grid gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-5 sm:py-5"
                    >
                      <div className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white/36 sm:pt-1">
                        0{index + 1}
                      </div>
                      <div>
                        <h4 className="text-[1.05rem] font-semibold text-white sm:text-[1.28rem]">
                          {item.title}
                        </h4>
                        <p className="mt-3 max-w-[56ch] text-sm leading-7 text-white/66 sm:text-[0.98rem] sm:leading-8">
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
