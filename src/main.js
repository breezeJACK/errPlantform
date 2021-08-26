import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// require("element-ui/lib/theme-chalk/index.css");
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')