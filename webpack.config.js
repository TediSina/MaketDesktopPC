module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.(png|jpe?g|gif|glb|gltf)$/i,
        loader: 'file-loader',
        options: {
          publicPath: './',
          name: '[name].[ext]'
        },
      },
    ],
  },
};
