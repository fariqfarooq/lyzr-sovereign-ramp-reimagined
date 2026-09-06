"use client";

import {
  Check,
  ChevronRight,
  Clock3,
  Database,
  FileSearch,
  Fingerprint,
  LockKeyhole,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { ProductCanvasOverlay } from "@/components/canvas/product-canvas-overlay";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  type DemoStep,
  useDemoSequence,
} from "@/hooks/use-demo-sequence";

type Stage =
  | "idle"
  | "move"
  | "press"
  | "loading"
  | "identity"
  | "entitlements"
  | "pii"
  | "simulation"
  | "trace"
  | "approved";

const sequence: readonly DemoStep<Stage>[] = [
  { at: 450, state: "move" },
  { at: 1250, state: "press" },
  { at: 1450, state: "loading" },
  { at: 2150, state: "identity" },
  { at: 2700, state: "entitlements" },
  { at: 3250, state: "pii" },
  { at: 3800, state: "simulation" },
  { at: 4350, state: "trace" },
  { at: 5050, state: "approved" },
];

const stageRank: Record<Stage, number> = {
  idle: 0,
  move: 0,
  press: 0,
  loading: 0,
  identity: 1,
  entitlements: 2,
  pii: 3,
  simulation: 4,
  trace: 5,
  approved: 6,
};

const cursorTargets: Record<Stage, { x: number; y: number }> = {
  idle: { x: 70, y: 78 },
  move: { x: 69, y: 13 },
  press: { x: 69, y: 13 },
  loading: { x: 69, y: 15 },
  identity: { x: 62, y: 42 },
  entitlements: { x: 62, y: 51 },
  pii: { x: 62, y: 60 },
  simulation: { x: 62, y: 69 },
  trace: { x: 62, y: 78 },
  approved: { x: 88, y: 47 },
};

const checks = [
  {
    label: "Identity verified",
    detail: "procurement-agent-04",
    icon: Fingerprint,
  },
  {
    label: "Entitlements passed",
    detail: "enterprise-policy-v12",
    icon: ShieldCheck,
  },
  {
    label: "Sensitive data protected",
    detail: "pii-detector / clean",
    icon: ScanSearch,
  },
  {
    label: "Simulation gate cleared",
    detail: "50,000 scenarios evaluated",
    icon: Sparkles,
  },
  {
    label: "Audit trace stored",
    detail: "immutable trace · RUN-84021",
    icon: FileSearch,
  },
] as const;

const recentRuns = [
  ["RUN-84021", "Vendor approval", "Evaluating"],
  ["RUN-84018", "Invoice review", "Approved"],
  ["RUN-84014", "Risk assessment", "Approved"],
  ["RUN-84009", "Contract review", "Approved"],
] as const;

export function Governance() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();

  const stage = useDemoSequence<Stage>(
    inView && !reduceMotion,
    "idle",
    sequence,
  );

  const effectiveStage = reduceMotion ? "approved" : stage;
  const completedChecks = Math.min(stageRank[effectiveStage], 5);
  const isApproved = effectiveStage === "approved";
  const isRunning =
    effectiveStage === "loading" ||
    (stageRank[effectiveStage] > 0 && !isApproved);

  return (
    <section
      ref={sectionRef}
      id="governance"
      className="scroll-mt-24 bg-parch py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Governance"
          title="Accountability in every decision."
          body="Every consequential agent action can be inspected, evaluated and reconstructed from the same runtime where it happened."
        />

        <div className="relative mt-14 overflow-hidden rounded-[22px] border border-[var(--border-medium)] bg-[#ECE5DE] p-2 sm:mt-16 sm:p-3 lg:mt-20">
          <div className="relative overflow-hidden rounded-[16px] border border-[var(--border-medium)] bg-white shadow-[0_30px_80px_rgba(42,31,26,.07)]">
            <ProductCanvasOverlay
              target={cursorTargets[effectiveStage]}
              clicking={effectiveStage === "press"}
              active={inView && !reduceMotion}
              className="hidden md:block"
            />

            <div className="flex h-[58px] items-center justify-between border-b border-[var(--border-soft)] px-4 sm:px-5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
                  <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
                  <span className="h-2 w-2 rounded-full bg-primary/60" />
                </div>
                <span className="hidden h-5 w-px bg-[var(--border-soft)] sm:block" />
                <div className="hidden sm:block">
                  <p className="text-[11px] font-medium">Governance Console</p>
                  <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.13em] text-[var(--fg-38)]">
                    Production environment
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden items-center gap-1.5 rounded-full bg-parch px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--fg-55)] sm:flex">
                  <LockKeyhole className="h-3 w-3 text-primary" strokeWidth={1.6} />
                  Private runtime
                </span>
                <span className="flex items-center gap-2 rounded-full bg-primary/[0.08] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Live
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-[176px_minmax(0,1fr)_280px]">
              <aside className="hidden border-r border-[var(--border-soft)] bg-parch/55 lg:flex lg:min-h-[580px] lg:flex-col">
                <div className="px-4 pb-3 pt-5">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--fg-38)]">
                    Recent runs
                  </p>
                </div>

                <div className="space-y-1 px-2">
                  {recentRuns.map(([id, name, status], index) => (
                    <div
                      key={id}
                      className={`rounded-[9px] px-3 py-3 ${
                        index === 0
                          ? "bg-white shadow-[0_1px_0_rgba(42,31,26,.04)]"
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p
                          className={`font-mono text-[8px] ${
                            index === 0 ? "text-primary" : "text-[var(--fg-38)]"
                          }`}
                        >
                          {id}
                        </p>
                        {index === 0 ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        ) : (
                          <Check className="h-3 w-3 text-[var(--fg-38)]" />
                        )}
                      </div>
                      <p
                        className={`mt-2 text-[10px] ${
                          index === 0
                            ? "font-medium text-fg"
                            : "text-[var(--fg-55)]"
                        }`}
                      >
                        {name}
                      </p>
                      <p className="mt-1 text-[8px] text-[var(--fg-38)]">
                        {status}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t border-[var(--border-soft)] p-4">
                  <div className="flex items-center gap-2">
                    <Database className="h-3.5 w-3.5 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-[9px] font-medium">Private data plane</p>
                      <p className="mt-0.5 text-[7px] text-[var(--fg-38)]">
                        External calls: 0
                      </p>
                    </div>
                  </div>
                </div>
              </aside>

              <main className="min-w-0 px-5 py-6 sm:px-7 sm:py-7 lg:px-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-primary">
                        Procurement Agent
                      </p>
                      <span className="h-1 w-1 rounded-full bg-[var(--fg-38)]" />
                      <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-[var(--fg-38)]">
                        RUN-84021
                      </p>
                    </div>

                    <h3 className="mt-3 text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1] tracking-[-0.045em]">
                      Vendor approval
                    </h3>
                    <p className="mt-3 max-w-[34rem] text-[12px] leading-5 text-[var(--fg-55)]">
                      Evaluate a new supplier against enterprise identity,
                      policy, privacy and simulation controls before release.
                    </p>
                  </div>

                  <motion.button
                    type="button"
                    animate={{ scale: effectiveStage === "press" ? 0.965 : 1 }}
                    transition={{ duration: 0.12 }}
                    className={`inline-flex min-h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[9px] px-4 text-[11px] font-medium transition-colors sm:min-w-[116px] ${
                      isApproved
                        ? "bg-primary/10 text-primary"
                        : "bg-primary-deep text-white"
                    }`}
                  >
                    {isApproved ? (
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
                        <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.6} />
                        Evaluate run
                      </>
                    )}
                  </motion.button>
                </div>

                <div className="mt-7 grid gap-2 sm:grid-cols-3">
                  {[
                    ["Environment", "Private"],
                    ["Model", "Lyzr Private 70B"],
                    ["External calls", "0"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[10px] bg-parch px-4 py-3">
                      <p className="font-mono text-[7px] uppercase tracking-[0.13em] text-[var(--fg-38)]">
                        {label}
                      </p>
                      <p className="mt-1.5 text-[11px] font-medium">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-[13px] border border-[var(--border-medium)]">
                  <div className="flex items-center justify-between border-b border-[var(--border-soft)] bg-parch/60 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Clock3 className="h-3 w-3 text-[var(--fg-38)]" strokeWidth={1.5} />
                      <span className="font-mono text-[8px] uppercase tracking-[0.13em] text-[var(--fg-38)]">
                        Evaluation stream
                      </span>
                    </div>
                    <span className="font-mono text-[8px] text-primary">
                      {completedChecks}/5
                    </span>
                  </div>

                  <div className="divide-y divide-[var(--border-soft)]">
                    {checks.map((check, index) => {
                      const Icon = check.icon;
                      const passed = completedChecks >= index + 1;
                      const checking =
                        completedChecks === index &&
                        effectiveStage !== "idle" &&
                        effectiveStage !== "move" &&
                        effectiveStage !== "press";

                      return (
                        <motion.div
                          key={check.label}
                          animate={{
                            backgroundColor: passed
                              ? "rgba(249,245,241,.72)"
                              : "#FFFFFF",
                          }}
                          transition={{ duration: 0.35 }}
                          className="relative flex min-h-[68px] items-center justify-between gap-4 px-4"
                        >
                          {checking ? (
                            <motion.span
                              className="absolute inset-y-0 left-0 w-[2px] bg-primary"
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                            />
                          ) : null}

                          <div className="flex min-w-0 items-center gap-3">
                            <motion.span
                              animate={{
                                backgroundColor: passed ? "#6B4C4C" : "#F2EDE8",
                                color: passed ? "#FFFFFF" : "#7A6A60",
                              }}
                              className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px]"
                            >
                              <Icon className="h-3.5 w-3.5" strokeWidth={1.55} />
                            </motion.span>

                            <div className="min-w-0">
                              <p className="truncate text-[11px] font-medium">
                                {check.label}
                              </p>
                              <p className="mt-1 truncate font-mono text-[8px] text-[var(--fg-38)]">
                                {check.detail}
                              </p>
                            </div>
                          </div>

                          {passed ? (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.7 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="flex shrink-0 items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-primary"
                            >
                              <Check className="h-3 w-3" />
                              passed
                            </motion.span>
                          ) : checking ? (
                            <span className="flex shrink-0 items-center gap-2 font-mono text-[8px] uppercase tracking-[0.1em] text-primary">
                              <motion.span
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                              />
                              checking
                            </span>
                          ) : (
                            <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.1em] text-[var(--fg-38)]">
                              pending
                            </span>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </main>

              <aside className="border-t border-[var(--border-soft)] bg-cream p-5 sm:p-6 lg:border-l lg:border-t-0">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--fg-38)]">
                    Decision inspector
                  </p>
                  <ChevronRight className="h-3.5 w-3.5 text-[var(--fg-38)]" strokeWidth={1.5} />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={isApproved ? "approved" : "pending"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`mt-6 rounded-[14px] border p-5 ${
                      isApproved
                        ? "border-primary-deep bg-primary-deep text-white"
                        : "border-[var(--border-medium)] bg-white"
                    }`}
                  >
                    <p
                      className={`font-mono text-[8px] uppercase tracking-[0.13em] ${
                        isApproved ? "text-white/45" : "text-[var(--fg-38)]"
                      }`}
                    >
                      Decision posture
                    </p>

                    <div className="mt-5 flex items-end justify-between">
                      <div>
                        <p className="text-[38px] font-normal leading-none tracking-[-0.06em]">
                          {isApproved ? "5/5" : `${completedChecks}/5`}
                        </p>
                        <p
                          className={`mt-2 text-[10px] ${
                            isApproved ? "text-white/55" : "text-[var(--fg-55)]"
                          }`}
                        >
                          controls passed
                        </p>
                      </div>

                      <div
                        className={`grid h-12 w-12 place-items-center rounded-full border ${
                          isApproved
                            ? "border-white/20 bg-white/10"
                            : "border-primary/20 bg-primary/5"
                        }`}
                      >
                        {isApproved ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.4} />
                        )}
                      </div>
                    </div>

                    <div
                      className={`mt-6 h-1.5 overflow-hidden rounded-full ${
                        isApproved ? "bg-white/10" : "bg-cream"
                      }`}
                    >
                      <motion.div
                        className={`h-full rounded-full ${
                          isApproved ? "bg-white" : "bg-primary"
                        }`}
                        animate={{ width: `${(completedChecks / 5) * 100}%` }}
                        transition={{
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>

                    <p
                      className={`mt-5 text-[10px] leading-5 ${
                        isApproved ? "text-white/60" : "text-[var(--fg-55)]"
                      }`}
                    >
                      {isApproved
                        ? "All governance controls passed. The run is approved for production."
                        : "The run remains blocked until every runtime control has cleared."}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <dl className="mt-7 space-y-4">
                  {[
                    ["Audit coverage", "100%"],
                    ["External calls", "0"],
                    ["Trace retention", "immutable"],
                  ].map(([label, value], index) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between pb-3 ${
                        index < 2 ? "border-b border-[var(--border-soft)]" : ""
                      }`}
                    >
                      <dt className="text-[9px] text-[var(--fg-55)]">{label}</dt>
                      <dd className="font-mono text-[9px]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
