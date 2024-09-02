import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "en",
  themeConfig: {
    nav: [
      {
        link: "/team",
        text: "Team",
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
      ],
    },
  },
});
