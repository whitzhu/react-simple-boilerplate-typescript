const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const DIST_DIR = path.join(__dirname, "/public");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: DIST_DIR,
    publicPath: "/",
    filename: "js/[name].js"
  },
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    port: 8000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
