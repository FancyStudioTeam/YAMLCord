import { defineConfig } from "vitepress";

export const es = defineConfig({
  lang: "es",
  themeConfig: {
    nav: [
      {
        link: "/es/team",
        text: "Nuestro Equipo",
      },
      {
        link: "/es/playground",
        text: "Playground",
      },
    ],
    outline: {
      label: "En esta página",
    },
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
              collapsed: false,
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
        {
          items: [],
          text: "Ejemplos",
        },
        {
          items: [
            {
              link: "https://discord.gg/gud55BjNFC",
              target: "_blank",
              text: "Servidor de Discord",
            },
            {
              link: "https://github.com/FancyStudioTeam/FancyScript",
              target: "_blank",
              text: "Repositorio de GitHub",
            },
          ],
          text: "Enlaces Útiles",
        },
      ],
    },
  },
});
