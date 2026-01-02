import FAQ from "@/components/common/FAQ";
import { SafeStyle } from "@/components/common/SafeStyle";
import SupportSection from "@/components/common/SupportSection";
import TrustpilotSection from "@/components/common/TrustpilotSection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/game-details/feature";
import HeroSection from "@/components/game-details/hero-section";
import ServerSpecifications from "@/components/game-details/specifications";
import MinecraftEditionsSection from "@/components/MinecraftEditingSection";
import Navbar from "@/components/server-nav";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function MinecraftPage() {
  const [activeTab, setActiveTab] = useState("features");

  const features = [
    {
      title: "Instant Setup",
      description:
        "Your Minecraft server is deployed within minutes of ordering",
    },
    {
      title: "DDoS Protection",
      description: "Enterprise-grade protection keeps your server online 24/7",
    },
    {
      title: "Full Control Panel",
      description: "Easy-to-use interface for complete server management",
    },
    {
      title: "Automatic Backups",
      description: "Daily backups ensure your world is always safe",
    },
    {
      title: "NVMe SSD Storage",
      description: "Lightning-fast storage for optimal performance",
    },
    {
      title: "Cross-Platform Play",
      description: "Support for mobile, console, and Windows 10 players",
    },
    {
      title: "One-Click Updates",
      description: "Keep your server up-to-date with automatic game updates",
    },
    {
      title: "24/7 Support",
      description: "Expert support team available around the clock",
    },
  ];

  const faqs = [
    {
      question: "How many players can join my Minecraft server?",
      answer:
        "Player capacity depends on your plan. Our Starter plan supports 1-2 players, while our Extreme plan can handle 20+ players with plugins.",
    },
    {
      question: "Can I install plugins on my Minecraft server?",
      answer:
        "Yes! All our plans support plugins and mods. Higher-tier plans are optimized for running multiple plugins simultaneously.",
    },
    {
      question: "How quickly will my server be set up?",
      answer:
        "Your Minecraft server will be deployed automatically within 5-10 minutes after payment confirmation.",
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
        <Helmet>
          <title>Minecraft Hosting | InfectedGameHosting</title>
          <meta
            name="description"
            content=" Minecraft  server hosting with cross-platform support for mobile, console, and PC."
          />
          <meta
            property="og:title"
            content="Minecraft  Hosting | InfectedGameHosting"
          />
          <meta
            property="og:description"
            content=" Minecraft  server hosting with cross-platform support for mobile, console, and PC."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://infectedgamehosting.com/game/minecraft-server-hosting"
          />
          <meta property="og:image" content="/opengraph-image.png" />
        </Helmet>

        <Navbar />

        {/* Hero Section */}
        <HeroSection
          highlight="Minecraft"
          imageSrc="/assets/minecraft.jpg"
          subtitle=" Unite players across all platforms with our high-performance
                  servers. Perfect for mobile, console, and PC cross-play."
        />

        {/* Listing Section */}
        <MinecraftEditionsSection />

        {/* Features Section */}
        <FeaturesSection
          features={features}
          title=" Minecraft Server Hosting"
          subtitle="Everything you need for seamless cross-platform Minecraft
                gameplay"
        />

        {/* Server Specifications */}
        <ServerSpecifications />

        {/* Trustpilot Reviews Section */}
        <TrustpilotSection />

        {/* Support */}
        <SupportSection />

        {/* FAQ */}
        <FAQ faqs={faqs} />

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#39ff14]/10 to-blue-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Connect{" "}
              <span className="text-[#39ff14]">All Your Players?</span>
            </h2>
            <p className="text-[#c8cbd0] text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of cross-platform Minecraft communities already
              hosted with us. Get started in just 5 minutes!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#pricing" className="neon-button text-lg px-8 py-4">
                Choose Your Plan
              </a>
              <a
                href="https://billing.infectedgamehosting.com/"
                className="glass-card px-8 py-4 hover:border-[#39ff14]/50 transition-all"
              >
                Contact Support
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
