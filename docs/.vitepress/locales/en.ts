import { defineConfig } from "vitepress";
import { FUNCTIONS } from "../functions";

export const en = defineConfig({
  lang: "en",
  themeConfig: {
    nav: [
      {
        link: "/team",
        text: "Our Team",
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
              text: "About YAMLCord",
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
                  link: "how-yamlcord-works",
                  text: "How YAMLCord Works",
                },
                {
                  link: "conditionals",
                  text: "Conditionals",
                },
              ],
              text: "Learning",
            },
            {
              base: "/reference/",
              collapsed: false,
              items: [
                {
                  link: "optional-fields",
                  text: "Optional Fields",
                },
              ],
              text: "Reference",
            },
          ],
          text: "Introduction",
        },
        {
          base: "/functions/",
          collapsed: false,
          items: FUNCTIONS("en"),
          text: "Functions",
        },
        {
          items: [
            {
              link: "https://discord.gg/yWjeDA6ewJ",
              target: "_blank",
              text: "Discord Server",
            },
            {
              link: "https://github.com/FancyStudioTeam/YAMLCord",
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
