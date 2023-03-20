import image from "@astrojs/image";

// https://astro.build/config
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    image(),
    react(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          // Content collections
        ],
      },
    }),
  ],
});
