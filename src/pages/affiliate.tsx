import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  DollarSign,
  Users,
  TrendingUp,
  Gift,
  Globe,
  Zap,
  Check,
} from "lucide-react";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/navbar/blog-header";
import { SafeStyle } from "@/components/common/SafeStyle";

export default function AffiliatePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "30% One-Time Commission",
      description:
        "Earn 30% of a purchaser's total — paid one time for each customer who purchases through your affiliate link. No earnings cap.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Free Media Library",
      description:
        "Access our collection of banners, graphics, and promotional materials to promote your affiliate link.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description:
        "View real-time statistics, track clicks, conversions, and earnings from your personalized dashboard.",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "No Earnings Cap",
      description:
        "We don't place a limit on the amount you can earn from the affiliate program.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description:
        "Sign up to Infected Game Hosting for free, and activate your affiliate account.",
    },
    {
      number: "2",
      title: "Share Content",
      description:
        "Share content on your page or social media platforms. You can use any media from our media library.",
    },
    {
      number: "3",
      title: "Earn",
      description:
        "When someone purchases through your affiliate link, you earn a one-time 30% commission of their order total — automatically added to your affiliate balance.",
    },
  ];

  const targets = [
    {
      title: "Influencers",
      description:
        "We support influencers on all the major social media platforms, such as TikTok, YouTube, Instagram etc.",
      icon: "📱",
    },
    {
      title: "Content Creators",
      description:
        "We support content creators, streamers and YouTubers who create gaming content.",
      icon: "🎮",
    },
    {
      title: "Online Communities",
      description:
        "We support gamers and online communities, such as Discord servers and gaming clans.",
      icon: "🌐",
    },
  ];

  const faqs = [
    {
      question: "How Does the Affiliate Program Work?",
      answer:
        "Sign up for a free account, activate your affiliate status, and receive a unique referral link. Share this link on your platforms, and earn a one-time 30% commission when people purchase game servers through your link. Track everything in real-time from your dashboard.",
    },
    {
      question: "What Commission Can I Earn?",
      answer:
        "You earn a one-time payment equal to 30% of the purchaser's total for each new customer who completes a purchase via your affiliate link. The exact earnings and status will be visible in your affiliate dashboard.",
    },
    {
      question: "When Do I Get Paid?",
      answer:
        "Commissions have a 30-day maturation period to protect against refunds and chargebacks. Once your balance reaches the $25 minimum payout threshold, you can request a withdrawal. Payments are processed manually within 3-5 business days after approval.",
    },
    {
      question: "How Do I Track My Earnings?",
      answer:
        "Your affiliate dashboard provides real-time statistics including clicks, conversions, pending commissions, available balance, and withdrawal history. You'll have complete visibility into your performance.",
    },
    {
      question: "What Marketing Materials Are Available?",
      answer:
        "We provide a media library with banners, social media graphics, and promotional content. You can also create custom content using your unique affiliate link.",
    },
    {
      question: "Can I Promote on Social Media?",
      answer:
        "Absolutely! You can share your affiliate link on YouTube, TikTok, Instagram, Discord, Twitter, gaming forums, or any platform where you have an audience interested in game hosting.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <SafeStyle>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .neon-glow {
          box-shadow: 0 0 20px rgba(57, 255, 20, 0.3);
        }

        .step-card {
          transition: all 0.3s ease;
        }

        .step-card:hover {
          border-color: rgba(57, 255, 20, 0.5);
          transform: translateY(-4px);
        }

        .benefit-card {
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          border-color: rgba(57, 255, 20, 0.5);
          transform: translateY(-4px);
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
      `}</SafeStyle>

      <Helmet>
        <title>Game Hosting Affiliate Program | InfectedGameHosting</title>
        <meta name="description" content="Game Hosting Affiliate Program." />
        <meta
          property="og:title"
          content="Game Hosting Affiliate Program | InfectedGameHosting "
        />
        <meta
          property="og:description"
          content="Game Hosting Affiliate Program."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://infectedgamehosting.com/affiliate"
        />
        <meta property="og:image" content="/opengraph-image.png" />
      </Helmet>
      {/* Header */}
      <Navbar />

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/20 via-transparent to-purple-500/20" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Become an Affiliate
            </h1>
            <p className="text-xl text-[#c8cbd0] max-w-3xl mx-auto mb-8">
              Join our affiliate program and earn 30% of a purchaser's total,
              paid one time for each customer who buys through your link.
              Payouts begin at $25.
            </p>
            <a
              // href="https://billing.infectedgamehosting.com/register.php"
              href="/affiliate-apply"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#39ff14] to-[#2ee80f] text-black font-bold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:transform hover:-translate-y-1"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#39ff14]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Start Earning in 3 Simple Steps
            </h2>
            <a
              href="/affiliate-apply"
              className="inline-block mt-4 px-6 py-3 bg-[#39ff14] text-black font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(57,255,20,0.6)]"
            >
              Sign Up
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="glass-card p-8 step-card text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#39ff14] flex items-center justify-center">
                  <span className="text-3xl font-bold text-black">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Library CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-[#39ff14] to-purple-500" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Media Library
              </h2>
              <p className="text-[#c8cbd0] text-lg mb-6 max-w-2xl">
                Access our collection of promotional materials including
                banners, social media graphics, and more to help you promote
                your affiliate link effectively.
              </p>
              <a
                href="/affiliate-apply"
                className="inline-block px-6 py-3 bg-[#39ff14] text-black font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(57,255,20,0.6)]"
              >
                View Media Library
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Affiliate Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-8 benefit-card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#39ff14]/10 text-[#39ff14]">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#39ff14]/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Some of Our Affiliates
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {targets.map((target, index) => (
              <div key={index} className="glass-card p-8 text-center">
                <div className="text-5xl mb-6">{target.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{target.title}</h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  {target.description}
                </p>
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
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-[#c8cbd0] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
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
              <div className="text-5xl font-bold text-[#39ff14] mb-2">$25</div>
              <p className="text-[#c8cbd0]">Minimum Payout</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#39ff14] mb-2">30</div>
              <p className="text-[#c8cbd0]">Day Commission Hold</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#39ff14] mb-2">
                Real-Time
              </div>
              <p className="text-[#c8cbd0]">Analytics Tracking</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#39ff14] mb-2">
                Unlimited
              </div>
              <p className="text-[#c8cbd0]">Earning Potential</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-[#c8cbd0] text-lg mb-8">
            Join hundreds of affiliates already earning with Infected Game
            Hosting.
          </p>
          <a
            href="/affiliate-apply"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#39ff14] to-[#2ee80f] text-black font-bold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:transform hover:-translate-y-1"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
