import React from "react";

export type Stat = {
  label: string;
  value: string;
};

interface HeroSectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  imageSrc?: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  stats?: Stat[];
}

export default function HeroSection({
  title = "Hosting",
  highlight = "Palworld",
  subtitle = "Experience seamless Palworld gameplay with our high-performance dedicated servers. Optimized for the perfect balance of survival and adventure.",
  imageSrc = "/assets/palworld.jpg",
  ctaPrimary = { text: "View Plans", href: "#pricing" },
  ctaSecondary = { text: "Learn More", href: "#features" },
  stats = [
    { label: "Uptime", value: "99.9%" },
    { label: "Support", value: "24/7" },
    { label: "Setup", value: "5min" },
  ],
}: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/20 via-transparent to-purple-500/20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#39ff14] to-[#2ee80f] bg-clip-text text-transparent">
                {highlight}
              </span>{" "}
              {title}
            </h1>

            <p className="text-xl text-[#c8cbd0] mb-8 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={ctaPrimary.href}
                className="neon-button text-lg px-8 py-4 inline-block"
                aria-label={ctaPrimary.text}
              >
                {ctaPrimary.text}
              </a>

              <a
                href={ctaSecondary.href}
                className="glass-card px-8 py-4 inline-block hover:border-[#39ff14]/50 transition-all"
                aria-label={ctaSecondary.text}
              >
                {ctaSecondary.text}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-[#39ff14]">
                    {s.value}
                  </div>
                  <div className="text-sm text-[#c8cbd0] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 transform hover:scale-105 transition-transform duration-300 relative">
              <img
                src={imageSrc}
                alt={`${highlight} ${title}`}
                className="rounded-lg w-full shadow-2xl"
              />

              <div className="absolute -bottom-6 -right-6 glass-card p-4">
                <div className="text-2xl font-bold text-[#39ff14]">
                  Starting at $11/mo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
