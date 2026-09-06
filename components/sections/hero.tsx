import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { HeroCanvas } from "@/components/visuals/hero-canvas";

export function Hero() {
  return (
    <section className="pb-14 pt-10  lg:pb-24 lg:pt-10">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary sm:text-[11px]">
                Lyzr Sovereign AI
              </p>
              <h1 className="mt-5 max-w-[10.5ch] text-balance text-[clamp(3.7rem,7.2vw,7.45rem)] font-normal leading-[0.88] tracking-[-0.067em]">
                The Sovereign AI platform
                <span className="block text-[var(--fg-38)]">for leading enterprises</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-1">
              <p className="max-w-[31rem] text-[15px] leading-6 text-[var(--fg-55)] sm:text-base sm:leading-7">
                Your agents, your models, your hardware, your governance. The full-stack sovereign agent platform, every layer Lyzr, every layer yours.
              </p>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <ButtonLink
                  href="https://www.lyzr.ai/book-demo"
                  tone="deep"
                  className="w-full sm:w-auto sm:min-w-[132px]"
                >
                  Talk to Us
                </ButtonLink>
                <ButtonLink
                  href="#stack"
                  tone="quiet"
                  className="w-full sm:w-auto sm:min-w-[156px]"
                >
                  Explore the stack
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-11 sm:mt-14 lg:mt-16" delay={0.08}>
          <HeroCanvas />
        </Reveal>
      </Container>
    </section>
  );
}
