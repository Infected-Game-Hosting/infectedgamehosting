import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react";
import App from "./App";
import "./index.css";
import { queryClient } from "./config/query-client";
import { PostHogProvider } from "posthog-js/react";

// Add hydrating class immediately
if (typeof document !== "undefined") {
  document.body.classList.add("hydrating");
}

function AppWithPostHog() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    // Wait for all images to load
    const images = Array.from(document.querySelectorAll("img"));

    if (images.length === 0) {
      // No images, enable immediately
      document.body.classList.remove("hydrating");
      return;
    }

    const imagePromises = images.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve();
        // Timeout fallback
        setTimeout(resolve, 1000);
      });
    });

    Promise.all(imagePromises).then(() => {
      requestAnimationFrame(() => {
        document.body.classList.remove("hydrating");
      });
    });
  }, []);

  const content = (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </QueryClientProvider>
    </NuqsAdapter>
  );

  if (!isHydrated) {
    return content;
  }

  return (
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
        person_profiles: "identified_only",
        capture_pageview: true,
        capture_pageleave: true,
        loaded: (posthog) => {
          if (import.meta.env.DEV) {
            posthog.opt_out_capturing();
          }
        },
      }}
    >
      {content}
    </PostHogProvider>
  );
}

ReactDOM.hydrateRoot(
  document.getElementById("root")!,
  <React.StrictMode>
    <AppWithPostHog />
  </React.StrictMode>
);
