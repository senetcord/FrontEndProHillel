const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    path: path.join(__dirname, "src", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 9000,
    client: {
      reconnect: true,
    },
  },
};
