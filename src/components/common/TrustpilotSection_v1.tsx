// ORIGINAL CODE

import { useEffect } from "react";
import { ExternalLink } from "lucide-react";

/**
 * Extend window.Trustpilot typing to accept an optional second arg.
 * Many Trustpilot snippets accept (element, refresh?: boolean).
 */
declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement, refresh?: boolean) => void;
      /* there are other methods on the Trustpilot object in the wild;
         add them here if you use them elsewhere (e.g. load, refresh) */
    };
  }
}

const TRUSTPILOT_SRC =
  "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";

const TrustpilotSection = () => {
  useEffect(() => {
    let appended = false;
    let scriptEl: HTMLScriptElement | null = null;

    const initTrustpilot = () => {
      const trustbox = document.getElementById("trustpilot-widget");
      if (!trustbox) {
        console.warn("Trustpilot: widget element not found");
        return;
      }

      if (
        window.Trustpilot &&
        typeof window.Trustpilot.loadFromElement === "function"
      ) {
        try {
          // second argument often used to force a refresh — keep it optional
          window.Trustpilot.loadFromElement(trustbox, true);
        } catch (err) {
          console.warn("Trustpilot.loadFromElement threw an error:", err);
        }
      } else {
        console.warn(
          "Trustpilot script loaded but Trustpilot object is not available yet."
        );
      }
    };

    // If Trustpilot already present on the page, just init immediately
    if (
      window.Trustpilot &&
      typeof window.Trustpilot.loadFromElement === "function"
    ) {
      initTrustpilot();
      return; // nothing more to do
    }

    // Avoid inserting duplicate script tags
    const existing = Array.from(document.scripts).find(
      (s) => s.getAttribute("src") === TRUSTPILOT_SRC
    ) as HTMLScriptElement | undefined;

    if (existing) {
      // script tag exists but Trustpilot object may not be ready yet — hook onload if possible
      scriptEl = existing;
      if ((existing as any)._trustpilotInitAttached !== true) {
        existing.addEventListener("load", initTrustpilot, { once: true });
        // mark so we don't attach multiple listeners from repeated mounts
        (existing as any)._trustpilotInitAttached = true;
      } else {
        // If already attached and script loaded, attempt init (some environments load immediately)
        if (
          (existing as any).readyState === "complete" ||
          (existing as any).readyState === "loaded"
        ) {
          initTrustpilot();
        }
      }
    } else {
      // create and append script
      scriptEl = document.createElement("script");
      scriptEl.type = "text/javascript";
      scriptEl.src = TRUSTPILOT_SRC;
      scriptEl.async = true;
      scriptEl.defer = true;
      scriptEl.addEventListener(
        "load",
        () => {
          initTrustpilot();
        },
        { once: true }
      );

      document.head.appendChild(scriptEl);
      appended = true;
    }

    // Cleanup: only remove the script if *this* effect appended it.
    return () => {
      if (scriptEl && appended && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
      // note: we intentionally do NOT delete window.Trustpilot since other components may rely on it
    };
  }, []);

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#39ff14]/5 via-transparent to-[#39ff14]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
                Why We Are Rated Excellent
              </span>
            </h2>
            <p className="text-[#c8cbd0] text-lg leading-relaxed">
              We are known for top-quality game servers, helpful support, high
              reliability, and great value prices. See what our users have to
              say.
            </p>
          </div>

          {/* Right Side - Trustpilot Widget Card */}
          <div className="relative">
            <div className="glass-card p-8 border border-white/10 hover:border-[#39ff14]/30 transition-all duration-300">
              {/* Trustpilot Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 126 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M30.141 11.573h-8.11l-2.506-7.712-2.506 7.712h-8.11l6.564 4.77-2.506 7.712 6.558-4.77 6.564 4.77-2.506-7.712 6.558-4.77z"
                      fill="#00B67A"
                    />
                    <path
                      d="M22.977 19.22l-2.448-1.777-2.506 7.712 4.954-5.935z"
                      fill="#005128"
                    />
                  </svg>
                  <span className="text-white font-semibold text-xl">
                    Trustpilot
                  </span>
                </div>
                <a
                  href="https://www.trustpilot.com/review/infectedgamehosting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#39ff14] hover:text-[#2ee010] transition-colors"
                  aria-label="View our Trustpilot reviews"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Trustpilot Review Collector Widget */}
              <div
                id="trustpilot-widget"
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="69268e3b52ba9172aced638f"
                data-style-height="52px"
                data-style-width="100%"
                data-token="bfee4ae2-46de-4b6d-89ad-59d73add1fb2"
              >
                <a
                  href="https://www.trustpilot.com/review/infectedgamehosting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#39ff14] hover:underline"
                >
                  Trustpilot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotSection;
