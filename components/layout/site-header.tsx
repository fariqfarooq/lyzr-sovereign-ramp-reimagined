import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/ui/container";

const navLinks = [
  ["Why sovereign", "#why-sovereign"],
  ["Ownership", "#ownership"],
  ["Stack", "#stack"],
  ["Governance", "#governance"],
  ["In production", "#customers"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-white/92 backdrop-blur-xl">
      <Container className="relative flex h-[66px] items-center justify-between">
        <Link
          href="/"
          aria-label="Lyzr Sovereign AI home"
          className="flex items-center"
        >
          <Image
            src="/logo-lyzr-dark.webp"
            alt="Lyzr"
            width={108}
            height={30}
            priority
            className="h-auto w-[92px] sm:w-[102px]"
          />
        </Link>

        <nav className="hidden lg:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-7">
            {navLinks.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[13px] text-[var(--fg-55)] transition-colors duration-200 hover:text-fg"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="https://studio.lyzr.ai/"
            className="inline-flex min-h-10 items-center whitespace-nowrap px-3 text-[13px] font-medium transition-colors duration-200 hover:text-primary"
          >
            Agent Studio
          </Link>

          <Link
            href="https://www.lyzr.ai/book-demo"
            className="inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-[8px] bg-primary-deep px-4 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-primary"
          >
            Talk to Us
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}