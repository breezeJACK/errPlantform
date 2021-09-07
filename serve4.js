const Koa = require("koa")

const app = new Koa()
const path = require('path');
const serve = require('koa-static');
const main = serve(path.join(__dirname + '/src'))
app.use(main);
app.listen(3003, () => {
    console.log("3003端口 已启动")
});