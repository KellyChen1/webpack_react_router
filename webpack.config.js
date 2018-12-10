var path = require('path');
var webpack = require('webpack');
console.log(path.resolve(__dirname,'./build'),'llalla')
module.exports={
  devtool:"eval-source-map",
  entry:['webpack/hot/dev-server',__dirname+ '/src/main.js'],
  output:{
    path: __dirname + '/build',
    filename:'bundle.js',
    // publicPath:'/',
  },
  devServer:{
    inline:true,
    port:3000
  },
  module:{
    rules:[
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
]
}
