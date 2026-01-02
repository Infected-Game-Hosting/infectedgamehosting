import React from "react";
import { ExternalLink } from "lucide-react";

const TrustpilotSection = () => {
  // Trustpilot rating configuration
  const rating = 4.2; // Change this value between 0.0 - 5.0
  const totalReviews = 6;

  // Star Rating Component
  const StarRating = ({ rating }: { rating: number }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const partialStar = rating - fullStars;

    for (let i = 0; i < 5; i++) {
      const fillPercentage =
        i < fullStars ? 100 : i === fullStars ? partialStar * 100 : 0;

      stars.push(
        <div key={i} className="relative w-8 h-8">
          {/* Background star (gray) */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 24 24"
            fill="#dcdce6"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {/* Foreground star (green) with clip path for partial fill */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 24 24"
            fill="#00b67a"
            style={{
              clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
            }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      );
    }

    return <div className="flex gap-1">{stars}</div>;
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#39ff14]/5 via-transparent to-[#39ff14]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
                Why We Are Rated Great
              </span>
            </h2>
            <p className="text-[#c8cbd0] text-lg leading-relaxed">
              We are known for top-quality game servers, helpful support, high
              reliability, and great value prices. See what our users have to
              say.
            </p>
          </div>

          {/* Right Side - Trustpilot Widget Card */}
          <div className="relative">
            <div className="glass-card p-8 border border-white/10 hover:border-[#39ff14]/30 transition-all duration-300">
              {/* Trustpilot Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 126 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M30.141 11.573h-8.11l-2.506-7.712-2.506 7.712h-8.11l6.564 4.77-2.506 7.712 6.558-4.77 6.564 4.77-2.506-7.712 6.558-4.77z"
                      fill="#00B67A"
                    />
                    <path
                      d="M22.977 19.22l-2.448-1.777-2.506 7.712 4.954-5.935z"
                      fill="#005128"
                    />
                  </svg>
                  <span className="text-white font-semibold text-xl">
                    Trustpilot
                  </span>
                </div>
                <a
                  href="https://www.trustpilot.com/review/infectedgamehosting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#39ff14] hover:text-[#2ee010] transition-colors"
                  aria-label="View our Trustpilot reviews"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Custom Trustpilot Rating Display */}
              <div className="space-y-3">
                {/* Star Rating */}
                <StarRating rating={rating} />

                {/* Score and Reviews */}
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-lg">
                    TrustScore {rating.toFixed(1)}
                  </span>
                  <span className="text-white/60">|</span>
                  <a
                    href="https://www.trustpilot.com/review/infectedgamehosting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#39ff14] transition-colors underline decoration-white/40 hover:decoration-[#39ff14]"
                  >
                    {totalReviews} reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotSection;
