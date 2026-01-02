import { SafeStyle } from "@/components/common/SafeStyle";
import Navbar from "@/components/navbar/blog-header";
import React from "react";
import { Helmet } from "react-helmet-async";

export default function NotFoundPage() {
  return (
    <>
      <SafeStyle>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(57, 255, 20, 0.5),
                         0 0 40px rgba(57, 255, 20, 0.3);
          }
          50% { 
            text-shadow: 0 0 30px rgba(57, 255, 20, 0.8),
                         0 0 60px rgba(57, 255, 20, 0.5);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .glitch {
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: '404';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch::before {
          animation: glitch1 2s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-2px, -2px);
          opacity: 0.8;
        }

        .glitch::after {
          animation: glitch2 2s infinite;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
          transform: translate(2px, 2px);
          opacity: 0.8;
        }

        @keyframes glitch1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
        }

        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }

        .neon-border-btn {
          border: 2px solid transparent;
          background: linear-gradient(#0a0a0a, #0a0a0a) padding-box,
                      linear-gradient(135deg, #39ff14, #2ee80f) border-box;
          position: relative;
          overflow: hidden;
        }

        .neon-border-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(57, 255, 20, 0.3), transparent);
          transition: left 0.5s;
        }

        .neon-border-btn:hover::before {
          left: 100%;
        }

        .grid-background {
          background-image: 
            linear-gradient(rgba(57, 255, 20, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 255, 20, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
      `}</SafeStyle>

      <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <Helmet>
          <title>404 - Page Not Found | Infected Game Hosting</title>
          <meta
            name="description"
            content="The page you're looking for doesn't exist. Browse our game server hosting options or return home."
          />
          <meta
            property="og:title"
            content="404 - Page Not Found | Infected Game Hosting"
          />
          <meta
            property="og:description"
            content="The page you're looking for doesn't exist. Browse our game server hosting options."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://infectedgamehosting.com/not-found"
          />
          <meta
            property="og:image"
            content="https://infectedgamehosting.com/assets/og-image.png"
          />
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <Navbar />
        {/* Animated Grid Background */}
        <div className="grid-background absolute inset-0 opacity-30" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#39ff14]/5 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Floating Icon */}
          <div className="floating-icon mb-8 inline-block">
            <svg
              className="w-20 h-20 sm:w-24 sm:h-24 text-[#39ff14] opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* 404 Text with Glitch Effect */}
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold mb-6 glitch text-[#39ff14]">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Page Not Found
          </h2>

          <p className="text-[#c8cbd0] text-base sm:text-lg mb-8 max-w-md mx-auto px-4">
            Oops! The page you're looking for seems to have wandered off into
            the void.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <a
              href="/"
              className="neon-border-btn w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-[#39ff14] font-semibold text-sm sm:text-base hover:bg-[#39ff14]/10 transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Home</span>
            </a>

            <a
              href="/games"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-[#c8cbd0] font-semibold text-sm sm:text-base hover:border-[#39ff14]/50 hover:text-[#39ff14] transition-all duration-300 hover:bg-white/10"
            >
              <span>Browse Games</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Additional Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-[#c8cbd0] text-sm mb-4">Need help?</p>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center text-sm">
              <a
                href="mailto:support@infectedgamehosting.com"
                className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors duration-300"
              >
                Contact Support
              </a>
              <span className="text-white/20">•</span>
              <a
                href="/about"
                className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors duration-300"
              >
                About Us
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://panel.infectedgamehosting.com/"
                target="_blank"
                rel="noopener"
                className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors duration-300"
              >
                Panel Login
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#39ff14]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#39ff14]/5 rounded-full blur-3xl" />
      </div>
    </>
  );
}
