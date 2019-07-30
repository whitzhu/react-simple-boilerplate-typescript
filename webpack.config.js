const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const DIST_DIR = path.join(__dirname, "/public");
const isProd = process.env.NODE_ENV == "production";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/index.tsx",
  devtool: isProd ? false : "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat",
      components: path.resolve(__dirname, "./src/components")
    }
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
