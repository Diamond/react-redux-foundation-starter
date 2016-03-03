var webpack = require('webpack');
module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
  entry: {
    app: './src/app.jsx'
  },
  output: {
    filename: 'public/[name].js'
  },
  module: {
    noParse: [
      /[\/\\]node_modules[\/\\]jquery[\/\\]dist[\/\\]jquery\.min\.js$/
    ],
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
