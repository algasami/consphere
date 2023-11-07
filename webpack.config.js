const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const generateHtmlPlugin = (title) => {
  return new htmlWebpackPlugin({
    title,
    filename: `${title.toLowerCase()}.html`,
    template: `./src/pages/${title.toLowerCase()}/${title.toLowerCase()}.html`,
    chunks: ["main", title.toLowerCase()]
  });
}

const populateHtmlPlugins = (pagesArray) => {
  res = [];
  pagesArray.forEach(page => {
    res.push(generateHtmlPlugin(page));
  })
  return res;
}

const populateEntries = (pagesArray) => {
  res = {};
  res["main"] = "./src/main.ts";
  pagesArray.forEach(page => {
    res[page.toLowerCase()] = `./src/pages/${page.toLowerCase()}/${page.toLowerCase()}.ts`;
  })
  return res;
}

const pages = ["Index", "Home"]

module.exports = {
  entry: populateEntries(pages),
  devtool: 'inline-source-map',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: populateHtmlPlugins(pages)
};