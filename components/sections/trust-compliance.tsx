import Image from "next/image";
import {
  Activity,
  BadgeCheck,
  Globe2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const certifications = [
  {
    title: "GDPR Compliant",
    eyebrow: "Privacy",
    icon: Globe2,
  },
  {
    title: "SOC 2 Type II",
    eyebrow: "Security",
    icon: ShieldCheck,
  },
  {
    title: "ISO 27001 Certified",
    eyebrow: "Information security",
    icon: LockKeyhole,
  },
  {
    title: "HIPAA Compliant",
    eyebrow: "Healthcare",
    icon: Activity,
  },
  {
    title: "CCPA",
    eyebrow: "Data protection",
    icon: BadgeCheck,
  },
] as const;

export function TrustCompliance() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Trust & compliance"
          title="Enterprise AI with the controls already in place."
          body="Security, privacy and accountability are built into the infrastructure your agents run on — not added after deployment."
        />

        <Reveal className="mt-10 sm:mt-12 lg:mt-14">
  <div className="overflow-hidden rounded-[16px] border border-[var(--border-medium)] bg-[var(--bg-deeper)]">
    <div className="relative h-[150px] w-full sm:h-[185px] lg:h-[220px]">
      <Image
        src="/recognized-by-leading-analysts-badge-scaled.webp"
        alt="Lyzr recognized by leading analysts"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1240px"
        className="object-contain object-center p-3 sm:p-4 lg:p-5"
      />
    </div>
  </div>
</Reveal>

        <div className="mt-3 overflow-hidden rounded-[20px] border border-[var(--border-medium)] bg-white">
          <div className="grid sm:grid-cols-2 xl:grid-cols-5">
            {certifications.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.045}
                  className="h-full"
                >
                  <article
                    className={[
                      "group relative flex min-h-[230px] h-full flex-col justify-between p-6 sm:min-h-[250px] sm:p-7 lg:min-h-[270px]",
                      "transition-colors duration-300 hover:bg-parch",
                      index !== certifications.length - 1
                        ? "border-b border-[var(--border-soft)] sm:border-b-0 sm:border-r"
                        : "",
                      index === 1
                        ? "sm:border-r-0 xl:border-r"
                        : "",
                      index >= 2
                        ? "sm:border-t xl:border-t-0"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-38)]">
                        {item.eyebrow}
                      </span>

                      <span className="font-mono text-[9px] text-[var(--fg-38)]">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-[16px] bg-cream text-primary transition-transform duration-300 group-hover:-translate-y-1">
                        <Icon
                          className="h-8 w-8"
                          strokeWidth={1.35}
                        />
                      </div>

                      <h3 className="max-w-[13ch] text-[clamp(1.25rem,1.5vw,1.55rem)] font-normal leading-[1.08] tracking-[-0.035em]">
                        {item.title}
                      </h3>
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