"use client";

import { motion, useReducedMotion } from "motion/react";
import { Bot, Check, Cpu, Fingerprint, HardDrive, Route, ShieldCheck } from "lucide-react";

type StackCardVisualProps = {
  kind: "platform" | "nitro" | "models" | "optimus" | "governance";
};

export function StackCardVisual({ kind }: StackCardVisualProps) {
  const reduceMotion = useReducedMotion();

  if (kind === "platform") {
    return (
      <div className="relative h-full min-h-[260px] overflow-hidden rounded-[13px] border border-[var(--border-soft)] bg-parch p-4">
        <div className="dotted-grid absolute inset-0 opacity-50" />
        <div className="relative mx-auto mt-7 max-w-[360px] space-y-2">
          {["Marketing Agent", "Claims Agent", "HR Agent"].map((label, index) => (
            <motion.div
              key={label}
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="flex items-center justify-between rounded-[10px] border border-[var(--border-medium)] bg-white px-3.5 py-3"
            >
              <div className="flex items-center gap-2.5"><Bot className="h-3.5 w-3.5 text-primary" /><span className="text-[11px] font-medium">{label}</span></div>
              <span className="rounded-full bg-cream px-2 py-1 font-mono text-[8px] text-primary">GOVERNED</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "nitro") {
    return (
      <div className="relative h-full min-h-[250px] rounded-[13px] border border-[var(--border-soft)] bg-parch p-4">
        <div className="mx-auto mt-7 max-w-[330px] rounded-[12px] border border-[var(--border-medium)] bg-white p-4">
          <div className="flex items-center gap-2"><Route className="h-3.5 w-3.5 text-primary" /><span className="text-[11px] font-medium">Simulation run</span></div>
          <div className="mt-5 space-y-3">
            {[82, 68, 94].map((value, index) => (
              <div key={value} className="flex items-center gap-3">
                <span className="w-10 font-mono text-[8px] text-[var(--fg-38)]">0{index + 1}</span>
                <div className="h-1.5 flex-1 rounded-full bg-cream"><motion.div className="h-full rounded-full bg-primary" initial={reduceMotion ? false : { width: 0 }} whileInView={reduceMotion ? undefined : { width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.1 }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === "models") {
    return (
      <div className="relative h-full min-h-[230px] rounded-[13px] border border-[var(--border-soft)] bg-parch p-4">
        <div className="mx-auto mt-8 grid max-w-[330px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-1.5 sm:gap-2">
          {["Your data", "Lyzr LLM", "Private runtime"].map((label, index) => (
            <div key={label} className="contents">
              <div className="grid aspect-square min-w-0 place-items-center rounded-[12px] border border-[var(--border-medium)] bg-white px-1 text-center text-[8px] leading-4 text-[var(--fg-55)] sm:text-[9px]">
                <span className="flex flex-col items-center">
                  {index === 1 ? <Cpu className="mb-1 h-4 w-4 text-primary" /> : null}
                  {label}
                </span>
              </div>
              {index < 2 ? <span className="text-[var(--fg-38)]">→</span> : null}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "optimus") {
    return (
      <div className="relative h-full min-h-[230px] overflow-hidden rounded-[13px] border border-white/15 bg-primary-deep p-4 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,.14),transparent_30%)]" />
        <div className="relative mx-auto mt-8 max-w-[260px] rounded-[13px] border border-white/15 bg-[#5b4141] p-4 shadow-[0_20px_45px_rgba(15,10,7,.25)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3"><div className="flex items-center gap-2"><HardDrive className="h-3.5 w-3.5" /><span className="text-[11px] font-medium">Optimus</span></div><span className="h-1.5 w-1.5 rounded-full bg-rose-light" /></div>
          <div className="mt-4 grid grid-cols-4 gap-1.5">{Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-5 rounded-[4px] bg-white/7" />)}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[230px] rounded-[13px] border border-[var(--border-soft)] bg-parch p-4">
      <div className="mx-auto mt-6 max-w-[320px] rounded-[12px] border border-[var(--border-medium)] bg-white p-4">
        {["Identity", "Evaluation", "Entitlements", "Audit"].map((label, index) => (
          <motion.div key={label} initial={reduceMotion ? false : { opacity: 0 }} whileInView={reduceMotion ? undefined : { opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.11 }} className="mb-2 flex items-center justify-between rounded-[8px] border border-[var(--border-soft)] px-3 py-2.5 last:mb-0">
            <div className="flex items-center gap-2">{index === 0 ? <Fingerprint className="h-3.5 w-3.5 text-primary" /> : <ShieldCheck className="h-3.5 w-3.5 text-primary" />}<span className="text-[10px]">{label}</span></div><Check className="h-3.5 w-3.5 text-primary" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
