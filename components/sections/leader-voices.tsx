"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Quote } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { leaderQuotes } from "@/lib/content";

export function LeaderVoices() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const quote = leaderQuotes[active];

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="What leaders say"
          title={<>Words from the people <span className="text-[var(--fg-38)]">who made the call</span></>}
        />

        <div className="mt-14 grid overflow-hidden rounded-[20px] border border-[var(--border-medium)] bg-white sm:mt-16 lg:grid-cols-[0.38fr_0.62fr] lg:mt-20">
          <div className="border-b border-[var(--border-soft)] bg-parch p-3 lg:border-b-0 lg:border-r">
            <div role="tablist" aria-label="Leader testimonials" className="grid gap-1 sm:grid-cols-3 lg:grid-cols-1">
              {leaderQuotes.map((item, index) => {
                const selected = active === index;
                return (
                  <button
                    key={item.role}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(index)}
                    className={`relative rounded-[11px] px-4 py-4 text-left transition-colors sm:px-5 lg:py-5 ${selected ? "bg-white shadow-[0_1px_0_rgba(42,31,26,.04)]" : "hover:bg-white/55"}`}
                  >
                    {selected ? (
                      <motion.span
                        layoutId="leader-active"
                        className="absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-primary"
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      />
                    ) : null}
                    <span className="block text-[11px] font-medium leading-4">{item.role}</span>
                    <span className="mt-1.5 block text-[9px] leading-4 text-[var(--fg-38)]">{item.company}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative flex min-h-[420px] flex-col justify-between p-6 sm:p-9 lg:min-h-[500px] lg:p-11">
            <Quote className="h-8 w-8 text-primary/22" strokeWidth={1.25} />

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="my-10 max-w-[24ch] text-balance text-[clamp(1.8rem,3.2vw,3.3rem)] font-normal leading-[1.04] tracking-[-0.045em]"
              >
                “{quote.quote}”
              </motion.blockquote>
            </AnimatePresence>

            <div className="flex items-end justify-between gap-6 border-t border-[var(--border-soft)] pt-5">
              <div>
                <p className="text-[12px] font-medium">{quote.role}</p>
                <p className="mt-1 text-[10px] text-[var(--fg-38)]">{quote.company}</p>
              </div>
              <span className="font-mono text-[8px] uppercase tracking-[0.13em] text-primary">0{active + 1} / 03</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
