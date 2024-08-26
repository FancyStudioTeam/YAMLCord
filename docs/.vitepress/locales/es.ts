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
            {
              items: [
                {
                  link: "/es/basic-elements/data-types",
                  text: "Tipos de Datos",
                },
              ],
              text: "Elementos Básicos",
            },
          ],
          text: "Introducción",
        },
      ],
    },
  },
});
