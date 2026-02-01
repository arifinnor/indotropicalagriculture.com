"use client";

import { useEffect, useRef } from "react";

export default function About() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: "Direct from Farmers",
      description: "We work directly with Indonesian farmers, ensuring fair trade and eliminating middlemen for better pricing.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Quality Focus",
      description: "Rigorous quality control at every stage ensures our products meet the highest standards.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Reliable Logistics",
      description: "Our established shipping network ensures timely delivery worldwide with full tracking.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: "Competitive Pricing",
      description: "Direct sourcing and efficient operations allow us to offer competitive prices without compromising quality.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left: Content */}
          <div className="reveal-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-stone-900 text-balance">
              Your Trusted Partner for Indonesian Agriculture
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-stone-600 mb-4 sm:mb-6 leading-relaxed text-pretty">
              Indo Tropical Agriculture connects buyers worldwide with the finest agricultural products from Indonesia. Our deep roots in Indonesian farming communities combined with international trade expertise make us your ideal partner.
            </p>
            <p className="text-sm sm:text-base text-stone-600 mb-4 sm:mb-6 leading-relaxed text-pretty">
              We believe in sustainable practices, fair trade, and building long-term relationships with both our farmers and customers.
            </p>

            <blockquote className="relative mb-6 sm:mb-8 pl-4 sm:pl-5 py-3 sm:py-4 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-xl">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-emerald-900 italic leading-relaxed">
                &ldquo;Every product we export carries our commitment to quality and our dedication to the farmers who make it possible.&rdquo;
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {["Sustainable Sourcing", "Fair Trade Practices", "Quality Assured"].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-emerald-600 font-medium text-xs sm:text-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {values.map((value, index) => (
              <div
                key={index}
                className="reveal-on-scroll opacity-0 group"
              >
                <div className="p-4 sm:p-5 md:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 h-full border border-stone-200">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {value.icon.props.children}
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-stone-900">{value.title}</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
