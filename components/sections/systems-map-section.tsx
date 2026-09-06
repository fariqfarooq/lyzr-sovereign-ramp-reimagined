import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SystemsMap } from "@/components/visuals/systems-map";

export function SystemsMapSection() {
  return (
    <section id="stack" className="section-space scroll-mt-24">
      <Container>
        <div className="grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-8">
          <SectionHeading
            eyebrow="The Lyzr Sovereign AI Stack"
            title="One ownership path, from agent to machine"
            body="What’s live and what’s coming, organized as one continuous stack instead of separate products competing for attention."
            align="left"
            className="lg:col-span-8"
          />

          <div className="lg:col-span-3 lg:col-start-10 lg:pb-1">
            <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-[var(--fg-38)]">
              Architecture principle
            </p>
            <p className="mt-2 max-w-sm text-[12px] leading-5 text-[var(--fg-55)]">
              Governance stays continuous while infrastructure ownership increases layer by layer.
            </p>
          </div>
        </div>

        <Reveal className="mt-12 sm:mt-14 lg:mt-16" delay={0.05}>
          <SystemsMap />
        </Reveal>
      </Container>
    </section>
  );
}
