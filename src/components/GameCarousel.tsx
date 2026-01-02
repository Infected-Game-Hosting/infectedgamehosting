import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Parallax,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const GameCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [autoplayDelay, setAutoplayDelay] = useState(3000);
  const progressKeyRef = useRef(0); // bump to restart animation

  const games = [
    {
      name: "Palworld",
      tagline: "Collect cute monster called 'Pals' to fight by your side",
      description: "Unlimited Slots, Storage, and Bandwidth",
      price: "$11.00",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098806/wp13312678-palworld-wallpapers_p5sli4.jpg",
      buttonText: "Start Now",
      buttonLink: "/game/palworld-server-hosting",
    },
    {
      name: "Minecraft",
      tagline: "Ultimate Mod Support & Cross-Platform Gaming",
      description: "Unlimited Slots, Storage, and Bandwidth",
      price: "$11.00",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098809/wp13114937-minecraft-ps4-wallpapers_n13im2.jpg",
      buttonText: "Start Now",
      buttonLink: "/game/minecraft-server-hosting",
    },
    {
      name: "DayZ",
      tagline: "Survive the Apocalypse in a harsh post-soviet landscape",
      description: "Unlimited Slots, Storage, and Bandwidth",
      price: "$11.00",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760098810/wp1886389-dayz-wallpapers_wxpw6v.jpg",
      buttonText: "Start Now",
      buttonLink: "/game/palworld-server-hosting",
    },
    {
      name: "V Rising",
      tagline: "Awaken Your Inner Vampire and build your castle empire",
      description: "Unlimited Slots, Storage, and Bandwidth",
      price: "$11.00",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1760720011/wp11205562-v-rising-wallpapers_zheviw.png",
      buttonText: "Start Now",
      buttonLink: "/game/vrising-server-hosting",
    },
    {
      name: "Enshrouded",
      tagline: "Survive the Shroud and reclaim the kingdom of Embervale",
      description: "Unlimited Slots, Storage, and Bandwidth",
      price: "$11.00",
      image:
        "https://res.cloudinary.com/dpnsseamh/image/upload/v1765953803/wp13688890-enshrouded-wallpapers_vnsum9.png",
      buttonText: "Start Now",
      buttonLink: "/game/enshrouded-server-hosting",
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    // bump key so the progress animation restarts on each slide change
    progressKeyRef.current = (progressKeyRef.current + 1) % 100000;
  };

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
      // bump progress immediately when user clicks
      progressKeyRef.current = (progressKeyRef.current + 1) % 100000;
      // update activeIndex immediately for UI responsiveness
      setActiveIndex(index);
    }
  };

  // after mount, read autoplay delay from swiper params (if available)
  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const s = swiperRef.current?.swiper;
        const delay = s?.params?.autoplay?.delay;
        if (typeof delay === "number" && delay > 0) {
          setAutoplayDelay(delay);
        } else {
          setAutoplayDelay(3000);
        }
      } catch (err) {
        setAutoplayDelay(3000);
      }
    }, 50);

    return () => clearTimeout(t);
  }, []);

  // When activeIndex changes we bump progressKeyRef to restart animation
  useEffect(() => {
    progressKeyRef.current = (progressKeyRef.current + 1) % 100000;
  }, [activeIndex, autoplayDelay]);

  return (
    <section className="relative w-full h-screen bg-[#0b0b0f] overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
  .game-carousel-swiper {
    width: 100%;
    height: 100%;
  }
  
  .game-carousel-swiper .swiper-slide {
    opacity: 0 !important;
    transition: opacity 0.8s ease-in-out;
  }
  
  .game-carousel-swiper .swiper-slide-active {
    opacity: 1 !important;
  }

  .game-tab {
    position: relative;
    overflow: hidden;
    z-index: 0;
  }

  .game-tab .tab-progress {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    transform: translateX(-100%);
    z-index: 0;
    pointer-events: none;
    background: linear-gradient(90deg, #6b21a8 0%, #7c3aed 100%);
  }

  .game-tab .tab-content {
    position: relative;
    z-index: 10;
  }

  @keyframes fillProgress {
    from { transform: translateX(-100%); }
    to   { transform: translateX(0%); }
  }

  .tab-progress.animate {
    animation-name: fillProgress;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  .floating-element {
    animation: float 6s ease-in-out infinite;
  }

  .content-reveal {
    animation: slideUpFade 0.8s ease-out forwards;
  }

  @keyframes slideUpFade {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }
`,
        }}
      />
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
        effect="fade"
        speed={1200}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        parallax={true}
        onSlideChange={handleSlideChange}
        className="game-carousel-swiper"
      >
        {games.map((game, index) => (
          <SwiperSlide key={game.name}>
            <div className="relative w-full h-full">
              {/* Background Image with Parallax */}
              <div className="absolute inset-0" data-swiper-parallax="-23%">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0f] via-[#0b0b0f]/95 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent z-10" />
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover scale-110"
                />
              </div>

              {/* Animated Grid Overlay */}
              <div
                className="absolute inset-0 opacity-10 z-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-16 py-12">
                <div className="flex-1 flex items-center">
                  <div
                    className="w-full max-w-7xl mx-auto"
                    data-swiper-parallax="-100"
                  >
                    <div className="max-w-3xl">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#39ff14]/10 border border-[#39ff14]/30 mb-6 backdrop-blur-sm content-reveal">
                        <Check className="w-3.5 h-3.5 text-[#39ff14]" />
                        <span className="text-xs text-white font-medium">
                          {game.description}
                        </span>
                      </div>

                      {/* Game Name */}
                      <h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 content-reveal"
                        style={{ animationDelay: "0.1s" }}
                      >
                        {game.name}
                      </h1>

                      {/* Server Hosting */}
                      <h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white content-reveal"
                        style={{ animationDelay: "0.2s" }}
                      >
                        Server Hosting
                      </h2>

                      {/* Price Section - Matches Reference Exactly */}
                      <div
                        className="flex items-center gap-6 mb-8 content-reveal"
                        style={{ animationDelay: "0.3s" }}
                      >
                        <div>
                          <p className="text-xs text-[#c8cbd0] mb-1">
                            Starts at
                          </p>
                          <p className="text-5xl sm:text-6xl font-bold text-white">
                            {game.price}
                          </p>
                        </div>
                        <div className="h-16 w-px bg-white/20" />
                        <div className="max-w-md">
                          <p className="text-[#c8cbd0] text-base leading-relaxed">
                            {game.tagline}
                          </p>
                        </div>
                      </div>

                      {/* CTA AS ANCHOR (replaced the button) */}
                      <a
                        href={game.buttonLink || "#"}
                        // target="_blank"
                        // rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#39ff14] to-[#2ee80f] text-black font-bold text-base rounded-lg hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] transition-shadow duration-300 relative overflow-hidden content-reveal focus:outline-none"
                        style={{ animationDelay: "0.4s" }}
                      >
                        {/* main label above the overlay */}
                        <span className="relative z-10">{game.buttonText}</span>

                        {/* overlay is absolute and won't affect layout */}
                        <span
                          aria-hidden
                          className="absolute inset-0 transform translate-x-[-100%] transition-transform duration-700 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02))",
                          }}
                        />
                      </a>
                      {/* end CTA */}
                    </div>
                  </div>
                </div>

                {/* Navigation Tabs - Desktop */}
                <div className="hidden md:block w-full">
                  <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-lg p-2">
                      {games.map((g, idx) => {
                        const isActive = idx === activeIndex;
                        // unique key to remount/ restart animation when progressKey changes
                        const progressKey = `${idx}-${
                          isActive ? progressKeyRef.current : "static"
                        }`;
                        return (
                          <button
                            key={g.name}
                            onClick={() => goToSlide(idx)}
                            className={`game-tab flex-1 px-4 py-3 text-center font-semibold text-sm rounded-md transition-all duration-300 relative overflow-hidden ${
                              isActive
                                ? "text-white"
                                : "text-[#c8cbd0] hover:text-white hover:bg-white/5"
                            }`}
                            aria-pressed={isActive}
                          >
                            {/* Progress element only present on active tab */}
                            {isActive && (
                              <span
                                // remounting by using progressKey ensures animation restarts
                                key={progressKey}
                                className="tab-progress animate"
                                style={{
                                  animationDuration: `${autoplayDelay}ms`,
                                }}
                                aria-hidden
                              />
                            )}

                            {/* Content sits above progress */}
                            <span className="tab-content">{g.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Navigation Tabs - Mobile */}
                <div className="md:hidden w-full">
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between mb-3">
                      <button
                        onClick={() =>
                          goToSlide(
                            activeIndex === 0
                              ? games.length - 1
                              : activeIndex - 1
                          )
                        }
                        className="p-2 text-[#39ff14] hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <div className="flex-1 px-3">
                        <div className="bg-gradient-to-r from-[#6b21a8] to-[#7c3aed] text-white font-semibold text-center py-2.5 px-4 rounded-md">
                          {games[activeIndex].name}
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          goToSlide(
                            activeIndex === games.length - 1
                              ? 0
                              : activeIndex + 1
                          )
                        }
                        className="p-2 text-[#39ff14] hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-1.5">
                      {games.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToSlide(idx)}
                          className={`h-1 rounded-full transition-all duration-500 ${
                            idx === activeIndex
                              ? "bg-[#39ff14] w-8"
                              : "bg-white/30 w-4 hover:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#39ff14] rounded-full opacity-60 floating-element z-10" />
              <div
                className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#39ff14] rounded-full opacity-50 floating-element z-10"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-[#39ff14] rounded-full opacity-40 floating-element z-10"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GameCarousel;
