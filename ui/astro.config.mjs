import { defineConfig } from "astro/config";

import node from '@astrojs/node';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), preact()],
  adapter: node({
      mode: 'standalone',
    }),
});
