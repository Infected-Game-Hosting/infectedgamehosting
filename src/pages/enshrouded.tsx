import FAQ from "@/components/common/FAQ";
import PricingSection from "@/components/common/PricingSection";
import { SafeStyle } from "@/components/common/SafeStyle";
import SupportSection from "@/components/common/SupportSection";
import TrustpilotSection from "@/components/common/TrustpilotSection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/game-details/feature";
import HeroSection from "@/components/game-details/hero-section";
import ServerSpecifications from "@/components/game-details/specifications";

import Navbar from "@/components/server-nav";
import { plansEnshrouded, enshroudedSpec } from "@/lib/data";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function EnshroudedPage() {
  const [activeTab, setActiveTab] = useState("features");

  const features = [
    {
      title: "Instant Setup",
      description:
        "Your Enshrouded server is deployed within minutes of ordering",
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
      description: "Daily backups ensure your Embervale base is always safe",
    },
    {
      title: "NVMe SSD Storage",
      description: "Lightning-fast storage for optimal performance",
    },
    {
      title: "Custom Configurations",
      description: "Full control over server settings and game rules",
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
      question: "What is Enshrouded?",
      answer:
        "Enshrouded is a survival action RPG where you explore the fog-covered kingdom of Embervale, build grand bases with voxel-based building tools, and battle through the deadly Shroud in co-op multiplayer (up to 16 players).",
    },
    {
      question: "Can I customize my Enshrouded server settings?",
      answer:
        "Yes! You have full control over server settings including difficulty, resource rates, Shroud mechanics, player limits, and much more through our control panel.",
    },
    {
      question: "How quickly will my server be set up?",
      answer:
        "Your Enshrouded server will be deployed automatically within 5-10 minutes after payment confirmation.",
    },
    {
      question: "Can I install mods on my Enshrouded server?",
      answer:
        "Currently, Enshrouded has limited mod support as the game is in Early Access. You have full FTP access to install any available mods and custom configurations on your server.",
    },
    {
      question: "Can I migrate from another host?",
      answer:
        "Yes, we offer free migration assistance. Contact support with your current server details and we'll help transfer your world and base data.",
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
          <title>Enshrouded Server Hosting | InfectedGameHosting</title>
          <meta
            name="description"
            content="Premium Enshrouded server hosting for your survival adventure. High-performance dedicated servers with full customization and voxel building support."
          />
          <meta
            property="og:title"
            content="Enshrouded Server Hosting | InfectedGameHosting"
          />
          <meta
            property="og:description"
            content="Premium Enshrouded server hosting for your survival adventure. High-performance dedicated servers with full customization and voxel building support."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://infectedgamehosting.com/game/enshrouded-server-hosting"
          />
          <meta property="og:image" content="/opengraph-image.png" />
        </Helmet>

        <Navbar />

        {/* Hero Section */}
        <HeroSection
          highlight="Enshrouded"
          imageSrc="https://res.cloudinary.com/dpnsseamh/image/upload/v1765953709/wp13688849-enshrouded-wallpapers_eiekyz.png"
          subtitle="Survive the Shroud and build your kingdom in Embervale with our high-performance Enshrouded servers. Explore, craft, and dominate with optimized gameplay and full server control."
        />

        {/* Pricing Section */}
        <PricingSection
          title="Choose Your Enshrouded Plan"
          subtitle="All plans include NVMe/SSD storage, DDoS protection, and 1Gbit unmetered bandwidth."
          stockText="Current stock: Available"
          plans={plansEnshrouded}
        />

        {/* Features Section */}
        <FeaturesSection
          features={features}
          title="Our Enshrouded Hosting"
          subtitle="Everything you need to conquer the Shroud in Enshrouded"
        />

        {/* Server Specifications */}
        <ServerSpecifications specs={enshroudedSpec} />

        {/* Trustpilot Reviews Section */}
        <TrustpilotSection />

        {/* Support */}
        <SupportSection />

        {/* FAQ */}
        <FAQ faqs={faqs} />

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Reclaim{" "}
              <span className="text-[#39ff14]">Embervale?</span>
            </h2>
            <p className="text-[#c8cbd0] text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of Flameborn already conquering the Shroud on our
              servers. Get started in just 5 minutes!
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
