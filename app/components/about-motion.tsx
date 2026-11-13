"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "./gsap-setup";

export function AboutMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const image = scope.current?.querySelector(".about-photo img");
        const ornament = scope.current?.querySelector(".ornament");

        if (image) {
          gsap.fromTo(
            image,
            { yPercent: -4, scale: 1.06 },
            {
              yPercent: 4,
              scale: 1.06,
              ease: "none",
              scrollTrigger: {
                trigger: image.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        }

        if (ornament) {
          gsap.to(ornament, {
            rotation: 360,
            ease: "none",
            scrollTrigger: {
              trigger: ornament,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          });
        }
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="section-wrap about-grid">
      {children}
    </div>
  );
}
