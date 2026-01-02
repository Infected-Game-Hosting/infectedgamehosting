import { useEffect, useState } from "react";
import GameFocusSection from "@/components/GameFocusSection";
import Navbar from "@/components/home-header";
import { initClarity, identifyClarity } from "@/lib/clarity";
import { getOrCreateAnonId } from "@/utils/anaoId";
import GameCarousel from "@/components/GameCarousel";

function Index() {
  useEffect(() => {
    const PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || "u1wsnw13lk";
    initClarity(PROJECT_ID);

    const anonId = getOrCreateAnonId();
    if (anonId) {
      // identifyClarity will call Clarity.identify(...) — Clarity also hashes client-side
      identifyClarity(anonId);
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#0b0b0f] text-white overflow-x-hidden">
        {/* Sticky Header */}
        <Navbar />

        <main className="pt-16">
          <GameCarousel />

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 animated-grid opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 via-transparent to-[#39ff14]/10"></div>

            {/* Floating Elements */}
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#39ff14] rounded-full"
              style={{ animation: "floatY 6s ease-in-out infinite" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#39ff14] rounded-full"
              style={{ animation: "floatY 8s ease-in-out infinite 2s" }}
            ></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#39ff14] rounded-full opacity-50"
              style={{ animation: "floatY 10s ease-in-out infinite 4s" }}
            ></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#c8cbd0] to-[#39ff14] bg-clip-text text-transparent">
                Enterprise-grade game hosting for real players.
              </h1>
              <p className="text-xl sm:text-2xl text-[#c8cbd0] mb-12 max-w-3xl mx-auto leading-relaxed">
                Low latency. NVMe/SSD storage. Always-on DDoS. Discord & WHMCS
                support.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <a
                  href="https://billing.infectedgamehosting.com/cart.php"
                  target="_blank"
                  rel="noopener"
                  className="neon-button text-lg px-8 py-4"
                >
                  Order Server
                </a>
                <a
                  href="https://panel.infectedgamehosting.com/"
                  target="_blank"
                  rel="noopener"
                  className="neon-button-outline text-lg px-8 py-4"
                >
                  Open Panel
                </a>
                <a
                  href="https://discord.gg/9km6nJnXpy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button-outline text-lg px-8 py-4"
                >
                  Join Discord
                </a>
              </div>

              <p className="text-[#c8cbd0] text-sm">
                Plans start at{" "}
                <span className="font-bold text-[#39ff14]">$11.00</span> / month
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <section
            id="features"
            className="py-32 px-4 sm:px-6 lg:px-8 relative"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
                  Built for Performance
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* NVMe/SSD Storage */}
                <div className="glass-card p-8 text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#39ff14] to-[#2ee80f] rounded-xl mb-6 group-hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16v2H4V4zm0 4h16v12H4V8zm2 2v8h12v-8H6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#39ff14]">
                    NVMe/SSD Storage
                  </h3>
                  <p className="text-[#c8cbd0] leading-relaxed">
                    Ultra-fast load times and reliable saves.
                  </p>
                </div>

                {/* Bandwidth */}
                <div className="glass-card p-8 text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#39ff14] to-[#2ee80f] rounded-xl mb-6 group-hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm4 4l2 2c2.76-2.76 7.24-2.76 10 0l2-2c-4.28-4.28-11.72-4.28-16 0zm4 4l2 2 2-2c-1.1-1.1-2.9-1.1-4 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#39ff14]">
                    1Gbit Unmetered
                  </h3>
                  <p className="text-[#c8cbd0] leading-relaxed">
                    Stable, low-latency connectivity.
                  </p>
                </div>

                {/* CPU */}
                <div className="glass-card p-8 text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#39ff14] to-[#2ee80f] rounded-xl mb-6 group-hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 7h4v4H5V7zm6 0h4v4h-4V7zm6 0h4v4h-4V7zM5 13h4v4H5v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#39ff14]">
                    Ryzen-Powered
                  </h3>
                  <p className="text-[#c8cbd0] leading-relaxed">
                    High clock performance for multiplayer.
                  </p>
                </div>

                {/* DDoS Protection */}
                <div className="glass-card p-8 text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#39ff14] to-[#2ee80f] rounded-xl mb-6 group-hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#39ff14]">
                    DDoS Protection
                  </h3>
                  <p className="text-[#c8cbd0] leading-relaxed">
                    Always-on network mitigation.
                  </p>
                </div>

                {/* Discord Support */}
                <div className="glass-card p-8 text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#39ff14] to-[#2ee80f] rounded-xl mb-6 group-hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.120.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#39ff14]">
                    Discord Support
                  </h3>
                  <p className="text-[#c8cbd0] leading-relaxed">
                    Open a ticket, get fast help.
                  </p>
                </div>

                {/* Control Panel */}
                <div className="glass-card p-8 text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#39ff14] to-[#2ee80f] rounded-xl mb-6 group-hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3h18v4H3V3zm0 6h18v2H3V9zm0 4h18v8H3v-8zm2 2v4h14v-4H5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#39ff14]">
                    Simple Panel
                  </h3>
                  <p className="text-[#c8cbd0] leading-relaxed">
                    Start/stop, backups, file manager.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Game Focus Strip */}
          <GameFocusSection />

          {/* Support */}
          <section
            id="support"
            className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#39ff14]/5 via-transparent to-[#39ff14]/10"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
                  Support
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Discord Support */}
                <div className="glass-card p-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#39ff14]">
                    Discord Tickets
                  </h3>
                  <p className="text-[#c8cbd0] mb-6 leading-relaxed">
                    Open a ticket in #support for fastest help.
                  </p>
                  <a
                    href="https://discord.gg/9km6nJnXpy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-button-outline w-full text-center"
                  >
                    Join Discord
                  </a>
                </div>

                {/* WHMCS Support */}
                <div className="glass-card p-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#39ff14]">
                    WHMCS Tickets
                  </h3>
                  <p className="text-[#c8cbd0] mb-6 leading-relaxed">
                    Log in to the Client Area and submit a ticket.
                  </p>
                  <a
                    href="https://billing.infectedgamehosting.com/submitticket.php"
                    target="_blank"
                    rel="noopener"
                    className="neon-button-outline w-full text-center"
                  >
                    Submit WHMCS Ticket
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card p-8 text-center">
                <p className="text-[#c8cbd0]">
                  <span className="text-[#39ff14] font-semibold">
                    Response time:
                  </span>{" "}
                  Under 2 hours peak, under 12 hours off-peak.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[#39ff14]">
                    What is your billing cycle?
                  </h3>
                  <p className="text-[#c8cbd0] leading-relaxed">
                    Monthly billing with automatic renewal. Cancel anytime
                    through WHMCS client area.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[#39ff14]">
                    Do you support mods?
                  </h3>
                  <p className="text-[#c8cbd0] leading-relaxed">
                    Yes, our servers support most popular mods. Higher-tier
                    plans recommended for heavily modded gameplay.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[#39ff14]">
                    Are backups included?
                  </h3>
                  <p className="text-[#c8cbd0] leading-relaxed">
                    Automated daily backups are included with all plans. Manual
                    backups available via control panel.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[#39ff14]">
                    Can I migrate from another host?
                  </h3>
                  <p className="text-[#c8cbd0] leading-relaxed">
                    Yes, we offer free migration assistance. Contact support
                    with your current server details.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[#39ff14]">
                    {/* What is your refund policy? */}
                    Free Trials Available
                  </h3>
                  <p className="text-[#c8cbd0] leading-relaxed">
                    {/* 7-day money-back guarantee for new services. Setup fees are
                  non-refundable. */}
                    Contact us to get started with a 2 day free trial on our
                    Starter Package
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="glass-card border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src="/image.png"
                  alt="Infected Game Hosting Logo"
                  className="w-6 h-6 mr-2"
                />
                <span className="font-bold text-white">
                  Infected Game Hosting
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <a
                  href="/terms"
                  className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors"
                >
                  Terms
                </a>
                <a
                  href="/privacy"
                  className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="mailto:support@infectedgamehosting.com"
                  className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors"
                >
                  Contact
                </a>
                <a
                  href="/about"
                  className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors"
                >
                  About
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-8">
              {/* Social Media Links */}
              <div className="flex justify-center items-center gap-6 mb-6">
                <a
                  href="https://discord.gg/9km6nJnXpy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors"
                  aria-label="Discord"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.120.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/INFECTEDGA38152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/infectedgamehosting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@infectedgamehosting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="https://www.reddit.com/user/Infected_Game_Host/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors"
                  aria-label="Reddit"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                  </svg>
                </a>
              </div>

              <p className="text-[#c8cbd0] text-sm text-center">
                &copy; 2024 Infected Game Hosting. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Index;
