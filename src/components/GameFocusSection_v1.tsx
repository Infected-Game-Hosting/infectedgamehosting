import React, { useState } from "react";
import MinecraftModal from "./modals/MinecraftModal";

export default function GameFocusSection() {
  const [isMinecraftModalOpen, setIsMinecraftModalOpen] = useState(false);

  const games = [
    {
      name: "Palworld",
      slug: "palworld-server-hosting",
      tagline: "Capture, Build, Survive",
      description: "Host your own Palworld server with optimized performance",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098806/wp13312678-palworld-wallpapers_p5sli4.jpg",
      gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    },
    {
      name: "Minecraft",
      slug: "minecraft-server-hosting",
      tagline: "Build, Explore, Create",
      description: "Minecraft hosting with full mod support",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098809/wp13114937-minecraft-ps4-wallpapers_n13im2.jpg",
      gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
      isModal: true,
    },
    {
      name: "DayZ",
      slug: "palworld",
      tagline: "Survive the Apocalypse",
      description: "High-performance DayZ servers with custom configs",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098810/wp1886389-dayz-wallpapers_wxpw6v.jpg",
      gradient: "from-red-500/20 via-orange-500/20 to-yellow-500/20",
    },
  ];

  const handleGameClick = (e, game) => {
    if (game.isModal) {
      e.preventDefault();
      setIsMinecraftModalOpen(true);
    }
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(57, 255, 20, 0.2); }
          50% { box-shadow: 0 0 40px rgba(57, 255, 20, 0.4); }
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
      `}</style>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#39ff14]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#39ff14] to-white bg-clip-text text-transparent">
              Optimized for Your Favorite Games
            </h2>
            <p className="text-[#c8cbd0] text-lg max-w-2xl mx-auto">
              Experience top-tier performance with our specialized game server
              hosting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <a
                key={index}
                href={game.isModal ? "#" : `/game/${game.slug}`}
                onClick={(e) => handleGameClick(e, game)}
                className="game-card neon-border rounded-2xl h-96 block group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  className="game-card-bg"
                  style={{
                    backgroundImage: `url(${game.image})`,
                  }}
                />
                <div className="shine-effect" />

                <div
                  className={`game-card-content h-full flex flex-col justify-end p-8 bg-gradient-to-t ${game.gradient}`}
                >
                  <div className="transform transition-transform duration-300 group-hover:translate-y(-4px)">
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#39ff14] transition-colors duration-300">
                      {game.name}
                    </h3>
                    <p className="text-[#39ff14] text-sm font-semibold mb-3 tracking-wider uppercase">
                      {game.tagline}
                    </p>
                    <p className="text-[#c8cbd0] text-sm leading-relaxed mb-4">
                      {game.description}
                    </p>
                    <div className="flex items-center text-[#39ff14] font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Learn More</span>
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

          {/* Stats Bar */}
          <div className="mt-16 grid-cols-2 md:grid-cols-4 gap-6 hidden">
            {[
              { label: "Active Servers", value: "500+" },
              { label: "Uptime", value: "99.9%" },
              { label: "Players Hosted", value: "10K+" },
              { label: "DDoS Protection", value: "24/7" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#39ff14]/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#39ff14] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#c8cbd0] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MinecraftModal
        isOpen={isMinecraftModalOpen}
        onClose={() => setIsMinecraftModalOpen(false)}
      />
    </>
  );
}
