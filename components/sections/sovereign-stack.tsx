import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { stack } from "@/lib/content";

export function SovereignStack() {
  return (
    <section
      id="stack"
      className="scroll-mt-24 bg-paper-soft py-24 sm:py-32 lg:py-44"
    >
      <Container>
        <SectionHeading
          eyebrow="The full stack"
          title="From the agent to the machine it runs on."
          body="Each layer solves a different dependency. Together they create one enterprise AI system with a clear boundary around ownership."
        />

        <div className="mt-20 grid gap-4 lg:mt-28 lg:grid-cols-12">
          {stack.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.05}
              className={
                item.featured
                  ? "lg:col-span-7 lg:row-span-2"
                  : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                      ? "lg:col-span-5"
                      : "lg:col-span-12"
              }
            >
              <article
                className={`flex h-full min-h-[340px] flex-col justify-between border p-7 sm:p-9 ${
                  item.name === "Optimus"
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-white text-ink"
                } ${item.featured ? "lg:min-h-[700px]" : ""}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p
                      className={`font-mono text-[10px] uppercase tracking-[0.15em] ${
                        item.name === "Optimus"
                          ? "text-white/60"
                          : "text-brand"
                      }`}
                    >
                      {item.status}
                    </p>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        item.name === "Optimus"
                          ? "bg-white"
                          : "bg-brand"
                      }`}
                    />
                  </div>

                  <p
                    className={`mt-14 text-sm ${
                      item.name === "Optimus"
                        ? "text-white/65"
                        : "text-muted"
                    }`}
                  >
                    {item.kicker}
                  </p>
                  <h3 className="mt-2 text-[clamp(2.4rem,5vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.055em]">
                    {item.name}
                  </h3>
                  <p
                    className={`mt-6 max-w-xl text-base leading-7 ${
                      item.name === "Optimus"
                        ? "text-white/72"
                        : "text-muted"
                    }`}
                  >
                    {item.body}
                  </p>
                </div>

                <div
                  className={`mt-14 border-t pt-5 ${
                    item.name === "Optimus"
                      ? "border-white/25"
                      : "border-line"
                  }`}
                >
                  <p className="text-4xl font-medium tracking-[-0.05em]">
                    {item.stat}
                  </p>
                  <p
                    className={`mt-2 text-sm ${
                      item.name === "Optimus"
                        ? "text-white/60"
                        : "text-muted"
                    }`}
                  >
                    {item.statLabel}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
