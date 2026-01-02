import { useState } from "react";
import { SafeStyle } from "./common/SafeStyle";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SafeStyle>{`
        /* Logo responsiveness */
        .logo-text {
          display: none;
        }

        @media (min-width: 768px) {
          .logo-text {
            display: inline;
          }
        }

        /* Adjust padding for small screens */
        @media (max-width: 639px) {
          .nav-cta {
            padding: 0.5rem 0.75rem !important;
            font-size: 0.75rem;
          }

          .mobile-nav-buttons {
            gap: 0.75rem;
          }
        }

        /* Mobile menu slide animation */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu {
          animation: slideDown 0.2s ease-out;
        }
      `}</SafeStyle>

      <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10 backdrop-blur-md bg-[#0b0b0f]/80">
        <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 min-w-0 flex-shrink-0"
            >
              {/* <img
                src="/image.png"
                alt="Infected Game Hosting Logo"
                className="w-7 h-7 sm:w-8 sm:h-8"
              /> */}
              <img
                src="/image.png"
                alt="Infected Game Hosting Logo"
                className="w-7 h-7 sm:w-8 sm:h-8"
                width="32"
                height="32"
                loading="eager"
                // fetchPriority="high"
              />
              <span className="logo-text text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white truncate">
                Infected Game Hosting
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-4 lg:gap-8">
              <a
                href="/#features"
                className="text-xs lg:text-sm text-[#c8cbd0] hover:text-[#39ff14] transition-colors whitespace-nowrap"
              >
                Features
              </a>
              <a
                href="/#pricing"
                className="text-xs lg:text-sm text-[#c8cbd0] hover:text-[#39ff14] transition-colors whitespace-nowrap"
              >
                Pricing
              </a>
              <a
                href="/#support"
                className="text-xs lg:text-sm text-[#c8cbd0] hover:text-[#39ff14] transition-colors whitespace-nowrap"
              >
                Support
              </a>
              <a
                href="/about"
                className="text-xs lg:text-sm text-[#c8cbd0] hover:text-[#39ff14] transition-colors whitespace-nowrap"
              >
                About
              </a>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2 lg:gap-4">
              <a
                href="https://billing.infectedgamehosting.com/cart.php"
                target="_blank"
                rel="noopener"
                className="nav-cta neon-button-outline text-xs lg:text-sm px-2 lg:px-4 py-1.5 lg:py-2 whitespace-nowrap"
              >
                Order
              </a>
              <a
                href="https://panel.infectedgamehosting.com/"
                target="_blank"
                rel="noopener"
                className="nav-cta neon-button text-xs lg:text-sm px-2 lg:px-4 py-1.5 lg:py-2 whitespace-nowrap"
              >
                Panel
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#c8cbd0] hover:text-white p-2 -mr-2"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="mobile-menu lg:hidden py-3 sm:py-4 border-t border-white/10 max-h-[calc(100vh-60px)] overflow-y-auto">
              <div className="flex flex-col gap-3 sm:gap-4">
                <a
                  href="/#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm sm:text-base text-[#c8cbd0] hover:text-[#39ff14] transition-colors text-left"
                >
                  Features
                </a>
                <a
                  href="/#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm sm:text-base text-[#c8cbd0] hover:text-[#39ff14] transition-colors text-left"
                >
                  Pricing
                </a>
                <a
                  href="/#support"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm sm:text-base text-[#c8cbd0] hover:text-[#39ff14] transition-colors text-left"
                >
                  Support
                </a>
                <a
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm sm:text-base text-[#c8cbd0] hover:text-[#39ff14] transition-colors text-left"
                >
                  About
                </a>

                <div className="mobile-nav-buttons flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-3">
                  <a
                    href="https://billing.infectedgamehosting.com/cart.php"
                    target="_blank"
                    rel="noopener"
                    className="nav-cta neon-button-outline text-center text-xs sm:text-sm py-2 px-4"
                  >
                    Order Now
                  </a>
                  <a
                    href="https://panel.infectedgamehosting.com/"
                    target="_blank"
                    rel="noopener"
                    className="nav-cta neon-button text-center text-xs sm:text-sm py-2 px-4"
                  >
                    Open Panel
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
