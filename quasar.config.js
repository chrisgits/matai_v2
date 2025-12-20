import { defineConfig } from '#q-app/wrappers'

export default defineConfig((ctx) => {
  return {
    supportTS: false,

    boot: [
      'axios'
    ],

    css: [
      'app.sass'
    ],

    extras: [
      // 'fontawesome-v5',
      'roboto-font',
      'material-icons'
    ],

    build: {
      env: {
        API_URL: ctx.prod
          ? 'https://www.matai.org'
          : 'http://localhost:8888'
      },
      vueRouterMode: 'history'
    },

    devServer: {
      https: false,
      port: 8080,
      open: true
    },

    framework: {
      config: {},
      plugins: ['Notify']
    },

    animations: [],

    ssr: {
      pwa: false,
      prodPort: 3000,
      maxAge: 1000 * 60 * 60 * 24 * 30
    },

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true
    },

    capacitor: {
      hideSplashscreen: true
    },

    cordova: {},

    electron: {
      builder: {
        appId: 'matai_v2'
      }
    }
  }
})
