import React from "react";

/**
 * WhyInfectedSection
 * Replicates the "Cybrancee" Bento-Grid layout.
 */
export default function WhyInfectedSection() {
  const support = {
    title: "24/7 - 365 Support",
    desc: "Help and support available day and night. Our friendly support team is always happy to help you, whatever the question.",
  };

  const rated = {
    // title: "Rated Excellent",
    title: "Rated Great",
    desc: "Our customers rate us as “Excellent” on ",
  };

  const trial = {
    title: "48-Hour Free Trial",
    desc: "Try any server risk-free for 48 hours. Cancel within the trial window and you will not be charged.",
    policyLabel: "Risk Free",
  };

  const hardware = {
    title: "Powerful Hardware",
    desc: "All of our game servers run on high performance Ryzen 9 CPUs, clocking in at over 4GHz, paired with NVMe SSDs.",
  };

  // Shared class for the glass/dark cards
  const cardClass =
    "bg-[#0c1618] border border-[#1c2e30] rounded-3xl p-8 hover:border-[#39ff14]/30 transition-colors duration-300 relative overflow-hidden group";

  // Rated card background image URL (user-provided)
  const ratedBg =
    "https://res.cloudinary.com/dpnsseamh/image/upload/v1764421731/ratedExcellentBlock_jmgwag.png";

  return (
    <section
      id="why-infected"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050b0d]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
            Why <span className="text-[#39ff14]">Infected Game Hosting?</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* 1. Support Card (Top Left) - Row Layout */}
            <article
              className={`${cardClass} flex flex-col sm:flex-row items-start sm:items-center gap-6 min-h-[140px]`}
            >
              {/* Icon Box */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-[#0f2420] border border-[#1a3832] flex items-center justify-center text-[#39ff14]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
              </div>
              {/* Text */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  {support.title}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  {support.desc}
                </p>
              </div>
            </article>

            {/* 2. Rated Card (Bottom Left) - now uses background image,
                content positioned lower with background blur/opacity/saturation */}
            <article
              className={`${cardClass} flex flex-col justify-end h-full min-h-[180px]`}
            >
              {/* Background image placed as an absolutely positioned <img> so we can apply CSS filters */}
              <img
                src={ratedBg}
                alt="Rated background"
                className="absolute inset-0 w-full h-full object-cover filter blur-sm saturate-50 opacity-80 pointer-events-none"
              />

              {/* subtle overlay to ensure text contrast */}
              <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>

              {/* content (pushed downward by using justify-end on the parent) */}
              <div className="relative z-10 pb-8 px-2">
                <h3 className="text-xl font-bold text-white mb-2">
                  {rated.title}
                </h3>
                <p className="text-[#9ca3af] text-sm">
                  {rated.desc}
                  <a
                    href="https://www.trustpilot.com/review/infectedgamehosting.com"
                    className="text-white font-semibold underline decoration-[#39ff14] underline-offset-4 hover:text-[#39ff14] transition-colors"
                  >
                    Trustpilot
                  </a>
                  .
                </p>
              </div>
            </article>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* 3. Visual/Trial Card (Top Right) - Tall & Centered Visual */}
            <article
              className={`${cardClass} flex flex-col items-center text-center justify-between min-h-[400px]`}
            >
              {/* The Sonar Visual */}
              <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center my-4">
                {/* Dashed Rings */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full absolute animate-[spin_10s_linear_infinite] opacity-30"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="98"
                    fill="none"
                    stroke="#39ff14"
                    strokeWidth="1"
                    strokeDasharray="8 8"
                    opacity="0.2"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="75"
                    fill="none"
                    stroke="#39ff14"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.4"
                  />
                </svg>

                {/* Solid Glow Ring */}
                <div className="absolute w-[60%] h-[60%] rounded-full border border-[#39ff14]/20"></div>

                {/* Center Checkmark */}
                <div className="w-20 h-20 bg-[#0f2420] rounded-full flex items-center justify-center border-2 border-[#39ff14] z-10">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#39ff14"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>

                {/* Floating Badge (Right) - Mimicking "3 Month Policy" */}
                <div className="absolute right-0 top-[20%] bg-[#0f191b] px-3 py-1.5 rounded-full text-xs font-semibold text-white z-20">
                  {trial.policyLabel}
                </div>

                {/* Floating Icon (Left) - Mimicking Smiley */}
                <div className="absolute left-2 bottom-[20%] w-10 h-10 bg-[#0f191b] rounded-full flex items-center justify-center z-20">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#39ff14"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
              </div>

              {/* Card Text */}
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {trial.title}
                </h3>
                <p className="text-[#9ca3af] text-sm max-w-md mx-auto">
                  {trial.desc}
                </p>
              </div>
            </article>

            {/* 4. Hardware Card (Bottom Right) - Vertical Block */}
            <article
              className={`${cardClass} flex flex-col sm:flex-col items-start gap-4`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#0f2420] border border-[#1a3832] flex items-center justify-center text-[#39ff14] mb-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {hardware.title}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  {hardware.desc}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
