import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { SafeStyle } from "./common/SafeStyle";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SafeStyle>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(57, 255, 20, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(57, 255, 20, 0.6), 0 8px 20px rgba(0, 0, 0, 0.4);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
        }

        @keyframes chevron-bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .scroll-to-top-btn {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          z-index: 50;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(57, 255, 20, 0.3);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: slide-up 0.4s ease-out forwards, glow-pulse 2s ease-in-out infinite;
        }

        .scroll-to-top-btn:hover {
          background: rgba(57, 255, 20, 0.1);
          border-color: rgba(57, 255, 20, 0.5);
          box-shadow: 0 0 30px rgba(57, 255, 20, 0.6), 0 8px 25px rgba(0, 0, 0, 0.5);
          transform: translateY(-4px);
        }

        .scroll-to-top-btn:active {
          transform: translateY(-2px) scale(0.95);
        }

        .scroll-to-top-btn svg {
          color: #39ff14;
          width: 1.25rem;
          height: 1.25rem;
          animation: chevron-bounce 1.5s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .scroll-to-top-btn:hover svg {
          animation: float 0.6s ease-in-out;
        }

        @media (min-width: 768px) {
          .scroll-to-top-btn {
            bottom: 2rem;
            right: 2rem;
          }
        }

        .exit-animation {
          animation: slide-down 0.3s ease-in forwards;
        }
      `}</SafeStyle>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <ChevronUp />
        </button>
      )}
    </>
  );
}
