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
    <section
      id="products"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-36 px-4 sm:px-6 bg-gradient-to-b from-stone-50 to-stone-100 overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="leaf-pattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 20c0 10-8 18-18 18s-16-8-16-18 8-16 18-16 16 6 16 16zm0 0c5 5 15 5 20 0s5-15 0-20-15-5-20 0-5 15 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 reveal-on-scroll opacity-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            {t("badge")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 text-stone-900 text-balance tracking-tight">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={getLocalizedPath(`/products/${product.slug}`, locale)}
              className="group reveal-on-scroll opacity-0 block focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100 rounded-2xl outline-none"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                {product.image ? (
                  <>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" aria-hidden />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
                  </>
                ) : (
                  <div className={`absolute inset-0 ${product.bgColor} transition-colors duration-500 group-hover:brightness-110`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" aria-hidden />
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-semibold shadow-sm">
                    {product.category}
                  </span>
                </div>

                {/* Quick view indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-emerald-700 text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {t("viewDetails")}
                  </span>
                </div>
              </div>

              {/* Product info */}
              <div className="mt-3 sm:mt-4 text-center">
                <h3 className="text-stone-800 font-semibold text-sm sm:text-base group-hover:text-emerald-700 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm mt-1 line-clamp-1 group-hover:text-stone-600 transition-colors">
                  {product.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="mt-14 md:mt-16 lg:mt-20 reveal-on-scroll opacity-0">
          <div className="relative rounded-3xl bg-white/70 backdrop-blur-sm border border-stone-200 p-8 md:p-10 lg:p-12 shadow-lg shadow-stone-200/50 overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-100 to-transparent rounded-full blur-3xl opacity-60" aria-hidden />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-100 to-transparent rounded-full blur-3xl opacity-50" aria-hidden />

            <div className="relative text-center">
              <p className="text-stone-700 mb-6 md:mb-8 text-base sm:text-lg md:text-xl font-medium">
                {t("moreProducts")}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                <Link
                  href={getLocalizedPath("/products", locale)}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-emerald-600 text-white font-semibold rounded-full shadow-md shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 hover:scale-105 hover:bg-emerald-700 active:scale-100 transition-all duration-200 text-sm sm:text-base"
                >
                  {t("viewAll")}
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href={getLocalizedPath("/categories", locale)}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-white text-stone-700 font-semibold rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-100 transition-all duration-200 text-sm sm:text-base border border-stone-200 hover:border-stone-300"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  {locale === "en" ? "Browse Categories" : "Kategorien durchsuchen"}
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-amber-500 text-stone-900 font-semibold rounded-full shadow-md shadow-amber-200 hover:shadow-xl hover:shadow-amber-300 hover:scale-105 hover:bg-amber-600 active:scale-100 transition-all duration-200 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t("contactMore")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
