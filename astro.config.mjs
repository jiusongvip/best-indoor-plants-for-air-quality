import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://best-indoor-plants-for-air-quality.com",
  trailingSlash: 'never',
  integrations: [sitemap({
    lastmod: new Date("2026-07-27"),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
