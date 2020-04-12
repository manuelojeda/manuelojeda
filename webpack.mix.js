const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

mix.ts('resources/js/app.ts', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')]
  })
  .webpackConfig(webpack => ({
    output: {
      chunkFilename: 'js/[name].js'
    }
  }))
  .disableNotifications()
