import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const blocks = [
  {
    title: "Data Intelligence",
    body: "Turn rate signals, routing constraints and shipment context into more informed decisions.",
    accent: "from-[#800020]/20 to-transparent",
  },
  {
    title: "Operational Systems",
    body: "Bring structure to execution with shared workflows that support consistency across teams and shipments.",
    accent: "from-[#0B1F3B]/12 to-transparent",
  },
  {
    title: "Visibility Platforms",
    body: "Create a more transparent logistics experience with milestone awareness and exception-oriented oversight.",
    accent: "from-[#909EAE]/20 to-transparent",
  },
];

export function TechnologySection() {
  return (
    <section id="technology" className="section-padding relative">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
          <Reveal>
            <SectionHeading
              eyebrow="Technology"
              title="Technology Meets Logistics"
              description="The product experience is designed to feel like a SaaS platform, while still respecting the realities of global freight operations."
            />
          </Reveal>

          <div className="grid gap-5">
            {blocks.map((block, index) => (
              <Reveal key={block.title} delay={0.1 * index}>
                <div className="surface-card relative overflow-hidden p-6 sm:p-7">
                  <div className={`absolute inset-0 bg-gradient-to-r ${block.accent}`} />
                  <div className="relative z-10 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-center">
                    <div className="rounded-[22px] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(11,31,59,0.04),rgba(11,31,59,0.01))] p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-burgundy)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-orbit)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-steel)]" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 rounded-full bg-[rgba(11,31,59,0.12)]" />
                        <div className="h-2 w-4/5 rounded-full bg-[rgba(11,31,59,0.08)]" />
                        <div className="h-2 w-3/5 rounded-full bg-[rgba(11,31,59,0.08)]" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold text-[var(--color-ink-strong)]">
                        {block.title}
                      </h3>
                      <p className="mt-3 text-base leading-8 text-[var(--color-ink-soft)]">
                        {block.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
