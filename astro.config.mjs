// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://weenas.com",
  // Pages are built as /index.html and /zh/index.html, served at / and /zh/.
  trailingSlash: "always",
  // The stylesheet is small: inline it so it doesn't block the first paint.
  build: { format: "directory", inlineStylesheets: "always" },
});
