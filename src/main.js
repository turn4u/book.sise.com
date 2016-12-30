// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import Home from './components/Home'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(MintUI)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/home',
  component: Home
}]

const router = new VueRouter({ routes })

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')