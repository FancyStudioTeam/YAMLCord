import { type DefaultTheme, defineConfig } from "vitepress";
import { FUNCTIONS } from "../functions.js";

const NAVBAR: DefaultTheme.NavItem[] = [
  {
    link: "/team",
    text: "Our Team",
  },
  {
    link: "/developer-specification",
    text: "Developer Specification",
  },
];

const DOCS_SIDEBAR: DefaultTheme.SidebarItem[] = [
  {
    items: [
      {
        base: "/learning/",
        collapsed: false,
        items: [
          {
            link: "top-level-fields",
            text: "Top Level Fields",
          },
          {
            link: "sequences-and-flows",
            text: "Sequences and Flows",
          },
          {
            link: "data-types",
            text: "Data Types",
          },
          {
            link: "conditionals",
            text: "Conditionals",
          },
        ],
        text: "Learning",
      },
      {
        base: "/reference/",
        collapsed: false,
        items: [
          {
            link: "optional-fields",
            text: "Optional Fields",
          },
          {
            link: "error-codes",
            text: "Error Codes",
          },
          {
            link: "operators",
            text: "Operators",
          },
          {
            link: "variables",
            text: "Variables",
          },
        ],
        text: "Reference",
      },
    ],
    text: "Introduction",
  },
  {
    base: "/functions/",
    collapsed: false,
    items: FUNCTIONS("en"),
    text: "Functions",
  },
  {
    items: [
      {
        link: "https://discord.gg/yWjeDA6ewJ",
        target: "_blank",
        text: "Discord Server",
      },
      {
        link: "https://github.com/FancyStudioTeam/YAMLCord",
        target: "_blank",
        text: "GitHub Repository",
      },
    ],
    text: "Useful Links",
  },
];

const DEVELOPER_SPECIFICATION_SIDEBAR: DefaultTheme.SidebarItem[] = [];

export const en = defineConfig({
  lang: "en",
  themeConfig: {
    docFooter: {
      next: "Next",
      prev: "Previous",
    },
    editLink: {
      pattern: "https://github.com/FancyStudioTeam/YAMLCord/tree/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      text: "Last Updated",
    },
    nav: NAVBAR,
    outline: {
      label: "On this page",
      level: "deep",
    },
    sidebar: {
      "/": DOCS_SIDEBAR,
      "/developer-specification/": DEVELOPER_SPECIFICATION_SIDEBAR,
    },
  },
});
