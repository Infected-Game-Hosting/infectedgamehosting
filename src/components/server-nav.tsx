import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const gamesItems = [
    { title: "Minecraft", href: "/game/minecraft-server-hosting" },
    { title: "Palworld", href: "/game/palworld-server-hosting" },
    { title: "VRising", href: "/game/vrising-server-hosting" },
  ];

  const otherItems = [
    // {
    //   title: "Web Hosting",
    //   href: "/web-hosting",
    //   icon: "💾",
    //   description: "Great value and feature rich.",
    // },
    // {
    //   title: "Domains",
    //   href: "/domains",
    //   icon: "🌐",
    //   description: "Get a free domain with any plan.",
    // },
    {
      title: "Become an Affiliate",
      href: "/affiliate",
      icon: "👥",
      description: "Earn 30% on every sale made.",
    },
    {
      title: "Knowledge Base",
      href: "https://guides.infectedgamehosting.com/",
      icon: "📚",
      description: "Get detailed clarifications.",
    },
  ];

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
  .games-dropdown-item {
    transition: all 0.2s ease;
    position: relative;
  }

  .games-dropdown-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 0;
    background: #39ff14;
    transition: height 0.3s ease;
  }

  .games-dropdown-item:hover::before {
    height: 16px;
  }

  .games-dropdown-item:hover {
    color: #39ff14;
    padding-left: 8px;
  }

  .other-dropdown-item {
    transition: all 0.3s ease;
    border-radius: 8px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.02);
  }

  .other-dropdown-item:hover {
    background: rgba(57, 255, 20, 0.1);
    border-left: 3px solid #39ff14;
    padding-left: 15px;
  }

  .other-dropdown-item .item-icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  .other-dropdown-item:hover .item-icon {
    transform: scale(1.2);
  }

  .other-dropdown-item .item-title {
    font-weight: 600;
    color: #ffffff;
    transition: color 0.3s ease;
  }

  .other-dropdown-item:hover .item-title {
    color: #39ff14;
  }

  .other-dropdown-item .item-description {
    font-size: 0.75rem;
    color: #8b8d91;
  }

  .logo-text {
    display: none;
  }

  @media (min-width: 768px) {
    .logo-text {
      display: inline;
    }
  }

  @media (max-width: 639px) {
    .nav-cta {
      padding: 0.5rem 0.75rem !important;
      font-size: 0.75rem;
    }

    .mobile-nav-buttons {
      gap: 0.75rem;
    }
  }
`,
        }}
      />

      <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10 backdrop-blur-md bg-[#0b0b0f]/80">
        <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 min-w-0 flex-shrink-0"
            >
              {/* <img
                src="/image.png"
                alt="Infected Game Hosting Logo"
                className="w-7 h-7 sm:w-8 sm:h-8"
              /> */}
              <img
                src="/image.png"
                alt="Infected Game Hosting Logo"
                className="w-7 h-7 sm:w-8 sm:h-8"
                width="32"
                height="32"
                loading="eager"
                // fetchPriority="high"
              />
              <span className="logo-text text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white truncate">
                Infected Game Hosting
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-xs lg:text-sm text-[#c8cbd0] hover:text-[#39ff14] bg-transparent hover:bg-white/5 transition-colors">
                      Games
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-44 lg:w-48 p-2 lg:p-3 space-y-1 bg-[#0b0b0f] border border-white/10 rounded-md">
                        {gamesItems.map((item) => (
                          <NavigationMenuLink asChild key={item.title}>
                            <a
                              href={item.href}
                              className="games-dropdown-item flex items-center gap-2 px-3 lg:px-4 py-2 text-xs lg:text-sm text-[#c8cbd0] rounded-md block hover:text-[#39ff14] transition-colors"
                            >
                              {item.title}
                            </a>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a
                href="https://billing.infectedgamehosting.com/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs lg:text-sm text-[#c8cbd0] hover:text-[#39ff14] transition-colors whitespace-nowrap"
              >
                Contact
              </a>
              <a
                href="https://guides.infectedgamehosting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs lg:text-sm text-[#c8cbd0] hover:text-[#39ff14] transition-colors whitespace-nowrap"
              >
                Knowledge Base
              </a>
              <a
                href="/affiliate"
                className="text-xs lg:text-sm text-[#c8cbd0] hover:text-[#39ff14] transition-colors whitespace-nowrap"
              >
                Affiliate
              </a>
              {/* 
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-xs lg:text-sm text-[#c8cbd0] hover:text-[#39ff14] bg-transparent hover:bg-white/5 transition-colors">
                      Other
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-72 lg:w-80 p-3 lg:p-4 space-y-2 bg-[#0b0b0f] border border-white/10 rounded-md">
                        {otherItems.map((item) => (
                          <NavigationMenuLink asChild key={item.title}>
                            <a
                              href={item.href}
                              className="other-dropdown-item flex items-start gap-3 block transition-all"
                            >
                              <span className="item-icon">{item.icon}</span>
                              <div className="flex-1">
                                <div className="item-title text-sm lg:text-base">
                                  {item.title}
                                </div>
                                <div className="item-description mt-1">
                                  {item.description}
                                </div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu> */}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              <a
                href="https://billing.infectedgamehosting.com/cart.php"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-cta neon-button-outline text-xs lg:text-sm px-2 lg:px-4 py-1.5 lg:py-2 whitespace-nowrap"
              >
                Order
              </a>
              <a
                href="https://panel.infectedgamehosting.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-cta neon-button text-xs lg:text-sm px-2 lg:px-4 py-1.5 lg:py-2 whitespace-nowrap"
              >
                Panel
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#c8cbd0] hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[300px] sm:w-[350px] bg-[#0b0b0f] border-white/10"
                >
                  <SheetHeader className="mb-4">
                    <SheetTitle className="text-left text-white">
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="games" className="border-white/10">
                        <AccordionTrigger className="text-sm sm:text-base text-[#c8cbd0] hover:text-[#39ff14]">
                          Games
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pl-2">
                            {gamesItems.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-sm text-[#c8cbd0] hover:text-[#39ff14] transition-colors py-1"
                              >
                                {item.title}
                              </a>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <button
                      onClick={() => {
                        smoothScroll("features");
                        setMobileMenuOpen(false);
                      }}
                      className="text-sm sm:text-base text-[#c8cbd0] hover:text-[#39ff14] transition-colors text-left"
                    >
                      Features
                    </button>
                    <button
                      onClick={() => {
                        smoothScroll("pricing");
                        setMobileMenuOpen(false);
                      }}
                      className="text-sm sm:text-base text-[#c8cbd0] hover:text-[#39ff14] transition-colors text-left"
                    >
                      Pricing
                    </button>
                    <button
                      onClick={() => {
                        smoothScroll("support");
                        setMobileMenuOpen(false);
                      }}
                      className="text-sm sm:text-base text-[#c8cbd0] hover:text-[#39ff14] transition-colors text-left"
                    >
                      Support
                    </button>
                    <a
                      href="https://guides.infectedgamehosting.com/"
                      className="text-sm sm:text-base text-[#c8cbd0] hover:text-[#39ff14] transition-colors text-left"
                    >
                      Guides
                    </a>
                    <a
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm sm:text-base text-[#c8cbd0] hover:text-[#39ff14] transition-colors"
                    >
                      About
                    </a>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="other" className="border-white/10">
                        <AccordionTrigger className="text-sm sm:text-base text-[#c8cbd0] hover:text-[#39ff14]">
                          Other
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 pl-2">
                            {otherItems.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block"
                              >
                                <div className="flex items-start gap-2 p-2 rounded-md hover:bg-white/5 transition-colors">
                                  <span className="text-lg">{item.icon}</span>
                                  <div>
                                    <div className="text-sm text-[#c8cbd0] hover:text-[#39ff14] font-medium">
                                      {item.title}
                                    </div>
                                    <div className="text-xs text-[#8b8d91] mt-1">
                                      {item.description}
                                    </div>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="mobile-nav-buttons flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-3">
                      <a
                        href="https://billing.infectedgamehosting.com/cart.php"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="nav-cta neon-button-outline text-center text-xs sm:text-sm py-2 px-4"
                      >
                        Order Now
                      </a>
                      <a
                        href="https://panel.infectedgamehosting.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="nav-cta neon-button text-center text-xs sm:text-sm py-2 px-4"
                      >
                        Open Panel
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
