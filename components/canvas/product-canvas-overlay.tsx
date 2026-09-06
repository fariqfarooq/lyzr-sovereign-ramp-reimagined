"use client";

import { useEffect, useRef } from "react";

export type CanvasPoint = {
  x: number;
  y: number;
};

type ProductCanvasOverlayProps = {
  target: CanvasPoint;
  active?: boolean;
  clicking?: boolean;
  className?: string;
};

type CursorState = {
  x: number;
  y: number;
};

const ACCENT = "#6B4C4C";
const INK = "#2A1F1A";

function drawCursor(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  clicking: boolean,
) {
  context.save();
  context.translate(x, y);
  context.scale(clicking ? 0.92 : 1, clicking ? 0.92 : 1);

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(17, 14);
  context.lineTo(10.2, 14.2);
  context.lineTo(7.3, 22.5);
  context.closePath();
  context.fillStyle = "#FFFFFF";
  context.fill();
  context.lineWidth = 1.35;
  context.strokeStyle = INK;
  context.stroke();

  context.restore();
}

export function ProductCanvasOverlay({
  target,
  active = true,
  clicking = false,
  className = "",
}: ProductCanvasOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<CursorState>({ x: 0, y: 0 });
  const targetRef = useRef(target);
  const clickingRef = useRef(clicking);
  const clickStartedAtRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    targetRef.current = target;
  }, [target]);

  useEffect(() => {
    clickingRef.current = clicking;

    if (clicking) {
      clickStartedAtRef.current = performance.now();
    }
  }, [clicking]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || !active) {
      return;
    }

    const context = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });

    if (!context) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;
    let width = 1;
    let height = 1;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (cursorRef.current.x === 0 && cursorRef.current.y === 0) {
        cursorRef.current = {
          x: (targetRef.current.x / 100) * width,
          y: (targetRef.current.y / 100) * height,
        };
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const onMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
    };

    motionQuery.addEventListener("change", onMotionChange);

    const render = (now: number) => {
      const targetX = (targetRef.current.x / 100) * width;
      const targetY = (targetRef.current.y / 100) * height;
      const cursor = cursorRef.current;

      const easing = reducedMotion ? 1 : 0.105;
      cursor.x += (targetX - cursor.x) * easing;
      cursor.y += (targetY - cursor.y) * easing;

      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(
        cursor.x,
        cursor.y,
        0,
        cursor.x,
        cursor.y,
        54,
      );
      glow.addColorStop(0, "rgba(107,76,76,.055)");
      glow.addColorStop(1, "rgba(107,76,76,0)");
      context.fillStyle = glow;
      context.fillRect(cursor.x - 58, cursor.y - 58, 116, 116);

      const clickStartedAt = clickStartedAtRef.current;

      if (clickStartedAt !== null) {
        const progress = Math.min((now - clickStartedAt) / 420, 1);

        if (progress < 1) {
          context.beginPath();
          context.arc(cursor.x + 3, cursor.y + 3, 5 + progress * 22, 0, Math.PI * 2);
          context.strokeStyle = `rgba(107,76,76,${0.42 * (1 - progress)})`;
          context.lineWidth = 1.2;
          context.stroke();
        } else {
          clickStartedAtRef.current = null;
        }
      }

      drawCursor(context, cursor.x, cursor.y, clickingRef.current);

      frameRef.current = window.requestAnimationFrame(render);
    };

    frameRef.current = window.requestAnimationFrame(render);

    return () => {
      resizeObserver.disconnect();
      motionQuery.removeEventListener("change", onMotionChange);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      data-playwright-ignore="true"
      className={`pointer-events-none absolute inset-0 z-40 size-full ${className}`}
    />
  );
}
