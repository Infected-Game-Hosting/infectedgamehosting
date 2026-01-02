import React from "react";

interface HeroSectionProps {
  highlight?: string;
  title?: string;
  badgeText?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
}

export default function HeroSection({
  highlight = "Minecraft",
  title = "Server Hosting",
  badgeText = "Unlimited Slots, Storage, and Bandwidth",
  subtitle = "Build your dream Minecraft world with our powerful dedicated Minecraft server hosting. Enjoy uninterrupted adventures, with full mod/plugin support, powerful hardware, and instant setup.",
  ctaText = "See Plans and Pricing",
  ctaHref = "#pricing",
  imageSrc = "/assets/palworld.jpg",
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "56vh",
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Simple left dark gradient so text reads — minimal and unobtrusive */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent opaci" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 h-full py-40 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-full">
          <div className="w-full max-w-3xl px-6 lg:px-12 py-12 text-white">
            {/* Small badge */}
            <div className="inline-flex items-center gap-3 mb-6 px-3 py-1.5 rounded-full bg-[#6b21a8]/10 border border-[#6b21a8]/20 text-sm">
              <svg
                className="w-3.5 h-3.5 text-[#6b21a8]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs text-[#e6e7ea] font-medium">
                {badgeText}
              </span>
            </div>

            {/* Two-line heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="block text-white">{highlight}</span>
              <span className="block text-white">{title}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm text-[#c8cbd0] max-w-2xl mb-7">{subtitle}</p>

            {/* CTA */}
            <a
              href={ctaHref}
              className="hidden items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#6b21a8] to-[#7c3aed] text-white font-semibold transition-shadow"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
