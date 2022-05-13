import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* ElementUI */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

/* 请求方法 插件的制作 调用的时候就不用导入了  直接this.postRequest('',params).then(resp=>{....})*/
import {postKeyValueRequest} from './utils/api'
import {postRequest} from './utils/api'
import {putRequest} from './utils/api'
import {getRequest} from './utils/api'
import {deleteRequest} from './utils/api'
Vue.prototype.postKeyValueRequest=postKeyValueRequest
Vue.prototype.postRequest=postRequest
Vue.prototype.putRequest=putRequest
Vue.prototype.getRequest=getRequest
Vue.prototype.deleteRequest=deleteRequest


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
