module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: 8080,
        proxy: {
            "/api": {
              target: "http://127.0.0.1:3000", // 接口地址
              ws: true, // 是否启用websockets
              changOrigin: true, //允许跨域  Origin源127.0.0.1:9000
              pathRewrite: {
                "^/api": ""  //请求的时候使用这个/api前缀就可以
              }
            }
          }
    },
}