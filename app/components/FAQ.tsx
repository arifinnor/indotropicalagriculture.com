"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface FAQProps {
  locale?: string;
}

export default function FAQ({ locale }: FAQProps) {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    "moq", "samples", "payment", "shipping",
    "shippingTime", "documentation", "quality", "sourcing"
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-stone-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
            {t("badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {questions.map((key, index) => (
            <div key={key} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-stone-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <span className="font-medium text-stone-900 pr-4">
                  {t(`questions.${key}.question`)}
                </span>
                <svg
                  className={`w-5 h-5 text-stone-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 text-stone-600 leading-relaxed border-t border-stone-100"
                >
                  {t(`questions.${key}.answer`)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
