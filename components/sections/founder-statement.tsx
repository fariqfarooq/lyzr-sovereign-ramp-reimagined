import { Quote } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";

export function FounderStatement() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-10 border-y border-[var(--border-medium)] py-12 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
            <div className="lg:col-span-3">
              <span className="grid h-65 w-65 place-items-center rounded-[11px] bg-cream/50 text-primary/50">
                <Quote className="h-60 w-60" strokeWidth={1.35} />
              </span>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <blockquote className="max-w-[24ch] text-balance text-[clamp(2rem,3.6vw,3.75rem)] font-normal leading-[1.04] tracking-[-0.047em]">
                “Lyzr is now a fully integrated, full-stack sovereign agent platform, from the control plane and the agents, down to the hardware they run on. You own the intelligence. And now you own the machine it lives on.”
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-10 bg-primary/40" />
                <p className="text-[12px] font-medium">Siva Surendira · Founder &amp; CEO, Lyzr AI</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
