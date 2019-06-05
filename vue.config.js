const path=require('path')

function resolve(dir){
  return  path.join(__dirname,dir)
}

module.exports={
  devServer:{
    port:8888,
    proxy:{
      '/api':{
        target:'http://47.95.207.1:3000',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@',resolve('./src'))
    .set('style',resolve('./src/common/style'))
    .set('pages',resolve('./src/components/pages'))
    .set('base',resolve('./src/components/base'))
    .set('node_modules',resolve('./node_modules'))
    .set('common',resolve('./src/common'))

  }
}