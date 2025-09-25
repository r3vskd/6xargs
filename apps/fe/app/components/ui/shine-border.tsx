"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "~/lib/utils";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string | string[];
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
}

export function ShineBorder({
  children,
  className,
  color = ["#A07CFE", "#A07CFE", "#A07CFE"],
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
}: ShineBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        container.style.setProperty("--mouse-x", `${x}px`);
        container.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const colorString = Array.isArray(color) ? color.join(", ") : color;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative rounded-lg p-[1px]",
        className
      )}
      style={{
        "--border-radius": `${borderRadius}px`,
        "--border-width": `${borderWidth}px`,
        "--duration": `${duration}s`,
        "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
        "--background-radial-gradient": `radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${colorString}, transparent 80%)`,
      } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `var(--background-radial-gradient)`,
          mask: `var(--mask-linear-gradient)`,
          maskComposite: "xor",
          willChange: "opacity",
        }}
      />
      <div className="relative z-10 rounded-[inherit] bg-black p-6">
        {children}
      </div>
    </div>
  );
}