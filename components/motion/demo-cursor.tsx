"use client";

import { AnimatePresence, motion } from "motion/react";

type DemoCursorProps = {
  x: string;
  y: string;
  visible?: boolean;
  clicking?: boolean;
};

export function DemoCursor({
  x,
  y,
  visible = true,
  clicking = false,
}: DemoCursorProps) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute z-50 hidden md:block"
      animate={{
        left: x,
        top: y,
        opacity: visible ? 1 : 0,
        scale: clicking ? 0.88 : 1,
      }}
      transition={{
        left: {
          type: "spring",
          stiffness: 150,
          damping: 24,
          mass: 0.7,
        },
        top: {
          type: "spring",
          stiffness: 150,
          damping: 24,
          mass: 0.7,
        },
        scale: {
          duration: 0.12,
        },
        opacity: {
          duration: 0.18,
        },
      }}
    >
      <svg
        width="22"
        height="27"
        viewBox="0 0 22 27"
        fill="none"
        className="drop-shadow-[0_2px_4px_rgba(42,31,26,.18)]"
      >
        <path
          d="M2 2L19 16H11L8 24L2 2Z"
          fill="#FFFFFF"
          stroke="#2A1F1A"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>

      <AnimatePresence>
        {clicking ? (
          <motion.span
            key="click"
            initial={{
              opacity: 0.45,
              scale: 0.5,
            }}
            animate={{
              opacity: 0,
              scale: 2.2,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="absolute left-[-7px] top-[-7px] h-7 w-7 rounded-full border border-primary/50"
          />
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}