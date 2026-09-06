import Link from "next/link";

import { Container } from "@/components/ui/container";
import { footerGroups } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-[var(--border-medium)] bg-parch">
      <Container>
        <div className="grid gap-12 py-12 sm:py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-primary text-[10px] font-bold text-white">L</span>
              <span className="text-[13px] font-semibold tracking-[-0.03em]">LYZR</span>
            </div>

            <p className="mt-6 max-w-[27ch] text-[12px] leading-6 text-[var(--fg-55)]">
              525 Washington Blvd, 2410, Jersey City, NJ 07310, USA
            </p>

            <div className="mt-8 rounded-[13px] border border-[var(--border-medium)] bg-white p-4">
              <p className="text-[12px] font-medium">Join 24,647+ subscribers</p>
              <p className="mt-1 text-[10px] leading-5 text-[var(--fg-38)]">Real agent stories. No spam.</p>
              <Link
                href="https://www.lyzr.ai/"
                className="mt-4 inline-flex min-h-9 items-center rounded-[8px] bg-primary-deep px-3.5 text-[11px] font-medium text-white transition-colors hover:bg-primary"
              >
                Visit Lyzr
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-4 lg:col-span-8">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-primary">{group.title}</p>
                <ul className="mt-5 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="text-[11px] text-[var(--fg-55)] transition-colors hover:text-fg">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--border-soft)] py-6 text-[10px] text-[var(--fg-38)] sm:flex-row sm:items-center sm:justify-between">
          <span>LYZR © 2026. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="https://www.lyzr.ai/privacy-policy/" className="hover:text-fg">Privacy policy</Link>
            <Link href="https://security.lyzr.ai/" className="hover:text-fg">Security</Link>
            <Link href="https://www.lyzr.ai/legal/" className="hover:text-fg">Terms of Use</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
