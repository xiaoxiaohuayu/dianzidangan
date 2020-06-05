// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Router from 'vue-router' //在router文件下的index.js
import echarts from 'echarts'
import ElementUI from 'element-ui'
import axiosApi from '@/api/axios.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/reset.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.use(echarts);//后期可以使用vue-echarts，按需引入
Vue.use(ElementUI);
// Vue.use(Router);
Vue.use(axiosApi);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
