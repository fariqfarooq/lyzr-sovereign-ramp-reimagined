"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Why sovereign", "#why-sovereign"],
  ["Stack", "#stack"],
  ["Optimus", "#optimus"],
  ["Governance", "#governance"],
  ["In production", "#customers"],
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="grid h-11 w-11 place-items-center rounded-[8px] border border-[var(--border-medium)] bg-white"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full border-b border-border bg-white px-5 py-4 shadow-[0_18px_45px_rgba(42,31,26,.08)] sm:px-7"
          >
            <nav aria-label="Mobile navigation">
              <ul className="divide-y divide-[var(--border-soft)]">
                {links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex min-h-14 items-center justify-between text-[15px]"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                      <span aria-hidden="true">↘</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="https://www.lyzr.ai/book-demo"
                className="mt-4 flex min-h-11 items-center justify-center rounded-[8px] bg-primary-deep px-4 text-sm font-medium text-white"
              >
                Talk to Us
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
