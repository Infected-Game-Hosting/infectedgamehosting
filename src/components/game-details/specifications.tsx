import React from "react";

type Spec = {
  id?: string;
  title: string;
  description: string;
};

type ServerSpecificationsProps = {
  title?: string;
  subtitle?: string;
  specs?: Spec[];
  className?: string;
};

const defaultSpecs: Spec[] = [
  {
    id: "nvme",
    title: "NVMe SSD Storage",
    description:
      "Ultra-fast NVMe drives for instant world loading and lag-free gameplay",
  },
  {
    id: "network",
    title: "1Gbit Network",
    description:
      "Unmetered bandwidth on 1Gbit connections for smooth multiplayer",
  },
  {
    id: "ddos",
    title: "DDoS Protection",
    description: "Advanced protection against attacks keeps your server online",
  },
  {
    id: "ryzen",
    title: "Ryzen Processors",
    description: "Latest AMD Ryzen CPUs for maximum performance",
  },
  {
    id: "backups",
    title: "Auto Backups",
    description: "Daily automated backups with one-click restore",
  },
  {
    id: "control",
    title: "Full Control",
    description: "Complete FTP, file manager, and console access",
  },
];

export default function ServerSpecifications({
  title = "Wait, There is More!",
  subtitle = "Every plan includes enterprise-grade hardware and features",
  specs = defaultSpecs,
  className = "",
}: ServerSpecificationsProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-[#c8cbd0] text-lg hidden">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec) => (
            <article
              key={spec.id ?? spec.title}
              className="glass-card p-8 text-center group hover:border-[#39ff14]/50 transition-all"
              aria-label={spec.title}
            >
              <h3 className="text-2xl font-bold mb-3">{spec.title}</h3>
              <p className="text-[#c8cbd0]">{spec.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
