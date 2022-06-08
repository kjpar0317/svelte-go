import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

const port = process.env.PORT || 8080;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
    dedupe: ["@fullcalendar/common"],
  },
  optimizeDeps: {
    include: ["@fullcalendar/common"],
  },
  server: {
    proxy: {
      "/api": {
        target: `http://127.0.0.1:${port}`,
        changeOrigin: true,
        secure: false,
        ws: true,
        // rewrite: path => path.replace(/^\/api/, "")
      },
    },
  },
});
