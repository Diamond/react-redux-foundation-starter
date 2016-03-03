module.exports = {
  //foundationCustomizations: "./src/_settings.scss",
  mainSass: "./src/app.scss", // path to your main SASS file (optional)
  verbose: true, // print out your custom files used
  debug: false, // print out the full generated scss file
  styleLoader: "style-loader!css-loader!sass-loader", // see example for the ExtractTextPlugin
  scripts: {
    // add every foundation script you need
    'foundation.core': true,
    'foundation.accordion': true
  },
  styles: {
    // add every foundation style you need
    'mixins': true,
    'normalize': true,
    'print': true,
    'glyphicons': true
  }
};
