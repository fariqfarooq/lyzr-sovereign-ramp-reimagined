import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { StackCardVisual } from "@/components/visuals/stack-card-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { stackCards } from "@/lib/content";

export function PlatformGrid() {
  return (
    <section id="platform" className="section-space scroll-mt-24 bg-parch">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">The full stack</p>
            <h2 className="mt-4 max-w-[13ch] text-balance text-[clamp(2.6rem,4.8vw,4.9rem)] font-normal leading-[0.98] tracking-[-0.055em]">
              What’s live today. <span className="text-[var(--fg-38)]">What’s coming next</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <ButtonLink href="https://www.lyzr.ai/book-demo" tone="primary">Switch in days, not months</ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid gap-3 lg:grid-cols-12">
          {stackCards.map((card, index) => {
            const span = index < 2 ? "lg:col-span-6" : "lg:col-span-4";
            return (
              <Reveal key={card.name} delay={index * 0.045} className={span}>
                <article className="group flex h-full min-h-[410px] flex-col lg:min-h-[470px] overflow-hidden rounded-[16px] border border-[var(--border-medium)] bg-white p-4 transition-[box-shadow,border-color] duration-300 hover:border-primary/24 hover:shadow-[0_18px_45px_rgba(42,31,26,.055)] sm:p-5">
                  <div className="flex items-start justify-between gap-4 px-1 pb-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-primary">{card.status}</p>
                      <h3 className="mt-4 max-w-[17ch] text-[26px] font-normal leading-[1.02] tracking-[-0.045em]">{card.name}</h3>
                      <p className="mt-1 text-[14px] leading-5 text-[var(--fg-55)]">{card.kicker}</p>
                    </div>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] border border-[var(--border-medium)] bg-white transition-colors group-hover:border-primary/25 group-hover:bg-parch">
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </span>
                  </div>

                  <div className="min-h-0 flex-1"><StackCardVisual kind={card.kind} /></div>

                  <div className="flex items-end justify-between border-t border-[var(--border-soft)] px-1 pt-4">
                    <div><p className="text-2xl font-medium tracking-[-0.045em]">{card.stat}</p><p className="mt-1 text-[10px] text-[var(--fg-38)]">{card.statLabel}</p></div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--fg-38)]">Lyzr</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
