import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  "Better Visibility",
  "Optimized Costs",
  "Faster Transit",
  "Dedicated Support",
];

export function BenefitsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-soft-grid opacity-70" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Benefits"
          title="A cleaner freight experience for modern operations teams."
          description="The outcome is simple: more clarity, more confidence and better operating performance across international logistics."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit} delay={0.07 * index}>
              <div className="surface-card h-full p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-ink-soft)]">
                  0{index + 1}
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-[var(--color-ink-strong)]">
                  {benefit}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--color-ink-soft)]">
                  {index === 0 &&
                    "Surface shipment movement, milestone changes and operational context without relying on fragmented updates."}
                  {index === 1 &&
                    "Improve freight economics by choosing better combinations of mode, route and timing."}
                  {index === 2 &&
                    "Reduce avoidable delays with tighter coordination and faster operational response loops."}
                  {index === 3 &&
                    "Pair technology-driven operations with experienced specialists who understand complex shipments."}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

