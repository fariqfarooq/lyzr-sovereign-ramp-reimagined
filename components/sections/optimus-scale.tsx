"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, HardDrive, Monitor, Server, Users } from "lucide-react";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { optimusMaxSpecs, optimusTiers } from "@/lib/content";

const tierIcons = [Monitor, Users, Server, HardDrive] as const;

export function OptimusScale() {
  const [active, setActive] = useState(3);
  const reduceMotion = useReducedMotion();
  const tier = optimusTiers[active];
  const ActiveIcon = tierIcons[active];

  return (
    <section id="optimus" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Lyzr Optimus"
          title={<>Choose your scaless. <span className="text-[var(--fg-38)]">Own your intelligence</span></>}
          body="From a personal workstation for a CXO to an enterprise rack for 10,000 concurrent users. Pick the appliance for the scale you need."
        />

        <div className="mt-14 overflow-hidden rounded-[20px] border border-[var(--border-medium)] bg-parch sm:mt-16 lg:mt-20">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b border-[var(--border-soft)] bg-white lg:border-b-0 lg:border-r">
              <div className="border-b border-[var(--border-soft)] px-5 py-4 sm:px-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-38)]">
                  Appliance family
                </p>
              </div>

              <div role="tablist" aria-label="Optimus appliance sizes" className="divide-y divide-[var(--border-soft)]">
                {optimusTiers.map((item, index) => {
                  const Icon = tierIcons[index];
                  const selected = active === index;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActive(index)}
                      className="group relative flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      {selected ? (
                        <motion.span
                          layoutId="optimus-active-rail"
                          className="absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-primary"
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        />
                      ) : null}

                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-[10px] transition-colors ${selected ? "bg-primary text-white" : "bg-cream text-primary"}`}>
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.55} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className={`block text-[13px] font-medium transition-colors ${selected ? "text-fg" : "text-[var(--fg-72)]"}`}>
                          {item.name}
                        </span>
                        <span className="mt-1 block text-[10px] text-[var(--fg-38)]">{item.audience}</span>
                      </span>

                      <ArrowRight className={`h-3.5 w-3.5 shrink-0 transition-[color,transform] ${selected ? "translate-x-0 text-primary" : "-translate-x-1 text-[var(--fg-38)] group-hover:translate-x-0 group-hover:text-primary"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-[500px] overflow-hidden bg-cream p-5 sm:p-7 lg:min-h-[590px] lg:p-8">
              <div className="dotted-grid absolute inset-0 opacity-25" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={tier.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex h-full min-h-[450px] flex-col"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-primary">Pre-orders opening Q4</p>
                      <h3 className="mt-4 text-[clamp(2.2rem,4vw,4rem)] font-normal leading-[0.96] tracking-[-0.055em]">{tier.name}</h3>
                      <p className="mt-4 max-w-[32rem] text-[13px] leading-6 text-[var(--fg-55)] sm:text-[14px]">
                        {tier.description}
                      </p>
                    </div>

                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[11px] bg-primary-deep text-white">
                      <ActiveIcon className="h-5 w-5" strokeWidth={1.45} />
                    </span>
                  </div>

                  <div className="my-auto py-12">
                    <div className="mx-auto max-w-[520px] [perspective:900px]">
                      <motion.div
                        initial={false}
                        animate={{ rotateX: 7, rotateY: active === 0 ? -7 : active === 3 ? 7 : 0, y: reduceMotion ? 0 : [0, -5, 0] }}
                        transition={reduceMotion ? { duration: 0 } : { y: { duration: 5.6, repeat: Infinity, ease: "easeInOut" }, rotateY: { duration: 0.5 } }}
                        className="relative mx-auto w-[78%] rounded-[18px] border border-primary/20 bg-primary-deep p-3 shadow-[0_28px_65px_rgba(74,52,52,.16)] [transform-style:preserve-3d] sm:w-[72%]"
                      >
                        <div className="rounded-[12px] border border-white/10 bg-[#382829] p-3">
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-rose-light" />
                              <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/48">Optimus</span>
                            </div>
                            <span className="font-mono text-[8px] text-white/38">{tier.scale}</span>
                          </div>

                          <div className={`mt-3 grid gap-2 ${active <= 1 ? "grid-cols-2" : active === 2 ? "grid-cols-3" : "grid-cols-4"}`}>
                            {Array.from({ length: active <= 1 ? 4 : active === 2 ? 6 : 8 }).map((_, index) => (
                              <motion.div
                                key={index}
                                initial={reduceMotion ? false : { opacity: 0.35 }}
                                animate={{ opacity: [0.35, 0.85, 0.35] }}
                                transition={{ duration: 2.8, delay: index * 0.12, repeat: Infinity, ease: "easeInOut" }}
                                className="aspect-[1.55/1] rounded-[7px] border border-white/8 bg-white/[0.045] p-2"
                              >
                                <span className="block h-1 w-5 rounded-full bg-white/14" />
                                <span className="mt-2 block h-1 w-8 rounded-full bg-white/8" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 border-t border-[var(--border-medium)] pt-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-[var(--fg-38)]">Scale</p>
                      <p className="mt-1 text-[22px] font-normal tracking-[-0.04em]">{tier.audience}</p>
                    </div>
                    <ButtonLink href="https://www.lyzr.ai/book-demo/" tone="deep">Join the Optimus waitlist</ButtonLink>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="border-t border-[var(--border-soft)] bg-white px-5 py-6 sm:px-7 sm:py-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="lg:max-w-[260px]">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-primary">Optimus Max</p>
                <p className="mt-2 text-[18px] font-normal tracking-[-0.035em]">10,000 concurrent users. Full enterprise.</p>
              </div>

              <dl className="grid flex-1 grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 lg:max-w-[760px] lg:grid-cols-5">
                {optimusMaxSpecs.map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--fg-38)]">{label}</dt>
                    <dd className="mt-2 text-[11px] leading-5 text-[var(--fg-72)]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
