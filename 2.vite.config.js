// 2.vite.config.js
const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },

  build: {
    // this building a library is from this website: https://andrewwalpole.com/blog/use-vite-for-javascript-libraries/
    /*
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'webflow_js_library',
      fileName: (format) => `webflow_js_library.${format}.js`
    },
    */
    // I put this back from the original webflow + vite.js file.
    rollupOptions: {
      input: 'lib/example_1.js',
      output: {
        dir: 'dist/example_1', // Output directory unique to this build
        format: 'es',
        entryFileNames: '[name].js',
        esModule: false,
        compact: true,
        globals: {
          jquery: '$',
        },
      },
      external: ['jquery'],
    },
  },
})

/* 
// original vite.config.js code below
// vite.config.js
export default defineConfig({
  plugins: [eslintPlugin({ cache: false })],
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      input: './src/main.js',
      output: {
        format: 'umd',
        entryFileNames: 'main.js',
        esModule: false,
        compact: true,
        globals: {
          jquery: '$',
        },
      },
      external: ['jquery'],
    },
  },
})
*/
