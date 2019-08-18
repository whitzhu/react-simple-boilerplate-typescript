const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

require("dotenv").config();

if (process.env.NODE_ENV == "development") {
  const webpackConfig = require("../webpack.config");
  const webpack = require("webpack");
  const compiler = webpack(webpackConfig);
  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );
  app.use(require("webpack-hot-middleware")(compiler));
}

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

app.listen(port, () => console.log(`App is listening on port ${port}!`));
