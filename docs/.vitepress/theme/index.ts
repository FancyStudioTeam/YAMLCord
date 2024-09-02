import "@fontsource/jetbrains-mono/700.css";
import "@fontsource-variable/plus-jakarta-sans";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import { h } from "vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {}),
} satisfies Theme;
