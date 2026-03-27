import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const getCodexRoutes = () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const codexContent = readFileSync(resolve(__dirname, './app/data/codex.ts'), 'utf-8');
    const matches = [...codexContent.matchAll(/chapter:\s*"([^"]+)"/g)];
    return ['/', ...matches.map(m => '/' + m[1].toLowerCase().replace(/[^a-z0-9]+/g, '-'))];
  } catch (e) {
    return ['/'];
  }
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Triforce of the Gods | The Codex",
      link: [
        { rel: "icon", type: "image/gif", href: "/triforce.gif" }
      ]
    },
  },
  nitro: {
    preset: "github-pages",
    prerender: {
      routes: getCodexRoutes()
    }
  },
  future: {
    compatibilityVersion: 4,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["nuxt-gtag"],
  gtag: {
    id: "G-W78LECKXK6",
  },
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  sourcemap: false,
  vite: {
    $client: {
      build: {
        rollupOptions: {
          onwarn(warning, defaultHandler) {
            if (
              warning.message &&
              warning.message.includes("Sourcemap is likely to be incorrect")
            )
              return;
            defaultHandler(warning);
          },
          onLog(level, log, defaultHandler) {
            if (
              log.message &&
              log.message.includes("Sourcemap is likely to be incorrect")
            )
              return;
            defaultHandler(level, log);
          },
        },
      },
    },
    $server: {
      build: {
        rollupOptions: {
          onwarn(warning, defaultHandler) {
            if (
              warning.message &&
              warning.message.includes("Sourcemap is likely to be incorrect")
            )
              return;
            defaultHandler(warning);
          },
          onLog(level, log, defaultHandler) {
            if (
              log.message &&
              log.message.includes("Sourcemap is likely to be incorrect")
            )
              return;
            defaultHandler(level, log);
          },
        },
      },
    },
  },
});
