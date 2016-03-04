var webpack = require('webpack');
module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
  entry: {
    app: ['./public/index.html', './src/app.jsx']
  },
  output: {
    filename: '../js/[name].js',
    path: './public/assets/static'
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
        loaders: ["style", "css", "sass?includePaths[]=./node_modules/foundation-sites/scss/&includePaths[]=./node_modules/motion-ui/src"]
      },
      { test: /.html$/, loader: 'file-loader' },
      { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
