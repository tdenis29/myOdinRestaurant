
const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // styles: path.join(__dirname, 'styles'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        type: 'asset/resource',
    },
  //   {
  //     test: /\.(html)$/,
  //     use: {
  //         loader: 'html-loader',
  //         options: {
  //             sources: true,
  //         }
  //     }
  // }
    ]
  },
  // plugins: [new HtmlWebpackPlugin({
  //   template: "./src/template.html"
  // })],
  resolve: {
    alias: {
      'core': path.resolve(__dirname, './core/styles')
    }
  }
}
