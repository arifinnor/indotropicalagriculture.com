"use client";

import Link from "next/link";

const CATEGORY_COLORS: Record<string, string> = {
  spices: "bg-amber-100 text-amber-800 border-amber-200 hover:border-amber-300 hover:bg-amber-200",
  herbs: "bg-emerald-100 text-emerald-800 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-200",
  nuts: "bg-orange-100 text-orange-800 border-orange-200 hover:border-orange-300 hover:bg-orange-200",
  coffee: "bg-stone-200 text-stone-800 border-stone-300 hover:border-stone-400 hover:bg-stone-300",
  beans: "bg-green-100 text-green-800 border-green-200 hover:border-green-300 hover:bg-green-200",
  cocoa: "bg-amber-100 text-amber-800 border-amber-200 hover:border-amber-300 hover:bg-amber-200",
  fruits: "bg-yellow-100 text-yellow-800 border-yellow-200 hover:border-yellow-300 hover:bg-yellow-200",
  extracts: "bg-red-100 text-red-800 border-red-200 hover:border-red-300 hover:bg-red-200",
  powders: "bg-stone-200 text-stone-800 border-stone-300 hover:border-stone-400 hover:bg-stone-300",
  other: "bg-stone-100 text-stone-800 border-stone-200 hover:border-stone-300 hover:bg-stone-200",
};

interface Category {
  slug: string;
  name: string;
  description: string;
  productCount: number;
  icon?: string;
}

interface CategoriesClientProps {
  categories: Category[];
  locale: string;
}

const CATEGORY_ICONS: Record<string, string> = {
  spices: "🌶",
  herbs: "🌿",
  nuts: "🥜",
  coffee: "☕",
  beans: "🫘",
  cocoa: "🍫",
  fruits: "🍋",
  extracts: "🧴",
  powders: "✨",
  other: "🌾",
};

export default function CategoriesClient({ categories, locale }: CategoriesClientProps) {
  const getCategoriesPath = () => locale === "en" ? "/categories" : `/${locale}/categories`;
  const getCategoryPath = (slug: string) => locale === "en" ? `/categories/${slug}` : `/${locale}/categories/${slug}`;

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const colorClass = CATEGORY_COLORS[category.slug] || CATEGORY_COLORS.other;
            const icon = CATEGORY_ICONS[category.slug] || CATEGORY_ICONS.other;

            return (
              <Link
                key={category.slug}
                href={getCategoryPath(category.slug)}
                className="group"
              >
                <div
                  className={`h-full p-6 rounded-2xl border-2 transition-all duration-300 ${colorClass}`}
                >
                  {/* Icon and Name */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl" role="img" aria-label={`${category.name} icon`}>
                      {icon}
                    </span>
                    <h2 className="text-xl font-bold">
                      {category.name}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4 opacity-90">
                    {category.description}
                  </p>

                  {/* Product Count and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium opacity-80">
                      {category.productCount} {category.productCount === 1 ? "product" : "products"}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-sm group-hover:gap-2 transition-all">
                      View
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
            );
          })}
        </div>

        {categories.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-500 text-lg">
              No categories found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
