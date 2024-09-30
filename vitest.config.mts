import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// biome-ignore lint/style/noDefaultExport:
export default defineConfig({
  plugins: [tsconfigPaths({ projects: ["./tsconfig.json"] })],
});
