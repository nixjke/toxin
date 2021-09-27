const faviconsContext = require.context(
  `!!file-loader?name=favicons/[name].[ext]!.`,
  true,
  /\.(svg|png|ico|xml|json|webmanifest)$/
)

faviconsContext.keys().forEach(faviconsContext)