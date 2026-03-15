"use client";

import { useEffect, type RefObject } from "react";

/**
 * Observes elements with class "reveal-on-scroll" inside the ref and adds
 * "animate-fade-up" when they enter the viewport. Respects prefers-reduced-motion via CSS.
 */
export function useScrollReveal(
  sectionRef: RefObject<HTMLElement | null>,
  threshold = 0.1
): void {
  useEffect(() => {
    // Only run on client to prevent SSR/client mismatch
    if (typeof window === "undefined") return;

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const elements = el.querySelectorAll(".reveal-on-scroll");
    elements.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [sectionRef, threshold]);
}
