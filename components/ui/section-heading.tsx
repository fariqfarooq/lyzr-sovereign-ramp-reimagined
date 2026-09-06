import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  action?: ReactNode;
  tone?: "light" | "dark";
  as?: "h2" | "h3";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  action,
  tone = "light",
  as = "h2",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const Heading = as;
  const dark = tone === "dark";

  return (
    <header
      className={`grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-x-10 ${className}`}
    >
      {/* Eyebrow + heading */}
      <div className="lg:col-span-7">
        {eyebrow ? (
          <p
            className={`mb-5 font-mono text-[10px] uppercase tracking-[0.16em] sm:text-[11px] ${
              dark ? "text-white/45" : "text-primary"
            }`}
          >
            {eyebrow}
          </p>
        ) : null}

        <Heading
          className={`max-w-[14ch] text-balance text-[clamp(2.4rem,4vw,4.35rem)] font-normal leading-[1] tracking-[-0.05em] ${titleClassName}`}
        >
          {title}
        </Heading>
      </div>

      {/* Description + optional CTA */}
      {body || action ? (
        <div className="lg:col-span-4 lg:col-start-9 lg:pt-8">
          {body ? (
            <div
              className={`max-w-[30rem] text-[14px] leading-6 sm:text-[15px] sm:leading-7 ${
                dark ? "text-white/58" : "text-[var(--fg-55)]"
              }`}
            >
              {body}
            </div>
          ) : null}

          {action ? (
            <div className={body ? "mt-6" : ""}>
              {action}
            </div>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}