import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Container({ children, className = "", narrow = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-7 lg:px-10 ${
        narrow ? "max-w-[var(--max-narrow)]" : "max-w-[var(--max)]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
