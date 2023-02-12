import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "app-one",
  server: {
    port: 6201,
  },
  build: {
    emptyOutDir: true,
    outDir: "../../dist/apps/app-one",
  },
});
