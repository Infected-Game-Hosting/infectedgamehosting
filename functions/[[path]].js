// server.ts / worker.ts / server-entry.ts
import { render } from "../dist/server/entry-server.js";

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const { html, helmet } = await render(url.pathname);

  const template = await context.env.ASSETS.fetch("/index.html").then((r) =>
    r.text()
  );

  const finalHtml = template
    .replace("<!--app-head-->", helmet)
    .replace("<!--app-html-->", html);

  return new Response(finalHtml, {
    headers: { "Content-Type": "text/html" },
  });
}
