import React from "react";

export type Feature = {
  id?: string;
  title: string;
  description: string;
};

interface FeaturesSectionProps {
  features?: Feature[];
  title?: string;
  subtitle?: string;
}

const defaultFeatures: Feature[] = [
  {
    title: "High Performance",
    description: "Dedicated hardware tuned for low-latency, high FPS gameplay.",
  },
  {
    title: "DDoS Protection",
    description:
      "Advanced protection to keep your servers online and players safe.",
  },
  {
    title: "Easy Setup",
    description:
      "Instant provisioning and one-click server control so you can play faster.",
  },
  {
    title: "Full Control",
    description:
      "FTP, file manager and console access for complete server control.",
  },
  {
    title: "Automated Backups",
    description:
      "Daily backups with simple restore options to protect your world.",
  },
  {
    title: "Cross-Platform",
    description:
      "Optimized for mobile, consoles and PC for a seamless experience.",
  },
  {
    title: "1Gbit Network",
    description:
      "Unmetered bandwidth on fast connections to reduce lag and packet loss.",
  },
  {
    title: "Mod & Plugin Support",
    description:
      "Full support for community mods, plugins, and custom content.",
  },
];

export default function FeaturesSection({
  features = defaultFeatures,
  title = " Our Palworld Hosting",
  subtitle = "Everything you need for the ultimate Palworld server experience",
}: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#39ff14]/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="text-[#39ff14]">{title}?</span>
          </h2>
          <p className="text-[#c8cbd0] text-lg max-w-2xl mx-auto hidden">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id ?? index}
              className="glass-card p-6 hover:border-[#39ff14]/50 transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.06}s` }}
              aria-hidden={false}
            >
              <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-[#c8cbd0] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
