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
    <section id="contact" className="section-padding relative pt-10">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,#0B1F3B_0%,#07152C_100%)] px-5 py-10 shadow-[0_40px_100px_rgba(3,10,24,0.32)] sm:rounded-[36px] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="absolute inset-0 bg-brand-grid opacity-30" />
            <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(179,58,91,0.36),transparent_68%)]" />
            <div className="relative z-10 grid gap-7 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <p className="section-label text-white/62">{copy.cta.eyebrow}</p>
                <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight text-white sm:mt-5 sm:text-5xl">
                  {copy.cta.title}
                </h2>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
                  {copy.cta.description}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
                  {copy.cta.connectLine}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row lg:flex-col lg:items-end">
                <PriorityLogo
                  layout="vertical"
                  className="hidden lg:flex lg:self-end"
                  subtitle={copy.brandSubtitle}
                />
                <Button
                  href={contacts[0].whatsappHref}
                  className="w-full sm:min-w-[220px] sm:w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.cta.whatsapp} {copy.cta.sales}
                </Button>
                <Button href="/presentacion" variant="secondary" className="w-full sm:min-w-[220px] sm:w-auto">
                  {copy.cta.presentation}
                </Button>
                <Button
                  href="#home"
                  variant="secondary"
                  className="w-full sm:min-w-[220px] sm:w-auto"
                >
                  {copy.cta.secondary}
                </Button>
              </div>
            </div>

            <div className="relative z-10 mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
              {contacts.map((contact) => (
                <div
                  key={contact.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:rounded-[28px] sm:p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/45 sm:text-xs sm:tracking-[0.32em]">
                        {contact.title}
                      </p>
                      <a
                        href={contact.phoneHref}
                        className="mt-3 block text-xl font-semibold leading-8 text-white transition hover:text-white/84 sm:text-2xl"
                      >
                        {contact.phone}
                      </a>
                    </div>
                    <PriorityLogo showWordmark={false} className="opacity-95" />
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-white/72">
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

                  <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
                    <Button href={contact.phoneHref} variant="light" className="w-full sm:w-auto">
                      {copy.cta.phoneLabel}
                    </Button>
                    <Button href={contact.emailHref} variant="secondary" className="w-full sm:w-auto">
                      {copy.cta.emailLabel}
                    </Button>
                    <Button
                      href={contact.whatsappHref}
                      variant="secondary"
                      className="w-full sm:w-auto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {copy.cta.whatsapp}
                    </Button>
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
