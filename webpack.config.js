var path = require("path");
console.log(__dirname);
module.exports = {
  entry: {
    app: './src/app.jsx'
  },
  output: {
    filename: 'public/[name].js'
  },
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
        loaders: ["style?includePaths[]=./node_modules/foundation-apps/scss/", "css?includePaths[]=./node_modules/foundation-apps/scss/", "sass?includePaths[]=./node_modules/foundation-apps/scss/"]
      }
    ]
  }
};
