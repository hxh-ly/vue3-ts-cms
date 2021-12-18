const path = require('path')
module.exports = {
  publicPath: './',
  lintOnSave: false,
  // 1 vue-cli的方法
  // 3 链式
  /*
  chainWebpack:(config)=>{
    config.resolve.alias.set('@',path.resolve(__dirname,'src'))
    .set('components','@/components')
  }
   */
  configureWebpack: {
    resolve: {
      alias: {
        a: path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, '@/components')
      }
    },
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://152.136.185.210:5000',
          pathRewrite: {
            '^/api': ''
          },
          changeOrigin: true
        }
      }
    }
  }
}
