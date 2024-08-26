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
          ],
          text: "Introduction",
        },
      ],
    },
  },
});
