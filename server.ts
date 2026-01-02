import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import compression from "compression";
import sirv from "sirv";
import type { ViteDevServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const port = parseInt(process.env.PORT || (isProduction ? "3000" : "5173"), 10);
const base = process.env.BASE || "/";

const app = express();
app.set("trust proxy", 1);

let vite: ViteDevServer | undefined;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: {
      middlewareMode: true,
    },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  app.use(compression());
  app.use(
    base,
    sirv(path.resolve(__dirname, "dist/client"), {
      extensions: [],
      setHeaders: (res, pathname) => {
        if (pathname.includes("/assets/")) {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
      },
    })
  );
}

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get(/.*/, async (req, res) => {
  try {
    const acceptHeader = req.headers.accept || "";
    const url = req.originalUrl || req.url || "/";

    if (url.includes("?token=")) {
      return res.status(204).end();
    }

    if (url.includes(".well-known")) {
      return res.status(404).end();
    }

    if (!isProduction && !url.includes("/@")) {
      console.log(`[HTML] ${url}`);
    }

    if (
      acceptHeader &&
      !acceptHeader.includes("text/html") &&
      !acceptHeader.includes("*/*")
    ) {
      return res.status(404).end();
    }

    let cleanUrl = url.split("?")[0];
    if (base !== "/" && cleanUrl.startsWith(base)) {
      cleanUrl = cleanUrl.slice(base.length) || "/";
    }

    let template: string;
    let render: any;

    if (!isProduction && vite) {
      template = fs.readFileSync(
        path.resolve(__dirname, "index.html"),
        "utf-8"
      );
      template = await vite.transformIndexHtml(cleanUrl, template);
      render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
    } else {
      template = fs.readFileSync(
        path.resolve(__dirname, "dist/client/index.html"),
        "utf-8"
      );
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const { html: appHtml, helmet } = await render(cleanUrl);

    const html = template
      .replace(`<!--app-head-->`, helmet)
      .replace(`<!--app-html-->`, appHtml);

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (e: any) {
    vite?.ssrFixStacktrace(e);
    console.error("❌ SSR Error:", e);
    res
      .status(500)
      .end(isProduction ? "Internal Server Error" : e.stack || String(e));
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
  console.log(`📦 Environment: ${isProduction ? "production" : "development"}`);
});
