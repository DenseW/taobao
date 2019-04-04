import Vue from 'vue'
import App from './App.vue'

import router from './js/router.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './css/iconfont.css'

import '../node_modules/mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)



import axios from 'axios';
Vue.prototype.$http = axios

import Vuex from 'vuex'
Vue.use(Vuex)

import store from './js/ware.js'

import './css/css.css'
 



new Vue({
  el: '#app',
  render: h => h(App),
	router,
	store
})
