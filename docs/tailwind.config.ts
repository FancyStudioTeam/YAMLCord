import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./**/*.md"],
  darkMode: "selector",
  plugins: [plugin(({ addVariant }) => addVariant("light", "html:not(.dark) &"))],
  theme: {
    fontFamily: {
      mono: ["JetBrains Mono Variable", "monospace"],
      sans: ["Plus Jakarta Sans Variable", "sans-serif"],
    },
  },
} satisfies Config;
