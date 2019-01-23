export const createImageFontLoader = (types) => ({
  test: new RegExp(`\\.\(${ types.join('|') }\)\$`),
  use: {
    loader: 'url-loader',
    options: {
      limit: 8192
    }
  },
  exclude: /node_modules/
});