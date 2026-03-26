// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Triforce of the Gods | The Codex'
    }
  },
  future: {
    compatibilityVersion: 4
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-W78LECKXK6'
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  sourcemap: false,
  vite: {
    $client: {
      build: {
        rollupOptions: {
          onwarn(warning, defaultHandler) {
            if (warning.message && warning.message.includes('Sourcemap is likely to be incorrect')) return;
            defaultHandler(warning);
          },
          onLog(level, log, defaultHandler) {
            if (log.message && log.message.includes('Sourcemap is likely to be incorrect')) return;
            defaultHandler(level, log);
          }
        }
      }
    },
    $server: {
      build: {
        rollupOptions: {
          onwarn(warning, defaultHandler) {
            if (warning.message && warning.message.includes('Sourcemap is likely to be incorrect')) return;
            defaultHandler(warning);
          },
          onLog(level, log, defaultHandler) {
            if (log.message && log.message.includes('Sourcemap is likely to be incorrect')) return;
            defaultHandler(level, log);
          }
        }
      }
    }
  }
})
