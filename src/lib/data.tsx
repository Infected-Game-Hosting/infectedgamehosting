export const features = [
  {
    id: "international",
    title: "International Servers",
    description:
      "Server locations in North America, Europe, UK, Asia, Australia and India.",
    // simple SVG globe
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2a10 10 0 100 20 10 10 0 000-20z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12h20M12 2c2.5 2 3 6 3 10s-.5 8-3 10M12 2c-2.5 2-3 6-3 10s.5 8 3 10"
          stroke="currentColor"
          strokeWidth="1.0"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>
    ),
  },
  // {
  //   id: "git",
  //   title: "Git Integration",
  //   description:
  //     "Integrate your git repository directly into Cybrance and keep your bot up to date.",
  //   icon: (
  //     <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden>
  //       <path
  //         d="M3 12l9-9 9 9"
  //         stroke="currentColor"
  //         strokeWidth="1.6"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M12 3v18"
  //         stroke="currentColor"
  //         strokeWidth="1.6"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //     </svg>
  //   ),
  // },
  {
    id: "always",
    title: "Always Online 24/7",
    description:
      "Our servers run for all hours of the day, every day. Ensuring your bot is always available.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M12 7v6l4 2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "ddos",
    title: "DDoS Protection",
    description:
      "Shield your server from malicious online attacks and keep your bot online.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2l7 4v6c0 5-4 9-7 10-3-1-7-5-7-10V6l7-4z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "discord",
    title: "Discord Support",
    description:
      "Join our Discord for instant support, announcements, and a friendly community.",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* chat bubble */}
        <path
          d="M4 7.5C4 5 6 3 8.5 3h7C18 3 20 5 20 7.5v5C20 15 18 17 15.5 17H11l-3 3v-3H8.5C6 17 4 15 4 12.5v-5z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* discord-eyes / dots */}
        <circle cx="8.5" cy="9.5" r="0.9" fill="currentColor" />
        <circle cx="15.5" cy="9.5" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
];

export const faqData = [
  {
    question: "What Hardware do You Use on Your Game servers?",
    answer:
      "We use enterprise-grade hardware with high-performance processors and NVMe SSDs to ensure optimal game server performance and reliability.",
  },
  {
    question: "Can I Upgrade my server After I have Purchased?",
    answer:
      "Yes, you can upgrade your server plan at any time through the WHMCS client area. The upgrade will be prorated based on your current billing cycle.",
  },
  {
    question: "How Long Does it Take For my server to be Set up?",
    answer:
      "Server setup is typically instant. Once payment is confirmed, your server will be automatically provisioned and ready to use within minutes.",
  },
  {
    question: "How do I Access my Product?",
    answer:
      "You can access your server through the control panel link provided in your welcome email. Login credentials are sent immediately after purchase.",
  },
  {
    question: "Do Your servers Run 24/7?",
    answer:
      "Yes, all our servers run 24/7 with 99.9% uptime guarantee. Our infrastructure is monitored around the clock to ensure continuous operation.",
  },
  {
    question: "Will Infected Game Hosting Support New Games?",
    answer:
      "We regularly add support for new games based on customer demand. Join our Discord to suggest games you'd like to see supported.",
  },
  {
    question: "Can I Backup my server?",
    answer:
      "Yes, automated daily backups are included with all plans. You can also create manual backups anytime through the control panel.",
  },
  // {
  //   question: "What is your billing cycle?",
  //   answer:
  //     "Monthly billing with automatic renewal. You can cancel anytime through the WHMCS client area without any cancellation fees.",
  // },
  // {
  //   question: "Do you support mods?",
  //   answer:
  //     "Yes, our servers support most popular mods. Higher-tier plans are recommended for heavily modded gameplay to ensure optimal performance.",
  // },
  // {
  //   question: "Can I migrate from another host?",
  //   answer:
  //     "Yes, we offer free migration assistance. Contact our support team with your current server details and we'll help you transfer everything.",
  // },
  // {
  //   question: "Free Trials Available",
  //   answer:
  //     "Contact us to get started with a 2 day free trial on our Starter Package. No credit card required for the trial period.",
  // },
];

// Reusable converter (same as before, kept here for convenience)
type RawPlan = {
  name: string;
  ram?: string;
  cpu?: string;
  setup?: string;
  price: string; // e.g. "FREE" or "$11.00"
  description?: string;
  link?: string;
  players?: string;
  popular?: boolean;
  isFree?: boolean;
};

type NormalizedPlan = {
  name: string;
  ram?: string;
  cpu?: string;
  setup?: string;
  priceMonthly: number; // numeric for discount math
  originalPriceLabel?: string; // preserved original string ("FREE" or "$11.00")
  description?: string;
  link?: string;
  players?: string;
  popular?: boolean;
  isFree?: boolean;
  features?: string[];
};

type Spec = {
  id?: string;
  title: string;
  description: string;
};

function parsePriceStringToNumber(priceStr: string): number {
  if (!priceStr) return 0;
  const trimmed = priceStr.trim().toUpperCase();
  if (trimmed === "FREE" || trimmed.includes("TRIAL")) return 0;
  const num = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
  return Number.isFinite(num) ? num : 0;
}

function normalizeRawPlans(raw: RawPlan[]): NormalizedPlan[] {
  return raw.map((p) => {
    const isFreeFromField =
      !!p.isFree ||
      (p.price && p.price.trim().toUpperCase() === "FREE") ||
      (p.price && p.price.toUpperCase().includes("TRIAL"));
    const priceMonthly = isFreeFromField
      ? 0
      : parsePriceStringToNumber(p.price || "");
    return {
      name: p.name,
      ram: p.ram,
      cpu: p.cpu,
      setup: p.setup,
      priceMonthly,
      originalPriceLabel: p.price,
      description: p.description,
      link: p.link,
      players: p.players,
      popular: p.popular,
      isFree: isFreeFromField,
      features: [p.ram ?? "", p.cpu ?? "", p.setup ?? ""].filter(Boolean),
    };
  });
}

/* -----------------------
   Raw data sets 
   ----------------------- */

const rawPlansMinecraftJava: RawPlan[] = [
  {
    name: "Free Trial",
    ram: "4GB RAM",
    cpu: "1 vCPU",
    setup: "No setup fee",
    price: "FREE",
    // description: "Try our service for 48 hours risk-free.",
    description: "Try our service for free.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-java-server-hosting/free-trial",
    players: "",
    isFree: true,
  },
  {
    name: "Starter",
    ram: "4GB RAM",
    cpu: "1 vCPU",
    setup: "$3.50 setup fee",
    price: "$11.00",
    description: "Perfect for 1–2 players (vanilla).",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-java-server-hosting/host-your-own-minecraft-server-starter",
    players: "1-2 Players",
  },
  {
    name: "Standard",
    ram: "12GB RAM",
    cpu: "3 vCPU",
    setup: "$3.50 setup fee",
    price: "$33.00",
    description: "Great for 8–10 players (light plugins).",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-java-server-hosting/host-your-own-minecraft-server-standard",
    popular: true,
    players: "8-10 Players",
  },
  {
    name: "Ultra",
    ram: "20GB RAM",
    cpu: "5 vCPU",
    setup: "$3.50 setup fee",
    price: "$55.00",
    description: "Best for 10+ players (moderate plugins).",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-java-server-hosting/host-your-own-minecraft-server-ultra",
    players: "10+ Players",
  },
  {
    name: "Superior",
    ram: "28GB RAM",
    cpu: "7 vCPU",
    setup: "$3.50 setup fee",
    price: "$77.00",
    description: "Ultimate performance for large communities.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-java-server-hosting/host-your-own-minecraft-server-superior",
    players: "15+ Players",
  },
  {
    name: "Extreme",
    ram: "36GB RAM",
    cpu: "9 vCPU",
    setup: "$3.50 setup fee",
    price: "$99.00",
    description: "Ideal for massive servers (heavy modpacks).",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-java-server-hosting/host-your-own-minecraft-server-extreme",
    players: "20+ Players",
  },
];

const rawPlansMinecraft: RawPlan[] = [
  {
    name: "Free Trial",
    ram: "4GB RAM",
    cpu: "1 vCPU",
    setup: "No setup fee",
    price: "FREE",
    // description: "Try our service for 48 hours risk-free.",
    description: "Try our service for free.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-server-hosting/free-trial",
    // players: "48-Hour Trial",
    players: "",
    isFree: true,
  },
  {
    name: "Starter",
    ram: "4GB RAM",
    cpu: "1 vCPU",
    setup: "$3.50 setup fee",
    price: "$11.00",
    description: "Perfect for 1–2 players (vanilla).",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-server-hosting/host-your-own-minecraft-server-starter",
    players: "1-2 Players",
  },
  {
    name: "Standard",
    ram: "12GB RAM",
    cpu: "3 vCPU",
    setup: "$3.50 setup fee",
    price: "$33.00",
    description: "Great for 8–10 players (light addons).",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-server-hosting/host-your-own-minecraft-server-standard",
    popular: true,
    players: "8-10 Players",
  },
  {
    name: "Ultra",
    ram: "20GB RAM",
    cpu: "5 vCPU",
    setup: "$3.50 setup fee",
    price: "$55.00",
    description: "Best for 10+ players (moderate addons).",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-server-hosting/host-your-own-minecraft-server-ultra",
    players: "10+ Players",
  },
  {
    name: "Superior",
    ram: "28GB RAM",
    cpu: "7 vCPU",
    setup: "$3.50 setup fee",
    price: "$77.00",
    description: "Ultimate performance for large communities.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-server-hosting/host-your-own-minecraft-server-superior",
    players: "15+ Players",
  },
  {
    name: "Extreme",
    ram: "36GB RAM",
    cpu: "9 vCPU",
    setup: "$3.50 setup fee",
    price: "$99.00",
    description: "Ideal for massive servers (heavy modpacks).",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/minecraft-server-hosting/host-your-own-minecraft-server-extreme",
    players: "20+ Players",
  },
];

const rawPlansVRising: RawPlan[] = [
  {
    name: "Free Trial",
    ram: "4GB RAM",
    cpu: "1 vCPU",
    setup: "No setup fee",
    price: "FREE",
    // description: "Try our service for 48 hours risk-free.",
    description: "Try our service for free.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/v-rising-server-presets/free-trial",
    players: "",
    isFree: true,
  },
  {
    name: "Starter",
    ram: "4GB RAM",
    cpu: "1 vCPU",
    setup: "$3.50 setup fee",
    price: "$11.00",
    description: "Perfect for 1–2 players starting their vampire journey.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/v-rising-server-presets/host-your-own-v-listing-server-starter",
    players: "1-2 Players",
  },
  {
    name: "Standard",
    ram: "12GB RAM",
    cpu: "3 vCPU",
    setup: "$3.50 setup fee",
    price: "$33.00",
    description: "Great for 8–10 players building vampire castles.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/v-rising-server-presets/host-your-own-v-listing-server-standard",
    popular: true,
    players: "8-10 Players",
  },
  {
    name: "Ultra",
    ram: "20GB RAM",
    cpu: "5 vCPU",
    setup: "$3.50 setup fee",
    price: "$55.00",
    description: "Best for 10+ players with extensive base building.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/v-rising-server-presets/host-your-own-v-listing-server-ultra",
    players: "10+ Players",
  },
  {
    name: "Superior",
    ram: "28GB RAM",
    cpu: "7 vCPU",
    setup: "$3.50 setup fee",
    price: "$77.00",
    description: "Ultimate performance for large vampire clans.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/v-rising-server-presets/host-your-own-v-listing-server-superior",
    players: "15+ Players",
  },
  {
    name: "Extreme",
    ram: "36GB RAM",
    cpu: "9 vCPU",
    setup: "$3.50 setup fee",
    price: "$99.00",
    description: "Ideal for massive servers (heavy modpacks).",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/v-rising-server-presets/host-your-own-v-listing-server-extreme",
    players: "20+ Players",
  },
];

const rawPlansEnshrouded: RawPlan[] = [
  {
    name: "Free Trial",
    ram: "4GB RAM",
    // cpu: "1 vCPU",
    cpu: "2 vCPU",
    setup: "No setup fee",
    price: "FREE",
    description: "Try our service for free.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/enshrouded/48-hour-trial",
    players: "",
    isFree: true,
  },
  {
    name: "Starter",
    ram: "4GB RAM",
    // cpu: "1 vCPU",
    cpu: "2 vCPU",
    setup: "$3.50 setup fee",
    price: "$11.00",
    description: "Perfect for 1–2 players exploring Embervale.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/enshrouded/host-your-own-enshrouded-server-starter",
    players: "1-2 Players",
  },
  {
    name: "Standard",
    ram: "12GB RAM",
    cpu: "3 vCPU",
    setup: "$3.50 setup fee",
    price: "$33.00",
    description: "Great for 8–10 players building in the Shroud.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/enshrouded/host-your-own-enshrouded-server-standard",
    popular: true,
    players: "8-10 Players",
  },
  {
    name: "Ultra",
    ram: "20GB RAM",
    cpu: "5 vCPU",
    setup: "$3.50 setup fee",
    price: "$55.00",
    description: "Best for 10+ players with extensive voxel building.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/enshrouded/host-your-own-enshrouded-server-ultra",
    players: "10+ Players",
  },
  {
    name: "Superior",
    ram: "28GB RAM",
    cpu: "7 vCPU",
    setup: "$3.50 setup fee",
    price: "$77.00",
    description: "Ultimate performance for large communities.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/enshrouded/host-your-own-enshrouded-server-superior",
    players: "15+ Players",
  },
  {
    name: "Extreme",
    ram: "36GB RAM",
    cpu: "9 vCPU",
    setup: "$3.50 setup fee",
    price: "$99.00",
    description: "Ideal for massive servers with complex builds.",
    link: "https://billing.infectedgamehosting.com/index.php?rp=/store/enshrouded/host-your-own-enshrouded-server-extreme",
    players: "20+ Players",
  },
];

/* -----------------------
   Normalized outputs (use these with PricingSection)
   ----------------------- */

const plansMinecraftJava = normalizeRawPlans(rawPlansMinecraftJava);
const plansMinecraft = normalizeRawPlans(rawPlansMinecraft);
const plansVRising = normalizeRawPlans(rawPlansVRising);
const plansEnshrouded = normalizeRawPlans(rawPlansEnshrouded);

const minecraftSpecs: Spec[] = [
  {
    id: "nvme",
    title: "NVMe SSD Storage",
    description:
      "Ultra-fast NVMe drives for instant world loading and lag-free gameplay",
  },
  {
    id: "network",
    title: "1Gbit Network",
    description:
      "Unmetered bandwidth on 1Gbit connections for smooth multiplayer",
  },
  {
    id: "ddos",
    title: "DDoS Protection",
    description: "Advanced protection against attacks keeps your server online",
  },
  {
    id: "ryzen",
    title: "Ryzen Processors",
    description: "Latest AMD Ryzen CPUs for maximum performance",
  },
  {
    id: "backups",
    title: "Auto Backups",
    description: "Daily automated backups with one-click restore",
  },
  {
    id: "crossplatform",
    title: "Cross-Platform Ready",
    description: "Optimized for mobile, Xbox, PlayStation, Switch, and PC",
  },
];

const javaSpecs: Spec[] = [
  {
    id: "nvme",
    title: "NVMe SSD Storage",
    description:
      "Ultra-fast NVMe drives for instant world loading and lag-free gameplay",
  },
  {
    id: "network",
    title: "1Gbit Network",
    description:
      "Unmetered bandwidth on 1Gbit connections for smooth multiplayer",
  },
  {
    id: "ddos",
    title: "DDoS Protection",
    description: "Advanced protection against attacks keeps your server online",
  },
  {
    id: "ryzen",
    title: "Ryzen Processors",
    description: "Latest AMD Ryzen CPUs for maximum performance",
  },
  {
    id: "backups",
    title: "Auto Backups",
    description: "Daily automated backups with one-click restore",
  },
  {
    id: "mods",
    title: "Full Mod Support",
    description: "Forge, Fabric, Bukkit, Spigot, and Paper ready",
  },
];

const bedrockSpecs = [
  {
    id: "nvme",
    title: "NVMe SSD Storage",
    description:
      "Ultra-fast NVMe drives for instant world loading and lag-free gameplay",
  },
  {
    id: "network",
    title: "1Gbit Network",
    description:
      "Unmetered bandwidth on 1Gbit connections for smooth multiplayer",
  },
  {
    id: "ddos",
    title: "DDoS Protection",
    description: "Advanced protection against attacks keeps your server online",
  },
  {
    id: "ryzen",
    title: "Ryzen Processors",
    description: "Latest AMD Ryzen CPUs for maximum performance",
  },
  {
    id: "backups",
    title: "Auto Backups",
    description: "Daily automated backups with one-click restore",
  },
  {
    id: "crossplatform",
    title: "Cross-Platform Ready",
    description: "Optimized for mobile, Xbox, PlayStation, Switch, and PC",
  },
];

const vriingSpec: Spec[] = [
  {
    id: "nvme",
    title: "NVMe SSD Storage",
    description:
      "Ultra-fast NVMe drives for instant world loading and lag-free gameplay",
  },
  {
    id: "network",
    title: "1Gbit Network",
    description:
      "Unmetered bandwidth on 1Gbit connections for smooth multiplayer",
  },
  {
    id: "ddos",
    title: "DDoS Protection",
    description: "Advanced protection against attacks keeps your server online",
  },
  {
    id: "ryzen",
    title: "Ryzen Processors",
    description: "Latest AMD Ryzen CPUs for maximum performance",
  },
  {
    id: "backups",
    title: "Auto Backups",
    description: "Daily automated backups with one-click restore",
  },
  {
    id: "customization",
    title: "Full Customization",
    description:
      "Complete control over server settings and game configurations",
  },
];

const enshroudedSpec: Spec[] = [
  {
    id: "nvme",
    title: "NVMe SSD Storage",
    description:
      "Ultra-fast NVMe drives for instant world loading and seamless voxel building",
  },
  {
    id: "network",
    title: "1Gbit Network",
    description:
      "Unmetered bandwidth on 1Gbit connections for smooth co-op gameplay",
  },
  {
    id: "ddos",
    title: "DDoS Protection",
    description: "Advanced protection against attacks keeps your server online",
  },
  {
    id: "ryzen",
    title: "Ryzen Processors",
    description: "Latest AMD Ryzen CPUs for maximum performance",
  },
  {
    id: "backups",
    title: "Auto Backups",
    description: "Daily automated backups with one-click restore",
  },
  {
    id: "voxel",
    title: "Voxel Building Ready",
    description: "Optimized for complex voxel builds and terrain manipulation",
  },
];

export { minecraftSpecs, javaSpecs, bedrockSpecs, vriingSpec, enshroudedSpec };

export { plansMinecraft, plansVRising, plansMinecraftJava, plansEnshrouded };
