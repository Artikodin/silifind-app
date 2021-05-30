/** @type {import('@sveltejs/kit').Config} */
const path = require("path");
const vercel = require("@sveltejs/adapter-vercel");

module.exports = {
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
