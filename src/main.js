import Vue from 'vue'
import App from './App.vue'
// const regDev = RegExp(/development/);
Vue.config.productionTip = false
import ErrorStackParser from "error-stack-parser"
import $axios from "../api"
// require("element-ui/lib/theme-chalk/index.css");
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// if (!regDev.test(process.env.NODE_ENV)) {
  Vue.config.errorHandler = (err, vm, info) => {
    const parseError = ErrorStackParser.parse(err);
    console.log(parseError, "err");
    console.log(vm, "vm");
    console.log(info, "info");
  }
// }

Vue.prototype.$axios =$axios

new Vue({
  render: h => h(App),
}).$mount('#app')