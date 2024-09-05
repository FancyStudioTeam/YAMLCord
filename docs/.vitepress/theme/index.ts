import "@fontsource/jetbrains-mono/700.css";
import "@fontsource-variable/plus-jakarta-sans";
import "./style.css";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import { h } from "vue";

export default (<Theme>{
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null),
});
