import React from "react";
import { SafeStyle } from "../common/SafeStyle";

export default function MinecraftModal({ isOpen, onClose }) {
  const minecraftVersions = [
    {
      name: "Bedrock Edition",
      slug: "minecraft-bedrock-server-hosting",
      tagline: "Cross-Platform Gaming",
      description:
        "Host Minecraft Bedrock servers with seamless mobile and console support",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760598897/wp7551012-minecraft-bedrock-wallpapers_igysfg.jpg",
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    },
    {
      name: "Java Edition",
      slug: "minecraft-java-server-hosting",
      tagline: "Ultimate Mod Support",
      description:
        "Full mod and plugin support with optimized Java server performance",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760598898/wp7971123-minecraft-java-edition-wallpapers_ojt6w7.png",
      gradient: "from-green-500/20 via-emerald-500/20 to-lime-500/20",
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      <SafeStyle>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modalSlideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-overlay {
          animation: modalFadeIn 0.3s ease-out;
        }
        
        .modal-content {
          animation: modalSlideUp 0.3s ease-out;
        }
        
        .game-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .game-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%);
          transition: opacity 0.4s ease;
          z-index: 1;
        }
        
        .game-card:hover::before {
          opacity: 0.9;
        }
        
        .game-card-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }
        
        .game-card:hover .game-card-bg {
          transform: scale(1.1);
        }
        
        .game-card-content {
          position: relative;
          z-index: 2;
        }
        
        .game-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(57, 255, 20, 0.3);
        }
        
        .neon-border {
          border: 2px solid transparent;
          background: linear-gradient(#0a0a0a, #0a0a0a) padding-box,
                      linear-gradient(135deg, #39ff14, #2ee80f) border-box;
        }
        
        .shine-effect {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.6s;
        }
        
        .game-card:hover .shine-effect {
          left: 100%;
        }
      `}</SafeStyle>

      <div
        className="modal-overlay fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="modal-content max-w-5xl w-full bg-[#0a0a0a] rounded-2xl border-2 border-[#39ff14]/30 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Choose Your Minecraft Edition
              </h2>
              <p className="text-[#c8cbd0]">
                Select the edition that fits your gameplay style
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-[#c8cbd0] hover:text-[#39ff14] transition-colors duration-300 p-2"
              aria-label="Close modal"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {minecraftVersions.map((version, index) => (
              <a
                key={index}
                href={`/game/${version.slug}`}
                className="game-card neon-border rounded-2xl h-80 block group"
              >
                <div
                  className="game-card-bg"
                  style={{
                    backgroundImage: `url(${version.image})`,
                  }}
                />
                <div className="shine-effect" />

                <div
                  className={`game-card-content h-full flex flex-col justify-end p-6 bg-gradient-to-t ${version.gradient}`}
                >
                  <div className="transform transition-transform duration-300 group-hover:translate-y(-4px)">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#39ff14] transition-colors duration-300">
                      {version.name}
                    </h3>
                    <p className="text-[#39ff14] text-sm font-semibold mb-3 tracking-wider uppercase">
                      {version.tagline}
                    </p>
                    <p className="text-[#c8cbd0] text-sm leading-relaxed mb-4">
                      {version.description}
                    </p>
                    <div className="flex items-center text-[#39ff14] font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Select Edition</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center pt-4 border-t border-white/10">
            <a
              href="/game/minecraft-server-hosting"
              className="inline-flex items-center gap-2 text-[#c8cbd0] hover:text-[#39ff14] transition-colors duration-300 text-sm font-medium"
            >
              <span>View All Minecraft Hosting Options</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
