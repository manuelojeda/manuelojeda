/* eslint-disable no-unused-vars */
import Vue from 'vue'
import './plugins/CompositionApi'
import './plugins/Typography'

import PublicLayout from './layouts/Public.vue'
import PublicHeader from './components/public/PxHeader.vue'

Vue.component('public-layout', PublicLayout)
Vue.component('public-header', PublicHeader)

Vue.component('public-index', () => import(/* webpackChunkName: "PublicIndex" */ './pages/Public/Index.vue'))
Vue.component('education', () => import(/* webpackChunkName: "Education" */ './pages/Public/Education.vue'))

const app = new Vue({
  el: '#app'
})
