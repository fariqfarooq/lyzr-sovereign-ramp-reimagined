import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { customerStories } from "@/lib/content";

const ecosystemLogos = [
  { name: "AWS", src: "/clients/aws.svg", width: 329, height: 157 },
  { name: "KPMG", src: "/clients/kpmg.svg", width: 329, height: 157 },
  { name: "NVIDIA", src: "/clients/nvidia.svg", width: 390, height: 157 },
  { name: "Hitachi", src: "/clients/hitachi-provided.svg", width: 329, height: 157 },
  { name: "Movate", src: "/clients/movate.svg", width: 390, height: 157 },
  { name: "WTW", src: "/clients/wtw-provided.svg", width: 390, height: 157 },
] as const;
function logoCellBorders(index: number) {
  const mobile = index % 2 === 0 ? "border-r" : "border-r-0";
  const tablet = index % 3 === 2 ? "sm:border-r-0" : "sm:border-r";
  const desktop = index === ecosystemLogos.length - 1 ? "lg:border-r-0" : "lg:border-r";

  return `${mobile} ${tablet} ${desktop}`;
}

export function EnterpriseProof() {
  return (
    <section id="customers" className="section-space scroll-mt-24 bg-parch">
      <Container>
        <SectionHeading
          eyebrow="In production"
          title="Sovereign AI already running at enterprises"
          body="Not pilots. Sovereign AI deployments running full functions, end to end, at real enterprise scale."
        />

        <Reveal className="mt-12 sm:mt-14 lg:mt-16">
          <div className="overflow-hidden rounded-[14px] border border-[var(--border-medium)] bg-white">
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-5 py-3 sm:px-6">
              <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-[var(--fg-38)]">
                Enterprise ecosystem
              </p>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {ecosystemLogos.map((logo, index) => (
                <div
                  key={logo.name}
                  className={`flex min-h-[92px] items-center justify-center border-b border-[var(--border-soft)] px-4 py-5 sm:min-h-[104px] lg:min-h-[112px] lg:border-b-0 ${logoCellBorders(index)}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-auto max-h-8 w-auto max-w-[118px] opacity-45 grayscale transition-[opacity,transform] duration-200 hover:scale-[1.02] hover:opacity-75 sm:max-w-[132px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-3 lg:mt-8 lg:grid-cols-12 lg:grid-rows-2">
          {customerStories.map((story, index) => {
            const featured = index === 0;

            return (
              <Reveal
                key={story.company}
                delay={index * 0.055}
                className={featured ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}
              >
                <article
                  className={`group flex h-full flex-col rounded-[16px] border border-[var(--border-medium)] bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(42,31,26,.055)] sm:p-7 ${
                    featured ? "min-h-[460px] lg:min-h-[580px]" : "min-h-[300px] lg:min-h-[286px]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      {story.company}
                    </p>
                    <span className="grid h-8 w-8 place-items-center rounded-[8px] border border-[var(--border-medium)] transition-colors group-hover:border-primary/30 group-hover:bg-cream">
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </span>
                  </div>

                  <h3
                    className={`max-w-[14ch] font-normal leading-[1.01] tracking-[-0.05em] ${
                      featured ? "mt-14 text-[clamp(2.35rem,4vw,4.15rem)]" : "mt-8 text-[28px]"
                    }`}
                  >
                    {story.title}
                  </h3>

                  <p
                    className={`${featured ? "mt-6 max-w-xl text-[14px] leading-6" : "mt-4 max-w-md text-[12px] leading-5"} text-[var(--fg-55)]`}
                  >
                    {story.body}
                  </p>

                  <dl className={`mt-auto grid grid-cols-2 gap-4 border-t border-[var(--border-soft)] ${featured ? "pt-7" : "pt-5"}`}>
                    {story.metrics.map(([value, label]) => (
                      <div key={label}>
                        <dt className={`${featured ? "text-[36px]" : "text-[28px]"} font-medium tracking-[-0.045em]`}>{value}</dt>
                        <dd className="mt-1 text-[10px] leading-4 text-[var(--fg-38)]">{label}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
