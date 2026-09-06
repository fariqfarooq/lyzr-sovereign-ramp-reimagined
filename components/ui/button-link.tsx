import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  tone?: "primary" | "deep" | "quiet" | "white";
};

export function ButtonLink({
  tone = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const tones = {
    primary:
      "border-primary bg-primary text-white hover:border-primary-deep hover:bg-primary-deep",
    deep: "border-primary-deep bg-primary-deep text-white hover:border-primary hover:bg-primary",
    quiet:
      "border-[var(--border-medium)] bg-white text-fg hover:border-primary/35 hover:bg-parch",
    white: "border-white bg-white text-fg hover:bg-parch",
  };

  return (
    <Link
      className={`group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[9px] border px-5 text-[13px] font-medium tracking-[-0.01em] transition-[background-color,border-color,color] duration-200 sm:px-5.5 sm:text-sm ${tones[tone]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-[var(--spring)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.7}
      />
    </Link>
  );
}
