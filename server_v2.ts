// ============================================
// 2. server.ts (Production SSR Server)
// ============================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import compression from "compression";
import sirv from "sirv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;
const base = process.env.BASE || "/";

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite: any;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  app.use(compression());
  app.use(
    base,
    sirv(path.resolve(__dirname, "dist/client"), { extensions: [] })
  );
}

// Serve HTML (SSR) — only for HTML requests
app.get(/.*/, async (req, res) => {
  try {
    // --- 1) Skip non-HTML requests (assets, HMR, images, etc.) ---
    const acceptHeader = req.headers.accept || "";
    if (!acceptHeader.includes("text/html")) {
      // Let other middleware (vite/sirv/etc.) handle it, or return 404 for unknown assets
      return res.status(404).end();
    }

    // --- 2) Keep a proper path (leave leading slash) ---
    // If you have a non-root base (e.g. '/app'), strip it, otherwise keep the path as-is
    let url = req.originalUrl || req.url || "/";
    if (base !== "/" && url.startsWith(base)) {
      url = url.slice(base.length) || "/";
    }

    let template: string;
    let render: any;

    if (!isProduction) {
      // Development: load template and render function from Vite
      template = fs.readFileSync(
        path.resolve(__dirname, "index.html"),
        "utf-8"
      );
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
    } else {
      // Production: use pre-built files
      template = fs.readFileSync(
        path.resolve(__dirname, "dist/client/index.html"),
        "utf-8"
      );
      render = (await import("./dist/server/entry-server.js")).render;
    }

    // Render the app HTML with helmet context
    const { html: appHtml, helmet } = await render(url);

    // Inject the app-rendered HTML and helmet tags into template
    const html = template
      .replace(`<!--app-html-->`, appHtml)
      .replace(`<!--app-head-->`, helmet);

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (e: any) {
    !isProduction && vite?.ssrFixStacktrace(e);
    console.error(e.stack || e);
    res.status(500).end(e.stack || String(e));
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
