const path = require('path')
module.exports = {
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
    }
  }
}
