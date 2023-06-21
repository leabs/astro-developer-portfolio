import image from "@astrojs/image";

import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [image(), react()]
});