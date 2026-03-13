import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    title: "Logistics Intelligence",
    copy: "Transform freight operations into a stream of insights, not just transactional updates.",
  },
  {
    title: "Global Visibility",
    copy: "Track status, milestone shifts and exceptions across international lanes in one view.",
  },
  {
    title: "Optimized Routing",
    copy: "Make mode and route decisions with more context around service, timing and cost.",
  },
  {
    title: "Technology Driven Operations",
    copy: "Support experienced freight teams with workflows, automation and operational systems.",
  },
];

export function WhyPrioritySection() {
  return (
    <section className="section-padding relative">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Why Priority"
              title="Not Your Traditional Freight Forwarder"
              description="PRIORITY is positioned as a logistics intelligence platform. The difference is in how decisions are made, surfaced and improved over time."
              className="max-w-2xl"
            />

            <div className="surface-card mt-8 overflow-hidden p-0">
              <div className="border-b border-slate-900/10 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-ink-soft)]">
                  Platform Point of View
                </p>
              </div>
              <div className="grid gap-0 divide-y divide-slate-900/8">
                {[
                  "A modern operating layer for global freight.",
                  "Human expertise strengthened by digital systems.",
                  "Built for teams that want control, not noise.",
                ].map((line) => (
                  <div
                    key={line}
                    className="px-6 py-5 text-base leading-8 text-[var(--color-ink-soft)]"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={0.08 * index}>
                <div className="surface-card h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(128,0,32,0.12),rgba(179,58,91,0.08))] text-[var(--color-burgundy)]">
                    <span className="text-lg font-semibold">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-ink-strong)]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-[var(--color-ink-soft)]">
                    {feature.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
