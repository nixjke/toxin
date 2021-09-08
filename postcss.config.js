module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-combine-media-query'),
    require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
}