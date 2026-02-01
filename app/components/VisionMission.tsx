"use client";

import { useEffect, useRef } from "react";

export default function VisionMission() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-20 reveal-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-stone-900 text-balance">
            Vision & Mission
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-xl mx-auto text-pretty">
            Guided by purpose, driven by impact
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch">
          {/* Vision */}
          <div className="reveal-on-scroll opacity-0 delay-100 group h-full">
            <div className="relative h-full p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200 border border-stone-200 flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Providing fresh and high-quality Indonesian agricultural products to the world.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="reveal-on-scroll opacity-0 delay-200 group h-full">
            <div className="relative h-full p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200 border border-stone-200 flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                To realize our vision, we are committed to supporting Indonesian farmers to improve their well-being and quality of life through education and training.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
