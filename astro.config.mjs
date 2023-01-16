import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://sns.dev",
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  integrations: [react()]
});