import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string; // undefined for current page
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  locale: string;
}

export default function Breadcrumb({ items, locale }: BreadcrumbProps) {
  if (items.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-4">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-stone-500 hover:text-emerald-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-stone-900 font-medium truncate max-w-[200px]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <svg
                  className="w-4 h-4 text-stone-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
