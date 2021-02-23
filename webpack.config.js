const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index_wp.ts'),
  //entry: './src/index_wp.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};