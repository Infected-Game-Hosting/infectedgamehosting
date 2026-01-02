import FAQ from "@/components/common/FAQ";
import PricingSection from "@/components/common/PricingSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/game-details/hero-section";
import ServerSpecifications from "@/components/game-details/specifications";
// import PricingSection from "@/components/PricingSection";
import Navbar from "@/components/server-nav";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import SupportSection from "@/components/common/SupportSection";
import TrustpilotSection from "@/components/common/TrustpilotSection";
import CTASection from "@/components/game-details/cta-section";
import FeaturesSection from "@/components/game-details/feature";
import { SafeStyle } from "@/components/common/SafeStyle";

export default function PalworldPage() {
  const [activeTab, setActiveTab] = useState("features");

  // Use this directly with the PricingSection component from earlier
  const plans = [
    // {
    //   name: "Free Trial",
    //   ram: "4GB RAM",
    //   cpu: "1 vCPU",
    //   setup: "No setup fee",
    //   priceMonthly: 0, // numeric required by the PricingSection
    //   originalPriceLabel: "FREE", // keep the original string if you want to show it elsewhere
    //   description: "Try our service for 48 hours risk-free.",
    //   link: "https://billing.infectedgamehosting.com/index.php?rp=/store/palworld-server-hosting/free-trial",
    //   players: "48-Hour Trial",
    //   isFree: true,
    //   features: ["48-hour free trial", "Basic support"],
    // },
    {
      name: "Free Trial",
      ram: "4GB RAM",
      cpu: "1 vCPU",
      setup: "No setup fee",
      priceMonthly: 0, // numeric required by the PricingSection
      originalPriceLabel: "FREE", // keep the original string if you want to show it elsewhere
      description: "Try our service for free.",
      link: "https://billing.infectedgamehosting.com/index.php?rp=/store/palworld-server-hosting/free-trial",
      players: "",
      isFree: true,
      features: ["Basic support"],
    },
    {
      name: "Starter",
      ram: "4GB RAM",
      cpu: "1 vCPU",
      setup: "$3.50 setup fee",
      priceMonthly: 11.0,
      description: "Perfect for 1–2 players (unmodded).",
      link: "https://billing.infectedgamehosting.com/index.php?rp=/store/palworld-server-hosting/starter",
      players: "1-2 Players",
      features: ["Unlimited Storage", "Unlimited Bandwidth"],
    },
    {
      name: "Standard",
      ram: "12GB RAM",
      cpu: "3 vCPU",
      setup: "$3.50 setup fee",
      priceMonthly: 33.0,
      description: "Great for 8–10 players (light modding).",
      link: "https://billing.infectedgamehosting.com/index.php?rp=/store/palworld-server-hosting/palworld-8-gb-2-core-linux",
      popular: true,
      players: "8-10 Players",
      features: [
        "Unlimited Storage",
        "Unlimited Bandwidth",
        "Supports Modding",
      ],
    },
    {
      name: "Ultra",
      ram: "20GB RAM",
      cpu: "5 vCPU",
      setup: "$3.50 setup fee",
      priceMonthly: 55.0,
      description: "Best for 10+ players (moderate modding).",
      link: "https://billing.infectedgamehosting.com/index.php?rp=/store/palworld-server-hosting/20gb-ram-5vcpu",
      players: "10+ Players",
      features: ["Priority Support", "DDoS Protection"],
    },
    {
      name: "Superior",
      ram: "28GB RAM",
      cpu: "7 vCPU",
      setup: "$3.50 setup fee",
      priceMonthly: 77.0,
      description: "Ultimate performance for large communities.",
      link: "https://billing.infectedgamehosting.com/index.php?rp=/store/palworld-server-hosting/palworld-server-presets-superior",
      players: "15+ Players",
      features: ["Dedicated IP (optional)", "Priority Support"],
    },
    {
      name: "Extreme",
      ram: "36GB RAM",
      cpu: "9 vCPU",
      setup: "$3.50 setup fee",
      priceMonthly: 99.0,
      description: "Ideal for massive servers (heavy modpacks).",
      link: "https://billing.infectedgamehosting.com/index.php?rp=/store/palworld-server-hosting/extreme",
      players: "20+ Players",
      features: ["Dedicated Resources", "SLA / Priority Ops"],
    },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Instant Setup",
      description:
        "Your Palworld server is deployed within minutes of ordering",
    },
    {
      icon: "🛡️",
      title: "DDoS Protection",
      description: "Enterprise-grade protection keeps your server online 24/7",
    },
    {
      icon: "🔧",
      title: "Full Control Panel",
      description: "Easy-to-use interface for complete server management",
    },
    {
      icon: "💾",
      title: "Automatic Backups",
      description: "Daily backups ensure your world is always safe",
    },
    {
      icon: "🚀",
      title: "NVMe SSD Storage",
      description: "Lightning-fast storage for optimal performance",
    },
    {
      icon: "🌐",
      title: "Global Locations",
      description: "Choose from multiple datacenter locations worldwide",
    },
    {
      icon: "🔄",
      title: "One-Click Updates",
      description: "Keep your server up-to-date with automatic game updates",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Expert support team available around the clock",
    },
  ];

  const faqs = [
    {
      question: "How many players can join my Palworld server?",
      answer:
        "Player capacity depends on your plan. Our Starter plan supports 1-2 players, while our Extreme plan can handle 20+ players with mods.",
    },
    {
      question: "Can I install mods on my Palworld server?",
      answer:
        "Yes! All our plans support mods. Higher-tier plans are optimized for running multiple mods simultaneously.",
    },
    {
      question: "How quickly will my server be set up?",
      answer:
        "Your Palworld server will be deployed automatically within 5-10 minutes after payment confirmation.",
    },
    {
      question: "What if I need to upgrade my plan?",
      answer:
        "You can upgrade your plan at any time through our billing panel. Upgrades are instant with no downtime.",
    },
    {
      question: "Can I migrate from another host?",
      answer:
        "Yes, we offer free migration assistance. Contact support with your current server details.",
    },
  ];

  return (
    <>
      <SafeStyle>{`
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

        .tab-button {
          position: relative;
          padding: 12px 24px;
          transition: all 0.3s ease;
        }

        .tab-button.active {
          color: #39ff14;
        }

        .tab-button.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #39ff14, #2ee80f);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .parallax-bg {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }
      `}</SafeStyle>

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        {/* METADATA */}
        <Helmet>
          <title>Palworld Game | InfectedGameHosting</title>
          <meta name="description" content="Palworld Game." />
          <meta
            property="og:title"
            content="Palworld Game | InfectedGameHosting "
          />
          <meta property="og:description" content="Palworld Game." />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://infectedgamehosting.com/terms"
          />
          <meta property="og:image" content="/opengraph-image.png" />
        </Helmet>
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection highlight="Palworld" />

        {/* Pricing Section */}
        <PricingSection
          plans={plans}
          title="Choose Your Plan"
          subtitle="All plans include NVMe/SSD storage, DDoS protection, and 1Gbit unmetered bandwidth."
          stockText="Current stock: Available"
        />

        {/* Features Section */}

        <FeaturesSection features={features} />
        {/* Server Specifications */}
        <ServerSpecifications />

        {/* Trustpilot Reviews Section */}
        <TrustpilotSection />

        {/* Support */}
        <SupportSection />

        {/* FAQ */}
        <FAQ faqs={faqs} />

        {/* CTA Section */}
        <CTASection />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
