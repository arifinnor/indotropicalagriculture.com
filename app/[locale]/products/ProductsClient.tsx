"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "../../lib/products-data";

const CATEGORY_COLORS: Record<string, string> = {
  Spices: "bg-amber-100 text-amber-800 hover:bg-amber-200",
  Cocoa: "bg-amber-100 text-amber-800 hover:bg-amber-200",
  Coffee: "bg-stone-200 text-stone-800 hover:bg-stone-300",
  Nuts: "bg-orange-100 text-orange-800 hover:bg-orange-200",
  Beans: "bg-green-100 text-green-800 hover:bg-green-200",
  Fruits: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  Herbs: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
  Extracts: "bg-red-100 text-red-800 hover:bg-red-200",
  Powders: "bg-stone-200 text-stone-800 hover:bg-stone-300",
  Other: "bg-stone-100 text-stone-800 hover:bg-stone-200",
};

interface ProductsClientProps {
  products: Product[];
  categories: string[];
}

export default function ProductsClient({
  products,
  categories,
}: ProductsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (slug: string) => {
    setImageErrors(prev => new Set(prev).add(slug));
  };

  const filteredProducts = useMemo(
    () =>
      selectedCategory === "all"
        ? products
        : products.filter((p) => p.category === selectedCategory),
    [products, selectedCategory]
  );

  return (
    <>
      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-stone-100/95 backdrop-blur-sm border-b border-stone-200 py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === "all"
                  ? "bg-emerald-600 text-white"
                  : "bg-stone-200 text-stone-700 hover:bg-stone-300"
              }`}
            >
              All Products ({products.length})
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white"
                    : CATEGORY_COLORS[category] ||
                      "bg-stone-200 text-stone-700 hover:bg-stone-300"
                }`}
              >
                {category} ({products.filter((p) => p.category === category).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
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
                    <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      CATEGORY_COLORS[product.category] || "bg-stone-100 text-stone-800"
                    }`}>
                      {product.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <p className="text-stone-600 mb-3 text-xs leading-relaxed line-clamp-3">
                      {product.shortDescription}
                    </p>

                    {/* Price */}
                    <div className="mb-3">
                      <span className="text-emerald-700 font-bold text-sm">
                        ${product.price.toLocaleString()} / {product.unit}
                      </span>
                      <span className="text-stone-400 text-xs block">
                        FOB Surabaya
                      </span>
                    </div>

                    {/* Keywords/tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3 mt-auto">
                      {product.keywords.slice(0, 2).map((keyword, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs font-medium rounded-full bg-stone-200 text-stone-700"
                        >
                          {keyword}
                        </span>
                      ))}
                      {product.keywords.length > 2 && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-stone-100 text-stone-500">
                          +{product.keywords.length - 2}
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      View Details
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-stone-500 text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
