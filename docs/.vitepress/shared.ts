import { defineConfig } from "vitepress";

export const shared = defineConfig({
  description: "An easy-to-use syntax for Discord bots using YAML",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/Logo.png",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#4cb699",
      },
    ],
    [
      "meta",
      {
        property: "og:type",
        content: "website",
      },
    ],
    [
      "meta",
      {
        property: "og:locale",
        content: "en",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "FancyScript | An easy-to-use syntax for Discord bots using YAML",
      },
    ],
    [
      "meta",
      {
        property: "og:site_name",
        content: "FancyScript",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://fancyscript.pages.dev/",
      },
    ],
  ],
  themeConfig: {
    logo: "/Logo.png",
    search: {
      provider: "local",
    },
    siteTitle: false,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/FancyStudioTeam/FancyScript",
      },
    ],
  },
  title: "FancyScript",
});