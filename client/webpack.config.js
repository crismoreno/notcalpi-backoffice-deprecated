module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '../../server/public/',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: __dirname + '../../server/public/',
    compress: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000/',
    },
    historyApiFallback: true,
  },
};
