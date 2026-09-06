import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function DemoBand() {
  return (
    <section className="pb-8 sm:pb-12">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[16px] border border-[var(--border-soft)] bg-parch px-6 py-8 sm:px-9 lg:px-11">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 hidden w-[48%] lg:block"
              style={{
                background:
                  "linear-gradient(112deg, transparent 0%, rgba(200,165,114,.08) 22%, rgba(201,106,90,.13) 58%, rgba(107,76,76,.20) 100%)",
                clipPath: "polygon(26% 0, 100% 0, 100% 100%, 8% 100%)",
              }}
            />
            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-[20px] font-medium tracking-[-0.035em]">Start with what you already have.</h3>
                <p className="mt-1.5 max-w-xl text-[13px] leading-5 text-[var(--fg-55)]">
                  Connect the agents your teams already run, then add governance and ownership layer by layer.
                </p>
              </div>
              <ButtonLink href="https://www.lyzr.ai/book-demo" tone="deep" className="shrink-0">
                View Demo
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
