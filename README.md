# err-plantform

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## 操作步骤

1. 在本地打正式包时备份.map文件

​	 在vue.config中注销productionSourceMap：false（得到map文件后需恢复）

2. 在mian.js中加入如下代码

   ```js
   
   if (!regDev.test(process.env.NODE_ENV)) {
     Vue.config.errorHandler = (err, vm, info) => {
       const parseError = ErrorStackParser.parse(err);
       console.log(parseError, "err");
       console.log(vm, "vm");
       console.log(info, "info");
     }
   }
   
   
   ```

   打包更新至环境中，此时环境中报错会显示成堆栈信息

   ![1629967142301](C:\Users\mayn\AppData\Roaming\Typora\typora-user-images\1629967142301.png)

3. 启动程序，输入对应信息，上传对应的map文件，显示对应映射的错误位置

   ![1629967406466](C:\Users\mayn\AppData\Roaming\Typora\typora-user-images\1629967406466.png)