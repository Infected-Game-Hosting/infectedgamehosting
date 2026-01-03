import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["server.ts"],
  bundle: true,
  platform: "node",
  target: "node18",
  format: "esm",
  outfile: "dist/server.js",
  packages: "external", // Don't bundle node_modules
  banner: {
    js: "import { createRequire } from 'module';const require = createRequire(import.meta.url);import { fileURLToPath } from 'url';import { dirname } from 'path';const __filename = fileURLToPath(import.meta.url);const __dirname = dirname(__filename);",
  },
});

console.log("✅ Server bundle created at dist/server.js");
