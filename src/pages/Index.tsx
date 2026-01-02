import { useEffect } from "react";
import GameFocusSection from "@/components/GameFocusSection";
import Navbar from "@/components/home-header";
import { initClarity, identifyClarity } from "@/lib/clarity";
import { getOrCreateAnonId } from "@/utils/anaoId";
import GameCarousel from "@/components/GameCarousel";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/common/PromoBanner";
import KeyFeatures from "@/components/KeyFeatures";
import { faqData, features } from "@/lib/data";
import WhyInfectedSection from "@/components/WhySection";
import FAQ from "@/components/common/FAQ";
import TrustpilotSection from "@/components/common/TrustpilotSection";
import SupportSection from "@/components/common/SupportSection";

function Index() {
  useEffect(() => {
    const PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || "u1wsnw13lk";
    initClarity(PROJECT_ID);

    const anonId = getOrCreateAnonId();
    if (anonId) {
      identifyClarity(anonId);
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#0b0b0f] text-white overflow-x-hidden">
        {/* Sticky Header */}
        <Navbar />

        <main className="pt-16">
          {/* Hero Section */}
          <GameCarousel />

          {/* Game Focus Strip */}
          <GameFocusSection />

          {/* NEW: standalone WhyInfectedSection component */}
          <WhyInfectedSection />

          {/* Trustpilot Reviews Section */}
          <TrustpilotSection />

          {/* Key features */}
          <KeyFeatures features={features} />

          {/* Support */}
          <SupportSection />

          {/* FAQ */}
          <FAQ faqs={faqData} />
        </main>

        <Footer />

        <PromoBanner
          code="IGH10FIRST"
          discount={30}
          expiresAt="2025-12-10T12:00:00Z"
          ctaHref="https://billing.infectedgamehosting.com/register.php"
          minPayoutNote=""
        />
      </div>
    </>
  );
}

export default Index;

// import { useEffect, useState } from "react";
// import GameFocusSection from "@/components/GameFocusSection";
// import Navbar from "@/components/home-header";
// import { initClarity, identifyClarity } from "@/lib/clarity";
// import { getOrCreateAnonId } from "@/utils/anaoId";
// import GameCarousel from "@/components/GameCarousel";
// import Footer from "@/components/Footer";
// import PromoBanner from "@/components/common/PromoBanner";
// import KeyFeatures from "@/components/KeyFeatures";
// import { faqData, features } from "@/lib/data";
// import WhyInfectedSection from "@/components/WhySection";
// import FAQ from "@/components/common/FAQ";
// import TrustpilotSection from "@/components/common/TrustpilotSection";
// import SupportSection from "@/components/common/SupportSection";

// function Index() {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;

//     const PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || "u1wsnw13lk";
//     initClarity(PROJECT_ID);

//     const anonId = getOrCreateAnonId();
//     if (anonId) {
//       identifyClarity(anonId);
//     }
//   }, [isMounted]);

//   return (
//     <>
//       <div className="min-h-screen bg-[#0b0b0f] text-white overflow-x-hidden">
//         <Navbar />

//         <main className="pt-16">
//           <GameCarousel />
//           <GameFocusSection />
//           <WhyInfectedSection />
//           <TrustpilotSection />
//           <KeyFeatures features={features} />
//           <SupportSection />
//           <FAQ faqs={faqData} />
//         </main>

//         <Footer />

//         <PromoBanner
//           code="IGH10FIRST"
//           discount={30}
//           expiresAt="2025-12-10T12:00:00Z"
//           ctaHref="https://billing.infectedgamehosting.com/register.php"
//           minPayoutNote=""
//         />
//       </div>
//     </>
//   );
// }

// export default Index;
