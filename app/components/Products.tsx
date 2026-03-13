"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { getFeaturedProducts } from "../lib/products-data";
import { getLocalizedPath } from "../lib/i18n-utils";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Products() {
  const t = useTranslations("products");
  const locale = useLocale();
  const sectionRef = useRef<HTMLDivElement>(null);
  const products = getFeaturedProducts(6);
  useScrollReveal(sectionRef, 0.1);

  return (
    <section id="products" ref={sectionRef} className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16 reveal-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            {t("badge")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-stone-900 text-balance">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto text-pretty">
            {t("subtitle")}
          </p>
        </div>

        {/* Gallery grid: image-first, minimal caption */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {products.map((product) => (
            <Link
              key={product.id}
              href={getLocalizedPath(`/products/${product.slug}`, locale)}
              className="group reveal-on-scroll opacity-0 block focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100 rounded-xl outline-none"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-200">
                {product.image ? (
                  <>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-300 group-hover:bg-stone-900/20" aria-hidden />
                  </>
                ) : (
                  <div className={`absolute inset-0 ${product.bgColor}`}>
                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/20 transition-colors duration-300" aria-hidden />
                  </div>
                )}
                <span className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-white font-medium text-sm sm:text-base">{t("viewDetails")}</span>
                </span>
              </div>
              <p className="mt-2 sm:mt-3 text-stone-800 font-medium text-sm sm:text-base text-center group-hover:text-emerald-600 transition-colors">
                {product.name}
              </p>
            </Link>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="mt-10 md:mt-14 lg:mt-16 text-center reveal-on-scroll opacity-0">
          <p className="text-stone-600 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg">
            {t("moreProducts")}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href={getLocalizedPath("/products", locale)}
              className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-100 transition-transform duration-200 text-sm sm:text-base"
            >
              {t("viewAll")}
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={getLocalizedPath("/categories", locale)}
              className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-stone-900 font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-100 transition-transform duration-200 text-sm sm:text-base border border-stone-200"
            >
              {locale === "en" ? "Browse by Category" : "Nach Kategorie"}
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-amber-500 text-stone-900 font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-100 transition-transform duration-200 text-sm sm:text-base"
            >
              {t("contactMore")}
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
