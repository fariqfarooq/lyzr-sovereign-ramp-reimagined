"use client";

import { useId, useRef, useState } from "react";
import {
  Bot,
  Check,
  Cpu,
  Database,
  HardDrive,
  Layers3,
  LockKeyhole,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";

import { ProductCanvasOverlay } from "@/components/canvas/product-canvas-overlay";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { type DemoStep, useDemoSequence } from "@/hooks/use-demo-sequence";
import { ownershipSteps } from "@/lib/content";

const details = [
  {
    eyebrow: "Start with what you already have.",
    body: "Bring agents built on LangGraph, CrewAI, Agentforce or custom frameworks under one control surface without rebuilding them.",
    bullets: ["One registry", "One identity layer", "One audit trail"],
  },
  {
    eyebrow: "Close the gap to production.",
    body: "Use Nitro production modules to simulate, orchestrate and release agent workflows with the controls enterprise teams expect.",
    bullets: ["50,000 simulations", "Hybrid orchestration", "Agent CI/CD"],
  },
  {
    eyebrow: "Move inference into your perimeter.",
    body: "Fine-tune open source models on enterprise data and operate the model layer without a permanent external token meter.",
    bullets: ["Fine-tune in place", "Private routing", "Enterprise accountability"],
  },
  {
    eyebrow: "Own the machine it lives on.",
    body: "Run the full stack on Optimus hardware for environments that need air-gapped infrastructure and zero external calls.",
    bullets: ["No Wi-Fi", "Air-gapped", "Zero external API calls"],
  },
] as const;

function GovernPreview() {
  const rows = [
    ["LangGraph", "Research agent"],
    ["CrewAI", "Procurement agent"],
    ["Agentforce", "Service agent"],
    ["Custom", "Risk agent"],
  ] as const;

  return (
    <div className="rounded-[14px] border border-[var(--border-medium)] bg-white p-4 shadow-[0_18px_48px_rgba(42,31,26,.07)] sm:p-5">
      <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-cream text-primary">
            <ShieldCheck className="h-4 w-4" strokeWidth={1.6} />
          </span>
          <div>
            <p className="text-[12px] font-medium">Agent registry</p>
            <p className="mt-0.5 text-[9px] text-[var(--fg-38)]">One governance surface</p>
          </div>
        </div>
        <span className="rounded-full bg-cream px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-primary">4 connected</span>
      </div>

      <div className="mt-3 space-y-2">
        {rows.map(([framework, agent]) => (
          <div key={agent} className="grid grid-cols-[minmax(0,1fr)_92px_24px] items-center gap-3 rounded-[9px] border border-[var(--border-soft)] px-3.5 py-3">
            <div className="min-w-0">
              <p className="truncate text-[10px] font-medium">{agent}</p>
              <p className="mt-1 font-mono text-[8px] text-[var(--fg-38)]">{framework}</p>
            </div>
            <span className="text-right font-mono text-[8px] text-primary">GOVERNED</span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-cream text-primary">
              <Check className="h-3 w-3" strokeWidth={2} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NitroPreview() {
  const modules = ["Simulation", "SuperFlow", "ShadowLM", "Agent CI/CD"] as const;

  return (
    <div className="rounded-[14px] border border-[var(--border-medium)] bg-white p-4 shadow-[0_18px_48px_rgba(42,31,26,.07)] sm:p-5">
      <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-cream text-primary">
            <Workflow className="h-4 w-4" strokeWidth={1.6} />
          </span>
          <div>
            <p className="text-[12px] font-medium">Production readiness</p>
            <p className="mt-0.5 text-[9px] text-[var(--fg-38)]">Nitro release gate</p>
          </div>
        </div>
        <span className="font-mono text-[8px] text-primary">50,000 / 50,000</span>
      </div>

      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-cream">
        <div className="h-full w-full rounded-full bg-primary" />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {modules.map((module, index) => (
          <div key={module} className="rounded-[9px] border border-[var(--border-soft)] bg-parch p-3.5">
            <div className="flex items-center justify-between">
              <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-white text-primary">
                {index === 0 ? <Sparkles className="h-3.5 w-3.5" /> : <Layers3 className="h-3.5 w-3.5" />}
              </span>
              <Check className="h-3.5 w-3.5 text-primary" strokeWidth={1.8} />
            </div>
            <p className="mt-4 text-[10px] font-medium">{module}</p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.08em] text-[var(--fg-38)]">ready</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ModelsPreview() {
  return (
    <div className="rounded-[14px] border border-[var(--border-medium)] bg-white p-4 shadow-[0_18px_48px_rgba(42,31,26,.07)] sm:p-5">
      <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-primary text-white">
            <Cpu className="h-4 w-4" strokeWidth={1.6} />
          </span>
          <div>
            <p className="text-[12px] font-medium">Private model route</p>
            <p className="mt-0.5 text-[9px] text-[var(--fg-38)]">Fine-tuned on your data</p>
          </div>
        </div>
        <span className="rounded-full bg-cream px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-primary">local</span>
      </div>

      <div className="mt-5 grid gap-3">
        {[
          ["Enterprise model A", "82%"],
          ["Enterprise model B", "64%"],
          ["Fallback route", "34%"],
        ].map(([label, width]) => (
          <div key={label}>
            <div className="flex items-center justify-between text-[9px]">
              <span className="font-medium">{label}</span>
              <span className="font-mono text-[var(--fg-38)]">{width}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-cream">
              <div className="h-full rounded-full bg-primary/70" style={{ width }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2.5">
        <div className="rounded-[9px] border border-[var(--border-soft)] bg-parch p-3">
          <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-[var(--fg-38)]">Token meter</p>
          <p className="mt-2 text-[15px] font-medium">None</p>
        </div>
        <div className="rounded-[9px] border border-[var(--border-soft)] bg-parch p-3">
          <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-[var(--fg-38)]">Data route</p>
          <p className="mt-2 text-[15px] font-medium">Private</p>
        </div>
      </div>
    </div>
  );
}

function OptimusPreview() {
  return (
    <div className="relative overflow-hidden rounded-[14px] border border-primary/18 bg-[#f4eee9] p-5 shadow-[0_18px_48px_rgba(42,31,26,.09)] sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(107,76,76,.12),transparent_28%)]" />
      <div className="relative">
        <div className="mx-auto max-w-[390px] rounded-[16px] border border-primary/18 bg-primary-deep p-5 text-white shadow-[0_24px_55px_rgba(74,52,52,.2)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-white/10">
                <HardDrive className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-[12px] font-medium">Lyzr Optimus</p>
                <p className="mt-0.5 text-[9px] text-white/45">On-prem agent factory</p>
              </div>
            </div>
            <span className="h-2 w-2 rounded-full bg-white" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {[
              ["Network", "Air-gapped"],
              ["External calls", "Zero"],
              ["Models", "Pre-loaded"],
              ["Max scale", "10k users"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[9px] border border-white/10 bg-white/[0.045] p-3">
                <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-white/40">{label}</p>
                <p className="mt-2 text-[11px] font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const previews = [GovernPreview, NitroPreview, ModelsPreview, OptimusPreview] as const;

type OwnershipDemoState = {
  index: number;
  clicking: boolean;
};

const ownershipDemoSequence: readonly DemoStep<OwnershipDemoState>[] = [
  { at: 600, state: { index: 0, clicking: false } },
  { at: 1250, state: { index: 0, clicking: true } },
  { at: 1500, state: { index: 0, clicking: false } },
  { at: 2850, state: { index: 1, clicking: false } },
  { at: 3500, state: { index: 1, clicking: true } },
  { at: 3750, state: { index: 1, clicking: false } },
  { at: 5100, state: { index: 2, clicking: false } },
  { at: 5750, state: { index: 2, clicking: true } },
  { at: 6000, state: { index: 2, clicking: false } },
  { at: 7350, state: { index: 3, clicking: false } },
  { at: 8000, state: { index: 3, clicking: true } },
  { at: 8250, state: { index: 3, clicking: false } },
];

const ownershipCursorX = [12, 37, 62, 87] as const;


export function OwnershipPath() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const tabId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reduceMotion = useReducedMotion();
  const inView = useInView(sectionRef, { once: true, amount: 0.28 });

  const demoState = useDemoSequence<OwnershipDemoState>(
    inView && !reduceMotion && !userInteracted,
    { index: 0, clicking: false },
    ownershipDemoSequence,
  );

  const displayStep = userInteracted ? activeStep : demoState.index;
  const ActivePreview = previews[displayStep];
  const active = ownershipSteps[displayStep];
  const activeDetail = details[displayStep];

  function selectStep(index: number) {
    setUserInteracted(true);
    setActiveStep(index);
  }

  function selectFromKeyboard(index: number, direction: 1 | -1) {
    const next = (index + direction + ownershipSteps.length) % ownershipSteps.length;
    selectStep(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section ref={sectionRef} id="ownership" className="scroll-mt-24 bg-primary-deep py-20 text-white sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How Lyzr gets you there"
          title="From where your AI is today to owning all of it"
          body="Sovereign AI is not a migration. It is a progression. Select each step to see what changes as ownership moves deeper into the stack."
          tone="dark"
        />

        <div className="relative mt-10 border-b border-white/14 sm:mt-12 lg:mt-14">
          <ProductCanvasOverlay
            target={{ x: ownershipCursorX[displayStep], y: 50 }}
            clicking={!userInteracted && demoState.clicking}
            active={inView && !reduceMotion && !userInteracted}
            className="hidden lg:block"
          />
          <div
            role="tablist"
            aria-label="Path to sovereign AI"
            className="scrollbar-none -mb-px flex gap-8 overflow-x-auto sm:gap-10 lg:grid lg:grid-cols-4 lg:gap-0"
          >
            {ownershipSteps.map((step, index) => {
              const selected = displayStep === index;
              return (
                <button
                  key={step.index}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  id={`${tabId}-tab-${index}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`${tabId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectStep(index)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowRight") {
                      event.preventDefault();
                      selectFromKeyboard(index, 1);
                    }
                    if (event.key === "ArrowLeft") {
                      event.preventDefault();
                      selectFromKeyboard(index, -1);
                    }
                  }}
                  className="relative min-w-[200px] pb-4 text-left lg:min-w-0 lg:px-3 lg:first:pl-0"
                >
                  <span className={`font-mono text-[9px] transition-colors ${selected ? "text-white" : "text-white/32"}`}>{step.index}</span>
                  <span className={`mt-2 block whitespace-nowrap text-[14px] font-medium tracking-[-0.02em] transition-colors ${selected ? "text-white" : "text-white/48"}`}>{step.title}</span>
                  {selected ? (
                    <motion.span
                      layoutId="ownership-tab-indicator"
                      className="absolute inset-x-0 bottom-0 h-[2px] bg-white"
                      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id={`${tabId}-panel`}
          role="tabpanel"
          aria-labelledby={`${tabId}-tab-${displayStep}`}
          className="mt-7 overflow-hidden rounded-[18px] bg-white text-fg sm:mt-8"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.index}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-[.78fr_1.22fr]"
            >
              <div className="flex flex-col border-b border-[var(--border-soft)] p-6 sm:p-8 lg:min-h-[520px] lg:border-b-0 lg:border-r lg:p-10">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-primary">Step {active.index}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--border)]" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--fg-38)]">{active.label}</span>
                  </div>
                  <h3 className="mt-5 max-w-[13ch] text-[clamp(2.15rem,3.7vw,3.65rem)] font-normal leading-[0.98] tracking-[-0.05em]">{active.title}</h3>
                  <p className="mt-5 text-[14px] font-medium leading-6">{activeDetail.eyebrow}</p>
                  <p className="mt-2 max-w-md text-[13px] leading-6 text-[var(--fg-55)] sm:text-[14px]">{activeDetail.body}</p>
                </div>

                <div className="mt-10 border-t border-[var(--border-soft)] pt-5 lg:mt-auto">
                  <div className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {activeDetail.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-2.5 rounded-[9px] bg-parch px-3 py-2.5 text-[10px] text-[var(--fg-72)]">
                        <Check className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={1.8} />
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-cream p-4 sm:p-6 lg:flex lg:min-h-[520px] lg:items-center lg:p-8">
                <div className="mx-auto w-full max-w-[620px]">
                  <ActivePreview />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
