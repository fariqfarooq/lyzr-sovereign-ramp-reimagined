import {
  Banknote,
  BrainCircuit,
  ShieldQuestion,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { reasons } from "@/lib/content";

const icons = [
  Banknote,
  BrainCircuit,
  ShieldQuestion,
] as const;

export function Reasons() {
  return (
    <section
      id="why-sovereign"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-8">
          {/* Left editorial rail */}
          {/* <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary sm:text-[11px]">
              Why it matters for you
            </p>
          </div> */}

          {/* Main section statement */}
          <div className="lg:col-span-5">
            <h2 className="max-w-[14ch] text-balance text-[clamp(2.45rem,4.2vw,4.35rem)] font-normal leading-[1] tracking-[-0.05em]">
              Three reasons your enterprise can’t afford to wait
            </h2>
          </div>

          {/* Supporting context */}
          <div className="lg:col-span-3 lg:col-start-10 lg:pt-1">
            <p className="max-w-[28rem] text-[14px] leading-6 text-[var(--fg-55)] sm:text-[15px] sm:leading-7">
              Sovereignty becomes a business requirement when infrastructure
              costs, proprietary knowledge and accountability move from
              experiments into daily operations.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-3 sm:mt-16 lg:mt-20 lg:auto-rows-fr lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = icons[index];

            return (
              <Reveal
                key={reason.index}
                delay={index * 0.055}
                className="h-full"
              >
                <article className="flex h-full flex-col rounded-[16px] border border-[var(--border-medium)] bg-white p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(42,31,26,.05)] sm:p-7 lg:min-h-[490px]">
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-cream text-primary">
                      <Icon
                        className="h-[18px] w-[18px]"
                        strokeWidth={1.6}
                      />
                    </span>

                    <span className="font-mono text-[10px] text-[var(--fg-38)]">
                      {reason.index}
                    </span>
                  </div>

                  <div className="pt-10">
                    <h3 className="max-w-[18ch] text-[clamp(1.65rem,2.25vw,2.08rem)] font-normal leading-[1.04] tracking-[-0.043em] lg:min-h-[104px]">
                      {reason.title}
                    </h3>

                    <p className="mt-4 max-w-md text-[13px] leading-6 text-[var(--fg-55)] lg:min-h-[120px] lg:text-[14px]">
                      {reason.body}
                    </p>
                  </div>

                  <div className="mt-auto border-t border-[var(--border-soft)] pt-6">
                    <p className="text-4xl font-normal tracking-[-0.055em]">
                      {reason.metric}
                    </p>

                    <p className="mt-2 max-w-[29ch] text-[11px] leading-5 text-[var(--fg-55)]">
                      {reason.metricLabel}
                    </p>
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