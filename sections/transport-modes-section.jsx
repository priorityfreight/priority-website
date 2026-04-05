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
                  {services.map((service) => (
                    <article key={service.code} className="min-w-full">
                      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.22fr)_minmax(320px,0.78fr)]">
                        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(8,20,40,0.45)]">
                          <div className="relative aspect-[4/3] min-h-[220px] sm:min-h-[360px] xl:h-full xl:min-h-[520px]">
                            <Image
                              src={service.image}
                              alt={service.alt}
                              fill
                              sizes="(min-width: 1280px) 760px, 100vw"
                              className="object-cover"
                              priority={service.code === activeService.code}
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,22,0.02),rgba(4,10,22,0.14))]" />
                          </div>
                        </div>

                        <div className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-[rgba(15,27,51,0.86)] p-5 sm:p-7 xl:p-8">
                          <div>
                            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/58 sm:text-[0.68rem] sm:tracking-[0.24em]">
                              {service.code}
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                              {service.title}
                            </h3>
                            <p className="mt-4 text-[0.98rem] leading-7 text-white/70 sm:text-base sm:leading-8">
                              {service.subtitle}
                            </p>
                          </div>

                          <div className="mt-8 rounded-[22px] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/48 sm:text-xs sm:tracking-[0.3em]">
                              {copy.services.focusLabel}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-white/66 sm:text-[0.98rem]">
                              {service.detail}
                            </p>
                            <div className="mt-5 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
                              <div>
                                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                                  {copy.services.fitLabel}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-white/72">
                                  {service.fit}
                                </p>
                              </div>
                              <div>
                                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                                  {copy.services.regionLabel}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-white/72">
                                  {service.region}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/52">
                              {copy.services.solutionLabel}
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/52">
                              {copy.services.monitoringLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 xl:grid-cols-5">
                {services.map((service, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={service.code}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`rounded-[20px] border px-4 py-4 text-left transition ${
                        isActive
                          ? "border-white/18 bg-white/[0.08] shadow-[0_18px_40px_rgba(3,10,24,0.22)]"
                          : "border-white/10 bg-white/[0.03] hover:border-white/14 hover:bg-white/[0.05]"
                      }`}
                      aria-pressed={isActive}
                    >
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-white/46">
                        {copy.services.sheetLabel}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">{service.code}</p>
                      <p className="mt-2 text-sm leading-6 text-white/62">{service.title}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
