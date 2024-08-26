import { defineConfig } from "vitepress";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { shared } from "./shared";

export default defineConfig({
  ...shared,
  locales: {
    root: {
      label: "English",
      ...en,
    },
    es: {
      label: "Español",
      ...es,
    },
  },
});
