import { SiteFooter } from "@/components/site-footer";
// import { SiteHeader } from "@/components/site-header";
import SiteHeader from "@/components/navbar/blog-header";
import React from "react";
import { Helmet } from "react-helmet-async";
import { SafeStyle } from "@/components/common/SafeStyle";

export default function AboutPage() {
  const values = [
    {
      title: "Enterprise Performance",
      description:
        "We deliver institutional-grade infrastructure that scales with your community, not against it.",
    },
    {
      title: "24/7 Reliability",
      description:
        "Our monitoring systems ensure your servers stay online when it matters most—always.",
    },
    {
      title: "Full Customization",
      description:
        "Complete control over mods, plugins, and configurations without artificial restrictions.",
    },
    {
      title: "Rapid Deployment",
      description:
        "Get your server online in minutes, not hours or days. Speed matters in hosting.",
    },
    {
      title: "Expert Support",
      description:
        "Our team understands gaming servers. Real support from people who know the space.",
    },
    {
      title: "Fair Pricing",
      description:
        "Premium performance shouldn't come with premium complexity or hidden fees.",
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Launch",
      description:
        "Infected Game Hosting founded to solve a critical market gap.",
    },
    {
      year: "Present",
      title: "Growing Community",
      description:
        "Hundreds of servers running Minecraft, Palworld, and more with 99.9% uptime.",
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

        .neon-accent {
          background: linear-gradient(135deg, #39ff14, #2ee80f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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

        .value-card {
          transition: all 0.3s ease;
        }

        .value-card:hover {
          border-color: rgba(57, 255, 20, 0.5);
          transform: translateY(-4px);
        }

        .timeline-item {
          position: relative;
          padding-left: 40px;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #39ff14, rgba(57, 255, 20, 0.2));
        }

        .timeline-dot {
          position: absolute;
          left: -6px;
          top: 0;
          width: 18px;
          height: 18px;
          background: #39ff14;
          border-radius: 50%;
          border: 3px solid #0a0a0a;
        }
      `}</SafeStyle>

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Helmet>
          <title>About Us | Infected Game Hosting</title>
          <meta
            name="description"
            content="Learn about Infected Game Hosting. We provide enterprise-grade game server performance."
          />
          <meta
            property="og:title"
            content="About Us | Infected Game Hosting"
          />
          <meta
            property="og:description"
            content="Learn about Infected Game Hosting. Enterprise-grade game server performance since 2025."
          />
          <meta property="og:type" content="website" />
        </Helmet>

        {/* Navigation Spacer */}
        <SiteHeader />
        <div className="h-16" />

        {/* Hero Section */}
        <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/20 via-transparent to-purple-500/20" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="fade-in-up text-center mb-12">
              <p className="text-[#c8cbd0] text-sm uppercase tracking-widest mb-4">
                Our Story
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Infected Game Hosting
              </h1>
              <p className="text-xl text-[#c8cbd0] max-w-3xl mx-auto">
                Enterprise-grade game server infrastructure for communities that
                demand performance, reliability, and real support.
              </p>
            </div>

            <div className="glass-card p-8 sm:p-12 fade-in-up">
              <p className="text-lg text-[#c8cbd0] leading-relaxed mb-6">
                We identified a fundamental problem in the game hosting market:
                countless underperforming providers delivering limited
                infrastructure at premium prices. Communities were forced to
                choose between affordability and reliability—a false dichotomy
                that shouldn't exist.
              </p>
              <p className="text-lg text-[#c8cbd0] leading-relaxed">
                Infected Game Hosting was founded to eliminate this choice. We
                built infrastructure that combines enterprise-grade performance
                with straightforward pricing and genuine support. No artificial
                limitations. No hidden complexity. Just servers that work.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#39ff14]/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                What We Value
              </h2>
              <p className="text-[#c8cbd0] text-lg max-w-2xl mx-auto">
                Our approach to game server hosting is built on these core
                principles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="glass-card p-8 value-card">
                  <div className="w-3 h-3 rounded-full bg-[#39ff14] mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {value.title}
                  </h3>
                  <p className="text-[#c8cbd0] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Our Journey
              </h2>
              <p className="text-[#c8cbd0] text-lg">
                From concept to community
              </p>
            </div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" />
                  <div>
                    <p className="text-sm text-[#39ff14] font-semibold uppercase tracking-wider mb-2">
                      {item.year}
                    </p>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[#c8cbd0] text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#39ff14]/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#39ff14] mb-2">
                  99.9%
                </div>
                <p className="text-[#c8cbd0]">Uptime Guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#39ff14] mb-2">
                  24/7
                </div>
                <p className="text-[#c8cbd0]">Expert Support</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#39ff14] mb-2">
                  Global
                </div>
                <p className="text-[#c8cbd0]">Infrastructure</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#39ff14] mb-2">
                  Instant
                </div>
                <p className="text-[#c8cbd0]">Deployment</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to experience the difference?
            </h2>
            <p className="text-[#c8cbd0] text-lg mb-8">
              Join communities already hosting with Infected Game Hosting.
            </p>
            <a
              // href="/#pricing"
              href="/games"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#39ff14] to-[#2ee80f] text-black font-bold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:transform hover:-translate-y-1"
            >
              Explore Plans
            </a>
          </div>
        </section>

        {/* Footer */}

        <SiteFooter />
      </div>
    </>
  );
}
