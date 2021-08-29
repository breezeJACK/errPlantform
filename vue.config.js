const regDev = RegExp(/development/);


module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  publicPath: regDev.test(process.env.NODE_ENV) ? "/" : "./",
  productionSourceMap: false,
  //是否使用包含运行时编译器的 Vue 构建版本
  //runtimeCompiler: true,




 
};
