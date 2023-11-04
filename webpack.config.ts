import path from 'path';

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: ['src', 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ],
  },
}