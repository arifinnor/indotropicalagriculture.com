"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Products() {
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

  const products = [
    {
      slug: "planting-media",
      name: "Planting Media",
      description: "Premium coconut coir, peat moss alternatives, and organic growing substrates suitable for horticulture and agriculture.",
      bgColor: "bg-emerald-500",
      keywords: ["Coconut Coir", "Peat Moss", "Growing Substrate"],
    },
    {
      slug: "cocoa",
      name: "Cocoa",
      description: "High-quality Indonesian cocoa beans, fermented and dried to perfection. Ideal for chocolate manufacturers.",
      bgColor: "bg-amber-500",
      keywords: ["Cocoa Beans", "Fermented", "Premium Grade"],
    },
    {
      slug: "cloves",
      name: "Cloves",
      description: "Aromatic whole cloves and powder from Indonesian spice islands. Perfect for food, pharmaceutical, and essential oil industries.",
      bgColor: "bg-red-500",
      keywords: ["Whole Cloves", "Clove Powder", "Spices"],
    },
    {
      slug: "ginger",
      name: "Ginger",
      description: "Fresh and dried ginger with high oil content. Sourced from prime growing regions in Indonesia for international markets.",
      bgColor: "bg-yellow-500",
      keywords: ["Fresh Ginger", "Dried Ginger", "High Oil Content"],
    },
  ];

  return (
    <section id="products" ref={sectionRef} className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16 reveal-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-stone-900 text-balance">
            Our Premium Products
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto text-pretty">
            Sourced directly from Indonesian farmers and processed to meet quality standards.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <Link
              key={index}
              href={`/products/${product.slug}`}
              className="group reveal-on-scroll opacity-0 flex flex-col h-full"
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                {/* Image placeholder with solid color */}
                <div className={`h-36 sm:h-40 md:h-44 ${product.bgColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-5 text-white">
                    <h3 className="text-lg sm:text-xl font-bold text-balance">{product.name}</h3>
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <p className="text-stone-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Keywords/tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 mt-auto">
                    {product.keywords.slice(0, 2).map((keyword, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-stone-200 text-stone-700"
                      >
                        {keyword}
                      </span>
                    ))}
                    {product.keywords.length > 2 && (
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-stone-100 text-stone-500">
                        +{product.keywords.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1.5 sm:gap-2 text-emerald-600 font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                    View Details
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* And more CTA */}
        <div className="mt-10 md:mt-14 lg:mt-16 text-center reveal-on-scroll opacity-0">
          <p className="text-stone-600 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg">
            Looking for other Indonesian agriculture products?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-amber-500 text-stone-900 font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-100 transition-transform duration-200 text-sm sm:text-base"
          >
            Contact Us for More Products
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
