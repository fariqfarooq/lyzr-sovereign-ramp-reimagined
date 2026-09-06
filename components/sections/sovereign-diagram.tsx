"use client";

import { motion, useReducedMotion } from "motion/react";

const layers = [
  ["Agent Platform", "Govern"],
  ["Nitro", "Ship"],
  ["Lyzr Models", "Own"],
  ["Optimus", "Run"],
] as const;

export function SovereignDiagram() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-grid relative overflow-hidden border border-line bg-paper-soft p-4 sm:p-6 lg:p-8">
      <div className="grid min-h-[480px] gap-4 lg:grid-cols-[1.15fr_.85fr]">
        <div className="relative overflow-hidden border border-line bg-white p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Sovereign control plane
            </p>
            <span className="flex items-center gap-2 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Live
            </span>
          </div>

          <div className="relative mx-auto mt-12 aspect-[1.25/1] max-w-[620px]">
            <div className="absolute inset-[10%] border border-line bg-paper">
              <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-line" />
              <div className="absolute left-1/2 top-1/2 h-[68%] w-px -translate-y-1/2 bg-line" />

              {[
                "top-[18%] left-[16%]",
                "top-[18%] right-[16%]",
                "bottom-[18%] left-[16%]",
                "bottom-[18%] right-[16%]",
              ].map((position, index) => (
                <motion.span
                  key={position}
                  className={`absolute ${position} h-3 w-3 rounded-full border-2 border-white bg-brand shadow-[0_0_0_1px_var(--brand)]`}
                  animate={
                    reduceMotion
                      ? undefined
                      : { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }
                  }
                  transition={{
                    duration: 3.2,
                    delay: index * 0.45,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center bg-ink text-center text-xs font-medium leading-4 text-white">
                Your
                <br />
                enterprise
              </div>
            </div>

            <motion.div
              className="absolute inset-[4%] border border-brand/35"
              animate={
                reduceMotion
                  ? undefined
                  : { inset: ["4%", "6%", "4%"], opacity: [0.45, 0.8, 0.45] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
            <span>Identity · Policy · Evaluation · Audit</span>
            <span className="font-mono text-ink">0 external calls</span>
          </div>
        </div>

        <div className="grid gap-4">
          {layers.map(([name, action], index) => (
            <motion.div
              key={name}
              initial={reduceMotion ? false : { opacity: 0, x: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.11,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`flex items-center justify-between border p-5 sm:p-6 ${
                index === layers.length - 1
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-white text-ink"
              }`}
            >
              <div>
                <p
                  className={`font-mono text-[10px] uppercase tracking-[0.16em] ${
                    index === layers.length - 1
                      ? "text-white/65"
                      : "text-muted"
                  }`}
                >
                  0{index + 1} · {action}
                </p>
                <p className="mt-2 text-xl font-medium tracking-[-0.03em]">
                  {name}
                </p>
              </div>
              <span
                className={`grid h-8 w-8 place-items-center border text-sm ${
                  index === layers.length - 1
                    ? "border-white/30"
                    : "border-line"
                }`}
                aria-hidden="true"
              >
                ↘
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
