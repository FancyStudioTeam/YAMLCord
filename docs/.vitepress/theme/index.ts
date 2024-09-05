import "@fontsource/jetbrains-mono/700.css";
import "@fontsource-variable/plus-jakarta-sans";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import "./style.css";

export default (<Theme>{
  extends: DefaultTheme,
});
