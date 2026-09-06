"use client";

import { useEffect, useState } from "react";

export type DemoStep<T> = {
  at: number;
  state: T;
};

export function useDemoSequence<T>(
  enabled: boolean,
  initialState: T,
  steps: readonly DemoStep<T>[],
) {
  const [state, setState] = useState<T>(initialState);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const timers = steps.map(({ at, state: nextState }) =>
      window.setTimeout(() => {
        setState(nextState);
      }, at),
    );

    return () => {
      timers.forEach((timer) => {
        window.clearTimeout(timer);
      });
    };
  }, [enabled, steps]);

  return state;
}
