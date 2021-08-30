const regDev = RegExp(/development/);
const requestUrl = "http://localhost:3030"

module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  publicPath: regDev.test(process.env.NODE_ENV) ? "/" : "./",
  productionSourceMap: false,
  //是否使用包含运行时编译器的 Vue 构建版本
  //runtimeCompiler: true,

  devServer: {
    port: 8089,
    host: "0.0.0.0",
    open: true,
    proxy: {
      "/": {
        target: `${requestUrl}`,
        changeOrigin: true,
        pathRewrite: {
          "^/": "/",
        },
        ws: false,
      },
    
    },
  },


 
};
