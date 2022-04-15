const sveltePreprocess = require("svelte-preprocess");
const path = require("path");
const alias = require("@rollup/plugin-alias");

module.exports = {
  preprocess: sveltePreprocess(),
  plugins: [
    alias({
      entries: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src/")
        }
      ]
    }),
  ]
};
