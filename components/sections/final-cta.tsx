import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function FinalCta() {
  return (
    <section className="py-5 sm:py-7">
      <Container>
        <Reveal>
          <div className="noise-mask relative overflow-hidden rounded-[18px] bg-primary-deep px-6 py-16 text-white sm:px-9 sm:py-20 lg:px-12 lg:py-24">
            <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">Sovereign by architecture</p>
                <h2 className="mt-5 max-w-[10ch] text-balance text-[clamp(2.8rem,5.8vw,6rem)] font-normal leading-[0.93] tracking-[-0.06em]">Stop building on someone else’s foundation.</h2>
              </div>
              <div className="lg:col-span-4">
                <p className="max-w-sm text-[14px] leading-6 text-white/62">Tell Lyzr where your AI runs today and map the shortest path to owning more of the stack.</p>
                <div className="mt-6 flex flex-wrap gap-2.5"><ButtonLink href="https://www.lyzr.ai/book-demo" tone="white">Talk to Us</ButtonLink><ButtonLink href="https://www.lyzr.ai/book-demo" tone="primary">Pre-order Optimus</ButtonLink></div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
