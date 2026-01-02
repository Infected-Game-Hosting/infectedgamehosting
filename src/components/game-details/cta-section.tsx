import React from "react";

type CTAButton = {
  href: string;
  label: string;
  className?: string;
  target?: string;
};

type CTASectionProps = {
  title?: React.ReactNode;
  subtitle?: string;
  primary?: CTAButton;
  secondary?: CTAButton;
  className?: string;
};

export default function CTASection({
  title = (
    <>
      Ready to Start Your{" "}
      <span className="text-[#39ff14]">Palworld Adventure?</span>
    </>
  ),
  subtitle = "Join thousands of players already hosting their Palworld servers with us. Get started in just 5 minutes!",
  primary = {
    href: "#pricing",
    label: "Choose Your Plan",
    className: "neon-button text-lg px-8 py-4",
  },
  secondary = {
    href: "https://billing.infectedgamehosting.com/",
    label: "Contact Support",
    className: "glass-card px-8 py-4 hover:border-[#39ff14]/50 transition-all",
    target: "_blank",
  },
  className = "",
}: CTASectionProps) {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#39ff14]/10 to-purple-500/10 ${className}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-[#c8cbd0] text-lg mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={primary.href}
            className={primary.className}
            target={primary.target}
          >
            {primary.label}
          </a>

          <a
            href={secondary.href}
            className={secondary.className}
            target={secondary.target}
          >
            {secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
