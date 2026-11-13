"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "./gsap-setup";

export function HeroMotion({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({
          defaults: { duration: 0.72, ease: "power3.out" },
        });

        intro
          .fromTo(
            ".hero-eyebrow",
            { autoAlpha: 0, y: 14 },
            { autoAlpha: 1, y: 0 },
          )
          .fromTo(
            ".hero-title",
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0 },
            "-=0.5",
          )
          .fromTo(
            ".hero-description",
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0 },
            "-=0.48",
          )
          .fromTo(
            ".hero-actions",
            { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0 },
            "-=0.42",
          );
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
