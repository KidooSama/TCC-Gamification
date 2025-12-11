import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const base = process.env.VITE_BASE || "/TCC-Gamification/";

// Plugin simples para substituir %BASE_URL% no HTML
const baseUrlPlugin = () => {
  return {
    name: "base-url-replace",
    transformIndexHtml(html: string) {
      return html.replace(/%BASE_URL%/g, base);
    },
  };
};

export default defineConfig({
  base: base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), baseUrlPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
