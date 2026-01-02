// import React, { useState } from "react";
// import { Check } from "lucide-react";
// import { SafeStyle } from "./SafeStyle";

// interface Plan {
//   name: string;
//   ram?: string;
//   cpu?: string;
//   setup?: string;
//   priceMonthly: number;
//   description?: string;
//   link?: string;
//   players?: string;
//   popular?: boolean;
//   isFree?: boolean;
//   features?: string[];
// }

// interface PricingSectionProps {
//   plans: Plan[];
//   title?: string;
//   subtitle?: string;
//   stockText?: string;
// }

// const DISCOUNTS: Record<string, number> = {
//   "1": 0,
//   "3": 0.05,
//   "6": 0.1,
//   "12": 0.15,
// };

// const billingOptions = [
//   { key: "1", label: "Monthly", tag: "" },
//   { key: "3", label: "3 Months", tag: "5% Off" },
//   { key: "6", label: "6 Months", tag: "10% Off" },
//   { key: "12", label: "12 Months", tag: "15% Off" },
// ];

// function PricingSection({
//   plans,
//   title,
//   subtitle,
//   stockText,
// }: PricingSectionProps) {
//   const [billing, setBilling] = useState<string>("1");

//   const formatCurrency = (n: number) =>
//     new Intl.NumberFormat(undefined, {
//       style: "currency",
//       currency: "USD",
//       maximumFractionDigits: 2,
//     }).format(n);

//   return (
//     <section
//       id="pricing"
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#39ff14]/4 via-transparent to-[#39ff14]/4"
//     >
//       <SafeStyle>{`
//         .glass-card {
//           background: rgba(255, 255, 255, 0.03);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.06);
//           border-radius: 16px;
//           box-shadow: 0 8px 30px rgba(0,0,0,0.5);
//         }
//         .neon-button {
//           display:inline-block;
//           padding:12px 24px;
//           background:linear-gradient(90deg,#39ff14,#2ee80f);
//           color:#000;
//           font-weight:700;
//           border-radius:999px;
//           box-shadow:0 6px 30px rgba(57,255,20,0.18);
//           transition: transform .18s ease, box-shadow .18s ease;
//         }
//         .neon-button:hover { transform: translateY(-3px); box-shadow:0 10px 40px rgba(57,255,20,0.28); }
//         .glow-border {
//           border: 1px solid rgba(57,255,20,0.12);
//         }
//       `}</SafeStyle>

//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-start justify-between mb-10 gap-6 flex-col md:flex-row">
//           <div className="text-left">
//             <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
//               {title || "Powerful Plans and Unbeatable Prices"}
//             </h2>
//             <p className="text-[#c8cbd0] text-lg max-w-2xl hidden">
//               {subtitle ||
//                 "All plans include NVMe/SSD storage, DDoS protection, and 1Gbit unmetered bandwidth."}
//             </p>
//             <p className="text-[#c8cbd0] text-sm mt-2 hidden">
//               {stockText || "Current stock: Available"}
//             </p>
//           </div>

//           {/* Billing toggle */}
//           <div className="flex flex-col items-end">
//             <div className="inline-flex items-center gap-1 bg-[#1a1a1a] p-1 rounded-full border border-[#ffffff08] relative">
//               {billingOptions.map((opt) => {
//                 const selected = billing === opt.key;
//                 return (
//                   <button
//                     key={opt.key}
//                     onClick={() => setBilling(opt.key)}
//                     className={`relative px-6 py-2.5 text-sm rounded-full font-medium transition-all duration-200 ${
//                       selected
//                         ? "bg-white text-black shadow-lg"
//                         : "text-[#c8cbd0] hover:text-white"
//                     }`}
//                     aria-pressed={selected}
//                   >
//                     {/* Discount tooltip with arrow */}
//                     {opt.tag && (
//                       <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
//                         <div className="bg-black text-white text-xs font-semibold px-3 py-1 rounded whitespace-nowrap">
//                           {opt.tag}
//                         </div>
//                         {/* Triangle arrow */}
//                         <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
//                       </div>
//                     )}
//                     <span className="block">{opt.label}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Cards grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {plans.map((plan, i) => {
//             const discount = DISCOUNTS[billing] ?? 0;
//             const base = plan.priceMonthly;
//             const discounted = +(base * (1 - discount)).toFixed(2);

//             const isFree = !!plan.isFree || plan.priceMonthly === 0;

//             const billingPeriodText =
//               billing === "1"
//                 ? "/ month"
//                 : ` / month (billed every ${billing} mo)`;
//             const showStrike = discount > 0 && discounted < base;

//             return (
//               <div key={i} className="flex">
//                 <div
//                   className={`glass-card w-full p-6 flex flex-col justify-between relative transition-transform duration-300 hover:scale-[1.02] ${
//                     plan.popular
//                       ? "border-2 border-[#39ff14]/40 shadow-[0_10px_40px_rgba(57,255,20,0.06)]"
//                       : "glow-border"
//                   }`}
//                 >
//                   {/* Popular badge */}
//                   {plan.popular && (
//                     <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                       <span className="bg-gradient-to-r from-[#39ff14] to-[#2ee80f] text-black font-bold px-5 py-2 rounded-full text-sm shadow-[0_6px_24px_rgba(57,255,20,0.12)]">
//                         Most Popular
//                       </span>
//                     </div>
//                   )}

//                   {/* Header */}
//                   <div className="text-center pt-6">
//                     <h3 className="text-xl font-bold text-white mb-6">
//                       {plan.name}
//                     </h3>

//                     {/* Price */}
//                     <div className="mb-6">
//                       <div className="flex items-baseline justify-center gap-2">
//                         {isFree ? (
//                           <div className="text-4xl font-extrabold text-[#39ff14]">
//                             FREE
//                           </div>
//                         ) : (
//                           <>
//                             <div className="text-4xl font-extrabold text-[#39ff14]">
//                               {formatCurrency(discounted)}
//                             </div>
//                             <div className="text-sm text-[#c8cbd0]">
//                               {billingPeriodText}
//                             </div>
//                           </>
//                         )}
//                       </div>

//                       {showStrike && (
//                         <div className="text-xs text-[#9aa0a6] mt-2">
//                           <span className="line-through mr-2">
//                             {formatCurrency(base)}
//                           </span>
//                           <span>Save {Math.round(discount * 100)}%</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Features */}
//                   <div className="flex-1">
//                     <h4 className="text-sm font-semibold text-white mb-4 px-2">
//                       Features
//                     </h4>
//                     <ul className="text-left text-sm text-[#c8cbd0] space-y-3 mb-6 px-2">
//                       {plan.players && (
//                         <li className="flex items-start gap-3">
//                           <Check className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
//                           <span>{plan.players}</span>
//                         </li>
//                       )}
//                       {plan.ram && (
//                         <li className="flex items-start gap-3">
//                           <Check className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
//                           <span>{plan.ram}</span>
//                         </li>
//                       )}
//                       {plan.cpu && (
//                         <li className="flex items-start gap-3">
//                           <Check className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
//                           <span>{plan.cpu}</span>
//                         </li>
//                       )}
//                       {plan.description && (
//                         <li className="flex items-start gap-3">
//                           <Check className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
//                           <span>{plan.description}</span>
//                         </li>
//                       )}
//                       {/* {plan.features &&
//                         plan.features.map((f, idx) => (
//                           <li key={idx} className="flex items-start gap-3">
//                             <Check className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
//                             <span>{f}</span>
//                           </li>
//                         ))} */}
//                     </ul>
//                   </div>

//                   {/* CTA */}
//                   <div className="mt-3">
//                     <a
//                       href={plan.link || "#"}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="neon-button w-full text-center block"
//                     >
//                       Start Now
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PricingSection;

import React, { useState } from "react";
import { Check } from "lucide-react";
import { SafeStyle } from "./SafeStyle";

interface Plan {
  name: string;
  ram?: string;
  cpu?: string;
  setup?: string;
  priceMonthly: number;
  description?: string;
  link?: string;
  players?: string;
  popular?: boolean;
  isFree?: boolean;
  features?: string[];
}

interface PricingSectionProps {
  plans: Plan[];
  title?: string;
  subtitle?: string;
  stockText?: string;
}

const DISCOUNTS: Record<string, number> = {
  "1": 0,
  "3": 0.05,
  "6": 0.1,
  "12": 0.15,
};

const billingOptions = [
  { key: "1", label: "Monthly", tag: "" },
  { key: "3", label: "3 Months", tag: "5% Off" },
  { key: "6", label: "6 Months", tag: "10% Off" },
  { key: "12", label: "12 Months", tag: "15% Off" },
];

function PricingSection({
  plans,
  title,
  subtitle,
  stockText,
}: PricingSectionProps) {
  const [billing, setBilling] = useState<string>("1");

  // FIXED: Use explicit locale to ensure consistent formatting
  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(n);

  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#39ff14]/4 via-transparent to-[#39ff14]/4"
    >
      <SafeStyle>{`
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
      `}</SafeStyle>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-10 gap-6 flex-col md:flex-row">
          <div className="text-left">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
              {title || "Powerful Plans and Unbeatable Prices"}
            </h2>
            <p className="text-[#c8cbd0] text-lg max-w-2xl hidden">
              {subtitle ||
                "All plans include NVMe/SSD storage, DDoS protection, and 1Gbit unmetered bandwidth."}
            </p>
            <p className="text-[#c8cbd0] text-sm mt-2 hidden">
              {stockText || "Current stock: Available"}
            </p>
          </div>

          {/* Billing toggle */}
          <div className="flex flex-col items-end">
            <div className="inline-flex items-center gap-1 bg-[#1a1a1a] p-1 rounded-full border border-[#ffffff08] relative">
              {billingOptions.map((opt) => {
                const selected = billing === opt.key;
                return (
                  <button
                    key={opt.key}
                    onClick={() => setBilling(opt.key)}
                    className={`relative px-6 py-2.5 text-sm rounded-full font-medium transition-all duration-200 ${
                      selected
                        ? "bg-white text-black shadow-lg"
                        : "text-[#c8cbd0] hover:text-white"
                    }`}
                    aria-pressed={selected}
                  >
                    {/* Discount tooltip with arrow */}
                    {opt.tag && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="bg-black text-white text-xs font-semibold px-3 py-1 rounded whitespace-nowrap">
                          {opt.tag}
                        </div>
                        {/* Triangle arrow */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
                      </div>
                    )}
                    <span className="block">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => {
            const discount = DISCOUNTS[billing] ?? 0;
            const base = plan.priceMonthly;
            const discounted = +(base * (1 - discount)).toFixed(2);

            const isFree = !!plan.isFree || plan.priceMonthly === 0;

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
                    <h3 className="text-xl font-bold text-white mb-6">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center gap-2">
                        {isFree ? (
                          <div className="text-4xl font-extrabold text-[#39ff14]">
                            FREE
                          </div>
                        ) : (
                          <>
                            <div className="text-4xl font-extrabold text-[#39ff14]">
                              {formatCurrency(discounted)}
                            </div>
                            <div className="text-sm text-[#c8cbd0]">
                              {billingPeriodText}
                            </div>
                          </>
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
                  </div>

                  {/* Features */}
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white mb-4 px-2">
                      Features
                    </h4>
                    <ul className="text-left text-sm text-[#c8cbd0] space-y-3 mb-6 px-2">
                      {plan.players && (
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
                          <span>{plan.players}</span>
                        </li>
                      )}
                      {plan.ram && (
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
                          <span>{plan.ram}</span>
                        </li>
                      )}
                      {plan.cpu && (
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
                          <span>{plan.cpu}</span>
                        </li>
                      )}
                      {plan.description && (
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
                          <span>{plan.description}</span>
                        </li>
                      )}
                    </ul>
                  </div>

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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
