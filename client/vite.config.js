import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    publicDir:  path.resolve(__dirname, "src", 'public'),
  },
  plugins: [react()],
  server: {
    port: 8080,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});

