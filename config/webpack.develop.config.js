let path = require('path');
let webpack = require('webpack');
let HtmlPlugin = require('html-webpack-plugin');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');
let customPath = require('./paths');
let { createImageFontLoader } = require('./env'); 

module.exports = {
  // 设置入口模块路径
  entry: customPath.ENTRANCE_FILE,
  
  // 设置输出路径及其打包文件
  output: {
    path: customPath.OUTPUT_DIR,
    publicPath: './',
    filename: 'bundle.js'
  },
  
  // 设置查找模块对应的文件
  resolve: {
    // 设置模块默认后缀名
    extensions: [ '*', '.js', '.jsx', '.json' ],
    
    // 设置模块别名，利于书写
    alias: {
      '@/pages': customPath.PAGE_COM,
      '@/layouts': customPath.LAYOUT_COM,
      '@/components': customPath.UI_COM,
      '@/hocs': customPath.HOC_COM,
      '@/utils': customPath.UTIL_DIR,
      '@/styles': customPath.STYLE_DIR,
      '@/asserts': customPath.ASSERT_DIR
    }
  },
  
  // 打包各种模块
  module: {
    rules: [{
      test: /\.jsx?$/i,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ 'env', 'react' ],
          plugins: [ 'transform-object-rest-spread', 'transform-class-properties' ]
        }
      }
    }, {
      test: /\.css$/i,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        // 开启CSS Modules
        options: {
          modules: true,
          localIdentName: '[local]-[name]__[hash:base64:5]'
        }
      }]
    }, 
    createImageFontLoader([ 'png', 'gif', 'jpg', 'jpeg', 'bmp' ]), 
    createImageFontLoader([ 'woff', 'woff2', 'svg', 'ttf', 'eot' ])]    
  },
  
  // 设置断点调试
  devtool: 'eval-source-map',
  
  // 设置web服务器
  devServer: {
    host: 'localhost',
    port: 7878,
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  
  // 插件处理
  plugins: [
    // 生成创建好html根节点，并且对打包模块引用的html文件
    new HtmlPlugin({
      filename: 'index.html',
      //favicon: 'xx',
      inject: true
    }),
    
    // 自动打开浏览器
    new OpenBrowserPlugin({ url: 'http://localhost:7878' }),
    
    // 开启热加载
    new webpack.HotModuleReplacementPlugin(),
    
    // 定义环境变量
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify('develop')
    })
  ]
};
