import Vue from 'vue'
import App from './App.vue'
// 1.1导入路由的包
import VueRouter from 'vue-router';
// 1.2安装路由
Vue.use(VueRouter);
// 1.3 导入自己的 router.js 模块
import router from './router/router.js';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
