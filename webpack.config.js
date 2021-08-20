const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },

  devServer: {
    port: 9090,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Toxin",
      template: "./index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "HeadersFooters.html",
      title: "Toxin",
      template: "./HeadersFooters.html"
    }),
    new CleanWebpackPlugin()
  ]
}
