const path = require('path')
const fs = require('fs')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const getFiles = (dir, fileType) => {
  return dir.map(folder => {
    const folderPath = `${PAGES_DIR}/${folder}`
    const folderFiles = fs.readdirSync(folderPath)
    const pageFile = folderFiles.find(fileName => fileName.endsWith(`.${fileType}`))
    return pageFile
  })
}

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
}

const PAGES_DIR = `${PATHS.src}/pages`
const PAGE_FOLDERS = fs.readdirSync(PAGES_DIR)
const PAGES = getFiles(PAGE_FOLDERS, 'pug')
const ENTRY_FILES = getFiles(PAGE_FOLDERS, 'js')
const ENTRYS = {}

ENTRY_FILES.forEach((entryFile, index) => {
  const fileName = entryFile.split('.')[0]
  ENTRYS[fileName] = `${PAGES_DIR}/${PAGE_FOLDERS[index]}/${entryFile}`
})

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  externals: {
    paths: PATHS,
  },
  entry: ENTRYS,
  output: {
    filename: `js/[name].min.js`,
    path: PATHS.dist,
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        oneOf: [
          {
            use: ['pug-loader'],
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]',
          },
        ],
      },
      {
        test: /(\.(png|jpe?g|gif)$|^((?!font).)*\.svg$)/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              name: '[name]-[sha1:hash:7].[ext]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: `./postcss.config.js` } },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              root: `${PATHS.src}/style`,
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: `./postcss.config.js` } },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              root: path.join(__dirname, 'src'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new CleanWebpackPlugin(),
    new LiveReloadPlugin({ appendScriptTag: true }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/fonts`, to: `fonts` },
        { from: `${PATHS.src}/favicons`, to: 'favicons' },
        { from: `${PATHS.src}/img`, to: `img` },
      ],
    }),
    ...PAGES.map(
      (page, index) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${PAGE_FOLDERS[index]}/${page}`,
          filename: `./${page.replace(/\.pug/, '.html')}`,
          chunks: [`${page.replace(/\.pug/, '')}`],
        })
    ),
  ],
}
