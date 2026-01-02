import React, { useState } from "react";

interface Plan {
  name: string;
  ram?: string;
  cpu?: string;
  setup?: string;
  priceMonthly: number; // numeric monthly base price (used for discount math)
  description?: string;
  link?: string;
  players?: string;
  popular?: boolean;
  isFree?: boolean;
  features?: string[]; // optional feature list
}

interface PricingSectionProps {
  plans: Plan[];
  title?: string;
  subtitle?: string;
  stockText?: string;
}

const DISCOUNTS: Record<string, number> = {
  "1": 0, // 1 month (monthly) => 0%
  "3": 0.05, // quarterly => 5%
  "6": 0.1, // semi-annual => 10%
  "12": 0.15, // annual => 15%
};

const billingOptions = [
  { key: "1", label: "Monthly", tag: "" },
  { key: "3", label: "3 Months", tag: "5% Off" },
  { key: "6", label: "6 Months", tag: "10% Off" },
  { key: "12", label: "12 Months", tag: "15% Off" },
];

export default function PricingSection({
  plans,
  title,
  subtitle,
  stockText,
}: PricingSectionProps) {
  const [billing, setBilling] = useState<string>("1"); // default Monthly

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(n);

  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#39ff14]/4 via-transparent to-[#39ff14]/4"
    >
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.5);
        }
        .neon-button {
          display:inline-block;
          padding:12px 24px;
          background:linear-gradient(90deg,#39ff14,#2ee80f);
          color:#000;
          font-weight:700;
          border-radius:999px;
          box-shadow:0 6px 30px rgba(57,255,20,0.18);
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .neon-button:hover { transform: translateY(-3px); box-shadow:0 10px 40px rgba(57,255,20,0.28); }
        .glow-border {
          border: 1px solid rgba(57,255,20,0.12);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-10 gap-6 flex-col md:flex-row">
          <div className="text-left">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
              {title || "Powerful Plans and Unbeatable Prices"}
            </h2>
            <p className="text-[#c8cbd0] text-lg max-w-2xl">
              {subtitle ||
                "All plans include NVMe/SSD storage, DDoS protection, and 1Gbit unmetered bandwidth."}
            </p>
            <p className="text-[#c8cbd0] text-sm mt-2">
              {stockText || "Current stock: Available"}
            </p>
          </div>

          {/* Billing toggle (top-right like reference) */}
          <div className="flex flex-col items-end">
            <div className="inline-flex items-center gap-3 bg-[#0b0b0b] p-2 rounded-full border border-[#ffffff10]">
              {billingOptions.map((opt) => {
                const selected = billing === opt.key;
                return (
                  <button
                    key={opt.key}
                    onClick={() => setBilling(opt.key)}
                    className={`relative px-4 py-2 text-sm rounded-full font-semibold transition ${
                      selected
                        ? "bg-gradient-to-r from-[#39ff14] to-[#2ee80f] text-black shadow-[0_6px_30px_rgba(57,255,20,0.14)]"
                        : "text-[#c8cbd0] hover:bg-white/3"
                    }`}
                    aria-pressed={selected}
                  >
                    <span className="block">{opt.label}</span>
                    {opt.tag && (
                      <small
                        className={`block mt-1 text-[10px] ${
                          selected ? "text-black font-bold" : "text-[#c8cbd0]"
                        }`}
                      >
                        {opt.tag}
                      </small>
                    )}
                  </button>
                );
              })}
            </div>

            {/* small discount bar to mimic the little percentage markers in screenshot */}
            <div className="mt-3 text-xs text-[#9aa0a6]">
              <span className="mr-4">Monthly</span>
              <span className="mr-4">3 mo — 5% off</span>
              <span className="mr-4">6 mo — 10% off</span>
              <span>12 mo — 15% off</span>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => {
            const discount = DISCOUNTS[billing] ?? 0;
            const base = plan.priceMonthly;
            const discounted = +(base * (1 - discount)).toFixed(2);

            // detect free plans (hide "/ month" if true)
            const isFree = !!plan.isFree || plan.priceMonthly === 0;

            // show "Billed every X months" label (hidden for free plans)
            const billingPeriodText =
              billing === "1"
                ? "/ month"
                : ` / month (billed every ${billing} mo)`;
            const showStrike = discount > 0 && discounted < base;

            return (
              <div key={i} className="flex">
                <div
                  className={`glass-card w-full p-6 flex flex-col justify-between relative transition-transform duration-300 hover:scale-[1.02] ${
                    plan.popular
                      ? "border-2 border-[#39ff14]/40 shadow-[0_10px_40px_rgba(57,255,20,0.06)]"
                      : "glow-border"
                  }`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#39ff14] to-[#2ee80f] text-black font-bold px-5 py-2 rounded-full text-sm shadow-[0_6px_24px_rgba(57,255,20,0.12)]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center pt-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    {plan.players && (
                      <div className="text-[#39ff14] font-semibold mb-2">
                        {plan.players}
                      </div>
                    )}
                    <div className="text-[#c8cbd0] text-sm mb-3">
                      {plan.ram} {plan.cpu ? `• ${plan.cpu}` : ""}
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center gap-3">
                        <div className="text-4xl font-extrabold text-[#39ff14]">
                          {formatCurrency(discounted)}
                        </div>

                        {/* only render billing label when plan is not free */}
                        {!isFree && (
                          <div className="text-sm text-[#c8cbd0]">
                            {billingPeriodText}
                          </div>
                        )}
                      </div>

                      {showStrike && (
                        <div className="text-xs text-[#9aa0a6] mt-2">
                          <span className="line-through mr-2">
                            {formatCurrency(base)}
                          </span>
                          <span>Save {Math.round(discount * 100)}%</span>
                        </div>
                      )}
                    </div>

                    {/* Short description */}
                    <p className="text-[#c8cbd0] text-sm leading-relaxed mb-6 px-2">
                      {plan.description}
                    </p>
                  </div>

                  {/* Feature list */}
                  {plan.features && plan.features.length > 0 && (
                    <ul className="text-left text-sm text-[#c8cbd0] space-y-2 mb-6 px-2">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="inline-block mt-[2px]">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA */}
                  <div className="mt-3">
                    <a
                      href={plan.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-button w-full text-center block"
                    >
                      Start Now
                    </a>
                  </div>

                  {/* footer small */}
                  <div className="hidden mt-4 text-center text-xs text-[#8f9398]">
                    <span>90 Day Refund Policy</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
