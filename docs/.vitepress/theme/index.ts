import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/plus-jakarta-sans";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import { h } from "vue";
import "./style.css";

// biome-ignore lint/style/noDefaultExport:
export default (<Theme>{
  extends: DefaultTheme,
  // biome-ignore lint/style/useNamingConvention:
  Layout: () => h(DefaultTheme.Layout, null),
});
