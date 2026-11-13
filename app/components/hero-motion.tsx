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
          )
          .fromTo(
            ".hero-image",
            {
              autoAlpha: 0,
              clipPath: "inset(12% 0% 12% 0% round 0.65rem)",
              scale: 0.95,
            },
            {
              autoAlpha: 1,
              clipPath: "inset(0% 0% 0% 0% round 0.65rem)",
              scale: 1,
              duration: 1,
            },
            "-=0.52",
          );

        gsap.fromTo(
          ".hero-image img",
          { yPercent: -3, scale: 1.04 },
          {
            yPercent: 5,
            scale: 1.04,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          },
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
