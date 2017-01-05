// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import Home from './components/Home'
import My from './components/My'
import Rent from './components/Rent'
import Store from './components/Store'
import Category from './components/Category'
import OutDate from './components/OutDate'
import Account from './components/Account'
import Setting from './components/Setting'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(MintUI)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/store',
  component: Store
}, {
  path: '/home',
  component: Home
}, {
  path: '/my',
  component: My
}, {
  path: '/my/rent',
  component: Rent
}, {
  path: '/my/outdate',
  component: OutDate
}, {
  path: '/my/account',
  component: Account
}, {
  path: '/my/setting',
  component: Setting
}, {
  path: '/category',
  component: Category
}]

const router = new VueRouter({ routes })

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
