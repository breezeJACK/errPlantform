const Koa = require("koa")
const fs = require("fs")
const app = new Koa()

app.use(ctx => {
    const content = fs.readFileSync("./app.43e94a32.js.map")
    ctx.body = content
})

app.listen(3001);