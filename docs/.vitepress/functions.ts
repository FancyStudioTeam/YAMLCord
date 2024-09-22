import type { DefaultTheme } from "vitepress";

const OVERLOAD_TRANSLATION: Record<Locales, string> = {
  en: "Overload",
  es: "Sobrecarga",
};

export const FUNCTIONS: (locale: Locales) => DefaultTheme.SidebarItem[] = (locale) => [
  {
    items: [
      {
        collapsed: true,
        items: [
          {
            link: "add-reaction/overload-1",
            text: `${OVERLOAD_TRANSLATION[locale]} 1`,
          },
          {
            link: "add-reaction/overload-2",
            text: `${OVERLOAD_TRANSLATION[locale]} 2`,
          },
        ],
        text: "add_reaction ⚡",
      },
      {
        collapsed: true,
        items: [
          {
            link: "create-message/overload-1",
            text: `${OVERLOAD_TRANSLATION[locale]} 1`,
          },
          {
            link: "create-message/overload-2",
            text: `${OVERLOAD_TRANSLATION[locale]} 2`,
          },
        ],
        text: "create_message ⚡",
      },
      {
        link: "wait",
        text: "wait",
      },
    ],
  },
];

type Locales = "en" | "es";
