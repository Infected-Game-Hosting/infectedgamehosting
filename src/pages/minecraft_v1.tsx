import Navbar from "@/components/server-nav";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function MinecraftPage() {
  const [activeTab, setActiveTab] = useState("features");

  const plans = [
    {
      name: "Starter",
      ram: "4GB RAM",
      cpu: "1 vCPU",
      setup: "$3.50 setup fee",
      price: "$11.00",
      description: "Perfect for 1–2 players (vanilla).",
      link: "https://billing.infectedgamehosting.com/cart.php?a=add&pid=1",
      players: "1-2 Players",
    },
    {
      name: "Standard",
      ram: "12GB RAM",
      cpu: "3 vCPU",
      setup: "$3.50 setup fee",
      price: "$33.00",
      description: "Great for 8–10 players (light plugins).",
      link: "https://billing.infectedgamehosting.com/cart.php?a=add&pid=2",
      popular: true,
      players: "8-10 Players",
    },
    {
      name: "Ultra",
      ram: "20GB RAM",
      cpu: "5 vCPU",
      setup: "$3.50 setup fee",
      price: "$55.00",
      description: "Best for 10+ players (moderate plugins).",
      link: "https://billing.infectedgamehosting.com/cart.php?a=add&pid=3",
      players: "10+ Players",
    },
    {
      name: "Superior",
      ram: "28GB RAM",
      cpu: "7 vCPU",
      setup: "$3.50 setup fee",
      price: "$77.00",
      description: "Ultimate performance for large communities.",
      link: "https://billing.infectedgamehosting.com/cart.php?a=add&pid=4",
      players: "15+ Players",
    },
    {
      name: "Extreme",
      ram: "36GB RAM",
      cpu: "9 vCPU",
      setup: "$3.50 setup fee",
      price: "$99.00",
      description: "Ideal for massive servers (heavy modpacks).",
      link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-linux/extreme",
      players: "20+ Players",
    },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Instant Setup",
      description:
        "Your Minecraft server is deployed within minutes of ordering",
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
      q: "How many players can join my Minecraft server?",
      a: "Player capacity depends on your plan. Our Starter plan supports 1-2 players, while our Extreme plan can handle 20+ players with plugins.",
    },
    {
      q: "Can I install plugins on my Minecraft server?",
      a: "Yes! All our plans support plugins and mods. Higher-tier plans are optimized for running multiple plugins simultaneously.",
    },
    {
      q: "How quickly will my server be set up?",
      a: "Your Minecraft server will be deployed automatically within 5-10 minutes after payment confirmation.",
    },
    {
      q: "What if I need to upgrade my plan?",
      a: "You can upgrade your plan at any time through our billing panel. Upgrades are instant with no downtime.",
    },
    {
      q: "Can I migrate from another host?",
      a: "Yes, we offer free migration assistance. Contact support with your current server details.",
    },
  ];

  return (
    <>
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
      `}</style>

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        {/* METADATA */}
        <Helmet>
          <title>Minecraft Game | InfectedGameHosting</title>
          <meta name="description" content="Minecraft Game." />
          <meta
            property="og:title"
            content="Minecraft Game | InfectedGameHosting "
          />
          <meta property="og:description" content="Minecraft Game." />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://infectedgamehosting.com/game/minecraft"
          />
          <meta property="og:image" content="/opengraph-image.png" />
        </Helmet>
        {/* Navigation */}
        {/* <nav className="fixed top-0 w-full z-50 glass-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent"
              >
                Infected Game Hosting
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="hover:text-[#39ff14] transition-colors">
                  Home
                </a>
                <a
                  href="#pricing"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#features"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  Features
                </a>
                <a
                  href="/terms"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  Terms
                </a>
                <a
                  href="/privacy"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  Privacy
                </a>
              </div>
              <a
                href="https://billing.infectedgamehosting.com/"
                className="neon-button text-sm"
              >
                Client Area
              </a>
            </div>
          </div>
        </nav> */}
        <Navbar />
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/20 via-transparent to-purple-500/20"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {/* Premium{" "} */}
                  <span className="bg-gradient-to-r from-[#39ff14] to-[#2ee80f] bg-clip-text text-transparent">
                    Minecraft
                  </span>{" "}
                  Hosting
                </h1>
                <p className="text-xl text-[#c8cbd0] mb-8 leading-relaxed">
                  Experience seamless Minecraft gameplay with our
                  high-performance dedicated servers. Optimized for the ultimate
                  building and adventure experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#pricing" className="neon-button text-lg px-8 py-4">
                    View Plans
                  </a>
                  <a
                    href="#features"
                    className="glass-card px-8 py-4 hover:border-[#39ff14]/50 transition-all"
                  >
                    Learn More
                  </a>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#39ff14]">
                      99.9%
                    </div>
                    <div className="text-sm text-[#c8cbd0] mt-1">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#39ff14]">
                      24/7
                    </div>
                    <div className="text-sm text-[#c8cbd0] mt-1">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#39ff14]">
                      5min
                    </div>
                    <div className="text-sm text-[#c8cbd0] mt-1">Setup</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="glass-card p-8 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/assets/minecraft.jpg"
                    alt="Minecraft Gaming"
                    className="rounded-lg w-full shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 glass-card p-4">
                    <div className="text-2xl font-bold text-[#39ff14]">
                      Starting at $11/mo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#39ff14]/5 to-transparent"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Why Choose{" "}
                <span className="text-[#39ff14]">Our Minecraft Hosting?</span>
              </h2>
              <p className="text-[#c8cbd0] text-lg max-w-2xl mx-auto">
                Everything you need for the ultimate Minecraft server experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:border-[#39ff14]/50 transition-all duration-300 hover:transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* <div className="text-4xl mb-4">{feature.icon}</div> */}
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[#c8cbd0] text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Server Specifications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                {/* <span className="text-[#39ff14]">Premium</span> */}
                Server Specifications
              </h2>
              <p className="text-[#c8cbd0] text-lg">
                Every plan includes enterprise-grade hardware and features
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 text-center group hover:border-[#39ff14]/50 transition-all">
                {/* <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  💾
                </div> */}
                <h3 className="text-2xl font-bold mb-3">NVMe SSD Storage</h3>
                <p className="text-[#c8cbd0]">
                  Ultra-fast NVMe drives for instant world loading and lag-free
                  gameplay
                </p>
              </div>

              <div className="glass-card p-8 text-center group hover:border-[#39ff14]/50 transition-all">
                {/* <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  🌐
                </div> */}
                <h3 className="text-2xl font-bold mb-3">1Gbit Network</h3>
                <p className="text-[#c8cbd0]">
                  Unmetered bandwidth on 1Gbit connections for smooth
                  multiplayer
                </p>
              </div>

              <div className="glass-card p-8 text-center group hover:border-[#39ff14]/50 transition-all">
                {/* <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  🔒
                </div> */}
                <h3 className="text-2xl font-bold mb-3">DDoS Protection</h3>
                <p className="text-[#c8cbd0]">
                  Advanced protection against attacks keeps your server online
                </p>
              </div>

              <div className="glass-card p-8 text-center group hover:border-[#39ff14]/50 transition-all">
                {/* <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  🖥️
                </div> */}
                <h3 className="text-2xl font-bold mb-3">Ryzen Processors</h3>
                <p className="text-[#c8cbd0]">
                  Latest AMD Ryzen CPUs for maximum performance
                </p>
              </div>

              <div className="glass-card p-8 text-center group hover:border-[#39ff14]/50 transition-all">
                {/* <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  🔄
                </div> */}
                <h3 className="text-2xl font-bold mb-3">Auto Backups</h3>
                <p className="text-[#c8cbd0]">
                  Daily automated backups with one-click restore
                </p>
              </div>

              <div className="glass-card p-8 text-center group hover:border-[#39ff14]/50 transition-all">
                {/* <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  ⚙️
                </div> */}
                <h3 className="text-2xl font-bold mb-3">Full Control</h3>
                <p className="text-[#c8cbd0]">
                  Complete FTP, file manager, and console access
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#39ff14]/5 via-transparent to-[#39ff14]/5"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
                Choose Your Plan
              </h2>
              <p className="text-[#c8cbd0] text-lg mb-4">
                All plans include NVMe/SSD storage, DDoS protection, and 1Gbit
                unmetered bandwidth.
              </p>
              <p className="text-[#c8cbd0] text-sm">Current stock: Available</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <div key={index} className="flex">
                  <div
                    className={`glass-card p-8 text-center group hover:scale-105 transition-transform duration-300 w-full flex flex-col ${
                      plan.popular ? "relative border-[#39ff14]/50" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-[#39ff14] to-[#2ee80f] text-black font-bold px-6 py-2 rounded-full text-sm shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                          Popular
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col flex-grow">
                      <h3
                        className={`text-2xl font-bold mb-6 text-white ${
                          plan.popular ? "mt-4" : ""
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <div className="text-[#c8cbd0] mb-2">
                        {plan.ram} / {plan.cpu}
                      </div>
                      <div className="text-[#c8cbd0] mb-6">
                        Setup: {plan.setup}
                      </div>
                      <div className="text-4xl font-bold text-[#39ff14] mb-6">
                        <span className="font-bold">{plan.price}</span>
                        <span className="text-lg text-[#c8cbd0]"> / month</span>
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

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="text-[#39ff14]">Questions</span>
              </h2>
              <p className="text-[#c8cbd0] text-lg">
                Everything you need to know about our Minecraft hosting
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:border-[#39ff14]/50 transition-all"
                >
                  <h3 className="text-xl font-bold mb-3 text-white">{faq.q}</h3>
                  <p className="text-[#c8cbd0] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#39ff14]/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-[#39ff14]">Minecraft Adventure?</span>
            </h2>
            <p className="text-[#c8cbd0] text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of players already hosting their Minecraft servers
              with us. Get started in just 5 minutes!
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
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
                  Infected Game Hosting
                </h3>
                <p className="text-[#c8cbd0] text-sm">
                  Premium game server hosting with unmatched performance and
                  support.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4">Games</h4>
                <ul className="space-y-2 text-[#c8cbd0] text-sm">
                  <li>
                    <a
                      href="/game/palworld"
                      className="hover:text-[#39ff14] transition-colors"
                    >
                      Palworld
                    </a>
                  </li>
                  <li>
                    <a
                      href="/game/minecraft"
                      className="hover:text-[#39ff14] transition-colors"
                    >
                      Minecraft
                    </a>
                  </li>
                  <li>
                    <a
                      href="/game/dayz"
                      className="hover:text-[#39ff14] transition-colors"
                    >
                      DayZ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-[#c8cbd0] text-sm">
                  <li>
                    <a
                      href="/terms"
                      className="hover:text-[#39ff14] transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="hover:text-[#39ff14] transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://billing.infectedgamehosting.com/"
                      className="hover:text-[#39ff14] transition-colors"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Connect</h4>
                <ul className="space-y-2 text-[#c8cbd0] text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#39ff14] transition-colors"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#39ff14] transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://billing.infectedgamehosting.com/"
                      className="hover:text-[#39ff14] transition-colors"
                    >
                      Client Area
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 text-center text-[#c8cbd0] text-sm">
              <p>&copy; 2025 Infected Game Hosting. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
