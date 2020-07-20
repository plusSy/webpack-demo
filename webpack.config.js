const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ConsoleLogOnBuildWebpackPlugin = require("./plugins/ConsoleLogOnBuildWebpackPlugin/index.js");

module.exports = {
  mode: process.env.NODE_ENV,
  target: "node",
  entry: {
    main: './src/entry.js',
    app: './src/app/main.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      { test: /\.css$/, use: [
        {
          loader: "css-loader",
          options: {
            modules: true
          }
        }
      ] },
      { test: /\.ts$/, use: "ts-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"}),
    new ConsoleLogOnBuildWebpackPlugin({"options": "fuck u"})
  ]
}