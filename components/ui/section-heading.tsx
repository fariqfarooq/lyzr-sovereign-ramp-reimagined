type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <header className={`${centered ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? (
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary sm:text-[11px]">
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={`mt-4 text-balance text-[clamp(2.3rem,4.4vw,4.6rem)] font-normal leading-[0.99] tracking-[-0.052em] ${
          centered ? "mx-auto max-w-[17ch]" : "max-w-[14ch]"
        }`}
      >
        {title}
      </h2>

      {body ? (
        <p
          className={`mt-5 text-[14px] leading-6 text-[var(--fg-55)] sm:text-[15px] sm:leading-7 ${
            centered ? "mx-auto max-w-[42rem]" : "max-w-xl"
          }`}
        >
          {body}
        </p>
      ) : null}
    </header>
  );
}
