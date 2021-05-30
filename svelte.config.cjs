/** @type {import('@sveltejs/kit').Config} */
const vercel = require("@sveltejs/adapter-vercel");
const path = require("path");

module.exports = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: vercel(),
    vite: {
      resolve: {
        alias: {
          $assets: path.resolve("./src/assets")
        }
      }
    }
  }
};
