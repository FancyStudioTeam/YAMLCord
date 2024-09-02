import { defineConfig } from "vitepress";

export const es = defineConfig({
  lang: "es",
  themeConfig: {
    nav: [
      {
        link: "/es/team",
        text: "Equipo",
      },
      {
        link: "/es/playground",
        text: "Playground",
      },
    ],
    sidebar: {
      "/es/": [
        {
          items: [
            {
              link: "/es/",
              text: "Sobre FancyScript",
            },
            {
              base: "/es/learning/",
              items: [
                {
                  link: "data-types",
                  text: "Tipos de Datos",
                },
              ],
              text: "Aprendiendo",
            },
          ],
          text: "Introducción",
        },
      ],
    },
  },
});
