import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

const getPath = (p: string) =>
  fileURLToPath(new URL(`./${p}`, import.meta.url));

const components = (dir = "", src = "src/components") =>
  getPath(dir ? `${src}/${dir}` : src);

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": getPath("src"),
      "@components": components(),
      "@atoms": components("atoms"),
      "@molecules": components("molecules"),
      "@organisms": components("organisms"),
      "@templates": components("templates"),
      "@views": components("views"),
    },
  },
});
