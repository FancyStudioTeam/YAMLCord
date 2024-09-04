import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "en",
  themeConfig: {
    nav: [
      {
        link: "/team",
        text: "Our Team",
      },
      {
        link: "/playground",
        text: "Playground",
      },
    ],
    sidebar: {
      "/": [
        {
          items: [
            {
              link: "/",
              text: "About FancyScript",
            },
            {
              base: "/learning/",
              collapsed: false,
              items: [
                {
                  link: "data-types",
                  text: "Data Types",
                },
              ],
              text: "Learning",
            },
          ],
          text: "Introduction",
        },
        {
          items: [],
          text: "Examples",
        },
        {
          items: [
            {
              link: "https://discord.gg/gud55BjNFC",
              target: "_blank",
              text: "Discord Server",
            },
            {
              link: "https://github.com/FancyStudioTeam/FancyScript",
              target: "_blank",
              text: "GitHub Repository",
            },
          ],
          text: "Useful Links",
        },
      ],
    },
  },
});
