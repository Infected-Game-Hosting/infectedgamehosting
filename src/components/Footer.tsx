import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-6 lg:gap-8 mb-8 text-center md:text-left">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
              Infected Game Hosting
            </h3>
            <p className="text-[#c8cbd0] text-sm max-w-xs">
              Premium game server hosting with unmatched performance and
              support.
            </p>
          </div>

          {/* Popular Games */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-4 text-white">Popular Games</h4>
            <ul className="space-y-2 text-[#c8cbd0] text-sm">
              <li>
                <a
                  href="/game/palworld-server-hosting"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  Palworld
                </a>
              </li>
              <li>
                <a
                  href="/game/minecraft-server-hosting"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  Minecraft
                </a>
              </li>
              <li>
                <a
                  href="/game/dayz-server-hosting"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  DayZ
                </a>
              </li>
              <li>
                <a
                  href="/game/vrising-server-hosting"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  V Rising
                </a>
              </li>
              <li>
                <a
                  href="/game/enshrouded-server-hosting"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  Enshrouded
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-[#c8cbd0] text-sm">
              <li>
                <a
                  href="/about"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  Blog
                </a>
              </li>
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
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Other  */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-4 text-white">Other</h4>
            <ul className="space-y-2 text-[#c8cbd0] text-sm">
              <li>
                <a
                  href="https://billing.infectedgamehosting.com/"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  Affiliate
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-4 text-white">Connect</h4>
            <ul className="space-y-2 text-[#c8cbd0] text-sm">
              <li>
                <a href="#" className="hover:text-[#39ff14] transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#39ff14] transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://billing.infectedgamehosting.com/"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#39ff14] transition-colors"
                >
                  Client Area
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-[#c8cbd0] text-sm">
          <p>&copy; 2025 Infected Game Hosting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
