// eslint-disable-next-line import/no-extraneous-dependencies
const mix = require('laravel-mix');
const path = require('path');
require('laravel-mix-polyfill');

mix.ts('resources/js/app.ts', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  // .polyfill({
  //   enabled: true,
  //   useBuiltIns: 'usage',
  //   targets: { firefox: '50', ie: 11 }
  // })
  // .extract()
  // .version()
  .options({
    processCssUrls: false,
    terser: {},
  })
  .webpackConfig(() => ({
    output: {
      chunkFilename: 'async/[name].js',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './resources/js'),
      },
    },
  }))
  // .babelConfig({
  //   plugins: ['@babel/plugin-syntax-dynamic-import']
  // })
  .disableNotifications();
