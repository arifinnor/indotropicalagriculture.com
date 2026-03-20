"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { Product } from "../../lib/products-data";
import { getLocalizedPath } from "../../lib/i18n-utils";

interface ProductsClientProps {
  products: Product[];
  locale: string;
}

export default function ProductsClient({
  products,
  locale,
}: ProductsClientProps) {
  const t = useTranslations("productsPage");
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const handleImageError = (slug: string) => {
    setImageErrors((prev) => new Set(prev).add(slug));
  };

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Product Count */}
        <p className="text-sm text-stone-500 mb-6 text-center">
          {t("showingProducts", {
            count: filteredProducts.length,
            total: products.length,
          })}
        </p>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={`${searchQuery}-${product.id}`}
                className="opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${Math.min(index * 40, 400)}ms`,
                }}
              >
                <Link
                  href={getLocalizedPath(
                    `/products/${product.slug}`,
                    locale
                  )}
                  className="group block focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100 rounded-2xl outline-none"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                    {imageErrors.has(product.slug) ? (
                      <div
                        className={`absolute inset-0 ${product.bgColor}`}
                      >
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"
                          aria-hidden
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white/60 text-5xl font-bold">
                            {product.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={() => handleImageError(product.slug)}
                        />
                        {/* Gradient overlays */}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                          aria-hidden
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          aria-hidden
                        />
                      </>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-semibold shadow-sm">
                        {product.category}
                      </span>
                    </div>

                    {/* View Details hover indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-emerald-700 text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
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
                    <p className="text-stone-500 text-xs sm:text-sm mt-1 line-clamp-2 group-hover:text-stone-600 transition-colors">
                      {product.shortDescription}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <svg
              className="w-16 h-16 text-stone-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="text-stone-500 text-lg">{t("noResults")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
