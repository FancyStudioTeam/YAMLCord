import { defineConfig } from "vitepress";

export const shared = defineConfig({
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/Logo.png" }],
    ["meta", { name: "theme-color", content: "#4cb699" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:title", content: "FancyScript | A Discord Bot Scripting Sintax" }],
    ["meta", { property: "og:site_name", content: "FancyScript" }],
    ["meta", { property: "og:url", content: "https://fancyscript.pages.dev/" }],
  ],
  themeConfig: {
    logo: "/Logo.png",
    siteTitle: false,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/FancyStudioTeam/FancyScript",
      },
    ],
  },
});
