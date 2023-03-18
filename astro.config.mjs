import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), react()]
});