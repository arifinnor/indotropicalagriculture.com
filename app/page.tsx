import Hero from "./components/Hero";
import VisionMission from "./components/VisionMission";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main id="main-content" className="min-h-dvh">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Vision & Mission Section */}
      <VisionMission />

      {/* Products Section */}
      <Products />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer aria-label="Site footer" className="bg-stone-900 text-stone-100 py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Indo Tropical Agriculture
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Your trusted partner for premium Indonesian agriculture products. Sourcing directly from farmers, delivering quality worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-stone-300">
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-stone-300">
                <li>
                  <a href="mailto:exports@indotropicalagriculture.com" className="hover:text-white transition-colors">
                    exports@indotropicalagriculture.com
                  </a>
                </li>
                <li>
                  <a href="tel:+6281331261210" className="hover:text-white transition-colors">
                    +62813 3126 1210
                  </a>
                </li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 sm:pt-8 border-t border-stone-800 text-center text-[10px] sm:text-xs text-stone-400">
            <p>&copy; {new Date().getFullYear()} Indo Tropical Agriculture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
