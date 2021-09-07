import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from "@/test/test"

Vue.use(VueRouter)

const routes = [
    {
        path: '/test',
        name: 'test',
        component: Test
    },]
   

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router