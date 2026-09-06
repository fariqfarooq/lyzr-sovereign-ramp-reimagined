import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  return (
    <section
      id="customers"
      className="scroll-mt-24 border-t border-line bg-paper-soft py-24 sm:py-32 lg:py-44"
    >
      <Container>
        <SectionHeading
          eyebrow="In production"
          title="Proof should look like operations, not pilots."
          body="The strongest sovereign AI story is not a feature list. It is a production workflow with measurable scale, clear governance and a business function that changed."
        />

        <div className="mt-20 grid border-t border-line lg:mt-28 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal
              key={study.company}
              delay={index * 0.06}
              className="border-b border-line py-9 lg:border-b-0 lg:border-r lg:px-8 lg:py-12 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <article className="flex h-full min-h-[520px] flex-col justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-brand">
                    {study.company}
                  </p>
                  <h3 className="mt-10 max-w-[14ch] text-4xl font-medium leading-[0.98] tracking-[-0.05em]">
                    {study.title}
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-7 text-muted">
                    {study.body}
                  </p>
                </div>

                <dl className="mt-14 grid grid-cols-2 gap-5 border-t border-line pt-6">
                  {study.metrics.map(([value, label]) => (
                    <div key={label}>
                      <dt className="text-3xl font-medium tracking-[-0.04em]">
                        {value}
                      </dt>
                      <dd className="mt-2 text-xs leading-5 text-muted">
                        {label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
