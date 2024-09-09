import { defineConfig } from "vitepress";

export const shared = defineConfig({
  cleanUrls: true,
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
        content: "YAMLCord | An easy-to-use syntax for Discord bots using YAML",
      },
    ],
    [
      "meta",
      {
        property: "og:site_name",
        content: "YAMLCord",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://yamlcord.pages.dev/",
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: "https://github.com/FancyStudioTeam/YAMLCord/tree/main/docs/:path",
    },
    logo: "/Logo.png",
    search: {
      provider: "local",
    },
    siteTitle: false,
    socialLinks: [
      {
        icon: "discord",
        link: "https://discord.gg/yWjeDA6ewJ",
      },
      {
        icon: "github",
        link: "https://github.com/FancyStudioTeam/YAMLCord",
      },
    ],
  },
  title: "YAMLCord",
  vite: {
    ssr: {
      noExternal: ["monaco-editor"],
    },
  },
});
