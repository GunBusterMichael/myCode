const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        // 下面一行是正则表达式，匹配.css后缀的文件
        test: /\.css$/,

        /*
          css-loader 只负责加载 css 文件；
          style-loader 负责将样式添加到 DOM 中。

          使用多个 loader 时，会从右往左使用。
        */
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              /*
                当被加载的图片大小小于 limit 时，会被编译成 base64 字符串形式；
                当被加载的图片大小大于 limit 时，就需要使用 file-loader 进行加载。
              */
              limit: 13000, // 初始 limit: 8192
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // 引入文件时，下列三个后缀名可以省略
    extensions: ['.css', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
}