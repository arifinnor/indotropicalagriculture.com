export default function Hero() {
  return (
    <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden bg-stone-50 pt-16">
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-emerald-200/20" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full bg-amber-200/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white shadow-md mb-6 sm:mb-8 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-status-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" aria-hidden="true"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" aria-hidden="true"></span>
            <span className="sr-only">Available now</span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-stone-600">
            Indonesian Agriculture Exporter
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-stone-900 animate-fade-up delay-100 text-balance">
          Supplying across
          <br />
          <span className="text-emerald-600">the world.</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed animate-fade-up delay-200 text-pretty">
          Indonesian agriculture supplier, trader and exporter.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto animate-fade-up delay-300">
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-700 hover:scale-105 active:scale-100 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-transform duration-200 text-center text-sm sm:text-base"
          >
            Request a Quote
          </a>
          <a
            href="#products"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-stone-900 font-semibold rounded-full shadow-md border border-stone-200 hover:scale-105 active:scale-100 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-transform duration-200 text-center text-sm sm:text-base"
          >
            View Products
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 animate-fade-up delay-400">
          {[
            { value: "100%", label: "Direct from Farmers" },
            { value: "Worldwide", label: "Global Shipping" },
            { value: "15+", label: "Years Experience" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 tabular-nums transition-transform group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-stone-500 mt-1 text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
        <div className="flex flex-col items-center gap-2 text-stone-400">
          <span className="text-[10px] sm:text-xs uppercase tracking-wide">Scroll</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
