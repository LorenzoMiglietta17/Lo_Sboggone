"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "./gsap-setup";

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(element, { clearProps: "all" });
      });
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const siblingReveals = Array.from(
          element.parentElement?.querySelectorAll(":scope > .reveal") ?? [],
        );
        const delay = Math.min(Math.max(siblingReveals.indexOf(element), 0) * 0.08, 0.32);
        const categoryItems = gsap.utils.toArray<HTMLElement>(
          ".menu-category > *",
          element,
        );
        const targets = categoryItems.length ? categoryItems : [element];

        gsap.fromTo(
          targets,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.68,
            delay,
            stagger: categoryItems.length ? 0.1 : 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      return () => media.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
