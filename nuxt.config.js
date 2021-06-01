export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // target: "static",
  head: {
    title: "ilearnblock",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,400;1,500&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ant-design-vue/dist/antd.css", "@/assets/styles/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/antd-ui", { src: "@/plugins/vue-carousel", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxt/image"
  ],

  image: {
    dir: "assets/images"
  },

  generate: {
    fallback: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    build: {
      transpile: ["ant-design-vue"],
      babel: {
        plugins: [
          [
            "import",
            {
              libraryName: "ant-design-vue",
              libraryDirectory: "es",
              // style: "css",
              style: true
            },
            "ant-design-vue"
          ]
          // ["@babel/plugin-proposal-private-methods", { loose: true }]
        ]
      }
    }
  }
};
