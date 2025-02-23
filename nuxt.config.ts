// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Montserrat: {
            wght: [400, 500, 700],
          },
        },
      },
    ],
    "@nuxtjs/google-fonts",
    "shadcn-nuxt",
  ],
  shadcn: {
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
