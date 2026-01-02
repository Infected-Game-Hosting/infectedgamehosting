import React from "react";

interface PricingSectionProps {
  plans: Array<{
    name: string;
    ram: string;
    cpu: string;
    setup: string;
    price: string;
    description: string;
    link: string;
    players?: string;
    popular?: boolean;
    isFree?: boolean;
  }>;
  title?: string;
  subtitle?: string;
  stockText?: string;
}

export default function PricingSection({
  plans,
  title,
  subtitle,
  stockText,
}: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#39ff14]/5 via-transparent to-[#39ff14]/5"
    >
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .neon-button {
          display: inline-block;
          padding: 12px 24px;
          background: linear-gradient(135deg, #39ff14, #2ee80f);
          color: #000;
          font-weight: bold;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(57, 255, 20, 0.4);
        }
        
        .neon-button:hover {
          box-shadow: 0 0 30px rgba(57, 255, 20, 0.6);
          transform: translateY(-2px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
            {title || "Choose Your Plan"}
          </h2>
          <p className="text-[#c8cbd0] text-lg mb-4">
            {subtitle ||
              "All plans include NVMe/SSD storage, DDoS protection, and 1Gbit unmetered bandwidth."}
          </p>
          <p className="text-[#c8cbd0] text-sm">
            {stockText || "Current stock: Available"}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="flex">
              <div
                className={`glass-card p-8 text-center group hover:scale-105 transition-transform duration-300 w-full flex flex-col ${
                  plan.popular ? "relative border-[#39ff14]/50" : ""
                } ${plan.isFree ? "relative border-[#39ff14]/50" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#39ff14] to-[#2ee80f] text-black font-bold px-6 py-2 rounded-full text-sm shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                      Popular
                    </span>
                  </div>
                )}
                {plan.isFree && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold px-6 py-2 rounded-full text-sm shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                      Try Free
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-grow">
                  <h3
                    className={`text-2xl font-bold mb-6 text-white ${
                      plan.popular || plan.isFree ? "mt-4" : ""
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="text-[#39ff14] font-semibold mb-2">
                    {plan.players}
                  </div>
                  <div className="text-[#c8cbd0] mb-2">
                    {plan.ram} / {plan.cpu}
                  </div>
                  <div className="text-[#c8cbd0] mb-6">Setup: {plan.setup}</div>
                  <div className="text-4xl font-bold text-[#39ff14] mb-6">
                    <span className="font-bold">{plan.price}</span>
                    <span className="text-lg text-[#c8cbd0]">
                      {plan.isFree ? " / 48 hours" : " / month"}
                    </span>
                  </div>
                  <p className="text-[#c8cbd0] mb-8 leading-relaxed flex-grow">
                    {plan.description}
                  </p>
                </div>

                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button w-full"
                >
                  Order
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
