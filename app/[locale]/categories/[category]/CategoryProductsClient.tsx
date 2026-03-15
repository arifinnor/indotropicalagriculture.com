"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "../../../lib/products-data";

interface CategoryProductsClientProps {
  products: Product[];
  categoryName: string;
  locale: string;
}

export default function CategoryProductsClient({
  products,
  categoryName,
  locale,
}: CategoryProductsClientProps) {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (slug: string) => {
    setImageErrors(prev => new Set(prev).add(slug));
  };

  const getCategoriesPath = () => locale === "en" ? "/categories" : `/${locale}/categories`;
  const getProductPath = (slug: string) => locale === "en" ? `/products/${slug}` : `/${locale}/products/${slug}`;

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link
          href={getCategoriesPath()}
          className="inline-flex items-center gap-2 text-stone-600 hover:text-emerald-600 font-medium mb-8 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {locale === "en" ? "Back to Categories" : "Zurück zu Kategorien"}
        </Link>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={getProductPath(product.slug)}
              className="group flex flex-col h-full"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                {/* Product image */}
                <div className="h-40 relative overflow-hidden bg-stone-100">
                  {imageErrors.has(product.slug) ? (
                    // Fallback when image fails to load
                    <div className={`w-full h-full ${product.bgColor} flex items-center justify-center`}>
                      <span className="text-white/80 text-4xl font-bold">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      onError={() => handleImageError(product.slug)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <h3 className="text-lg font-bold text-balance drop-shadow-sm">{product.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-stone-600 mb-3 text-xs leading-relaxed line-clamp-3">
                    {product.shortDescription}
                  </p>

                  <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                    {locale === "en" ? "View Details" : "Details anzeigen"}
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-500 text-lg">
              {locale === "en"
                ? "No products found in this category."
                : "Keine Produkte in dieser Kategorie gefunden."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
