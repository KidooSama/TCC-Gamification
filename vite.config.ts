import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const base = process.env.VITE_BASE || "/TCC-Gamification/";

// Plugin para processar index.html e corrigir caminhos de assets públicos
const htmlPlugin = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html: string) {
      // Substitui caminhos absolutos de assets públicos pelo base path
      // Ex: /3175618.ico -> /TCC-Gamification/3175618.ico
      return html.replace(
        /(href|src)="\/([^/][^"]*)"/g,
        (match, attr, filePath) => {
          // Não substitui se for um link externo (http/https) ou já tiver o base path
          if (filePath.startsWith("http") || filePath.startsWith("TCC-Gamification/")) {
            return match;
          }
          return `${attr}="${base}${filePath}"`;
        }
      );
    },
  };
};

export default defineConfig({
  base: base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), htmlPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
