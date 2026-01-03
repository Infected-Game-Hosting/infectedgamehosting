import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["server.ts"],
  bundle: true,
  platform: "node",
  target: "node18",
  format: "esm",
  outfile: "dist/server.js",
  packages: "external",
});

console.log("✅ Server bundle created at dist/server.js");
