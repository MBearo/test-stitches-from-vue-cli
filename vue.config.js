module.exports = {
  chainWebpack: config => {
    config.module
      .rule('rsjs')
      .test(/\.rsjs$/)
      .use('babel-loader')
      .loader('babel-loader')
      .options({
        presets: ['@babel/preset-react']
      })
      .end()
  }
}
