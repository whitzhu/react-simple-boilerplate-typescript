const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

const DIST_DIR = path.join(__dirname, "/public");
const isProd = process.env.NODE_ENV == "production";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    main: [
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
      "./src/index.tsx"
    ]
  },
  devtool: isProd ? false : "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              ["@babel/preset-env"],
              "@babel/preset-typescript",
              "@babel/preset-react"
            ],
            plugins: ["react-hot-loader/babel"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProd
            }
          },
          "css-loader"
        ]
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
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      ignoreOrder: false
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      },
      canPrint: true
    })
  ]
};
