// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // ✅ correct import



// https://astro.build/config
export default defineConfig({
  // ✅ correct usage
  integrations: [tailwind()],
  devOptions: {
    toolbar: false  // Disables Astro's built-in dev toolbar
  }
  
});