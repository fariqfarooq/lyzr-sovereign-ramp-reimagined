"use client";

import {
  Bot,
  Boxes,
  Check,
  Cpu,
  HardDrive,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const layers = [
  {
    index: "01",
    status: "Live now",
    name: "Lyzr Agent Platform",
    description: "Agentic OS + Control Plane",
    icon: Bot,
    kind: "platform" as const,
  },
  {
    index: "02",
    status: "Live now",
    name: "Lyzr Nitro",
    description: "Production modules for hyperscaler platforms",
    icon: Boxes,
    kind: "nitro" as const,
  },
  {
    index: "03",
    status: "Coming",
    name: "Lyzr LLMs",
    description: "Open source models built for responsible AI",
    icon: Cpu,
    kind: "models" as const,
  },
  {
    index: "04",
    status: "Shipping Q4",
    name: "Lyzr Optimus",
    description: "On-prem hardware appliance",
    icon: HardDrive,
    kind: "optimus" as const,
  },
] as const;

type LayerKind = (typeof layers)[number]["kind"];

function LayerPreview({ kind }: { kind: LayerKind }) {
  if (kind === "platform") {
    return (
      <div className="grid gap-2 xl:grid-cols-3">
        {["Revenue", "Procurement", "Customer service"].map((label, index) => (
          <div
            key={label}
            className="rounded-[9px] border border-[var(--border-soft)] bg-white p-3"
          >
            <div className="flex items-center justify-between gap-2">
              <span className={`h-2 w-2 rounded-full ${index === 0 ? "bg-primary" : "bg-[var(--border)]"}`} />
              <span className="font-mono text-[7px] uppercase tracking-[0.09em] text-[var(--fg-38)]">
                live
              </span>
            </div>
            <p className="mt-7 text-[10px] font-medium">{label}</p>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "nitro") {
    return (
      <div className="grid gap-2 xl:grid-cols-3">
        {["Simulate", "Evaluate", "Deploy"].map((label, index) => (
          <div
            key={label}
            className="rounded-[9px] border border-[var(--border-soft)] bg-white p-3"
          >
            <span className={`grid h-6 w-6 place-items-center rounded-full ${index === 2 ? "bg-primary text-white" : "bg-cream text-primary"}`}>
              {index === 2 ? (
                <Check className="h-3 w-3" strokeWidth={2} />
              ) : (
                <span className="font-mono text-[8px]">0{index + 1}</span>
              )}
            </span>
            <p className="mt-7 text-[10px] font-medium">{label}</p>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "models") {
    return (
      <div className="rounded-[10px] border border-[var(--border-soft)] bg-white p-3.5">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-[var(--fg-38)]">
            Private model route
          </span>
          <span className="rounded-full bg-cream px-2 py-1 font-mono text-[7px] uppercase tracking-[0.08em] text-primary">
            owned
          </span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {["Reasoning", "Domain", "Fallback"].map((label, index) => (
            <div key={label}>
              <p className="text-[8px] text-[var(--fg-38)]">{label}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-cream">
                <div
                  className="h-full rounded-full bg-primary/70"
                  style={{ width: `${[82, 64, 46][index]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
      <div className="relative min-h-[108px] overflow-hidden rounded-[11px] bg-primary-deep p-4 text-white">
        <div className="absolute left-4 right-4 top-4 h-8 rounded-[7px] border border-white/15 bg-white/[0.04]">
          <div className="flex h-full items-center gap-1.5 px-3">
            {[0, 1, 2, 3].map((item) => (
              <span key={item} className="h-1.5 w-1.5 rounded-full bg-white/35" />
            ))}
          </div>
        </div>
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between border-t border-white/15 pt-3">
          <div>
            <p className="font-mono text-[7px] uppercase tracking-[0.1em] text-white/45">runtime</p>
            <p className="mt-1 text-[10px] font-medium">On-prem</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[7px] uppercase tracking-[0.1em] text-white/45">external calls</p>
            <p className="mt-1 text-[10px] font-medium">0</p>
          </div>
        </div>
      </div>
      <div className="rounded-[10px] border border-[var(--border-soft)] bg-white p-3 sm:w-28">
        <p className="font-mono text-[7px] uppercase tracking-[0.09em] text-[var(--fg-38)]">Max tier</p>
        <p className="mt-4 text-2xl font-medium tracking-[-0.05em]">10k</p>
        <p className="mt-1 text-[8px] leading-4 text-[var(--fg-38)]">concurrent users</p>
      </div>
    </div>
  );
}

export function SystemsMap() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-[20px] border border-[var(--border-medium)] bg-white">
      <div className="grid border-b border-[var(--border-medium)] bg-parch/70 px-4 py-3 lg:grid-cols-[100px_280px_1fr_120px] lg:px-6">
        <span className="hidden font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--fg-38)] lg:block">Layer</span>
        <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--fg-38)]">Ownership path</span>
        <span className="hidden font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--fg-38)] lg:block">Runtime surface</span>
        <span className="hidden text-right font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--fg-38)] lg:block">Status</span>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-[49px] top-0 hidden w-px bg-[var(--border-soft)] lg:block" />
        <motion.div
          aria-hidden="true"
          className="absolute left-[49px] top-0 hidden w-px origin-top bg-primary lg:block"
          initial={reduceMotion ? false : { height: 0 }}
          whileInView={reduceMotion ? undefined : { height: "100%" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.15, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        />

        {layers.map(({ index, status, name, description, icon: Icon, kind }, layerIndex) => (
          <motion.article
            key={name}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: layerIndex * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-5 border-b border-[var(--border-soft)] p-4 last:border-b-0 sm:p-5 lg:grid-cols-[80px_260px_minmax(0,1fr)_100px] lg:items-center lg:gap-5 lg:px-6 lg:py-6"
          >
            <div className="hidden items-center gap-3 lg:flex">
              <span className="relative z-10 h-3 w-3 shrink-0 rounded-full border-[3px] border-white bg-primary shadow-[0_0_0_1px_rgba(107,76,76,.18)]" />
              <span className="font-mono text-[8px] text-[var(--fg-38)]">{index}</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-cream text-primary">
                <Icon className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <div>
                <div className="flex items-center gap-2 lg:hidden">
                  <span className="font-mono text-[8px] text-[var(--fg-38)]">{index}</span>
                  <span className="font-mono text-[7px] uppercase tracking-[0.08em] text-primary">{status}</span>
                </div>
                <h3 className="mt-1 text-[16px] font-medium tracking-[-0.025em] sm:mt-0 lg:text-[17px]">{name}</h3>
                <p className="mt-2 max-w-[27ch] text-[10px] leading-5 text-[var(--fg-55)] lg:text-[11px]">{description}</p>
              </div>
            </div>

            <div className="rounded-[12px] bg-cream p-3.5 sm:p-4">
              <LayerPreview kind={kind} />
            </div>

            <div className="hidden justify-end lg:flex">
              <span className="rounded-full border border-primary/15 bg-parch px-2.5 py-1.5 text-center font-mono text-[7px] uppercase tracking-[0.08em] text-primary">
                {status}
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="grid gap-4 border-t border-[var(--border-medium)] bg-primary-deep p-4 text-white sm:p-5 lg:grid-cols-[360px_1fr] lg:items-center lg:p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-white/10">
            <ShieldCheck className="h-4 w-4" strokeWidth={1.6} />
          </span>
          <div>
            <p className="text-[12px] font-medium">One governance layer over the whole stack</p>
            <p className="mt-1 text-[9px] text-white/45">Control is continuous, not bolted on later.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {["Identity", "Policy", "Evaluation", "Audit"].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-[9px] border border-white/10 bg-white/[0.045] px-3 py-2.5">
              <span className="text-[9px] font-medium">{item}</span>
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-primary-deep">
                <Check className="h-2.5 w-2.5" strokeWidth={2} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
