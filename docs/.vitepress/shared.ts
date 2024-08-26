import { defineConfig } from "vitepress";

export const shared = defineConfig({
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
