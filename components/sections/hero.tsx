import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { HeroCanvas } from "@/components/visuals/hero-canvas";
import { Send } from "lucide-react";
export function Hero() {
  return (
    <section className="pb-14 pt-10">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary sm:text-[11px]">
                Lyzr Sovereign AI
              </p>
              <h1 className="mt-5 max-w-[11ch] text-balance text-[clamp(3.25rem,6.2vw,6.55rem)] font-normal leading-[0.92] tracking-[-0.06em]">
  The Sovereign AI platform
  <span className="block text-[var(--fg-38)]">
    for leading enterprises
  </span>
</h1>
            </div>

            <div className="lg:col-span-4 lg:pb-1">
 <div className="mb-6 mr-0 sm:mr-6">
  <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-38)]">
    Get the sovereign AI brief
  </p>

  <form>
    <label htmlFor="hero-email" className="sr-only">
      Work email
    </label>

    <div className="relative">
      <input
        id="hero-email"
        type="email"
        name="email"
        placeholder="Work email"
        autoComplete="email"
        className="h-12 w-full rounded-[11px] border border-[var(--border-medium)] bg-white pl-4 pr-14 text-[14px] text-fg outline-none transition-[border-color,box-shadow] placeholder:text-[var(--fg-38)] focus:border-primary/40 focus:shadow-[0_0_0_3px_rgba(107,76,76,.06)]"
      />

      <button
        type="submit"
        aria-label="Submit email"
        className="absolute right-1.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-[8px] bg-primary-deep text-white transition-[background-color,transform] hover:bg-primary active:scale-[0.96]"
      >
        <Send
          className="h-4 w-4"
          strokeWidth={1.7}
        />
      </button>
    </div>
  </form>
</div>

  <p className="max-w-[31rem] text-[15px] leading-6 text-[var(--fg-55)] sm:text-base sm:leading-7">
    Your agents, your models, your hardware, your governance. The full-stack
    sovereign agent platform, every layer Lyzr, every layer yours.
  </p>

  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
    <ButtonLink
      href="https://www.lyzr.ai/book-demo"
      tone="deep"
      className="w-full sm:w-auto sm:min-w-[132px]"
    >
      Talk to Us
    </ButtonLink>

    <ButtonLink
      href="#stack"
      tone="quiet"
      className="w-full sm:w-auto sm:min-w-[156px]"
    >
      Explore the stack
    </ButtonLink>
  </div>
</div>
          </div>
        </Reveal>

        <Reveal className="mt-11 sm:mt-14 lg:mt-16" delay={0.08}>
          <HeroCanvas />
        </Reveal>
      </Container>
    </section>
  );
}
