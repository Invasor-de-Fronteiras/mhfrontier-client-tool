import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import tauri from "vite-plugin-tauri";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  publicDir: path.resolve(__dirname, "..", "..", "resources"),
});
