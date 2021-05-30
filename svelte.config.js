/** @type {import('@sveltejs/kit').Config} */
import path from "path";
import vercel from "@sveltejs/adapter-vercel";

export default {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: {
      resolve: {
        alias: {
          $assets: path.resolve("./src/assets")
        }
      }
    },
    adapter: vercel()
  }
};
