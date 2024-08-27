import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "en",
  themeConfig: {
    sidebar: {
      "/": [
        {
          items: [
            {
              link: "/",
              text: "About FancyScript",
            },
            {
              items: [
                {
                  link: "/basic-elements/data-types",
                  text: "Data Types",
                },
              ],
              text: "Basic Elements",
            },
          ],
          text: "Introduction",
        },
      ],
    },
  },
});