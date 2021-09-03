const Koa = require("koa")
const fs = require("fs")
const app = new Koa()
const Router = require("koa-router")
const router = new Router()



//配置中间件
router.use((ctx, next) => {
    const files = fs.readdirSync("./dist/static/js")
    ctx.state.files = files
    console.log(files, "files2")
    next()
})


router.get("/:filename", (ctx, next) => {
    const {
        filename
    } = ctx.params
    ctx.state.files.forEach(file => {
        if (file.substring(0, file.indexOf(".")) === filename && file.substring(file.lastIndexOf(".") + 1) === "map") {
            ctx.body = fs.readFileSync("./dist/static/js/" + file)
        }
    })
    next()
})

app.use(router.routes())

app.listen(3001, () => {
    console.log("端口3001 已启动")
});