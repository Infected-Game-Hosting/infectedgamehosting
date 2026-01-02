import { SafeStyle } from "@/components/common/SafeStyle";
import Footer from "@/components/Footer";
import Navbar from "@/components/server-nav";
import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const allGames = [
    {
      name: "Palworld",
      slug: "palworld-server-hosting",
      tagline: "Capture, Build, Survive",
      description:
        "Host your own Palworld server with optimized performance for creature collection and survival",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098806/wp13312678-palworld-wallpapers_p5sli4.jpg",
      gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
      category: "Survival",
    },
    {
      name: "Minecraft Java Edition",
      slug: "minecraft-java-server-hosting",
      tagline: "Ultimate Mod Support",
      description:
        "Full mod and plugin support with optimized Java server performance",
      image:
        // "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098809/wp13114937-minecraft-ps4-wallpapers_n13im2.jpg",
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1765954045/wp7971123-minecraft-java-edition-wallpapers_aspas3.png",
      gradient: "from-green-500/20 via-emerald-500/20 to-lime-500/20",
      category: "Sandbox",
    },
    {
      name: "Minecraft Bedrock Edition",
      slug: "minecraft-bedrock-server-hosting",
      tagline: "Cross-Platform Gaming",
      description:
        "Seamless mobile, console, and PC support for unified gameplay",
      image:
        // "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098809/wp13114937-minecraft-ps4-wallpapers_n13im2.jpg",
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1765954045/wp6222534-minecraft-classic-wallpapers_qjtgka.png",
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      category: "Sandbox",
    },
    {
      name: "DayZ",
      slug: "dayz-server-hosting",
      tagline: "Survive the Apocalypse",
      description:
        "High-performance DayZ servers with custom configs for intense survival gameplay",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098810/wp1886389-dayz-wallpapers_wxpw6v.jpg",
      gradient: "from-red-500/20 via-orange-500/20 to-yellow-500/20",
      category: "Survival",
    },
    {
      name: "V Rising",
      slug: "vrising-server-hosting",
      tagline: "Awaken Your Inner Vampire",
      description:
        "High-performance V Rising servers for building your vampire empire and conquering the night",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760720011/wp11205562-v-rising-wallpapers_zheviw.png",
      gradient: "from-red-600/20 via-purple-600/20 to-black/20",
      category: "Survival",
    },
    {
      name: "Enshrouded",
      slug: "enshrouded-server-hosting",
      tagline: "Reclaim the Kingdom",
      description:
        "Survive the Shroud and build in Embervale with voxel freedom",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1765953709/wp13688849-enshrouded-wallpapers_eiekyz.png",
      gradient: "from-orange-500/20 via-blue-500/20 to-purple-500/20",
    },
    // {
    //   name: "Rust",
    //   slug: "rust-server-hosting",
    //   tagline: "Build, Raid, Dominate",
    //   description:
    //     "Premium Rust server hosting with full control and custom configurations",
    //   image:
    //     "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098810/wp1886389-dayz-wallpapers_wxpw6v.jpg",
    //   gradient: "from-orange-500/20 via-red-500/20 to-brown-500/20",
    //   category: "Survival",
    // },
    // {
    //   name: "ARK: Survival Evolved",
    //   slug: "ark-server-hosting",
    //   tagline: "Tame, Build, Conquer",
    //   description:
    //     "High-performance ARK servers with support for all maps and mods",
    //   image:
    //     "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098810/wp1886389-dayz-wallpapers_wxpw6v.jpg",
    //   gradient: "from-green-600/20 via-blue-600/20 to-teal-600/20",
    //   category: "Survival",
    // },
    // {
    //   name: "Valheim",
    //   slug: "valheim-server-hosting",
    //   tagline: "Viking Survival Saga",
    //   description:
    //     "Dedicated Valheim servers for your Norse adventure with friends",
    //   image:
    //     "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098810/wp1886389-dayz-wallpapers_wxpw6v.jpg",
    //   gradient: "from-blue-700/20 via-gray-600/20 to-slate-700/20",
    //   category: "Survival",
    // },
    // {
    //   name: "7 Days to Die",
    //   slug: "7days-server-hosting",
    //   tagline: "Survive the Horde",
    //   description:
    //     "Optimized servers for zombie survival with full mod support",
    //   image:
    //     "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098810/wp1886389-dayz-wallpapers_wxpw6v.jpg",
    //   gradient: "from-gray-700/20 via-red-700/20 to-black/20",
    //   category: "Survival",
    // },
    // {
    //   name: "Terraria",
    //   slug: "terraria-server-hosting",
    //   tagline: "Dig, Fight, Explore",
    //   description: "Reliable Terraria hosting for your 2D adventure worlds",
    //   image:
    //     "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098809/wp13114937-minecraft-ps4-wallpapers_n13im2.jpg",
    //   gradient: "from-green-500/20 via-blue-500/20 to-purple-500/20",
    //   category: "Sandbox",
    // },
    // {
    //   name: "Project Zomboid",
    //   slug: "projectzomboid-server-hosting",
    //   tagline: "The Ultimate Zombie Survival",
    //   description:
    //     "Dedicated servers for realistic zombie survival RPG gameplay",
    //   image:
    //     "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098810/wp1886389-dayz-wallpapers_wxpw6v.jpg",
    //   gradient: "from-red-800/20 via-gray-800/20 to-black/20",
    //   category: "Survival",
    // },
    // {
    //   name: "Conan Exiles",
    //   slug: "conan-server-hosting",
    //   tagline: "Survive, Build, Dominate",
    //   description: "High-performance servers for your Conan Exiles kingdom",
    //   image:
    //     "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098810/wp1886389-dayz-wallpapers_wxpw6v.jpg",
    //   gradient: "from-yellow-700/20 via-orange-700/20 to-red-700/20",
    //   category: "Survival",
    // },
  ];

  const filteredGames = useMemo(() => {
    if (!searchQuery.trim()) return allGames;

    const query = searchQuery.toLowerCase();
    return allGames.filter(
      (game) =>
        game.name.toLowerCase().includes(query) ||
        game.tagline.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query)
    );
  }, [searchQuery, allGames]);

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

        .search-input {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #39ff14;
          box-shadow: 0 0 20px rgba(57, 255, 20, 0.3);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</SafeStyle>

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Helmet>
          <title>All Games - Server Hosting | InfectedGameHosting</title>
          <meta
            name="description"
            content="Browse all available game server hosting options. Find the perfect server for your favorite games."
          />
          <meta
            property="og:title"
            content="All Games - Server Hosting | InfectedGameHosting"
          />
          <meta
            property="og:description"
            content="Browse all available game server hosting options."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://infectedgamehosting.com/games"
          />
          <meta property="og:image" content="/opengraph-image.png" />
        </Helmet>

        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/20 via-transparent to-purple-500/20"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#39ff14] to-[#2ee80f] bg-clip-text text-transparent">
                  Browse All Games
                </span>
              </h1>
              <p className="text-xl text-[#c8cbd0] mb-8 max-w-3xl mx-auto">
                Explore our complete lineup of game server hosting solutions.
                High-performance, DDoS-protected servers for all your favorite
                games.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for a game..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input w-full px-6 py-4 rounded-xl text-white placeholder-[#c8cbd0] text-lg pr-14"
                  />
                  <svg
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#39ff14]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                {searchQuery && (
                  <div className="mt-4 text-[#c8cbd0] text-sm">
                    Found {filteredGames.length}{" "}
                    {filteredGames.length === 1 ? "game" : "games"}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredGames.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredGames.map((game, index) => (
                  <a
                    key={index}
                    href={`/game/${game.slug}`}
                    className="game-card neon-border rounded-2xl h-96 block group fade-in"
                    style={{
                      animationDelay: `${index * 0.05}s`,
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
                      className={`game-card-content h-full flex flex-col justify-end p-6 bg-gradient-to-t ${game.gradient}`}
                    >
                      <div className="transform transition-transform duration-300 group-hover:translate-y(-4px)">
                        <div className="text-xs text-[#39ff14] font-semibold mb-2 uppercase tracking-wider">
                          {game.category}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#39ff14] transition-colors duration-300">
                          {game.name}
                        </h3>
                        <p className="text-[#39ff14] text-xs font-semibold mb-2 tracking-wider uppercase">
                          {game.tagline}
                        </p>
                        <p className="text-[#c8cbd0] text-sm leading-relaxed mb-3 line-clamp-2">
                          {game.description}
                        </p>
                        <div className="flex items-center text-[#39ff14] font-semibold text-sm group-hover:gap-2 gap-1 transition-all duration-300">
                          <span>View Plans</span>
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
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
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  No Games Found
                </h3>
                <p className="text-[#c8cbd0] text-lg mb-8">
                  We couldn't find any games matching "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#39ff14] to-[#2ee80f] text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all duration-300"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#39ff14]/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Can't Find Your Game?{" "}
              <span className="text-[#39ff14]">Contact Us!</span>
            </h2>
            <p className="text-[#c8cbd0] text-lg mb-8 max-w-2xl mx-auto">
              We're constantly expanding our game hosting options. Reach out to
              our team and let us know what game you'd like to see!
            </p>
            <a
              href="https://billing.infectedgamehosting.com/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#39ff14] to-[#2ee80f] text-black font-bold rounded-xl hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] transition-all duration-300"
            >
              Contact Support
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
