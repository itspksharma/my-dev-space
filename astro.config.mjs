// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; 
import sitemap from '@astrojs/sitemap';



// https://astro.build/config
export default defineConfig({
  site: 'https://www.askdevpk.me',
  integrations: [tailwind(), sitemap()],
  devOptions: {
    toolbar: false  // Disables Astro's built-in dev toolbar
  }
  
});