"use client";

import { PriorityLogo } from "@/components/brand/priority-logo";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function CTASection() {
  const { copy } = useLanguage();
  const contacts = [
    {
      title: copy.cta.sales,
      phone: "+52 81 3739 4200",
      phoneHref: "tel:+528137394200",
      email: "ventas@fipriority.com",
      emailHref: "mailto:ventas@fipriority.com",
      whatsappHref:
        "https://wa.me/528137394200?text=Hola%20PRIORITY,%20me%20gustaria%20recibir%20informacion%20sobre%20sus%20servicios.",
    },
    {
      title: copy.cta.office,
      phone: "+52 81 4005 0928",
      phoneHref: "tel:+528140050928",
      email: "operaciones@fipriority.com",
      emailHref: "mailto:operaciones@fipriority.com",
      whatsappHref:
        "https://wa.me/528140050928?text=Hola%20PRIORITY,%20necesito%20apoyo%20con%20una%20operacion%20logistica.",
    },
  ];

  return (
    <section id="contact" className="section-padding relative pt-8">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,#0A1E3A_0%,#061326_100%)] px-5 py-10 shadow-[0_40px_100px_rgba(3,10,24,0.28)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="absolute inset-0 bg-brand-grid opacity-30" />
            <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(179,58,91,0.36),transparent_68%)]" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
              <div>
                <p className="section-label text-white/62">{copy.cta.eyebrow}</p>
                <h2 className="mt-4 max-w-[11ch] font-display text-[2.35rem] font-semibold leading-[0.94] text-white sm:mt-5 sm:text-[3.8rem]">
                  {copy.cta.title}
                </h2>
                <p className="mt-5 max-w-[48ch] text-[1rem] leading-7 text-white/72 sm:text-[1.06rem] sm:leading-8">
                  {copy.cta.description}
                </p>
                <p className="mt-4 max-w-[46ch] text-[0.96rem] leading-7 text-white/56 sm:text-[1rem]">
                  {copy.cta.connectLine}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-6 lg:ml-auto lg:max-w-[420px]">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/40">
                      PRIORITY
                    </p>
                    <p className="mt-3 max-w-[20ch] font-display text-[1.45rem] font-semibold leading-tight text-white">
                      Atención comercial y operativa con respuesta directa.
                    </p>
                  </div>
                  <PriorityLogo showWordmark={false} className="opacity-95" />
                </div>

                <div className="mt-6 grid gap-3">
                  <Button
                    href={contacts[0].whatsappHref}
                    className="w-full"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.cta.whatsapp} {copy.cta.sales}
                  </Button>
                  <Button href="/presentacion" variant="secondary" className="w-full">
                    {copy.cta.presentation}
                  </Button>
                  <Button
                    href="#home"
                    variant="secondary"
                    className="w-full"
                  >
                    {copy.cta.secondary}
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 grid gap-0 border-t border-white/10 pt-8 lg:grid-cols-2">
              {contacts.map((contact) => (
                <div
                  key={contact.title}
                  className="border-white/10 py-6 lg:px-6 lg:first:pl-0 lg:last:border-l lg:last:pr-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42 sm:text-xs sm:tracking-[0.32em]">
                        {contact.title}
                      </p>
                      <a
                        href={contact.phoneHref}
                        className="mt-3 block font-display text-[1.45rem] font-semibold leading-tight text-white transition-[color] duration-200 hover:text-white/84 sm:text-[1.9rem]"
                      >
                        {contact.phone}
                      </a>
                    </div>
                    <PriorityLogo showWordmark={false} className="opacity-80" />
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-white/72 sm:text-[0.98rem]">
                    <p>
                      <span className="mr-2 text-white/46">{copy.cta.phoneLabel}</span>
                      <a href={contact.phoneHref} className="transition hover:text-white">
                        {contact.phone}
                      </a>
                    </p>
                    <p>
                      <span className="mr-2 text-white/46">{copy.cta.emailLabel}</span>
                      <a href={contact.emailHref} className="transition hover:text-white">
                        {contact.email}
                      </a>
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-white/58">
                    <a href={contact.phoneHref} className="rounded-full border border-white/10 px-4 py-2 transition-[background-color,color] duration-200 hover:bg-white/[0.05] hover:text-white">
                      {copy.cta.phoneLabel}
                    </a>
                    <a href={contact.emailHref} className="rounded-full border border-white/10 px-4 py-2 transition-[background-color,color] duration-200 hover:bg-white/[0.05] hover:text-white">
                      {copy.cta.emailLabel}
                    </a>
                    <a
                      href={contact.whatsappHref}
                      className="rounded-full border border-white/10 px-4 py-2 transition-[background-color,color] duration-200 hover:bg-white/[0.05] hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {copy.cta.whatsapp}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
