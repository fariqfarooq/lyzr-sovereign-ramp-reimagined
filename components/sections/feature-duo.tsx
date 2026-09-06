import { ArrowRight, HardDrive, LockKeyhole, Network, Server, WifiOff } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeatureDuo() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          title="Choose your scale. Own your intelligence"
          body="From a mixed agent estate to on-prem hardware, each layer can be adopted without changing the experience your teams depend on."
        />

        <div className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="h-full">
              <div className="relative min-h-[350px] overflow-hidden sm:min-h-[420px] rounded-[17px] border border-[var(--border-medium)] bg-parch p-5 sm:p-7">
                <div className="mx-auto mt-7 max-w-[430px] overflow-hidden rounded-[15px] border border-[var(--border-medium)] bg-white shadow-[0_18px_48px_rgba(42,31,26,.075)] sm:mt-10">
                  <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-[8px] bg-cream text-primary">
                        <Network className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <div>
                        <p className="text-[11px] font-medium">Existing agent estate</p>
                        <p className="mt-0.5 text-[8px] text-[var(--fg-38)]">No rebuild required</p>
                      </div>
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-primary">connected</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 p-4 sm:grid-cols-4">
                    {[
                      ["LangGraph", "12 agents"],
                      ["CrewAI", "8 agents"],
                      ["Agentforce", "16 agents"],
                      ["Custom", "23 agents"],
                    ].map(([name, count]) => (
                      <div key={name} className="rounded-[9px] border border-[var(--border-soft)] bg-parch p-3">
                        <p className="text-[9px] font-medium">{name}</p>
                        <p className="mt-1.5 font-mono text-[7px] uppercase tracking-[0.08em] text-[var(--fg-38)]">{count}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[var(--border-soft)] bg-primary px-4 py-4 text-white">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <LockKeyhole className="h-4 w-4" strokeWidth={1.6} />
                        <div>
                          <p className="text-[11px] font-medium">Lyzr Control Plane</p>
                          <p className="mt-0.5 text-[8px] text-white/50">Identity · policy · audit</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.1em] text-white/65">governed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <h3 className="text-[22px] font-normal tracking-[-0.04em]">Start with what you already have.</h3>
                <p className="mt-2 max-w-xl text-[13px] leading-5 text-[var(--fg-55)]">One registry, one identity layer and one audit surface over agents built on different stacks.</p>
                <Link href="#ownership" className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-primary hover:text-primary-deep">Control Plane <ArrowRight className="h-3 w-3" /></Link>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.07} className="h-full">
            <article className="h-full">
              <div className="relative min-h-[350px] overflow-hidden sm:min-h-[420px] rounded-[17px] border border-[var(--border-medium)] bg-parch p-5 sm:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(107,76,76,.11),transparent_30%)]" />
                <div className="relative mx-auto mt-10 max-w-[410px] sm:mt-12">
                  <div className="rounded-[16px] border border-primary/18 bg-[#f6f0eb] p-5 shadow-[0_25px_60px_rgba(42,31,26,.11)]">
                    <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="grid h-8 w-8 place-items-center rounded-[8px] bg-primary text-white"><HardDrive className="h-4 w-4" strokeWidth={1.6} /></span>
                        <div><p className="text-[13px] font-medium">Optimus Max</p><p className="mt-0.5 text-[9px] text-[var(--fg-38)]">On-prem agent factory</p></div>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 pt-4">
                      {[{ icon: WifiOff, label: "No Wi-Fi" }, { icon: LockKeyhole, label: "Zero external calls" }, { icon: Server, label: "10k concurrent" }, { icon: HardDrive, label: "Air-gapped" }].map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-2 rounded-[9px] border border-[var(--border-soft)] bg-white p-3 text-[10px] text-[var(--fg-55)]"><Icon className="h-3.5 w-3.5 text-primary" strokeWidth={1.6} />{label}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <h3 className="text-[22px] font-normal tracking-[-0.04em]">Lyzr Optimus</h3>
                <p className="mt-2 max-w-xl text-[13px] leading-5 text-[var(--fg-55)]">Physical hardware for enterprises that need the agent stack, model runtime and data boundary on infrastructure they own.</p>
                <Link href="https://www.lyzr.ai/book-demo" className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-primary hover:text-primary-deep">Pre-order Optimus <ArrowRight className="h-3 w-3" /></Link>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
