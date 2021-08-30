const Koa = require("koa")
const app = new Koa()
const Router  =require("koa-router")
const router = new Router()

router.get("/err",(ctx,next)=>{
    ctx.response.status =403
    next()
})

app.use(router.routes())

app.listen(3030);