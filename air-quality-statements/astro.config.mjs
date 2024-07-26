import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  base: process.env.BASE_URL || '/',
  integrations: [react(),pagefind()]
});
