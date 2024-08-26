import { defineConfig } from "vitepress";

export const es = defineConfig({
  lang: "es",
  themeConfig: {
    sidebar: {
      "/es/": [
        {
          items: [
            {
              link: "/es/",
              text: "Sobre FancyScript",
            },
          ],
          text: "Introducción",
        },
      ],
    },
  },
});
