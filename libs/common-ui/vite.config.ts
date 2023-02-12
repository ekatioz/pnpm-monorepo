/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  cacheDir: "../../node_modules/.vite/common-ui",

  plugins: [react()],

  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest",
    },
    environment: "jsdom",
    coverage: {
      provider: "c8",
      reporter: ["text", "html"],
      reportsDirectory: "../../dist/coverage/common-ui",
    },
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
