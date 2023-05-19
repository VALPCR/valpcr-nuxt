export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "valpcr-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/jsPDF" },
    { src: "~/plugins/fontawesome.js" },
    { src: "~/plugins/datatable.js" },
    { src: "~/plugins/chart.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],

  axios: {
    baseURL: process.env.BASE_URL,
  },

  auth: {
    localStorage: false,
    redirect: {
      login: "/",
      logout: "/",
      home: false,
    },
    strategies: {
      local: {
        scheme: "refresh",
        token: {
          property: "token",
          global: true,
          maxAge: 3600,
        },
        refreshToken: {
          property: "token",
          data: "token",
        },
        endpoints: {
          login: { url: "auth/login", method: "post", propertyName: "token" },
          refresh: { url: "auth/refresh", method: "post" },
          user: { url: "auth/verify", method: "get", propertyName: false },
          logout: { url: "http://valpcr.test/api/auth/logout", method: "post" },
        },
      },
    },
  },

  server: {
    port: 8000, // default: 3000
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};
