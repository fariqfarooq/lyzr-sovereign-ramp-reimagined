import {
  BadgeCheck,
  EyeOff,
  FileClock,
  LockKeyhole,
  ScanSearch,
  ShieldAlert,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { governanceCapabilities } from "@/lib/content";

const icons = [ShieldAlert, ScanSearch, BadgeCheck, FileClock, LockKeyhole, EyeOff] as const;

export function GovernanceCapabilities() {
  return (
    <section className="border-t border-[var(--border-soft)] bg-parch pb-20 sm:pb-24 lg:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Infrastructure controls"
          title="What governance actually means at the infrastructure level."
          as="h3"
          className="pt-10 lg:pt-12"
          titleClassName="text-[clamp(2.2rem,3.7vw,3.7rem)]"
        />

        <div className="mt-10 overflow-hidden rounded-[18px] border border-[var(--border-medium)] bg-white sm:mt-12">
          <div className="grid lg:grid-cols-2">
            {governanceCapabilities.map((item, index) => {
              const Icon = icons[index];
              const lastRow = index >= governanceCapabilities.length - 2;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.04}
                  className={`border-b border-[var(--border-soft)] ${
                    index % 2 === 0 ? "lg:border-r" : ""
                  } ${lastRow ? "lg:border-b-0" : ""}`}
                >
                  <article className="group grid min-h-[180px] grid-cols-[44px_minmax(0,1fr)] gap-5 p-6 transition-colors duration-300 hover:bg-parch/70 sm:p-7 lg:min-h-[195px]">
                    <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-cream text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-4 w-4" strokeWidth={1.55} />
                    </span>

                    <div className="flex min-w-0 flex-col">
                      <div className="flex items-start justify-between gap-5">
                        <h4 className="max-w-[22ch] text-[20px] font-normal leading-[1.05] tracking-[-0.035em]">
                          {item.title}
                        </h4>
                        <span className="font-mono text-[9px] text-[var(--fg-38)]">0{index + 1}</span>
                      </div>
                      <p className="mt-4 max-w-[46ch] text-[12px] leading-5 text-[var(--fg-55)]">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
}
