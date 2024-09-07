import { defineConfig } from "vitepress";
import { GLOBAL_FUNCTIONS } from "../functions";

export const es = defineConfig({
  lang: "es",
  themeConfig: {
    nav: [
      {
        link: "/es/team",
        text: "Nuestro Equipo",
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
              text: "Sobre YAMLCord",
            },
            {
              base: "/es/reference/",
              collapsed: false,
              items: [
                {
                  link: "optional-fields",
                  text: "Campos Opcionales",
                },
                {
                  link: "overloaded-functions",
                  text: "Funciones Sobrecargadas",
                },
              ],
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
          items: GLOBAL_FUNCTIONS("es"),
          text: "Funciones Globales",
        },
        {
          items: [
            {
              link: "https://discord.gg/yWjeDA6ewJ",
              target: "_blank",
              text: "Servidor de Discord",
            },
            {
              link: "https://github.com/FancyStudioTeam/YAMLCord",
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
