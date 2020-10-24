module.exports={
  configureWebpack:{
    resolve:{
      extensions:[],
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'networks':'@/networks',
        'views':'@/views',

      }
    }
  }
}