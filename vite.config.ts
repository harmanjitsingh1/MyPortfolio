import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: [
          "favicon.ico",
          "apple-touch-icon.png",
          "masked-icon.svg",
        ],
        manifest: {
          name: "Harman Portfolio",
          short_name: "Harman",
          description: "Full Stack Engineer Project Portfolio",
          theme_color: "#0A0A0A",
          icons: [
            {
              src: "/icons/icon-48.png",
              sizes: "48x48",
              type: "image/png",
            },
            {
              src: "/icons/icon-72.png",
              sizes: "72x72",
              type: "image/png",
            },
            {
              src: "/icons/icon-96.png",
              sizes: "96x96",
              type: "image/png",
            },
            {
              src: "/icons/icon-128.png",
              sizes: "128x128",
              type: "image/png",
            },
            {
              src: "/icons/icon-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/icons/icon-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/icons/maskable-icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/icons/monochrome-icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "monochrome",
            },
          ],
        },
      }),
    ],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
