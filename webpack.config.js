require('dotenv').config();
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: 'node',
  entry: {
    server: './src/server/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};
