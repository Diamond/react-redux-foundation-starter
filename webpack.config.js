var path = require("path");
console.log(__dirname);
module.exports = {
  entry: {
    app: './src/app.jsx'
  },
  output: {
    filename: 'public/[name].js'
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ],
    sassLoader: {
      includePaths: [path.resolve(__dirname, "../node_modules/foundation-sites/scss/")]
    }
  }
};
