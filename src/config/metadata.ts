// src/config/metadata.ts

export interface PageMetadata {
  title: string;
  description: string;
  image?: string;
  keywords?: string;
  type?: "website" | "article" | "profile";
  canonical?: string;
}

const BASE_URL = "https://infectedgamehosting.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/og-image.png`;

export const pageMetadata: Record<string, PageMetadata> = {
  // ==================== HOME ====================
  home: {
    title:
      "Infected Game Hosting — High-Performance Game Servers | NVMe SSD & DDoS Protection",
    description:
      "Launch your gaming server in seconds. NVMe SSD storage, DDoS protection, Ryzen CPUs, and 24/7 support. Perfect for Palworld, Minecraft, Rust & more. Starting at $11/month.",
    keywords:
      "game server hosting, Palworld hosting, Minecraft server hosting, dedicated game servers, DDoS protection, NVMe SSD hosting, low latency servers, modded server hosting, Ryzen game servers, 24/7 server hosting",
    image: DEFAULT_OG_IMAGE,
    canonical: BASE_URL,
  },

  // ==================== GAMES ====================
  games: {
    title: "Game Server Hosting | All Supported Games",
    description:
      "Browse all supported games on Infected Game Hosting. Premium servers for Palworld, Minecraft, Rust, V Rising, ARK, and more with instant setup.",
    keywords:
      "game servers, supported games, Palworld, Minecraft, Rust, V Rising, ARK, game hosting",
    image: DEFAULT_OG_IMAGE,
    canonical: `${BASE_URL}/games`,
  },

  // ==================== MINECRAFT ====================
  minecraft: {
    title:
      "Minecraft Server Hosting | Java & Bedrock Edition | Infected Game Hosting",
    description:
      "Premium Minecraft server hosting with cross-platform support for Java & Bedrock. NVMe SSD storage, DDoS protection, mod support, and instant setup. Starting at $11/month.",
    keywords:
      "Minecraft hosting, Minecraft server hosting, Minecraft Bedrock, Minecraft Java, cross-platform Minecraft, modded Minecraft server, Minecraft plugins, game server hosting",
    image: `${BASE_URL}/assets/games/minecraft-og.png`,
    canonical: `${BASE_URL}/game/minecraft-server-hosting`,
  },

  // ==================== PALWORLD ====================
  palworld: {
    title:
      "Palworld Server Hosting | High-Performance Dedicated Servers | Infected Game Hosting",
    description:
      "Host your Palworld server with NVMe SSD storage, DDoS protection, and instant deployment. Capture Pals, explore dungeons, and build bases with friends. Starting at $14/month.",
    keywords:
      "Palworld hosting, Palworld server hosting, Palworld dedicated server, Palworld multiplayer, Pocketpair server hosting, survival game hosting",
    image: `${BASE_URL}/assets/games/palworld-og.png`,
    canonical: `${BASE_URL}/game/palworld-server-hosting`,
  },

  // ==================== RUST ====================
  rust: {
    title:
      "Rust Server Hosting | High-Performance Dedicated Servers | Infected Game Hosting",
    description:
      "Premium Rust server hosting with DDoS protection, instant setup, and full mod support. Build, raid, and survive with optimal performance. Starting at $18/month.",
    keywords:
      "Rust hosting, Rust server hosting, Rust dedicated server, Rust server rental, modded Rust server, Oxide plugins, Rust PvP server",
    image: `${BASE_URL}/assets/games/rust-og.png`,
    canonical: `${BASE_URL}/game/rust-server-hosting`,
  },

  // ==================== V RISING ====================
  vrising: {
    title:
      "V Rising Server Hosting | Vampire Survival Servers | Infected Game Hosting",
    description:
      "Host your V Rising vampire survival server with NVMe SSDs, DDoS protection, and automatic updates. Build your castle and dominate the night. Starting at $13/month.",
    keywords:
      "V Rising hosting, V Rising server hosting, vampire survival server, V Rising dedicated server, Stunlock Studios server",
    image: `${BASE_URL}/assets/games/vrising-og.png`,
    canonical: `${BASE_URL}/game/vrising-server-hosting`,
  },

  // ==================== ARK ====================
  ark: {
    title:
      "ARK Server Hosting | Survival Evolved & Ascended | Infected Game Hosting",
    description:
      "Premium ARK server hosting for Survival Evolved and Ascended. Tame dinosaurs, build bases, and conquer the ARK with high-performance servers. Starting at $16/month.",
    keywords:
      "ARK hosting, ARK server hosting, ARK Survival Evolved, ARK Ascended, dinosaur server, ARK dedicated server, modded ARK server",
    image: `${BASE_URL}/assets/games/ark-og.png`,
    canonical: `${BASE_URL}/game/ark-server-hosting`,
  },

  // ==================== BLOG ====================
  blog: {
    title: "Blog | Latest Gaming News & Tutorials | Infected Game Hosting",
    description:
      "Stay updated with the latest game server hosting news, tutorials, optimization guides, and community updates from Infected Game Hosting.",
    keywords:
      "game hosting blog, server tutorials, gaming news, hosting guides, server optimization, game updates",
    image: `${BASE_URL}/assets/blog-og.png`,
    canonical: `${BASE_URL}/blog`,
  },

  // ==================== PRICING ====================
  pricing: {
    title:
      "Pricing | Affordable Game Server Hosting Plans | Infected Game Hosting",
    description:
      "Simple, transparent pricing for high-performance game servers. Plans starting at $11/month with NVMe SSD, DDoS protection, and 24/7 support.",
    keywords:
      "game server pricing, hosting plans, server costs, affordable game hosting, server rental prices",
    image: DEFAULT_OG_IMAGE,
    canonical: `${BASE_URL}/pricing`,
  },

  // ==================== ABOUT ====================
  about: {
    title:
      "About Us | Denver-Based Game Server Hosting | Infected Game Hosting",
    description:
      "Learn about Infected Game Hosting. Denver-based company providing high-performance game servers with 24/7 U.S. support since 2023.",
    keywords:
      "about IGH, Denver game hosting, company info, server hosting company, U.S. based hosting",
    image: DEFAULT_OG_IMAGE,
    canonical: `${BASE_URL}/about`,
  },

  // ==================== CONTACT ====================
  contact: {
    title: "Contact Support | 24/7 Customer Service | Infected Game Hosting",
    description:
      "Get expert support 24/7. Contact our Denver-based team for sales, technical support, or billing questions. Average response time: under 2 hours.",
    keywords:
      "contact support, customer service, tech support, billing support, 24/7 support",
    image: DEFAULT_OG_IMAGE,
    canonical: `${BASE_URL}/contact`,
  },

  // ==================== KNOWLEDGE BASE ====================
  knowledgeBase: {
    title: "Knowledge Base | Guides & Tutorials | Infected Game Hosting",
    description:
      "Comprehensive guides, tutorials, and documentation for managing your game servers. Installation guides, troubleshooting, and optimization tips.",
    keywords:
      "knowledge base, server guides, tutorials, documentation, help center, how to guides",
    image: DEFAULT_OG_IMAGE,
    canonical: `${BASE_URL}/knowledge-base`,
  },

  // ==================== AFFILIATE PROGRAM ====================
  affiliate: {
    title:
      "Affiliate Program | Earn with Game Server Hosting | Infected Game Hosting",
    description:
      "Join our affiliate program and earn commission promoting premium game server hosting. Competitive rates, real-time tracking, and monthly payouts.",
    keywords:
      "affiliate program, partner program, earn money, referral program, hosting affiliate",
    image: DEFAULT_OG_IMAGE,
    canonical: `${BASE_URL}/affiliate`,
  },

  // ==================== LEGAL ====================
  tos: {
    title: "Terms of Service | Infected Game Hosting",
    description:
      "Read our Terms of Service for Infected Game Hosting. Understand your rights and responsibilities when using our game server hosting services.",
    keywords: "terms of service, TOS, legal, user agreement",
    image: DEFAULT_OG_IMAGE,
    canonical: `${BASE_URL}/terms-of-service`,
  },

  privacy: {
    title: "Privacy Policy | Infected Game Hosting",
    description:
      "Our Privacy Policy explains how we collect, use, and protect your personal information when you use Infected Game Hosting services.",
    keywords: "privacy policy, data protection, GDPR, privacy, security",
    image: DEFAULT_OG_IMAGE,
    canonical: `${BASE_URL}/privacy-policy`,
  },

  refund: {
    title: "Refund Policy | Infected Game Hosting",
    description:
      "Understand our refund and cancellation policy. We offer a 72-hour money-back guarantee on all game server hosting plans.",
    keywords:
      "refund policy, money back guarantee, cancellation policy, refunds",
    image: DEFAULT_OG_IMAGE,
    canonical: `${BASE_URL}/refund-policy`,
  },

  // ==================== 404 ====================
  notFound: {
    title: "404 - Page Not Found | Infected Game Hosting",
    description:
      "The page you're looking for doesn't exist. Browse our game server hosting options or return home.",
    image: DEFAULT_OG_IMAGE,
  },
};

// Helper function to get metadata by key with fallback to home
export const getPageMetadata = (key: string): PageMetadata => {
  return pageMetadata[key] || pageMetadata.home;
};

// Helper to generate game-specific metadata dynamically
export const getGameMetadata = (
  gameName: string,
  gameSlug: string,
  customDescription?: string,
  customKeywords?: string
): PageMetadata => {
  return {
    title: `${gameName} Server Hosting | High-Performance Dedicated Servers | Infected Game Hosting`,
    description:
      customDescription ||
      `Premium ${gameName} server hosting with NVMe SSD storage, DDoS protection, and instant setup. Starting at $11/month.`,
    keywords:
      customKeywords ||
      `${gameName} hosting, ${gameName} server hosting, ${gameName} dedicated server, game server hosting`,
    image: `${BASE_URL}/assets/games/${gameSlug}-og.png`,
    canonical: `${BASE_URL}/game/${gameSlug}`,
    type: "website",
  };
};

// Helper to generate blog post metadata dynamically
export const getBlogPostMetadata = (
  title: string,
  description: string,
  slug: string,
  image?: string,
  author?: string,
  publishedTime?: string,
  tags?: string[]
): PageMetadata => {
  return {
    title: `${title} | Infected Game Hosting Blog`,
    description: description,
    keywords: tags?.join(", ") || "gaming, server hosting, tutorials",
    image: image || `${BASE_URL}/assets/blog/${slug}-og.png`,
    canonical: `${BASE_URL}/blog/${slug}`,
    type: "article",
  };
};

export { BASE_URL, DEFAULT_OG_IMAGE };
