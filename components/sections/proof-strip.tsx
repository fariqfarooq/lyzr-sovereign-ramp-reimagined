import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { metrics } from "@/lib/content";

export function ProofStrip() {
  return (
    <section className="border-y border-[var(--border-soft)]">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 0.035}
              className="border-b border-[var(--border-soft)] py-7 sm:odd:border-r lg:border-b-0 lg:border-r lg:px-5 lg:py-9 lg:last:border-r-0"
            >
              <p className="text-[clamp(2.2rem,4vw,3.55rem)] font-medium leading-none tracking-[-0.055em]">
                {metric.value}
              </p>
              <p className="mt-2 max-w-[18ch] text-[12px] leading-5 text-[var(--fg-55)]">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
