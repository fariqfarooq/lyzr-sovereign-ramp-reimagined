import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { resources } from "@/lib/content";

const resourceImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=82",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82",
] as const;

export function Resources() {
  return (
    <section className="bg-parch py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Resources"
          title={<>Take something <span className="text-[var(--fg-38)]">with you.</span></>}
          body="Playbooks, deep research, and real-world stories from the front lines of enterprise AI deployment."
        />

        <div className="mt-14 grid gap-3 sm:mt-16 lg:mt-20 lg:grid-cols-12 lg:grid-rows-2">
          {resources.map((resource, index) => {
            const featured = index === 0;

            return (
              <Reveal
                key={resource.href}
                delay={index * 0.05}
                className={featured ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}
              >
                <Link
                  href={resource.href}
                  className={`group grid h-full overflow-hidden rounded-[17px] border border-[var(--border-medium)] bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(42,31,26,.05)] ${
                    featured ? "lg:min-h-[580px] lg:grid-rows-[1fr_auto]" : "sm:grid-cols-[190px_1fr] lg:min-h-[284px] lg:grid-cols-[210px_1fr]"
                  }`}
                >
                  <div className={`relative overflow-hidden ${featured ? "min-h-[300px] sm:min-h-[360px]" : "min-h-[210px] sm:min-h-full"}`}>
                    <Image
                      src={resourceImages[index]}
                      alt=""
                      fill
                      sizes={featured ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 22vw, 100vw"}
                      className="object-cover transition-transform duration-700 ease-[var(--spring)] group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-black/[0.04]" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/88 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.13em] text-fg backdrop-blur sm:left-5 sm:top-5">
                      {resource.type}
                    </span>
                  </div>

                  <div className={`flex min-w-0 flex-col ${featured ? "p-6 sm:p-7" : "p-5 sm:p-6"}`}>
                    <div className="flex items-start justify-between gap-5">
                      <h3 className={`${featured ? "max-w-[18ch] text-[clamp(1.8rem,3vw,3rem)]" : "max-w-[19ch] text-[21px]"} font-normal leading-[1.04] tracking-[-0.04em]`}>
                        {resource.title}
                      </h3>
                      <ArrowUpRight
                        className="mt-1 h-4 w-4 shrink-0 text-[var(--fg-38)] transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                        strokeWidth={1.55}
                      />
                    </div>

                    <p className={`${featured ? "mt-5 max-w-[48ch] text-[13px] leading-6" : "mt-4 text-[11px] leading-5"} text-[var(--fg-55)]`}>
                      {resource.description}
                    </p>

                    <span className="mt-auto pt-7 text-[11px] font-medium text-primary">
                      Explore {resource.type}
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
