import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react";
import App from "./App";
import { queryClient } from "./config/query-client";

export async function render(url: string) {
  const helmetContext: any = {};

  const html = renderToString(
    <React.StrictMode>
      <NuqsAdapter>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider context={helmetContext}>
            <StaticRouter location={url}>
              <App />
            </StaticRouter>
          </HelmetProvider>
        </QueryClientProvider>
      </NuqsAdapter>
    </React.StrictMode>
  );

  const { helmet } = helmetContext;

  const helmetHead = `
    ${helmet.title.toString()}
    ${helmet.priority.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.script.toString()}
  `.trim();

  return { html, helmet: helmetHead };
}
