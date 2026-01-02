import React from "react";

/**
 * KeyFeatures
 * - Dynamic list driven by `features` array
 * - Theme-aligned: neon green #39ff14, glass-card style
 * - Responsive grid and accessible
 *
 * You can pass a custom `features` prop (array) to override defaults.
 */
export default function KeyFeatures({ features: customFeatures }) {
  const defaultFeatures = [
    {
      id: "international",
      title: "International Servers",
      description:
        "Server locations in North America, Europe, UK, Asia, Australia and India.",
      // simple SVG globe
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2a10 10 0 100 20 10 10 0 000-20z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12h20M12 2c2.5 2 3 6 3 10s-.5 8-3 10M12 2c-2.5 2-3 6-3 10s.5 8 3 10"
            stroke="currentColor"
            strokeWidth="1.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
        </svg>
      ),
    },
    {
      id: "git",
      title: "Git Integration",
      description:
        "Integrate your git repository directly into Cybrance and keep your bot up to date.",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 12l9-9 9 9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3v18"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "always",
      title: "Always Online 24/7",
      description:
        "Our servers run for all hours of the day, every day. Ensuring your bot is always available.",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M12 7v6l4 2"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "ddos",
      title: "DDoS Protection",
      description:
        "Shield your server from malicious online attacks and keep your bot online.",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2l7 4v6c0 5-4 9-7 10-3-1-7-5-7-10V6l7-4z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const features = customFeatures || defaultFeatures;

  return (
    <section
      aria-labelledby="key-features-title"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
          id="key-features-title"
          className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent"
        >
          Key Features
        </h2>
        <p className="text-[#c8cbd0] max-w-2xl mx-auto hidden">
          Powerful hosting built for bots and multiplayer — fast, secure, and
          always available.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <article
              key={f.id}
              className="glass-card p-6 text-left flex flex-col items-start gap-4"
              role="article"
              aria-labelledby={`feature-${f.id}-title`}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(57,255,20,0.04)",
              }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-1"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(57,255,20,0.12), rgba(46,232,15,0.06))",
                  border: "1px solid rgba(57,255,20,0.08)",
                  color: "#39ff14",
                }}
              >
                {/* icon */}
                <span className="text-[#39ff14]">{f.icon}</span>
              </div>

              <h3
                id={`feature-${f.id}-title`}
                className="text-sm sm:text-base font-semibold mb-1 text-[#39ff14]"
              >
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#c8cbd0] leading-relaxed">
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
