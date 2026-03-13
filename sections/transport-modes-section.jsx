import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TransportIcon } from "@/components/ui/transport-icon";

const modes = [
  {
    title: "Ocean Freight",
    mode: "ocean",
    copy: "Strategic control for containerized freight with visibility across major global trade lanes.",
  },
  {
    title: "Air Freight",
    mode: "air",
    copy: "Priority routing for time-sensitive moves where speed and responsive execution matter most.",
  },
  {
    title: "Ground Transportation",
    mode: "ground",
    copy: "Reliable inland coordination that connects ports, airports, warehouses and final delivery points.",
  },
];

export function TransportModesSection() {
  return (
    <section
      id="transport-modes"
      className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,#0B1F3B_0%,#07152C_100%)]"
    >
      <div className="absolute inset-0 bg-brand-grid opacity-30" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Transport Modes"
          title="Multimodal freight execution with a premium product feel."
          description="Every mode lives inside the same operating system: clear visibility, better routing intelligence, and disciplined execution."
          invert
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {modes.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * index}>
              <article className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-7 text-white transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.06]">
                <div className="absolute inset-x-0 top-0 h-px orbit-stroke opacity-70" />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(128,0,32,0.32),rgba(179,58,91,0.16))] text-white transition duration-300 group-hover:scale-105">
                  <TransportIcon mode={item.mode} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/70">
                  {item.copy}
                </p>
                <div className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-white/46">
                  <span className="h-px w-8 bg-white/20" />
                  Mode Intelligence
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

