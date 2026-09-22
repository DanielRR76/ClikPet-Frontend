import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": fileURLToPath(new URL("./src/api/index.ts", import.meta.url)),
      "@app/styles.css": fileURLToPath(
        new URL("./src/app/styles/index.css", import.meta.url),
      ),
      "@app": fileURLToPath(new URL("./src/app/index.ts", import.meta.url)),
      "@layouts": fileURLToPath(
        new URL("./src/layouts/index.ts", import.meta.url),
      ),
      "@router": fileURLToPath(
        new URL("./src/router/index.ts", import.meta.url),
      ),
      "@shared": fileURLToPath(
        new URL("./src/shared/index.ts", import.meta.url),
      ),
      "@stores": fileURLToPath(
        new URL("./src/stores/index.ts", import.meta.url),
      ),
    },
  },
});
