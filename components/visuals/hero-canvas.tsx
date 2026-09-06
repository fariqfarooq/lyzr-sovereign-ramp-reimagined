"use client";

import {
  Bot,
  Check,
  Cpu,
  Database,
  FileCheck2,
  Fingerprint,
  HardDrive,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const runSteps = [
  { label: "Identity verified", detail: "procurement-agent-04", icon: Fingerprint },
  { label: "Policy evaluated", detail: "enterprise-spend-policy", icon: ShieldCheck },
  { label: "Private knowledge retrieved", detail: "procurement-index / eu-west", icon: Database },
  { label: "Decision trace stored", detail: "immutable audit attached", icon: FileCheck2 },
] as const;

const stack = [
  { name: "Agent Platform", meta: "Agentic OS + Control Plane", status: "Live", icon: Bot },
  { name: "Nitro", meta: "Production modules", status: "Live", icon: Sparkles },
  { name: "Lyzr LLMs", meta: "Open source models", status: "Coming", icon: Cpu },
  { name: "Optimus", meta: "On-prem hardware", status: "Q4", icon: HardDrive },
] as const;

export function HeroCanvas() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-[20px] border border-[var(--border-medium)] bg-cream p-2.5 sm:p-4 lg:p-5">
      <div className="overflow-hidden rounded-[15px] border border-[var(--border-medium)] bg-white shadow-[0_28px_80px_rgba(42,31,26,.075)]">
        <div className="flex min-h-14 items-center justify-between border-b border-[var(--border-soft)] px-4 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
              <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
              <span className="h-2 w-2 rounded-full bg-primary/55" />
            </span>
            <span className="hidden h-5 w-px bg-[var(--border-soft)] sm:block" />
            <p className="truncate text-[10px] font-medium text-[var(--fg-55)] sm:text-[11px]">
              Sovereign run / Procurement review
            </p>
          </div>

          <span className="ml-3 flex shrink-0 items-center gap-2 rounded-full bg-primary-deep px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white sm:text-[9px]">
            <LockKeyhole className="h-3 w-3" strokeWidth={1.7} />
            private
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(290px,.65fr)]">
          <div className="min-w-0 p-4 sm:p-6 lg:p-7 xl:p-8">
            <div className="border-b border-[var(--border-soft)] pb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-primary">
                  Run #08421
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--border)]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-[var(--fg-38)]">
                  live
                </span>
              </div>
              <h2 className="mt-2 max-w-[16ch] text-[clamp(1.9rem,4vw,3.6rem)] font-normal leading-[0.97] tracking-[-0.05em]">
                One decision. Fully inside your perimeter.
              </h2>
            </div>

            <div className="mt-5 grid gap-2.5">
              {runSteps.map(({ label, detail, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.65 }}
                  transition={{
                    duration: 0.46,
                    delay: 0.12 + index * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="grid grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-3 rounded-[11px] border border-[var(--border-soft)] bg-parch/60 p-3.5 sm:p-4"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-[9px] border border-primary/12 bg-white text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-medium sm:text-[13px]">{label}</p>
                    <p className="mt-1 truncate font-mono text-[8px] text-[var(--fg-38)] sm:text-[9px]">
                      {detail}
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-mono text-[8px] text-primary shadow-[inset_0_0_0_1px_rgba(107,76,76,.12)]">
                    <Check className="h-3 w-3" strokeWidth={2} />
                    passed
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                ["Policy", "Passed"],
                ["Trace", "Stored"],
                ["Route", "Private"],
                ["External", "0 calls"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[10px] border border-[var(--border-soft)] bg-white p-3.5">
                  <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-[var(--fg-38)]">{label}</p>
                  <p className="mt-2 text-[12px] font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="border-t border-[var(--border-soft)] bg-parch/68 p-4 sm:p-6 lg:border-l lg:border-t-0 lg:p-5 xl:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-38)]">Ownership boundary</p>
                <p className="mt-1 text-[13px] font-medium">The full stack</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>

            <div className="mt-6 grid gap-2.5">
              {stack.map(({ name, meta, status, icon: Icon }, index) => (
                <motion.div
                  key={name}
                  initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: 0.2 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-[11px] border p-3.5 ${
                    index === 3
                      ? "border-primary-deep bg-primary-deep text-white"
                      : "border-[var(--border-soft)] bg-white text-fg"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-start gap-3">
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-[8px] ${index === 3 ? "bg-white/10" : "bg-cream text-primary"}`}>
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium">{name}</p>
                        <p className={`mt-1 truncate text-[9px] ${index === 3 ? "text-white/50" : "text-[var(--fg-38)]"}`}>{meta}</p>
                      </div>
                    </div>
                    <span className={`font-mono text-[7px] uppercase tracking-[0.1em] ${index === 3 ? "text-white/55" : "text-primary"}`}>{status}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-[12px] border border-primary/12 bg-white p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-medium">Your data stays inside</span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-cream text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.7} />
                </span>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-cream">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={reduceMotion ? false : { width: 0 }}
                  whileInView={reduceMotion ? undefined : { width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <p className="mt-2 text-right font-mono text-[8px] text-primary">0% leaves your environment</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
