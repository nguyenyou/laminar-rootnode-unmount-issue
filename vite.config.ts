import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: process.env.PAGES_BASE_PATH || "/",
  build: {
    minify: false,
  },
});
