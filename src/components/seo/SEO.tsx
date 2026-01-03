// src/components/seo/SEO.tsx
import { Helmet } from "react-helmet-async";
import { BASE_URL, DEFAULT_OG_IMAGE } from "@/config/metadata";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  canonical?: string;
  type?: "website" | "article" | "profile";
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  siteName?: string;
  twitterHandle?: string;
}

const SEO = ({
  title = "Infected Game Hosting — High-Performance Game Servers | NVMe SSD & DDoS Protection",
  description = "Launch your gaming server in seconds. NVMe SSD storage, DDoS protection, Ryzen CPUs, and 24/7 support. Perfect for Palworld, Minecraft, Rust & more.",
  image = DEFAULT_OG_IMAGE,
  url,
  canonical,
  type = "website",
  keywords,
  author = "Infected Game Hosting",
  publishedTime,
  modifiedTime,
  noIndex = false,
  siteName = "Infected Game Hosting",
  twitterHandle = "@InfectedHosting",
}: SEOProps) => {
  // Construct full URL if not provided
  const fullUrl =
    url ||
    canonical ||
    `${BASE_URL}${
      typeof window !== "undefined" ? window.location.pathname : ""
    }`;
  const canonicalUrl = canonical || fullUrl;

  // Ensure title includes site name if not already present
  const fullTitle = title.includes("Infected Game Hosting")
    ? title
    : `${title} | Infected Game Hosting`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Open Graph / Facebook / Discord */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${fullTitle} - Premium Game Server Hosting`}
      />
      <meta property="og:locale" content="en_US" />

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content={`${fullTitle} - Premium Game Server Hosting`}
      />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Geographic Meta Tags (Denver, CO headquarters) */}
      <meta name="geo.region" content="US-CO" />
      <meta name="geo.placename" content="Denver" />
      <meta name="geo.position" content="39.7392;-104.9903" />
      <meta name="ICBM" content="39.7392, -104.9903" />
    </Helmet>
  );
};

export default SEO;
