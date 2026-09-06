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
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { ProductCanvasOverlay } from "@/components/canvas/product-canvas-overlay";
import {
  type DemoStep,
  useDemoSequence,
} from "@/hooks/use-demo-sequence";

type Stage =
  | "idle"
  | "move-run"
  | "click-run"
  | "loading"
  | "identity"
  | "policy"
  | "knowledge"
  | "audit"
  | "complete"
  | "move-model"
  | "click-model"
  | "model-selected";

const sequence: readonly DemoStep<Stage>[] = [
  { at: 450, state: "move-run" },
  { at: 1250, state: "click-run" },
  { at: 1450, state: "loading" },
  { at: 2150, state: "identity" },
  { at: 2700, state: "policy" },
  { at: 3250, state: "knowledge" },
  { at: 3800, state: "audit" },
  { at: 4450, state: "complete" },
  { at: 5200, state: "move-model" },
  { at: 6000, state: "click-model" },
  { at: 6200, state: "model-selected" },
];

const runSteps = [
  {
    label: "Identity verified",
    detail: "procurement-agent-04",
    icon: Fingerprint,
  },
  {
    label: "Policy evaluated",
    detail: "enterprise-spend-policy",
    icon: ShieldCheck,
  },
  {
    label: "Private knowledge retrieved",
    detail: "procurement-index / eu-west",
    icon: Database,
  },
  {
    label: "Decision trace stored",
    detail: "immutable audit attached",
    icon: FileCheck2,
  },
] as const;

const stack = [
  {
    name: "Agent Platform",
    meta: "Agentic OS + Control Plane",
    status: "Live",
    icon: Bot,
  },
  {
    name: "Nitro",
    meta: "Production modules",
    status: "Live",
    icon: Sparkles,
  },
  {
    name: "Lyzr LLMs",
    meta: "Private model layer",
    status: "Selected",
    icon: Cpu,
  },
  {
    name: "Optimus",
    meta: "On-prem hardware",
    status: "Q4",
    icon: HardDrive,
  },
] as const;

const stageRank: Record<Stage, number> = {
  idle: 0,
  "move-run": 0,
  "click-run": 0,
  loading: 0,
  identity: 1,
  policy: 2,
  knowledge: 3,
  audit: 4,
  complete: 5,
  "move-model": 5,
  "click-model": 5,
  "model-selected": 5,
};

const cursorTargets: Record<Stage, { x: number; y: number }> = {
  idle: { x: 78, y: 79 },
  "move-run": { x: 59, y: 18 },
  "click-run": { x: 59, y: 18 },
  loading: { x: 61, y: 22 },
  identity: { x: 64, y: 37 },
  policy: { x: 64, y: 48 },
  knowledge: { x: 64, y: 59 },
  audit: { x: 64, y: 70 },
  complete: { x: 64, y: 70 },
  "move-model": { x: 87, y: 55 },
  "click-model": { x: 87, y: 55 },
  "model-selected": { x: 88, y: 55 },
};

export function HeroCanvas() {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, amount: 0.35 });
  const reduceMotion = useReducedMotion();

  const stage = useDemoSequence<Stage>(
    inView && !reduceMotion,
    "idle",
    sequence,
  );

  const effectiveStage = reduceMotion ? "model-selected" : stage;
  const completed = stageRank[effectiveStage];
  const isRunning =
    effectiveStage === "loading" ||
    (completed > 0 && completed < 5);
  const isComplete = completed >= 5;
  const modelSelected = effectiveStage === "model-selected";

  return (
    <div
      ref={rootRef}
      className="overflow-hidden rounded-[20px] border border-[var(--border-medium)] bg-cream p-2.5 sm:p-4 lg:p-5"
    >
      <div className="relative overflow-hidden rounded-[15px] border border-[var(--border-medium)] bg-white shadow-[0_28px_80px_rgba(42,31,26,.075)]">
        <ProductCanvasOverlay
          target={cursorTargets[effectiveStage]}
          clicking={
            effectiveStage === "click-run" ||
            effectiveStage === "click-model"
          }
          active={inView && !reduceMotion}
          className="hidden md:block"
        />

        <div className="flex min-h-14 items-center justify-between border-b border-[var(--border-soft)] px-4 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="flex shrink-0 items-center gap-1.5"
              aria-hidden="true"
            >
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
            <div className="flex flex-col gap-5 border-b border-[var(--border-soft)] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-primary">
                    Run #08421
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[var(--border)]" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-[var(--fg-38)]">
                    production
                  </span>
                </div>
                <h2 className="mt-2 max-w-[15ch] text-[clamp(1.9rem,4vw,3.6rem)] font-normal leading-[0.97] tracking-[-0.05em]">
                  One decision. Fully inside your perimeter.
                </h2>
              </div>

              <motion.button
                type="button"
                aria-label="Run procurement agent demo"
                animate={{
                  scale: effectiveStage === "click-run" ? 0.965 : 1,
                }}
                transition={{ duration: 0.12 }}
                className={`inline-flex min-h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[9px] px-4 text-[11px] font-medium transition-colors sm:min-w-[112px] ${
                  isComplete
                    ? "bg-primary/10 text-primary"
                    : "bg-primary-deep text-white"
                }`}
              >
                {isComplete ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Approved
                  </>
                ) : isRunning ? (
                  <>
                    <motion.span
                      className="h-3 w-3 rounded-full border border-white/35 border-t-white"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.75,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Evaluating
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5" />
                    Run agent
                  </>
                )}
              </motion.button>
            </div>

            <div className="mt-5 grid gap-2.5">
              {runSteps.map(({ label, detail, icon: Icon }, index) => {
                const passed = completed >= index + 1;
                const checking =
                  completed === index &&
                  effectiveStage !== "idle" &&
                  effectiveStage !== "move-run" &&
                  effectiveStage !== "click-run";

                return (
                  <motion.div
                    key={label}
                    animate={{
                      backgroundColor: passed
                        ? "rgba(249,245,241,.78)"
                        : "rgba(249,245,241,.46)",
                    }}
                    transition={{ duration: 0.35 }}
                    className="relative grid grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-3 overflow-hidden rounded-[11px] border border-[var(--border-soft)] p-3.5 sm:p-4"
                  >
                    {checking ? (
                      <motion.span
                        className="absolute inset-y-0 left-0 w-[2px] bg-primary"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                      />
                    ) : null}

                    <motion.span
                      animate={{
                        backgroundColor: passed ? "#6B4C4C" : "#FFFFFF",
                        color: passed ? "#FFFFFF" : "#6B4C4C",
                      }}
                      className="grid h-9 w-9 place-items-center rounded-[9px] border border-primary/12"
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.6} />
                    </motion.span>

                    <div className="min-w-0">
                      <p className="text-[12px] font-medium sm:text-[13px]">
                        {label}
                      </p>
                      <p className="mt-1 truncate font-mono text-[8px] text-[var(--fg-38)] sm:text-[9px]">
                        {detail}
                      </p>
                    </div>

                    {passed ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-mono text-[8px] text-primary shadow-[inset_0_0_0_1px_rgba(107,76,76,.12)]"
                      >
                        <Check className="h-3 w-3" strokeWidth={2} />
                        passed
                      </motion.span>
                    ) : (
                      <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-[var(--fg-38)]">
                        {checking ? "checking" : "pending"}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                ["Policy", isComplete ? "Passed" : "Pending"],
                ["Trace", isComplete ? "Stored" : "Open"],
                ["Route", "Private"],
                ["External", "0 calls"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[10px] border border-[var(--border-soft)] bg-white p-3.5"
                >
                  <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-[var(--fg-38)]">
                    {label}
                  </p>
                  <p className="mt-2 text-[12px] font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="border-t border-[var(--border-soft)] bg-parch/68 p-4 sm:p-6 lg:border-l lg:border-t-0 lg:p-5 xl:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-38)]">
                  Ownership boundary
                </p>
                <p className="mt-1 text-[13px] font-medium">The full stack</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>

            <div className="mt-6 grid gap-2.5">
              {stack.map(({ name, meta, status, icon: Icon }, index) => {
                const selected = modelSelected && index === 2;
                const dark = index === 3;

                return (
                  <motion.div
                    key={name}
                    animate={{
                      y: selected ? -2 : 0,
                      borderColor: selected
                        ? "rgba(107,76,76,.42)"
                        : dark
                          ? "#4A3434"
                          : "rgba(42,31,26,.07)",
                    }}
                    transition={{
                      duration: 0.32,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`rounded-[11px] border p-3.5 ${
                      dark
                        ? "bg-primary-deep text-white"
                        : selected
                          ? "bg-white shadow-[0_12px_32px_rgba(42,31,26,.08)]"
                          : "bg-white text-fg"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-start gap-3">
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-[8px] ${
                            dark
                              ? "bg-white/10"
                              : selected
                                ? "bg-primary text-white"
                                : "bg-cream text-primary"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[11px] font-medium">{name}</p>
                          <p
                            className={`mt-1 truncate text-[9px] ${
                              dark
                                ? "text-white/50"
                                : "text-[var(--fg-38)]"
                            }`}
                          >
                            {meta}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`font-mono text-[7px] uppercase tracking-[0.1em] ${
                          dark ? "text-white/55" : "text-primary"
                        }`}
                      >
                        {selected ? "active" : status}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[12px] border border-primary/12 bg-white p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-medium">
                  Your data stays inside
                </span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-cream text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.7} />
                </span>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-cream">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  animate={{ width: isComplete ? "100%" : "32%" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </div>
              <p className="mt-2 text-right font-mono text-[8px] text-primary">
                0% leaves your environment
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
