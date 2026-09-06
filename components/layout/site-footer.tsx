import Link from "next/link";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-soft)] py-8 sm:py-10">
      <Container className="flex flex-col gap-5 text-[13px] text-[var(--fg-55)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="grid h-6 w-6 place-items-center rounded-[6px] bg-primary text-[9px] font-bold text-white">
            L
          </span>
          <span>Lyzr Sovereign AI</span>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="https://www.lyzr.ai/" className="hover:text-fg">Lyzr</Link>
          <Link href="https://docs.lyzr.ai/" className="hover:text-fg">Docs</Link>
          <Link href="https://www.lyzr.ai/security" className="hover:text-fg">Security</Link>
          <span>Reimagined homepage concept</span>
        </div>
      </Container>
    </footer>
  );
}
