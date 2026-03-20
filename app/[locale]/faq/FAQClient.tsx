"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";

const QUESTION_KEYS = [
  "moq", "samples", "payment", "shipping",
  "shippingTime", "documentation", "quality", "sourcing",
] as const;

export default function FAQClient() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const questions = useMemo(
    () =>
      QUESTION_KEYS.map((key) => ({
        key,
        question: t(`questions.${key}.question`),
        answer: t(`questions.${key}.answer`),
      })),
    [t]
  );

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return questions;
    const q = searchQuery.toLowerCase();
    return questions.filter(
      ({ question, answer }) =>
        question.toLowerCase().includes(q) || answer.toLowerCase().includes(q)
    );
  }, [questions, searchQuery]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setOpenIndex(null);
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
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
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Question count */}
        <p className="text-sm text-stone-500 mb-6 text-center">
          {t("showingQuestions", {
            count: filtered.length,
            total: questions.length,
          })}
        </p>

        {/* FAQ Accordion */}
        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map(({ key, question, answer }, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={`${searchQuery}-${key}`}
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${Math.min(index * 40, 320)}ms` }}
                >
                  <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${key}`}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-inset"
                    >
                      <span className="font-semibold text-stone-900 text-base leading-snug">
                        {question}
                      </span>
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-emerald-600 text-white rotate-180"
                            : "bg-stone-100 text-stone-500"
                        }`}
                        aria-hidden="true"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${key}`}
                        className="px-6 pb-6 pt-1 text-stone-600 leading-relaxed border-t border-stone-100"
                      >
                        <div className="pt-4 border-l-2 border-emerald-400 pl-4">
                          {answer}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty state */
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
