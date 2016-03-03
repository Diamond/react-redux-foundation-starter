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
        loaders: ["style", "css", "sass?includePaths[]=./node_modules/foundation-sites/scss/"]
      }
    ]
  }
};
