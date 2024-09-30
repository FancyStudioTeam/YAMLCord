import { type DefaultTheme, defineConfig } from "vitepress";
import { FUNCTIONS } from "../functions.js";

const NAVBAR: DefaultTheme.NavItem[] = [
  {
    link: "/es/team",
    text: "Nuestro Equipo",
  },
  {
    link: "/es/developer-specification",
    text: "Especificación del Desarrollador",
  },
  {
    link: "/playground",
    text: "Playground",
  },
];

const DOCS_SIDEBAR: DefaultTheme.SidebarItem[] = [
  {
    items: [
      {
        base: "/es/learning/",
        collapsed: false,
        items: [
          {
            link: "top-level-fields",
            text: "Campos de Nivel Superior",
          },
          {
            link: "sequences-and-flows",
            text: "Secuencias y Flujos",
          },
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
      {
        base: "/es/reference/",
        collapsed: false,
        items: [
          {
            link: "optional-fields",
            text: "Campos Opcionales",
          },
          {
            link: "error-codes",
            text: "Códigos de Error",
          },
          {
            link: "operators",
            text: "Operadores",
          },
          {
            link: "variables",
            text: "Variables",
          },
        ],
        text: "Referencia",
      },
    ],
    text: "Introducción",
  },
  {
    base: "/es/functions/",
    collapsed: false,
    items: FUNCTIONS("es"),
    text: "Funciones",
  },
  {
    items: [
      {
        link: "/es/examples",
        text: "Ejemplos",
      },
    ],
    text: "Misceláneo",
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
];

const DEVELOPER_SPECIFICATION_SIDEBAR: DefaultTheme.SidebarItem[] = [];

export const es = defineConfig({
  lang: "es",
  themeConfig: {
    docFooter: {
      next: "Siguiente",
      prev: "Anterior",
    },
    editLink: {
      pattern: "https://github.com/FancyStudioTeam/YAMLCord/tree/main/docs/:path",
      text: "Editar esta página en GitHub",
    },
    lastUpdated: {
      text: "Última Actualización",
    },
    nav: NAVBAR,
    outline: {
      label: "En esta página",
      level: "deep",
    },
    sidebar: {
      "/es/": DOCS_SIDEBAR,
      "/es/developer-specification/": DEVELOPER_SPECIFICATION_SIDEBAR,
    },
  },
});
