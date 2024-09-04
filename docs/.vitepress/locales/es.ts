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
      level: "deep",
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
              link: "/es/reference",
              text: "Referencia",
            },
            {
              base: "/es/learning/",
              collapsed: false,
              items: [
                {
                  link: "data-types",
                  text: "Tipos de Datos",
                },
                {
                  link: "conditionals",
                  text: "Condicionales",
                },
              ],
              text: "Aprendiendo",
            },
          ],
          text: "Introducción",
        },
        {
          base: "/es/global-functions/",
          collapsed: false,
          items: [
            {
              link: "add-reaction",
              text: "add_reaction",
            },
            {
              link: "create-message",
              text: "create_message",
            },
            {
              link: "wait",
              text: "wait",
            },
          ],
          text: "Funciones Globales",
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
