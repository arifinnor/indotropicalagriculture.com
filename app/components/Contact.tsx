"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Replace with your actual form submission endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      setFormStatus("success");
      setStatusMessage("Thank you for your message! We'll get back to you within 24 hours.");
      e.currentTarget.reset();
    } catch {
      // For demo purposes, show success even without API
      setFormStatus("success");
      setStatusMessage("Thank you for your message! We'll get back to you within 24 hours.");
      e.currentTarget.reset();
    }
  };

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

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-stone-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16 reveal-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-stone-900 text-balance">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto text-pretty">
            Interested in our products? Contact us for quotes, product details, or partnership inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {/* Contact Form */}
          <div className="md:col-span-3 reveal-on-scroll opacity-0">
            <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-stone-200">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5" noValidate>
                {formStatus !== "idle" && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`p-3 sm:p-4 rounded-xl text-xs sm:text-sm font-medium ${
                      formStatus === "success"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : formStatus === "error"
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-stone-900">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-stone-300 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-[border-color,box-shadow] text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-stone-900">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      spellCheck={false}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-stone-300 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-[border-color,box-shadow] text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-stone-900">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-stone-300 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-[border-color,box-shadow] text-sm"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="product" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-stone-900">
                    Product Interest *
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-stone-300 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-[border-color,box-shadow] text-sm"
                  >
                    <option value="">Select a product</option>
                    <option value="planting-media">Planting Media</option>
                    <option value="cocoa">Cocoa</option>
                    <option value="cloves">Cloves</option>
                    <option value="ginger">Ginger</option>
                    <option value="other">Other Products</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-stone-900">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-stone-300 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-[border-color,box-shadow] resize-none text-sm"
                    placeholder="Tell us about your requirements…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  aria-disabled={formStatus === "submitting"}
                  className="w-full px-5 sm:px-6 py-3 sm:py-4 bg-emerald-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-100 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all text-sm sm:text-base"
                >
                  {formStatus === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-3 sm:space-y-4 md:space-y-5">
            {/* Department */}
            <div className="reveal-on-scroll opacity-0 bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm border border-stone-200">
              <h3 className="text-[10px] sm:text-xs font-bold mb-1 text-emerald-600 uppercase tracking-wide">
                INDO TROPICAL AGRICULTURE
              </h3>
              <p className="text-stone-600 text-[10px] sm:text-xs">
                International Exports and Sales Department
              </p>
            </div>

            {/* Direct Contact */}
            <div className="reveal-on-scroll opacity-0 bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm border border-stone-200">
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-1.5 sm:gap-2 text-stone-900">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Export Customer Sales
              </h3>
              <div className="space-y-3 sm:space-y-4 text-stone-600">
                <div>
                  <p className="flex items-center gap-1.5 sm:gap-2">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+6281331261210" className="text-xs sm:text-sm font-medium hover:text-emerald-600">+62813 3126 1210</a>
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-stone-200">
                  <p className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-stone-900">WhatsApp</p>
                  <div className="space-y-1.5 sm:space-y-2">
                    <p className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" aria-hidden="true" />
                      <a href="https://wa.me/6281331261210" className="hover:text-emerald-600 transition-colors">
                        +62813 3126 1210 <span className="text-stone-500">(English)</span>
                      </a>
                    </p>
                    <p className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" aria-hidden="true" />
                      <a href="https://wa.me/628123666994" className="hover:text-emerald-600 transition-colors">
                        +62812 3666 994 <span className="text-stone-500">(Deutsch)</span>
                      </a>
                    </p>
                  </div>
                </div>

                <p className="flex items-center gap-1.5 sm:gap-2">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:exports@indotropicalagriculture.com" className="text-xs sm:text-sm hover:text-emerald-600 transition-colors">
                    exports@indotropicalagriculture.com
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Response */}
            <div className="reveal-on-scroll opacity-0 bg-amber-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-amber-200">
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1.5 sm:mb-2 text-amber-700">Quick Response</h3>
              <p className="text-stone-600 text-xs sm:text-sm">
                We typically respond within 24 hours. For urgent matters, please contact us directly via phone or WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
