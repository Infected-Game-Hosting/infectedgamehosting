import React from "react";
import { SafeStyle } from "./common/SafeStyle";

export default function MinecraftEditionsSection() {
  const editions = [
    {
      name: "Java Edition",
      slug: "minecraft-java-server-hosting",
      tagline: "Ultimate Mod Support",
      description:
        "Full mod and plugin support with optimized Java server performance for PC players",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760598898/wp7971123-minecraft-java-edition-wallpapers_ojt6w7.png",
      gradient: "from-green-500/20 via-emerald-500/20 to-lime-500/20",
    },
    {
      name: "Bedrock Edition",
      slug: "minecraft-bedrock-server-hosting",
      tagline: "Cross-Platform Gaming",
      description:
        "Seamless mobile, console, and PC support for unified gameplay across all devices",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760598897/wp7551012-minecraft-bedrock-wallpapers_igysfg.jpg",
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    },
  ];

  return (
    <>
      <SafeStyle>{`
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#39ff14]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#39ff14] to-white bg-clip-text text-transparent">
              Choose Your Minecraft Edition
            </h2>
            <p className="text-[#c8cbd0] text-lg max-w-2xl mx-auto">
              Select the edition that best fits your gameplay style and platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {editions.map((edition, index) => (
              <a
                key={index}
                href={`/game/${edition.slug}`}
                className="game-card neon-border rounded-2xl h-96 block group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  className="game-card-bg"
                  style={{
                    backgroundImage: `url(${edition.image})`,
                  }}
                />
                <div className="shine-effect" />

                <div
                  className={`game-card-content h-full flex flex-col justify-end p-8 bg-gradient-to-t ${edition.gradient}`}
                >
                  <div className="transform transition-transform duration-300 group-hover:translate-y(-4px)">
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#39ff14] transition-colors duration-300">
                      {edition.name}
                    </h3>
                    <p className="text-[#39ff14] text-sm font-semibold mb-3 tracking-wider uppercase">
                      {edition.tagline}
                    </p>
                    <p className="text-[#c8cbd0] text-sm leading-relaxed mb-4">
                      {edition.description}
                    </p>
                    <div className="flex items-center text-[#39ff14] font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>View Plans</span>
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
        </div>
      </section>
    </>
  );
}
