import { Bot, Cpu, HardDrive, LockKeyhole, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const layers = [
  {
    icon: Bot,
    name: "Lyzr Agent Platform",
    kicker: "Agentic OS + Control Plane",
    body: "1,000+ agents live in production. Every function. Every industry. One governance layer.",
    status: "Live",
  },
  {
    icon: Sparkles,
    name: "Lyzr Nitro",
    kicker: "Production modules for hyperscaler platforms",
    body: "Simulation, SuperFlow, ShadowLM, Architect, CI/CD. Takes agents to production.",
    status: "Live",
  },
  {
    icon: Cpu,
    name: "Lyzr LLMs",
    kicker: "Open source models built for responsible AI",
    body: "Fine-tunable on your data. No token meter. Built for enterprise accountability.",
    status: "Coming",
  },
  {
    icon: HardDrive,
    name: "Lyzr Optimus",
    kicker: "On-prem hardware appliance",
    body: "Physical. Air-gapped. No external calls. 1M+ agents, 10,000 concurrent users.",
    status: "Shipping Q4",
  },
] as const;

export function StackOverview() {
  return (
    <section id="stack" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Lyzr Sovereign AI Stack"
          title="What’s live. What’s coming next."
          body="One stack from the agents your teams run to the machine they run on, with governance carried through every layer."
        />

        <div className="mt-10 overflow-hidden rounded-[18px] border border-[var(--border-medium)] bg-white sm:mt-12 lg:mt-14">
          <div className="grid lg:grid-cols-4">
            {layers.map(({ icon: Icon, name, kicker, body, status }, index) => (
              <Reveal
                key={name}
                delay={index * 0.045}
                className={`h-full border-b border-[var(--border-soft)] lg:border-b-0 ${index < layers.length - 1 ? "lg:border-r" : ""}`}
              >
                <article className={`flex h-full min-h-[250px] flex-col lg:min-h-[320px] p-5 sm:p-6 ${index === 3 ? "bg-primary-deep text-white" : index === 2 ? "bg-parch" : "bg-white"}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className={`grid h-9 w-9 place-items-center rounded-[9px] ${index === 3 ? "bg-white/10" : "bg-cream text-primary"}`}>
                      <Icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    <span className={`font-mono text-[8px] uppercase tracking-[0.11em] ${index === 3 ? "text-white/55" : "text-primary"}`}>
                      {status}
                    </span>
                  </div>

                  <div className="mt-12">
                    <p className={`text-[10px] leading-4 ${index === 3 ? "text-white/45" : "text-[var(--fg-38)]"}`}>{kicker}</p>
                    <h3 className="mt-2 max-w-[14ch] text-[24px] font-normal leading-[1.02] tracking-[-0.043em]">{name}</h3>
                    <p className={`mt-4 max-w-[30ch] text-[11px] leading-5 ${index === 3 ? "text-white/58" : "text-[var(--fg-55)]"}`}>{body}</p>
                  </div>

                  <div className={`mt-auto pt-10 ${index === 3 ? "text-white/45" : "text-[var(--fg-38)]"}`}>
                    <div className={`h-px ${index === 3 ? "bg-white/12" : "bg-[var(--border-soft)]"}`} />
                    <div className="mt-4 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.1em]">
                      <span>Layer 0{index + 1}</span>
                      <span>{index === 3 ? "Own the machine" : "Own more"}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-3 border-t border-[var(--border-soft)] bg-cream px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-primary">
                <LockKeyhole className="h-3.5 w-3.5" strokeWidth={1.6} />
              </span>
              <p className="text-[12px] font-medium">Everything live today. Everything coming next. Nothing leaving your walls.</p>
            </div>
            <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-primary">Sovereign by architecture</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
