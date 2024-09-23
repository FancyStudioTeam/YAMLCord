import { defineConfig } from "vitepress";
import { en } from "./locales/en.js";
import { es } from "./locales/es.js";
import { shared } from "./shared.js";

// biome-ignore lint/style/noDefaultExport:
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
