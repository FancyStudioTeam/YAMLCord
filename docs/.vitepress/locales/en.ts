import { defineConfig } from "vitepress";
import { GLOBAL_FUNCTIONS } from "../functions";

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
    outline: {
      label: "On this page",
      level: "deep",
    },
    sidebar: {
      "/": [
        {
          items: [
            {
              link: "/",
              text: "About FancyScript",
            },
            {
              link: "/reference",
              text: "Reference",
            },
            {
              base: "/learning/",
              collapsed: false,
              items: [
                {
                  link: "data-types",
                  text: "Data Types",
                },
                {
                  link: "conditionals",
                  text: "Conditionals",
                },
              ],
              text: "Learning",
            },
          ],
          text: "Introduction",
        },
        {
          base: "/global-functions/",
          collapsed: false,
          items: GLOBAL_FUNCTIONS("en"),
          text: "Global Functions",
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
