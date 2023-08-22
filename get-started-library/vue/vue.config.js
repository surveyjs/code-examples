const { defineConfig } = require('@vue/cli-service')
module.exports = {
  chainWebpack: config => {
    config.plugin('optimize-css').tap(([options]) => {
      options.cssnanoOptions.preset[1].calc = false;
      return [options];
    })
  }
}
