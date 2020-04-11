const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig(webpack => ({
      output: {
        chunkFilename: 'js/[name].js'
      }
    }))
   .disableNotifications();
